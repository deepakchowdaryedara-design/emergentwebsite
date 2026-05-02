import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { getTechFoundationIcon } from "../lib/techFoundationIcons";
import AnimatedSection from "./AnimatedSection";

/** Deduplicate and spread tech names into `count` columns (round-robin). */
function buildColumns(categories, count = 3) {
  const names = [
    ...new Set(
      categories.flatMap((c) =>
        (c.techs || []).map((t) => String(typeof t === "string" ? t : t.name || t))
      )
    ),
  ];
  const cols = Array.from({ length: count }, () => []);
  names.forEach((name, i) => {
    cols[i % count].push(name);
  });
  return cols;
}

function DynamicLogoTile({ name, Icon }) {
  return (
    <div
      className="group flex h-[72px] w-full max-w-[122px] shrink-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-2 shadow-[0_10px_28px_-14px_rgba(15,23,42,0.33)] transition-[transform,box-shadow] duration-300 hover:z-20 hover:scale-[1.06] hover:shadow-[0_18px_44px_-18px_rgba(15,23,42,0.42)] sm:h-[76px] sm:max-w-[130px]"
      data-testid={`tech-foundation-tile-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      <Icon className="h-8 w-8 text-[#0B1B3D] opacity-[0.92] transition-opacity group-hover:opacity-100" aria-hidden />
      <span className="mt-1 max-w-[100px] truncate text-center text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
        {name}
      </span>
    </div>
  );
}

function DynamicMarqueeColumn({ names, animationClass }) {
  const tiles = names.map((name) => ({
    name,
    Icon: getTechFoundationIcon(name),
  }));
  const loop = [...tiles, ...tiles];
  return (
    <div className="relative h-[min(380px,52vh)] overflow-hidden rounded-sm sm:h-[420px] lg:h-[440px]">
      <div className={`partner-marquee-v ${animationClass}`}>
        {loop.map((t, i) => (
          <DynamicLogoTile key={`${t.name}-${i}`} name={t.name} Icon={t.Icon} />
        ))}
      </div>
    </div>
  );
}

/**
 * Two-column “Platforms & Partners” style band: narrative + CTA,
 * and a 3D-tilted vertical marquee of labeled tech tiles built from `categories`.
 */
export default function TechnologyFoundationSection({
  label = "TECH STACK",
  /** When set with `titleMuted`, renders split headline like the homepage tech section. */
  titleLead = "Empowering Innovation",
  titleMuted = "Through Advanced Technologies",
  /** Legacy: single-line title if you omit split titles (rare). */
  title,
  description,
  categories = [],
  dataTestId = "technology-foundation-section",
  className = "",
  integrationsHref = "/partners",
  integrationsCta = "See all integrations",
}) {
  const columns = buildColumns(categories, 3);
  const animationClasses = [
    "partner-marquee-v-fast",
    "partner-marquee-v-slow partner-marquee-v-reverse",
    "",
  ];

  const hasTiles = columns.some((col) => col.length > 0);

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

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-50/80 via-transparent to-slate-50/50 blur-2xl lg:-inset-10"
              aria-hidden
            />

            {!hasTiles ? (
              <p className="py-12 text-center text-sm text-slate-500">No technologies listed.</p>
            ) : (
              <>
                <div className="hidden grid-cols-3 gap-3 sm:gap-4 motion-reduce:grid">
                  {columns.map((names, ci) => (
                    <div key={ci} className="flex flex-col gap-3">
                      {names.map((name) => (
                        <DynamicLogoTile
                          key={name}
                          name={name}
                          Icon={getTechFoundationIcon(name)}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                <div className="motion-reduce:hidden [perspective:1100px] lg:[perspective:1300px]">
                  <div className="mx-auto origin-center transform-gpu [transform-style:preserve-3d] transition-transform duration-300 will-change-transform max-lg:[transform:rotateX(6deg)_rotateY(-6deg)] lg:[transform:rotateX(12deg)_rotateY(-11deg)_rotateZ(-2deg)]">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      {columns.map((names, i) => (
                        <DynamicMarqueeColumn
                          key={i}
                          names={names}
                          animationClass={animationClasses[i] || ""}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
