import PageHero from "../components/PageHero";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const privacyTemplateDownloads = [
  { title: "India", file: "/legal-templates/privacy-request-template-india.txt", note: "DPDP-oriented request template for access, correction, and erasure." },
  { title: "United Kingdom", file: "/legal-templates/privacy-request-template-uk.txt", note: "UK GDPR request template for data subject rights." },
  { title: "European Union", file: "/legal-templates/privacy-request-template-eu.txt", note: "GDPR-aligned rights request template for EU/EEA residents." },
  { title: "United States", file: "/legal-templates/privacy-request-template-us.txt", note: "Consumer request template for access, deletion, and opt-out rights." },
  { title: "Singapore", file: "/legal-templates/privacy-request-template-singapore.txt", note: "PDPA-aligned request template for access and correction." },
  { title: "UAE (DIFC)", file: "/legal-templates/privacy-request-template-uae.txt", note: "UAE-focused request template for personal data rights inquiries." },
];

const sections = [
  {
    title: "1. Scope and Applicability",
    content: (
      <>
        <p className="text-slate-600">
          This Privacy Policy applies to all services, solutions, and website interactions delivered by NeuralTrix AI, including consulting engagements, platform-enabled offerings, and support communications.
        </p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">
          This policy covers:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "Service inquiry and onboarding interactions",
            "Project delivery and support communications",
            "Website usage and analytics data",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p className="text-slate-600">
          We collect information required to deliver, secure, and improve services for enterprise clients and website users.
        </p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">This may include:</p>
        <ul className="mt-4 space-y-3">
          {[
            "Business contact details, including name, email, phone number, and company information",
            "Service-related information provided through forms, meetings, and project communication channels",
            "Technical metadata such as IP address, browser type, device details, and usage events",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">
          We do not intentionally collect sensitive personal data unless it is required for a specific contractual purpose and handled under explicit safeguards.
        </p>
        <p className="mt-4 text-slate-600">
          You are responsible for ensuring information submitted to us is accurate, lawfully obtained, and appropriately authorized for processing.
        </p>
      </>
    )
  },
  {
    title: "3. How We Use Information",
    content: (
      <>
        <p className="text-slate-600">
          We process information for legitimate business and contractual purposes aligned with service delivery.
        </p>
        <ul className="mt-4 space-y-3 mb-6">
          {[
            "Respond to inquiries, proposals, and support requests",
            "Deliver contracted services, implementation work, and project governance",
            "Maintain operational security, performance monitoring, and service continuity",
            "Meet legal, compliance, and financial record-keeping obligations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600">
          We do not sell personal information. We only share information with approved subprocessors and professional advisors where required to operate or comply with law.
        </p>
        <p className="mt-4 text-slate-600">
          We may also use and disclose information where reasonably necessary to protect our legal rights, secure systems, enforce contractual terms, or prevent misuse of services.
        </p>
      </>
    )
  },
  {
    title: "4. Cookies and Analytics",
    content: (
      <>
        <p className="text-slate-600">We use cookies and analytics technologies to operate and improve our website experience.</p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">These technologies support:</p>
        <ul className="mt-4 space-y-3">
          {[
            "Session continuity and basic website functionality",
            "Traffic analysis and content performance measurement",
            "Detection of reliability and security anomalies",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">
          You may control cookies through your browser settings. Disabling certain cookies may affect the availability of specific website features.
        </p>
      </>
    )
  },
  {
    title: "5. Data Security and Retention",
    content: (
      <>
        <p className="text-slate-600">We maintain administrative, technical, and organizational safeguards proportionate to the nature of the services delivered.</p>
        <p className="mt-4 text-slate-600">
          Data is retained only for as long as required for contractual delivery, legal obligations, dispute resolution, and legitimate operational purposes.
        </p>
        <p className="mt-4 text-slate-600">
          We may retain relevant records for longer periods where required to establish, exercise, or defend legal claims and regulatory positions.
        </p>
      </>
    )
  },
  {
    title: "6. International Transfers and Third Parties",
    content: (
      <>
        <p className="text-slate-600">
          Where services involve cross-border collaboration or cloud infrastructure, data transfers may occur between jurisdictions with appropriate contractual and security controls.
        </p>
        <p className="mt-4 text-slate-600">
          Third-party providers engaged by us are contractually required to process information for authorized purposes only and to maintain suitable protection standards.
        </p>
        <p className="mt-4 text-slate-600">
          Third-party services may operate under independent policies and controls. We are not responsible for external practices outside our contractual control.
        </p>
      </>
    )
  },
  {
    title: "7. Country and Region Privacy Rights",
    content: (
      <>
        <p className="text-slate-600">
          We recognize privacy rights required by applicable laws across jurisdictions, including rights related to access, correction, deletion, portability, objection, restriction, and consent withdrawal where available.
        </p>
        <p className="mt-4 text-slate-600">
          Rights availability and response timelines vary by country or region. We will evaluate each request under the legal framework applicable to the individual, organization, and processing context.
        </p>
      </>
    )
  },
  {
    title: "8. Regional Compliance Notice",
    content: (
      <>
        <p className="text-slate-600">
          Our privacy operations are designed to align with major data protection regimes where applicable to client engagements, data subjects, and processing activities.
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "European Union and EEA: GDPR",
            "United Kingdom: UK GDPR and Data Protection Act 2018",
            "United States: CCPA and CPRA, plus applicable state privacy laws",
            "Canada: PIPEDA and applicable provincial privacy statutes",
            "Brazil: LGPD",
            "Singapore: PDPA",
            "Australia: Privacy Act 1988 and Australian Privacy Principles",
            "South Africa: POPIA",
            "India: Digital Personal Data Protection Act, where applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    title: "9. Your Rights and Requests",
    content: (
      <>
        <p className="text-slate-600">
          Subject to applicable law and verification requirements, you may request access, correction, deletion, restriction, or objection related to personal information processed by us.
        </p>
        <p className="mt-4 text-slate-600">
          To submit a request, you must contact us through our official communication channels with sufficient detail for verification and response handling.
        </p>
        <p className="mt-4 text-slate-600">
          We may decline, limit, or defer requests where permitted by law, including cases involving legal privilege, security risk, disproportionate burden, conflicting rights, or unresolved verification.
        </p>
      </>
    )
  },
  {
    title: "10. AI and Service Delivery Data",
    content: (
      <>
        <p className="text-slate-600">
          For AI engineering and automation services, we process only the data required for agreed use cases, model operations, evaluation, monitoring, and support.
        </p>
        <p className="mt-4 text-slate-600">
          We do not use client-confidential project data to train shared foundation models unless explicitly authorized in writing by the client.
        </p>
        <p className="mt-4 text-slate-600">
          We may use aggregated, de-identified, and operational metadata for service assurance, quality benchmarking, and internal model governance where such use does not identify a client or individual.
        </p>
      </>
    )
  },
  {
    title: "11. Policy Updates",
    content: (
      <>
        <p className="text-slate-600">
          We may update this policy at our discretion to reflect legal, operational, security, or service changes. The latest version will be published on this page with an updated effective date.
        </p>
        <p className="mt-4 text-slate-600">
          Continued use of our services or website after publication constitutes acceptance of the updated policy to the extent permitted by applicable law.
        </p>
      </>
    )
  },
  {
    title: "12. Legal Disclaimer",
    content: (
      <p className="text-slate-600">
        This Privacy Policy provides general information about our privacy and data handling practices. It is not legal advice and must not be relied on as a substitute for independent legal review in any jurisdiction.
      </p>
    )
  },
  {
    title: "13. Legal Contact",
    content: (
      <p className="text-slate-600">
        For privacy notices, data rights requests, or compliance questions, submit your request through our official contact channels with your organization details and request scope.
      </p>
    )
  },
  {
    title: "14. Effective Date and Last Updated",
    content: (
      <div className="inline-flex items-center rounded-sm border border-[#2563EB]/20 bg-[#2563EB]/5 px-3 py-1 text-xs font-bold text-[#2563EB]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        EFFECTIVE DATE: MAY 2026 | LAST UPDATED: MAY 2026
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        label="Legal & Trust"
        title="Privacy Policy for Services and Website Use"
        description="This policy defines how NeuralTrix AI collects, uses, secures, transfers, and governs personal information across service delivery and digital channels."
        primaryCTA={{ text: "View Details", href: "#privacy-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      {/* Privacy Content */}
      <section id="privacy-content" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                <h2 className="" >
                  Assurance for <span className="opacity-30">Data Privacy</span>
                </h2>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex items-center rounded-sm border border-[#2563EB]/20 bg-[#2563EB]/5 px-3 py-1 text-xs font-bold text-[#2563EB]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    UPDATED MAY 2026
                  </span>
                  <span className="inline-flex items-center rounded-sm border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    INTERNAL LEGAL REVIEW RECOMMENDED
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-14">
              {sections.map((section) => (
                <AnimatedSection key={section.title}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                      <h3 className="">
                        {section.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="text-base leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-t border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2>
                  Coverage Across <span className="opacity-30">Privacy Request Templates</span>
                </h2>
                <p className="mt-4 text-slate-600">
                  This coverage section provides downloadable templates for common privacy and data-subject rights requests across major jurisdictions.
                </p>
                <p className="mt-4 text-slate-600">
                  Template use does not modify statutory obligations, contractual duties, or applicable response timelines under relevant privacy laws.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {privacyTemplateDownloads.map((template) => (
                <AnimatedSection key={template.file}>
                  <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                    <h3 className="mb-2">{template.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{template.note}</p>
                    <a
                      href={template.file}
                      download
                      className="inline-flex items-center rounded-sm border border-[#0B1B3D] px-3 py-1.5 text-xs font-semibold text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-colors"
                    >
                      Download Template
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection>
              <div className="mt-10 rounded-sm border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 mb-3">Assurance</p>
                <h3 className="mb-3">Assurance for Privacy Template Use</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These templates support standardized privacy-request intake across regions. They do not replace legal interpretation, statutory obligations, or organization-specific legal review and approval workflows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-t border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="" >
                Methodology for <span className="opacity-30 text-nowrap">Privacy Requests</span>
              </h2>
              <p className="mt-4 text-slate-600">
                This methodology ensures privacy requests are handled with verifiable identity checks, controlled processing, and documented closure.
              </p>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Submit Request", desc: "Contact us with details of your privacy request and relevant context." },
              { title: "Verification", desc: "We verify request legitimacy before processing sensitive data actions." },
              { title: "Resolution", desc: "We respond within a reasonable timeframe, subject to legal obligations." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-10 transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 group">
                  <h3 className="mb-3 tracking-tight" >{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}

