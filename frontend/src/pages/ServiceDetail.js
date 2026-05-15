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
import ServiceTechStack from "../components/ServiceTechStack";
import ScopeOfDeliverySection from "../components/ScopeOfDeliverySection";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import services from "../data/services";
import serviceCaseStudies from "../data/serviceCaseStudies";
import MethodologyPipeline from "../components/MethodologyPipeline";
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
          video={service.heroVideo}
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

      {/* 3. Coverage: unified technology stack component (Service Variant) */}
      <div className="relative z-10">
        <ServiceTechStack />
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

            <div className="relative z-10">
              <MethodologyPipeline steps={service.process} />
            </div>
          </div>
        </section>
      </div>

      {/* 5. Next step: conversation CTA */}
      <div className="sticky top-0 z-0 h-[60vh] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection title="Next Step for Scoping" description={`We can align ${service.title} to your systems, priorities, and timeline to define an actionable starting scope and governance boundary.`} />
      </div>
      {/* 6. Assurance & outcomes: rationale + proof metrics */}
      <div className="relative z-10 bg-[#F8FAFC] border-y border-slate-200">
        <section className="py-12 sm:py-16">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-600/10 rounded-full hidden xl:block" />
                <AnimatedSection>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                      <span className="text-[9px] font-black text-blue-700 uppercase tracking-widest">Assurance</span>
                    </div>
                    <h2 className="text-2xl font-black tracking-tighter text-[#0B1B3D] sm:text-3xl lg:text-[2.25rem] lg:leading-[1.1] uppercase">
                      Outcomes for <br/><span className="text-blue-600">Continued Engagement</span>
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {service.whyChooseUs.map((w, i) => (
                      <div key={i} className="group relative pl-6 border-l-2 border-slate-200 hover:border-blue-600 transition-colors duration-300">
                        <div className="absolute left-[-2px] top-0 h-0 group-hover:h-full w-[2px] bg-blue-600 transition-all duration-500" />
                        <h3 className="text-sm font-black text-[#0B1B3D] uppercase tracking-tight mb-2" >{w.title}</h3>
                        <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-md">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
 
              <div className="lg:col-span-7">
                <AnimatedSection delay={0.2}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { value: "2026", label: "Founded Jan 12", icon: "🗓️" },
                      { value: "Senior-led", label: "Core delivery team", icon: "👤" },
                      { value: "Weekly", label: "Typical cadence", icon: "⏱️" },
                      { value: "Pilot-ready", label: "Scoped pilots", icon: "🚀" },
                      { value: "Remote-first", label: "Global model", icon: "🌐" },
                      { value: "Measured", label: "KPI gates", icon: "📈" }
                    ].map((m) => (
                      <div key={m.label} className="group relative border border-slate-200/60 rounded-2xl p-5 bg-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <div className="absolute top-3 right-3 opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all text-sm">
                          {m.icon}
                        </div>
                        <div className="w-8 h-0.5 bg-blue-600/10 group-hover:bg-blue-600 transition-all duration-500 mb-4 rounded-full" />
                        <span className="text-xl font-black text-[#0B1B3D] block tracking-tighter" >{m.value}</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mt-2 block">{m.label}</span>
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

