import PageHero from "../components/PageHero";
import TestimonialsSection from "../components/TestimonialsSection";
import ImpactStats from "../components/ImpactStats";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero
        label="Engagement"
        title="How We Work With Prospective Partners"
        description="NeuralTrix is building its client base: this page explains what you can expect in discovery and pilot, transparency, engineering access, and explicit success measures, instead of third-party quotes."
        primaryCTA={{ text: "Start a conversation", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.caseStudies}
      />
      <ImpactStats
        title="Assurance for early programs"
        customStats={[
          { value: "2026", label: "Founded Jan 12" },
          { value: "Senior-led", label: "Accountable delivery leads" },
          { value: "Defined", label: "Milestones and acceptance criteria" },
          { value: "Documented", label: "Handover and operational artifacts" },
        ]}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
                Assurance for <span className="corp-heading-secondary">professional delivery</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">This assurance model states what you can expect in working sessions, documentation, and escalation paths before a contract is signed.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Technical Depth", desc: "Strong architecture decisions, production reliability, and robust implementation quality." },
              { title: "Business Alignment", desc: "Delivery plans consistently tied to measurable business and operational outcomes." },
              { title: "Execution Discipline", desc: "Predictable milestones, transparent reporting, and proactive issue resolution." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-3" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                Outcomes for <span className="corp-heading-secondary">structured pilots</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-4">This outcomes framing describes what we jointly optimize in early programs, speed to clarity, visible decisions, and accountable ownership, not vanity demos.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "Faster", label: "Implementation cycles" },
              { value: "Clearer", label: "Decision visibility" },
              { value: "Higher", label: "Cross-team alignment" },
              { value: "Stronger", label: "Outcome ownership" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-sm border border-slate-200 bg-white p-6 h-full">
                  <p className="text-3xl font-bold text-[#0B1B3D] mb-2" >{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <TestimonialsSection title="Principles in detail" />
      <PageContactForm context="Engagement / prospective partner" />
    </div>
  );
}

