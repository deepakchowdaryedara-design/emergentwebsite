"""Vercel serverless ASGI entry for FastAPI (`backend/server.py`)."""
import sys
from pathlib import Path

_root = Path(__file__).resolve().parent.parent
_backend = _root / "backend"
if str(_backend) not in sys.path:
    sys.path.insert(0, str(_backend))

from mangum import Mangum
from server import app as fastapi_app

# Vercel's Python runtime invokes this ASGI application.
app = Mangum(fastapi_app)
