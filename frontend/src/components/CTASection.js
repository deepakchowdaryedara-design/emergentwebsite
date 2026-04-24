import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection({ title, description, buttonText, buttonHref, compact = false }) {
  return (
    <section data-testid="cta-section" className={`${compact ? 'py-0' : 'py-16 sm:py-20'} bg-[#0B1B3D] relative overflow-hidden`}>
      {/* Premium Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Strategic Next Step</p>
            <h2
              data-testid="cta-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
              
            >
              {title || "Ready to Transform Your Business?"}
            </h2>
            <p className="text-lg text-blue-100/60 leading-relaxed max-w-2xl mb-10 font-medium">
              {description || "Contact us today to learn more about how NeuralTrix AI can help you achieve your goals with cutting-edge AI solutions."}
            </p>
            <Button
              data-testid="cta-button"
              asChild
              className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-10 py-6 font-bold text-sm h-14 shadow-xl shadow-blue-500/20 cursor-pointer"
            >
              <a 
                href={buttonHref || "#page-contact"}
                onClick={(e) => {
                  const href = buttonHref || "#page-contact";
                  if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                      const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }
                }}
              >
                {buttonText || "Get Started Today"} <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "Consultation with a subject matter expert",
                  "Initial data & systems readiness audit",
                  "High-level implementation roadmap",
                  "Estimated ROI and timeline projection"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    </div>
                    <span className="text-sm text-blue-100/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

