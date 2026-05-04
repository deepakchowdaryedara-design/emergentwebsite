import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  contactIntent = "contact",
  compact = false,
  hideLabel = false,
}) {
  const location = useLocation();
  const topic =
    contactIntent === "consultation" ? CONTACT_TOPIC.CONSULTATION : CONTACT_TOPIC.CONTACT;
  return (
    <section data-testid="cta-section" className={`${compact ? 'py-0' : 'py-6 sm:py-8 md:py-10'} bg-[#0B1B3D] text-white relative overflow-hidden`}>
      {/* Premium Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            {!hideLabel && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-300">Next Step</p>
            )}
            <h2
              data-testid="cta-title"
              className="mb-6 text-white"
            >
              {title || "Next Step for Your AI and Software Initiative"}
            </h2>
            <p className="text-lg text-blue-100/60 leading-relaxed max-w-2xl mb-10 font-medium">
              {description ||
                "Contact us to discuss scope, timeline, and fit. We respond with a structured view of options, dependencies, and governance considerations for your environment."}
            </p>
            <Button
              data-testid="cta-button"
              asChild
              className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 rounded-sm px-10 py-6 font-bold text-sm h-14 shadow-xl shadow-blue-500/20 cursor-pointer"
            >
              {(() => {
                const href = buttonHref?.trim();
                if (href?.startsWith("http") || href?.startsWith("mailto:")) {
                  return (
                    <a href={href}>
                      {buttonText || "Contact us"} <ArrowRight size={18} className="ml-2" />
                    </a>
                  );
                }
                if (href && href !== "#page-contact") {
                  return (
                    <Link to={href}>
                      {buttonText || "Contact us"} <ArrowRight size={18} className="ml-2" />
                    </Link>
                  );
                }
                return (
                  <Link to={contactFormTo(location.pathname, topic)}>
                    {buttonText || "Contact us"} <ArrowRight size={18} className="ml-2" />
                  </Link>
                );
              })()}
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="mb-6 text-white uppercase tracking-widest">What to Expect</h3>
              <ul className="space-y-4">
                {[
                  "Discovery session with a delivery lead",
                  "Initial data and systems readiness review",
                  "Implementation roadmap with milestones and risks",
                  "Indicative timeline and success metrics aligned to your KPIs"
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

