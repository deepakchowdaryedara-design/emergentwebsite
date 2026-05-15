import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { DEFAULT_PAGE_HERO_IMAGE } from "../lib/heroImageThemes";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

function scrollToSelector(e, hashSelector) {
  e.preventDefault();
  const target = document.querySelector(hashSelector);
  if (target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function PageHero({ label, title, description, primaryCTA, secondaryCTA, bgDark = true, image, video, hideContent = false }) {
  const location = useLocation();
  const resolvedImage = image ?? DEFAULT_PAGE_HERO_IMAGE;

  const contactTopicFor = (cta) =>
    cta?.contactIntent === "consultation" ? CONTACT_TOPIC.CONSULTATION : CONTACT_TOPIC.CONTACT;

  return (
    <section
      data-testid="page-hero"
      className={`relative overflow-hidden ${bgDark ? "text-white bg-[#0B1B3D]" : "text-[#0B1B3D] bg-[#F8FAFC]"}`}
    >
      <div className="relative isolate flex min-h-[min(75vh,820px)] flex-col justify-center">
        <HeroAnimatedBackdrop image={resolvedImage} video={video} bgDark={bgDark} />
        {!hideContent && (
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-14 sm:py-16 md:py-20">
            <div className="max-w-3xl">
              {label && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.12em] ${bgDark ? "text-[#93C5FD]" : "text-slate-600"}`}
                >
                  {label}
                </motion.p>
              )}
              {title && (
                <motion.h1
                  data-testid="page-hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`mb-6 ${bgDark ? "heading-on-dark" : "corp-heading-gradient"}`}
                >
                  {title}
                </motion.h1>
              )}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-medium ${bgDark ? "text-slate-200/90" : "text-slate-600"}`}
                >
                  {description}
                </motion.p>
              )}
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
                    className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-full px-8 py-4 font-bold text-sm shadow-xl shadow-blue-500/10 h-14 cursor-pointer"
                  >
                    {primaryCTA.href === "#page-contact" ? (
                      <Link to={contactFormTo(location.pathname, contactTopicFor(primaryCTA))}>
                        {primaryCTA.text} <ArrowRight size={18} className="ml-2" />
                      </Link>
                    ) : primaryCTA.href?.startsWith("#") ? (
                      <a href={primaryCTA.href} onClick={(e) => scrollToSelector(e, primaryCTA.href)}>
                        {primaryCTA.text} <ArrowRight size={18} className="ml-2" />
                      </a>
                    ) : primaryCTA.href?.startsWith("http") ? (
                      <a href={primaryCTA.href} target="_blank" rel="noreferrer">
                        {primaryCTA.text} <ArrowRight size={18} className="ml-2" />
                      </a>
                    ) : (
                      <Link to={primaryCTA.href}>
                        {primaryCTA.text} <ArrowRight size={18} className="ml-2" />
                      </Link>
                    )}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button
                    data-testid="page-hero-secondary-cta"
                    asChild
                    variant="outline"
                    className={`rounded-full px-8 py-4 font-bold text-sm h-14 transition-all duration-300 cursor-pointer ${bgDark
                      ? "bg-white/5 text-white border-white/20 hover:bg-white/10 backdrop-blur-md"
                      : "bg-white/80 text-[#0B1B3D] border-[#0B1B3D]/15 hover:bg-white"
                      }`}
                  >
                    {secondaryCTA.href === "#page-contact" ? (
                      <Link to={contactFormTo(location.pathname, contactTopicFor(secondaryCTA))}>
                        {secondaryCTA.text}
                      </Link>
                    ) : secondaryCTA.href?.startsWith("#") ? (
                      <a href={secondaryCTA.href} onClick={(e) => scrollToSelector(e, secondaryCTA.href)}>
                        {secondaryCTA.text}
                      </a>
                    ) : secondaryCTA.href?.startsWith("http") ? (
                      <a href={secondaryCTA.href} target="_blank" rel="noreferrer">
                        {secondaryCTA.text}
                      </a>
                    ) : (
                      <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
                    )}
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
