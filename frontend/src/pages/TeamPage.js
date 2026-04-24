import { Users, Linkedin, Twitter } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "15+ years in enterprise software. Previously VP Engineering at a Fortune 100 tech company." },
  { name: "Sarah Chen", role: "CTO", bio: "PhD in Machine Learning from Stanford. Led AI research at a major cloud provider." },
  { name: "David Okafor", role: "VP of Engineering", bio: "Former principal engineer at a leading AI startup. Expert in distributed systems." },
  { name: "Lisa Park", role: "VP of Product", bio: "10+ years in product management. Led AI product strategy at a top SaaS company." },
  { name: "Raj Patel", role: "Head of AI Research", bio: "PhD in NLP. Published 30+ papers in top AI conferences." },
  { name: "Maria Santos", role: "VP of Client Success", bio: "15+ years in consulting. Ensures every client achieves measurable ROI." },
];

export default function TeamPage() {
  return (
    <div>
      <PageHero
        label="Our Team"
        title="Leadership Team Guiding Delivery Quality and Direction"
        description="Our leadership combines product judgment, engineering depth, and execution discipline to keep complex programs aligned and outcome-focused."
        primaryCTA={{ text: "Join Our Team", href: "/careers" }}
        image={ABOUT_HERO_IMAGE}
      />
      <section className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Leadership</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                The Team Behind High-Performance Delivery
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="border border-slate-200 rounded-sm p-8 h-full">
                  <div className="w-14 h-14 bg-[#0B1B3D] rounded-sm flex items-center justify-center mb-5">
                    <Users size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B3D]" >{m.name}</h3>
                  <p className="text-sm text-[#2563EB] font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{m.bio}</p>
                  <div className="flex gap-3">
                    <Linkedin size={16} className="text-slate-400 hover:text-[#2563EB] transition-colors cursor-pointer" />
                    <Twitter size={16} className="text-slate-400 hover:text-[#2563EB] transition-colors cursor-pointer" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Methodology</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
                Methodology for Cross-Functional Team Delivery
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                This methodology aligns product, engineering, AI research, and client success under one execution model.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strategy Leadership", desc: "Roadmap alignment, value definition, and stakeholder governance." },
              { title: "AI Engineering", desc: "Architecture, model integration, and scalable implementation." },
              { title: "Delivery Management", desc: "Program orchestration, sprint execution, and quality gates." },
              { title: "Client Success", desc: "Adoption enablement, KPI tracking, and continuous optimization." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Assurance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                Assurance Through Team Collaboration Standards
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Ownership Mindset", desc: "Every team member is accountable for outcomes, not only outputs." },
              { title: "Transparent Communication", desc: "Clear updates, early risk visibility, and practical decision-making." },
              { title: "Continuous Improvement", desc: "Retrospectives and performance insights inform each delivery cycle." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-3" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <PageContactForm context="Team Page" />
    </div>
  );
}

