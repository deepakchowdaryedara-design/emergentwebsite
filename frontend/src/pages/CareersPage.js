import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Users, Award, Coffee, BookOpen, Heart, Globe } from "lucide-react";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import { Button } from "../components/ui/button";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ImpactStats from "../components/ImpactStats";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import careers from "../data/careers";
import { CAREERS_HERO_IMAGE } from "../lib/heroImageThemes";

function JobCard({ job }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`job-card-${job.id}`} className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 hover:bg-[#F8FAFC] transition-colors">
        <div>
          <h3 className="" >{job.title}</h3>
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
          <h4 className="uppercase tracking-wider mb-3">Responsibilities</h4>
          <ul className="space-y-2 mb-6">{job.responsibilities.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{r}</li>))}</ul>
          <h4 className="uppercase tracking-wider mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">{job.requirements.map((r, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-2"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 flex-shrink-0" />{r}</li>))}</ul>
          <Button data-testid={`apply-btn-${job.id}`} asChild className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-6 py-3 font-semibold text-sm"><Link to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}>Apply for This Role</Link></Button>
        </div>
      )}
    </div>
  );
}

const perks = [
  { icon: Coffee, title: "Modern stack", desc: "Hands-on work with current AI and cloud tooling on production-oriented programs." },
  { icon: Globe, title: "Remote-first", desc: "Distributed team with coordinated hours and clear communication norms." },
  { icon: BookOpen, title: "Professional development", desc: "Learning allocation for certifications, conferences, and structured mentorship." },
  { icon: Heart, title: "Compensation and benefits", desc: "Market-informed packages with health benefits and paid time off; equity where applicable." },
  { icon: Users, title: "Senior peers", desc: "Collaborate directly with experienced engineers, scientists, and delivery leads." },
  { icon: Award, title: "Measurable impact", desc: "Contributions tied to shipped releases, client milestones, and operational outcomes." },
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
      <PageHero label="Careers" title="Build Your Practice in Enterprise AI Delivery" description="Join delivery programs that emphasize production discipline, stakeholder communication, and accountable outcomes across research, engineering, and operations." primaryCTA={{ text: "View open positions", href: "#positions" }} image={CAREERS_HERO_IMAGE} />

      {/* 2. Stats */}
      <ImpactStats label="Assurance" title="Assurance for Candidates" customStats={[
        { value: "2026", label: "Founded Jan 12" },
        { value: "Remote-first", label: "Distributed hiring and collaboration" },
        { value: "Senior-led", label: "Small core team; direct technical leadership" },
        { value: "Pilot-based", label: "Customer work scoped to milestones" },
        { value: "Measured", label: "Performance tied to delivery artifacts" },
      ]} />

      {/* 3. Why Join Us */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <h2 className="mb-12" >
              Assurance for <span className="corp-heading-secondary">your career here</span>
            </h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="border border-slate-200 rounded-sm p-8 h-full">
                  <p.icon size={24} className="text-[#2563EB] mb-4" />
                  <h3 className="mb-2" >{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 4. Hiring Process */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
            <h2 className="mb-8" >
              Our Hiring <span className="corp-heading-secondary">Workflow</span>
            </h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringProcess.map((h, i) => (
              <StaggerItem key={i}>
                <div className="relative bg-white border border-slate-200 rounded-sm p-6">
                  <h3 className="mb-2">{h.step}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection title="Next Step if Your Role Is Not Listed" description="Submit your profile and focus areas; we review submissions against upcoming hiring plans and pilot workload." />

      {/* 6. Open Positions */}
      <section id="positions" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
            <h2 className="mb-4" >
              Open <span className="corp-heading-secondary">Positions</span>
            </h2>
            <p className="text-base text-slate-600 mb-8 font-medium">{careers.length} open roles across {departments.length} departments</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-8">
            <button data-testid="filter-all" onClick={() => setFilter("All")} className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === "All" ? "bg-[#0B1B3D] text-white" : "bg-[#F8FAFC] border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}>All</button>
            {departments.map((d) => (<button key={d} data-testid={`filter-${d.toLowerCase()}`} onClick={() => setFilter(d)} className={`text-sm px-4 py-2 rounded-sm font-medium transition-colors ${filter === d ? "bg-[#0B1B3D] text-white" : "bg-[#F8FAFC] border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}>{d}</button>))}
          </div>
          <div className="space-y-4">{filtered.map((job) => (<JobCard key={job.id} job={job} />))}</div>
        </div>
      </section>

      {/* 7. Locations */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-diag-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <h2 className="mb-12" >
              Coverage Across <span className="corp-heading-secondary">presence</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mb-8">
              Remote-first delivery with anchor regions below; specific roles note location expectations in the listing.
            </p>
          </AnimatedSection>
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

      {/* 7.5 Career Growth Paths */}
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <h2 className="mb-4" >
                Methodology for <span className="corp-heading-secondary">career growth paths</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Engineering Track", desc: "Progress from individual contributor roles to staff/principal technical leadership." },
              { title: "Product & Delivery Track", desc: "Grow from execution roles into program and portfolio leadership functions." },
              { title: "People Leadership Track", desc: "Lead teams, shape culture, and mentor high-performing AI specialists." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="mb-3" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 7.6 Commitments */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <h2 className="mb-4" >
                Assurance for <span className="corp-heading-secondary">culture</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "High ownership with low bureaucracy",
              "Learning budget and mentorship support",
              "Outcome-focused remote collaboration",
              "Respectful feedback and transparent communication",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6 text-sm text-slate-600 leading-relaxed font-medium">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 8. Career CTA */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="rounded-sm border border-white/15 bg-white/[0.02] p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">Next Step</p>
              <h2 className="mb-4 text-white" >
                Find Your <span className="corp-heading-secondary-on-dark">Growth Direction</span>
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step maps your expertise and goals to opportunities aligned with your growth path.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10. Contact */}
      <PageContactForm context="Careers - Job Application" />
    </div>
  );
}

