import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQSection({ faqs, title }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section data-testid="faq-section" className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Support</p>
          <h2
            data-testid="faq-title"
            className="mb-10 text-left"
          >
            {title || "Frequently Asked Questions"}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-slate-200">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left py-5 text-base font-semibold text-[#0B1B3D] hover:text-[#2563EB] hover:no-underline"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

