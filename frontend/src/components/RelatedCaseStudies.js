import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import caseStudies from "../data/caseStudies";

export default function RelatedCaseStudies({ industryFilter, limit = 4, title }) {
  let filtered = caseStudies;
  if (industryFilter) {
    filtered = caseStudies.filter((cs) =>
      cs.industry.toLowerCase().includes(industryFilter.toLowerCase()) ||
      cs.techStack.some((t) => t.toLowerCase().includes(industryFilter.toLowerCase()))
    );
    if (filtered.length < 2) filtered = caseStudies;
  }
  const display = filtered.slice(0, limit);

  return (
    <section data-testid="related-case-studies" className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC]">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                {title || "Real Stories of AI Wins That Deliver Impact"}
              </h2>
            </div>
            <Link to="/case-studies" data-testid="view-all-case-studies" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline">
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {display.map((cs) => (
            <StaggerItem key={cs.slug}>
              <Link to={`/case-studies/${cs.slug}`} className="group border border-slate-200 rounded-sm p-8 bg-white hover:border-[#2563EB]/40 transition-all duration-300 block h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{cs.industry}</span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mt-2 group-hover:text-[#2563EB] transition-colors" >{cs.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{cs.client}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#2563EB] transition-colors flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{cs.challenge.substring(0, 120)}...</p>
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 border border-slate-200 text-slate-500 rounded-sm">{t}</span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

