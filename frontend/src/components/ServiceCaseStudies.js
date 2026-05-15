import { ArrowUpRight, Zap, Shield, Activity, Check } from "lucide-react";
import { cn } from "../lib/utils";
import AnimatedSection from "./AnimatedSection";
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
                <div className={`lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white/5'}`}>
                  <div className="relative z-10">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block px-3 py-1 rounded-full ${i % 2 === 0 ? 'bg-blue-600/10 text-blue-600' : 'bg-blue-500/20 text-blue-300'}`}>
                      {cs.industry}
                    </span>
                    
                    <div className="mb-10">
                      <span className={`text-[10px] font-mono font-bold mb-2 block opacity-60 uppercase ${i % 2 === 0 ? 'text-blue-600' : 'text-blue-300'}`}>
                        SYSTEM_LOG // AUTH_0{i + 1}
                      </span>
                      <h3 className={`text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-4 ${i % 2 === 0 ? 'text-[#0B1B3D]' : 'text-white'}`}>
                        {cs.highlight.split(' ')[0]}
                      </h3>
                      <span className={`text-xs font-black uppercase tracking-[0.4em] ${i % 2 === 0 ? 'text-slate-400' : 'text-slate-300'}`}>
                         {cs.highlight.split(' ').slice(1).join(' ')}
                      </span>
                    </div>

                    {/* Operational Checklist / Graph representation */}
                    <div className="mt-8 relative pl-6">
                       <div className={`absolute left-1.5 top-2 bottom-2 w-px ${i % 2 === 0 ? 'bg-slate-200' : 'bg-white/10'}`} />
                       <div className="space-y-6">
                          {[
                            "Zero-Trust Data Boundary",
                            "Immutable Audit Logging",
                            "Automated Policy Enforcement",
                            "Millisecond Inference Scaling"
                          ].map((step, sIdx) => (
                            <div key={sIdx} className="relative flex items-center gap-4">
                               <div className={`absolute -left-[22px] w-4 h-4 rounded-full border-2 flex items-center justify-center ${i % 2 === 0 ? 'bg-white border-blue-600' : 'bg-[#0B1B3D] border-blue-400'}`}>
                                  <Check size={8} className={i % 2 === 0 ? 'text-blue-600' : 'text-blue-400'} strokeWidth={4} />
                               </div>
                               <span className={`text-[10px] font-black uppercase tracking-widest opacity-60 ${i % 2 === 0 ? 'text-[#0B1B3D]' : 'text-white'}`}>
                                 {step}
                               </span>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center justify-between relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${i % 2 === 0 ? 'bg-[#0B1B3D] text-white shadow-xl hover:bg-blue-600' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-white hover:text-blue-600'}`}>
                      <ArrowUpRight size={24} />
                    </div>
                    <div className="text-right">
                       <span className={`block text-[10px] font-black uppercase tracking-widest mb-1 ${i % 2 === 0 ? 'text-slate-400' : 'text-slate-300'}`}>Status</span>
                       <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-emerald-400'}`} />
                          <span className={`text-[12px] font-black uppercase ${i % 2 === 0 ? 'text-emerald-500' : 'text-emerald-400'}`}>Operational</span>
                       </div>
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

                    <div className="pt-10 border-t border-slate-100">
                      <h4 className={`text-[11px] font-black uppercase tracking-[0.2em] mb-8 ${i % 2 === 0 ? 'text-[#0B1B3D]' : 'text-white'}`}>Typical pilot focus</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          { title: "KPI Alignment", desc: "Performance baselines & ROI mapping." },
                          { title: "Security Review", desc: "VPC-gated staging & PII masking." },
                          { title: "Data Sovereignty", desc: "Localized residency compliance." },
                          { title: "Team Handover", desc: "Engineering training & docs." },
                          { title: "Audit Logging", desc: "Immutable forensic log setup." },
                          { title: "Observability", desc: "Real-time drift monitoring." }
                        ].map((item, idx) => (
                          <div key={idx} className="group/pt">
                            <div className="flex items-center gap-3 mb-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                               <h5 className="text-[11px] font-black uppercase tracking-tight">{item.title}</h5>
                            </div>
                            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">{item.desc}</p>
                          </div>
                        ))}
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

