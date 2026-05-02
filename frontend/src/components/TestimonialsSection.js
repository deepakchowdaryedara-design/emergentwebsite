import { Quote } from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "../components/ui/carousel";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Cecillia Wong", role: "Marketing Manager, Powerknot", text: "The NeuralTrix team was highly professional, client-focused, and customer-oriented. They delivered the project with expected quality, offering cost-effective solutions." },
  { name: "Christina Delord", role: "Founder, TracPrac", text: "You can rely on their creativity and expertise! They grasped our vision, set realistic timelines, and provided innovative suggestions for our software." },
  { name: "Lisa Bailey", role: "Founder, DockHere", text: "NeuralTrix transformed my ideas into an outstanding design, offering valuable suggestions throughout. Their core strengths lie in expertise, patience, and commitment." },
  { name: "Fahad AlQarawi", role: "Founder, C-school App", text: "They offered suggestions, which meant they've got a proactive team on board. Communication was quite easy. I rate them 5 out of 5." },
  { name: "Bryan Rivers", role: "CEO, Malibbo", text: "I genuinely appreciate the efforts of the NeuralTrix team for your hard work, determination, late nights, and continuous communication throughout this project." },
];

export default function TestimonialsSection({ title }) {
  return (
    <section data-testid="page-testimonials" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="mb-8 max-w-2xl text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">References</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
              {title || "Here's What Our Clients Say"}
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div data-testid={`page-testimonial-${i}`} className="bg-[#F8FAFC] border border-slate-200 rounded-sm p-8 h-full flex flex-col">
                    <Quote size={22} className="text-slate-200 mb-4" />
                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">{t.text}</p>
                    <div>
                      <p className="text-sm font-bold text-[#0B1B3D]">{t.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                    </div>
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

