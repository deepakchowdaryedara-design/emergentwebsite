import { ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import TechStackLogoGrid from "./TechStackLogoGrid";
import { TRACEFOLD } from "../lib/tracefoldLabel";

export default function ServiceCaseStudies({ cases, title }) {
  if (!cases || cases.length === 0) return null;

  return (
    <section data-testid="service-case-studies" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Coverage</p>
            <h2 className="text-2xl font-bold tracking-tight text-[#0B1B3D] sm:text-3xl lg:text-4xl">
              {title || `${TRACEFOLD} delivery patterns`}
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl leading-relaxed">
              Examples of problem classes and how we would structure an engagement, not references to specific completed client programs unless separately agreed.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="relative space-y-10 lg:space-y-16">
          {cases.map((cs, i) => (
            <div 
              key={i} 
              className={`sticky top-[100px] border border-slate-100 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500`}
              style={{ 
                marginTop: i === 0 ? 0 : `${i * 32}px`,
                zIndex: i + 1 
              }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 min-h-[450px] ${i % 2 === 0 ? 'bg-white text-[#0B1B3D]' : 'bg-[#0B1B3D] text-white'}`}>
                {/* Left: Summary Metric */}
                <div className={`lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center items-start relative ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white/5'}`}>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block px-3 py-1 rounded-full ${i % 2 === 0 ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-blue-500/20 text-blue-300'}`}>
                    {cs.industry}
                  </span>
                  
                  <div className="group">
                    <span className="text-3xl lg:text-4xl font-bold tracking-tight block mb-2" >
                      {cs.highlight.split(' ')[0]}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${i % 2 === 0 ? 'text-slate-500' : 'text-slate-200'}`}>
                      {cs.highlight.split(' ').slice(1).join(' ')}
                    </span>
                  </div>

                  <div className="mt-12">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i % 2 === 0 ? 'bg-white text-[#2563EB] shadow-sm' : 'bg-[#2563EB] text-white'}`}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Content */}
                <div className="lg:col-span-8 p-8 lg:p-14 flex flex-col">
                  <div className="mb-auto">
                    <span className="text-[10px] font-bold text-[#2563EB] mb-4 uppercase tracking-[0.3em] block">Scenario // {cs.archetype}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight tracking-tight max-w-2xl" >
                      {cs.title}
                    </h3>
                    <p className={`text-sm lg:text-base mb-10 leading-relaxed font-medium max-w-3xl ${i % 2 === 0 ? 'text-slate-600' : 'text-slate-200'}`}>
                      {cs.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div>
                        <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${i % 2 === 0 ? 'text-[#0B1B3D]' : 'text-white'}`}>Typical pilot focus</h4>
                        <ul className="space-y-3">
                          {["Measurable KPIs for the pilot window", "Documentation suitable for security review", "Handover paths for your teams"].map(outcome => (
                            <li key={outcome} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                              <span className={`text-[13px] font-medium ${i % 2 === 0 ? 'text-slate-600' : 'text-slate-300'}`}>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${i % 2 === 0 ? 'text-[#0B1B3D]' : 'text-white'}`}>Core Tech</h4>
                        <div className={i % 2 === 0 ? "" : "opacity-95"}>
                          <TechStackLogoGrid
                            items={cs.tech}
                            compact
                            gridClassName="grid grid-cols-2 gap-2 sm:grid-cols-2"
                            className="max-w-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

