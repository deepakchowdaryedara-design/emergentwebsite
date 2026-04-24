from __future__ import annotations

from dotenv import load_dotenv
from pathlib import Path
import json
import os
import logging
import uuid
import shutil
from datetime import datetime, timezone, timedelta
from typing import Any, List, Optional

import asyncpg
import bcrypt
import jwt
from fastapi import FastAPI, APIRouter, HTTPException, Request, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

DATABASE_URL = os.environ["DATABASE_URL"]

app = FastAPI()
api_router = APIRouter(prefix="/api")
pool: Optional[asyncpg.Pool] = None

JWT_ALGORITHM = "HS256"


def get_jwt_secret() -> str:
    return os.environ["JWT_SECRET"]


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    return jwt.encode(
        {
            "sub": user_id,
            "email": email,
            "exp": datetime.now(timezone.utc) + timedelta(hours=24),
            "type": "access",
        },
        get_jwt_secret(),
        algorithm=JWT_ALGORITHM,
    )


def create_refresh_token(user_id: str) -> str:
    return jwt.encode(
        {
            "sub": user_id,
            "exp": datetime.now(timezone.utc) + timedelta(days=7),
            "type": "refresh",
        },
        get_jwt_secret(),
        algorithm=JWT_ALGORITHM,
    )


def _iso(dt: Any) -> Any:
    if dt is None:
        return None
    if hasattr(dt, "isoformat"):
        return dt.isoformat()
    return dt


def row_blog_article(r: asyncpg.Record) -> dict:
    return {
        "id": r["id"],
        "slug": r["slug"],
        "title": r["title"],
        "category": r["category"],
        "excerpt": r["excerpt"],
        "content": r["content"] if isinstance(r["content"], list) else json.loads(r["content"] or "[]"),
        "image": r["image"] or "",
        "read_time": r["read_time"] or "5 min read",
        "status": r["status"] or "draft",
        "scheduled_at": r["scheduled_at"],
        "views": r["views"] or 0,
        "created_at": _iso(r["created_at"]),
        "updated_at": _iso(r["updated_at"]),
    }


def row_case_study(r: asyncpg.Record) -> dict:
    def j(col: str) -> Any:
        v = r[col]
        if v is None:
            return []
        return v if isinstance(v, (list, dict)) else json.loads(v)

    d = {
        "id": r["id"],
        "slug": r["slug"],
        "title": r["title"],
        "client": r["client"],
        "industry": r["industry"],
        "hero_desc": r["hero_desc"],
        "challenge": r["challenge"],
        "solution": r["solution"],
        "results": j("results"),
        "tech_stack": j("tech_stack"),
        "features": j("features"),
        "image": r["image"] or "",
        "created_at": _iso(r["created_at"]),
    }
    if r["updated_at"] is not None:
        d["updated_at"] = _iso(r["updated_at"])
    return d


def row_contact(r: asyncpg.Record) -> dict:
    return {
        "id": r["id"],
        "first_name": r["first_name"],
        "last_name": r["last_name"],
        "email": r["email"],
        "phone": r["phone"] or "",
        "description": r["description"],
        "created_at": _iso(r["created_at"]),
    }


def row_testimonial(r: asyncpg.Record) -> dict:
    return {
        "id": r["id"],
        "name": r["name"],
        "role": r["role"],
        "text": r["text"],
        "created_at": _iso(r["created_at"]),
    }


def row_job(r: asyncpg.Record) -> dict:
    def j(col: str) -> Any:
        v = r[col]
        if v is None:
            return []
        return v if isinstance(v, list) else json.loads(v)

    return {
        "id": r["id"],
        "title": r["title"],
        "department": r["department"],
        "location": r["location"],
        "type": r["type"],
        "experience": r["experience"],
        "description": r["description"],
        "responsibilities": j("responsibilities"),
        "requirements": j("requirements"),
        "status": r["status"] or "active",
        "created_at": _iso(r["created_at"]),
    }


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
        assert pool is not None
        r = await pool.fetchrow("SELECT id, email, name, role, created_at FROM users WHERE id = $1::uuid", payload["sub"])
        if not r:
            raise HTTPException(status_code=401, detail="User not found")
        return {
            "_id": str(r["id"]),
            "id": str(r["id"]),
            "email": r["email"],
            "name": r["name"] or "",
            "role": r["role"] or "user",
            "created_at": _iso(r["created_at"]),
        }
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def require_admin(request: Request) -> dict:
    user = await get_current_user(request)
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user


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
    content: List[dict]
    image: Optional[str] = ""
    read_time: Optional[str] = "5 min read"
    status: Optional[str] = "draft"
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


@api_router.post("/auth/login")
async def login(input: LoginInput, request: Request):
    assert pool is not None
    email = input.email.strip().lower()
    ip = request.client.host if request.client else "unknown"
    identifier = f"{ip}:{email}"
    row = await pool.fetchrow("SELECT count, last_attempt FROM login_attempts WHERE identifier = $1", identifier)
    if row and (row["count"] or 0) >= 5:
        last = row["last_attempt"]
        if last:
            lu = last if last.tzinfo else last.replace(tzinfo=timezone.utc)
            if datetime.now(timezone.utc) - lu < timedelta(minutes=15):
                raise HTTPException(status_code=429, detail="Too many attempts. Try again in 15 minutes.")
        await pool.execute("DELETE FROM login_attempts WHERE identifier = $1", identifier)
    user = await pool.fetchrow("SELECT id, email, password_hash, name, role FROM users WHERE email = $1", email)
    if not user or not verify_password(input.password, user["password_hash"] or ""):
        await pool.execute(
            """
            INSERT INTO login_attempts (identifier, count, last_attempt)
            VALUES ($1, 1, NOW())
            ON CONFLICT (identifier) DO UPDATE SET count = login_attempts.count + 1, last_attempt = NOW()
            """,
            identifier,
        )
        raise HTTPException(status_code=401, detail="Invalid email or password")
    await pool.execute("DELETE FROM login_attempts WHERE identifier = $1", identifier)
    uid = str(user["id"])
    access = create_access_token(uid, email)
    refresh = create_refresh_token(uid)
    resp = JSONResponse(
        content={"id": uid, "email": user["email"], "name": user.get("name") or "", "role": user.get("role") or "user"}
    )
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
    return await get_current_user(request)


@api_router.post("/contact")
async def create_contact(input: ContactSubmissionCreate):
    assert pool is not None
    cid = str(uuid.uuid4())
    now = datetime.now(timezone.utc)
    await pool.execute(
        """
        INSERT INTO contact_submissions (id, first_name, last_name, email, phone, description, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        """,
        cid,
        input.first_name,
        input.last_name,
        input.email,
        input.phone or "",
        input.description,
        now,
    )
    return {
        "id": cid,
        "first_name": input.first_name,
        "last_name": input.last_name,
        "email": input.email,
        "phone": input.phone or "",
        "description": input.description,
        "created_at": now.isoformat(),
    }


@api_router.get("/contact")
async def get_contacts(request: Request):
    await require_admin(request)
    assert pool is not None
    rows = await pool.fetch("SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 1000")
    return [row_contact(r) for r in rows]


@api_router.get("/blog")
async def get_blog_articles(status: Optional[str] = None):
    assert pool is not None
    if status:
        rows = await pool.fetch(
            "SELECT * FROM blog_articles WHERE status = $1 ORDER BY created_at DESC LIMIT 1000", status
        )
    else:
        rows = await pool.fetch("SELECT * FROM blog_articles ORDER BY created_at DESC LIMIT 1000")
    return [row_blog_article(r) for r in rows]


@api_router.get("/blog/{slug}")
async def get_blog_article(slug: str):
    assert pool is not None
    r = await pool.fetchrow("SELECT * FROM blog_articles WHERE slug = $1", slug)
    if not r:
        raise HTTPException(status_code=404, detail="Article not found")
    await pool.execute("UPDATE blog_articles SET views = views + 1 WHERE slug = $1", slug)
    r2 = await pool.fetchrow("SELECT * FROM blog_articles WHERE slug = $1", slug)
    return row_blog_article(r2)


@api_router.post("/blog")
async def create_blog_article(input: BlogArticleCreate, request: Request):
    await require_admin(request)
    assert pool is not None
    ex = await pool.fetchrow("SELECT 1 FROM blog_articles WHERE slug = $1", input.slug)
    if ex:
        raise HTTPException(status_code=400, detail="Slug already exists")
    aid = str(uuid.uuid4())
    now = datetime.now(timezone.utc)
    content_json = json.dumps(input.content)
    await pool.execute(
        """
        INSERT INTO blog_articles (id, slug, title, category, excerpt, content, image, read_time, status, scheduled_at, views, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8, $9, $10, 0, $11, $12)
        """,
        aid,
        input.slug,
        input.title,
        input.category,
        input.excerpt,
        content_json,
        input.image or "",
        input.read_time or "5 min read",
        input.status or "draft",
        input.scheduled_at,
        now,
        now,
    )
    r = await pool.fetchrow("SELECT * FROM blog_articles WHERE id = $1", aid)
    return row_blog_article(r)


@api_router.put("/blog/{article_id}")
async def update_blog_article(article_id: str, input: BlogArticleUpdate, request: Request):
    await require_admin(request)
    assert pool is not None
    updates = {k: v for k, v in input.model_dump().items() if v is not None}
    if not updates:
        r = await pool.fetchrow("SELECT * FROM blog_articles WHERE id = $1", article_id)
        if not r:
            raise HTTPException(status_code=404, detail="Article not found")
        return row_blog_article(r)
    now = datetime.now(timezone.utc)
    sets = ["updated_at = $1"]
    vals: list[Any] = [now]
    i = 2
    if "content" in updates:
        sets.append(f"content = ${i}::jsonb")
        vals.append(json.dumps(updates.pop("content")))
        i += 1
    for key in list(updates.keys()):
        sets.append(f"{key} = ${i}")
        vals.append(updates[key])
        i += 1
    vals.append(article_id)
    q = f"UPDATE blog_articles SET {', '.join(sets)} WHERE id = ${i}"
    result = await pool.execute(q, *vals)
    if result == "UPDATE 0":
        raise HTTPException(status_code=404, detail="Article not found")
    r = await pool.fetchrow("SELECT * FROM blog_articles WHERE id = $1", article_id)
    return row_blog_article(r)


@api_router.delete("/blog/{article_id}")
async def delete_blog_article(article_id: str, request: Request):
    await require_admin(request)
    assert pool is not None
    result = await pool.execute("DELETE FROM blog_articles WHERE id = $1", article_id)
    if result == "DELETE 0":
        raise HTTPException(status_code=404, detail="Article not found")
    return {"message": "Article deleted"}


@api_router.get("/case-studies")
async def get_case_studies():
    assert pool is not None
    rows = await pool.fetch("SELECT * FROM case_studies ORDER BY created_at DESC LIMIT 1000")
    return [row_case_study(r) for r in rows]


@api_router.post("/case-studies")
async def create_case_study(input: CaseStudyCreate, request: Request):
    await require_admin(request)
    assert pool is not None
    cid = str(uuid.uuid4())
    now = datetime.now(timezone.utc)
    d = input.model_dump()
    await pool.execute(
        """
        INSERT INTO case_studies (id, slug, title, client, industry, hero_desc, challenge, solution, results, tech_stack, features, image, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10::jsonb, $11::jsonb, $12, $13)
        """,
        cid,
        d["slug"],
        d["title"],
        d["client"],
        d["industry"],
        d["hero_desc"],
        d["challenge"],
        d["solution"],
        json.dumps(d["results"]),
        json.dumps(d["tech_stack"]),
        json.dumps(d["features"]),
        d["image"] or "",
        now,
    )
    r = await pool.fetchrow("SELECT * FROM case_studies WHERE id = $1", cid)
    return row_case_study(r)


@api_router.put("/case-studies/{item_id}")
async def update_case_study(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input.pop("_id", None)
    input["updated_at"] = datetime.now(timezone.utc)
    json_cols = {"results", "tech_stack", "features"}
    assert pool is not None
    sets = []
    vals: list[Any] = []
    i = 1
    for key, val in input.items():
        if key not in (
            "slug",
            "title",
            "client",
            "industry",
            "hero_desc",
            "challenge",
            "solution",
            "results",
            "tech_stack",
            "features",
            "image",
            "updated_at",
        ):
            continue
        if key in json_cols:
            sets.append(f"{key} = ${i}::jsonb")
            vals.append(json.dumps(val) if isinstance(val, (dict, list)) else val)
        elif key == "updated_at":
            sets.append(f"{key} = ${i}")
            vals.append(val)
        else:
            sets.append(f"{key} = ${i}")
            vals.append(val)
        i += 1
    if not sets:
        r = await pool.fetchrow("SELECT * FROM case_studies WHERE id = $1", item_id)
        if not r:
            raise HTTPException(status_code=404, detail="Not found")
        return row_case_study(r)
    vals.append(item_id)
    q = f"UPDATE case_studies SET {', '.join(sets)} WHERE id = ${i}"
    result = await pool.execute(q, *vals)
    if result == "UPDATE 0":
        raise HTTPException(status_code=404, detail="Not found")
    r = await pool.fetchrow("SELECT * FROM case_studies WHERE id = $1", item_id)
    return row_case_study(r)


@api_router.delete("/case-studies/{item_id}")
async def delete_case_study(item_id: str, request: Request):
    await require_admin(request)
    assert pool is not None
    await pool.execute("DELETE FROM case_studies WHERE id = $1", item_id)
    return {"message": "Deleted"}


@api_router.get("/testimonials")
async def get_testimonials():
    assert pool is not None
    rows = await pool.fetch("SELECT * FROM testimonials ORDER BY created_at DESC LIMIT 1000")
    return [row_testimonial(r) for r in rows]


@api_router.post("/testimonials")
async def create_testimonial(input: TestimonialCreate, request: Request):
    await require_admin(request)
    assert pool is not None
    tid = str(uuid.uuid4())
    now = datetime.now(timezone.utc)
    await pool.execute(
        "INSERT INTO testimonials (id, name, role, text, created_at) VALUES ($1, $2, $3, $4, $5)",
        tid,
        input.name,
        input.role,
        input.text,
        now,
    )
    return {"id": tid, "name": input.name, "role": input.role, "text": input.text, "created_at": now.isoformat()}


@api_router.put("/testimonials/{item_id}")
async def update_testimonial(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input.pop("_id", None)
    assert pool is not None
    sets = []
    vals: list[Any] = []
    i = 1
    for key in ("name", "role", "text"):
        if key in input:
            sets.append(f"{key} = ${i}")
            vals.append(input[key])
            i += 1
    if sets:
        vals.append(item_id)
        await pool.execute(f"UPDATE testimonials SET {', '.join(sets)} WHERE id = ${i}", *vals)
    r = await pool.fetchrow("SELECT * FROM testimonials WHERE id = $1", item_id)
    if not r:
        raise HTTPException(status_code=404, detail="Not found")
    return row_testimonial(r)


@api_router.delete("/testimonials/{item_id}")
async def delete_testimonial(item_id: str, request: Request):
    await require_admin(request)
    assert pool is not None
    await pool.execute("DELETE FROM testimonials WHERE id = $1", item_id)
    return {"message": "Deleted"}


@api_router.get("/jobs")
async def get_jobs(status: Optional[str] = None):
    assert pool is not None
    if status:
        rows = await pool.fetch("SELECT * FROM jobs WHERE status = $1 ORDER BY created_at DESC LIMIT 1000", status)
    else:
        rows = await pool.fetch("SELECT * FROM jobs ORDER BY created_at DESC LIMIT 1000")
    return [row_job(r) for r in rows]


@api_router.post("/jobs")
async def create_job(input: JobCreate, request: Request):
    await require_admin(request)
    assert pool is not None
    jid = str(uuid.uuid4())
    now = datetime.now(timezone.utc)
    d = input.model_dump()
    await pool.execute(
        """
        INSERT INTO jobs (id, title, department, location, type, experience, description, responsibilities, requirements, status, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9::jsonb, $10, $11)
        """,
        jid,
        d["title"],
        d["department"],
        d["location"],
        d["type"],
        d["experience"],
        d["description"],
        json.dumps(d["responsibilities"]),
        json.dumps(d["requirements"]),
        d["status"] or "active",
        now,
    )
    r = await pool.fetchrow("SELECT * FROM jobs WHERE id = $1", jid)
    return row_job(r)


@api_router.put("/jobs/{item_id}")
async def update_job(item_id: str, input: dict, request: Request):
    await require_admin(request)
    input.pop("_id", None)
    assert pool is not None
    sets = []
    vals = []
    idx = 1
    for key in ("title", "department", "location", "type", "experience", "description", "status", "responsibilities", "requirements"):
        if key not in input:
            continue
        val = input[key]
        if key in ("responsibilities", "requirements"):
            sets.append(f"{key} = ${idx}::jsonb")
            vals.append(json.dumps(val))
        else:
            sets.append(f"{key} = ${idx}")
            vals.append(val)
        idx += 1
    if sets:
        vals.append(item_id)
        await pool.execute(f"UPDATE jobs SET {', '.join(sets)} WHERE id = ${idx}", *vals)
    r = await pool.fetchrow("SELECT * FROM jobs WHERE id = $1", item_id)
    if not r:
        raise HTTPException(status_code=404, detail="Not found")
    return row_job(r)


@api_router.delete("/jobs/{item_id}")
async def delete_job(item_id: str, request: Request):
    await require_admin(request)
    assert pool is not None
    await pool.execute("DELETE FROM jobs WHERE id = $1", item_id)
    return {"message": "Deleted"}


UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)


@api_router.post("/upload")
async def upload_file(request: Request, file: UploadFile = File(...)):
    await require_admin(request)
    ext = file.filename.split(".")[-1] if file.filename and "." in file.filename else "png"
    filename = f"{uuid.uuid4()}.{ext}"
    filepath = UPLOAD_DIR / filename
    with open(filepath, "wb") as f:
        shutil.copyfileobj(file.file, f)
    backend_url = os.environ.get("BACKEND_URL", "")
    url = f"{backend_url}/api/uploads/{filename}" if backend_url else f"/api/uploads/{filename}"
    return {"url": url, "filename": filename}


app.mount("/api/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")


@api_router.get("/analytics/overview")
async def get_analytics(request: Request):
    await require_admin(request)
    assert pool is not None
    blog_count = await pool.fetchval("SELECT COUNT(*) FROM blog_articles")
    published = await pool.fetchval("SELECT COUNT(*) FROM blog_articles WHERE status = 'published'")
    drafts = await pool.fetchval("SELECT COUNT(*) FROM blog_articles WHERE status = 'draft'")
    total_views = await pool.fetchval("SELECT COALESCE(SUM(views), 0) FROM blog_articles")
    contacts = await pool.fetchval("SELECT COUNT(*) FROM contact_submissions")
    case_studies = await pool.fetchval("SELECT COUNT(*) FROM case_studies")
    testimonials = await pool.fetchval("SELECT COUNT(*) FROM testimonials")
    jobs = await pool.fetchval("SELECT COUNT(*) FROM jobs")
    return {
        "blog_total": blog_count,
        "blog_published": published,
        "blog_drafts": drafts,
        "total_views": int(total_views or 0),
        "contacts": contacts,
        "case_studies": case_studies,
        "testimonials": testimonials,
        "jobs": jobs,
    }


@api_router.get("/analytics/top-articles")
async def get_top_articles(request: Request):
    await require_admin(request)
    assert pool is not None
    rows = await pool.fetch(
        "SELECT title, slug, views, status FROM blog_articles ORDER BY views DESC NULLS LAST LIMIT 10"
    )
    return [{"title": r["title"], "slug": r["slug"], "views": r["views"] or 0, "status": r["status"]} for r in rows]


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


DDL = """
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT DEFAULT '',
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS login_attempts (
  identifier TEXT PRIMARY KEY,
  count INT NOT NULL DEFAULT 0,
  last_attempt TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);
CREATE TABLE IF NOT EXISTS blog_articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '[]',
  image TEXT DEFAULT '',
  read_time TEXT DEFAULT '5 min read',
  status TEXT DEFAULT 'draft',
  scheduled_at TEXT,
  views INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);
CREATE TABLE IF NOT EXISTS case_studies (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  industry TEXT NOT NULL,
  hero_desc TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results JSONB NOT NULL DEFAULT '[]',
  tech_stack JSONB NOT NULL DEFAULT '[]',
  features JSONB NOT NULL DEFAULT '[]',
  image TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  experience TEXT NOT NULL,
  description TEXT NOT NULL,
  responsibilities JSONB NOT NULL DEFAULT '[]',
  requirements JSONB NOT NULL DEFAULT '[]',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_blog_articles_status ON blog_articles (status);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs (status);
"""


@app.on_event("startup")
async def startup():
    global pool
    logger = logging.getLogger(__name__)
    try:
        pool = await asyncpg.create_pool(DATABASE_URL, min_size=1, max_size=10)
        async with pool.acquire() as conn:
            await conn.execute(DDL)
    except Exception as e:
        logger.error(f"Failed to connect to database: {e}")
        logger.warning("Running without database pool.")
        pool = None

    admin_email = os.environ.get("ADMIN_EMAIL", "admin@neuraltrix.ai")
    admin_password = os.environ.get("ADMIN_PASSWORD", "NeuralAdmin2025!")
    if pool is not None:
        try:
            async with pool.acquire() as conn:
                row = await conn.fetchrow("SELECT id, password_hash FROM users WHERE email = $1", admin_email)
                if row is None:
                    await conn.execute(
                        "INSERT INTO users (email, password_hash, name, role) VALUES ($1, $2, $3, $4)",
                        admin_email,
                        hash_password(admin_password),
                        "Admin",
                        "admin",
                    )
                    logger.info("Admin user seeded: %s", admin_email)
                elif not verify_password(admin_password, row["password_hash"] or ""):
                    await conn.execute(
                        "UPDATE users SET password_hash = $1 WHERE email = $2",
                        hash_password(admin_password),
                        admin_email,
                    )
                    logger.info("Admin password updated")
        except Exception as e:
            logger.error(f"Failed to seed admin user: {e}")

    creds_dir = ROOT_DIR.parent / "memory"
    creds_dir.mkdir(parents=True, exist_ok=True)
    creds_path = creds_dir / "test_credentials.md"
    creds_path.write_text(
        f"# Test Credentials\n\n## Admin\n- Email: {admin_email}\n- Password: {admin_password}\n- Role: admin\n\n## Auth Endpoints\n- POST /api/auth/login\n- POST /api/auth/logout\n- GET /api/auth/me\n",
        encoding="utf-8",
    )


app.include_router(api_router)

frontend_url = os.environ.get("FRONTEND_URL", os.environ.get("CORS_ORIGINS", "*"))
origins = [frontend_url] if frontend_url != "*" else ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    global pool
    if pool:
        await pool.close()
        pool = None
