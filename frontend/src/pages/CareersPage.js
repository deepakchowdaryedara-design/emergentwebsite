import { useState } from "react";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Users, Award, Coffee, BookOpen, Heart, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ImpactStats from "../components/ImpactStats";
import TestimonialsSection from "../components/TestimonialsSection";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import careers from "../data/careers";

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`job-card-${job.id}`} className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 hover:bg-[#F8FAFC] transition-colors">
        <div>
          <h3 className="text-lg font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{job.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{job.department}</p>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12} /> {job.type}</span>
            <span className="text-xs text-slate-500 flex items-center gap-1"><Briefcase size={12} /> {job.experience}</span>
          </div>
        </div>
        {open ? <ChevronUp size={20} className="text-slate-400 flex-shrink-0" /> : <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 sm:px-8 pb-8 border-t border-slate-100 pt-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{job.description}</p>
          <h4 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-3">Responsibilities</h4>
          <ul className="space-y-2 mb-6">{job.responsibilities.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{r}</li>))}</ul>
          <h4 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">{job.requirements.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />{r}</li>))}</ul>
          <Button data-testid={`apply-btn-${job.id}`} asChild className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-6 py-3 font-semibold text-sm"><a href="#page-contact">Apply for This Role</a></Button>
        </div>
      )}
    </div>
  );
}

const perks = [
  { icon: Coffee, title: "Cutting-Edge Work", desc: "Work with the latest AI technologies on real enterprise problems." },
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere. Team across 8+ countries. Flexible hours." },
  { icon: BookOpen, title: "Growth Culture", desc: "Annual learning budget, conference attendance, and mentorship." },
  { icon: Heart, title: "Competitive Package", desc: "Top-of-market compensation, equity, health benefits, generous PTO." },
  { icon: Users, title: "Amazing Team", desc: "Collaborate with 400+ brilliant AI specialists from diverse backgrounds." },
  { icon: Award, title: "Impact at Scale", desc: "Your work powers AI systems used by Fortune 500 companies." },
];

const hiringProcess = [
  { step: "Application Review", desc: "We review your resume and portfolio within 48 hours." },
  { step: "Technical Screen", desc: "30-minute call to discuss your experience and technical depth." },
  { step: "Take-Home Challenge", desc: "A practical assignment reflecting real work you'd do here." },
  { step: "Team Interview", desc: "Meet your potential teammates and discuss the challenge." },
  { step: "Offer & Onboarding", desc: "Quick decisions. Comprehensive onboarding to set you up for success." },
];

export default function CareersPage() {
  const departments = [...new Set(careers.map((j) => j.department))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? careers : careers.filter((j) => j.department === filter);

  return (
    <div>
      {/* 1. Hero */}
      <PageHero label="Careers" title="Build the Future of AI With Us" description="Join 400+ AI specialists who are shaping the future of enterprise AI. We offer challenging work, competitive compensation, and a culture that values innovation." primaryCTA={{ text: "View Open Positions", href: "#positions" }} image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop" />

      {/* 2. Stats */}
      <ImpactStats customStats={[
        { value: "400+", label: "AI specialists on the team" },
        { value: "8", label: "Countries with team members" },
        { value: "95%", label: "Employee satisfaction rate" },
        { value: "4.8/5", label: "Glassdoor rating" },
        { value: "30%", label: "Promoted within first year" },
      ]} />

      {/* 3. Why Join Us */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Why NeuralTrix AI?</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="border border-slate-200 rounded-sm p-8 h-full">
                  <p.icon size={24} className="text-[#2563EB] mb-4" />
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 4. Hiring Process */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Hiring Process</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringProcess.map((h, i) => (
              <StaggerItem key={i}>
                <div className="relative bg-white border border-slate-200 rounded-sm p-6">
                  <span className="text-3xl font-extrabold text-slate-100 absolute top-3 right-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-sm font-bold text-[#0B1B3D] mb-2 relative z-10">{h.step}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed relative z-10">{h.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection title="Don't See Your Role?" description="We're always looking for talented people. Send us your resume and we'll reach out when there's a fit." />

      {/* 6. Open Positions */}
      <section id="positions" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Open Positions</h2>
            <p className="text-base text-slate-600 mb-8">{careers.length} open roles across {departments.length} departments</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-8">
            <button data-testid="filter-all" onClick={() => setFilter("All")} className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === "All" ? "bg-[#0B1B3D] text-white" : "bg-[#F8FAFC] border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}>All</button>
            {departments.map((d) => (<button key={d} data-testid={`filter-${d.toLowerCase()}`} onClick={() => setFilter(d)} className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === d ? "bg-[#0B1B3D] text-white" : "bg-[#F8FAFC] border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}>{d}</button>))}
          </div>
          <div className="space-y-4">{filtered.map((job) => (<JobCard key={job.id} job={job} />))}</div>
        </div>
      </section>

      {/* 7. Locations */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection><h2 className="text-3xl font-bold text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Locations</h2></AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "San Francisco", country: "HQ, USA" },
              { city: "London", country: "Europe" },
              { city: "Singapore", country: "Asia-Pacific" },
              { city: "Bangalore", country: "India" },
            ].map((l) => (
              <StaggerItem key={l.city}>
                <div className="bg-white border border-slate-200 rounded-sm p-6">
                  <MapPin size={20} className="text-[#2563EB] mb-3" />
                  <h3 className="text-base font-bold text-[#0B1B3D]">{l.city}</h3>
                  <p className="text-sm text-slate-500">{l.country}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 8. Testimonials */}
      <TestimonialsSection title="Life at NeuralTrix AI" />

      {/* 9. Contact */}
      <PageContactForm context="Careers - Job Application" />
    </div>
  );
}
