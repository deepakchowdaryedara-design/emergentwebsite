import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

export default function ServicesShowcaseTabs({
  services = [],
  title = "Transformative IT Solutions: Services",
  description = "Explore delivery tracks tailored to real operational challenges and measurable business outcomes.",
}) {
  const safeServices = useMemo(() => services.filter(Boolean), [services]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!safeServices.length) return null;

  const active = safeServices[activeIndex] || safeServices[0];

  return (
    <div className="bg-[#020b2d] text-white rounded-sm overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 pb-4 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight max-w-2xl">{title}</h3>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-slate-300 leading-relaxed mb-3">{description}</p>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition-colors">
              View All Services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: true horizontal accordion — each item expands into image | copy or collapses to a vertical bar */}
      <div className="hidden lg:flex flex-row w-full bg-white text-[#0B1B3D] min-h-[420px]">
        {safeServices.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={service.slug}
              className={`relative flex min-h-[420px] flex-col overflow-hidden border-r border-slate-200 last:border-r-0
                basis-0 transition-[flex-grow] duration-500 ease-out motion-reduce:transition-none
                ${isActive ? "grow-[14] min-w-0 z-[1] shadow-[inset_0_0_0_1px_rgba(37,99,235,0.08)]" : "grow min-w-[44px]"}`}
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
                  <div className="flex w-1/2 min-w-0 flex-col justify-center bg-white p-8 xl:p-10">
                    <p className="mb-4 text-5xl font-light leading-none text-slate-500">{pad(index)}.</p>
                    <h4 className="mb-4 text-[28px] font-semibold leading-[1.08] tracking-tight xl:text-[32px]">{service.title}</h4>
                    <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-600">{service.shortDesc}</p>
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
                    className="text-[14px] font-normal tracking-tight text-slate-400 xl:text-[15px]"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {pad(index)}.{service.title}
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
          <p className="mb-2 text-4xl font-light text-slate-500">{pad(activeIndex)}.</p>
          <h4 className="mb-3 text-2xl font-bold tracking-tight">{active.title}</h4>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">{active.shortDesc}</p>
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
              className={`border-b border-r border-slate-200 p-4 text-left text-sm ${
                index === activeIndex ? "bg-slate-100 font-semibold" : "bg-white text-slate-600"
              }`}
            >
              {pad(index)}. {service.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
