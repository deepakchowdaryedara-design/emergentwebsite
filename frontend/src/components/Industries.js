import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";

export default function Industries() {
  const displayIndustries = industries.slice(0, 7);
  const center = Math.floor(displayIndustries.length / 2); // index 3

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="arc-section py-10 sm:py-14 md:py-16 bg-white"
    >
      {/* Centered heading */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 text-left">
        <AnimatedSection>
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
            Industries
          </p>
          <h2
            data-testid="industries-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"
            
          >
            Purpose-built AI for <span className="text-[#0B1B3D]/30">Industry Excellence</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl">
            We engineer industry-ready AI systems built for regulatory compliance,
            total data security, and measurable financial impact.
          </p>
        </AnimatedSection>
      </div>

      {/* 3D Arc Carousel */}
      <div className="arc-track">
        {displayIndustries.map((ind, i) => {
          const pos = i - center; // -3 to +3
          const Icon = ind.icon;

          return (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              data-testid={`industry-${ind.slug}`}
              className="arc-card group"
              data-pos={String(pos)}
              draggable={false}
            >
              <img
                src={ind.heroImage}
                alt={ind.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/35 backdrop-blur-sm mb-3 shrink-0">
                  <Icon size={17} className="text-white" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-sm font-bold text-white tracking-tight leading-snug drop-shadow-md"
                  
                >
                  {ind.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

