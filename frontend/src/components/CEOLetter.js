import { Cpu, ShieldCheck, Zap, Layers, Globe, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function NeuralCoreSection() {
  const pillars = [
    {
      icon: <Zap size={18} className="text-blue-600" />,
      title: "PROVEN ARCHITECTURES",
      desc: "Our systems move beyond experimental AI. We deploy hardened, production-ready neural networks built for real-world enterprise load."
    },
    {
      icon: <ShieldCheck size={18} className="text-blue-600" />,
      title: "SECURITY AS CODE",
      desc: "Governance isn't an afterthought. We embed security protocols directly into the model's decision-making logic for absolute compliance."
    },
    {
      icon: <Workflow size={18} className="text-blue-600" />,
      title: "AUTONOMOUS OPERATIONS",
      desc: "Eliminate manual bottlenecks with self-correcting workflows that adapt to business changes in real-time."
    }
  ];

  return (
    <section id="philosophy" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0B1B3D 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="relative w-full px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.5em]">The Emergent Standard</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1B3D] leading-tight mb-8"
                
              >
                Engineering <br />
                <span className="text-blue-600">Pure Intelligence.</span>
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-xl font-medium">
                At Emergent, we bridge the gap between AI hype and enterprise reality. We don't just "implement" AI—we architect the cognitive backbone of modern industries.
              </p>
            </div>

            <div className="space-y-10">
              {pillars.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.15} direction="up">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center transition-all duration-500 group-hover:bg-[#0B1B3D] group-hover:border-[#0B1B3D] group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-sm font-black text-[#0B1B3D] mb-2 tracking-[0.1em] uppercase">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection direction="left" className="relative">
            <div className="relative group">
              {/* Image Frame Decor */}
              <div className="absolute -inset-4 border border-[#0B1B3D]/10 rounded-2xl transform translate-x-2 translate-y-2 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0" />
              
              <div className="relative rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(11,27,61,0.2)]">
                <img
                  src={require("../assets/ai_neural_core_concept_1776919120851.png")}
                  alt="Neural Infrastructure"
                  className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B1B3D]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Data Floating Card */}
              <div className="absolute -bottom-10 -right-5 lg:-right-10 w-64 p-6 bg-[#0B1B3D] text-white shadow-2xl rounded-lg hidden sm:block">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={18} className="text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Global Ops</span>
                </div>
                <div className="space-y-4">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/2 bg-blue-500" 
                    />
                  </div>
                  <p className="text-sm font-bold">Optimizing 48M+ Neural Connections</p>
                  <p className="text-[10px] text-white/50 leading-tight uppercase font-medium">Real-time inference tracking enabled via Neural Core API v4.0</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

