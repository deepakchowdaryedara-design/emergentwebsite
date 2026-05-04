import { Users, Target, Eye, MapPin, Linkedin, Twitter, Heart, Zap, Shield, Globe } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ImpactStats from "../components/ImpactStats";
import TestimonialsSection from "../components/TestimonialsSection";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { ABOUT_HERO_IMAGE } from "../lib/heroImageThemes";

const timeline = [
  { year: "2018", title: "Founded", desc: "NeuralTrix AI was founded in San Francisco with a mission to make enterprise AI accessible.", icon: Target },
  { year: "2019", title: "First Enterprise Client", desc: "Secured our first Fortune 500 client and delivered an AI-powered fraud detection system.", icon: Shield },
  { year: "2020", title: "Remote-First", desc: "Expanded globally with a remote-first culture, growing to 50+ engineers across 8 countries.", icon: Globe },
  { year: "2021", title: "100 Clients", desc: "Reached 100 enterprise clients and launched our first AI product suite.", icon: Users },
  { year: "2022", title: "GenAI Pioneer", desc: "Early adopter of LLMs for enterprise, launching RAG-based solutions before the mainstream.", icon: Zap },
  { year: "2023", title: "400+ Specialists", desc: "Grew to 400+ AI specialists and opened offices in London and Singapore.", icon: Heart },
  { year: "2024", title: "Agent Platform", desc: "Launched autonomous AI agent platform enabling enterprises to deploy intelligent agents at scale.", icon: Eye },
  { year: "2025", title: "1500+ Projects", desc: "Surpassed 1500 successful AI projects with 95% client retention rate.", icon: Target },
];

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-founder", bio: "15+ years in enterprise software. Previously VP Engineering at a Fortune 100 tech company." },
  { name: "Sarah Chen", role: "CTO", bio: "PhD in Machine Learning from Stanford. Led AI research at a major cloud provider." },
  { name: "David Okafor", role: "VP of Engineering", bio: "Former principal engineer at a leading AI startup. Expert in distributed systems." },
  { name: "Lisa Park", role: "VP of Product", bio: "10+ years in product management. Led AI product strategy at a top SaaS company." },
  { name: "Raj Patel", role: "Head of AI Research", bio: "PhD in NLP. Published 30+ papers in top AI conferences." },
  { name: "Maria Santos", role: "VP of Client Success", bio: "15+ years in consulting. Ensures every client achieves measurable ROI." },
];

const offices = [
  { city: "San Francisco", country: "USA", type: "Headquarters", address: "525 Market Street, Suite 3000" },
  { city: "London", country: "UK", type: "European Office", address: "30 St Mary Axe, Floor 12" },
  { city: "Singapore", country: "Singapore", type: "Asia-Pacific", address: "1 Raffles Place, Tower 2" },
  { city: "Bangalore", country: "India", type: "Engineering Center", address: "Prestige Tech Park, Sarjapur Road" },
];

const values = [
  { icon: Zap, title: "Engineering Excellence", desc: "We write code that lasts decades. Clean architecture, comprehensive testing, and relentless quality." },
  { icon: Heart, title: "Client Obsession", desc: "Your success is our success. We measure ourselves by your ROI, not our billable hours." },
  { icon: Shield, title: "Trust & Transparency", desc: "No hidden agendas. Clear communication, honest timelines, and full code ownership." },
  { icon: Globe, title: "Global Mindset", desc: "Diverse team across 8 countries bringing different perspectives to every challenge." },
];

const partners = ["AWS", "Google Cloud", "Microsoft Azure", "OpenAI", "Anthropic", "Meta AI", "NVIDIA", "Snowflake", "Databricks", "MongoDB"];

export default function AboutPage() {
  return (
    <div>
      {/* 1. Hero */}
      <PageHero label="About Us" title="The Team and Principles Behind Our AI Delivery" description="Learn how our leadership model, delivery culture, and governance standards help enterprises move from AI ambition to sustained operational value." primaryCTA={{ text: "Work With Us", href: "#page-contact" }} secondaryCTA={{ text: "Join Our Team", href: "/careers" }} image={ABOUT_HERO_IMAGE} />

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
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-6">The NeuralTrix Blueprint</p>
                  <h2 className="mb-6">
                    Engineering Trust in <br className="hidden xl:block" /> <span className="text-blue-500">Every Neuron.</span>
                  </h2>
                  <p className="text-base text-blue-100/60 leading-relaxed font-medium max-w-sm">
                    We bridge the gap between raw AI power and predictable enterprise value. Our focus remains on technical rigor and ethical transparency.
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
                          To democratize enterprise AI by building production-ready, compliant, and measurably impactful solutions.
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
                          To be the world's most trusted AI engineering partner, known for technical excellence and ethical practices.
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
      <ImpactStats title="Our Impact in Numbers" customStats={[
        { value: "15+", label: "Years of delivering quality solutions" },
        { value: "1000+", label: "Happy clients across industries" },
        { value: "400+", label: "AI specialists on our team" },
        { value: "1500+", label: "Successful projects delivered" },
        { value: "95%", label: "Client retention rate" },
      ]} />

      {/* 4. Core Values */}
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <h2 className="mb-12" >Our Core Values</h2>
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
            <h2 className="mb-12" >Our Journey</h2>
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
      <CTASection title="Want to Be Part of Our Story?" description="Join 400+ AI specialists who are shaping the future of enterprise AI." buttonText="View Open Positions" buttonHref="/careers" />

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
              Leadership <span className="opacity-30">Team</span>
            </h2>
            <p className="text-base text-slate-600 mb-12 max-w-2xl font-medium">Meet the people accountable for strategy, engineering quality, and client outcomes.</p>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 text-left">Coverage</p>
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
            <h2 className="mb-12" >
              Our <span className="opacity-30">Offices</span>
            </h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <TestimonialsSection title="What Our Clients Say" />

      {/* 11. Strategic CTA */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="rounded-sm border border-white/15 bg-white/[0.02] p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">Next Step</p>
              <h2 className="mb-4" >
                Start with <span className="opacity-30">a Conversation</span>
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step helps define the most practical path whether you are evaluating use-cases or scaling production systems.
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

