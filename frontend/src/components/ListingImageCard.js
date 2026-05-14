import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DEFAULT_PAGE_HERO_IMAGE } from "../lib/heroImageThemes";

export default function ListingImageCard({
  to,
  dataTestId,
  image,
  title,
  description,
  icon: Icon,
  ctaText = "Explore",
  variant = "default",
  minHeightClass = "min-h-[320px]",
  contentMinHeightClass = "min-h-[320px]",
  contentPaddingClass = "p-6 sm:p-8",
}) {
  const [imgSrc, setImgSrc] = useState(image);
  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  const variantStyles = {
    default: {
      overlay: "absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/50 to-black/15",
      grid: "absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 bg-black/25 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:border-white/45 group-hover:bg-black/35",
      title: "text-lg font-bold text-white mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-white/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-white/95 underline underline-offset-4 decoration-white/35 group-hover:decoration-white transition-colors",
    },
    service: {
      overlay: "absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#0f172a]/55 to-[#020617]/95",
      grid: "absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-cyan-300/35 bg-slate-900/45 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 group-hover:border-cyan-200/65 group-hover:bg-slate-900/65",
      title: "text-lg font-bold text-white mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-slate-100 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-100 underline underline-offset-4 decoration-cyan-200/35 group-hover:decoration-cyan-100 transition-colors",
    },
    industry: {
      overlay: "absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/95 via-[#1d4ed8]/45 to-[#0B1B3D]/20",
      grid: "absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] bg-[size:18px_18px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-blue-100/40 bg-blue-950/30 shadow-[0_4px_24px_-4px_rgba(11,27,61,0.55)] backdrop-blur-md transition-all duration-300 group-hover:border-blue-100/70 group-hover:bg-blue-950/45",
      title: "text-lg font-bold text-white mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-blue-50/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.65),0_1px_3px_rgba(0,0,0,0.85)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-blue-50 underline underline-offset-4 decoration-blue-100/45 group-hover:decoration-blue-100 transition-colors",
    },
    solution: {
      overlay: "absolute inset-0 bg-gradient-to-t from-[#111827]/92 via-[#0f172a]/52 to-[#1f2937]/18",
      grid: "absolute inset-0 opacity-[0.04] bg-[linear-gradient(120deg,rgba(148,163,184,0.55)_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-200/35 bg-slate-950/35 shadow-[0_4px_24px_-4px_rgba(2,6,23,0.7)] backdrop-blur-md transition-all duration-300 group-hover:border-violet-100/60 group-hover:bg-slate-950/55",
      title: "text-lg font-semibold text-white mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-slate-100/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.9)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-violet-100 underline underline-offset-4 decoration-violet-200/40 group-hover:decoration-violet-100 transition-colors",
    },
    industryMinimal: {
      overlay: "absolute inset-0 bg-gradient-to-t from-[#0f172a]/88 via-[#1e293b]/42 to-[#334155]/12",
      grid: "absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.65)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200/40 bg-slate-900/35 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.6)] backdrop-blur-md transition-all duration-300 group-hover:border-slate-100/60 group-hover:bg-slate-900/55",
      title: "text-lg font-bold text-slate-50 mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-slate-200/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.65),0_1px_3px_rgba(0,0,0,0.85)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-slate-100 underline underline-offset-4 decoration-slate-300/45 group-hover:decoration-slate-100 transition-colors",
    },
    solutionExecutive: {
      overlay: "absolute inset-0 bg-gradient-to-b from-[#020617]/18 via-[#111827]/58 to-[#030712]/93",
      grid: "absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(196,181,253,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.28)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none",
      iconWrap: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-violet-300/45 bg-violet-950/30 shadow-[0_4px_24px_-4px_rgba(76,29,149,0.55)] backdrop-blur-md transition-all duration-300 group-hover:border-violet-200/70 group-hover:bg-violet-950/45",
      title: "text-lg font-semibold text-white mb-3 tracking-tight drop-shadow-md",
      desc: "text-sm text-violet-50/95 leading-relaxed mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.72),0_1px_3px_rgba(0,0,0,0.9)]",
      cta: "inline-flex items-center gap-1.5 text-sm font-semibold text-violet-100 underline underline-offset-4 decoration-violet-300/45 group-hover:decoration-violet-100 transition-colors",
    },
  };
  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <Link
      to={to}
      data-testid={dataTestId}
      className={`group relative isolate ${minHeightClass} overflow-hidden rounded-sm border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 block h-full flex flex-col`}
    >
      <img
        src={imgSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-bottom transition-all duration-700 ease-out"
        loading="lazy"
        decoding="async"
        onError={() => setImgSrc(DEFAULT_PAGE_HERO_IMAGE)}
      />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className={`relative z-10 flex ${contentMinHeightClass} flex-col justify-between ${contentPaddingClass}`}>
        <div className={styles.iconWrap}>
          <Icon size={26} className="text-white drop-shadow-sm" strokeWidth={1.75} />
        </div>
        <div className="pt-8">
          <h3
            className={styles.title}

          >
            {title}
          </h3>
          <p className={styles.desc}>
            {description}
          </p>
          <span className={styles.cta}>
            {ctaText} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

