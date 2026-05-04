import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const partners = ["AWS", "Google Cloud", "Microsoft Azure", "OpenAI", "Anthropic", "Meta AI", "NVIDIA", "Snowflake", "Databricks", "MongoDB"];

export default function PartnersPage() {
  return (
    <div>
      <PageHero
        label="Technology Partners"
        title="Technology Partnerships that Strengthen Delivery"
        description="We combine proven platform partners with practical architecture choices to reduce implementation risk and accelerate enterprise outcomes."
        primaryCTA={{ text: "Contact us", href: "#page-contact" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-8 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D]" >
                Coverage Across <span className="text-[#0B1B3D]/30">ecosystem platforms</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mt-4">Vendors and clouds we integrate in live programs; final stack choices stay governed by your policies and data boundaries.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <StaggerItem key={partner}>
                <div className="h-20 rounded-sm border border-slate-200 bg-[#F8FAFC] flex items-center justify-center px-4 text-center">
                  <span className="text-sm font-semibold text-slate-700 tracking-wide">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D] mb-4" >
                Methodology for <span className="text-[#0B1B3D]/30">using partner ecosystems</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">This methodology groups how we apply cloud, model, data, and application partners so architecture reviews stay structured.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cloud Foundation", desc: "Designing secure and scalable architectures across public cloud environments." },
              { title: "Model Layer", desc: "Selecting and integrating AI models best suited to business context and controls." },
              { title: "Data Platform", desc: "Building analytics-ready pipelines and governed data foundations for AI use." },
              { title: "Application Enablement", desc: "Connecting model intelligence with enterprise workflows and user interfaces." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-[#0B1B3D]" >
                Outcomes for <span className="text-[#0B1B3D]/30">ecosystem-backed delivery</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mt-4">Practical benefits we aim for when platforms are chosen for fit, not logo placement for its own sake.</p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Faster Implementation", desc: "Accelerated delivery using proven patterns and partner-native capabilities." },
              { title: "Lower Risk", desc: "Validated architecture decisions backed by established technology ecosystems." },
              { title: "Future Flexibility", desc: "Composable platform choices designed for long-term modernization paths." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-3" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <PageContactForm context="Partners Page" />
    </div>
  );
}

