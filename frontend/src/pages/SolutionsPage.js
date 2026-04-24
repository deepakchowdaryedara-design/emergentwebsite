import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import solutions from "../data/solutions";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const next = (prev + 1) % 2;
        if (scrollRef.current) {
          const dist = scrollRef.current.offsetWidth * 0.9;
          scrollRef.current.scrollTo({ left: next * dist, behavior: 'smooth' });
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-[#F8FAFC]">
      <PageHero
        label="Our Solutions"
        title="Production-Ready AI Accelerators"
        description="Engineered for high-velocity adoption and safe integration, our accelerator systems deliver sustained value across critical enterprise workstreams."
        primaryCTA={{ text: "Explore Accelerators", href: "#solutions-list" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <section 
        id="solutions-list" 
        className="py-20 sm:py-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full">
          <div className="relative">
            <div 
              ref={scrollRef}
              onScroll={(e) => {
                if (isPaused) {
                   const threshold = e.target.offsetWidth / 2;
                   setActiveTab(e.target.scrollLeft > threshold ? 1 : 0);
                }
              }}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-10 lg:px-[10vw] gap-6 pb-12 cursor-grab"
            >
              {solutions.slice(0, 5).map((s) => (
                <div 
                  key={s.slug} 
                  className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[22.5%]"
                >
                  <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-blue-500/20 transition-all duration-700 group">
                    <div className="relative aspect-square overflow-hidden bg-slate-50">
                      <img 
                        src={s.heroImage} 
                        alt="" 
                        className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      />
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-700" />
                    </div>
                    <div className="p-8 flex items-start gap-4 bg-white border-t border-slate-50 flex-1">
                      <div className="w-1 bg-[#2563EB] self-stretch rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2">Accelerator</p>
                        <h3 className="text-lg font-black text-[#0B1B3D] tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-4">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  onClick={() => {
                    const dist = scrollRef.current.offsetWidth * 0.9;
                    scrollRef.current.scrollTo({ left: dot * dist, behavior: 'smooth' });
                    setActiveTab(dot);
                  }}
                  className={`sol-pagination-dot ${activeTab === dot ? 'sol-pagination-dot--active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageContactForm context="Solutions Page" />
    </div>
  );
}
