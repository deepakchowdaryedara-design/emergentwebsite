import { ArrowUpRight } from "lucide-react";
import { CASE_STUDY_HERO_IMAGES } from "../lib/heroImageThemes";

const caseStudies = [
  {
    title: "AI Video Creator",
    client: "YOU B2C",
    industry: "Media",
    desc: "multilingual script-to-video conversion at scale.",
    highlight: "2x Output",
    image: `https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800`,
  },
  {
    title: "Smart Teaching",
    client: "Better AI",
    industry: "Education",
    desc: "AI-powered tools for lesson planning & learning.",
    highlight: "45% Gain",
    image: CASE_STUDY_HERO_IMAGES[1],
  },
  {
    title: "AI Astrology",
    client: "Fortuna",
    industry: "Consumer",
    desc: "Personalized forecasts & DALL-E visuals.",
    highlight: "500K+ Users",
    image: CASE_STUDY_HERO_IMAGES[2],
  },
  {
    title: "Trip Planner",
    client: "TravelAI",
    industry: "Travel",
    desc: "AI itineraries with real-time API navigation.",
    highlight: "3x Engage",
    image: CASE_STUDY_HERO_IMAGES[3],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 bg-[#020617]">
      <div className="w-full px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em] mb-4">
              Proven Outcomes
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tighter text-white"
              
            >
              Engineering <span className="text-white/40">Advantage</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/5 mx-12 hidden lg:block" />
          <p className="text-slate-500 text-[11px] uppercase tracking-widest font-bold">
            04 Integrated Case Studies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-blue-500/30"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <img 
                  src={cs.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest px-1.5 py-0.5 bg-blue-400/10 rounded">
                    {cs.industry}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight" >
                  {cs.title}
                </h3>
                
                <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {cs.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-end justify-between">
                  <div className="text-left">
                    <p className="text-[7px] font-bold text-slate-500 uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-sm font-black text-white" >
                      {cs.highlight}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-blue-600 group-hover:text-blue-400 transition-all">
                    <ArrowUpRight size={12} />
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

