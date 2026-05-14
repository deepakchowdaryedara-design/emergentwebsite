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
    <footer data-testid="footer" className="bg-[#0B1B3D] text-white border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img 
                src="/neuraltrix-logo.jpeg" 
                alt="NeuralTrix AI" 
                className="h-9 w-auto object-contain rounded-sm"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8 font-medium">
              NeuralTrix AI provides applied AI engineering and software delivery for organizations requiring accountable execution and production-grade systems.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Registry Status: Active
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                Est. {COMPANY_FOUNDED_LABEL}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-6 opacity-50">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-xs text-slate-400 hover:text-blue-400 cursor-pointer transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} NeuralTrix AI
            </p>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                Privacy
              </Link>
              <Link to="/terms-and-conditions" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                Terms
              </Link>
              <Link to="/legal-templates" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                Legal
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">System Operational</span>
            </div>
            <button
              data-testid="scroll-to-top"
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

