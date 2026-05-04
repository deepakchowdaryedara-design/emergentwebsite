/** Base URL for API (no trailing slash). Empty string = same origin (e.g. Vercel full-stack). */
const trimmed = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "");
export const BACKEND_URL = trimmed;
export const API_BASE = trimmed ? `${trimmed}/api` : "/api";
