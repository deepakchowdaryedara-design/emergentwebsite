import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import AnimatedSection from "./AnimatedSection";
import TechStackLogoGrid from "./TechStackLogoGrid";

/** Flatten category tech lists into unique ordered labels */
function flattenTechNames(categories) {
  const seen = new Set();
  const out = [];
  for (const c of categories || []) {
    for (const t of c.techs || []) {
      const s = String(typeof t === "string" ? t : t.name || t).trim();
      if (s && !seen.has(s)) {
        seen.add(s);
        out.push(s);
      }
    }
  }
  return out;
}

/**
 * Two-column band: narrative + CTA, and a flat grid of stack cards (icon + uppercase label)
 * consistent with the site-wide technology presentation.
 */
export default function TechnologyFoundationSection({
  label = "TECH STACK",
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
  const allNames = flattenTechNames(categories);
  const hasTiles = allNames.length > 0;

  return (
    <section
      data-testid={dataTestId}
      className={cn("border-y border-slate-100 bg-white py-6 sm:py-8 md:py-10", className)}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <AnimatedSection>
            <div className="max-w-xl lg:max-w-none">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {label}
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0B1B3D] sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12] xl:text-4xl">
                {title ? (
                  title
                ) : (
                  <>
                    {titleLead}{" "}
                    <span className="text-[#0B1B3D]/35">{titleMuted}</span>
                  </>
                )}
              </h2>
              {description ? (
                <p className="mb-6 text-[15px] leading-snug text-slate-600">{description}</p>
              ) : null}
              <Link
                to={integrationsHref}
                className="inline-flex items-center justify-center rounded-sm bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                {integrationsCta}
              </Link>
            </div>
          </AnimatedSection>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-50/80 via-transparent to-slate-50/50 blur-2xl lg:-inset-10"
              aria-hidden
            />

            {!hasTiles ? (
              <p className="py-12 text-center text-sm text-slate-500">No technologies listed.</p>
            ) : (
              <div className="relative [perspective:1100px] lg:[perspective:1300px]">
                <div className="mx-auto origin-center transform-gpu [transform-style:preserve-3d] transition-transform duration-300 max-lg:[transform:rotateX(5deg)_rotateY(-5deg)] lg:[transform:rotateX(10deg)_rotateY(-9deg)_rotateZ(-1deg)]">
                  <TechStackLogoGrid items={allNames} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
