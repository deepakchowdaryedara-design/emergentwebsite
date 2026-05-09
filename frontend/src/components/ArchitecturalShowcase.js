import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Zap,
  Network,
  Maximize2
} from 'lucide-react';

const ArchitecturalShowcase = ({ capabilities, title, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      {/* Technical background texture */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="w-full px-4 lg:px-8 relative z-10">
        
        {/* Rebalanced Condensed Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-sm">
              <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[9px] font-black text-blue-700 uppercase tracking-[0.2em]">Operational Logic</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-none mb-4">
              {title}
            </h2>
            <p className="text-slate-500 text-[13px] font-medium leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-6 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm">
             <div className="text-right">
               <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Architecture</span>
               <span className="text-[11px] font-black text-[#0B1B3D] uppercase">Sovereign-Edge</span>
             </div>
             <div className="w-px h-8 bg-slate-200" />
             <div className="text-right">
               <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Registry</span>
               <span className="text-[11px] font-black text-[#0B1B3D] uppercase">Verified_Gated</span>
             </div>
          </div>
        </div>

        {/* High-Density Condensed Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-[2rem] bg-white overflow-hidden shadow-xl">
          
          {/* Left Navigation: Node List (Condensed) */}
          <div className="lg:col-span-4 border-r border-slate-100 bg-slate-50/20">
            <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between">
              <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Registry</h3>
              <span className="text-[8px] font-black text-blue-600 uppercase bg-blue-50 px-1.5 py-0.5 rounded-full">{capabilities.length} ACTIVE</span>
            </div>
            <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto custom-scrollbar">
              {capabilities.map((cap, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center justify-between group relative ${
                    activeIndex === i ? 'bg-white shadow-[0_0_30px_rgba(0,0,0,0.04)] z-10' : 'hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeIndex === i ? 'bg-[#0B1B3D] text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-300'
                    }`}>
                      <Network size={18} />
                    </div>
                    <div>
                      <span className={`block text-[8px] font-black uppercase tracking-widest mb-0.5 transition-colors ${
                         activeIndex === i ? 'text-blue-500' : 'text-slate-400'
                      }`}>MOD_0{i + 1}</span>
                      <span className={`text-[13px] font-black uppercase tracking-tight transition-all duration-500 ${
                        activeIndex === i ? 'text-[#0B1B3D]' : 'text-slate-500'
                      }`}>
                        {cap.title}
                      </span>
                    </div>
                  </div>
                  <div className={`transition-all duration-500 ${
                    activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}>
                    <ArrowRight size={16} className="text-blue-600" />
                  </div>
                  
                  {/* Active Indicator Bar */}
                  {activeIndex === i && (
                    <motion.div 
                      layoutId="activeBar"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Pane: Multi-Layered Detail View (Condensed) */}
          <div className="lg:col-span-8 relative bg-white p-8 lg:p-12 min-h-[450px] flex flex-col justify-between overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeIndex}
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 transition={{ duration: 0.3 }}
                 className="h-full flex flex-col justify-between"
               >
                 <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                      <div>
                        <span className="block text-[9px] font-black text-blue-500 uppercase tracking-widest mb-0.5">Functional Detail</span>
                        <h3 className="text-xl lg:text-3xl font-black text-[#0B1B3D] uppercase tracking-tighter leading-none">
                          {capabilities[activeIndex].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                      {capabilities[activeIndex].desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                       <div className="space-y-3">
                         <span className="block text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Deployment Protocol</span>
                         <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                           <CheckCircle2 size={14} className="text-emerald-500" />
                           <span className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-tight">Secure VPC-Gated</span>
                         </div>
                       </div>
                       <div className="space-y-3">
                         <span className="block text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Governance Tier</span>
                         <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                           <Shield size={14} className="text-blue-600" />
                           <span className="text-[10px] font-black text-[#0B1B3D] uppercase tracking-tight">SOC 2 Type II Compliance</span>
                         </div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 p-6 rounded-[1.5rem] bg-[#0B1B3D] text-white flex items-center justify-between shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                    <div className="relative z-10 flex gap-10">
                       <div className="flex flex-col">
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Latency</span>
                          <span className="text-base font-black text-white tracking-tight">{"<"}120ms</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Status</span>
                          <span className="text-base font-black text-emerald-400 tracking-tight uppercase">Operational</span>
                       </div>
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                       <Zap size={18} className="text-white" />
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>

             {/* Background forensic decoration (Smaller) */}
             <div className="absolute top-0 right-0 p-8 opacity-[0.015] pointer-events-none scale-100 origin-top-right">
                <Maximize2 size={250} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalShowcase;
