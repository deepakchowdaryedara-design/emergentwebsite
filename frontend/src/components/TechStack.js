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
import TechStackLogoGrid from "./TechStackLogoGrid";

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

export default function TechStack({ showLabel = true }) {
  return (
    <section id="tech-stack" data-testid="tech-stack-section" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="max-w-xl lg:max-w-none lg:pt-4">
            {showLabel && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
            )}
            <h2 data-testid="tech-stack-heading" className="mb-5">
              Coverage Across <span className="corp-heading-secondary">Platforms</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600">
              Delivery aligns with approved cloud foundations, model APIs, and integration surfaces, including AWS, Azure, Google Cloud, and common AI tooling, so implementations remain observable, governable, and cost-accountable.
            </p>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center rounded-sm bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              View technology partners
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-50/80 via-transparent to-slate-50/50 blur-2xl lg:-inset-10"
              aria-hidden
            />
            <div className="relative [perspective:1100px] lg:[perspective:1300px]">
              <div className="mx-auto origin-center transform-gpu [transform-style:preserve-3d] transition-transform duration-300 max-lg:[transform:rotateX(5deg)_rotateY(-5deg)] lg:[transform:rotateX(10deg)_rotateY(-9deg)_rotateZ(-1deg)]">
                <TechStackLogoGrid items={ALL_TECH_NAMES} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
