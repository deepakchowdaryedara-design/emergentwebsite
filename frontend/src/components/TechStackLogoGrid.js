import { useMemo, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { getTechFoundationIcon } from "../lib/techFoundationIcons";

/**
 * Technology card: white tile, soft shadow, centered brand icon, uppercase navy label
 * (matches site-wide stack presentation).
 */
export function TechStackLogoTile({ name, compact = false, className }) {
  const Icon = getTechFoundationIcon(name);
  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center rounded-2xl bg-white text-center shadow-[0_4px_12px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/90 transition-[transform,box-shadow] duration-200 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)]",
        compact
          ? "min-h-[76px] px-2 py-2 sm:min-h-[80px]"
          : "aspect-[3/2] min-h-[96px] max-h-[128px] px-3 py-4 sm:min-h-[104px]",
        className
      )}
      data-testid={`tech-tile-${String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
    >
      <Icon
        className={cn(
          "shrink-0 text-[#0B1B3D]",
          compact ? "h-6 w-6 sm:h-7 sm:w-7" : "h-8 w-8"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "mt-2 max-w-[140px] font-bold uppercase leading-tight tracking-wide text-[#0B1B3D]",
          compact ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]"
        )}
      >
        {name}
      </span>
    </div>
  );
}

/** round-robin split for independent scrolling columns */
function splitIntoColumns(items, colCount) {
  const c = Math.min(colCount, Math.max(1, items.length));
  const buckets = Array.from({ length: c }, () => []);
  items.forEach((name, i) => {
    buckets[i % c].push(name);
  });
  return buckets;
}

function useMarqueeColumnCount() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    const read = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(2);
      else if (w < 768) setCount(3);
      else if (w < 1024) setCount(4);
      else setCount(5);
    };
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);
  return count;
}

function columnSpeedClass(index) {
  const mod = index % 3;
  if (mod === 0) return "partner-marquee-v";
  if (mod === 1) return "partner-marquee-v partner-marquee-v-slow";
  return "partner-marquee-v partner-marquee-v-fast";
}

/**
 * Tech logos: default layout is vertical marquee columns (bottom → top), matching
 * partner-marquee-v in index.css. Set marquee={false} for a static grid.
 */
export default function TechStackLogoGrid({
  items = [],
  compact = false,
  className,
  gridClassName,
  marquee = true,
}) {
  const unique = useMemo(
    () => [...new Set(items.map((x) => String(x).trim()).filter(Boolean))],
    [items]
  );
  const responsiveCols = useMarqueeColumnCount();

  const columns = useMemo(() => {
    if (unique.length === 0) return [];
    const effective = Math.min(responsiveCols, unique.length);
    return splitIntoColumns(unique, effective);
  }, [unique, responsiveCols]);

  if (unique.length === 0) return null;

  if (!marquee) {
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5",
          gridClassName,
          className
        )}
      >
        {unique.map((name) => (
          <TechStackLogoTile key={name} name={name} compact={compact} />
        ))}
      </div>
    );
  }

  const gapClass = compact ? "gap-2" : "gap-3";
  const colHeight = compact
    ? "h-44 sm:h-52 min-h-[11rem]"
    : "h-[min(26rem,56vh)] sm:h-[28rem] min-h-[18rem]";

  return (
    <div
      className={cn("grid w-full", gapClass, gridClassName, className)}
      style={{
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      }}
      role="list"
      aria-label="Technology stack"
    >
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          role="listitem"
          className={cn(
            "group relative min-h-0 overflow-hidden rounded-xl",
            colHeight
          )}
        >
          <div
            className={cn(
              columnSpeedClass(colIndex),
              gapClass,
              compact && "!gap-2",
              "group-hover:[animation-play-state:paused]"
            )}
          >
            {[...col, ...col].map((name, i) => (
              <TechStackLogoTile
                key={`${colIndex}-${name}-${i}`}
                name={name}
                compact={compact}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
