import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { COMPANY_STARTUP_PITCH, COMPANY_FOUNDED_LABEL } from "../lib/company";

const AVATAR_SRC = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&h=128&q=80",
];

/** Staggered heights / offsets to mirror masonry-style collage */
const COLLAGE = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Team member collaborating at a laptop",
    wrapperClass: "mt-10 w-[30%] max-w-[200px]",
    imgClass: "h-[260px] w-full object-cover sm:h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Team discussion in an office setting",
    wrapperClass: "w-[38%] max-w-[240px] -mt-2",
    imgClass: "h-[340px] w-full object-cover sm:h-[380px]",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Professional at work",
    wrapperClass: "mt-14 w-[30%] max-w-[200px]",
    imgClass: "h-[290px] w-full object-cover sm:h-[310px]",
  },
];

export default function CEOLetter() {
  return (
    <section id="philosophy" data-testid="ceo-letter-section" className="relative overflow-hidden bg-white py-6 sm:py-8 md:py-10">
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <AnimatedSection>
            <div className="max-w-xl lg:max-w-none">
              <h2 className="mb-6">
                Why we started
              </h2>
              <p className="mb-8 text-base font-medium leading-relaxed text-slate-600">
                {COMPANY_STARTUP_PITCH} Operations began on {COMPANY_FOUNDED_LABEL}, with delivery priorities centered on ownership, release discipline, and solutions intended for live environments, not narrative collateral alone.
              </p>

              <p
                className="mb-10 text-4xl text-[#0B1B3D] sm:text-[2.75rem]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Michael James
              </p>

              <div className="mb-10 flex flex-wrap items-center gap-5">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {AVATAR_SRC.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-11 w-11 rounded-full border-2 border-white object-cover ring-1 ring-slate-100 sm:h-12 sm:w-12"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="relative z-[1] ml-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-md transition-colors hover:bg-blue-700 sm:h-12 sm:w-12"
                    aria-label="Join client community"
                  >
                    <Plus className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                  </button>
                </div>
                <p className="max-w-[220px] text-sm font-bold leading-snug text-[#0B1B3D] sm:max-w-none">
                  <span className="text-base sm:text-lg">Discovery and pilot</span> conversations, share your roadmap and constraints
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] underline decoration-[#0B1B3D] underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
              >
                About Us
                <span aria-hidden className="text-base">
                  ›
                </span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="flex justify-center gap-2 sm:gap-3 lg:justify-end lg:pr-4">
              {COLLAGE.map((item) => (
                <div key={item.src} className={`flex-shrink-0 ${item.wrapperClass}`}>
                  <img src={item.src} alt={item.alt} className={item.imgClass} loading="lazy" draggable={false} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
