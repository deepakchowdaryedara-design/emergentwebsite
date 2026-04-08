import { ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";

export default function ServiceCaseStudies({ cases, title }) {
  if (!cases || cases.length === 0) return null;

  return (
    <section data-testid="service-case-studies" className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <AnimatedSection>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Case Studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {title || "Proven Results That Speak For Themselves"}
            </h2>
          </div>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((cs, i) => (
            <StaggerItem key={i}>
              <div className="group border border-slate-200 rounded-sm p-8 bg-white hover:border-[#2563EB]/40 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{cs.industry}</span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mt-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{cs.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{cs.client}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{cs.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border border-slate-200 text-slate-500 rounded-sm">{t}</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#2563EB]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{cs.highlight}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
