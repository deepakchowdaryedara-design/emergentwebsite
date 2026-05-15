import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiKubernetes, SiSnowflake, SiGithub, 
  SiOpenai, SiTensorflow, SiPytorch, SiDocker, SiApachekafka, SiTerraform, 
  SiGooglecloud, SiSlack, SiSalesforce, SiNotion, SiPostgresql, SiRedis, 
  SiMongodb, SiNginx, SiDatabricks, SiGo, SiPython, SiJavascript, SiRust, 
  SiCplusplus, SiOpenjdk, SiRuby, SiSwift, SiKotlin, SiScala, SiGraphql, 
  SiVercel, SiFirebase, SiSupabase, SiDigitalocean 
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";

const TECH_DATA = [
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Azure", Icon: FaMicrosoft, color: "#0089D6" },
  { name: "OpenAI", Icon: SiOpenai, color: "#000000" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Rust", Icon: SiRust, color: "#000000" },
];

export default function ServiceTechStack() {
  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 mb-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl text-left">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">System Integration</p>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0B1B3D] tracking-tighter uppercase">
                Technical <span className="text-blue-600">Foundation</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...TECH_DATA, ...TECH_DATA].map((tech, idx) => (
            <div 
              key={`${tech.name}-${idx}`}
              className="mx-12 flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group-hover:pause"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <tech.Icon 
                  size={32} 
                  style={{ color: tech.color }} 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <span className="text-xs font-black text-[#0B1B3D] uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
