import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const MethodologyFlowchart = ({ steps }) => {
  return (
    <div className="w-full py-12 overflow-hidden">
      {/* Desktop View (Linear Flow) */}
      <div className="hidden xl:block relative px-4">
        {/* The Connection Line */}
        <div className="absolute top-[40px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-500/20 to-blue-100" />
        
        <div className="flex justify-between relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center flex-1 group"
            >
              {/* Node */}
              <div className="relative mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative z-10 group-hover:border-blue-500 group-hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {step.icon ? <step.icon size={24} className="text-[#0B1B3D] group-hover:text-blue-600 transition-colors" /> : <span className="text-xl font-bold">{i+1}</span>}
                  </div>
                </motion.div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0B1B3D] text-white text-[11px] font-black flex items-center justify-center z-20 border-4 border-white shadow-sm">
                  {i + 1}
                </div>

                {/* Next Arrow (except last) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-blue-200 group-hover:text-blue-500 transition-colors hidden xl:block">
                    <ChevronRight size={32} strokeWidth={1} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <h3 className="text-[13px] font-black uppercase tracking-widest mb-3 text-[#0B1B3D] group-hover:text-blue-600 transition-colors">
                  {step.label || step.step || step.title}
                </h3>
                {step.desc && <p className="text-[11px] text-slate-500 leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tablet View (Grid) */}
      <div className="hidden md:grid xl:hidden grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-white p-8 border border-slate-100 rounded-2xl hover:shadow-xl hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center shrink-0">
                {step.icon ? <step.icon size={24} /> : <span className="text-lg font-bold">{i+1}</span>}
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 block">Phase {i + 1}</span>
                <h3 className="text-sm font-black uppercase tracking-tight text-[#0B1B3D]">
                  {step.label || step.step || step.title}
                </h3>
              </div>
            </div>
            {step.desc && <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>}
          </motion.div>
        ))}
      </div>

      {/* Mobile View (Vertical Flow) */}
      <div className="md:hidden space-y-8 px-4">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex items-start gap-6"
          >
            {/* Step Marker & Vertical Line */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center relative z-10">
                {step.icon ? <step.icon size={20} /> : <span className="font-bold">{i+1}</span>}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-16 bg-slate-100 my-2" />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 pt-1">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 block">Phase {i + 1}</span>
              <h3 className="text-sm font-black uppercase tracking-tight text-[#0B1B3D] mb-2">
                {step.label || step.step || step.title}
              </h3>
              {step.desc && <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MethodologyFlowchart;
