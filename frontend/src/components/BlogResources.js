import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "AI Tools",
    title: "Augment Code vs Cursor: Best AI Tool for Developers?",
    slug: "augment-code-vs-cursor",
    desc: "Criteria-based comparison for repository scale, integration model, and team workflow fit.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&w=600&h=400&fit=crop&q=80",
  },
  {
    category: "AI Comparison",
    title: "Claude vs ChatGPT for Coding: Features & Use Cases",
    slug: "claude-vs-chatgpt-coding",
    desc: "Feature and use-case comparison for development assistance, review, and enterprise adoption scenarios.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Development",
    title: "Top 10 Vibe Coding Tools for Faster AI App Development",
    slug: "top-vibe-coding-tools",
    desc: "Survey of development tools that support AI-assisted delivery and how teams evaluate fit.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&w=600&h=400&fit=crop&q=80",
  },
];

export default function BlogResources({ showLabel = true }) {
  return (
    <section id="blog" data-testid="blog-section" className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-8">
          {showLabel && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            Coverage
          </p>
          )}
          <h2
            data-testid="blog-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-[#0B1B3D] mb-4"

          >
            Coverage Across <span className="text-[#0B1B3D]/30">delivery topics</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Technical notes on tools, models, and delivery practices, for teams evaluating AI engineering partners or internal build-outs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Link
              to={`/blog/${a.slug}`}
              key={i}
              data-testid={`blog-card-${i}`}
              className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                  {a.category}
                </span>
                <h3
                  className="text-base font-bold text-[#0B1B3D] mt-2 mb-3 group-hover:text-[#2563EB] transition-colors"

                >
                  {a.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

