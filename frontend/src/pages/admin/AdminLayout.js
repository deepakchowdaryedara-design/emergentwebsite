import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, FileText, Briefcase, MessageSquare, Users, Mail, LogOut, Menu, X, BarChart3 } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog Articles", href: "/admin/blog", icon: FileText },
  { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { label: "Job Listings", href: "/admin/jobs", icon: Users },
  { label: "Contacts", href: "/admin/contacts", icon: Mail },
];

export default function AdminLayout() {
  const { user, loading, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]"><p className="text-slate-500">Loading...</p></div>;
  if (!user || user.role !== "admin") return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0B1B3D] transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="text-lg font-extrabold text-white tracking-tighter" >NeuralTrix AI</Link>
          <p className="text-xs text-slate-500 mt-1">Content Management</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map(item => (
            <Link key={item.href} to={item.href} onClick={() => setSidebarOpen(false)}
              data-testid={`admin-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium transition-colors ${
                location.pathname === item.href ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}>
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button onClick={logout} data-testid="admin-logout" className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 w-full">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>
      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <button className="lg:hidden p-2 text-[#0B1B3D]" onClick={() => setSidebarOpen(true)}><Menu size={24} /></button>
          <div className="text-sm text-slate-600">Welcome, <strong className="text-[#0B1B3D]">{user.name}</strong></div>
          <Link to="/" className="text-sm text-[#2563EB] font-medium hover:underline">View Site</Link>
        </header>
        <main className="flex-1 p-6 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

