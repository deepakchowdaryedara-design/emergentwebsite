import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, ArrowUp, ArrowDown, Upload, Save } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [form, setForm] = useState({ title: "", slug: "", category: "", excerpt: "", read_time: "5 min read", status: "draft", scheduled_at: "", image: "" });
  const [content, setContent] = useState([{ type: "paragraph", text: "" }]);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isNew) {
      axios.get(`${API}/blog`, { withCredentials: true }).then(r => {
        const article = r.data.find(a => a.id === id);
        if (article) {
          setForm({ title: article.title, slug: article.slug, category: article.category || "", excerpt: article.excerpt || "", read_time: article.read_time || "", status: article.status || "draft", scheduled_at: article.scheduled_at || "", image: article.image || "" });
          setContent(article.content || [{ type: "paragraph", text: "" }]);
        }
      });
    }
  }, [id, isNew]);

  const updateField = (key, val) => {
    setForm(p => ({ ...p, [key]: val }));
    if (key === "title" && isNew) {
      setForm(p => ({ ...p, slug: val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }));
    }
  };

  const addBlock = (type) => setContent(p => [...p, { type, text: "" }]);
  const removeBlock = (i) => setContent(p => p.filter((_, idx) => idx !== i));
  const updateBlock = (i, text) => setContent(p => p.map((b, idx) => idx === i ? { ...b, text } : b));
  const moveBlock = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= content.length) return;
    setContent(p => { const n = [...p]; [n[i], n[j]] = [n[j], n[i]]; return n; });
  };

  const uploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await axios.post(`${API}/upload`, fd, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } });
      setForm(p => ({ ...p, image: res.data.url }));
    } catch { setError("Upload failed"); }
    finally { setUploading(false); }
  };

  const save = async () => {
    setError("");
    if (!form.title || !form.slug) { setError("Title and slug are required"); return; }
    setSaving(true);
    try {
      const payload = { ...form, content };
      if (isNew) {
        await axios.post(`${API}/blog`, payload, { withCredentials: true });
      } else {
        await axios.put(`${API}/blog/${id}`, payload, { withCredentials: true });
      }
      navigate("/admin/blog");
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to save");
    } finally { setSaving(false); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 data-testid="blog-editor-title" className="text-2xl font-bold text-[#0B1B3D]" >{isNew ? "New Article" : "Edit Article"}</h1>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate("/admin/blog")} className="rounded-sm text-sm">Cancel</Button>
          <Button data-testid="save-article-btn" onClick={save} disabled={saving} className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm text-sm">
            <Save size={16} className="mr-2" /> {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      {error && <p data-testid="blog-editor-error" className="text-sm text-red-500 mb-4 bg-red-50 p-3 rounded-sm">{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Title</label>
            <Input data-testid="blog-title-input" value={form.title} onChange={e => updateField("title", e.target.value)} placeholder="Article title" className="rounded-sm text-lg font-bold" />
          </div>

          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Content Blocks</label>
              <div className="flex gap-2">
                <button data-testid="add-heading-block" onClick={() => addBlock("heading")} className="text-xs px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 rounded-sm hover:border-[#2563EB] transition-colors">+ Heading</button>
                <button data-testid="add-paragraph-block" onClick={() => addBlock("paragraph")} className="text-xs px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 rounded-sm hover:border-[#2563EB] transition-colors">+ Paragraph</button>
              </div>
            </div>
            <div className="space-y-3">
              {content.map((block, i) => (
                <div key={i} data-testid={`content-block-${i}`} className="flex gap-2">
                  <div className="flex flex-col gap-1">
                    <button onClick={() => moveBlock(i, -1)} className="p-1 text-slate-300 hover:text-slate-600"><ArrowUp size={14} /></button>
                    <button onClick={() => moveBlock(i, 1)} className="p-1 text-slate-300 hover:text-slate-600"><ArrowDown size={14} /></button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm font-semibold uppercase ${block.type === "heading" ? "bg-[#0B1B3D] text-white" : "bg-slate-100 text-slate-500"}`}>{block.type}</span>
                    </div>
                    {block.type === "heading" ? (
                      <Input value={block.text} onChange={e => updateBlock(i, e.target.value)} placeholder="Section heading..." className="rounded-sm font-bold" />
                    ) : (
                      <Textarea value={block.text} onChange={e => updateBlock(i, e.target.value)} placeholder="Write content..." rows={3} className="rounded-sm" />
                    )}
                  </div>
                  <button onClick={() => removeBlock(i)} className="p-2 text-slate-300 hover:text-red-500 self-start mt-5"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-sm p-6 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Status</label>
              <select data-testid="blog-status-select" value={form.status} onChange={e => updateField("status", e.target.value)} className="w-full border border-slate-200 rounded-sm px-3 py-2 text-sm">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            {form.status === "scheduled" && (
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Scheduled Date</label>
                <Input type="datetime-local" value={form.scheduled_at} onChange={e => updateField("scheduled_at", e.target.value)} className="rounded-sm" />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Slug</label>
              <Input data-testid="blog-slug-input" value={form.slug} onChange={e => updateField("slug", e.target.value)} placeholder="article-slug" className="rounded-sm font-mono text-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Category</label>
              <Input value={form.category} onChange={e => updateField("category", e.target.value)} placeholder="AI Tools" className="rounded-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Read Time</label>
              <Input value={form.read_time} onChange={e => updateField("read_time", e.target.value)} placeholder="5 min read" className="rounded-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Excerpt</label>
              <Textarea value={form.excerpt} onChange={e => updateField("excerpt", e.target.value)} placeholder="Brief summary..." rows={3} className="rounded-sm" />
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">Featured Image</label>
            {form.image && <img src={form.image} alt="" className="w-full h-32 object-cover rounded-sm mb-3 border border-slate-200" />}
            <Input value={form.image} onChange={e => updateField("image", e.target.value)} placeholder="Image URL" className="rounded-sm mb-2" />
            <label className="inline-flex items-center gap-2 text-xs px-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-sm cursor-pointer hover:border-[#2563EB] transition-colors">
              <Upload size={14} /> {uploading ? "Uploading..." : "Upload Image"}
              <input type="file" accept="image/*" onChange={uploadImage} className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

