import { useState, useEffect } from "react";
import { Plus, Trash2, Edit, X, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export function TestimonialManager() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", text: "" });

  const load = () => axios.get(`${API}/testimonials`, { withCredentials: true }).then(r => setItems(r.data));
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!form.name || !form.text) return;
    if (editing) {
      await axios.put(`${API}/testimonials/${editing}`, form, { withCredentials: true });
    } else {
      await axios.post(`${API}/testimonials`, form, { withCredentials: true });
    }
    setForm({ name: "", role: "", text: "" }); setEditing(null); load();
  };

  const del = async (id) => { if (window.confirm("Delete?")) { await axios.delete(`${API}/testimonials/${id}`, { withCredentials: true }); load(); } };
  const edit = (item) => { setEditing(item.id); setForm({ name: item.name, role: item.role, text: item.text }); };

  return (
    <div>
      <h1 data-testid="testimonials-title" className="text-2xl font-bold text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Testimonials</h1>
      <div className="bg-white border border-slate-200 rounded-sm p-6 mb-6">
        <h3 className="text-sm font-semibold text-[#0B1B3D] mb-4">{editing ? "Edit Testimonial" : "Add New Testimonial"}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Client name" className="rounded-sm" />
          <Input value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))} placeholder="Role & Company" className="rounded-sm" />
        </div>
        <Textarea value={form.text} onChange={e => setForm(p => ({ ...p, text: e.target.value }))} placeholder="Testimonial text..." rows={3} className="rounded-sm mb-4" />
        <div className="flex gap-2">
          <Button data-testid="save-testimonial-btn" onClick={save} className="bg-[#0B1B3D] text-white rounded-sm text-sm"><Save size={14} className="mr-2" /> {editing ? "Update" : "Add"}</Button>
          {editing && <Button variant="outline" onClick={() => { setEditing(null); setForm({ name: "", role: "", text: "" }); }} className="rounded-sm text-sm"><X size={14} className="mr-2" /> Cancel</Button>}
        </div>
      </div>
      <div className="space-y-3">
        {items.map(t => (
          <div key={t.id} data-testid={`testimonial-item-${t.id}`} className="bg-white border border-slate-200 rounded-sm p-6 flex justify-between">
            <div><p className="text-sm font-bold text-[#0B1B3D]">{t.name}</p><p className="text-xs text-[#2563EB]">{t.role}</p><p className="text-sm text-slate-600 mt-2">{t.text}</p></div>
            <div className="flex gap-1 flex-shrink-0 ml-4">
              <button onClick={() => edit(t)} className="p-2 text-slate-400 hover:text-[#2563EB]"><Edit size={16} /></button>
              <button onClick={() => del(t.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm text-slate-400 text-center py-8">No testimonials yet</p>}
      </div>
    </div>
  );
}

export function JobManager() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", department: "", location: "", type: "Full-Time", experience: "", description: "", responsibilities: "", requirements: "", status: "active" });

  const load = () => axios.get(`${API}/jobs`, { withCredentials: true }).then(r => setItems(r.data));
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!form.title) return;
    const payload = { ...form, responsibilities: form.responsibilities.split("\n").filter(Boolean), requirements: form.requirements.split("\n").filter(Boolean) };
    if (editing) {
      await axios.put(`${API}/jobs/${editing}`, payload, { withCredentials: true });
    } else {
      await axios.post(`${API}/jobs`, payload, { withCredentials: true });
    }
    setForm({ title: "", department: "", location: "", type: "Full-Time", experience: "", description: "", responsibilities: "", requirements: "", status: "active" }); setEditing(null); load();
  };

  const del = async (id) => { if (window.confirm("Delete?")) { await axios.delete(`${API}/jobs/${id}`, { withCredentials: true }); load(); } };
  const edit = (item) => { setEditing(item.id); setForm({ ...item, responsibilities: (item.responsibilities || []).join("\n"), requirements: (item.requirements || []).join("\n") }); };

  return (
    <div>
      <h1 data-testid="jobs-title" className="text-2xl font-bold text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Job Listings</h1>
      <div className="bg-white border border-slate-200 rounded-sm p-6 mb-6">
        <h3 className="text-sm font-semibold text-[#0B1B3D] mb-4">{editing ? "Edit Job" : "Add New Job"}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Job title" className="rounded-sm" />
          <Input value={form.department} onChange={e => setForm(p => ({ ...p, department: e.target.value }))} placeholder="Department" className="rounded-sm" />
          <Input value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))} placeholder="Location" className="rounded-sm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Input value={form.experience} onChange={e => setForm(p => ({ ...p, experience: e.target.value }))} placeholder="Experience (e.g., 3+ years)" className="rounded-sm" />
          <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} className="border border-slate-200 rounded-sm px-3 py-2 text-sm"><option>Full-Time</option><option>Part-Time</option><option>Contract</option></select>
          <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))} className="border border-slate-200 rounded-sm px-3 py-2 text-sm"><option value="active">Active</option><option value="closed">Closed</option></select>
        </div>
        <Textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} placeholder="Job description..." rows={2} className="rounded-sm mb-4" />
        <Textarea value={form.responsibilities} onChange={e => setForm(p => ({ ...p, responsibilities: e.target.value }))} placeholder="Responsibilities (one per line)" rows={3} className="rounded-sm mb-4" />
        <Textarea value={form.requirements} onChange={e => setForm(p => ({ ...p, requirements: e.target.value }))} placeholder="Requirements (one per line)" rows={3} className="rounded-sm mb-4" />
        <div className="flex gap-2">
          <Button data-testid="save-job-btn" onClick={save} className="bg-[#0B1B3D] text-white rounded-sm text-sm"><Save size={14} className="mr-2" /> {editing ? "Update" : "Add"}</Button>
          {editing && <Button variant="outline" onClick={() => { setEditing(null); setForm({ title: "", department: "", location: "", type: "Full-Time", experience: "", description: "", responsibilities: "", requirements: "", status: "active" }); }} className="rounded-sm text-sm">Cancel</Button>}
        </div>
      </div>
      <div className="space-y-3">
        {items.map(j => (
          <div key={j.id} data-testid={`job-item-${j.id}`} className="bg-white border border-slate-200 rounded-sm p-6 flex justify-between">
            <div>
              <p className="text-sm font-bold text-[#0B1B3D]">{j.title}</p>
              <p className="text-xs text-slate-500 mt-1">{j.department} | {j.location} | {j.type}</p>
              <span className={`text-xs px-2 py-0.5 rounded-sm mt-2 inline-block ${j.status === "active" ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-500"}`}>{j.status}</span>
            </div>
            <div className="flex gap-1 flex-shrink-0 ml-4">
              <button onClick={() => edit(j)} className="p-2 text-slate-400 hover:text-[#2563EB]"><Edit size={16} /></button>
              <button onClick={() => del(j.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm text-slate-400 text-center py-8">No job listings yet</p>}
      </div>
    </div>
  );
}

export function ContactsList() {
  const [items, setItems] = useState([]);
  useEffect(() => { axios.get(`${API}/contact`, { withCredentials: true }).then(r => setItems(r.data)).catch(() => {}); }, []);

  return (
    <div>
      <h1 data-testid="contacts-title" className="text-2xl font-bold text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Contact Submissions</h1>
      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-slate-200 bg-[#F8FAFC]">
            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase">Name</th>
            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden sm:table-cell">Email</th>
            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden md:table-cell">Description</th>
            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase hidden md:table-cell">Date</th>
          </tr></thead>
          <tbody>
            {items.map((c, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-[#F8FAFC]">
                <td className="px-6 py-4 text-sm font-medium text-[#0B1B3D]">{c.first_name} {c.last_name}</td>
                <td className="px-6 py-4 text-sm text-slate-600 hidden sm:table-cell">{c.email}</td>
                <td className="px-6 py-4 text-sm text-slate-500 hidden md:table-cell max-w-xs truncate">{c.description}</td>
                <td className="px-6 py-4 text-xs text-slate-400 hidden md:table-cell">{c.created_at?.split("T")[0]}</td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={4} className="px-6 py-12 text-center text-sm text-slate-400">No submissions yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CaseStudyManager() {
  const [items, setItems] = useState([]);
  const load = () => axios.get(`${API}/case-studies`, { withCredentials: true }).then(r => setItems(r.data));
  useEffect(() => { load(); }, []);
  const del = async (id) => { if (window.confirm("Delete?")) { await axios.delete(`${API}/case-studies/${id}`, { withCredentials: true }); load(); } };

  return (
    <div>
      <h1 data-testid="case-studies-admin-title" className="text-2xl font-bold text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Case Studies</h1>
      <p className="text-sm text-slate-500 mb-6">Manage your case studies. Currently displaying {items.length} case studies from the database.</p>
      <div className="space-y-3">
        {items.map(cs => (
          <div key={cs.id} className="bg-white border border-slate-200 rounded-sm p-6 flex justify-between">
            <div><p className="text-sm font-bold text-[#0B1B3D]">{cs.title}</p><p className="text-xs text-[#2563EB]">{cs.client} | {cs.industry}</p></div>
            <button onClick={() => del(cs.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16} /></button>
          </div>
        ))}
        {items.length === 0 && <p className="text-sm text-slate-400 text-center py-8 bg-white border border-slate-200 rounded-sm">No case studies in database. Case studies from static data files are shown on the public site.</p>}
      </div>
    </div>
  );
}
