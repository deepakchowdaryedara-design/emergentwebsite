import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection, { StaggerChildren, StaggerItem } from "./AnimatedSection";
import blogArticles from "../data/blog";

export default function RelatedBlog({ title }) {
  return (
    <section data-testid="related-blog-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Resources</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                {title || "Latest AI Insights & Trends"}
              </h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogArticles.slice(0, 3).map((a) => (
            <StaggerItem key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 block">
                <div className="overflow-hidden h-44">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{a.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10} />{a.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors line-clamp-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{a.title}</h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
