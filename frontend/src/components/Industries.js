import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";
import industryTabUseCases from "../data/industryTabUseCases";

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="arc-section relative overflow-hidden bg-[#F8FAFC]/50 py-6 sm:py-8 md:py-10"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-8 max-w-3xl lg:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Industries
            </p>
            <h2
              data-testid="industries-heading"
              className="mb-4"
            >
              Purpose-built AI for{" "}
              <span className="opacity-30">Industry Excellence</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-500">
              We engineer industry-ready AI systems built for regulatory compliance,
              total data security, and measurable financial impact.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <div
            className="mb-10 mt-10 flex flex-wrap gap-2 lg:mt-12"
            role="tablist"
            aria-label="Industry verticals"
          >
            {industries.map((ind, i) => (
              <button
                key={ind.slug}
                type="button"
                role="tab"
                id={`industry-tab-${ind.slug}`}
                aria-selected={activeTab === i}
                aria-controls="industries-tab-panel"
                data-testid={`industry-tab-${ind.slug}`}
                onClick={() => setActiveTab(i)}
                className={`rounded-sm px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 sm:px-6 ${activeTab === i
                  ? "scale-[1.02] bg-[#0B1B3D] text-white shadow-xl shadow-[#0B1B3D]/20"
                  : "border border-slate-200 bg-white text-slate-400 hover:border-[#0B1B3D] hover:text-[#0B1B3D] hover:shadow-md"
                  }`}
              >
                {ind.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.18}>
          <div
            id="industries-tab-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${industries[activeTab].slug}`}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12 xl:gap-8"
          >
            <div className="flex flex-col rounded-sm border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-lg sm:p-10 lg:col-span-5">
              <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-600">
                  {(() => {
                    const Icon = industries[activeTab].icon;
                    return <Icon size={32} strokeWidth={1.75} aria-hidden />;
                  })()}
                </div>
                <h3 className="">
                  {industries[activeTab].title}
                </h3>
              </div>
              <p className="mb-10 text-base font-medium leading-relaxed text-slate-500">
                {industries[activeTab].shortDesc}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/industries/${industries[activeTab].slug}`}
                  data-testid={`industry-${industries[activeTab].slug}`}
                  className="group inline-flex items-center gap-3 text-sm font-black text-[#2563EB] transition-colors hover:text-[#0B1B3D]"
                >
                  Explore Solutions
                  <span className="h-px w-8 bg-blue-200 transition-all group-hover:w-12 group-hover:bg-[#0B1B3D]" />
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
              {(
                industryTabUseCases[industries[activeTab].title] ||
                industries[activeTab].features.slice(0, 4).map((f) => f.title)
              ).map((uc, i) => (
                <div
                  key={`${industries[activeTab].slug}-${i}`}
                  className="group flex min-h-[130px] flex-col justify-center rounded-sm border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 sm:min-h-[140px] sm:p-8"
                  data-testid={`industry-use-case-${industries[activeTab].slug}-${i}`}
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#0B1B3D] shadow-lg shadow-[#0B1B3D]/15 transition-transform duration-300 group-hover:scale-110">
                      <Check className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden />
                    </div>
                    <span className="text-base font-bold leading-tight tracking-tight text-[#0B1B3D]">
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
