import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import CTASection from "../components/CTASection";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection from "../components/AnimatedSection";
import blogArticles from "../data/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-[#0B1B3D]">Article Not Found</h1><Link to="/blog" className="text-[#2563EB] ml-4">Back to Blog</Link></div>);
  }

  const headings = article.content.filter((b) => b.type === "heading");

  return (
    <div>
      {/* 1. Article Hero */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: "#0B1B3D" }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
          <Link to="/blog" data-testid="back-to-blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"><ArrowLeft size={14} /> Back to Blog</Link>
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest block mb-4">{article.category}</span>
          <h1 data-testid="blog-article-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", letterSpacing: "-0.03em" }}>{article.title}</h1>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* 2. Featured Image */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 -mt-8">
        <img src={article.image} alt={article.title} className="w-full h-64 sm:h-80 object-cover rounded-sm border border-slate-200" />
      </div>

      {/* 3. Content with Sidebar TOC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <h4 className="text-xs font-semibold text-[#0B1B3D] uppercase tracking-wider mb-4 flex items-center gap-2"><BookOpen size={14} /> Table of Contents</h4>
                <nav className="space-y-2">
                  {headings.map((h, i) => (
                    <a key={i} href={`#heading-${i}`} className="block text-sm text-slate-500 hover:text-[#2563EB] transition-colors py-1 border-l-2 border-slate-200 pl-3 hover:border-[#2563EB]">
                      {h.text}
                    </a>
                  ))}
                </nav>
                {/* Share */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-semibold text-[#0B1B3D] uppercase tracking-wider mb-3 flex items-center gap-2"><Share2 size={14} /> Share Article</h4>
                  <div className="flex gap-2">
                    {["Twitter", "LinkedIn", "Email"].map((s) => (
                      <button key={s} className="text-xs px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 rounded-sm text-slate-600 hover:border-[#2563EB] transition-colors">{s}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <article>
                  {article.content.map((block, i) => {
                    const headingIndex = headings.indexOf(block);
                    if (block.type === "heading") {
                      return <h2 key={i} id={`heading-${headingIndex}`} className="text-2xl font-bold tracking-tight text-[#0B1B3D] mt-10 mb-4 scroll-mt-24" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{block.text}</h2>;
                    }
                    return <p key={i} className="text-base text-slate-600 leading-relaxed mb-6">{block.text}</p>;
                  })}
                </article>
              </AnimatedSection>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0B1B3D] rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white font-bold">NT</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0B1B3D]">NeuralTrix AI Engineering Team</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Insights from our team of 400+ AI specialists building production-grade AI solutions for enterprises worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection title="Want Expert AI Insights?" description="Subscribe to our newsletter for the latest AI development trends and insights from our engineering team." buttonText="Get in Touch" />

      {/* 5. Related Articles */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#0B1B3D] mb-8" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>More Articles</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.filter((a) => a.slug !== slug).map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="overflow-hidden h-40"><img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{a.category}</span>
                  <h3 className="text-sm font-bold text-[#0B1B3D] mt-2 group-hover:text-[#2563EB] transition-colors" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <PageContactForm context="Blog Article" />
    </div>
  );
}
