import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import caseStudies from "../data/caseStudies";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { TRACEFOLD } from "../lib/tracefoldLabel";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Not Found</h1><Link to="/case-studies" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div>
      <PageHero label={cs.industry} title={cs.heroTitle} description={cs.heroDesc} primaryCTA={{ text: "Discuss this pattern", href: "#page-contact" }} secondaryCTA={{ text: `All ${TRACEFOLD} narratives`, href: "/case-studies" }} image={cs.heroImage} />

      <div className="bg-amber-50 border-b border-amber-100">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4 text-sm text-amber-950/90 leading-relaxed max-w-4xl">
          <strong className="font-semibold">{TRACEFOLD} pattern.</strong> This page describes a representative delivery narrative aligned with NeuralTrix services, not a claim about a specific completed customer program. Use it to compare your situation to our methodology; contact us to scope a pilot for your environment.
        </div>
      </div>

      <div className="bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
          <Link to="/case-studies" data-testid="back-to-case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All {TRACEFOLD} narratives</Link>
        </div>
      </div>

      {/* Program dimensions */}
      <section className="py-6 sm:py-8 md:py-10 bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">Methodology</p>
          <h2 className="text-2xl font-bold text-[#0B1B3D] tracking-tight">Methodology for scoping this scenario</h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            These dimensions are planning lenses for a pilot, not guaranteed results from a prior engagement.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cs.results.map((r, i) => (
              <StaggerItem key={i}>
                <div data-testid={`result-${i}`} className="text-center">
                  <span className="text-4xl font-extrabold text-[#0B1B3D] block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r.metric}</span>
                  <p className="text-sm font-bold text-[#0B1B3D] mt-1">{r.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="mb-6" >
                The <span className="opacity-30">Challenge</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">{cs.challenge}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="mb-6" >
                Delivery <span className="opacity-30">approach</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">{cs.solution}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features & Tech */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="mb-6" >Capability areas we typically implement</h2>
              <ul className="space-y-3">
                {cs.features.map((f, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{f}</li>))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="mb-6" >Technology Stack</h2>
              <TechStackLogoGrid items={cs.techStack} gridClassName="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection title="Next Step for Your Roadmap" description="Share your constraints and timeline; we map this pattern, or an adjusted variant, to your systems, governance model, and success measures." />
      <TestimonialsSection title="How we engage new partners" />
      <FAQSection faqs={cs.faqs} />
      <RelatedBlog />
      <PageContactForm context={`${TRACEFOLD}: ${cs.title}`} />
    </div>
  );
}

