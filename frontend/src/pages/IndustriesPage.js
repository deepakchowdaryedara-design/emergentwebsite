import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import ListingImageCard from "../components/ListingImageCard";
import CTASection from "../components/CTASection";
import { useEffect } from "react";
import industries from "../data/industries";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function IndustriesPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#0B1B3D]">
      {/* 1. Hero with Sticky Behavior */}
      <div className="sticky top-0 z-0 h-[min(70vh,750px)] overflow-hidden">
        <PageHero
          label="Industries"
          title="Industry-Specific AI Programs for Complex Environments"
          description="Each industry track addresses domain constraints, compliance expectations, and process maturity to ensure adoption without operational disruption."
          primaryCTA={{ text: "Talk to Our Experts", href: "#page-contact" }}
          secondaryCTA={{ text: "Explore Verticals", href: "#verticals" }}
          image={LISTING_PAGE_HERO_IMAGES.industries}
        />
      </div>

      {/* 2. Main Industry Listing (Surface Layer) */}
      <div className="relative z-10 bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <section id="verticals" className="py-24 sm:py-32 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-16 lg:mb-24">
                <span className="premium-label" style={{ marginBottom: '1.5rem' }}>Sector Expertise</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0B1B3D] mb-6">
                  Select Your <span className="text-slate-300">Industry Vertical</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-bold">Domain-optimized models and deployment architectures tailored to specific regulatory and operational constraints.</p>
              </div>
            </AnimatedSection>
            
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => (
                <StaggerItem key={ind.slug}>
                  <ListingImageCard
                    to={`/industries/${ind.slug}`}
                    data-testid={`industry-link-${ind.slug}`}
                    image={ind.heroImage}
                    title={ind.title}
                    description={ind.shortDesc}
                    icon={ind.icon}
                    ctaText="Technical Overview"
                    variant="industry"
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* 3. Industry Outcomes Grid */}
        <section className="py-24 sm:py-32 bg-slate-50/50 border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <AnimatedSection>
                  <span className="premium-label" style={{ marginBottom: '1.5rem' }}>Sector Performance</span>
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-8 leading-[0.95]">
                    Outcome-Focused AI <br/><span className="text-slate-300">Benchmarks</span>
                  </h2>
                  <p className="text-base text-slate-500 leading-relaxed font-medium mb-10 max-w-sm">
                    We align each rollout to the KPIs that matter in your domain, focusing on auditability and throughput.
                  </p>
                  <div className="flex items-center gap-4 py-8 border-t border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-black">AI</div>
                    <div>
                      <p className="text-sm font-black text-[#0B1B3D]">Sector Validated</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Ready</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-7">
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "30-60%", label: "Process automation improvement" },
                    { value: "2-4x", label: "Faster operational insights" },
                    { value: "40%+", label: "Reduction in handling time" },
                    { value: "SLA-Driven", label: "Governed and traceable workflows" },
                  ].map((item, i) => (
                    <StaggerItem key={item.label}>
                      <div className="group h-full bg-white border border-slate-100 p-8 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute -bottom-4 -right-2 text-6xl font-black text-slate-50 group-hover:text-blue-500/5 transition-colors pointer-events-none">0{i+1}</div>
                        <p className="text-4xl font-black text-[#0B1B3D] mb-3 tracking-tighter group-hover:text-blue-600 transition-colors">{item.value}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed group-hover:text-slate-600 transition-colors">{item.label}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Implementation Framework (Pinned) */}
      <div className="sticky top-0 z-0 h-[min(80vh,800px)] flex flex-col justify-center bg-[#070e1a] overflow-hidden">
        {/* Cinematic High-Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <CTASection 
          compact
          title="Structured Rollout for Domain Risk" 
          description="This workflow maps your regulatory, operational, and data constraints into a practical AI rollout strategy."
          buttonText="Begin Technical Scoping"
        />
      </div>

      {/* 5. Final Layers (Surface) */}
      <div className="relative z-30 bg-white shadow-[0_-40px_100px_rgba(0,0,0,0.2)]">
        {/* Capability Matrix */}
        <section className="py-24 sm:py-32">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-16">
                <span className="premium-label" style={{ marginBottom: '1.5rem' }}>Capability Matrix</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-6">
                  Cross-Vertical <span className="text-slate-300">Feature Parity</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-slate-50 border-b border-slate-100">
                {["Capability", "Healthcare", "Finance", "Retail", "Education", "Real Estate"].map((h) => (
                  <div key={h} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#0B1B3D] border-r border-slate-100 last:border-r-0">{h}</div>
                ))}
              </div>
              {[
                ["Automation Workflows", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Predictive Intelligence", "Yes", "Yes", "Yes", "Partial", "Yes"],
                ["Compliance Reporting", "Yes", "Yes", "Partial", "Partial", "Partial"],
                ["Model Governance", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b last:border-b-0 border-slate-100 group">
                  {row.map((cell, idx) => (
                    <div key={`${row[0]}-${idx}`} className={`px-6 py-4 text-xs group-hover:bg-blue-50/30 transition-colors border-r border-slate-100 last:border-r-0 ${idx === 0 ? 'font-bold text-[#0B1B3D]' : 'text-slate-500'}`}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-[#F8FAFC] border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-16">
                <span className="premium-label" style={{ marginBottom: '1.5rem' }}>Methodology</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4">
                  Program Delivery Workflow
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-100">
              {[
                { title: "Advisory + Blueprint", desc: "Define priority use-cases and implementation architecture for your industry context." },
                { title: "Pilot Deployment", desc: "Launch one high-value workflow with KPI tracking and governance controls." },
                { title: "Scaled Rollout", desc: "Expand across business units with operating standards and optimization loops." },
              ].map((item, i) => (
                <StaggerItem key={item.title}>
                  <div className="group h-full bg-white border-r border-b border-slate-100 p-10 hover:bg-slate-50/50 transition-all duration-300 relative overflow-hidden">
                    <span className="text-[10px] font-black text-blue-500 mb-6 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>PHASE :: 0{i+1}</span>
                    <h3 className="text-2xl font-black text-[#0B1B3D] mb-4 tracking-tighter uppercase leading-none">{item.title}</h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    <div className="w-8 h-0.5 bg-blue-500/20 group-hover:w-full transition-all duration-500 mt-8" />
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>

        <div id="page-contact">
          <PageContactForm context="Industries Page" />
        </div>
      </div>
    </div>
  );
}


