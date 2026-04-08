import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Briefcase, MessageSquare, Users, Mail, Eye, TrendingUp } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    axios.get(`${API}/analytics/overview`, { withCredentials: true }).then(r => setStats(r.data)).catch(() => {});
    axios.get(`${API}/analytics/top-articles`, { withCredentials: true }).then(r => setTopArticles(r.data)).catch(() => {});
  }, []);

  const cards = stats ? [
    { label: "Blog Articles", value: stats.blog_total, sub: `${stats.blog_published} published, ${stats.blog_drafts} drafts`, icon: FileText, href: "/admin/blog" },
    { label: "Total Views", value: stats.total_views, sub: "All-time article views", icon: Eye, href: "/admin/blog" },
    { label: "Contact Leads", value: stats.contacts, sub: "Form submissions", icon: Mail, href: "/admin/contacts" },
    { label: "Case Studies", value: stats.case_studies, sub: "Published case studies", icon: Briefcase, href: "/admin/case-studies" },
    { label: "Testimonials", value: stats.testimonials, sub: "Client reviews", icon: MessageSquare, href: "/admin/testimonials" },
    { label: "Job Listings", value: stats.jobs, sub: "Open positions", icon: Users, href: "/admin/jobs" },
  ] : [];

  return (
    <div>
      <h1 data-testid="admin-dashboard-title" className="text-2xl font-bold text-[#0B1B3D] mb-8" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {cards.map(c => (
          <Link key={c.label} to={c.href} data-testid={`dashboard-card-${c.label.toLowerCase().replace(/\s/g, "-")}`} className="bg-white border border-slate-200 rounded-sm p-6 hover:border-[#2563EB]/40 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{c.label}</p>
                <p className="text-3xl font-extrabold text-[#0B1B3D] mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{c.value}</p>
                <p className="text-xs text-slate-400 mt-1">{c.sub}</p>
              </div>
              <c.icon size={20} className="text-[#2563EB]" />
            </div>
          </Link>
        ))}
      </div>
      {topArticles.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-sm p-6">
          <h2 className="text-lg font-bold text-[#0B1B3D] mb-4 flex items-center gap-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            <TrendingUp size={18} className="text-[#2563EB]" /> Top Articles by Views
          </h2>
          <div className="space-y-3">
            {topArticles.map((a, i) => (
              <div key={a.slug} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono w-6">{i + 1}.</span>
                  <span className="text-sm text-[#0B1B3D] font-medium">{a.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-sm ${a.status === "published" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>{a.status}</span>
                </div>
                <span className="text-sm font-bold text-[#0B1B3D]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{a.views || 0}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
