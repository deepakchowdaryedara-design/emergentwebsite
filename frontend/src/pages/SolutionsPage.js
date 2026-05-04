import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import solutions from "../data/solutions";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

export default function SolutionsPage() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

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

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="bg-[#F8FAFC]">
      <PageHero
        label="Solutions"
        title="Solution Accelerators for Structured AI Rollouts"
        description="Pre-architected modules for document intelligence, regulated workflows, talent operations, and adjacent domains, maintained with customer programs and internal delivery feedback."
        primaryCTA={{ text: "Review accelerators", href: "#solutions-list" }}
        image={LISTING_PAGE_HERO_IMAGES.solutions}
      />

      <section
        id="solutions-list"
        className="py-6 sm:py-8 md:py-10"
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 mb-8 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1B3D] mb-3">
            Coverage Across <span className="opacity-40">solution accelerators</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            This coverage lists pre-architected modules you can brief against, each links to a full overview with scope boundaries and integration assumptions.
          </p>
        </div>
        <div className="w-full">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="w-full px-4 sm:px-10 lg:px-[10vw]"
            >
              <CarouselContent className="-ml-4 pb-8">
                {solutions.map((s) => (
                  <CarouselItem
                    key={s.slug}
                    className="pl-4 basis-[84%] sm:basis-[58%] lg:basis-[30%] xl:basis-[24%]"
                  >
                    <Link
                      to={`/solutions/${s.slug}`}
                      className="block h-full"
                      data-testid={`solution-card-${s.slug}`}
                    >
                      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-blue-500/20 transition-all duration-700 group">
                        <div className="relative aspect-square overflow-hidden bg-slate-50">
                          <img
                            src={s.heroImage}
                            alt={s.title}
                            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000 ease-out"
                          />
                          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-700" />
                        </div>
                        <div className="p-8 flex items-start gap-4 bg-white border-t border-slate-50 flex-1">
                          <div className="w-1 bg-[#2563EB] self-stretch rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                          <div>
                            <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2">Accelerator</p>
                            <h3 className="group-hover:text-blue-600 transition-colors">
                              {s.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center items-center gap-3 mt-4">
              {solutions.map((item, index) => (
                <button
                  key={item.slug}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                  aria-label={`Go to ${item.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? "w-7 bg-blue-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageContactForm context="Solutions Page" />
    </div>
  );
}
