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
import solutions from "../data/solutions";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Solution Not Found</h1><Link to="/solutions" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div className="bg-[#0B1B3D]">
      {/* 1. Hero with Sticky Behavior */}
      <div className="sticky top-0 z-0 h-[60vh] overflow-hidden">
        <PageHero
          label="Solutions"
          title={solution.heroTitle}
          description={solution.heroDesc}
          primaryCTA={{ text: "Request a Demo", href: "#page-contact" }}
          secondaryCTA={{ text: "View Capabilities", href: "#features" }}
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

        {/* 3. Overview + Sidebar */}
        <section className="py-6 sm:py-8 md:py-10 bg-white relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
              <div className="lg:col-span-12 xl:col-span-8">
                <AnimatedSection>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Operating model</p>
                      <h2 className="">Strategic Overview</h2>
                    </div>
                    <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-6 py-1">
                      <span className="text-3xl font-black text-[#0B1B3D] tracking-tighter">98.5%</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Response<br />Accuracy</span>
                    </div>
                  </div>

                  <div className="max-w-4xl">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 lg:mb-14">
                      {solution.overview}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                      <div className="group">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#0B1B3D] group-hover:text-white transition-all duration-500">
                          <Brain size={20} />
                        </div>
                        <h4 className="uppercase tracking-widest mb-3">Core Value Proposition</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                          Engineered to eliminate information silos and accelerate decision velocity through high-concurrency AI processing.
                        </p>
                      </div>
                      <div className="group">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#0B1B3D] group-hover:text-white transition-all duration-500">
                          <Layers size={20} />
                        </div>
                        <h4 className="uppercase tracking-widest mb-3">Deployment Fit</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                          Optimized for heterogeneous enterprise environments with support for multi-cloud and hybrid configurations.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-12 xl:col-span-4">
                <AnimatedSection delay={0.2}>
                  <div className="bg-[#F1F5F9]/50 border border-slate-200 rounded-3xl p-8 sm:p-10 sticky top-24 shadow-sm">
                    <div className="mb-10">
                      <h3 className="uppercase tracking-[0.3em] mb-6">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {solution.tech.map((t) => (
                          <span key={t} className="text-[10px] px-3 py-1.5 bg-white border border-slate-200 text-[#0B1B3D] rounded-lg font-black shadow-sm group hover:border-[#2563EB] transition-colors cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="uppercase tracking-[0.3em] mb-6">Primary Use Cases</h3>
                      <ul className="space-y-4">
                        {solution.useCases.slice(0, 5).map((u) => (
                          <li key={u} className="text-[13px] text-slate-600 flex items-start gap-4 font-bold group text-left">
                            <div className="w-5 h-5 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0B1B3D] group-hover:border-[#0B1B3D] transition-all duration-300">
                              <CheckCircle2 size={10} className="text-[#2563EB] group-hover:text-white" />
                            </div>
                            <span className="group-hover:text-[#0B1B3D] transition-colors">{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Impact Stats */}
        <ImpactStats title="Solution Value Indicators" customStats={[
          { value: "10x", label: "Faster information retrieval" },
          { value: "95%", label: "Response accuracy rate" },
          { value: "70%", label: "Reduction in manual work" },
          { value: "24/7", label: "Always-on availability" },
          { value: "50+", label: "Integration connectors" },
        ]} />

        {/* 5. Features */}
        <section id="features" className="py-6 sm:py-8 md:py-10 bg-white relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="mb-10 sm:mb-14">
                Functional <span className="opacity-30">Capabilities</span>
              </h2>
            </AnimatedSection>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
              {solution.features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="group h-full bg-white border-r border-b border-slate-100 p-8 sm:p-10 hover:bg-slate-50/50 transition-all duration-300 relative overflow-hidden">
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
                        <span className="text-[9px] font-black text-slate-300 group-hover:text-blue-600 uppercase tracking-widest transition-colors">Operational</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </div>

      {/* 6. Pinned CTA Layer */}
      <div className="sticky top-0 z-0 h-[55vh] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection title={`Evaluate ${solution.title} for Your Environment`} description="Assess integration effort, governance fit, and likely operational impact." />
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
                    Adoption <span className="opacity-30">Path</span>
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Our structured integration workflow ensures zero-friction deployment and rapid proof-of-value.
                  </p>
                </AnimatedSection>
              </div>

              {/* Steps Column */}
              <div className="lg:w-2/3">
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { step: "Connect Data", desc: "Link existing sources through secure permission-aware connectors.", icon: Database },
                    { step: "Configure Scope", desc: "Define AI behavior and roles to your needs.", icon: Code2 },
                    { step: "Validate Logic", desc: "Review and validate ground-truth responses at scale.", icon: Brain },
                    { step: "Scale Output", desc: "Go live, monitor usage, and iterate on quality.", icon: Zap },
                  ].map((s, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-lg hover:border-blue-500/20 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-lg bg-[#0B1B3D] flex items-center justify-center shrink-0 text-white shadow-sm group-hover:bg-blue-600 transition-colors">
                          <s.icon size={18} />
                        </div>
                        <div>
                          <h3 className="mb-1 tracking-tight uppercase">{s.step}</h3>
                          <p className="text-[11px] text-slate-500 leading-tight font-medium">{s.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <TestimonialsSection title="Feedback from Teams Running Similar Solutions" />

        {/* 9. FAQ */}
        <FAQSection faqs={solution.faqs} />

        {/* 10. Blog */}
        <RelatedBlog />

        {/* 11. Contact */}
        <div id="page-contact">
          <PageContactForm context={solution.title} />
        </div>
      </div>
    </div>
  );
}

