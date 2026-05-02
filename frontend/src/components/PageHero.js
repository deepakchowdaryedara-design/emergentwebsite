import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { DEFAULT_PAGE_HERO_IMAGE } from "../lib/heroImageThemes";

export default function PageHero({ label, title, description, primaryCTA, secondaryCTA, bgDark = true, image }) {
  const resolvedImage = image ?? DEFAULT_PAGE_HERO_IMAGE;

  return (
    <section
      data-testid="page-hero"
      className={`relative overflow-hidden ${bgDark ? "text-white bg-[#0B1B3D]" : "text-[#0B1B3D] bg-[#F8FAFC]"}`}
    >
      <div className="relative isolate flex min-h-[min(75vh,820px)] flex-col justify-center">
        <HeroAnimatedBackdrop image={resolvedImage} bgDark={bgDark} />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-14 sm:py-16 md:py-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-3 text-xs font-semibold uppercase tracking-[0.12em] ${bgDark ? "text-[#93C5FD]" : "text-slate-600"}`}
            >
              {label}
            </motion.p>
            <motion.h1
              data-testid="page-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium ${bgDark ? "text-slate-200/90" : "text-slate-600"}`}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Button
                  data-testid="page-hero-primary-cta"
                  asChild
                  className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-8 py-4 font-bold text-sm shadow-xl shadow-blue-500/10 h-14 cursor-pointer"
                >
                  <a
                    href={primaryCTA.href}
                    onClick={(e) => {
                      if (primaryCTA.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(primaryCTA.href);
                        if (target) {
                          const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {primaryCTA.text} <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  data-testid="page-hero-secondary-cta"
                  asChild
                  variant="outline"
                  className={`rounded-sm px-8 py-4 font-bold text-sm h-14 transition-all duration-300 cursor-pointer ${bgDark
                    ? "bg-white/5 text-white border-white/20 hover:bg-white/10 backdrop-blur-md"
                    : "bg-white/80 text-[#0B1B3D] border-[#0B1B3D]/15 hover:bg-white"
                    }`}
                >
                  <a
                    href={secondaryCTA.href}
                    onClick={(e) => {
                      if (secondaryCTA.href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(secondaryCTA.href);
                        if (target) {
                          const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {secondaryCTA.text}
                  </a>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
