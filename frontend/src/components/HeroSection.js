import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

export default function HeroSection() {
  return (
    <section id="hero" data-testid="hero-section" className="sticky top-0 h-screen overflow-hidden bg-[#0B1B3D] text-white z-0">
      {/* Full-bleed hero: Refined centered design with high impact height */}
      <div className="relative isolate flex h-full flex-col items-start justify-center text-left">
        <HeroAnimatedBackdrop video="/hero/Untitled.mp4" bgDark />

        {/* Left readability scrim: separates copy from bright mid-frame video detail */}
        <div
          className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/72 to-transparent sm:via-[#0B1B3D]/58"
          aria-hidden
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-8 md:py-10">
          <div className="max-w-4xl flex flex-col items-start space-y-8">
            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                Future-Scale Solution Engineering
              </p>
            </div>

            <div className="space-y-5">
              <h1
                data-testid="hero-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.9)]"
              >
                Engineering The
                <br />
                <span className="font-semibold hero-heading-accent">AI-First</span> Enterprise
              </h1>
              <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-xl font-normal [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                If you are evaluating an AI copilot, a data-backed product, or a modernized platform, we scope <strong className="font-semibold text-white">structured pilots</strong> with
                clear metrics, security boundaries, and a path to production, so your team can judge fit with limited commitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 pt-4 flex-wrap">
              <Button
                data-testid="hero-cta-primary"
                asChild
                className="bg-[#2563EB] hover:bg-[#3B82F6] text-white rounded-full px-8 py-6 font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Link to={contactFormTo("/", CONTACT_TOPIC.CONSULTATION)}>
                  Schedule a consultation <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                data-testid="hero-cta-secondary"
                asChild
                variant="outline"
                className="bg-white/5 text-white border-white/20 hover:bg-white hover:text-[#0B1B3D] backdrop-blur-md rounded-full px-8 py-6 font-bold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Link to={contactFormTo("/", CONTACT_TOPIC.CONTACT)}>Contact us</Link>
              </Button>
              <a
                data-testid="hero-cta-explore"
                href="#solutions"
                className="text-sm font-semibold text-white/80 underline-offset-8 hover:text-sky-300 hover:underline transition-colors sm:ml-2"
              >
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

