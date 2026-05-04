import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import CTASection from "../components/CTASection";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import FAQSection from "../components/FAQSection";
import ServicesShowcaseTabs from "../components/ServicesShowcaseTabs";
import services from "../data/services";
import { SERVICES_LANDING_HERO_IMAGE } from "../lib/heroImageThemes";

export default function ServicesPage() {
  const serviceFaqs = [
    {
      q: "How do you decide which AI service we should start with?",
      a: "We run a short discovery process to evaluate your highest-friction workflows, data readiness, and ROI potential, then prioritize the service track with the fastest business impact.",
    },
    {
      q: "Can you work with our existing stack and internal team?",
      a: "Yes. Our delivery model is stack-aware and collaborative. We integrate with your current systems and work alongside your engineering, product, and operations teams.",
    },
    {
      q: "What timeline should we expect for initial value delivery?",
      a: "Most clients see first measurable outcomes within 8-12 weeks, depending on integration complexity, data quality, and stakeholder availability.",
    },
    {
      q: "How do you handle security and compliance requirements?",
      a: "Security and governance are built into architecture and delivery from day one, including access controls, auditability, and compliance-aligned deployment patterns.",
    },
    {
      q: "Do you provide post-launch support and optimization?",
      a: "Absolutely. We offer managed optimization for model quality, performance monitoring, cost controls, and feature expansion after go-live.",
    },
  ];

  return (
    <div>
      <div className="sticky top-0 z-0 h-[min(70vh,700px)] overflow-hidden">
        <PageHero
          label="Our Services"
          title="Enterprise AI Services Built Around Business Outcomes"
          description="From advisory to managed delivery, each service line is designed to solve a specific operational problem with measurable impact and clear accountability."
          primaryCTA={{ text: "Talk to Our Experts", href: "#page-contact" }}
          image={SERVICES_LANDING_HERO_IMAGE}
        />
      </div>

      <div className="relative z-10 bg-white shadow-[0_-10px_50px_rgba(0,0,0,0.05)]">
        <section className="py-4 sm:py-6 md:py-8 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <ServicesShowcaseTabs
              services={services}
              title="Transformative IT Solutions: Services"
              description="Explore core delivery tracks and navigate through service lines that solve real business problems with production-ready AI engineering."
            />
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 bg-[#F8FAFC]">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Operating model</p>
                <h2 className="mb-4">
                  Operational Reality
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  We combine engineering discipline, change management, and governance controls so projects move beyond pilots and stay reliable in production.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "2-4 weeks", label: "Discovery and architecture planning" },
                { value: "< 12 weeks", label: "Typical pilot to production timeline" },
                { value: "99.9%", label: "Target uptime for critical workflows" },
                { value: "ROI-first", label: "Every engagement tied to business KPIs" },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="h-full rounded-sm border border-slate-200 p-6 bg-[#F8FAFC]">
                    <p
                      className="text-3xl font-bold text-[#0B1B3D] mb-2"

                    >
                      {item.value}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 corp-pat-cross-dash">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-2xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
                <h2 className="mb-4">
                  Strategy to Scaled Ops
                </h2>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Assess", desc: "Evaluate current systems, data readiness, and operational bottlenecks." },
                { title: "Design", desc: "Define architecture, security controls, and phased delivery roadmap." },
                { title: "Build", desc: "Implement with rapid sprint cycles, quality checks, and stakeholder feedback." },
                { title: "Scale", desc: "Operationalize with monitoring, optimization, and cross-team adoption plans." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                    <h3
                      className="mb-2"

                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2 className="mb-5">
                  Delivery Models
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Choose a collaboration model based on your timeline, internal capability, and transformation goals.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Strategy + Blueprint",
                  desc: "A focused advisory phase to prioritize use cases and define a practical implementation roadmap.",
                },
                {
                  title: "Pilot to Production",
                  desc: "Launch one high-impact workflow quickly, validate ROI, and harden for enterprise rollout.",
                },
                {
                  title: "Managed AI Delivery",
                  desc: "Ongoing engineering partnership for continuous releases, monitoring, and optimization.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-sm border border-slate-200 p-6 bg-[#F8FAFC]">
                    <h3
                      className="mb-3"

                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 corp-pat-diag-dash">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2 className="mb-5">
                  Services Adapted to Real Industry Constraints
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  We tailor delivery for regulated, data-sensitive, and high-throughput environments with practical implementation plans.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Healthcare & life sciences compliance workflows",
                "Financial risk, fraud, and audit intelligence",
                "Retail and commerce personalization at scale",
                "Enterprise knowledge and operations automation",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section data-testid="technology-coverage-section" className="py-4 sm:py-6 md:py-8 bg-white relative">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Coverage
                </p>
                <h2
                  className="mb-6"

                >
                  Platforms and Capabilities <br />Across the AI Stack
                </h2>
                <p className="text-base text-slate-500 max-w-2xl font-medium">Reference stack combinations commonly used to meet domain reliability and compliance requirements.</p>
              </div>
            </AnimatedSection>

            <div className="space-y-8 lg:space-y-14 relative">
              {[
                {
                  title: "Data & Pipelines",
                  desc: "Data ingestion, quality, transformation, orchestration, and observability for AI-ready foundations.",
                  items: ["ETL/ELT", "Stream Processing", "Vectorization", "Data Governance"],
                  color: "bg-blue-600"
                },
                {
                  title: "Model & LLM Engineering",
                  desc: "Fine-tuning, RAG pipelines, evaluation harnesses, and inference optimization for production workloads.",
                  items: ["Fine-tuning", "RAG Systems", "Evaluation", "Benchmarking"],
                  color: "bg-indigo-600"
                },
                {
                  title: "Application Layer",
                  desc: "Web and mobile AI products, copilots, agent workflows, and enterprise integrations.",
                  items: ["Agentic UX", "Tool use", "Function calling", "Multi-modal UI"],
                  color: "bg-slate-900"
                },
                {
                  title: "MLOps & DevOps",
                  desc: "CI/CD, model versioning, rollout controls, and environment automation across deployment stages.",
                  items: ["CI/CD", "Observability", "Drift Detection", "Failover"],
                  color: "bg-blue-700"
                },
                {
                  title: "Security & Governance",
                  desc: "Policy controls, auditability, role-based access, and secure architecture aligned to compliance requirements.",
                  items: ["RBAC", "Audit logs", "Data Privacy", "Threat detection"],
                  color: "bg-[#0B1B3D]"
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="sticky top-[100px] border border-slate-100 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 bg-white"
                  style={{
                    marginTop: i === 0 ? 0 : `${i * 32}px`,
                    zIndex: i + 1
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[350px]">
                    <div className={`lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center ${item.color} text-white`}>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Capability layer</span>
                      <h3 className="mb-6" >{item.title}</h3>
                      <div className="w-12 h-1 bg-white/20 rounded-full" />
                    </div>
                    <div className="lg:col-span-8 p-8 lg:p-14 flex flex-col justify-center bg-white">
                      <p className="text-base lg:text-lg text-slate-600 font-medium mb-10 max-w-2xl italic leading-relaxed">"{item.desc}"</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {item.items.map(t => (
                          <div key={t} className="flex flex-col gap-2">
                            <div className="w-6 h-0.5 bg-blue-500/20" />
                            <span className="text-[11px] font-black text-[#0B1B3D] uppercase tracking-wider">{t}</span>
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
        <section className="py-4 sm:py-6 md:py-8 bg-[#F8FAFC]">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                <h2 className="mb-5">
                  Governance, Security, and Quality Built Into Delivery
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Every service engagement includes technical guardrails to protect reliability, compliance posture, and long-term maintainability.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Security by Design",
                  points: ["Encrypted data pathways", "Access controls and least privilege", "Secure SDLC across environments"],
                },
                {
                  title: "Operational Governance",
                  points: ["KPI and SLA tracking", "Model and workflow audit trails", "Release controls and rollback plans"],
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                    <h3
                      className="mb-4"

                    >
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-sm text-slate-600 leading-relaxed">
                          - {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 bg-white border-y border-slate-200/70">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
                <h2 className="mb-5">
                  What Teams Typically Improve After Engagement
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  We structure each service line around quantifiable operational and financial improvements.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Operational Efficiency",
                  metric: "35-70%",
                  desc: "Reduction in repetitive workflows through automation and AI-assisted execution.",
                },
                {
                  title: "Decision Velocity",
                  metric: "2-5x",
                  desc: "Faster analysis and response cycles using real-time intelligence layers.",
                },
                {
                  title: "Quality & Consistency",
                  metric: "Up to 90%",
                  desc: "Lower variance in outputs through standardized workflows and governance controls.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                    <p
                      className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-3xl font-bold text-[#0B1B3D] mb-2"

                    >
                      {item.metric}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <section className="py-4 sm:py-6 md:py-8 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
                <h2 className="mb-5">
                  Execution Rhythm Options
                </h2>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Project Mode",
                  subtitle: "Defined scope, fixed milestones",
                  details: "Best for targeted initiatives with clear outcomes and delivery timelines.",
                },
                {
                  title: "Pod Extension",
                  subtitle: "Embedded multi-disciplinary team",
                  details: "Best for teams that need continuous velocity without increasing full-time headcount.",
                },
                {
                  title: "Transformation Program",
                  subtitle: "Cross-functional modernization",
                  details: "Best for enterprise-wide AI rollout with governance, enablement, and phased scaling.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                    <h3
                      className="mb-2"

                    >
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#2563EB] mb-3">{item.subtitle}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      </div>

      {/* CTA Layer - Pinned */}
      <div className="sticky top-0 z-0 h-[min(70vh,750px)] flex flex-col justify-center bg-[#0B1B3D] text-white overflow-hidden">
        <CTASection
          title="Convert Priorities into an Executable Delivery Plan"
          description="Share your current priorities and constraints. We will map service fit, delivery sequence, and expected business impact in a focused consultation."
          buttonText="Schedule Consultation"
        />
      </div>

      {/* Surface Layer 2 */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="py-4 sm:py-6 md:py-8 bg-white border-y border-slate-200/70">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="text-left mb-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                <p className="text-sm text-slate-500">
                  Service engagements aligned with enterprise expectations for reliability and governance
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Secure SDLC",
                "SOC-Aligned",
                "Data Governance",
                "SLA Driven",
                "Audit Ready",
                "24/7 Monitoring",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="h-14 rounded-sm border border-slate-200 bg-[#F8FAFC] flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wide">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
        <FAQSection faqs={serviceFaqs} title="Services FAQ" />
        <PageContactForm context="Services Page" />
      </div>
    </div>
  );
}

