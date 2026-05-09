import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Activity, Shield, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import industries from "../data/industries";
import industryTabUseCases from "../data/industryTabUseCases";

export default function Industries({ showLabel = true }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="arc-section relative overflow-hidden bg-[#F8FAFC] py-16 lg:py-24 border-y border-slate-100"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 corp-pat-dots opacity-40 pointer-events-none" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* Header Section: Rebalanced for zero whitespace */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 items-end border-b border-slate-100 pb-12">
            <div className="lg:col-span-7">
              {showLabel && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                  <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Industry Programs</span>
                </div>
              )}
              <h2
                data-testid="industries-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight mb-2 leading-tight uppercase"
              >
                Industry programs with <br />
                <span className="text-blue-600">governed delivery</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="max-w-md text-sm lg:text-base leading-relaxed text-slate-500 font-medium ml-auto mb-8">
                Solutions are shaped to sector controls, data handling requirements, and KPIs your leadership team can review.
              </p>
              
              {/* Technical Metrics Header Row */}
              <div className="flex flex-wrap lg:justify-end gap-x-10 gap-y-4">
                {[
                  { label: "Sectors Covered", val: "07+" },
                  { label: "Deployment Ready", val: "100%" },
                  { label: "Target ROI", val: "3.5x" }
                ].map((stat, s) => (
                  <div key={s} className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
                    <span className="text-xl font-black text-[#0B1B3D] tracking-tighter">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Premium Tab System */}
        <div className="mb-12 relative">
          <div className="flex flex-wrap gap-2 lg:gap-3 p-1 bg-slate-100/50 rounded-xl w-fit border border-slate-200/60 backdrop-blur-sm">
            {industries.map((ind, i) => (
              <button
                key={ind.slug}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
                className={`relative rounded-lg px-6 py-3 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeTab === i
                    ? "text-white"
                    : "text-slate-500 hover:text-[#0B1B3D] hover:bg-white/80"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0B1B3D] rounded-lg shadow-lg shadow-[#0B1B3D]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{ind.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch"
          >
            {/* Primary Program Card */}
            <div className="lg:col-span-5 flex flex-col rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-xl shadow-slate-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
                {(() => {
                  const Icon = industries[activeTab].icon;
                  return <Icon size={180} strokeWidth={1} />;
                })()}
              </div>
              
              <div className="mb-10 flex items-center gap-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                  {(() => {
                    const Icon = industries[activeTab].icon;
                    return <Icon size={36} strokeWidth={1.5} aria-hidden />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0B1B3D] uppercase tracking-tight">
                    {industries[activeTab].title}
                  </h3>
                  <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />
                </div>
              </div>

              <p className="mb-10 text-lg font-medium leading-relaxed text-slate-500 max-w-md">
                {industries[activeTab].shortDesc}
              </p>

              {/* Technical Spec Row */}
              <div className="grid grid-cols-3 gap-4 mb-10 pt-8 border-t border-slate-100">
                {[
                  { label: "Deployment", val: "Scalable", icon: Zap },
                  { label: "Integrity", val: "Verified", icon: Shield },
                  { label: "Feedback", val: "Real-time", icon: Activity },
                ].map((spec, s) => (
                  <div key={s} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-blue-600">
                      <spec.icon size={12} />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</span>
                    </div>
                    <span className="text-[11px] font-black text-[#0B1B3D] uppercase">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to={`/industries/${industries[activeTab].slug}`}
                  className="group inline-flex items-center gap-4 bg-[#0B1B3D] text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0"
                >
                  Explore Detailed Solutions
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Feature/Use Case Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {(
                industryTabUseCases[industries[activeTab].title] ||
                industries[activeTab].features.slice(0, 4).map((f) => f.title)
              ).map((uc, i) => (
                <div
                  key={`${industries[activeTab].slug}-${i}`}
                  className="group relative flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
                      <Check className="h-5 w-5" strokeWidth={3} aria-hidden />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover:text-blue-600 transition-colors">Capability {(i+1).toString().padStart(2, '0')}</span>
                      <span className="text-lg font-black leading-tight tracking-tight text-[#0B1B3D]">
                        {uc}
                      </span>
                    </div>
                  </div>
                  
                  {/* Subtle decorative element */}
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Activity size={20} className="text-blue-100" />
                  </div>
                </div>
              ))}
              
              {/* Secondary CTA/Metric Tile */}
              <div className="sm:col-span-2 rounded-3xl bg-slate-900 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                <div className="relative z-10">
                  <h4 className="text-white text-lg font-bold mb-1">Scale your {industries[activeTab].title} operations</h4>
                  <p className="text-slate-400 text-sm font-medium">Enterprise-grade AI delivery with verifiable ROI.</p>
                </div>
                <Link 
                  to="/contact" 
                  className="relative z-10 bg-blue-600 text-white px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-colors shrink-0"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
