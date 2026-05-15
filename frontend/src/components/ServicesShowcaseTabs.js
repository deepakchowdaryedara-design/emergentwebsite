import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicesShowcaseTabs({
  services = [],
  title = "Engineering Services Overview",
  description = "Explore delivery tracks tailored to real operational challenges and measurable business outcomes.",
}) {
  const safeServices = useMemo(() => services.filter(Boolean), [services]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!safeServices.length) return null;

  const active = safeServices[activeIndex] || safeServices[0];

  return (
    <div className="bg-white text-[#0B1B3D] overflow-hidden">
      {/* Header removed as requested */}

      {/* Desktop: true horizontal accordion; each item expands into image | copy or collapses to a vertical bar */}
      <div className="hidden lg:flex flex-row w-full bg-white text-[#0B1B3D] min-h-[420px]">
        {safeServices.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.slug}
              className={`relative flex min-h-[420px] flex-col overflow-hidden border-r border-slate-200 last:border-r-0
                basis-0 transition-[flex-grow] duration-500 ease-out motion-reduce:transition-none
                ${isActive ? "grow-[18] min-w-0 z-[1] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.08)]" : "grow min-w-[40px] max-w-[80px]"}`}
            >
              {isActive ? (
                <div className="flex h-full min-h-[420px] w-full min-w-0 flex-row">
                  <div className="relative w-1/2 min-w-0 bg-slate-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-1/2 min-w-0 flex-col justify-center bg-white p-10 xl:p-20">
                    <h4 className="font-display mb-6 text-4xl font-black leading-[1.05] tracking-tight xl:text-6xl bg-gradient-to-r from-[#0B1B3D] via-[#2563EB] to-[#0B1B3D] bg-clip-text text-transparent">{service.title}</h4>
                    <p className="mb-10 max-w-xl text-base lg:text-lg leading-relaxed text-slate-600 font-medium">{service.shortDesc}</p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-auto inline-flex w-fit items-center gap-2 border-b border-transparent text-sm font-semibold text-[#0B1B3D] decoration-[#0B1B3D] underline-offset-4 transition-colors hover:border-blue-600 hover:text-blue-600"
                    >
                      View Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex h-full min-h-[420px] w-full flex-col items-center justify-center bg-white px-2 transition-colors hover:bg-slate-50"
                  aria-label={`Expand ${service.title}`}
                  aria-pressed={false}
                >
                  <span
                    className="text-[13px] font-bold tracking-widest text-slate-500 xl:text-[14px] font-display uppercase"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {service.title}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="lg:hidden bg-white text-[#0B1B3D]">
        <div className="aspect-[16/9]">
          <img src={active.heroImage} alt={active.title} className="h-full w-full object-cover" />
        </div>
        <div className="border-b border-slate-200 p-6">
          <h4 className="font-display mb-3 text-2xl font-bold tracking-tight bg-gradient-to-r from-[#0B1B3D] via-[#2563EB] to-teal-700 bg-clip-text text-transparent">{active.title}</h4>
          <p className="mb-5 text-sm leading-relaxed text-slate-600 font-sans">{active.shortDesc}</p>
          <Link to={`/services/${active.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B3D]">
            View Details
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2">
          {safeServices.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`border-b border-r border-slate-200 p-4 text-left text-sm ${index === activeIndex ? "bg-slate-100 font-semibold" : "bg-white text-slate-600"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
