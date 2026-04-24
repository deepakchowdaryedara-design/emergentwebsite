import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Zap, Target, Layers, ShieldsCheck, Brain, Database, Bot, Code2, Smartphone, Users, GitBranch, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import ImpactStats from "../components/ImpactStats";
import ServiceCaseStudies from "../components/ServiceCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import IndustriesServed from "../components/IndustriesServed";
import RelatedBlog from "../components/RelatedBlog";
import CoreTechnologies from "../components/CoreTechnologies";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import services from "../data/services";
import serviceCaseStudies from "../data/serviceCaseStudies";
import coreTechData from "../data/coreTechData";

function SubserviceCard({ sub, index, isOpen, onToggle }) {
  return (
    <motion.div
      data-testid={`subservice-${index}`}
      layout
      className={`border transition-all duration-500 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md ${isOpen ? 'border-[#2563EB]/30 ring-1 ring-[#2563EB]/5' : 'border-slate-100'}`}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-8 sm:p-10 flex flex-col items-start gap-6 transition-all ${isOpen ? 'bg-blue-50/10' : 'hover:bg-slate-50/50'}`}
      >
        <div className="flex items-center gap-3 w-full">
          <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>CAP_UNIT_0{index + 1}</span>
          <div className="h-px flex-1 bg-slate-100" />
          <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0B1B3D] border-[#0B1B3D] text-white' : 'text-slate-400'}`}>
            <ChevronDown size={14} />
          </div>
        </div>
        
        <div className="relative z-10 w-full">
          <h3 className="text-xl lg:text-2xl font-black text-[#0B1B3D] mb-4 tracking-tighter uppercase leading-none">
            {sub.title}
          </h3>
          <p className="text-[12px] lg:text-[13px] text-slate-500 leading-relaxed font-medium max-w-2xl">
            {sub.desc}
          </p>
          
          {!isOpen && (
            <div className="flex items-center gap-2 mt-8 group/btn">
              <div className="w-8 h-0.5 bg-blue-500/20 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
              <span className="text-[9px] font-black text-slate-300 group-hover:text-blue-600 uppercase tracking-widest transition-colors">Expand Module</span>
            </div>
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sub.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg hover:border-blue-100 hover:bg-blue-50/5 transition-all">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-[#2563EB]" />
                </div>
                <span className="text-sm text-slate-600 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openSub, setOpenSub] = useState(0);

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
          primaryCTA={{ text: "Speak To Our Experts", href: "#page-contact" }}
          secondaryCTA={{ text: "View Capabilities", href: "#capabilities" }}
          image={service.heroImage}
        />
      </div>

      {/* 2. Surface Layer 1 */}
      <div id="capabilities" className="relative z-10 bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <div className="bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
            <Link to="/services" data-testid="back-to-services" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB] transition-colors"><ArrowLeft size={14} /> Back to All Services</Link>
          </div>
        </div>
        <ImpactStats title={`Service Performance Snapshot`} />
        <section data-testid="subservices-section" className="py-12 sm:py-16 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-10 text-left">
                <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Scope of Delivery</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
                  Our {service.title} Services
                </h2>
                <p className="text-base text-slate-600">Service modules are structured to shorten time-to-value while keeping architecture and operations maintainable.</p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-4" stagger={0.06}>
              {service.subservices.map((sub, i) => (
                <StaggerItem key={i}>
                  <SubserviceCard sub={sub} index={i} isOpen={openSub === i} onToggle={() => setOpenSub(openSub === i ? -1 : i)} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </div>

      {/* 3. Pinned Tech Stack Section */}
      <div className="sticky top-0 z-0 min-h-screen lg:h-[800px] bg-[#0B1B3D] overflow-hidden flex flex-col justify-center">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-20">
          <AnimatedSection>
            <div className="text-left max-w-2xl mb-12">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Tech Stack</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-6" >
                Technology Foundation
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">Tooling choices prioritize reliability, integration fit, and lifecycle maintainability over short-term novelty.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.techStack.map((cat, idx) => (
              <StaggerItem key={cat.category}>
                <div className="relative h-full border border-white/10 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-md hover:border-[#2563EB]/40 transition-all duration-500 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-blue-600/20" />
                  <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-8">{cat.category}</h3>
                  <div className="space-y-4">
                    {cat.techs.map((t) => (
                      <div key={t} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-sm text-slate-300 font-bold group-hover/item:text-white transition-colors">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>

      {/* 4. Execution Roadmap (Surface) */}
      <div className="relative z-10 bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <section className="py-24 sm:py-32 border-y border-slate-50">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-16 text-left">
                <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Our Process</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D]" >
                  Execution Roadmap
                </h2>
              </div>
            </AnimatedSection>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-[100px] left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-100 z-0" />
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {service.process.map((p, i) => (
                  <StaggerItem key={i}>
                    <div data-testid={`process-step-${i}`} className="h-full relative border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 group">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-full border-2 border-slate-100 bg-white flex items-center justify-center text-[#0B1B3D] font-bold group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                          <span className="text-[11px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="h-px bg-slate-100 flex-1 ml-4 group-hover:bg-[#2563EB]/20 transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1B3D] mb-3 tracking-tight" >{p.step}</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                      <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#2563EB] transition-colors" />
                        <span className="text-[9px] font-bold text-slate-400 group-hover:text-[#2563EB] uppercase tracking-widest transition-colors">Phase {i + 1}</span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Strategic CTA (Pinned Again) */}
      <div className="sticky top-0 z-0 h-[80vh] flex flex-col justify-center bg-[#0B1B3D] overflow-hidden">
        <CTASection title="Discuss Delivery Fit" description={`We can map ${service.title} to your current systems, priorities, and timeline to define a practical starting scope.`} />
      </div>

      {/* 6. Core Technologies & Final Sections (Surface Layer) */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {coreTechData[service.slug] && (
          <CoreTechnologies
            categories={coreTechData[service.slug]}
            title={`Technologies Powering Our ${service.title} Solutions`}
            description="Reference architectures and platform components selected for stable, enterprise-scale implementation."
          />
        )}

        <section className="py-24 sm:py-32 bg-white border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
              <div className="lg:col-span-6 xl:col-span-5">
                <AnimatedSection>
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Why NeuralTrix AI?</p>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                      Why Teams Retain Us Across Phases
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {service.whyChooseUs.map((w, i) => (
                      <div key={i} className="border-l-2 border-[#2563EB] pl-6">
                        <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{w.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-6 xl:col-span-7 lg:pt-12">
                <AnimatedSection delay={0.2}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-start">
                    {[{ value: "15+", label: "Years of Innovation" }, { value: "1000+", label: "Global Success Stories" }, { value: "400+", label: "AI Experts" }, { value: "1500+", label: "Projects Delivered" }, { value: "95%", label: "Client Retention" }, { value: "20%", label: "Faster to Market" }].map((m) => (
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

        <ServiceCaseStudies cases={serviceCaseStudies[service.slug]} title={`Our ${service.title} Success Stories`} />
        <IndustriesServed title="Tailored Solutions for Your Industry" />
        <TestimonialsSection title="Here's What Our Clients Say About Us" />
        <RelatedBlog title="Stay Ahead with AI Intelligence" />
        <div id="page-contact">
          <PageContactForm context={service.title} />
        </div>
      </div>
    </div>
  );
}

