import { Users, Target, Eye, MapPin, Linkedin, Twitter, Heart, Zap, Shield, Globe } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ImpactStats from "../components/ImpactStats";
import TestimonialsSection from "../components/TestimonialsSection";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";

const timeline = [
  { year: "2026", title: "NeuralTrix AI launches", desc: `Founded ${COMPANY_FOUNDED_LABEL} as an applied AI engineering firm, focused on shipped software alongside customer product and engineering leadership.`, icon: Target },
  { year: "Now", title: "Design partners", desc: "Early customer programs with controlled scope, weekly releases, and shared channels for timely decisions.", icon: Shield },
  { year: "Next", title: "Scale what works", desc: "Expand capacity and accelerators based on production usage, acceptance metrics, and repeatability, not roadmap projections alone.", icon: Zap },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "Product-minded operator focused on shipping AI systems customers actually run." },
  { name: "Sarah Chen", role: "CTO & Co-founder", bio: "Hands-on ML lead, architecture through evaluation harnesses and production monitoring." },
  { name: "David Okafor", role: "Principal Engineer", bio: "Distributed systems and shipping discipline from high-growth platform teams." },
  { name: "Lisa Park", role: "Head of Product", bio: "Turns ambiguous AI ideas into scoped milestones teams can execute." },
  { name: "Raj Patel", role: "Lead Applied Scientist", bio: "LLMs, retrieval, and evaluation, making models behave in the wild." },
  { name: "Maria Santos", role: "Customer Programs", bio: "Keeps pilots honest on outcomes, timelines, and handover clarity." },
];

const offices = [
  { city: "San Francisco Bay Area", country: "USA", type: "HQ (remote-first)", address: "Distributed team, meet where the work is" },
];

const values = [
  { icon: Zap, title: "Delivery priority", desc: "Scope decisions favor executable increments and visible progress over narrative-only milestones." },
  { icon: Heart, title: "Joint accountability", desc: "Shared communication channels, documented tradeoffs, and alignment to your roadmap while engaged." },
  { icon: Shield, title: "Transparent execution", desc: "Timelines, repositories, and decisions expressed in materials suitable for internal review." },
  { icon: Globe, title: "Remote-first", desc: "Engineering and delivery talent recruited globally with disciplined scheduling and handovers." },
];

const partners = ["AWS", "Google Cloud", "Microsoft Azure", "OpenAI", "Anthropic", "Meta AI", "NVIDIA", "Snowflake", "Databricks", "MongoDB"];

export default function AboutPage() {
  return (
    <div>
      {/* 1. Hero */}
      <PageHero label="About Us" title="Applied AI Engineering with Disciplined Delivery" description={`NeuralTrix AI began operations on ${COMPANY_FOUNDED_LABEL}. We are a compact, senior-led team focused on production AI and software outcomes for early customer programs.`} primaryCTA={{ text: "Contact us", href: "#page-contact" }} secondaryCTA={{ text: "Careers", href: "/careers" }} image={ABOUT_HERO_IMAGE} />

      {/* 2. Mission & Vision - REFINED ARCHITECTURAL REDESIGN */}
      <section className="py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="relative rounded-[2.5rem] bg-[#0B1B3D] text-white p-10 lg:p-16 xl:p-20 overflow-hidden shadow-2xl">
            {/* Background Texture/Glow - Subtle */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
              {/* Left Column: Context & Branding */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 pb-10 lg:pb-0 lg:pr-12">
                <AnimatedSection>
                  <h2 className="mb-6">
                    Assurance for <br className="hidden xl:block" /> <span className="text-blue-500">execution clarity</span>
                  </h2>
                  <p className="text-base text-blue-100/60 leading-relaxed font-medium max-w-sm">
                    We operate as a focused engineering partner, not a broad legacy integrator, helping teams ship AI-enabled products with proportionate process and measurable checkpoints.
                  </p>
                </AnimatedSection>
              </div>

              {/* Right Column: Values */}
              <div className="lg:col-span-7 space-y-12">
                <StaggerChildren className="space-y-12 lg:space-y-14">
                  <StaggerItem>
                    <div className="group flex items-start gap-6 sm:gap-8">
                      <div className="flex-shrink-0 pt-1">
                        <div className="w-10 h-10 rounded-sm bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                          <Target size={20} />
                        </div>
                      </div>
                      <div>
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">Our Mission</span>
                        <p className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug max-w-xl">
                          To deliver production-grade AI and software with transparent scope, contemporary tooling, and deliverables your organization can operate and extend.
                        </p>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="group flex items-start gap-6 sm:gap-8">
                      <div className="flex-shrink-0 pt-1">
                        <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/10 flex items-center justify-center text-white/40 group-hover:scale-110 transition-transform duration-500">
                          <Eye size={20} />
                        </div>
                      </div>
                      <div>
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-white/50">Our Vision</span>
                        <p className="text-xl sm:text-2xl font-bold text-white/70 tracking-tight leading-snug max-w-xl">
                          A trusted partner for applied AI delivery, measured by shipped capability, governance fit, and durable client relationships.
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerChildren>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Stats */}
      <ImpactStats label={false} title="Outcomes for Early-Stage Operations" customStats={[
        { value: "2026", label: `Founded ${COMPANY_FOUNDED_LABEL}` },
        { value: "Startup", label: "Lean core team, senior builders" },
        { value: "Weekly", label: "Typical iteration cadence in pilots" },
        { value: "Remote-first", label: "Global talent, one operating rhythm" },
        { value: "Product + services", label: "Accelerator IP plus custom builds" },
      ]} />

      {/* 4. Core Values */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
            <h2 className="mb-4" >Outcomes for <span className="opacity-30">operating priorities</span></h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-12">This outcomes framing states the tradeoffs we hold in delivery, progress you can observe, accountability you can audit, and scope that stays proportionate to risk.</p>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white border border-slate-200 rounded-sm p-8 h-full">
                  <v.icon size={24} className="text-[#2563EB] mb-4" />
                  <h3 className="mb-2" >{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-diag-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
            <h2 className="mb-4" >Methodology for <span className="opacity-30">our operating timeline</span></h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-12">This methodology sequences launch, early programs, and scale decisions against shipped evidence, not vanity milestones.</p>
          </AnimatedSection>
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute top-0 bottom-0 left-[148px] md:left-[188px] w-1.5 bg-[#FFC200]" />
            <StaggerChildren className="space-y-8 sm:space-y-9">
              {timeline.map((t, idx) => (
                <StaggerItem key={t.year}>
                  <div data-testid={`timeline-${t.year}`} className="group relative grid grid-cols-[110px_44px_1fr] md:grid-cols-[140px_48px_1fr] items-start gap-4 md:gap-6">
                    <div className="pt-1 text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {t.year}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div
                        className={`h-11 w-11 md:h-12 md:w-12 mx-auto rounded-full border-4 border-[#FFC200] flex items-center justify-center transition-all duration-300 ${idx === 0
                          ? "bg-[#FFC200] shadow-[0_8px_24px_-10px_rgba(255,194,0,0.8)]"
                          : "bg-white group-hover:bg-[#FFC200] group-hover:shadow-[0_8px_24px_-10px_rgba(255,194,0,0.8)]"
                          }`}
                      >
                        <t.icon
                          size={18}
                          className={`transition-colors duration-300 ${idx === 0 ? "text-[#0B1B3D]" : "text-[#1E293B] group-hover:text-[#0B1B3D]"
                            }`}
                        />
                      </div>
                    </div>
                    <div className="pt-1 md:pt-0.5">
                      <h3 className="inline mr-2" >
                        {t.title}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed inline text-slate-600">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection hideLabel title="Next Step for Candidates and Partners" description="We hire engineers and operators who take ownership of outcomes; review open roles or reach out with your background." buttonText="View open positions" buttonHref="/careers" />

      {/* 6.5 Governance Model */}
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="mb-4" >
                Assurance for <span className="opacity-30">Quality Delivery</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                This assurance model combines architecture reviews, milestone controls, and measurable outcome tracking.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Architecture Review", desc: "Design checkpoints before major implementation phases." },
              { title: "Security Gates", desc: "Control validation across build, release, and operations." },
              { title: "KPI Monitoring", desc: "Business and technical indicators tracked continuously." },
              { title: "Executive Reporting", desc: "Clear communication cadence with stakeholder visibility." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 7. Team */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-cross-dash">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
            <h2 className="mb-4" >
              Coverage Across <span className="opacity-30">our core team</span>
            </h2>
            <p className="text-base text-slate-600 mb-12 max-w-2xl font-medium">Small, senior group, accountable for what we sell and what we ship.</p>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div data-testid={`team-member-${m.name.toLowerCase().replace(/\s/g, "-")}`} className="border border-slate-200 rounded-sm p-8">
                  <div className="w-16 h-16 bg-[#0B1B3D] rounded-sm flex items-center justify-center mb-5"><Users size={24} className="text-white" /></div>
                  <h3 className="" >{m.name}</h3>
                  <p className="text-sm text-[#2563EB] font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.bio}</p>
                  <div className="flex gap-3"><Linkedin size={16} className="text-slate-400 hover:text-[#2563EB] cursor-pointer transition-colors" /><Twitter size={16} className="text-slate-400 hover:text-[#2563EB] cursor-pointer transition-colors" /></div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 8. Partners */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="mb-8 text-left max-w-3xl">
              <h2 className="mb-2">Coverage Across <span className="opacity-30">ecosystem platforms</span></h2>
              <p className="text-sm text-slate-500">Reference vendors and clouds we integrate with in customer programs, not an exhaustive partnership list.</p>
            </div>
            <div className="relative">
              {/* Fade masks */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set */}
                <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
                  {partners.map((p) => (
                    <span key={`p1-${p}`} className="text-sm font-semibold text-slate-400 tracking-wide hover:text-[#2563EB] transition-colors cursor-default uppercase">
                      {p}
                    </span>
                  ))}
                </div>
                {/* Second set for seamless loop */}
                <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
                  {partners.map((p) => (
                    <span key={`p2-${p}`} className="text-sm font-semibold text-slate-400 tracking-wide hover:text-[#2563EB] transition-colors cursor-default uppercase">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. Offices */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <h2 className="mb-4" >
              Coverage Across <span className="opacity-30">where we operate</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-12">Remote-first delivery with in-person working sessions when milestones require it.</p>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
            {offices.map((o) => (
              <StaggerItem key={o.city}>
                <div data-testid={`office-${o.city.toLowerCase().replace(/\s/g, "-")}`} className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-6">
                  <MapPin size={20} className="text-[#2563EB] mb-4" /><h3 className="text-base font-bold text-[#0B1B3D]">{o.city}</h3>
                  <p className="text-sm text-[#2563EB] font-medium mb-2">{o.type}</p><p className="text-sm text-slate-500">{o.address}</p><p className="text-xs text-slate-400 mt-1">{o.country}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 10. Testimonials */}
      <TestimonialsSection showLabel={false} title="How we engage new partners" />

      {/* 11. Strategic CTA */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="rounded-sm border border-white/15 bg-white/[0.02] p-8 sm:p-10 lg:p-12">
              <h2 className="mb-4" >
                Next Step for <span className="opacity-30">a conversation</span>
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                Tell us what you are building, if there is a fit, we will propose a lean pilot and a path to scale.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 12. Contact */}
      <PageContactForm context="About Page" />
    </div>
  );
}

