import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const points = [
  {
    title: "Hallucination Control",
    desc: "We build AI systems with RAG pipelines, governed data layers, and validation frameworks that turn AI from a liability into a trusted business engine.",
  },
  {
    title: "Compliance-First, Future-Ready AI",
    desc: "AI solutions aligned with GDPR, HIPAA, and audit-ready governance from day one, so you can move fast, stay compliant, and scale without regulatory surprises.",
  },
  {
    title: "Engineering-Led Execution",
    desc: "Experienced engineering teams that convert complex ideas into reliable AI systems with measurable business outcomes.",
  },
  {
    title: "End-to-End Ownership",
    desc: "From architecture design to deployment and monitoring, we own the full lifecycle ensuring consistency, reliability, and continuous optimization.",
  },
];

const metrics = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1000+", label: "Happy Clients" },
  { value: "400+", label: "AI Specialists" },
  { value: "1500+", label: "Successful Projects" },
  { value: "95%", label: "Client Retention" },
  { value: "20%", label: "Faster Delivery" },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-choose-us-section" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
              Why NeuralTrix AI?
            </p>
            <h2
              data-testid="why-choose-heading"
              className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-6"
              
            >
              Your Trusted <span className="text-[#0B1B3D]/30">AI Engineering Partner</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              NeuralTrix AI brings experienced engineering talent to turn ambitious ideas into
              high-performance AI systems that move fast, scale hard, and deliver real business results.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <span
                    className="text-2xl font-extrabold text-[#0B1B3D] block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
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

