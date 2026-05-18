import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caseStudiesData from "../data/caseStudies";
import { TRACEFOLD } from "../lib/tracefoldLabel";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const slides = caseStudiesData.map((cs) => ({
  slug: cs.slug,
  title: cs.title,
  industry: cs.industry,
  image: cs.heroImage,
}));

export default function CaseStudies({ showLabel = true }) {
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
    <section 
      id="case-studies" 
      data-testid="case-studies-section" 
      className="relative overflow-hidden bg-gradient-to-br from-[#F4F5F7] via-[#FFFFFF] to-[#E9F0FC] py-16 sm:py-20 md:py-24 border-y border-slate-100"
    >
      {/* Decorative High-Tech Background Glows */}
      <div className="absolute right-[-100px] top-[-50px] w-[450px] h-[450px] rounded-full bg-blue-300/15 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute left-[-150px] bottom-[-50px] w-[500px] h-[500px] rounded-full bg-indigo-200/15 blur-[135px] -z-10 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 z-10">
        <div className="mb-8 grid grid-cols-1 gap-8 lg:mb-10 lg:grid-cols-2 lg:items-end lg:gap-10 xl:gap-14">
          <div className="max-w-xl lg:max-w-none">
            {showLabel && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0052CC]">
                Coverage
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-[#172B4D] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              Coverage Across
              <br />
              <span className="text-[#0052CC]">{TRACEFOLD} scenarios</span>
            </h2>
          </div>
          <div className="max-w-md lg:ml-auto lg:text-right">
            <p className="mb-5 text-sm leading-relaxed text-[#42526E] lg:text-base font-normal">
              {TRACEFOLD} patterns are representative narratives, not completed client projects. Use them to see how we approach problems like yours, then contact us to scope something concrete.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#0052CC] hover:text-[#0065FF] underline decoration-[#0052CC]/30 hover:decoration-[#0065FF] underline-offset-4 transition-colors"
            >
              View all projects
              <span aria-hidden className="text-base ml-0.5">
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
                      <div className="relative h-[200px] overflow-hidden rounded-md bg-white/60 backdrop-blur-sm border border-slate-100 sm:h-[220px] lg:h-[236px]">
                        <img
                          src={cs.image}
                          alt=""
                          className="h-full w-full object-contain p-4 transition-all duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>
                      <div className="relative z-10 -mt-9 mx-2 bg-white rounded-md p-3.5 border border-slate-100/60 shadow-[0_8px_30px_rgba(9,30,66,0.06)] transition-all duration-300 group-hover:shadow-[0_15px_45px_rgba(9,30,66,0.12)] sm:mx-2.5 sm:p-4">
                        <p className="mb-0.5 text-[11px] font-bold uppercase tracking-wide text-[#0052CC] sm:text-xs">
                          IT Solution
                        </p>
                        <h3 className="text-base font-bold leading-snug tracking-tight text-[#172B4D] line-clamp-2 sm:text-[1.05rem]">
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
                className={`rounded-full border-2 transition-all duration-300 ${
                  current === index
                    ? "h-2.5 w-8 border-[#0052CC] bg-[#0052CC]"
                    : "h-2.5 w-2.5 border-slate-300 bg-transparent hover:bg-slate-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
