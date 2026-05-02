import PageHero from "../components/PageHero";
import AnimatedSection, { StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { LISTING_PAGE_HERO_IMAGES } from "../lib/heroImageThemes";

const sections = [
  {
    title: "1. The Data We Gather",
    content: (
      <>
        <p>To keep our platform running smoothly, Neuraltrix AI collects basic information from users, clients, and applicants.</p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">This might include:</p>
        <ul className="mt-4 space-y-3">
          {["Email address and other contact information", "Data on how the site is used (pages visited, interactions)", "Forms used to share information"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">We use this information to talk to you, provide services, and improve our performance.</p>
        <p className="mt-4 font-bold text-[#0B1B3D]">We never sell or trade your personal information.</p>
        <p className="mt-4 text-slate-600">Sometimes, we may work with trusted service providers, like email or analytics tools, to help us run our business. These partners keep your data safe.</p>
        <p className="mt-4 text-slate-600">We might also have to share data if the law says we have to.</p>
      </>
    )
  },
  {
    title: "2. How We Use Technologies to Track",
    content: (
      <>
        <p className="text-slate-600">We use cookies and other technologies on our website to make your visit better.</p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">These are helpful to us:</p>
        <ul className="mt-4 space-y-3">
          {["Learn how users act", "Make the website work better", "Save basic settings"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">You can change your browser settings to control or turn off cookies. Some parts of the website might not work if you turn them off.</p>
      </>
    )
  },
  {
    title: "3. Communication and Public Content",
    content: (
      <>
        <p className="text-sm font-black text-[#0B1B3D] uppercase tracking-wider mb-4">Email Updates</p>
        <p className="text-slate-600">We may collect the following if you sign up for our updates:</p>
        <ul className="mt-4 space-y-3 mb-6">
          {["Address for email", "IP address and Time of subscription"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600">We only use this information to send you updates that are relevant. You can stop getting emails at any time by clicking the link in the email. After you unsubscribe, we will delete your information from our system.</p>

        <p className="text-sm font-black text-[#0B1B3D] uppercase tracking-wider mt-10 mb-4">Interacting with the Public</p>
        <p className="text-slate-600 mb-4">You might be able to leave comments or talk on our platform. Please be aware:</p>
        <ul className="space-y-3">
          {["People can see anything you post in public.", "Don't share personal or sensitive information."].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    title: "4. Keeping an eye on performance",
    content: (
      <>
        <p className="text-slate-600">We use tools like Google Analytics to see how people use our website.</p>
        <p className="mt-6 text-sm font-black text-[#0B1B3D] uppercase tracking-wider">This helps us get better:</p>
        <ul className="mt-4 space-y-3">
          {["The quality of the content", "How well the website works", "Experience of the user"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">These tools do not know who users are.</p>
      </>
    )
  },
  {
    title: "5. Your Agreement",
    content: (
      <p className="text-slate-600">You agree to the terms of this Privacy Notice by using our website. Please don't use our services if you don't agree.</p>
    )
  },
  {
    title: "6. What to do if this notice changes",
    content: (
      <p className="text-slate-600">We might change this Privacy Notice if we need to. This page will have all the updates. You agree to the changes by continuing to use the website.</p>
    )
  },
  {
    title: "7. Last Changed",
    content: (
      <div className="inline-flex items-center rounded-sm border border-[#2563EB]/20 bg-[#2563EB]/5 px-3 py-1 text-xs font-bold text-[#2563EB]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        APRIL 2026
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        label="Legal & Trust"
        title="Privacy Notice and Data Handling Policies"
        description="This notice outlines our approach to data sovereignty, user privacy, and technical security measures across our platform."
        primaryCTA={{ text: "View Details", href: "#privacy-content" }}
        image={LISTING_PAGE_HERO_IMAGES.blog}
      />

      {/* Privacy Content */}
      <section id="privacy-content" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
                <h2 className="" >
                  Data Privacy <span className="opacity-30">Architecture</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-14">
              {sections.map((section, idx) => (
                <AnimatedSection key={section.title}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-4">
                      <h3 className="">
                        {section.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="text-base leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F8FAFC] border-t border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <AnimatedSection>
            <div className="max-w-3xl mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Assurance</p>
              <h2 className="" >
                Privacy Request <span className="opacity-30 text-nowrap">Resolution</span>
              </h2>
            </div>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Submit Request", desc: "Contact us with details of your privacy request and relevant context." },
              { step: "02", title: "Verification", desc: "We verify request legitimacy before processing sensitive data actions." },
              { step: "03", title: "Resolution", desc: "We respond within a reasonable timeframe, subject to legal obligations." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-10 transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 group">
                  <div className="text-[10px] font-black text-blue-500/30 group-hover:text-blue-500 transition-colors duration-500 mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    STEP {item.step}
                  </div>
                  <h3 className="mb-3 tracking-tight" >{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}

