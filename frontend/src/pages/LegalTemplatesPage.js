import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const termsTemplates = [
  { title: "India Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-india.txt" },
  { title: "United Kingdom Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uk.txt" },
  { title: "European Union Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-eu.txt" },
  { title: "United States (Delaware) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-us-delaware.txt" },
  { title: "Singapore Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-singapore.txt" },
  { title: "UAE (DIFC) Jurisdiction Clause", file: "/legal-templates/jurisdiction-template-uae-difc.txt" },
];

const privacyTemplates = [
  { title: "India Privacy Request Template", file: "/legal-templates/privacy-request-template-india.txt" },
  { title: "United Kingdom Privacy Request Template", file: "/legal-templates/privacy-request-template-uk.txt" },
  { title: "European Union Privacy Request Template", file: "/legal-templates/privacy-request-template-eu.txt" },
  { title: "United States Privacy Request Template", file: "/legal-templates/privacy-request-template-us.txt" },
  { title: "Singapore Privacy Request Template", file: "/legal-templates/privacy-request-template-singapore.txt" },
  { title: "UAE Privacy Request Template", file: "/legal-templates/privacy-request-template-uae.txt" },
];

function TemplateCard({ item }) {
  return (
    <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
      <h3 className="mb-4">{item.title}</h3>
      <a
        href={item.file}
        download
        className="inline-flex items-center rounded-sm border border-[#0B1B3D] px-3 py-1.5 text-xs font-semibold text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-colors"
      >
        Download Template
      </a>
    </div>
  );
}

export default function LegalTemplatesPage() {
  return (
    <div>
      <PageHero
        label="Legal & Trust"
        title="Legal Templates Index for Global Engagements"
        description="This index centralizes jurisdiction and privacy templates for cross-border contracting and compliance workflows."
        primaryCTA={{ text: "View Templates", href: "#legal-templates-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      <section id="legal-templates-content" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2>
                  Coverage Across <span className="opacity-30">Legal Templates</span>
                </h2>
                <p className="mt-4 text-slate-600">
                  This coverage model provides downloadable templates for terms jurisdiction clauses and privacy rights requests across key regions.
                </p>
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

            <AnimatedSection>
              <div className="mb-10 rounded-sm border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 mb-3">Assurance</p>
                <h3 className="mb-3">Assurance for Governance Reporting</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  This assurance block provides a board-ready legal risk dashboard covering operational, financial, compliance, intellectual property, and dispute exposure.
                </p>
                <a
                  href="/legal-templates/legal-risk-dashboard.md"
                  download
                  className="inline-flex items-center rounded-sm border border-[#0B1B3D] px-3 py-1.5 text-xs font-semibold text-[#0B1B3D] hover:bg-[#0B1B3D] hover:text-white transition-colors"
                >
                  Download Legal Risk Dashboard
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="mb-6">Jurisdiction Clause Templates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {termsTemplates.map((item) => (
                  <TemplateCard key={item.file} item={item} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h3 className="mb-6">Privacy Request Templates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privacyTemplates.map((item) => (
                  <TemplateCard key={item.file} item={item} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-10 rounded-sm border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 mb-3">Assurance</p>
                <h3 className="mb-3">Assurance for Legal Template Use</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These documents are clause templates for drafting workflows and cross-border consistency. They do not replace signed agreements, legal advice, or jurisdiction-specific counsel review.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
