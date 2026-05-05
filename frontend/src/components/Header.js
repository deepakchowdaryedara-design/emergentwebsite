import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import services from "../data/services";
import solutions from "../data/solutions";
import industries from "../data/industries";

const navLinks = [
  { label: "Home", href: "/" },
];

const servicesLinks = services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

const solutionsLinks = solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` }));

const industriesLinks = industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }));

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Technology Partners", href: "/partners" },
  { label: "Security", href: "/security" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Legal Templates", href: "/legal-templates" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const renderDesktopDropdown = (label, links, basePath) => {
    const isActive = location.pathname.startsWith(basePath);

    return (
      <div className="relative group">
        <button
          type="button"
          data-testid={`nav-link-${label.toLowerCase()}`}
          className={`inline-flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
            isActive ? "text-[#2563EB]" : "text-slate-600 group-hover:text-[#0B1B3D]"
          }`}
        >
          {label}
          <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
        </button>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-2 w-64 rounded-sm border border-slate-200 bg-white shadow-lg p-2 z-50 max-h-[70vh] overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-testid={`${label.toLowerCase()}-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                location.pathname === link.href
                  ? "text-[#2563EB] bg-blue-50"
                  : "text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header
      data-testid="header"
      className="sticky top-9 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200"
    >
      <div className="relative flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <Link
          to="/"
          data-testid="header-logo"
          className="relative z-10 text-xl font-extrabold tracking-tighter truncate max-w-[45%] sm:max-w-none"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: "#0B1B3D" }}
        >
          NeuralTrix AI
        </Link>

        <nav
          className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-4 xl:gap-6"
          aria-label="Main"
        >
          <div className="pointer-events-auto flex items-center gap-4 xl:gap-6">
            {navLinks.map((l) => (
              (() => {
                const isActive = l.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(l.href);

                return (
              <Link
                key={l.label}
                to={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-slate-600 hover:text-[#0B1B3D]"
                }`}
              >
                {l.label}
              </Link>
                );
              })()
            ))}
            {renderDesktopDropdown("Services", servicesLinks, "/services")}
            {renderDesktopDropdown("Solutions", solutionsLinks, "/solutions")}
            {renderDesktopDropdown("Industries", industriesLinks, "/industries")}
            {(() => {
              const companyActive = companyLinks.some((l) => location.pathname.startsWith(l.href));
              return (
                <div className="relative group">
                  <button
                    type="button"
                    data-testid="nav-link-company"
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                      companyActive ? "text-[#2563EB]" : "text-slate-600 group-hover:text-[#0B1B3D]"
                    }`}
                  >
                    Company
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-2 w-56 rounded-sm border border-slate-200 bg-white shadow-lg p-2 z-50">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        data-testid={`company-dropdown-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                        className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                          location.pathname.startsWith(link.href)
                            ? "text-[#2563EB] bg-blue-50"
                            : "text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}
            {(() => {
              const isActive = location.pathname.startsWith("/blog");
              return (
                <Link
                  to="/blog"
                  data-testid="nav-link-blog"
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive ? "text-[#2563EB]" : "text-slate-600 hover:text-[#0B1B3D]"
                  }`}
                >
                  Blog
                </Link>
              );
            })()}
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-end gap-2 shrink-0">
          <Button
            data-testid="header-cta-button"
            asChild
            className="hidden lg:inline-flex bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-4 xl:px-5 py-2 text-sm font-semibold"
          >
            <Link to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}>
              Contact us
            </Link>
          </Button>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#0B1B3D]"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-10 xl:px-14 pb-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-2">Services</p>
            {servicesLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-2">Solutions</p>
            {solutionsLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-2">Industries</p>
            {industriesLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider py-2">Company</p>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 pl-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
          >
            Blog
          </Link>
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm text-sm font-semibold"
          >
            <Link
              to={contactFormTo(location.pathname, CONTACT_TOPIC.CONTACT)}
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
