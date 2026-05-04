import services from "../data/services";
import ServicesShowcaseTabs from "./ServicesShowcaseTabs";

export default function ServicesSection({ showLabel = true }) {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-4 sm:py-6 md:py-8 corp-pat-dots overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="max-w-2xl mb-6">
          {showLabel && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            Coverage
          </p>
          )}
          <h2
            data-testid="services-heading"
            className="mb-4 corp-heading-gradient"
          >
            Coverage Across <span className="corp-heading-secondary">Engineering Services</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Strategy, implementation, and operations support across the AI and software lifecycle, scoped to your priorities, budget, and governance requirements.
          </p>
        </div>
        <ServicesShowcaseTabs services={services} />
      </div>
    </section>
  );
}
