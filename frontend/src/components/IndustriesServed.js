import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";

const industryUseCases = {
  "Healthcare": ["Health Monitoring & Alerts", "Virtual Health Support", "Improved Drug Development", "Enhanced Treatment Plans"],
  "Fintech": ["Credit Assessment & Management", "Market Trend Analysis", "Personalized Customer Support", "Safeguarding Against Fraud"],
  "Retail": ["Dynamic Pricing", "Personalized Recommendations", "Inventory Optimization", "Customer Sentiment Analysis"],
  "Education": ["Adaptive Learning Paths", "Automated Assessment", "Content Generation", "Student Analytics"],
  "Real Estate": ["Virtual Tours", "AI Bots For Data Collection", "Property Evaluation", "Secure Transactions"],
  "BFSI Solutions": ["Intelligent Underwriting", "Claims Processing", "Compliance Automation", "Customer 360"],
  "Sports & Gaming": ["Performance Analytics", "Fan Engagement", "Predictive Modeling", "Content Generation"],
};

export default function IndustriesServed({ title }) {
  const [activeTab, setActiveTab] = useState(0);
  const displayIndustries = industries.slice(0, 6);

  return (
    <section data-testid="industries-served-section" className="py-20 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <AnimatedSection>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Industries</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {title || "Tailored AI Solutions for Your Industry"}
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-8">
            {displayIndustries.map((ind, i) => (
              <button
                key={ind.slug}
                data-testid={`industry-tab-${ind.slug}`}
                onClick={() => setActiveTab(i)}
                className={`text-sm px-4 py-2 rounded-sm font-medium transition-all duration-200 ${activeTab === i ? "bg-[#0B1B3D] text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-[#0B1B3D]"}`}
              >
                {ind.title}
              </button>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                {(() => { const Icon = displayIndustries[activeTab].icon; return <Icon size={24} className="text-[#2563EB]" />; })()}
                <h3 className="text-lg font-bold text-[#0B1B3D]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  {displayIndustries[activeTab].title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{displayIndustries[activeTab].shortDesc}</p>
              <Link to={`/industries/${displayIndustries[activeTab].slug}`} className="text-sm font-semibold text-[#2563EB] hover:underline">
                Explore {displayIndustries[activeTab].title} Solutions
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(industryUseCases[displayIndustries[activeTab].title] || displayIndustries[activeTab].features.slice(0, 4).map(f => f.title)).map((uc, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-sm p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0B1B3D] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-white font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
