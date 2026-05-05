import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_FOUNDED_LABEL } from "../lib/company";

const footerLinks = {
  Services: [
    { label: "Applied ML", href: "/services/artificial-intelligence" },
    { label: "GenAI & Copilots", href: "/services/generative-ai" },
    { label: "Platform Engineering", href: "/services/custom-software" },
    { label: "Mobile Engineering", href: "/services/mobile-apps" },
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "LLM Lifecycle", href: "/services/llm-development" },
    { label: "DevOps & Reliability", href: "/services/devops" },
    { label: "Data Platform", href: "/services/data-engineering" },
  ],
  Solutions: [
    { label: "Corpus", href: "/solutions/databrain-ai" },
    { label: "ClinIQ", href: "/solutions/medimind-ai" },
    { label: "Arc", href: "/solutions/talentify-ai" },
    { label: "Reach", href: "/solutions/quikbiz-ai" },
    { label: "Nexus", href: "/solutions/intellibot-ai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Technology Partners", href: "/partners" },
    { label: "Security", href: "/security" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Legal Templates", href: "/legal-templates" },
  ],
  Industries: [
    { label: "Commerce", href: "/industries/retail" },
    { label: "Health", href: "/industries/healthcare" },
    { label: "Finance", href: "/industries/fintech" },
    { label: "EdTech", href: "/industries/education" },
    { label: "Industrial", href: "/industries/manufacturing" },
    { label: "Sports", href: "/industries/sports-gaming" },
    { label: "PropTech", href: "/industries/real-estate" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#0B1B3D] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-10">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <span
              className="text-2xl font-extrabold text-white tracking-tighter block mb-4"
              
            >
              NeuralTrix AI
            </span>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Applied AI engineering: product accelerators and custom delivery, operating since {COMPANY_FOUNDED_LABEL}.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} NeuralTrix AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/legal-templates" className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">
              Legal Templates
            </Link>
            <button
              data-testid="scroll-to-top"
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
            >
              <ArrowUp size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

