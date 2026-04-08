import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
    <div>
      {/* 1. Hero */}
      <PageHero label="Solutions" title={solution.heroTitle} description={solution.heroDesc} primaryCTA={{ text: "Request a Demo", href: "#page-contact" }} secondaryCTA={{ text: "All Solutions", href: "/solutions" }} image={solution.heroImage} />

      {/* 2. Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/solutions" data-testid="back-to-solutions" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Solutions</Link>
        </div>
      </div>

      {/* 3. Overview + Sidebar */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Overview</h2>
              <p className="text-base text-slate-600 leading-relaxed">{solution.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-6">
                <h3 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.tech.map((t) => (<span key={t} className="text-xs px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-sm font-medium">{t}</span>))}
                </div>
                <h3 className="text-sm font-semibold text-[#0B1B3D] uppercase tracking-wider mt-6 mb-4">Use Cases</h3>
                <ul className="space-y-2">
                  {solution.useCases.map((u) => (<li key={u} className="text-sm text-slate-600 flex items-start gap-2"><CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 flex-shrink-0" />{u}</li>))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Impact Stats */}
      <ImpactStats title="Platform Impact" customStats={[
        { value: "10x", label: "Faster information retrieval" },
        { value: "95%", label: "Response accuracy rate" },
        { value: "70%", label: "Reduction in manual work" },
        { value: "24/7", label: "Always-on availability" },
        { value: "50+", label: "Integration connectors" },
      ]} />

      {/* 5. Features */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Key Features</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((f, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-slate-200 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-8 h-8 bg-[#0B1B3D] rounded-sm flex items-center justify-center mb-4">
                    <span className="text-xs text-white font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection title={`Transform Your Operations with ${solution.title}`} description="Schedule a demo to see how this solution addresses your specific business challenges." />

      {/* 7. How It Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Getting Started is Simple</h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Connect Your Data", desc: "Link your existing data sources, documents, and systems through our secure connectors." },
              { step: "Configure & Customize", desc: "Set up user permissions, customize the interface, and configure AI behavior to your needs." },
              { step: "Train & Validate", desc: "The AI learns from your data. Review and validate responses to ensure accuracy." },
              { step: "Deploy & Scale", desc: "Go live with your team. Monitor usage, gather feedback, and continuously improve." },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="relative border border-slate-200 rounded-sm p-6 bg-white">
                  <span className="text-4xl font-extrabold text-slate-100 absolute top-3 right-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold text-[#0B1B3D] mb-2">{s.step}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 8. Testimonials */}
      <TestimonialsSection title="Trusted by Industry Leaders" />

      {/* 9. FAQ */}
      <FAQSection faqs={solution.faqs} />

      {/* 10. Blog */}
      <RelatedBlog />

      {/* 11. Contact */}
      <PageContactForm context={solution.title} />
    </div>
  );
}
