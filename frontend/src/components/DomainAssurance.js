import React from 'react';
import { ShieldCheck, Target, Repeat, BarChart, FileCheck, ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const DomainAssurance = () => {
  const pillars = [
    { icon: Target, label: "Defined", desc: "Precision KPI Gates", code: "KPI-G" },
    { icon: ShieldCheck, label: "Governed", desc: "Institutional Compliance", code: "GOV-P" },
    { icon: Repeat, label: "Iterative", desc: "Continuous Agile Rollout", code: "AGL-R" },
    { icon: BarChart, label: "Measured", desc: "Real-time ROI Analytics", code: "ROI-A" },
    { icon: FileCheck, label: "Documented", desc: "Turnkey Forensic Handover", code: "FRN-H" },
  ];

  return (
    <section className="relative py-12 bg-[#F1F5F9] overflow-hidden border-y border-slate-200">
      {/* Technical Texture to eliminate empty whitespace feel */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px]" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Left-Aligned Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 items-end">
          <div className="lg:col-span-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black text-blue-700 uppercase tracking-[0.2em]">Sovereign Assurance</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-[0.9] mb-4">
                Strategic <span className="text-blue-600">Delivery</span> <br className="hidden lg:block" /> Commitments
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-6" />
              <p className="text-slate-500 text-[13px] lg:text-[15px] font-medium max-w-2xl leading-relaxed">
                Our methodology ensures that every deployment is grounded in institutional-grade precision, 
                governed by strict compliance protocols, and measured against real-world performance metrics.
              </p>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <div className="inline-block p-4 border border-slate-200 rounded-2xl bg-white shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="text-[12px] font-black text-[#0B1B3D] uppercase leading-none">Protocol Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* High-Density Dashboard Grid - Integrated Internal Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-slate-200 rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md shadow-xl">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              className={`group relative p-8 transition-all duration-500 hover:bg-white border-slate-200 
                ${i % 3 !== 2 ? 'md:border-r' : ''} 
                ${i % 5 !== 4 ? 'lg:border-r lg:border-b-0' : ''}
                ${i < 3 ? 'border-b md:border-b-0' : 'border-b lg:border-b-0'}
                ${i >= 3 ? 'md:border-t md:lg:border-t-0' : ''}
                border-slate-100
              `}
              style={{
                borderBottomWidth: i < pillars.length - 1 ? '1px' : '0px',
                borderRightWidth: (i + 1) % 5 === 0 ? '0px' : '1px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#0B1B3D] group-hover:border-[#0B1B3D] group-hover:shadow-lg transition-all duration-500">
                    <p.icon size={22} className="text-[#0B1B3D] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                    {p.code}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-[14px] font-black uppercase tracking-[0.1em] text-[#0B1B3D] mb-2 group-hover:text-blue-600 transition-colors">
                    {p.label}
                  </h3>
                  <div className="w-6 h-0.5 bg-blue-600 mb-4 group-hover:w-12 transition-all duration-500" />
                  <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed tracking-tight group-hover:text-slate-700 transition-colors">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Validated</span>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-200 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainAssurance;

