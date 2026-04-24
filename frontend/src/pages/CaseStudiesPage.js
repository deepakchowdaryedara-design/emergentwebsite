import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import caseStudies from "../data/caseStudies";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHero
        label="Case Studies"
        title="Case Studies from Complex AI Transformation Programs"
        description="See how client teams solved specific operational challenges, which decisions mattered most, and what measurable outcomes followed."
        primaryCTA={{ text: "Start Your Project", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.caseStudies}
      />
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                data-testid={`case-study-link-${cs.slug}`}
                className="group border border-slate-200 rounded-sm overflow-hidden hover:border-[#2563EB]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-[#0B1B3D]/10 shrink-0">
                  <img
                    src={cs.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{cs.industry}</span>
                      <h3 className="text-xl font-bold text-[#0B1B3D] mt-2 group-hover:text-[#2563EB] transition-colors" >{cs.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{cs.client}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{cs.challenge.substring(0, 150)}...</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.slice(0, 4).map((t) => (<span key={t} className="text-xs px-2 py-1 border border-slate-200 text-slate-500 rounded-sm">{t}</span>))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Results Snapshot</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D] mb-5" >
                Program <span className="text-[#0B1B3D]/30">Outcomes</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "2-5x", label: "Faster delivery and decision cycles" },
              { value: "40-75%", label: "Cost reduction in target workflows" },
              { value: "500K+", label: "End-user interactions processed" },
              { value: "50+", label: "Production integrations delivered" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-sm border border-slate-200 p-6 bg-[#F8FAFC] h-full">
                  <p className="text-3xl font-bold text-[#0B1B3D] mb-2" >{item.value}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Discovery Channels</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D] mb-5" >
                Explore by <span className="text-[#0B1B3D]/30">Objective</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "By Industry", desc: "Healthcare, education, consumer tech, travel, finance, and enterprise operations." },
              { title: "By Use Case", desc: "Automation, personalization, intelligence layers, content generation, and analytics." },
              { title: "By Technology", desc: "LLMs, RAG, cloud-native platforms, vector databases, and integration stacks." },
              { title: "By Impact Type", desc: "Cost savings, speed-to-delivery, quality uplift, and revenue acceleration." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-sm border border-slate-200 bg-white p-6 h-full">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12 text-left">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Delivery Methodology</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D]" >
                Execution <span className="text-[#0B1B3D]/30">Pattern</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Context Audit", desc: "Map goals, constraints, and baseline metrics." },
              { step: "02", title: "Architecture Fit", desc: "Select stack and design production-ready workflows." },
              { step: "03", title: "Pilot Validation", desc: "Deploy focused use case and validate KPI movement." },
              { step: "04", title: "Scale Program", desc: "Expand rollout with governance and optimization." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-6 h-full">
                  <span className="inline-flex items-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#2563EB] mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    STEP {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <PageContactForm context="Case Studies Page" />
    </div>
  );
}

