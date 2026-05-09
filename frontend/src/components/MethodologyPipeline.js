import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Hash } from 'lucide-react';

const MethodologyPipeline = ({ steps }) => {
  return (
    <div className="w-full py-20 px-4 relative bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Desktop View (Animated Flow Pipeline) */}
        <div className="hidden lg:flex items-center justify-between">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 group"
              >
                {/* Process Card */}
                <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-blue-500/30 transition-all duration-500 text-center min-h-[120px] flex items-center justify-center relative mx-2">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                    Phase {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-[13px] font-black text-[#0B1B3D] tracking-widest uppercase group-hover:text-blue-600 transition-colors leading-tight">
                    {step.step || step.label || step.title}
                  </h3>
                </div>
              </motion.div>

              {/* Animated Connection Arrow (Except Last) */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center w-12 shrink-0">
                  <div className="relative w-full h-8 flex items-center">
                    {/* Background Line */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[2px] bg-slate-200 rounded-full" />
                    </div>
                    {/* Animated Flow Arrow */}
                    <motion.div 
                        initial={{ left: "-10%" }}
                        animate={{ left: "110%" }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 0.4
                        }}
                        className="absolute z-10"
                    >
                        <ChevronRight size={18} className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" strokeWidth={3} />
                    </motion.div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View (Vertical Flow) */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xs font-black text-[#0B1B3D] tracking-widest uppercase">
                  {step.step || step.label || step.title}
                </h3>
              </div>
              
              {i < steps.length - 1 && (
                <div className="h-6 flex flex-col items-center justify-center py-2">
                    <motion.div 
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowRight size={16} className="text-blue-400 rotate-90" />
                    </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyPipeline;
