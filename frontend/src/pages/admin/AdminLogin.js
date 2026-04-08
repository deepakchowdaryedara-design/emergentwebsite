import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#0B1B3D] rounded-sm flex items-center justify-center mx-auto mb-4">
            <Lock size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Admin Login</h1>
          <p className="text-sm text-slate-500 mt-1">NeuralTrix AI Content Management</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-sm p-8 space-y-4">
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
