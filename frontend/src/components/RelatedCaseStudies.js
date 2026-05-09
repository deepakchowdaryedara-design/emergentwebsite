import { Link } from "react-router-dom";
import { ArrowUpRight, Activity, Zap, Shield, Network } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import caseStudies from "../data/caseStudies";
import TechStackLogoGrid from "./TechStackLogoGrid";
import { TechStackLogoInset } from "./CategorizedTechStackSection";

export default function RelatedCaseStudies({ industryFilter, limit = 3, title, showLabel = true }) {
  let filtered = caseStudies;
  if (industryFilter) {
    filtered = caseStudies.filter((cs) =>
      cs.industry.toLowerCase().includes(industryFilter.toLowerCase()) ||
      cs.techStack.some((t) => t.toLowerCase().includes(industryFilter.toLowerCase()))
    );
    if (filtered.length < 2) filtered = caseStudies;
  }
  const display = filtered.slice(0, 3); // Reduced to 3 for better density

  return (
    <section data-testid="related-case-studies" className="py-10 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Background patterns to cover white space */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="w-full px-4 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-3 shadow-sm">
                <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[8px] font-black text-blue-700 uppercase tracking-[0.2em]">Operational Case Logs</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-black tracking-tight text-[#0B1B3D] uppercase leading-none" >
                {title || "Coverage across scenarios"}
              </h2>
            </div>
            <Link to="/case-studies" data-testid="view-all-case-studies" className="inline-flex items-center gap-2 text-[9px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm group">
              Explore All <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((cs) => (
            <StaggerItem key={cs.slug}>
              <Link to={`/case-studies/${cs.slug}`} className="group relative border border-slate-100 rounded-[1.5rem] p-6 bg-slate-50/40 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 block h-full overflow-hidden shadow-sm">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[8px] font-black text-blue-600 uppercase tracking-[0.2em] px-2 py-0.5 bg-white rounded-full border border-slate-100">
                        {cs.industry}
                      </span>
                      <ArrowUpRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </div>
                    
                    <h3 className="text-[14px] lg:text-[15px] font-black text-[#0B1B3D] uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors leading-tight" >
                      {cs.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-8 line-clamp-2 group-hover:text-slate-600">
                      {cs.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{cs.archetype}</p>
                      </div>
                      <div className="flex -space-x-1.5">
                        {cs.techStack.slice(0, 3).map((t, idx) => (
                          <div key={idx} className="w-6 h-6 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:border-blue-100 transition-colors overflow-hidden">
                             <span className="text-[6px] font-black text-[#0B1B3D] uppercase">{t.substring(0, 2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

