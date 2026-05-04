import { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import solutions from "../data/solutions";

const DISPLAY = solutions.slice(0, 3);

const TAB_LABELS = ["Delivery scope", "Integrations", "Architecture"];

const ALT_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=960&q=80",
];

function tabBullets(solution, tabIdx) {
  const features = solution.features || [];
  const tech = solution.tech || [];
  const useCases = solution.useCases || [];
  if (tabIdx === 0) {
    return features.slice(0, 5).map((x) => x.title);
  }
  if (tabIdx === 1) {
    return tech.slice(0, 6);
  }
  return useCases.slice(0, 5);
}

function tabImage(solution, tabIdx) {
  if (tabIdx === 0) return solution.heroImage;
  return ALT_IMAGES[(tabIdx - 1) % ALT_IMAGES.length];
}

function SolutionCard({ solution }) {
  const [tab, setTab] = useState(0);
  const bullets = tabBullets(solution, tab);

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1224] text-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)]">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex min-h-0 flex-col justify-between p-8 sm:p-10 lg:p-12 lg:pr-10">
          <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-visible">
            <h3 className="mb-4">{solution.title}</h3>
            <p className="mb-6 text-sm leading-snug text-slate-400 sm:text-base">{solution.shortDesc}</p>
            <ul className="space-y-3">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-3 w-3 text-blue-400" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 shrink-0 border-t border-white/[0.08] pt-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={`${solution.title} focus areas`}>
              {TAB_LABELS.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={tab === idx}
                  onClick={() => setTab(idx)}
                  className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors sm:text-[13px] ${tab === idx ? "bg-white text-[#050816]" : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link
              to={`/solutions/${solution.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-blue-400 underline-offset-4 transition-colors hover:text-blue-300"
            >
              View solution details →
            </Link>
          </div>
        </div>

        <div className="relative min-h-[220px] shrink-0 bg-[#070b14] sm:min-h-[260px] lg:min-h-0 lg:h-full">
          <img
            key={`${solution.slug}-${tab}`}
            src={tabImage(solution, tab)}
            alt=""
            className="h-full min-h-[220px] w-full object-cover sm:min-h-[260px] lg:absolute lg:inset-0 lg:min-h-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/40 to-transparent" aria-hidden />
        </div>
      </div>
    </article>
  );
}

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const [slideHeight, setSlideHeight] = useState(620);
  const [pauseHover, setPauseHover] = useState(false);
  const trackRef = useRef(null);
  const touchStartY = useRef(null);

  const count = DISPLAY.length;

  const measure = useCallback(() => {
    const first = trackRef.current?.children?.[0];
    if (!first) return;
    const h = first.getBoundingClientRect().height;
    if (h > 0) setSlideHeight(Math.round(h));
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = useCallback(
    (dir) => {
      setActive((i) => {
        const next = i + dir;
        if (next < 0) return count - 1;
        if (next >= count) return 0;
        return next;
      });
    },
    [count]
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || pauseHover) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 7000);
    return () => window.clearInterval(id);
  }, [pauseHover, count]);

  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartY.current == null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    if (Math.abs(dy) < 48) return;
    if (dy > 0) go(1);
    else go(-1);
  };

  return (
    <section id="solutions" data-testid="solutions-section" className="overflow-hidden bg-[#050816] py-6 sm:py-8 md:py-10 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <header className="mb-8 max-w-3xl text-left sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Solutions</p>
          <h2
            className="mb-8"
          >
            Accelerators Built for Business Challenges
          </h2>
        </header>

        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setPauseHover(true)}
          onMouseLeave={() => setPauseHover(false)}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b14] shadow-[0_32px_90px_-40px_rgba(0,0,0,0.75)]"
            style={{ height: slideHeight }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex flex-col transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateY(-${active * slideHeight}px)` }}
            >
              {DISPLAY.map((s) => (
                <div
                  key={s.slug}
                  className="w-full shrink-0 overflow-hidden px-0 pb-0"
                  style={{ height: slideHeight }}
                >
                  <SolutionCard solution={s} />
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-14 flex-col items-center justify-center gap-3 pr-1 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0c1224]/90 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-[#0c1224]"
              aria-label="Previous solution"
            >
              <ChevronUp className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0c1224]/90 text-white shadow-lg backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-[#0c1224]"
              aria-label="Next solution"
            >
              <ChevronDown className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-2">
              {DISPLAY.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  aria-label={`Show ${s.title}`}
                  aria-current={active === i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? "w-8 bg-blue-400" : "w-2.5 bg-white/25 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4 sm:hidden">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0c1224] text-white"
                aria-label="Previous solution"
              >
                <ChevronUp className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0c1224] text-white"
                aria-label="Next solution"
              >
                <ChevronDown className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <p className="text-center text-[11px] text-slate-500 sm:hidden">Swipe up or down to change slide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
