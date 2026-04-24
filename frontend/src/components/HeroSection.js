import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { HOME_HERO_IMAGE } from "../lib/heroImageThemes";

export default function HeroSection() {
  return (
    <section id="hero" data-testid="hero-section" className="relative overflow-hidden bg-[#0B1B3D]">
      {/* Full-bleed hero: Refined centered design with high impact height */}
      <div className="relative isolate flex min-h-[88vh] flex-col items-start justify-center text-left">
        <HeroAnimatedBackdrop video="/hero/Untitled.mp4" bgDark />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12">
          <div className="max-w-4xl flex flex-col items-start space-y-8">
            {/* Minimalist Label - Case Study Style */}
            <div className="relative">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">
                Future-Scale Solution Engineering
              </p>
            </div>
            
            <div className="space-y-5">
              <h1
                data-testid="hero-heading"
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter"
                
              >
                Engineering the
                <br />
                <span className="text-white/40">AI-First</span> Enterprise
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl drop-shadow-md font-medium">
                NeuralTrix AI engineers high-performance digital systems that push businesses beyond average.
                Production-ready solutions that launch <strong className="text-white">3x faster</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 pt-4">
              <Button
                data-testid="hero-cta-primary"
                asChild
                className="bg-blue-600/80 hover:bg-blue-600 text-white backdrop-blur-sm rounded-full px-8 py-6 font-bold text-sm shadow-xl shadow-blue-500/10 transition-all hover:scale-105"
              >
                <a href="#contact">
                  Talk to Our AI Experts <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                asChild
                variant="outline"
                className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 backdrop-blur-md rounded-full px-8 py-6 font-bold text-sm transition-all hover:scale-105"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

