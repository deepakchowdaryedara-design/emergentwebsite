import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const templateDownloads = [
  { title: "India", file: "/legal-templates/jurisdiction-template-india.txt", note: "Courts-focused template with India governing law." },
  { title: "United Kingdom", file: "/legal-templates/jurisdiction-template-uk.txt", note: "English law template with England and Wales venue." },
  { title: "European Union", file: "/legal-templates/jurisdiction-template-eu.txt", note: "Member-state selection template for EU engagements." },
  { title: "United States (Delaware)", file: "/legal-templates/jurisdiction-template-us-delaware.txt", note: "Delaware law template with state or federal venue." },
  { title: "Singapore", file: "/legal-templates/jurisdiction-template-singapore.txt", note: "Singapore law template with SIAC arbitration option." },
  { title: "UAE (DIFC)", file: "/legal-templates/jurisdiction-template-uae-difc.txt", note: "DIFC law template with DIFC Courts or arbitration." },
];

const sections = [
  {
    title: "1. Scope of Terms",
    content: (
      <>
        <p className="text-slate-600">
          These Terms and Conditions apply to all NeuralTrix AI services, including consulting, software delivery, AI solutions, support engagements, and website use.
        </p>
        <p className="mt-4 text-slate-600">
          By using our website or engaging our services, you agree to these terms unless a separate written agreement expressly governs your engagement.
        </p>
      </>
    ),
  },
  {
    title: "2. Service Engagement and Delivery",
    content: (
      <>
        <p className="text-slate-600">Service scope, deliverables, timelines, and responsibilities are defined through approved proposals, statements of work, or contracts.</p>
        <ul className="mt-4 space-y-3">
          {[
            "Client teams provide timely access, inputs, and decision approvals",
            "Project outcomes depend on agreed assumptions and dependencies",
            "Change requests are evaluated for scope, cost, and timeline impact",
            "Delays caused by client dependencies may result in schedule and cost adjustments",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "3. Fees, Invoicing, and Payment",
    content: (
      <>
        <p className="text-slate-600">Commercial terms are defined in the applicable engagement agreement.</p>
        <p className="mt-4 text-slate-600">
          Unless otherwise agreed in writing, invoices are due according to stated payment terms and may include applicable taxes, duties, or statutory charges.
        </p>
        <p className="mt-4 text-slate-600">
          We may suspend or limit services for overdue payments, material credit risk, or repeated payment delays, subject to contractual notice requirements.
        </p>
      </>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <>
        <p className="text-slate-600">
          Pre-existing intellectual property of each party remains owned by that party. Rights to project-specific deliverables are governed by the signed engagement agreement.
        </p>
        <p className="mt-4 text-slate-600">
          Unless explicitly transferred in writing, NeuralTrix AI retains ownership of its frameworks, accelerators, methodologies, and reusable technical assets.
        </p>
        <p className="mt-4 text-slate-600">
          Any implied license is strictly limited to the scope and duration set out in the applicable engagement documents.
        </p>
      </>
    ),
  },
  {
    title: "5. Confidentiality and Data Protection",
    content: (
      <>
        <p className="text-slate-600">
          Both parties agree to protect confidential information and use it only for authorized business purposes related to service delivery.
        </p>
        <p className="mt-4 text-slate-600">
          Data handling, security controls, and privacy obligations are managed in accordance with applicable law and contractual commitments.
        </p>
      </>
    ),
  },
  {
    title: "6. Acceptable Use",
    content: (
      <>
        <p className="text-slate-600">You agree not to misuse our website, services, systems, or content.</p>
        <ul className="mt-4 space-y-3">
          {[
            "No unauthorized access, disruption, or security testing without approval",
            "No use that violates law, regulation, or third-party rights",
            "No resale or redistribution of services unless contractually authorized",
            "No reverse engineering, extraction, or unauthorized reuse of deliverables, models, or proprietary methods",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "7. AI Systems and Third-Party Components",
    content: (
      <>
        <p className="text-slate-600">
          Some services may use third-party cloud, model, analytics, or integration components. Performance and availability of those components may affect service outcomes.
        </p>
        <p className="mt-4 text-slate-600">
          Where applicable, project documentation will define model boundaries, human review responsibilities, and operational controls for AI-enabled workflows.
        </p>
        <p className="mt-4 text-slate-600">
          AI outputs may vary by context and source data quality. Final business decisions and regulatory reliance remain the client&apos;s responsibility unless expressly agreed otherwise in writing.
        </p>
      </>
    ),
  },
  {
    title: "8. Warranty, Liability, and Indemnity",
    content: (
      <>
        <p className="text-slate-600">
          Services are provided using commercially reasonable care and professional standards. Except where explicitly stated in writing, no additional warranties are implied.
        </p>
        <p className="mt-4 text-slate-600">
          To the extent permitted by law, liability is limited as defined in the governing contract, and neither party is liable for indirect or consequential damages unless required by law.
        </p>
        <p className="mt-4 text-slate-600">
          Where no signed agreement specifies liability caps, our aggregate liability is limited to fees paid for the specific services directly giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: "9. Compliance and Export Controls",
    content: (
      <>
        <p className="text-slate-600">
          Each party is responsible for compliance with laws and regulations applicable to its obligations, including data protection, anti-corruption, and export control requirements.
        </p>
        <p className="mt-4 text-slate-600">
          Services must not be used in prohibited jurisdictions or for restricted end uses where applicable law prevents such activity.
        </p>
      </>
    ),
  },
  {
    title: "10. Termination",
    content: (
      <>
        <p className="text-slate-600">
          Either party may terminate an engagement as permitted by the applicable agreement, including for material breach not cured within the agreed notice period.
        </p>
        <p className="mt-4 text-slate-600">
          On termination, each party remains responsible for accrued obligations, including payment, confidentiality, and lawful data handling requirements.
        </p>
        <p className="mt-4 text-slate-600">
          We may suspend or terminate access immediately where necessary to address security threats, legal non-compliance, fraud risk, or material breach.
        </p>
      </>
    ),
  },
  {
    title: "11. Governing Law and Dispute Process",
    content: (
      <>
        <p className="text-slate-600">
          Governing law, venue, and dispute resolution procedures are defined in the signed master agreement or statement of work. If no such agreement exists, applicable law is determined by the contracting entity.
        </p>
        <p className="mt-4 text-slate-600">
          Parties must attempt good-faith commercial resolution before commencing formal proceedings, except where urgent injunctive or protective relief is required.
        </p>
      </>
    ),
  },
  {
    title: "12. Country and Region Legal Applicability",
    content: (
      <>
        <p className="text-slate-600">
          These terms are intended for cross-border service engagements and are interpreted alongside mandatory local laws that apply in specific countries or regions.
        </p>
        <p className="mt-4 text-slate-600">
          Where local law grants non-waivable rights or imposes additional obligations, those local provisions apply only to the extent required by law and only for the affected jurisdiction.
        </p>
      </>
    ),
  },
  {
    title: "13. Regional Regulatory Coverage",
    content: (
      <>
        <p className="text-slate-600">
          Depending on the location of parties, users, systems, or data, services may be subject to regional regulations and statutory obligations.
        </p>
        <ul className="mt-4 space-y-3">
          {[
            "European Union and EEA: GDPR and related local implementation laws",
            "United Kingdom: UK GDPR and Data Protection Act 2018",
            "United States: federal and state-level privacy, security, and consumer protection rules",
            "Canada: PIPEDA and applicable provincial regulations",
            "Latin America and Brazil: LGPD and local consumer frameworks",
            "Asia-Pacific jurisdictions: PDPA and equivalent national privacy laws",
            "Africa and Middle East jurisdictions: applicable data protection and commercial regulations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "14. Governing Terms and Updates",
    content: (
      <>
        <p className="text-slate-600">
          These terms may be updated at our discretion to reflect operational, legal, security, or service changes. Updated versions become effective when published on this page unless otherwise stated.
        </p>
        <p className="mt-4 text-slate-600">
          Continued use of services after publication of updates constitutes binding acceptance of revised terms to the extent permitted by applicable law.
        </p>
        <div
          className="inline-flex mt-4 items-center rounded-sm border border-[#2563EB]/20 bg-[#2563EB]/5 px-3 py-1 text-xs font-bold text-[#2563EB]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          EFFECTIVE DATE: MAY 2026 | LAST UPDATED: MAY 2026
        </div>
      </>
    ),
  },
  {
    title: "15. Jurisdiction Selection Clause Template",
    content: (
      <>
        <p className="text-slate-600">
          For master agreements and statements of work, parties may adopt the following template language and replace bracketed fields with agreed commercial terms.
        </p>
        <div className="mt-4 rounded-sm border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Governing Law and Venue. This Agreement is governed by the laws of [Country/State], excluding conflict of law rules. Courts located in [City/Country] have exclusive jurisdiction, except that parties may agree to arbitration under [Arbitration Rules] with seat in [Seat].
          </p>
        </div>
        <p className="mt-4 text-slate-600">
          This template is operational guidance for contracting workflows and must be finalized by authorized legal representatives of both parties.
        </p>
      </>
    ),
  },
  {
    title: "16. Legal Disclaimer",
    content: (
      <p className="text-slate-600">
        This page provides general contractual information for services and website use. It is not legal advice and does not create an attorney-client relationship. Legal interpretation must be confirmed by qualified counsel in relevant jurisdictions.
      </p>
    ),
  },
  {
    title: "17. Legal Contact",
    content: (
      <p className="text-slate-600">
        For legal notices, contractual clarifications, or terms-related requests, contact us through our official business communication channels with complete organizational and engagement details.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div>
      <PageHero
        label="Legal & Trust"
        title="Terms and Conditions for All Services"
        description="These terms define contractual structure, delivery governance, compliance expectations, and legal responsibilities across all NeuralTrix AI services."
        primaryCTA={{ text: "View Terms", href: "#terms-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      <section id="terms-content" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                <h2>
                  Assurance for <span className="opacity-30">Service Terms</span>
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
                      <h3>{section.title}</h3>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="text-base leading-relaxed">{section.content}</div>
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
                  Coverage Across <span className="opacity-30">Jurisdiction Templates</span>
                </h2>
                <p className="mt-4 text-slate-600">
                  This coverage section provides downloadable clause templates for common contracting jurisdictions and arbitration choices.
                </p>
                <p className="mt-4 text-slate-600">
                  Template clauses are drafting references and must be aligned with executed master agreements, statements of work, and applicable mandatory law.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templateDownloads.map((template) => (
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
                <h3 className="mb-3">Assurance for Jurisdiction Template Use</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These jurisdiction templates are standardized drafting references for cross-border contracting. Final enforceability, dispute framework, and wording must be validated by authorized legal counsel before execution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
