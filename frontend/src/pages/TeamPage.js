import { Users, Linkedin, Twitter, Shield, Zap, Heart, Target, Eye } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "Product-minded operator focused on shipping AI systems customers actually run." },
  { name: "Sarah Chen", role: "CTO & Co-founder", bio: "Hands-on ML lead, architecture through evaluation harnesses and production monitoring." },
  { name: "David Okafor", role: "Principal Engineer", bio: "Distributed systems and shipping discipline from high-growth platform teams." },
  { name: "Lisa Park", role: "Head of Product", bio: "Turns ambiguous AI ideas into scoped milestones teams can execute." },
  { name: "Raj Patel", role: "Lead Applied Scientist", bio: "LLMs, retrieval, and evaluation, making models behave in the wild." },
  { name: "Maria Santos", role: "Customer Programs", bio: "Keeps pilots honest on outcomes, timelines, and handover clarity." },
];

export default function TeamPage() {
  return (
    <div>
      <PageHero
        label="Our Team"
        title="Leadership and Delivery, Accountable to Scope"
        description="Senior practitioners remain engaged on delivery workstreams so stakeholders interact with decision-makers responsible for outcomes."
        primaryCTA={{ text: "View careers", href: "/careers" }}
        image={ABOUT_HERO_IMAGE}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                Coverage Across <span className="opacity-40">who you work with</span>
              </h2>
              <p className="text-sm text-slate-600 mt-3 max-w-2xl">Roles typically engaged on delivery workstreams so conversations stay with people authorized to change scope and priorities.</p>
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
      {/* 2. Methodology Section - ENHANCED DESIGN */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-6 leading-none">
                Methodology for <span className="text-[#0B1B3D]/30 text-nowrap">Cross-Functional</span> Delivery
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                This execution model aligns product, engineering, AI research, and client success under a single, high-performance framework.
              </p>
            </div>
          </AnimatedSection>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "01", title: "Strategy Leadership", desc: "Roadmap alignment, value definition, and stakeholder governance." },
              { id: "02", title: "AI Engineering", desc: "Architecture, model integration, and scalable implementation." },
              { id: "03", title: "Delivery Management", desc: "Program orchestration, sprint execution, and quality gates." },
              { id: "04", title: "Client Success", desc: "Adoption enablement, KPI tracking, and continuous optimization." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="group relative h-full bg-white border border-slate-200 rounded-sm p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200">
                  <div className="flex flex-col h-full">
                    <div className="text-[10px] font-black text-blue-500/30 group-hover:text-blue-500 transition-colors duration-500 mb-6">
                      {item.id}
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <div className="mt-auto pt-8">
                      <div className="h-[1px] w-8 bg-slate-200 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D]" >
                Assurance Through <span className="text-[#0B1B3D]/30">Collaboration</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Ownership Mindset", desc: "Every team member is accountable for outcomes, not only outputs." },
              { icon: Zap, title: "Transparent Communication", desc: "Clear updates, early risk visibility, and practical decision-making." },
              { icon: Heart, title: "Continuous Improvement", desc: "Retrospectives and performance insights inform each delivery cycle." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-white border border-slate-200 rounded-sm p-10 transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 group">
                  <item.icon size={24} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-4 tracking-tight" >{item.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed font-medium">{item.desc}</p>
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

