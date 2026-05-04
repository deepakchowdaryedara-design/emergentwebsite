import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import PageContactForm from "../components/PageContactForm";
import ImpactStats from "../components/ImpactStats";
import ServiceCaseStudies from "../components/ServiceCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import IndustriesServed from "../components/IndustriesServed";
import RelatedBlog from "../components/RelatedBlog";
import TechnologyFoundationSection from "../components/TechnologyFoundationSection";
import ScopeOfDeliverySection from "../components/ScopeOfDeliverySection";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import services from "../data/services";
import serviceCaseStudies from "../data/serviceCaseStudies";
import { TRACEFOLD } from "../lib/tracefoldLabel";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Service Not Found</h1><Link to="/services" className="text-[#2563EB] ml-4">Back to Services</Link></div>);
  }

  return (
    <div>
      {/* 1. Sticky Hero with Pinned Effect */}
      <div className="sticky top-0 z-0 h-[min(75vh,820px)] overflow-hidden">
        <PageHero
          label="Services"
          title={service.heroTitle}
          description={service.heroDesc}
          primaryCTA={{ text: "Contact us", href: "#page-contact" }}
          secondaryCTA={{ text: "View capabilities", href: "#capabilities" }}
          image={service.heroImage}
        />
      </div>

      {/* 2. Surface: Approach → Scope of delivery (methodology & outcomes) */}
      <div id="capabilities" className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <div className="bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
            <Link to="/services" data-testid="back-to-services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors"><ArrowLeft size={14} /> Back to All Services</Link>
          </div>
        </div>
        <ImpactStats variant="split" label="Assurance" title="Assurance for Accountable Delivery" />
        <ScopeOfDeliverySection service={service} />
      </div>

      {/* 3. Coverage: approved platforms & integration surfaces */}
      <div className="sticky top-0 z-0 flex min-h-[600px] flex-col justify-center overflow-hidden bg-white lg:h-[650px]">
        <TechnologyFoundationSection
          dataTestId="service-technology-foundation"
          label="Coverage"
          description="Tooling choices prioritize reliability, integration fit, and lifecycle maintainability over short-term novelty."
          categories={service.techStack.map((c) => ({
            category: String(c.category).toUpperCase(),
            techs: c.techs,
          }))}
        />
      </div>

      {/* 4. Methodology: phased execution roadmap */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <section className="border-y border-slate-100 py-4 sm:py-6 md:py-8">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="mb-8 max-w-2xl text-left sm:mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Methodology</p>
                <h2 className="mb-8 max-w-2xl text-left sm:mb-10">
                  Methodology for {service.title} Engagements
                </h2>
                <p className="mt-3 text-sm leading-snug text-slate-600">
                  This methodology sequences alignment, build, and deployment checkpoints with clear ownership at each stage.
                </p>
              </div>
            </AnimatedSection>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-100 z-0" />
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {service.process.map((p, i) => (
                  <StaggerItem key={i}>
                    <div data-testid={`process-step-${i}`} className="h-full relative border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 group">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full border-2 border-slate-100 bg-white flex items-center justify-center text-[#0B1B3D] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                        </div>
                        <div className="h-px bg-slate-100 flex-1 ml-4 group-hover:bg-[#2563EB]/20 transition-colors" />
                      </div>
                      <h3 className="mb-3 tracking-tight" >{p.step}</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                      <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#2563EB] transition-colors" />
                        <div className="h-px flex-1 bg-slate-100 group-hover:bg-[#2563EB]/25 transition-colors" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Next step: conversation CTA */}
      <div className="sticky top-0 z-0 h-[60vh] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection title="Next Step for Scoping" description={`We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`} />
      </div>

      {/* 6. Assurance & outcomes: rationale + proof metrics */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="border-y border-slate-100 bg-white py-4 sm:py-6 md:py-8">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-6 xl:col-span-5">
                <AnimatedSection>
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Assurance</p>
                    <h2 className="">
                      Outcomes for Continued Engagement
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {service.whyChooseUs.map((w, i) => (
                      <div key={i} className="border-l-2 border-[#2563EB] pl-6">
                        <h3 className="mb-2" >{w.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-6 xl:col-span-7 lg:pt-0">
                <AnimatedSection delay={0.2}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start">
                    {[{ value: "2026", label: "Founded Jan 12" }, { value: "Senior-led", label: "Core delivery team" }, { value: "Weekly", label: "Typical milestone cadence" }, { value: "Pilot-ready", label: "Scoped first engagements" }, { value: "Remote-first", label: "Distributed delivery model" }, { value: "Measured", label: "KPI-linked acceptance gates" }].map((m) => (
                      <div key={m.label} className="group border border-slate-100 rounded-xl p-6 bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                        <div className="w-8 h-1 bg-[#2563EB]/10 group-hover:bg-[#2563EB] transition-colors mb-4 rounded-full" />
                        <span className="text-2xl font-bold text-[#0B1B3D] block tracking-tighter" >{m.value}</span>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-2 block">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <ServiceCaseStudies cases={serviceCaseStudies[service.slug]} title={`${TRACEFOLD} patterns: ${service.title}`} />
        <IndustriesServed title="Coverage across industries" />
        <TestimonialsSection title="How we engage new partners" />
        <RelatedBlog title="Related technical articles" />
        <div>
          <PageContactForm context={service.title} />
        </div>
      </div>
    </div>
  );
}

