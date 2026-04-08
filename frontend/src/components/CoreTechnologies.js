import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function CoreTechnologies({ categories, title, description }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!categories || categories.length === 0) return null;

  return (
    <section data-testid="core-technologies-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <AnimatedSection>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Technologies We Use</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {title || "Enterprise-Grade Digital Ecosystem"}
            </h2>
            {description && <p className="text-base text-slate-600">{description}</p>}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                data-testid={`tech-tab-${i}`}
                onClick={() => setActiveTab(i)}
                className={`text-sm px-4 py-2.5 rounded-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-[#0B1B3D] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {categories[activeTab].description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories[activeTab].techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-4 bg-[#F8FAFC] border border-slate-200 rounded-sm hover:border-[#2563EB]/40 transition-colors"
                  >
                    <div className="w-8 h-8 bg-[#0B1B3D] rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] text-white font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {tech.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#0B1B3D]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
