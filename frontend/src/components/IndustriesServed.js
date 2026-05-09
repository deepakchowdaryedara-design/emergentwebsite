import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";
import industryTabUseCases from "../data/industryTabUseCases";

export default function IndustriesServed({ title }) {
  const [activeTab, setActiveTab] = useState(0);
  const displayIndustries = industries.slice(0, 6);

  return (
    <section data-testid="industries-served-section" className="relative overflow-hidden bg-[#F8FAFC] py-16 border-y border-slate-200">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px] -mr-80 -mt-80 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[80px] -ml-48 -mb-48" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <AnimatedSection>
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100/50 border border-blue-200 mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              <span className="text-[9px] font-black text-blue-800 uppercase tracking-widest">Global Capabilities</span>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tighter text-[#0B1B3D] lg:text-[2.5rem] lg:leading-none uppercase">
              Coverage <span className="text-blue-600">Across Industries</span>
            </h2>
            <div className="w-16 h-1 bg-blue-600/10 rounded-full" />
          </div>
        </AnimatedSection>

        {/* Dynamic Navigation Tabs */}
        <AnimatedSection delay={0.15}>
          <div className="mb-10 p-1 inline-flex flex-wrap gap-1.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm">
            {displayIndustries.map((ind, i) => (
              <button
                key={ind.slug}
                onClick={() => setActiveTab(i)}
                className={`text-[9px] px-5 py-2 rounded-full font-black uppercase tracking-[0.1em] transition-all duration-500 ${activeTab === i
                    ? "bg-[#0B1B3D] text-white shadow-lg shadow-[#0B1B3D]/20"
                    : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Lead Capability Card */}
            <div className="lg:col-span-5 relative group overflow-hidden bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm transition-all duration-700 hover:shadow-xl hover:border-blue-300">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:shadow-blue-200/50">
                    {(() => { const Icon = displayIndustries[activeTab].icon; return <Icon size={32} />; })()}
                  </div>
                  <h3 className="text-2xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-none">
                    {displayIndustries[activeTab].title}
                  </h3>
                </div>
                <p className="text-base text-slate-500 leading-relaxed mb-8 font-medium">
                  {displayIndustries[activeTab].shortDesc}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/industries/${displayIndustries[activeTab].slug}`}
                    className="group/link inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-blue-600"
                  >
                    Explore Solutions
                    <div className="flex items-center">
                      <div className="w-8 h-[1.5px] bg-blue-600/20 group-hover/link:w-12 group-hover/link:bg-blue-600 transition-all duration-500 rounded-full" />
                      <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sub-Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {(industryTabUseCases[displayIndustries[activeTab].title] || displayIndustries[activeTab].features.slice(0, 4).map(f => f.title)).map((uc, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-center min-h-[110px] hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500 group/item relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover/item:h-full transition-all duration-500" />
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 transition-all duration-500 border border-blue-100 group-hover/item:border-blue-600">
                      <Check className="h-5 w-5 text-blue-600 group-hover/item:text-white" strokeWidth={3} aria-hidden />
                    </div>
                    <span className="text-base text-[#0B1B3D] font-black leading-tight tracking-tight uppercase">
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


