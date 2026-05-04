import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import engagementPrinciples from "../data/engagementPrinciples";

export default function Testimonials({ showLabel = true }) {
  return (
    <section data-testid="testimonials-section" className="py-6 sm:py-8 md:py-10 corp-pat-diag-dash">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="text-left max-w-2xl mb-8">
          {showLabel && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            Assurance
          </p>
          )}
          <h2
            data-testid="testimonials-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"
          >
            Assurance for <span className="corp-heading-secondary">first engagements</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            What we commit to when you evaluate NeuralTrix: pilots with clear scope, direct engineering access, and artifacts your security and delivery leads can review before expanding spend.
          </p>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-6">
            {engagementPrinciples.map((item, i) => (
              <CarouselItem key={item.headline} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="bg-white border border-slate-200 rounded-sm p-8 h-full flex flex-col"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2563EB] mb-4">{item.tag}</p>
                  <p className="text-lg font-semibold text-[#0B1B3D] mb-4 leading-snug">{item.headline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.body}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-start gap-4 mt-8">
            <CarouselPrevious
              data-testid="testimonial-prev"
              className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm"
            />
            <CarouselNext
              data-testid="testimonial-next"
              className="static translate-y-0 bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white rounded-sm"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
