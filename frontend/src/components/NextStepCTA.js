import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

/**
 * Homepage “Next Step” band: dark panel before the contact form.
 * Primary action opens the contact form in consultation mode; secondary routes to Services.
 */
export default function NextStepCTA() {
  return (
    <section
      data-testid="next-step-cta"
      className="relative overflow-hidden bg-[#0A1628] py-6 sm:py-8 md:py-10 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-400">
            Next Step
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            <span className="text-white">Next Step for </span>
            <span className="text-white/45">Your Initiative</span>
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
            This next step is a working discussion of objectives, constraints, timeline, and fit, so both sides can decide on a proportionate pilot or engagement model.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              data-testid="next-step-cta-primary"
              asChild
              className="h-12 rounded-sm border-0 bg-cyan-400 px-8 text-sm font-semibold text-[#0B1B3D] shadow-lg shadow-cyan-500/15 transition-colors hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Link to={contactFormTo("/", CONTACT_TOPIC.CONSULTATION)}>
                Schedule a call
              </Link>
            </Button>
            <Button
              data-testid="next-step-cta-secondary"
              asChild
              variant="outline"
              className="h-12 rounded-sm border-white/40 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
