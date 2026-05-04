import { ShieldCheck, LockKeyhole, Eye, Server } from "lucide-react";
import PageHero from "../components/PageHero";
import PageContactForm from "../components/PageContactForm";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const pillars = [
  { icon: LockKeyhole, title: "Secure by Design", desc: "Security controls are embedded across architecture, development, and deployment workflows." },
  { icon: Eye, title: "Governance & Auditability", desc: "Traceable controls, review paths, and operational transparency for enterprise assurance." },
  { icon: Server, title: "Infrastructure Hardening", desc: "Environment-level protections, access boundaries, and resilient platform practices." },
  { icon: ShieldCheck, title: "Compliance Alignment", desc: "Delivery patterns designed to support regulated and security-sensitive industries." },
];

export default function SecurityPage() {
  return (
    <div>
      <PageHero
        label="Security"
        title="Security Practices for Enterprise AI Environments"
        description="Our security model integrates technical controls, governance checkpoints, and operational safeguards across the full delivery lifecycle."
        primaryCTA={{ text: "Discuss security requirements", href: "#page-contact", contactIntent: "consultation" }}
        image={LISTING_PAGE_HERO_IMAGES.industries}
      />
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="" >
                Controls Designed for Production Environments
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                  <p.icon size={22} className="text-[#2563EB] mb-4" />
                  <h3 className="mb-2" >{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">Methodology</p>
              <h2 className="mb-4" >
                Security Lifecycle from Assessment to Monitoring
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Assess", desc: "Threat modeling and environment risk analysis before implementation." },
              { title: "Design", desc: "Control architecture, access patterns, and policy enforcement design." },
              { title: "Implement", desc: "Secure coding practices, review workflows, and hardening controls." },
              { title: "Monitor", desc: "Observability, alerting, and governance checks in production." },
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
      <section className="py-6 sm:py-8 md:py-10 corp-pat-dots">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-10">
              <h2 className="" >
                Assurance Through Operational Security Safeguards
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Data and Access Controls",
                points: ["Least-privilege access patterns", "Role-based control boundaries", "Data flow protection practices"],
              },
              {
                title: "Governance and Monitoring",
                points: ["Audit trail visibility", "Release governance gates", "Runtime monitoring and incident response readiness"],
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <h3 className="mb-4" >{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm text-slate-600 leading-relaxed">- {point}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <PageContactForm context="Security Page" />
    </div>
  );
}

