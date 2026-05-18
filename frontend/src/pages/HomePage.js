import HeroSection from "../components/HeroSection";
import CEOLetter from "../components/CEOLetter";
import ServicesSection from "../components/ServicesSection";
import SolutionsSection from "../components/SolutionsSection";
import CaseStudies from "../components/CaseStudies";
import TechStack from "../components/TechStack";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BlogResources from "../components/BlogResources";
import ContactForm from "../components/ContactForm";
import NextStepCTA from "../components/NextStepCTA";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";

export default function HomePage() {
  return (
    <main className="relative">
      {/* Sticky Hero Background */}
      <HeroSection />

      {/* Overlapping Content Layer */}
      <div className="relative z-10 bg-[#F8FAFC] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <AnimatedSection><CEOLetter /></AnimatedSection>
        <AnimatedSection><ServicesSection showLabel={false} /></AnimatedSection>
        <AnimatedSection><SolutionsSection showLabel={false} /></AnimatedSection>
        <CaseStudies showLabel={false} />
        <TechStack showLabel={false} />
        <AnimatedSection><Industries showLabel={false} /></AnimatedSection>
        <AnimatedSection><WhyChooseUs showLabel={false} /></AnimatedSection>
        <AnimatedSection><Testimonials showLabel={false} /></AnimatedSection>
        <AnimatedSection><BlogResources showLabel={false} /></AnimatedSection>
        
        {/* Methodology Section */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-[#F4F5F7] via-[#FFFFFF] to-[#E9F0FC] border-y border-slate-100">
          {/* Decorative High-Tech Background Glows */}
          <div className="absolute right-[-100px] top-[-50px] w-[450px] h-[450px] rounded-full bg-blue-300/15 blur-[120px] -z-10 pointer-events-none" />
          <div className="absolute left-[-150px] bottom-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-200/15 blur-[135px] -z-10 pointer-events-none" />

          <div className="w-full px-6 lg:px-10 xl:px-14 z-10 relative">
            <AnimatedSection>
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0052CC]">Methodology</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172B4D] tracking-tight mb-6 leading-tight">
                  Methodology for <br />
                  <span className="text-[#0052CC]">Enterprise AI Delivery</span>
                </h2>
                <p className="text-base sm:text-lg text-[#42526E] leading-relaxed max-w-2xl font-normal">
                  This methodology keeps scope controlled, releases on a predictable cadence, and places decisions with the delivery team so working software is visible early.
                </p>
              </div>
            </AnimatedSection>

            <div className="relative mt-16">
              {/* INFINITE PROGRESS LINES (Desktop) */}
              <div className="hidden lg:flex absolute top-[30px] left-[10%] right-[10%] justify-between z-0">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex-1 h-[1px] bg-slate-200/60 relative mx-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "100%", "100%", "0%"] }}
                      transition={{
                        duration: 5,
                        times: [0, (0.15 + (i * 0.2)), (0.8 + (i * 0.05)), 1],
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }}
                      className="absolute inset-y-0 left-0 bg-[#0052CC] shadow-[0_0_10px_rgba(0,82,204,0.3)]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                {[
                  { title: "Discover", desc: "Confirm the problem statement, data availability, and success metrics within a short discovery window." },
                  { title: "Build", desc: "Ship a thin vertical slice your team can actually use, then harden from real feedback." },
                  { title: "Ship", desc: "Release on a steady cadence with monitoring, not a one-off handover." },
                  { title: "Learn", desc: "Measure usage and outcomes, then stack the next high-leverage iteration." },
                ].map((item, idx) => (
                  <div key={item.title} className="flex flex-col items-start text-left group">
                    <motion.div
                      animate={{
                        borderColor: ["#dfe1e6", "#0052CC", "#0052CC", "#dfe1e6"],
                        backgroundColor: ["#ffffff", "#0052CC", "#0052CC", "#ffffff"],
                      }}
                      transition={{
                        duration: 5,
                        times: [idx * 0.2, (idx * 0.2 + 0.1), (0.8 + idx * 0.05), (0.8 + idx * 0.05 + 0.1)],
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="w-[60px] h-[60px] rounded-full border flex items-center justify-center mb-10 relative shadow-sm"
                    >
                      <motion.span
                        animate={{ color: ["#7a869a", "#ffffff", "#ffffff", "#7a869a"] }}
                        transition={{
                          duration: 5,
                          times: [idx * 0.2, (idx * 0.2 + 0.1), (0.8 + idx * 0.05), (0.8 + idx * 0.05 + 0.1)],
                          repeat: Infinity,
                          delay: 0.5
                        }}
                        className="flex items-center justify-center"
                      >
                        <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                      </motion.span>

                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 4,
                          delay: 0.5 + (idx * 1.0)
                        }}
                        className="absolute inset-0 rounded-full bg-[#0052CC]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      <h3 className="text-xl font-bold mb-4 text-[#172B4D] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#42526E] leading-relaxed max-w-[260px] font-normal">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-100 corp-pat-dots">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
            <AnimatedSection>
              <div className="max-w-3xl mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight mb-6 leading-tight">
                  Coverage Across <span className="text-blue-600">organizations we engage</span>
                </h2>
                <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mb-8 font-medium">
                  This coverage clarifies stakeholder mixes where our delivery model fits today, product and engineering, leadership and operations, or innovation and IT.
                </p>
              </div>
            </AnimatedSection>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Product and engineering", desc: "Teams integrating AI into product roadmaps and needing delivery aligned to release milestones." },
                { title: "Leadership and operations", desc: "Executives and operators who require transparent tradeoffs between scope, risk, and timeline." },
                { title: "Innovation and IT", desc: "Functions modernizing workflows and seeking measurable validation before broader funding." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-blue-100">
                    <h3 className="text-xl font-bold mb-4 text-[#0B1B3D] tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <AnimatedSection>
          <NextStepCTA />
        </AnimatedSection>
        <ContactForm />
      </div>
    </main>
  );
}

