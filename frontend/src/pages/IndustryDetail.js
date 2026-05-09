import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Brain, Database, Bot, Code2, Smartphone, Users, GitBranch, BarChart3, Zap, Share2, ShieldCheck, Activity } from "lucide-react";
import { useEffect } from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import ImpactStats from "../components/ImpactStats";
import RelatedCaseStudies from "../components/RelatedCaseStudies";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import CategorizedTechStackSection from "../components/CategorizedTechStackSection";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import DomainAssurance from "../components/DomainAssurance";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
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
          primaryCTA={{ text: "Get Industry Assessment", href: "#page-contact", contactIntent: "consultation" }}
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
                      Coverage Across <span className="corp-heading-secondary">sector context</span>
                    </h2>
                    <div className="h-px w-20 bg-blue-500 mb-8" />
                    <p className="text-base lg:text-lg text-[#0B1B3D] leading-relaxed font-medium mb-8">
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
                        <span className="bg-[#0B1B3D] text-white text-[8px] font-black px-2 py-1 rounded-sm uppercase tracking-widest">Reference architecture</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <ArchitecturalShowcase 
          title={`Coverage Across AI capabilities for ${industry.title}`}
          description="Typical capability bundles we scope with sector stakeholders, not a fixed bundle sold as a single SKU."
          capabilities={industry.features}
        />

        <DomainAssurance />

        {/* 3. Industry Implementation Workflow - Linear Technical Model */}
        <section className="py-6 sm:py-8 md:py-10 bg-white relative overflow-hidden border-y border-slate-100">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
            <div className="max-w-2xl mb-10 lg:mb-12">
              <AnimatedSection>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
                <h2 className="mb-8">
                  Methodology for <span className="corp-heading-secondary">{industry.title} delivery phases</span>
                </h2>
                <p className="text-sm text-slate-600 max-w-xl">This methodology sequences discovery through scale so security and operational checkpoints occur before irreversible commitments.</p>
              </AnimatedSection>
            </div>

            <MethodologyFlowchart 
              steps={[
                { icon: Database, label: industry.process[0]?.step || "Data Discovery", desc: industry.process[0]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
                { icon: GitBranch, label: industry.process[1]?.step || "System Mapping", desc: industry.process[1]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
                { icon: Brain, label: industry.process[2]?.step || "Model Selection", desc: industry.process[2]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
                { icon: Code2, label: industry.process[3]?.step || "Logic Staging", desc: industry.process[3]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
                { icon: Zap, label: industry.process[4]?.step || "Pilot Deployment", desc: industry.process[4]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
                { icon: BarChart3, label: industry.process[5]?.step || "Scale & Optimize", desc: industry.process[5]?.desc || "Standardizing data inputs and mapping legacy infrastructure for AI compatibility." },
              ]} 
            />
          </div>
        </section>

        {/* Related Case Studies */}
        <RelatedCaseStudies showLabel={false} industryFilter={industry.title} title={`Coverage across ${industry.title} scenarios`} />

        {/* 4. Strategic Modules - Ultra-Compact Double-Column Registry */}
        <section data-testid="industry-services-section" className="py-8 bg-white border-y border-slate-100">
          <div className="w-full px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-6 bg-blue-600 rounded-full" />
                <h2 className="text-lg lg:text-xl font-bold text-[#0B1B3D] tracking-tight">
                  Operational Service Matrix <span className="text-slate-400 font-medium mx-2">/</span> <span className="text-blue-600">{industry.title}</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Active Inventory: {services.slice(0, 8).length} Modules</span>
              </div>
            </div>

            {/* Double-Column High-Density Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 border-t border-slate-100">
               {services.slice(0, 8).map((s, i) => (
                 <a 
                   href={`/services/${s.slug}`} 
                   key={i} 
                   className="flex items-center justify-between py-4 border-b border-slate-100 hover:bg-blue-50/30 transition-all duration-300 group px-2"
                 >
                    <div className="flex items-center gap-8">
                       <span className="font-mono text-[11px] font-bold text-slate-300 group-hover:text-blue-600 transition-colors">0{i+1}</span>
                       <div>
                          <h4 className="text-[13px] font-bold text-[#0B1B3D] uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                             {s.title}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5 line-clamp-1">{s.shortDesc}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-blue-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                       <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-all group-hover:translate-x-0.5" />
                    </div>
                 </a>
               ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
               <p className="text-[10px] text-slate-400 font-medium italic">
                  * All modules are SOC 2 Type II verified for {industry.title} deployment.
               </p>
               <Link to="/services" className="text-[9px] font-bold text-blue-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                  Full Registry →
               </Link>
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
                    Assurance for <span className="corp-heading-secondary">security and compliance posture</span>
                  </h2>
                  <p className="text-sm text-slate-300/90 max-w-md mb-6">This assurance model states control patterns we design toward; specific certifications and attestations are agreed per engagement.</p>
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
                      {item.val ? (
                        <span className="text-[10px] font-black text-blue-400 mb-4 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.val}</span>
                      ) : null}
                      <h3 className="mb-3 tracking-tighter uppercase">{item.title}</h3>
                      <p className="text-[12px] text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CategorizedTechStackSection
          dataTestId="industry-tech-stack"
          title={`Reference technology stack for ${industry.title}`}
          intro="Example groupings for planning and architecture discussions. Final selection follows your constraints, procurement rules, and operational requirements."
          categories={[
            {
              title: "AI & ML models",
              description:
                "Inference quality, evaluation harnesses, and retrieval patterns aligned to production risk.",
              techs: ["GPT-4o", "Claude 3.5", "TensorFlow", "PyTorch", "LangChain", "Vector DBs"],
            },
            {
              title: "Languages & frameworks",
              description:
                "Application foundations suited to throughput, observability, and change control.",
              techs: ["Python / FastAPI", "Node.js", "Java Spring", "Go-Micro", "GraphQL", "REST"],
            },
            {
              title: "Data & pipelines",
              description:
                "Orchestration, storage, and streaming interfaces that support governed AI workloads.",
              techs: ["Snowflake", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Apache Airflow"],
            },
            {
              title: "Cloud & deployment",
              description:
                "Infrastructure patterns with security boundaries, automation, and operational visibility.",
              techs: ["AWS / Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Labs", "Serverless"],
            },
          ]}
        />
      </div>

      {/* 4. Strategic CTA (Pinned Layer) */}
      <div className="sticky top-0 z-0 h-[60vh] flex flex-col justify-center bg-[#070e1a] text-white overflow-hidden">
        {/* Cinematic High-Tech Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />

        <CTASection
          compact
          title={`Next Step for ${industry.title} Programs`}
          description={`Schedule a consultation to align use cases, controls, and milestones to your operating context and governance model.`}
        />
      </div>

      {/* 5. Surface Layer 2 */}
      <div className="relative z-30 bg-white text-[#0B1B3D] shadow-[0_-40px_100px_rgba(0,0,0,0.2)]">
        {/* Testimonials */}
        <TestimonialsSection title={`Engagement: ${industry.title}`} />

        {/* Blog */}
        <RelatedBlog title={`Articles: ${industry.title}`} />

        {/* FAQ */}
        <FAQSection faqs={industry.faqs} />

        {/* Contact */}
        <div className="bg-white">
          <PageContactForm context={`Industry: ${industry.title}`} />
        </div>
      </div>
    </div>
  );
}

