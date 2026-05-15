import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiKubernetes,
  SiSnowflake,
  SiGithub,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiApachekafka,
  SiTerraform,
  SiGooglecloud,
  SiSlack,
  SiSalesforce,
  SiNotion,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiNginx,
  SiDatabricks,
  SiGo,
  SiPython,
  SiJavascript,
  SiRust,
  SiCplusplus,
  SiOpenjdk,
  SiRuby,
  SiSwift,
  SiKotlin,
  SiScala,
  SiGraphql,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiDigitalocean,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { ShieldCheck, Zap, Cpu, Network } from "lucide-react";
import TechStackLogoGrid from "./TechStackLogoGrid";
import { FlatTechStackPanel } from "./CategorizedTechStackSection";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";

const COLUMN_A = [
  { name: "AWS", Icon: FaAws },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Azure", Icon: FaMicrosoft },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Snowflake", Icon: SiSnowflake },
  { name: "GitHub", Icon: SiGithub },
];

const COLUMN_B = [
  { name: "OpenAI", Icon: SiOpenai },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "Docker", Icon: SiDocker },
  { name: "Kafka", Icon: SiApachekafka },
  { name: "Terraform", Icon: SiTerraform },
];

const COLUMN_C = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Slack", Icon: SiSlack },
  { name: "Salesforce", Icon: SiSalesforce },
  { name: "Notion", Icon: SiNotion },
];

const ALL_TECH_NAMES = [...COLUMN_A, ...COLUMN_B, ...COLUMN_C].map((t) => t.name);

const PERFORMANCE_METRICS = [
  { label: "Security", val: "SOC 2 Type II", Icon: ShieldCheck, desc: "Bank-grade encryption and compliance standards." },
  { label: "Latency", val: "<100ms", Icon: Zap, desc: "Optimized data flow across global edge nodes." },
  { label: "Compute", val: "Auto-Scale", Icon: Cpu, desc: "Elastic infrastructure that grows with your demand." },
  { label: "Network", val: "Private VPC", Icon: Network, desc: "Isolated environments for sensitive operations." },
];

const TOOLING_GRID = [
  [
    { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Azure", Icon: FaMicrosoft, color: "#0089D6" },
    { name: "Salesforce", Icon: SiSalesforce, color: "#00A1E0" },
    { name: "Databricks", Icon: SiDatabricks, color: "#FF3621" },
    { name: "Snowflake", Icon: SiSnowflake, color: "#29B5E8" },
    { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
  ],
  [
    { name: "Slack", Icon: SiSlack, color: "#4A154B" },
    { name: "GitHub", Icon: SiGithub, color: "#181717" },
    { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  ],
  [
    { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Nginx", Icon: SiNginx, color: "#009639" },
    { name: "Notion", Icon: SiNotion, color: "#000000" },
    { name: "Go", Icon: SiGo, color: "#00ADD8" },
  ],
  [
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "Rust", Icon: SiRust, color: "#000000" },
    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
    { name: "Java", Icon: SiOpenjdk, color: "#ED8B00" },
    { name: "Ruby", Icon: SiRuby, color: "#CC342D" },
    { name: "Swift", Icon: SiSwift, color: "#F05138" },
  ],
  [
    { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
    { name: "Scala", Icon: SiScala, color: "#DC322F" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    { name: "Vercel", Icon: SiVercel, color: "#000000" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    { name: "DigitalOcean", Icon: SiDigitalocean, color: "#0080FF" },
  ],
];

export default function TechStack({ showLabel = true }) {
  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="relative bg-white py-4 lg:py-6 overflow-hidden border-y border-slate-100">
      {/* Background Decorative Elements - Network Constellation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="2" fill="currentColor" />
          <circle cx="400" cy="150" r="2" fill="currentColor" />
          <circle cx="600" cy="300" r="2" fill="currentColor" />
          <circle cx="800" cy="100" r="2" fill="currentColor" />
          <circle cx="1000" cy="250" r="2" fill="currentColor" />
          <circle cx="300" cy="500" r="2" fill="currentColor" />
          <circle cx="500" cy="450" r="2" fill="currentColor" />
          <circle cx="700" cy="600" r="2" fill="currentColor" />
          <circle cx="900" cy="550" r="2" fill="currentColor" />
          <circle cx="1100" cy="400" r="2" fill="currentColor" />
          <path d="M200 200L400 150M400 150L600 300M600 300L800 100M800 100L1000 250M200 200L300 500M300 500L500 450M500 450L700 600M700 600L900 550M900 550L1100 400M400 150L500 450M600 300L700 600M800 100L900 550" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <h2 data-testid="tech-stack-heading" className="text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tighter mb-8 leading-[0.9] uppercase">
                Coverage Across <br />
                <span className="text-blue-600">Platforms</span>
              </h2>
              <p className="mb-10 text-base leading-relaxed text-slate-500 font-medium max-w-lg">
                Delivery aligns with approved cloud foundations, model APIs, and integration surfaces, including AWS, Azure, Google Cloud, and common AI tooling, so implementations remain observable and governable.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B1B3D] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-blue-600 hover:-translate-y-0.5"
                >
                  View technology partners
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Partner" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trusted by 50+ Partners</span>
                </div>
              </div>

              {/* Technical Metrics Grid with Cross Borders */}
              <div className="grid grid-cols-2 border-t border-slate-200 pt-10">
                {PERFORMANCE_METRICS.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-6 pl-0",
                      idx % 2 === 0 ? "border-r border-slate-100" : "pl-6",
                      idx < 2 ? "border-b border-slate-100" : ""
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-50 text-blue-600">
                        <metric.Icon size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{metric.label}</span>
                        <span className="text-[14px] font-black text-[#0B1B3D] uppercase leading-none">{metric.val}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content: Organic Logo Grid */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} className="relative -mt-8 lg:-mt-12">
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-x-0 gap-y-2 lg:pl-0">
                {TOOLING_GRID.flat().map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-125">
                      <tech.Icon 
                        size={44} 
                        style={{ color: tech.color }} 
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                    <span className="mt-3 text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.02] pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="150" stroke="currentColor" fill="none" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="100" stroke="currentColor" fill="none" strokeDasharray="4 4" />
                </svg>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
