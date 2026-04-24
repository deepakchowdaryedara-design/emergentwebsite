import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { DEFAULT_PAGE_HERO_IMAGE } from "@/lib/heroImageThemes";

export default function AdminLogin() {
  const { user, loading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-slate-500">Loading...</p></div>;
  if (user && user.role === "admin") return <Navigate to="/admin" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const data = await login(email, password);
      if (data.role !== "admin") {
        setError("Admin access required");
      }
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Invalid credentials");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      <div className="absolute inset-0 z-0">
        <img
          src={DEFAULT_PAGE_HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1B3D]/88" />
      </div>
      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Lock size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white" >Admin Login</h1>
          <p className="text-sm text-slate-300 mt-1">NeuralTrix AI Content Management</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-sm p-8 space-y-4 shadow-xl shadow-black/20">
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Email</label>
            <Input data-testid="admin-email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="admin@neuraltrix.ai" className="rounded-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Password</label>
            <Input data-testid="admin-password" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="rounded-sm" />
          </div>
          {error && <p data-testid="admin-login-error" className="text-sm text-red-500">{error}</p>}
          <Button data-testid="admin-login-submit" type="submit" disabled={submitting} className="w-full bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm">
            {submitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

