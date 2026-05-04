import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import caseStudies from "../data/caseStudies";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import TechStackLogoGrid from "../components/TechStackLogoGrid";
import { TRACEFOLD } from "../lib/tracefoldLabel";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHero
        label="Delivery scenarios"
        title={`${TRACEFOLD}-Indexed Programs Aligned to Our Services`}
        description={`These ${TRACEFOLD} narratives show how NeuralTrix approaches common AI and software problems, so you can judge fit before a pilot. They are not endorsements or guarantees from named customers.`}
        primaryCTA={{ text: "Schedule a consultation", href: "#page-contact", contactIntent: "consultation" }}
        image={LISTING_PAGE_HERO_IMAGES.caseStudies}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC]">
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
                      <p className="text-sm text-slate-500 mt-1">{cs.archetype}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{cs.challenge.substring(0, 150)}...</p>
                  <TechStackLogoGrid
                    items={cs.techStack.slice(0, 4)}
                    compact
                    gridClassName="grid grid-cols-2 gap-2 sm:grid-cols-4"
                    className="mt-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D] mb-5" >
                Methodology for <span className="corp-heading-secondary">using this library</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                This methodology frames how to read each scenario: what is modeled, what is held constant, and what a real program would still need to validate in your environment.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "KPIs", label: "Success measures defined with your team before build assumptions harden." },
              { value: "Phased", label: "Scope moves in thin slices with explicit go or stop decisions." },
              { value: "Controls", label: "Security, access, and audit paths treated as part of the design, not a late add-on." },
              { value: "Handover", label: "Artifacts and runbooks your staff can operate without lock-in to a single vendor." },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-sm border border-slate-200 p-6 bg-[#F8FAFC] h-full">
                  <p className="text-2xl font-bold text-[#0B1B3D] mb-2" >{item.value}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D] mb-5" >
                Coverage Across <span className="corp-heading-secondary">ways to browse</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                This coverage lists filters we use in workshops, industry, use case, stack, and impact type, so you can route to the closest scenario quickly.
              </p>
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
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-2xl mb-12 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D]" >
                Methodology for <span className="corp-heading-secondary">phasing delivery</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mt-4 max-w-xl">
                This methodology mirrors how we structure live engagements, from context through pilot, so scenario pages read like an execution checklist, not marketing narrative.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Context Audit", desc: "Map goals, constraints, and baseline metrics." },
              { title: "Architecture Fit", desc: "Select stack and design production-ready workflows." },
              { title: "Pilot Validation", desc: "Deploy focused use case and validate KPI movement." },
              { title: "Scale Program", desc: "Expand rollout with governance and optimization." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-6 h-full">
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

