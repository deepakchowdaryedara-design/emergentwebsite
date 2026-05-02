import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Cecillia Wong",
    role: "Marketing Manager, Powerknot",
    text: "The NeuralTrix team was highly professional, client-focused, and customer-oriented. They delivered the project with the expected quality, offering cost-effective solutions. They were flexible, accommodating our ideas, and consistently returned items promptly.",
  },
  {
    name: "Christina Delord",
    role: "Founder, TracPrac",
    text: "You can rely on their creativity and expertise! They grasped our vision, set realistic timelines, and provided innovative suggestions for our software. Whether your project is big or small, their creativity and dependable service will see it through.",
  },
  {
    name: "Lisa Bailey",
    role: "Founder, DockHere",
    text: "NeuralTrix transformed my ideas into an outstanding design, offering valuable suggestions throughout the process. They were always available to discuss the project's design and feasibility. Their core strengths lie in expertise, patience, and commitment to excellence.",
  },
  {
    name: "Fahad AlQarawi",
    role: "Founder, C-school App",
    text: "They offered suggestions, which meant they've got a proactive team on board. Communication with them was quite easy. I liked their professionalism and commitment. If I am asked to rate them, I rate them 5 out of 5.",
  },
  {
    name: "Bryan Rivers",
    role: "CEO, Malibbo",
    text: "I genuinely appreciate the efforts of the NeuralTrix team and want to thank each of you for your hard work, determination, late nights, countless hours, and continuous communication throughout this project.",
  },
];

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="py-6 sm:py-8 md:py-10 corp-pat-diag-dash">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="text-left max-w-2xl mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            References
          </p>
          <h2
            data-testid="testimonials-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"

          >
            Powering <span className="text-[#0B1B3D]/30">Digital Success</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real stories of how intelligent engineering transformed complex challenges into operational success.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div
                  data-testid={`testimonial-card-${i}`}
                  className="bg-white border border-slate-200 rounded-sm p-8 h-full flex flex-col"
                >
                  <Quote size={24} className="text-slate-200 mb-4" />
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                    {t.text}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-[#0B1B3D]">{t.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                  </div>
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

