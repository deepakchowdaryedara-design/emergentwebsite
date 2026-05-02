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
        label="Testimonials"
        title="What Clients Say After Working with Our Teams"
        description="These testimonials reflect delivery experience, decision support quality, and measurable outcomes achieved through long-term collaboration."
        primaryCTA={{ text: "Start Your Engagement", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.caseStudies}
      />
      <ImpactStats
        title="Trust Signals"
        customStats={[
          { value: "95%", label: "Client retention rate" },
          { value: "1000+", label: "Clients served" },
          { value: "1500+", label: "Projects delivered" },
          { value: "400+", label: "AI specialists" },
        ]}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
                Experience Principles Behind Client Trust
              </h2>
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
                Outcomes Across Long-Term Client Engagements
              </h2>
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
      <TestimonialsSection title="What Clients Say About Working With Us" />
      <PageContactForm context="Testimonials Page" />
    </div>
  );
}

