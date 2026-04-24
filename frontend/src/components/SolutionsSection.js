import { useState, useRef, useEffect } from "react";
import solutions from "../data/solutions";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SolutionsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="solutions"
      className="py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="w-full">
        <div className="px-6 sm:px-12 lg:px-24 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
              Our Core Solutions
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif", lineHeight: 1.1 }}
            >
              Engineering What's Next with <br />
              <span className="text-[#0B1B3D]/30">AI-Driven Solutions</span>
            </h2>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative py-12">
            <div className="flex overflow-hidden">
              <div 
                className={`flex gap-10 animate-marquee ${isPaused ? 'pause-animation' : ''}`}
                style={{ 
                  width: 'fit-content',
                  animationDuration: '50s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {[...solutions, ...solutions].map((s, idx) => (
                  <div
                    key={`${s.slug}-${idx}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="sol-card-compact flex-shrink-0 w-[350px] sm:w-[420px] lg:w-[400px]"
                  >
                    <div className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative aspect-[16/7] overflow-hidden bg-slate-50">
                        <img
                          src={s.heroImage}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/30 via-transparent to-transparent opacity-40" />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{s.slug.replace('-', ' ')}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0B1B3D] mb-2" >
                          {s.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                          {s.shortDesc || s.heroDesc}
                        </p>
                        
                        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0B1B3D] uppercase tracking-widest group-hover:text-blue-600 transition-colors">View Details</span>
                          <ChevronRight size={16} className="text-slate-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        <div className="flex justify-center mt-8 opacity-50">
          <div className="px-6 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">
              Automated Intelligence <span className="mx-2 text-blue-600">•</span> Global Scale <span className="mx-2 text-blue-600">•</span> Neural Ops
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

