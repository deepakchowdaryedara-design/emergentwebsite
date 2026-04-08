import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Industry Not Found</h1><Link to="/industries" className="text-[#2563EB] ml-4">Back</Link></div>);
  }

  return (
    <div>
      <PageHero label="Industries" title={industry.heroTitle} description={industry.heroDesc} primaryCTA={{ text: "Get Industry Assessment", href: "#page-contact" }} secondaryCTA={{ text: "All Industries", href: "/industries" }} image={industry.heroImage} />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4">
          <Link to="/industries" data-testid="back-to-industries" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#2563EB]"><ArrowLeft size={14} /> All Industries</Link>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection><p className="text-base text-slate-600 leading-relaxed max-w-3xl text-lg">{industry.overview}</p></AnimatedSection>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>AI Solutions for {industry.title}</h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.features.map((f, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-slate-200 rounded-sm p-8 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CheckCircle2 size={20} className="text-[#2563EB] mb-4" />
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats title={`${industry.title} AI Impact`} customStats={[
        { value: "45%", label: "Average efficiency improvement" },
        { value: "3x", label: "Faster decision making" },
        { value: "60%", label: "Cost reduction potential" },
        { value: "99.9%", label: "System uptime guarantee" },
        { value: "2x", label: "Revenue growth acceleration" },
      ]} />

      <CTASection title={`Ready to Transform ${industry.title}?`} description="Schedule a consultation to discuss how AI can drive measurable results." />

      {/* Process Roadmap */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Our Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Implementation Roadmap</h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.process.map((p, i) => (
              <StaggerItem key={i}>
                <div className="relative border border-slate-200 rounded-sm p-8 bg-white hover:-translate-y-1 transition-all duration-300">
                  <span className="text-5xl font-extrabold text-slate-100 absolute top-4 right-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{p.step}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Related Case Studies */}
      <RelatedCaseStudies industryFilter={industry.title} title={`AI Success Stories in ${industry.title}`} />

      {/* Services We Offer for this Industry */}
      <section data-testid="industry-services-section" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Our Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                How We Help {industry.title} Companies
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s) => (
              <StaggerItem key={s.slug}>
                <a href={`/services/${s.slug}`} className="group border border-slate-200 rounded-sm p-6 bg-white hover:bg-[#0B1B3D] transition-all duration-300 block h-full">
                  <s.icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors mb-4" />
                  <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-white transition-colors mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{s.title}</h3>
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">{s.shortDesc}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Tech Stack for Industry */}
      <section data-testid="industry-tech-stack" className="py-20 sm:py-24" style={{ backgroundColor: "#0B1B3D" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Tech Stack</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                Technologies for {industry.title}
              </h2>
              <p className="text-base text-slate-400">Enterprise-grade tools powering our {industry.title.toLowerCase()} solutions.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: "AI & ML", techs: ["GPT-4o", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "RAG"] },
              { cat: "Backend", techs: ["Python", "Node.js", "Java", "Go", "GraphQL", "REST APIs"] },
              { cat: "Data", techs: ["Snowflake", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Airflow"] },
              { cat: "Cloud & DevOps", techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
            ].map((c) => (
              <StaggerItem key={c.cat}>
                <div className="border border-white/10 rounded-sm p-6 hover:border-[#2563EB]/40 transition-colors">
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">{c.cat}</h3>
                  <div className="space-y-3">
                    {c.techs.map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full" />
                        <span className="text-sm text-slate-400">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection title={`What ${industry.title} Leaders Say About Us`} />

      {/* Blog */}
      <RelatedBlog title={`${industry.title} AI Insights`} />

      {/* FAQ */}
      <FAQSection faqs={industry.faqs} />

      {/* Contact */}
      <PageContactForm context={`Industry: ${industry.title}`} />
    </div>
  );
}
