import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Bot, Code2, Smartphone, Users, Database, GitBranch, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES_HERO_IMAGES } from "../lib/heroImageThemes";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    desc: "We transform your data into smart, automated decisions by embedding AI into your daily operations, helping your business run faster and more profitably.",
    image: SERVICES_HERO_IMAGES[0],
  },
  {
    icon: Bot,
    title: "Generative AI",
    slug: "generative-ai",
    desc: "Move beyond chatbots with AI services that power secure copilots and agents, delivering governed, domain-specific reasoning and automated workflows.",
    image: SERVICES_HERO_IMAGES[1],
  },
  {
    icon: Code2,
    title: "Custom Software",
    slug: "custom-software",
    desc: "Custom software that architects secure, AI-native platforms, modernizes legacy systems, and automates complex workflows for scalable operations.",
    image: SERVICES_HERO_IMAGES[2],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    slug: "mobile-apps",
    desc: "Give your customers premium AI-driven experiences with custom mobile development that runs smoothly on any device and feels effortless.",
    image: SERVICES_HERO_IMAGES[3],
  },
  {
    icon: Users,
    title: "AI Agent Development",
    slug: "ai-agents",
    desc: "Autonomous agents that reason, act, and assist humans across dynamic workflows, from strategy consulting to full deployment.",
    image: SERVICES_HERO_IMAGES[4],
  },
  {
    icon: Database,
    title: "LLM Development",
    slug: "llm-development",
    desc: "Enterprise-grade large language models with secure, contextual intelligence for smarter applications and decision-making systems.",
    image: SERVICES_HERO_IMAGES[5],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    slug: "devops",
    desc: "Speed up releases and keep systems running smoothly with DevOps services that connect development and operations using smart pipelines.",
    image: SERVICES_HERO_IMAGES[6],
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    slug: "data-engineering",
    desc: "Turn fragmented data into trusted insights, enabling analytics-ready intelligence for real-time, strategic enterprise decisions.",
    image: SERVICES_HERO_IMAGES[7],
  },
];

// 4-column grid: columns 0,1 → fly in from LEFT | columns 2,3 → fly in from RIGHT
function getSlideDirection(index) {
  const col = index % 4;
  if (col === 0) return -120; // far left
  if (col === 1) return -60;  // near left
  if (col === 2) return 60;   // near right
  return 120;                 // far right
}

// Stagger: each card in a row appears 0.1s after the previous
function getDelay(index) {
  return (index % 4) * 0.1;
}

export default function ServicesSection() {
  const sectionRef = useRef(null);

  // Trigger when the section enters viewport
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      data-testid="services-section"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 corp-pat-dots overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* Heading */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
            Services
          </p>
          <h2
            data-testid="services-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"

          >
            AI Development <span className="text-[#0B1B3D]/30">Real-World Impact</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Navigate through the current tech-driven landscape and foster long-term growth with custom AI solutions.
          </p>
        </motion.div>

        {/* Card grid — 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const xFrom = getSlideDirection(i);
            const delay = getDelay(i);
            const Icon = s.icon;

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, x: xFrom, y: 24 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: xFrom, y: 24 }
                }
                transition={{
                  duration: 0.65,
                  delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
                  className="svc-card group block"
                >
                  {/* Background image */}
                  <img src={s.image} alt="" className="svc-card__img" loading="lazy" />

                  {/* Gradient overlay */}
                  <div className="svc-card__overlay" aria-hidden />

                  {/* Grid texture */}
                  <div className="svc-card__grid" aria-hidden />

                  {/* Content */}
                  <div className="svc-card__body">
                    <div className="svc-card__icon-wrap">
                      <Icon size={24} strokeWidth={1.75} className="svc-card__icon" />
                    </div>
                    <div className="svc-card__text">
                      <h3 className="svc-card__title">{s.title}</h3>
                      <p className="svc-card__desc">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

