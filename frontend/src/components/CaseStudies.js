import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caseStudiesData from "../data/caseStudies";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const slides = caseStudiesData.map((cs) => ({
  slug: cs.slug,
  title: cs.title,
  industry: cs.industry,
  image: cs.heroImage,
}));

export default function CaseStudies() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => api.scrollNext(), 3500);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section id="case-studies" data-testid="case-studies-section" className="bg-white py-6 sm:py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-8 grid grid-cols-1 gap-8 lg:mb-10 lg:grid-cols-2 lg:items-end lg:gap-10 xl:gap-14">
          <div className="max-w-xl lg:max-w-none">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              Outcomes
            </p>
            <h2 className="text-3xl font-black tracking-tighter text-[#0B1B3D] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Transforming Businesses
              <br />
              <span className="text-[#0B1B3D]">with IT Solutions</span>
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:text-right">
            <p className="mb-5 text-sm leading-relaxed text-slate-600 lg:text-base">
              Our case studies explain the constraints clients faced, the implementation choices made, and the operational outcomes measured after delivery.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] underline decoration-[#0B1B3D] underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
            >
              View all projects
              <span aria-hidden className="text-base">
                ›
              </span>
            </Link>
          </div>
        </div>

        <div>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, duration: 28 }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {slides.map((cs) => (
                <CarouselItem
                  key={cs.slug}
                  className="pl-3 basis-[82%] sm:basis-1/2 md:basis-[38%] lg:basis-1/3 xl:basis-[28%]"
                >
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="group block max-w-[320px] sm:max-w-none"
                    data-testid={`case-study-card-${cs.slug}`}
                  >
                    <div className="relative overflow-visible pb-1.5">
                      <div className="relative h-[200px] overflow-hidden rounded-sm bg-slate-100 sm:h-[220px] lg:h-[236px]">
                        <img
                          src={cs.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                      <div className="relative z-10 -mt-9 mx-2 bg-white p-3.5 shadow-[0_14px_32px_-20px_rgba(15,23,42,0.35)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.38)] sm:mx-2.5 sm:p-4">
                        <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wide text-[#2563eb] sm:text-xs">
                          IT Solution
                        </p>
                        <h3 className="text-base font-bold leading-snug tracking-tight text-[#0f172a] line-clamp-2 sm:text-[1.05rem]">
                          {cs.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-10 flex justify-center gap-2">
            {slides.map((cs, index) => (
              <button
                key={cs.slug}
                type="button"
                aria-label={`Go to ${cs.title}`}
                onClick={() => api?.scrollTo(index)}
                className={`rounded-full border-2 border-[#2563eb] transition-all duration-300 ${current === index
                  ? "h-2.5 w-8 border-[#2563eb] bg-[#2563eb]"
                  : "h-2.5 w-2.5 bg-transparent hover:bg-blue-100"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
