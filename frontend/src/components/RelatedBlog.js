import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import blogArticles from "../data/blog";

export default function RelatedBlog({ title }) {
  return (
    <section data-testid="related-blog-section" className="py-12 sm:py-16 corp-pat-dots">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">Resources</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" >
                {title || "Latest AI Insights"}
              </h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] hover:text-[#0B1B3D] transition-colors border-b-2 border-blue-500/10 hover:border-blue-500 pb-1 w-fit">
              View All Insights <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.slice(0, 3).map((a) => (
            <StaggerItem key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-500 block h-full">
                <div className="overflow-hidden h-52 relative">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-black bg-white/90 backdrop-blur-sm text-[#0B1B3D] px-2 py-1 rounded-sm uppercase tracking-widest shadow-sm">{a.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 font-bold"><Clock size={12} className="text-blue-500" />{a.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-tight mb-4" >{a.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read Article <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

