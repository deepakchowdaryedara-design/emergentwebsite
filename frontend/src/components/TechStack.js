import { Link } from "react-router-dom";
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

export default function TechStack({ showLabel = true }) {
  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="relative bg-white py-12 lg:py-16 overflow-hidden border-y border-slate-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 corp-pat-dots opacity-40 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Content: More compact messaging */}
          <div className="lg:col-span-5 xl:col-span-5">
            <AnimatedSection>
              {showLabel && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-5">
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Global Coverage</span>
                </div>
              )}
              <h2 data-testid="tech-stack-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1B3D] tracking-tight mb-6 leading-tight">
                Coverage Across <br />
                <span className="text-blue-600">Platforms</span>
              </h2>
              <p className="mb-8 text-sm lg:text-base leading-relaxed text-slate-500 font-medium max-w-lg">
                Delivery aligns with approved cloud foundations, model APIs, and integration surfaces, including AWS, Azure, Google Cloud, and common AI tooling, so implementations remain observable and governable.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B1B3D] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
                >
                  View technology partners
                </Link>
                <div className="flex -space-x-2 items-center ml-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Partner" />
                    </div>
                  ))}
                  <div className="pl-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Trusted by 50+ Partners</div>
                </div>
              </div>

              {/* Technical Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-100 pt-8">
                {PERFORMANCE_METRICS.slice(0, 4).map((metric, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 rounded-lg bg-slate-100 text-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white transition-colors duration-300">
                        <metric.Icon size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">{metric.label}</span>
                        <span className="text-[12px] font-black text-[#0B1B3D] uppercase leading-none">{metric.val}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content: Compact Premium Card */}
          <div className="lg:col-span-7 xl:col-span-7">
            <AnimatedSection delay={0.2} className="lg:max-w-2xl lg:ml-auto">
              <FlatTechStackPanel
                title="Representative tooling"
                intro="Examples commonly referenced in architecture and governance reviews."
                className="relative z-10 border-slate-200 shadow-lg rounded-2xl overflow-hidden"
                bodyClassName="bg-slate-50 p-5 sm:p-6"
                insetClassName="border-slate-200 p-3"
              >
                <div className="relative [perspective:1100px] lg:[perspective:1500px]">
                  <div className="mx-auto origin-center transform-gpu [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateX(5deg)_rotateY(-2deg)] lg:[transform:rotateX(6deg)_rotateY(-8deg)_rotateZ(-1deg)]">
                    <TechStackLogoGrid 
                      items={ALL_TECH_NAMES} 
                      marqueeColumnCap={4} 
                      marqueeColumnHeightClassName="h-64 sm:h-80 min-h-[16rem]"
                    />
                  </div>
                </div>
              </FlatTechStackPanel>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
