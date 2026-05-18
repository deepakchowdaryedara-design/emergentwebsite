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
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-[#172B4D] shadow-[0_10px_35px_rgba(9,30,66,0.06)]">
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0">
        <div className="flex min-h-0 flex-col justify-between p-8 sm:p-10 lg:p-12 lg:pr-10 bg-[#FAFBFC] border-r border-slate-100">
          <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-visible">
            <h3 className="mb-4 text-[#172B4D] text-2xl font-bold tracking-tight">{solution.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-[#42526E] sm:text-base">{solution.shortDesc}</p>
            <ul className="space-y-3">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-[#42526E]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0052CC]/10">
                    <Check className="h-3 w-3 text-[#0052CC]" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 shrink-0 border-t border-slate-200/80 pt-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={`${solution.title} focus areas`}>
              {TAB_LABELS.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={tab === idx}
                  onClick={() => setTab(idx)}
                  className={`rounded-[4px] px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all sm:text-[13px] ${
                    tab === idx 
                      ? "bg-[#0052CC] text-white shadow-sm" 
                      : "text-[#42526E] hover:bg-slate-200/60 hover:text-[#172B4D]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link
              to={`/solutions/${solution.slug}`}
              className="mt-6 inline-flex text-sm font-bold text-[#0052CC] hover:text-[#0065FF] underline underline-offset-4 decoration-[#0052CC]/30 hover:decoration-[#0065FF] transition-all"
            >
              View solution details →
            </Link>
          </div>
        </div>

        <div className="relative min-h-[220px] shrink-0 bg-white sm:min-h-[260px] lg:min-h-0 lg:h-full flex items-center justify-center p-6">
          <img
            key={`${solution.slug}-${tab}`}
            src={tabImage(solution, tab)}
            alt=""
            className="h-full max-h-[350px] w-full object-contain lg:absolute lg:inset-0 lg:max-h-none lg:p-8"
          />
        </div>
      </div>
    </article>
  );
}

export default function SolutionsSection({ showLabel = true }) {
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
    <section id="solutions" data-testid="solutions-section" className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 text-slate-900 border-b border-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <header className="mb-8 max-w-3xl text-left sm:mb-10">
          {showLabel && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#0052CC]">Coverage</p>
          )}
          <h2
            className="mb-4 text-[#172B4D] text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Coverage Across <span className="text-[#0052CC]">solution accelerators</span>
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#42526E]">
            These accelerators package repeatable integration and governance patterns for prioritized domains; scope and roadmap align with each customer program.
          </p>
        </header>

        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setPauseHover(true)}
          onMouseLeave={() => setPauseHover(false)}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(9,30,66,0.08)]"
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
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#172B4D] shadow-md hover:bg-slate-50 transition-all active:scale-95"
              aria-label="Previous solution"
            >
              <ChevronUp className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#172B4D] shadow-md hover:bg-slate-50 transition-all active:scale-95"
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
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-[#0052CC]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4 sm:hidden">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#172B4D]"
                aria-label="Previous solution"
              >
                <ChevronUp className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#172B4D]"
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
