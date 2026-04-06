import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between h-16">
        <Link
          to="/"
          data-testid="header-logo"
          className="text-xl font-extrabold tracking-tighter"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: "#0B1B3D" }}
        >
          NeuralTrix AI
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith(l.href)
                  ? "text-[#2563EB]"
                  : "text-slate-600 hover:text-[#0B1B3D]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            data-testid="header-cta-button"
            asChild
            className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-5 py-2 text-sm font-semibold"
          >
            <Link to={location.pathname === "/" ? "/#contact" : "/contact"}>Talk to AI Experts</Link>
          </Button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-[#0B1B3D]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-slate-200 px-6 pb-6">
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
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm text-sm font-semibold"
          >
            <Link to="/" onClick={() => setMobileOpen(false)}>Talk to AI Experts</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
