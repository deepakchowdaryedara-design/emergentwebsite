import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Quote } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import PageContactForm from "../components/PageContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import RelatedBlog from "../components/RelatedBlog";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import caseStudies from "../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Not Found</h1><Link to="/case-studies" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div>
      <PageHero label={cs.industry} title={cs.heroTitle} description={cs.heroDesc} primaryCTA={{ text: "Discuss a Similar Initiative", href: "#page-contact" }} secondaryCTA={{ text: "All Case Studies", href: "/case-studies" }} image={cs.heroImage} />

      <div className="bg-white border-b border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-4">
          <Link to="/case-studies" data-testid="back-to-case-studies" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Case Studies</Link>
        </div>
      </div>

      {/* Results */}
      <section className="py-16 bg-white border-b border-slate-200">
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
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Context</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-6" >
                The <span className="text-[#0B1B3D]/30">Challenge</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">{cs.challenge}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Delivery</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-6" >
                Our <span className="text-[#0B1B3D]/30">Solution</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">{cs.solution}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features & Tech */}
      <section className="py-20 sm:py-24 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] mb-6" >Key Features Delivered</h2>
              <ul className="space-y-3">
                {cs.features.map((f, i) => (<li key={i} className="text-sm text-slate-600 flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0" />{f}</li>))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] mb-6" >Technology Stack</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {cs.techStack.map((t) => (<span key={t} className="text-sm px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-sm font-medium">{t}</span>))}
              </div>
              {cs.testimonial && (
                <div className="bg-white border border-slate-200 rounded-sm p-8">
                  <Quote size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm text-slate-600 leading-relaxed italic mb-4">{cs.testimonial.text}</p>
                  <p className="text-sm font-bold text-[#0B1B3D]">{cs.testimonial.author}</p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection title="Looking for Comparable Outcomes?" description="We can assess whether this delivery pattern fits your constraints, team setup, and KPI expectations." />
      <TestimonialsSection title="Additional Client Perspectives" />
      <FAQSection faqs={cs.faqs} />
      <RelatedBlog />
      <PageContactForm context={`Case Study: ${cs.title}`} />
    </div>
  );
}

