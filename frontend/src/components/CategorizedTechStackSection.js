import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import TechStackLogoGrid from "./TechStackLogoGrid";

const DEFAULT_CATEGORY_DESC =
  "Representative tools for scoping and integration planning; selection follows your standards and procurement rules.";

/**
 * Normalize API shapes: { category }, { cat }, { title }, optional desc / description.
 */
export function normalizeTechCategories(categories) {
  return (categories || [])
    .map((c) => ({
      title: String(c.title || c.cat || c.category || "").trim(),
      description: String(c.desc || c.description || "").trim(),
      techs: Array.isArray(c.techs) ? c.techs : [],
    }))
    .filter((x) => x.title && x.techs.length);
}

/** Navy rule + header + inset grid — single flat list (case studies, solution sidebar, etc.) */
export function FlatTechStackPanel({
  eyebrow,
  title,
  intro,
  children,
  className,
  bodyClassName,
  insetClassName,
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05)]",
        className
      )}
    >
      <div className="h-1 shrink-0 bg-[#0B1B3D]" aria-hidden />
      <div className="border-b border-slate-100 bg-white px-5 py-4 sm:px-6 sm:py-5">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]/85">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]">
          {title}
        </h3>
        {intro ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{intro}</p>
        ) : null}
      </div>
      <div className={cn("bg-[#F8FAFC] px-4 py-4 sm:px-5 sm:py-5", bodyClassName)}>
        <div
          className={cn(
            "overflow-hidden rounded-md border border-slate-200/90 bg-white p-3 shadow-inner",
            insetClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** Inset only (for tight card footers) — gray band + white inner well */
export function TechStackLogoInset({ children, className }) {
  return (
    <div className={cn("rounded-md border border-slate-200/80 bg-[#F8FAFC] p-2.5 sm:p-3", className)}>
      <div className="overflow-hidden rounded-md border border-slate-200/90 bg-white p-2 shadow-inner sm:p-3">
        {children}
      </div>
    </div>
  );
}

/**
 * 2×2 category grid with marquee panels (industry page, service technology foundation).
 */
export function CategorizedTechStackPanels({
  categories,
  className,
  marqueeColumnCap = 3,
  marqueeColumnHeightClassName = "h-36 sm:h-44 min-h-[9rem]",
}) {
  const cats = normalizeTechCategories(categories);
  if (cats.length === 0) return null;

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6", className)}
    >
      {cats.map((c) => (
        <article
          key={c.title}
          className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
        >
          <div className="h-1 shrink-0 bg-[#0B1B3D] group-hover:bg-blue-600 transition-colors" aria-hidden />
          <div className="border-b border-slate-100 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-[#0B1B3D]">
              {c.title}
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500 font-medium line-clamp-2">
              {c.description || DEFAULT_CATEGORY_DESC}
            </p>
          </div>
          <div className="bg-[#F8FAFC]/50 px-4 py-4 sm:px-5 sm:py-5">
            <div className="relative rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm">
              <TechStackLogoGrid
                items={c.techs}
                compact
                marqueeColumnCap={marqueeColumnCap}
                marqueeColumnHeightClassName={marqueeColumnHeightClassName}
                className="w-full"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Full section: eyebrow, title, intro, optional integrations link, categorized panels.
 */
export default function CategorizedTechStackSection({
  eyebrow = "Coverage",
  title,
  intro,
  categories = [],
  dataTestId = "categorized-tech-stack",
  className,
  integrationsHref,
  integrationsCta = "See all integrations",
  showIntegrations = false,
  children,
  marqueeColumnCap,
  marqueeColumnHeightClassName,
}) {
  const cats = normalizeTechCategories(categories);

  return (
    <section
      data-testid={dataTestId}
      className={cn(
        "relative border-t border-slate-200 bg-[#EFF3F8] py-10 sm:py-12 md:py-14",
        className
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1B3D]/85">
              {eyebrow}
            </p>
            {typeof title === "string" ? (
              <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] sm:text-3xl lg:text-[2rem] lg:leading-snug">
                {title}
              </h2>
            ) : (
              title
            )}
            {intro ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                {intro}
              </p>
            ) : null}
            {showIntegrations && integrationsHref ? (
              <Link
                to={integrationsHref}
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                {integrationsCta}
              </Link>
            ) : null}
            {children}
          </div>
        </AnimatedSection>

        <CategorizedTechStackPanels
          categories={cats}
          marqueeColumnCap={marqueeColumnCap}
          marqueeColumnHeightClassName={marqueeColumnHeightClassName}
        />

        {!cats.length ? (
          <p className="py-8 text-center text-sm text-slate-600">
            No technologies listed.
          </p>
        ) : null}
      </div>
    </section>
  );
}
