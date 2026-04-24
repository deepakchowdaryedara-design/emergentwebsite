import PageHero from "../components/PageHero";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const sections = [
  {
    title: "Information We Collect",
    text: "We collect contact information you submit through forms, communication history related to project discussions, and limited analytics data required to improve website performance and user experience.",
  },
  {
    title: "How We Use Information",
    text: "Data is used to respond to inquiries, provide requested services, improve service quality, and maintain operational security. We do not sell personal information.",
  },
  {
    title: "Data Protection",
    text: "We apply reasonable technical and organizational safeguards to protect information from unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Third-Party Services",
    text: "Some services may rely on third-party infrastructure and tooling providers. We work with reputable vendors and evaluate controls relevant to privacy and security.",
  },
  {
    title: "Your Rights",
    text: "You may request access, correction, or deletion of personal data submitted to us, subject to legal and contractual obligations.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        label="Privacy Policy"
        title="Privacy Commitments for Website and Service Interactions"
        description="This page explains what data we collect, why we collect it, and how we handle requests related to access, correction, or deletion."
        primaryCTA={{ text: "Contact Us", href: "#privacy-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Assurance</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
                Privacy Principles that Guide Data Handling
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", desc: "Clear communication on what data is collected and why." },
              { title: "Minimization", desc: "Collection limited to data relevant for service and communication needs." },
              { title: "Protection", desc: "Safeguards applied to reduce unauthorized access or misuse risk." },
              { title: "Control", desc: "Support for requests related to access, updates, and deletion." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section id="privacy-content" className="py-20 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-slate-500 mb-8">Effective Date: April 21, 2026</p>
              <div className="space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-2xl font-bold text-[#0B1B3D] mb-3" >
                      {section.title}
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Methodology</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                Methodology for Privacy Request Resolution
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Submit Request", desc: "Contact us with details of your privacy request and relevant context." },
              { step: "02", title: "Verification", desc: "We verify request legitimacy before processing sensitive data actions." },
              { step: "03", title: "Resolution", desc: "We respond within a reasonable timeframe, subject to legal obligations." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
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
    </div>
  );
}

