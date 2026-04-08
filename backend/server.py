from dotenv import load_dotenv
from pathlib import Path
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from fastapi import FastAPI, APIRouter, HTTPException, Request, UploadFile, File, Depends
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os, logging, uuid, secrets, shutil
from datetime import datetime, timezone, timedelta
from pydantic import BaseModel, Field
from typing import List, Optional
import bcrypt
import jwt

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

JWT_ALGORITHM = "HS256"
def get_jwt_secret(): return os.environ["JWT_SECRET"]

# ── Password Hashing ──
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))

# ── JWT ──
def create_access_token(user_id: str, email: str) -> str:
    return jwt.encode({"sub": user_id, "email": email, "exp": datetime.now(timezone.utc) + timedelta(hours=24), "type": "access"}, get_jwt_secret(), algorithm=JWT_ALGORITHM)

def create_refresh_token(user_id: str) -> str:
    return jwt.encode({"sub": user_id, "exp": datetime.now(timezone.utc) + timedelta(days=7), "type": "refresh"}, get_jwt_secret(), algorithm=JWT_ALGORITHM)

# ── Auth Helper ──
async def get_current_user(request: Request) -> dict:
    token = request.cookies.get("access_token")
    if not token:
        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            token = auth[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, get_jwt_secret(), algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        user = await db.users.find_one({"_id": ObjectId(payload["sub"])})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        user["_id"] = str(user["_id"])
        user.pop("password_hash", None)
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

async def require_admin(request: Request) -> dict:
    user = await get_current_user(request)
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

# ── Models ──
class LoginInput(BaseModel):
    email: str
    password: str

class ContactSubmissionCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = ""
    description: str

class BlogArticleCreate(BaseModel):
    title: str
    slug: str
    category: str
    excerpt: str
    content: List[dict]  # [{type: "heading"|"paragraph", text: "..."}]
    image: Optional[str] = ""
    read_time: Optional[str] = "5 min read"
    status: Optional[str] = "draft"  # draft | published | scheduled
    scheduled_at: Optional[str] = None

class BlogArticleUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    category: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[List[dict]] = None
    image: Optional[str] = None
    read_time: Optional[str] = None
    status: Optional[str] = None
    scheduled_at: Optional[str] = None

class CaseStudyCreate(BaseModel):
    title: str
    slug: str
    client: str
    industry: str
    hero_desc: str
    challenge: str
    solution: str
    results: List[dict]
    tech_stack: List[str]
    features: List[str]
    image: Optional[str] = ""

class TestimonialCreate(BaseModel):
    name: str
    role: str
    text: str

class JobCreate(BaseModel):
    title: str
    department: str
    location: str
    type: str
    experience: str
    description: str
    responsibilities: List[str]
    requirements: List[str]
    status: Optional[str] = "active"

# ── Auth Routes ──
@api_router.post("/auth/login")
async def login(input: LoginInput, request: Request):
    email = input.email.strip().lower()
    ip = request.client.host if request.client else "unknown"
    identifier = f"{ip}:{email}"
    # Brute force check
    attempts = await db.login_attempts.find_one({"identifier": identifier})
    if attempts and attempts.get("count", 0) >= 5:
        last = attempts.get("last_attempt", datetime.now(timezone.utc))
        if isinstance(last, str):
            last = datetime.fromisoformat(last)
        if datetime.now(timezone.utc) - last < timedelta(minutes=15):
            raise HTTPException(status_code=429, detail="Too many attempts. Try again in 15 minutes.")
        else:
            await db.login_attempts.delete_one({"identifier": identifier})
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(input.password, user.get("password_hash", "")):
        await db.login_attempts.update_one({"identifier": identifier}, {"$inc": {"count": 1}, "$set": {"last_attempt": datetime.now(timezone.utc).isoformat()}}, upsert=True)
        raise HTTPException(status_code=401, detail="Invalid email or password")
    await db.login_attempts.delete_one({"identifier": identifier})
    uid = str(user["_id"])
    access = create_access_token(uid, email)
    refresh = create_refresh_token(uid)
    resp = JSONResponse(content={"id": uid, "email": user["email"], "name": user.get("name", ""), "role": user.get("role", "user")})
    resp.set_cookie(key="access_token", value=access, httponly=True, secure=False, samesite="lax", max_age=86400, path="/")
    resp.set_cookie(key="refresh_token", value=refresh, httponly=True, secure=False, samesite="lax", max_age=604800, path="/")
    return resp

@api_router.post("/auth/logout")
async def logout():
    resp = JSONResponse(content={"message": "Logged out"})
    resp.delete_cookie("access_token", path="/")
    resp.delete_cookie("refresh_token", path="/")
    return resp

@api_router.get("/auth/me")
async def get_me(request: Request):
    user = await get_current_user(request)
    return user

# ── Contact ──
@api_router.post("/contact")
async def create_contact(input: ContactSubmissionCreate):
    doc = {"id": str(uuid.uuid4()), **input.model_dump(), "created_at": datetime.now(timezone.utc).isoformat()}
    await db.contact_submissions.insert_one(doc)
    return {k: v for k, v in doc.items() if k != "_id"}

@api_router.get("/contact")
async def get_contacts(request: Request):
    await require_admin(request)
    return await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)

# ── Blog Articles ──
@api_router.get("/blog")
async def get_blog_articles(status: Optional[str] = None):
    query = {}
    if status:
        query["status"] = status
    articles = await db.blog_articles.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return articles

@api_router.get("/blog/{slug}")
async def get_blog_article(slug: str):
    article = await db.blog_articles.find_one({"slug": slug}, {"_id": 0})
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    await db.blog_articles.update_one({"slug": slug}, {"$inc": {"views": 1}})
    return article

@api_router.post("/blog")
async def create_blog_article(input: BlogArticleCreate, request: Request):
    await require_admin(request)
    existing = await db.blog_articles.find_one({"slug": input.slug})
    if existing:
        raise HTTPException(status_code=400, detail="Slug already exists")
    doc = {"id": str(uuid.uuid4()), **input.model_dump(), "views": 0, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()}
    await db.blog_articles.insert_one(doc)
    return {k: v for k, v in doc.items() if k != "_id"}

@api_router.put("/blog/{article_id}")
async def update_blog_article(article_id: str, input: BlogArticleUpdate, request: Request):
    await require_admin(request)
    updates = {k: v for k, v in input.model_dump().items() if v is not None}
    updates["updated_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.blog_articles.update_one({"id": article_id}, {"$set": updates})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return await db.blog_articles.find_one({"id": article_id}, {"_id": 0})

@api_router.delete("/blog/{article_id}")
async def delete_blog_article(article_id: str, request: Request):
    await require_admin(request)
    result = await db.blog_articles.delete_one({"id": article_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "Article deleted"}

# ── Case Studies ──
@api_router.get("/case-studies")
async def get_case_studies():
    return await db.case_studies.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)

@api_router.post("/case-studies")
async def create_case_study(input: CaseStudyCreate, request: Request):
    await require_admin(request)
    doc = {"id": str(uuid.uuid4()), **input.model_dump(), "created_at": datetime.now(timezone.utc).isoformat()}
    await db.case_studies.insert_one(doc)
    return {k: v for k, v in doc.items() if k != "_id"}

@api_router.put("/case-studies/{item_id}")
async def update_case_study(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input["updated_at"] = datetime.now(timezone.utc).isoformat()
    input.pop("_id", None)
    result = await db.case_studies.update_one({"id": item_id}, {"$set": input})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Not found")
    return await db.case_studies.find_one({"id": item_id}, {"_id": 0})

@api_router.delete("/case-studies/{item_id}")
async def delete_case_study(item_id: str, request: Request):
    await require_admin(request)
    await db.case_studies.delete_one({"id": item_id})
    return {"message": "Deleted"}

# ── Testimonials ──
@api_router.get("/testimonials")
async def get_testimonials():
    return await db.testimonials.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)

@api_router.post("/testimonials")
async def create_testimonial(input: TestimonialCreate, request: Request):
    await require_admin(request)
    doc = {"id": str(uuid.uuid4()), **input.model_dump(), "created_at": datetime.now(timezone.utc).isoformat()}
    await db.testimonials.insert_one(doc)
    return {k: v for k, v in doc.items() if k != "_id"}

@api_router.put("/testimonials/{item_id}")
async def update_testimonial(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input.pop("_id", None)
    await db.testimonials.update_one({"id": item_id}, {"$set": input})
    return await db.testimonials.find_one({"id": item_id}, {"_id": 0})

@api_router.delete("/testimonials/{item_id}")
async def delete_testimonial(item_id: str, request: Request):
    await require_admin(request)
    await db.testimonials.delete_one({"id": item_id})
    return {"message": "Deleted"}

# ── Jobs ──
@api_router.get("/jobs")
async def get_jobs(status: Optional[str] = None):
    query = {"status": status} if status else {}
    return await db.jobs.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)

@api_router.post("/jobs")
async def create_job(input: JobCreate, request: Request):
    await require_admin(request)
    doc = {"id": str(uuid.uuid4()), **input.model_dump(), "created_at": datetime.now(timezone.utc).isoformat()}
    await db.jobs.insert_one(doc)
    return {k: v for k, v in doc.items() if k != "_id"}

@api_router.put("/jobs/{item_id}")
async def update_job(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input.pop("_id", None)
    await db.jobs.update_one({"id": item_id}, {"$set": input})
    return await db.jobs.find_one({"id": item_id}, {"_id": 0})

@api_router.delete("/jobs/{item_id}")
async def delete_job(item_id: str, request: Request):
    await require_admin(request)
    await db.jobs.delete_one({"id": item_id})
    return {"message": "Deleted"}

# ── File Upload ──
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

@api_router.post("/upload")
async def upload_file(request: Request, file: UploadFile = File(...)):
    await require_admin(request)
    ext = file.filename.split(".")[-1] if "." in file.filename else "png"
    filename = f"{uuid.uuid4()}.{ext}"
    filepath = UPLOAD_DIR / filename
    with open(filepath, "wb") as f:
        shutil.copyfileobj(file.file, f)
    backend_url = os.environ.get("BACKEND_URL", "")
    url = f"{backend_url}/api/uploads/{filename}" if backend_url else f"/api/uploads/{filename}"
    return {"url": url, "filename": filename}

from fastapi.staticfiles import StaticFiles
app.mount("/api/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")

# ── Analytics ──
@api_router.get("/analytics/overview")
async def get_analytics(request: Request):
    await require_admin(request)
    blog_count = await db.blog_articles.count_documents({})
    published = await db.blog_articles.count_documents({"status": "published"})
    drafts = await db.blog_articles.count_documents({"status": "draft"})
    total_views_cursor = db.blog_articles.aggregate([{"$group": {"_id": None, "total": {"$sum": "$views"}}}])
    total_views_list = await total_views_cursor.to_list(1)
    total_views = total_views_list[0]["total"] if total_views_list else 0
    contacts = await db.contact_submissions.count_documents({})
    case_studies = await db.case_studies.count_documents({})
    testimonials = await db.testimonials.count_documents({})
    jobs = await db.jobs.count_documents({})
    return {"blog_total": blog_count, "blog_published": published, "blog_drafts": drafts, "total_views": total_views, "contacts": contacts, "case_studies": case_studies, "testimonials": testimonials, "jobs": jobs}

@api_router.get("/analytics/top-articles")
async def get_top_articles(request: Request):
    await require_admin(request)
    return await db.blog_articles.find({}, {"_id": 0, "title": 1, "slug": 1, "views": 1, "status": 1}).sort("views", -1).limit(10).to_list(10)

# ── Root & Status ──
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# ── Startup ──
@app.on_event("startup")
async def startup():
    await db.users.create_index("email", unique=True)
    await db.blog_articles.create_index("slug", unique=True)
    await db.login_attempts.create_index("identifier")
    # Seed admin
    admin_email = os.environ.get("ADMIN_EMAIL", "admin@neuraltrix.ai")
    admin_password = os.environ.get("ADMIN_PASSWORD", "NeuralAdmin2025!")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({"email": admin_email, "password_hash": hash_password(admin_password), "name": "Admin", "role": "admin", "created_at": datetime.now(timezone.utc).isoformat()})
        logger.info(f"Admin user seeded: {admin_email}")
    elif not verify_password(admin_password, existing.get("password_hash", "")):
        await db.users.update_one({"email": admin_email}, {"$set": {"password_hash": hash_password(admin_password)}})
        logger.info("Admin password updated")
    # Write test credentials
    creds_path = Path("/app/memory/test_credentials.md")
    creds_path.parent.mkdir(exist_ok=True)
    creds_path.write_text(f"# Test Credentials\n\n## Admin\n- Email: {admin_email}\n- Password: {admin_password}\n- Role: admin\n\n## Auth Endpoints\n- POST /api/auth/login\n- POST /api/auth/logout\n- GET /api/auth/me\n")

app.include_router(api_router)

frontend_url = os.environ.get("FRONTEND_URL", os.environ.get("CORS_ORIGINS", "*"))
origins = [frontend_url] if frontend_url != "*" else ["*"]
app.add_middleware(CORSMiddleware, allow_credentials=True, allow_origins=origins, allow_methods=["*"], allow_headers=["*"])

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
