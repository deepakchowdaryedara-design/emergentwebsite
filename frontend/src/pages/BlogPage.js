import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import blogArticles from "../data/blog";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

export default function BlogPage() {
  return (
    <div>
      <PageHero
        label="Blog & Resources"
        title="Practical AI Insights for Technology and Business Leaders"
        description="Read implementation lessons, architecture decisions, and operating guidance drawn from real enterprise AI delivery programs."
        primaryCTA={{ text: "Subscribe to Updates", href: "#page-contact" }}
        bgDark={true}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} data-testid={`blog-link-${a.slug}`} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="overflow-hidden h-48">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">{a.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10} /> {a.readTime}</span>
                  </div>
                  <h3 className="mb-3 group-hover:text-[#2563EB] transition-colors" >{a.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">Read Article <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Coverage</p>
              <h2 className="mb-5" >
                Read by Decision Context, Not Just Topic
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI Strategy", desc: "Leadership frameworks, adoption planning, and operating model decisions." },
              { title: "Engineering", desc: "Architecture patterns, tooling comparisons, and implementation lessons." },
              { title: "Operations", desc: "Workflow automation, observability, and reliability practices in production." },
              { title: "Governance", desc: "Security, risk controls, and compliance-minded AI delivery patterns." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Outcomes</p>
              <h2 className="mb-5" >
                Featured Analysis from Recent Client Patterns
              </h2>
            </div>
          </AnimatedSection>
          {blogArticles[0] && (
            <Link to={`/blog/${blogArticles[0].slug}`} className="group rounded-sm border border-slate-200 overflow-hidden bg-[#F8FAFC] block hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img src={blogArticles[0].image} alt={blogArticles[0].title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-3">{blogArticles[0].category}</p>
                  <h3 className="mb-4 group-hover:text-[#2563EB] transition-colors" >{blogArticles[0].title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">{blogArticles[0].excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">
                    Read Featured Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="mb-5" >
                Curated Reading Tracks by Role
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For CTOs",
                points: ["Platform strategy and ROI governance", "Team structure for AI execution", "Technology bet evaluation"],
              },
              {
                title: "For Product Leaders",
                points: ["Use-case prioritization", "Experimentation and rollout design", "Adoption metrics and feedback loops"],
              },
              {
                title: "For Operations Teams",
                points: ["Workflow automation playbooks", "Quality controls and reliability", "Process optimization patterns"],
              },
            ].map((path) => (
              <StaggerItem key={path.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="mb-4" >{path.title}</h3>
                  <ul className="space-y-2">
                    {path.points.map((p) => (
                      <li key={p} className="text-sm text-slate-600 leading-relaxed">- {p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Methodology</p>
              <h2 className="mb-4" >
                Methodology for Turning Insights into Delivery
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Practical", desc: "Real implementation patterns over abstract theory." },
              { title: "Technical", desc: "Deep engineering detail where it drives outcomes." },
              { title: "Operational", desc: "Clear guidance for scale, governance, and reliability." },
              { title: "Decision-Oriented", desc: "Content structured for business and product decisions." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="mb-2" >{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="rounded-sm border border-white/15 bg-white/[0.02] p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">Next Step</p>
              <h2 className="mb-4" >
                Apply These Insights to Your Current Priorities
              </h2>
              <p className="text-base text-blue-100/90 leading-relaxed max-w-3xl">
                This next step applies these insights to your organization through a practical implementation roadmap.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <PageContactForm context="Blog Page" />
    </div>
  );
}

