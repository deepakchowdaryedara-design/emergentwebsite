import { Users, Target, Eye, MapPin, Linkedin, Twitter, Heart, Zap, Shield, Globe } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ImpactStats from "../components/ImpactStats";
import TestimonialsSection from "../components/TestimonialsSection";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";

const timeline = [
  { year: "2018", title: "Founded", desc: "NeuralTrix AI was founded in San Francisco with a mission to make enterprise AI accessible." },
  { year: "2019", title: "First Enterprise Client", desc: "Secured our first Fortune 500 client and delivered an AI-powered fraud detection system." },
  { year: "2020", title: "Remote-First", desc: "Expanded globally with a remote-first culture, growing to 50+ engineers across 8 countries." },
  { year: "2021", title: "100 Clients", desc: "Reached 100 enterprise clients and launched our first AI product suite." },
  { year: "2022", title: "GenAI Pioneer", desc: "Early adopter of LLMs for enterprise, launching RAG-based solutions before the mainstream." },
  { year: "2023", title: "400+ Specialists", desc: "Grew to 400+ AI specialists and opened offices in London and Singapore." },
  { year: "2024", title: "Agent Platform", desc: "Launched autonomous AI agent platform enabling enterprises to deploy intelligent agents at scale." },
  { year: "2025", title: "1500+ Projects", desc: "Surpassed 1500 successful AI projects with 95% client retention rate." },
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
      <PageHero label="About Us" title="Engineering the Future of Enterprise AI" description="NeuralTrix AI brings battle-tested engineering talent to turn ambitious ideas into high-performance AI systems that move fast, scale hard, and deliver real business results." primaryCTA={{ text: "Work With Us", href: "#page-contact" }} secondaryCTA={{ text: "Join Our Team", href: "/careers" }} image="https://images.unsplash.com/photo-1758876203420-1ed6db481d4f?w=800&h=500&fit=crop" />

      {/* 2. Mission & Vision */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <StaggerItem>
              <div className="border border-slate-200 rounded-sm p-10">
                <Target size={28} className="text-[#2563EB] mb-5" />
                <h2 className="text-2xl font-bold text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Mission</h2>
                <p className="text-base text-slate-600 leading-relaxed">To democratize enterprise AI by building production-ready, compliant, and measurably impactful AI solutions that help businesses of all sizes compete in the AI-first economy.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-slate-200 rounded-sm p-10">
                <Eye size={28} className="text-[#2563EB] mb-5" />
                <h2 className="text-2xl font-bold text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Vision</h2>
                <p className="text-base text-slate-600 leading-relaxed">To be the world's most trusted AI engineering partner—known for technical excellence, ethical AI practices, and measurable business outcomes across every industry.</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
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
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Core Values</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white border border-slate-200 rounded-sm p-8 h-full">
                  <v.icon size={24} className="text-[#2563EB] mb-4" />
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 5. Timeline */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Journey</h2>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <StaggerItem key={t.year}>
                <div data-testid={`timeline-${t.year}`} className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-6">
                  <span className="text-2xl font-extrabold text-[#2563EB] block mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.year}</span>
                  <h3 className="text-base font-bold text-[#0B1B3D] mb-2">{t.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection title="Want to Be Part of Our Story?" description="Join 400+ AI specialists who are shaping the future of enterprise AI." buttonText="View Open Positions" buttonHref="/careers" />

      {/* 7. Team */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Leadership Team</h2>
            <p className="text-base text-slate-600 mb-12 max-w-2xl">Meet the leaders driving NeuralTrix AI's mission.</p>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div data-testid={`team-member-${m.name.toLowerCase().replace(/\s/g, "-")}`} className="border border-slate-200 rounded-sm p-8">
                  <div className="w-16 h-16 bg-[#0B1B3D] rounded-sm flex items-center justify-center mb-5"><Users size={24} className="text-white" /></div>
                  <h3 className="text-base font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{m.name}</h3>
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
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-6 text-center">Technology Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((p) => (<span key={p} className="text-sm font-semibold text-slate-400 tracking-wide">{p}</span>))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. Offices */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3D] mb-12" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Our Offices</h2>
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

      {/* 11. Contact */}
      <PageContactForm context="About Page" />
    </div>
  );
}
