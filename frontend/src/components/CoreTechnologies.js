import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";

export default function CoreTechnologies({ categories, title, description }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!categories || categories.length === 0) return null;

  return (
    <section data-testid="core-technologies-section" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0B1B3D 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mb-10 text-left">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">Production Stack</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D] mb-4" >
              {title || "Enterprise-Grade Digital Ecosystem"}
            </h2>
            {description && <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">{description}</p>}
          </div>
        </AnimatedSection>

        {/* Navigation Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-100 pb-6">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`text-sm px-6 py-2 rounded-xl font-bold transition-all duration-300 ${activeTab === i
                    ? "bg-[#0B1B3D] text-white shadow-xl shadow-blue-500/10"
                    : "bg-[#F8FAFC] text-slate-500 hover:bg-white hover:shadow-md border border-slate-100"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            {/* Description Area */}
            <div className="lg:col-span-4 lg:sticky lg:top-[120px]">
              <div className="bg-blue-50/30 border border-blue-100/50 p-8 rounded-3xl">
                <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">Overview</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                  {categories[activeTab].description}
                </p>
                <div className="mt-8 pt-8 border-t border-blue-100/50 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Expertise Verified</span>
                </div>
              </div>
            </div>

            {/* Tech Grid Area */}
            <div className="lg:col-span-8">
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {categories[activeTab].techs.map((tech) => (
                  <StaggerItem key={tech.name}>
                    <motion.div
                      whileHover={{ y: -5, borderColor: '#2563EB33' }}
                      className="group flex flex-col p-5 bg-white border border-slate-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#0B1B3D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/10">
                          <span className="text-[10px] text-white font-black" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {tech.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-black text-[#0B1B3D] tracking-tight truncate">{tech.name}</h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Battle Tested</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="text-[8px] font-black text-blue-500/60 uppercase tracking-widest">Enterprise Ready</span>
                        <div className="flex gap-1">
                          {[1, 2].map(i => <div key={i} className="w-1 h-1 bg-slate-200 rounded-full" />)}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

