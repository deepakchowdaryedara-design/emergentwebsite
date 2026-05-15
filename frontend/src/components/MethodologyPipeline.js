import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Hash } from 'lucide-react';

const MethodologyPipeline = ({ steps }) => {
  return (
    <div className="w-full py-12 px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop View: Industrial Node Flow */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 group"
              >
                {/* System Node Card */}
                <div className="bg-white border border-slate-100 p-8 shadow-sm group-hover:shadow-xl group-hover:border-blue-600 transition-all duration-500 relative aspect-square flex flex-col items-center justify-center text-center">
                  {/* Industrial Corner Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-100 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-100 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-100 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-100 group-hover:border-blue-600 transition-colors" />

                  {/* Node ID Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#0B1B3D] text-white text-[9px] font-black uppercase tracking-widest">
                    PHASE_{String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-[12px] font-black text-[#0B1B3D] tracking-widest uppercase leading-snug">
                    {step.step || step.label || step.title}
                  </h3>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Ready</span>
                  </div>
                </div>
              </motion.div>

              {/* Data Cable Connection (Except Last) */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center justify-center w-8 shrink-0">
                  <div className="w-full h-[3px] bg-slate-100 relative overflow-hidden rounded-full">
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                      className="absolute inset-0 bg-blue-600 w-2/3 shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View: Vertical System Log */}
        <div className="lg:hidden space-y-4 px-4">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-6 flex items-center gap-6 relative"
            >
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-200" />
              <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black text-[#0B1B3D]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xs font-black text-[#0B1B3D] tracking-widest uppercase">
                {step.step || step.label || step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyPipeline;
