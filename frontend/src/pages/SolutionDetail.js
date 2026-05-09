import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Brain, Layers, Database, Code2, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import ImpactStats from "../components/ImpactStats";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import MethodologyFlowchart from "../components/MethodologyFlowchart";
import DomainAssurance from "../components/DomainAssurance";
import ArchitecturalShowcase from "../components/ArchitecturalShowcase";
import solutions from "../data/solutions";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { FlatTechStackPanel } from "../components/CategorizedTechStackSection";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Solution Not Found</h1><Link to="/solutions" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  const methodologySteps = [
    { label: "Architecture Discovery", status: "Completed" },
    { label: "Systems Integration", status: "Active" },
    { label: "Security Validation", status: "Pending" },
    { label: "Operational Rollout", status: "Pending" },
  ];

  return (
    <div className="bg-[#0B1B3D]">
      {/* 1. Hero with Sticky Behavior */}
      <div className="sticky top-0 z-0 h-[60vh] overflow-hidden">
        <PageHero
          label="Solutions"
          title={solution.heroTitle}
          description={solution.heroDesc}
          primaryCTA={{ text: "Request a briefing", href: "#page-contact", contactIntent: "consultation" }}
          secondaryCTA={{ text: "View capabilities", href: "#features" }}
          image={solution.heroImage}
        />
      </div>

      {/* 2. Page Content - Scrolling Over Hero */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">

        {/* 2. Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
            <Link to="/solutions" data-testid="back-to-solutions" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Solutions</Link>
          </div>
        </div>

        {/* 3. Overview + Sidebar - Optimized Engineering Portal */}
        <section className="relative py-12 lg:py-16 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
            {/* Header with Process Stepper - Rebalanced Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 items-start">
              <div className="lg:col-span-7 pt-2 relative">
                {/* Visual Connector Line */}
                <div className="absolute -right-8 top-1/2 w-16 h-px bg-gradient-to-r from-blue-200 to-transparent hidden xl:block" />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                    <span className="text-[9px] font-black text-blue-700 uppercase tracking-widest">Operational Framework</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-black text-emerald-700 uppercase tracking-widest">Operational</span>
                  </div>
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-[#0B1B3D] lg:text-[2.5rem] lg:leading-tight uppercase mb-4">
                  Technical <span className="text-blue-600">Methodology</span>
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
                <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">
                  {solution.overview}
                </p>
              </div>

              {/* Technical Process Stepper - Right Aligned */}
              <div className="lg:col-span-5 flex justify-end">
                <div className="w-full lg:max-w-[420px] bg-white border border-slate-200 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-16 -mt-16" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-widest">Execution Pipeline</h4>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Q2 Deployment Cycle</span>
                    </div>
                    {methodologySteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[9px] font-black ${
                            step.status === 'Active' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 
                            step.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                          }`}>
                            {i + 1}
                          </div>
                          {i < methodologySteps.length - 1 && (
                            <div className={`w-0.5 h-4 my-1 ${step.status === 'Completed' ? 'bg-emerald-200' : 'bg-slate-100'}`} />
                          )}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className={`text-[11px] font-black uppercase tracking-tight ${
                            step.status === 'Active' ? 'text-[#0B1B3D]' : 'text-slate-400'
                          }`}>
                            {step.label}
                          </span>
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${
                            step.status === 'Active' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                            step.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-50 text-slate-300'
                          }`}>
                            {step.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Main Content Column */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group relative p-6 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Brain size={20} className="text-blue-600 group-hover:text-white" />
                    </div>
                    <h4 className="text-[11px] font-black text-[#0B1B3D] uppercase tracking-widest">Core Value</h4>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                    Consolidates dispersed documents and systems into governed retrieval and answer workflows aligned to access policy.
                  </p>
                </div>

                <div className="group relative p-6 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Layers size={20} className="text-blue-600 group-hover:text-white" />
                    </div>
                    <h4 className="text-[11px] font-black text-[#0B1B3D] uppercase tracking-widest">Deployment</h4>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                    Optimized for heterogeneous enterprise environments with support for multi-cloud and hybrid configurations.
                  </p>
                </div>

                <div className="md:col-span-2 group relative p-6 rounded-3xl bg-[#0B1B3D] text-white overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-md">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Grounded Precision</h4>
                      <p className="text-[13px] text-slate-300 font-medium leading-relaxed">
                        Every output is backed by forensic citation accuracy, ensuring verifiability across all semantic nodes.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="block text-2xl font-black tracking-tighter leading-none">99.9%</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Accuracy</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                        <Zap size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar/Dashboard Column */}
              <div className="lg:col-span-4">
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-4 bg-blue-600 rounded-full" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B1B3D]">Infrastructure</h3>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                      <TechStackLogoGrid
                        items={solution.tech}
                        compact
                        marqueeColumnCap={3}
                        marqueeColumnHeightClassName="h-28 min-h-[7rem]"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-4 bg-blue-600 rounded-full" />
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B1B3D]">Primary Use Cases</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {solution.useCases.slice(0, 4).map((u) => (
                        <li key={u} className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-blue-600">
                            <CheckCircle2 size={8} className="text-white" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-600 group-hover/item:text-[#0B1B3D] transition-colors">{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DomainAssurance />

        {/* Features */}
        <ArchitecturalShowcase 
          title="Functional Capabilities"
          description="Service modules are structured to shorten time-to-value while keeping architecture and operations maintainable."
          capabilities={solution.features}
        />
      </div>

      {/* 6. Pinned CTA Layer */}
      <div className="sticky top-0 z-0 h-[55vh] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection title={`Next Step for ${solution.title}`} description="Assess integration effort, governance fit, and operational impact for your environment and stakeholder model." />
      </div>

      {/* 7. Surface Layer 2 */}
      <div className="relative z-10 bg-white text-[#0B1B3D] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* 7. How It Works - High-Density Compact Sequence */}
        <section className="py-6 sm:py-8 md:py-10 border-y border-slate-100 relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-20">
              {/* Header Column */}
              <div className="lg:w-1/3">
                <AnimatedSection>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                  <h2 className="mb-4">
                    Adoption <span className="corp-heading-secondary">Path</span>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    This adoption path sequences connectivity, configuration, validation, and rollout with explicit checkpoints.
                  </p>
                </AnimatedSection>
              </div>

              {/* Steps Column */}
              <div className="lg:w-2/3">
            <MethodologyFlowchart 
              steps={[
                { icon: Database, label: "Connect Data", desc: "Link existing sources through secure permission-aware connectors." },
                { icon: Code2, label: "Configure Scope", desc: "Define AI behavior and roles to your needs." },
                { icon: Brain, label: "Validate Logic", desc: "Review and validate ground-truth responses at scale." },
                { icon: Zap, label: "Scale Output", desc: "Go live, monitor usage, and iterate on quality." },
              ]} 
            />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <TestimonialsSection title="How we engage new partners" />

        {/* 9. FAQ */}
        <FAQSection faqs={solution.faqs} />

        {/* 10. Blog */}
        <RelatedBlog />

        {/* 11. Contact */}
        <div>
          <PageContactForm context={solution.title} />
        </div>
      </div>
    </div>
  );
}

