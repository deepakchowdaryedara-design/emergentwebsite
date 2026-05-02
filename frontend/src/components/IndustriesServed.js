import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";
import industryTabUseCases from "../data/industryTabUseCases";

export default function IndustriesServed({ title }) {
  const [activeTab, setActiveTab] = useState(0);
  const displayIndustries = industries.slice(0, 6);

  return (
    <section data-testid="industries-served-section" className="relative overflow-hidden bg-[#F8FAFC]/50 py-6 sm:py-8 md:py-10">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-[100px] -mr-64 -mt-64" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <AnimatedSection>
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Coverage</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0B1B3D] sm:text-4xl">
              {title || "Tailored AI Solutions for Your Industry"}
            </h2>
          </div>
        </AnimatedSection>

        {/* Dynamic Navigation Tabs */}
        <AnimatedSection delay={0.15}>
          <div className="mb-8 flex flex-wrap gap-2">
            {displayIndustries.map((ind, i) => (
              <button
                key={ind.slug}
                data-testid={`industry-tab-${ind.slug}`}
                onClick={() => setActiveTab(i)}
                className={`text-[11px] px-6 py-3 rounded-sm font-black uppercase tracking-[0.2em] transition-all duration-500 ${activeTab === i
                    ? "bg-[#0B1B3D] text-white shadow-xl shadow-[#0B1B3D]/20 scale-105"
                    : "bg-white border border-slate-200 text-slate-400 hover:border-[#0B1B3D] hover:text-[#0B1B3D] hover:shadow-md"
                  }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
            {/* Lead Capability Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-sm p-10 flex flex-col shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue-100">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-sm bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-700 group-hover:rotate-6">
                  {(() => { const Icon = displayIndustries[activeTab].icon; return <Icon size={32} />; })()}
                </div>
                <h3 className="text-3xl font-black text-[#0B1B3D] tracking-tighter">
                  {displayIndustries[activeTab].title}
                </h3>
              </div>
              <p className="text-base text-slate-500 leading-relaxed mb-10 font-medium">
                {displayIndustries[activeTab].shortDesc}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/industries/${displayIndustries[activeTab].slug}`}
                  className="group inline-flex items-center gap-3 text-sm font-black text-[#2563EB] hover:text-[#0B1B3D] transition-colors"
                >
                  Explore Solutions
                  <span className="w-8 h-px bg-blue-200 group-hover:w-12 group-hover:bg-[#0B1B3D] transition-all" />
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Sub-Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {(industryTabUseCases[displayIndustries[activeTab].title] || displayIndustries[activeTab].features.slice(0, 4).map(f => f.title)).map((uc, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-sm p-8 flex flex-col justify-center min-h-[140px] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-9 h-9 bg-[#0B1B3D] rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0B1B3D]/15 transition-transform duration-500 group-hover:scale-110">
                      <span className="text-[11px] text-white font-black" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-base text-[#0B1B3D] font-bold leading-tight tracking-tight">
                      {uc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


