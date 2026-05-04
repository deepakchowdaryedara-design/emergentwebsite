import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Brain, Database, Bot, Code2, Smartphone, Users, GitBranch, BarChart3, Zap, Share2, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import ImpactStats from "../components/ImpactStats";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import industries from "../data/industries";
import services from "../data/services";
import { INDUSTRY_ARCHITECTURE_IMAGE } from "../lib/heroImageThemes";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (!industry) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Industry Not Found</h1><Link to="/industries" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div className="bg-[#0B1B3D]">
      {/* 1. Hero with Sticky Behavior */}
      <div className="sticky top-0 z-0 h-[60vh] overflow-hidden">
        <PageHero
          label="Industries"
          title={industry.heroTitle}
          description={industry.heroDesc}
          primaryCTA={{ text: "Get Industry Assessment", href: "#page-contact" }}
          secondaryCTA={{ text: "View Capabilities", href: "#capabilities" }}
          image={industry.heroImage}
        />
      </div>

      {/* 2. Page Content - Scrolling Over Hero */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
            <Link to="/industries" data-testid="back-to-industries" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Industries</Link>
          </div>
        </div>

        {/* 2. Overview Section (Split Layout) */}
        <section className="py-6 sm:py-8 md:py-10 bg-white border-b border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Left: Strategic Content */}
              <div className="lg:col-span-6 xl:col-span-5">
                <AnimatedSection>
                  <div className="max-w-2xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                    <h2 className="mb-8">
                      Sector <span className="opacity-30">Transformation</span> <br /> Architecture
                    </h2>
                    <div className="h-px w-20 bg-blue-500 mb-8" />
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-bold mb-8">
                      {industry.overview}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                      <div>
                        <h4 className="uppercase tracking-widest mb-2">Priority Focus</h4>
                        <p className="text-xs font-bold text-[#0B1B3D]">Operational Accuracy & Throughput</p>
                      </div>
                      <div>
                        <h4 className="uppercase tracking-widest mb-2">Deployment Path</h4>
                        <p className="text-xs font-bold text-[#0B1B3D]">Hardened Enterprise Infrastructure</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Technical Diagram Mockup */}
              <div className="lg:col-span-6 xl:col-span-7">
                <AnimatedSection delay={0.2}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-75 group-hover:bg-blue-500/10 transition-all duration-700" />
                    <div className="relative border border-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={INDUSTRY_ARCHITECTURE_IMAGE}
                        alt="Technical Industry Architecture"
                        className="w-full h-auto aspect-[16/10] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Architectural Overlay */}
                      <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0B1B3D] text-white text-[8px] font-black px-2 py-1 rounded-sm uppercase tracking-widest">System Overview // Validated</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section id="capabilities" className="py-6 sm:py-8 md:py-10 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2 className="">AI Solutions for {industry.title}</h2>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
              {industry.features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="group h-full bg-white border-r border-b border-slate-100 p-8 sm:p-10 hover:bg-slate-50/50 transition-all duration-300 relative overflow-hidden">
                    {/* Performance Marker */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[10px] font-black text-blue-500 px-2 py-1 bg-blue-50 rounded-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        UNIT_MOD_0{i + 1}
                      </span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="mb-4 tracking-tighter uppercase">
                        {f.title}
                      </h3>
                      <p className="text-[12px] lg:text-[13px] text-slate-500 leading-relaxed font-medium max-w-sm mb-8">
                        {f.desc}
                      </p>

                      {/* Kinetic Indicator */}
                      <div className="flex items-center gap-2 group/btn cursor-default">
                        <div className="w-8 h-0.5 bg-blue-500/20 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
                        <span className="text-[9px] font-black text-slate-300 group-hover:text-blue-600 uppercase tracking-widest transition-colors">Strategic</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Impact Stats */}
        <ImpactStats title={`${industry.title} Performance Benchmarks`} customStats={[
          { value: "45%", label: "Average efficiency improvement" },
          { value: "3x", label: "Faster decision making" },
          { value: "60%", label: "Cost reduction potential" },
          { value: "99.9%", label: "System uptime guarantee" },
          { value: "2x", label: "Revenue growth acceleration" },
        ]} />

        {/* 3. Industry Implementation Workflow - Linear Technical Model */}
        <section className="py-6 sm:py-8 md:py-10 bg-white relative overflow-hidden border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
            <div className="max-w-2xl mb-10 lg:mb-12">
              <AnimatedSection>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
                <h2 className="mb-8">
                  Implementation <br /><span className="opacity-30">Model</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0 border-t border-l border-slate-100">
              {[
                { icon: Database, label: "Data Discovery" },
                { icon: GitBranch, label: "System Mapping" },
                { icon: Brain, label: "Model Selection" },
                { icon: Code2, label: "Logic Staging" },
                { icon: Zap, label: "Pilot Deployment" },
                { icon: BarChart3, label: "Scale & Optimize" },
              ].map((step, i) => (
                <div key={i} className="group relative bg-white border-r border-b border-slate-100 p-8 hover:bg-blue-50/30 transition-all duration-300 min-h-[300px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 rounded-sm bg-[#0B1B3D] text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <step.icon size={20} />
                      </div>
                      <span className="text-[10px] font-black text-slate-300" style={{ fontFamily: "'JetBrains Mono', monospace" }}>0{i + 1}</span>
                    </div>

                    <h3 className="mb-4 tracking-tighter uppercase">
                      {industry.process[i]?.step || step.label}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      {industry.process[i]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility."}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="h-px flex-1 bg-slate-100 group-hover:bg-blue-200 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <RelatedCaseStudies industryFilter={industry.title} title={`AI Success Stories in ${industry.title}`} />

        {/* 4. Strategic Modules - Condensed Capability Matrix */}
        <section data-testid="industry-services-section" className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Column - Tighter summary */}
              <div className="lg:col-span-3 lg:sticky lg:top-24 h-fit">
                <AnimatedSection>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                  <h2 className="mb-6">
                    {industry.title} <br />Operational <span className="opacity-30">Fit</span>
                  </h2>

                  {/* Compact Stats */}
                  <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-widest">Readiness</span>
                      <span className="text-blue-600 text-xs font-black">94.8%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 rounded-full">
                      <div className="h-full bg-blue-600 w-[94.8%]" />
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column - High-density 3-column grid */}
              <div className="lg:col-span-9">
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {services.slice(0, 9).map((s, i) => (
                    <StaggerItem key={s.slug}>
                      <a
                        href={`/services/${s.slug}`}
                        className="group block p-6 bg-white border border-slate-100 rounded-xl hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-1 rounded-full bg-blue-500" />
                          <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>MOD_0{i + 1}</span>
                        </div>

                        <h3 className="mb-2 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 leading-snug font-medium line-clamp-2 mb-4">
                          {s.shortDesc}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                          <span className="text-[9px] font-black text-slate-300 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Detail View</span>
                          <ArrowRight size={12} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Security Section (Domain Requirement) */}
        <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <AnimatedSection>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-300">Assurance</p>
                  <h2 className="mb-8">
                    Hardened <br /><span className="opacity-40">Security Layers</span>
                  </h2>
                  <div className="space-y-6">
                    {[
                      "Zero-trust data access protocols",
                      "PII/PHI localized masking engines",
                      "SOC2 & HIPAA compliant staging",
                      "Immutable audit logging systems"
                    ].map(protocol => (
                      <div key={protocol} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{protocol}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Data Residency", val: "LOCAL_EDGE", desc: "Keep data in-region to meet sovereignty requirements." },
                    { title: "Inference Safety", desc: "Advanced guardrails to prevent hallucination in critical contexts." },
                    { title: "Auditability", desc: "Every model decision is traceable back to training inputs." },
                    { title: "Redundancy", val: "99.99% UP", desc: "High-availability clusters for mission-critical industrial use." },
                  ].map((item, i) => (
                    <div key={i} className="p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors rounded-none">
                      <span className="text-[10px] font-black text-blue-400 mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.val || `SEC_MOD_0${i + 1}`}</span>
                      <h3 className="mb-3 tracking-tighter uppercase">{item.title}</h3>
                      <p className="text-[12px] text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack for Industry */}
        <section data-testid="industry-tech-stack" className="py-6 sm:py-8 md:py-10 bg-white relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2 className="mb-4">
                  Technologies for {industry.title}
                </h2>
                <p className="text-base text-slate-500 max-w-2xl">Reference stack combinations commonly used to meet domain reliability and compliance requirements.</p>
              </div>
            </AnimatedSection>

            <div className="space-y-8 lg:space-y-14 relative">
              {[
                { cat: "AI & ML MODELS", desc: "Core intelligence layers focused on inference quality and prompt performance.", techs: ["GPT-4o", "Claude 3.5", "TensorFlow", "PyTorch", "LangChain", "Vector DBs"] },
                { cat: "LANGUAGE & FRAMEWORKS", desc: "Stable application foundations for high-concurrency enterprise workloads.", techs: ["Python / FastAPI", "Node.js", "Java Spring", "Go-Micro", "GraphQL", "REST"] },
                { cat: "DATA & PIPELINES", desc: "Robust data orchestration and warehousing for real-time AI context.", techs: ["Snowflake", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Apache Airflow"] },
                { cat: "CLOUD & DEPLOYMENT", desc: "Scalable infrastructure with hardened security and compliance wrappers.", techs: ["AWS / Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Labs", "Serverless"] },
              ].map((c, i) => (
                <div
                  key={c.cat}
                  className="sticky top-[100px] border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 bg-[#0B1B3D] text-white"
                  style={{
                    marginTop: i === 0 ? 0 : `${i * 32}px`,
                    zIndex: i + 1
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[350px]">
                    {/* Left: Category Label */}
                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.02]">
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-6">Module 0{i + 1}</span>
                      <h3 className="mb-6" >{c.cat}</h3>
                      <p className="text-sm text-blue-100/40 leading-relaxed font-medium">{c.desc}</p>
                    </div>

                    {/* Right: Tech List */}
                    <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {c.techs.map((t) => (
                          <div key={t} className="flex items-center gap-3 group">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                            <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 4. Strategic CTA (Pinned Layer) */}
      <div className="sticky top-0 z-0 h-[60vh] flex flex-col justify-center bg-[#070e1a] text-white overflow-hidden">
        {/* Cinematic High-Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />

        <CTASection
          compact
          title={`Plan a Practical ${industry.title} Rollout`}
          description={`Schedule a consultation to align use cases, controls, and execution milestones for your operating context.`}
        />
      </div>

      {/* 5. Surface Layer 2 */}
      <div className="relative z-30 bg-white text-[#0B1B3D] shadow-[0_-40px_100px_rgba(0,0,0,0.2)]">
        {/* Testimonials */}
        <TestimonialsSection title={`What ${industry.title} Leaders Say About Us`} />

        {/* Blog */}
        <RelatedBlog title={`${industry.title} AI Insights`} />

        {/* FAQ */}
        <FAQSection faqs={industry.faqs} />

        {/* Contact */}
        <div id="page-contact" className="bg-white">
          <PageContactForm context={`Industry: ${industry.title}`} />
        </div>
      </div>
    </div>
  );
}

