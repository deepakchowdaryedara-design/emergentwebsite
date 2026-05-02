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
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection><CEOLetter /></AnimatedSection>
      <AnimatedSection><ServicesSection /></AnimatedSection>
      <AnimatedSection><SolutionsSection /></AnimatedSection>
      <CaseStudies />
      <TechStack />
      <AnimatedSection><Industries /></AnimatedSection>
      <AnimatedSection><WhyChooseUs /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><BlogResources /></AnimatedSection>
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-100 overflow-hidden">
        <div className="w-full px-6 lg:px-24">
          <AnimatedSection>
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</span>
              </div>
              <h2 className="mb-4" >
                Our Enterprise <br />
                <span className="opacity-40">Delivery Approach</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                This architecture combines engineering rigor, advisory, and governance into a singular, high-velocity delivery model.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative mt-12">
            {/* INFINITE PROGRESS LINES (Desktop) */}
            <div className="hidden lg:flex absolute top-[30px] left-[10%] right-[10%] justify-between z-0">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 h-[1px] bg-slate-100 relative mx-2">
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
                    className="absolute inset-y-0 left-0 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {[
                { step: "01", title: "Discover", desc: "Prioritize use cases by ROI, feasibility, and operational readiness." },
                { step: "02", title: "Architect", desc: "Design secure, scalable systems aligned to your enterprise stack." },
                { step: "03", title: "Deploy", desc: "Launch rapidly with quality gates and measurable outcome tracking." },
                { step: "04", title: "Scale", desc: "Expand adoption across teams with governance and optimization loops." },
              ].map((item, idx) => (
                <div key={item.step} className="flex flex-col items-start text-left group">
                  <motion.div
                    animate={{
                      borderColor: ["#f1f5f9", "#2563eb", "#2563eb", "#f1f5f9"],
                      backgroundColor: ["#ffffff", "#2563eb", "#2563eb", "#ffffff"],
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
                      animate={{ color: ["#94a3b8", "#ffffff", "#ffffff", "#94a3b8"] }}
                      transition={{
                        duration: 5,
                        times: [idx * 0.2, (idx * 0.2 + 0.1), (0.8 + idx * 0.05), (0.8 + idx * 0.05 + 0.1)],
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="text-xs font-black"
                    >
                      {item.step}
                    </motion.span>

                    {/* Ripple/Pulse on activation */}
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
                      className="absolute inset-0 rounded-full bg-blue-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <h3 className="mb-4 tracking-tight" >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[260px]">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="mb-4" >
                Teams We <span className="opacity-30">Commonly Support</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Enterprise IT Teams", desc: "Modernizing legacy systems with scalable AI-first architectures." },
              { title: "Digital Product Organizations", desc: "Embedding intelligent features and automation into customer-facing products." },
              { title: "Operations & Process Leaders", desc: "Driving measurable efficiency gains through governed AI workflows." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="mb-3" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
    </>
  );
}

