import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  const load = () => axios.get(`${API}/blog`, { withCredentials: true }).then(r => setArticles(r.data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const deleteArticle = async (id) => {
    if (!window.confirm("Delete this article?")) return;
    await axios.delete(`${API}/blog/${id}`, { withCredentials: true });
    load();
  };

  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.category?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 data-testid="blog-list-title" className="text-2xl font-bold text-[#0B1B3D]" >Blog Articles</h1>
        <Button data-testid="create-article-btn" asChild className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm">
          <Link to="/admin/blog/new"><Plus size={16} className="mr-2" /> New Article</Link>
        </Button>
      </div>
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." className="pl-10 rounded-sm" />
      </div>
      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-[#F8FAFC]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Title</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden sm:table-cell">Category</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden md:table-cell">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden md:table-cell">Views</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.id} data-testid={`blog-row-${a.id}`} className="border-b border-slate-100 hover:bg-[#F8FAFC]">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-[#0B1B3D]">{a.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{a.slug}</p>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell"><span className="text-xs text-[#2563EB] font-medium">{a.category}</span></td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className={`text-xs px-2 py-1 rounded-sm font-medium ${a.status === "published" ? "bg-green-50 text-green-600" : a.status === "scheduled" ? "bg-blue-50 text-blue-600" : "bg-yellow-50 text-yellow-600"}`}>{a.status}</span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell"><span className="text-sm font-mono text-slate-600">{a.views || 0}</span></td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link to={`/admin/blog/${a.id}`} data-testid={`edit-blog-${a.id}`} className="p-2 text-slate-400 hover:text-[#2563EB] transition-colors"><Edit size={16} /></Link>
                    <button onClick={() => deleteArticle(a.id)} data-testid={`delete-blog-${a.id}`} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="px-6 py-12 text-center text-sm text-slate-400">No articles found. Create your first article!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

