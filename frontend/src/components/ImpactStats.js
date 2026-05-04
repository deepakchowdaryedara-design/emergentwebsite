import { Users, Handshake, Star, Headset } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "$20B+", label: "Estimated GenAI market growth by end of decade", source: "Statista" },
  { value: "54%", label: "Companies integrated GenAI by end of 2023", source: "PwC" },
  { value: "$4.4T", label: "Economic benefits AI adds annually", source: "McKinsey" },
  { value: "$288B", label: "Projected US AI market value by 2026", source: "PRNews" },
  { value: "10-15%", label: "NLP market definite growth rate", source: "Statista" },
];

const DEFAULT_SPLIT_HIGHLIGHTS = [
  { icon: Users, title: "Cross-functional teams aligned to your domain and systems" },
  { icon: Handshake, title: "Delivery standards that match enterprise governance expectations" },
  { icon: Star, title: "Outcomes defined with measurable acceptance criteria" },
  { icon: Headset, title: "Ongoing support through adoption, handover, and optimization" },
];

const DEFAULT_SPLIT_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-4ef5e1c0b612?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
];

/**
 * @param {"stats"|"split"} [variant="stats"] — "split" = two-column intro + 2×2 feature icons + dual images (see Service Detail).
 */
export default function ImpactStats({
  title,
  customStats,
  variant = "stats",
  label = "Operating model",
  description,
  highlights = DEFAULT_SPLIT_HIGHLIGHTS,
  splitImages = DEFAULT_SPLIT_IMAGES,
}) {
  const displayStats = customStats || stats;
  const intro =
    description ||
    "We structure delivery around your operating constraints, data posture, and adoption path—so solutions reach production with clear accountability.";

  if (variant === "split") {
    const heading =
      title || "The NeuralTrix AI Delivery Difference";

    return (
      <section
        data-testid="impact-stats-section"
        className="border-y border-slate-200/80 bg-[#eef1f4] py-4 sm:py-6 md:py-8"
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <AnimatedSection>
              <div className="max-w-xl text-left lg:max-w-none">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0B1B3D] sm:text-4xl lg:text-[2.15rem] lg:leading-[1.18]">
                  {heading}
                </h2>
                <p className="text-[15px] leading-snug text-slate-600">{intro}</p>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                          <Icon className="h-6 w-6 text-[#2563eb]" strokeWidth={1.75} aria-hidden />
                        </div>
                        <p className="pt-1 text-sm font-semibold leading-snug text-[#0B1B3D]">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                data-testid="impact-stats-split-images"
              >
                {splitImages.slice(0, 2).map((src, i) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-lg bg-slate-200 shadow-sm ${i === 1 ? "lg:mt-6" : ""
                      }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-[min(420px,55vw)] w-full object-cover sm:h-[min(460px,48vw)] lg:h-[min(520px,36vw)]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-testid="impact-stats-section"
      className="relative overflow-hidden border-y border-slate-100 bg-white py-4 sm:py-6 md:py-8"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-slate-50/50 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <AnimatedSection>
              <div className="max-w-md text-left lg:pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                  {label}
                </p>
                <h2 className="mb-6 text-3xl font-black leading-none tracking-tighter text-[#0B1B3D] lg:text-4xl">
                  {title}
                </h2>
                <p className="text-[13px] font-medium leading-relaxed text-slate-500">
                  Validated performance benchmarks across heterogeneous infrastructure and
                  multi-tenant deployments.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-[8px] font-black text-blue-400"
                      >
                        NT
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-500/50">
                    Audited
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {displayStats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="group relative h-full overflow-hidden border-y border-r border-slate-100 border-l-transparent border-l-2 bg-[#F8FAFC]/50 p-6 transition-all duration-300 hover:border-l-blue-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 sm:p-8">
                    <div className="pointer-events-none absolute -bottom-2 -right-2 select-none text-6xl font-black text-slate-200/20 transition-colors group-hover:text-blue-500/5">
                      0{i + 1}
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className="text-[8px] font-black uppercase tracking-widest text-blue-500"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")} UNIT
                      </span>
                      <div className="h-px flex-1 bg-slate-200/50" />
                    </div>

                    <div className="relative z-10">
                      <span className="mb-2 block text-3xl font-black tracking-tighter text-[#0B1B3D] transition-colors group-hover:text-blue-600 lg:text-4xl">
                        {s.value}
                      </span>
                      <p className="text-[10px] font-bold uppercase leading-tight tracking-widest text-slate-500 transition-colors group-hover:text-slate-700">
                        {s.label}
                      </p>
                    </div>

                    {s.source && (
                      <div className="mt-6 border-t border-slate-100/50 pt-4 opacity-100">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300">
                          Source: {s.source}
                        </span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
