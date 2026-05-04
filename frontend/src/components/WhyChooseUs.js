import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";

const points = [
  {
    title: "Stable execution team",
    desc: "Core engineers remain accountable on your workstream, reducing context loss and handoff noise across milestones.",
  },
  {
    title: "Production-oriented AI",
    desc: "Retrieval, evaluation, and guardrails are planned from the first slice so features meet operational expectations under real usage.",
  },
  {
    title: "Measured iteration",
    desc: "Regular demonstrations, a shared roadmap, and indicators both sides can review to steer scope and investment.",
  },
  {
    title: "Operational ownership",
    desc: "Documentation, repositories, and runbooks structured so your staff can run systems independently or extend the engagement as needed.",
  },
];

const metrics = [
  { value: "2026", label: "Founded Jan 12" },
  { value: "Startup", label: "Lean core team" },
  { value: "Weekly", label: "Typical ship cadence in pilots" },
  { value: "AI-native", label: "Modern LLM + product stack" },
  { value: "Remote-first", label: "Global talent, one Slack" },
  { value: "Pilot-ready", label: "Scoped first engagements" },
];

export default function WhyChooseUs({ showLabel = true }) {
  return (
    <section data-testid="why-choose-us-section" className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {showLabel && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Assurance
            </p>
            )}
            <h2
              data-testid="why-choose-heading"
              className="mb-6"
            >
              Assurance for <span className="corp-heading-secondary">Delivery Discipline</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              This assurance model reflects a lean operating structure (formed {COMPANY_FOUNDED_LABEL}) with emphasis on
              production outcomes, explicit scope, and software your organization can maintain and extend.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-2xl font-extrabold text-[#0B1B3D] block tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Accordion type="single" collapsible className="w-full">
              {points.map((p, i) => (
                <AccordionItem key={p.title} value={`item-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger
                    data-testid={`accordion-trigger-${i}`}
                    className="text-left py-6 text-base font-semibold text-[#0B1B3D] hover:text-[#2563EB] hover:no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#2563EB] flex-shrink-0" />
                      {p.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-6 pl-9">
                    {p.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

