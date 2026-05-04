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

/**
 * Responsive grid of tech labels with icons. Dedupes by string identity.
 */
export default function TechStackLogoGrid({
  items = [],
  compact = false,
  className,
  gridClassName,
}) {
  const unique = [...new Set(items.map((x) => String(x).trim()).filter(Boolean))];
  if (unique.length === 0) return null;

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
