import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "$20B+", label: "Estimated GenAI market growth by end of decade", source: "Statista" },
  { value: "54%", label: "Companies integrated GenAI by end of 2023", source: "PwC" },
  { value: "$4.4T", label: "Economic benefits AI adds annually", source: "McKinsey" },
  { value: "$288B", label: "Projected US AI market value by 2026", source: "PRNews" },
  { value: "10-15%", label: "NLP market definite growth rate", source: "Statista" },
];

export default function ImpactStats({ title, customStats }) {
  const displayStats = customStats || stats;
  return (
    <section data-testid="impact-stats-section" className="py-14 sm:py-16 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Subtle Gradient Polish */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Perspective */}
          <div className="lg:col-span-4 xl:col-span-3">
            <AnimatedSection>
              <div className="max-w-md lg:pt-4">
                <span className="premium-label" style={{ marginBottom: '1rem' }}>Metrics</span>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-[#0B1B3D] mb-6 leading-none">
                  {title}
                </h2>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                  Validated performance benchmarks across heterogeneous infrastructure and multi-tenant deployments.
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[8px] font-black text-blue-400">NT</div>
                    ))}
                  </div>
                  <span className="text-[9px] font-black text-blue-500/50 uppercase tracking-widest">Audited</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: High-Density Stats Grid */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {displayStats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="group h-full bg-[#F8FAFC]/50 border-l-2 border-l-transparent border-y border-r border-slate-100 p-6 sm:p-8 hover:bg-white hover:border-l-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden">
                    {/* Background Index */}
                    <div className="absolute -bottom-2 -right-2 text-6xl font-black text-slate-200/20 group-hover:text-blue-500/5 transition-colors pointer-events-none select-none">
                      0{i + 1}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")} UNIT</span>
                      <div className="h-px flex-1 bg-slate-200/50" />
                    </div>
                    
                    <div className="relative z-10">
                      <span className="text-3xl lg:text-4xl font-black text-[#0B1B3D] block mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">
                        {s.value}
                      </span>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight group-hover:text-slate-700 transition-colors">{s.label}</p>
                    </div>

                    {s.source && (
                      <div className="mt-6 pt-4 border-t border-slate-100/50 opacity-100">
                        <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Source: {s.source}</span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


