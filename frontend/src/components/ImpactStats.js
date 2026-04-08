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
    <section data-testid="impact-stats-section" className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {title && (
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1B3D] mb-10 text-center" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {title}
            </h2>
          </AnimatedSection>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayStats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="text-center p-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {s.value}
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{s.label}</p>
                {s.source && <p className="text-[10px] text-[#2563EB] mt-1 font-medium">— {s.source}</p>}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
