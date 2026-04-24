import {
  SiPython, SiNodedotjs, SiReact, SiAngular, SiNextdotjs, SiTypescript,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiDocker, SiKubernetes,
  SiTerraform, SiAnsible, SiJenkins, SiGithubactions, SiGrafana, SiPrometheus,
  SiGooglecloud, SiFlutter, SiKotlin, SiSwift,
  SiTensorflow, SiPytorch, SiOpenai, SiApachekafka, SiElasticsearch,
  SiSnowflake,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const categories = [
  {
    name: "AI & Machine Learning",
    techs: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Redis", icon: SiRedis },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    name: "Mobile",
    techs: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: SiReact },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Swift", icon: SiSwift },
    ],
  },
  {
    name: "Databases",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    name: "Infrastructure",
    techs: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    name: "Data",
    techs: [
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Kafka", icon: SiApachekafka },
    ],
  },
];

const ribbonItems = categories.flatMap((cat) =>
  cat.techs.map((t) => ({
    key: `${cat.name}-${t.name}`,
    name: t.name,
    Icon: t.icon,
  }))
);

function RibbonItem({ name, Icon }) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 rounded-sm border border-slate-200 bg-slate-50/80 px-5 py-4 sm:gap-5 sm:px-6 sm:py-4"
      data-testid={`tech-ribbon-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Icon className="h-9 w-9 shrink-0 text-[#0B1B3D] sm:h-10 sm:w-10" aria-hidden />
      <span className="text-base font-semibold tracking-tight text-[#0B1B3D] sm:text-lg">{name}</span>
    </div>
  );
}

export default function TechStack() {
  const loop = [...ribbonItems, ...ribbonItems];

  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="bg-[#F8FAFC] py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-6 max-w-4xl text-left sm:mb-8">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Platforms & Partners</p>
          <h2
            data-testid="tech-stack-heading"
            className="mb-4 text-4xl font-black tracking-tighter text-[#0B1B3D] sm:text-5xl lg:text-5xl"
            
          >
            Leveraging Best-in-Class <span className="text-[#0B1B3D]/30">Tech Foundations</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            We leverage best-in-class technologies and strategic platform partnerships to deliver scalable, secure, and production-ready systems.
          </p>
        </div>

        <div className="rounded-sm border border-slate-200 bg-white py-6 shadow-sm sm:py-8">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent sm:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent sm:w-24"
              aria-hidden
            />

            <div className="overflow-hidden px-1">
              <div className="tech-marquee-track">
                {loop.map((item, i) => (
                  <RibbonItem key={`${item.key}-${i}`} name={item.name} Icon={item.Icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

