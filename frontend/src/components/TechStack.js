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

function LogoTile({ name, Icon }) {
  return (
    <div
      className="group flex h-[72px] w-full max-w-[122px] shrink-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-2 shadow-[0_10px_28px_-14px_rgba(15,23,42,0.33)] transition-[transform,box-shadow] duration-300 hover:z-20 hover:scale-[1.06] hover:shadow-[0_18px_44px_-18px_rgba(15,23,42,0.42)] sm:h-[76px] sm:max-w-[130px]"
      data-testid={`platform-tile-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Icon className="h-8 w-8 text-[#0B1B3D] opacity-[0.92] transition-opacity group-hover:opacity-100" aria-hidden />
      <span className="mt-1 max-w-[100px] truncate text-center text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">
        {name}
      </span>
    </div>
  );
}

function MarqueeColumn({ tiles, animationClass }) {
  const loop = [...tiles, ...tiles];
  return (
    <div className="relative h-[min(380px,52vh)] overflow-hidden rounded-sm sm:h-[420px] lg:h-[440px]">
      <div className={`partner-marquee-v ${animationClass}`}>
        {loop.map((t, i) => (
          <LogoTile key={`${t.name}-${i}`} name={t.name} Icon={t.Icon} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const columns = [COLUMN_A, COLUMN_B, COLUMN_C];

  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="max-w-xl lg:max-w-none lg:pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
            <h2
              data-testid="tech-stack-heading"
              className="mb-5"
            >
              Empowering Innovation <span className="opacity-35">Through Advanced Platforms</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600">
              We align delivery with approved cloud foundations, model services, and integration surfaces—including AWS, Microsoft Azure, Google Cloud, and modern AI tooling—so implementations stay observable, governable, and cost-aware.
            </p>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center rounded-sm bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              See all integrations
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-50/80 via-transparent to-slate-50/50 blur-2xl lg:-inset-10" aria-hidden />

            {/* Reduced motion: static 3-column logo grid */}
            <div className="hidden grid-cols-3 gap-3 sm:gap-4 motion-reduce:grid">
              {columns.map((tiles, ci) => (
                <div key={ci} className="flex flex-col gap-3">
                  {tiles.map((t) => (
                    <LogoTile key={t.name} name={t.name} Icon={t.Icon} />
                  ))}
                </div>
              ))}
            </div>

            {/* Animated lattice */}
            <div className="motion-reduce:hidden [perspective:1100px] lg:[perspective:1300px]">
              <div
                className="mx-auto origin-center transform-gpu [transform-style:preserve-3d] transition-transform duration-300 will-change-transform max-lg:[transform:rotateX(6deg)_rotateY(-6deg)] lg:[transform:rotateX(12deg)_rotateY(-11deg)_rotateZ(-2deg)]"
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <MarqueeColumn tiles={COLUMN_A} animationClass="partner-marquee-v-fast" />
                  <MarqueeColumn tiles={COLUMN_B} animationClass="partner-marquee-v-slow partner-marquee-v-reverse" />
                  <MarqueeColumn tiles={COLUMN_C} animationClass="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
