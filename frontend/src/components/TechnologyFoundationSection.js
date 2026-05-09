import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import AnimatedSection from "./AnimatedSection";
import { CategorizedTechStackPanels, normalizeTechCategories } from "./CategorizedTechStackSection";

/**
 * Service page: intro + CTA, then a 2×2 corporate panel grid per technology category
 * (same treatment as industry reference stack).
 */
export default function TechnologyFoundationSection({
  label = "Coverage",
  titleLead = "Empowering Innovation",
  titleMuted = "Through Advanced Technologies",
  title,
  description,
  categories = [],
  dataTestId = "technology-foundation-section",
  className = "",
  integrationsHref = "/partners",
  integrationsCta = "See all integrations",
}) {
  const cats = normalizeTechCategories(categories);
  const hasCategories = cats.length > 0;

  return (
    <section
      data-testid={dataTestId}
      className={cn(
        "relative border-t border-slate-200 bg-[#F8FAFC] py-10 lg:py-12 overflow-hidden",
        className
      )}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06),transparent_50%)]" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <AnimatedSection>
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">{label}</span>
                </div>
                <h2 className="mb-3 text-2xl font-black tracking-tighter text-[#0B1B3D] sm:text-3xl lg:text-[2.25rem] lg:leading-none uppercase">
                  {title ? (
                    title
                  ) : (
                    <>
                      {titleLead}{" "}
                      <span className="text-slate-400">{titleMuted}</span>
                    </>
                  )}
                </h2>
                <p className="text-sm leading-relaxed text-slate-500 font-medium max-w-xl">
                  {description || "Tooling choices prioritize reliability, integration fit, and maintainability."}
                </p>
            </div>
            <Link
              to={integrationsHref}
              className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-6 py-3 text-[12px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              {integrationsCta}
            </Link>
          </div>
        </AnimatedSection>

        {hasCategories ? (
          <CategorizedTechStackPanels 
            categories={cats} 
            marqueeColumnHeightClassName="h-32 sm:h-36"
          />
        ) : (
          <div className="py-12 text-center border-2 border-dashed border-slate-100 rounded-3xl">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              No technologies listed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
