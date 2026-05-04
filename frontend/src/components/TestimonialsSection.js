import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import AnimatedSection from "./AnimatedSection";
import engagementPrinciples from "../data/engagementPrinciples";

export default function TestimonialsSection({ title, showLabel = true }) {
  return (
    <section data-testid="page-testimonials" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-8 max-w-2xl text-left">
            {showLabel && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Assurance</p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]">
              {title || "Assurance for early programs"}
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-2xl">
              Operating commitments for discovery and pilots, use alongside your own diligence, security review, and procurement rules.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {engagementPrinciples.map((item, i) => (
                <CarouselItem key={item.headline} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div
                    data-testid={`page-testimonial-${i}`}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-8 h-full flex flex-col"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-3">{item.tag}</p>
                    <p className="text-base font-semibold text-[#0B1B3D] mb-3 leading-snug">{item.headline}</p>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.body}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm" />
              <CarouselNext className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
