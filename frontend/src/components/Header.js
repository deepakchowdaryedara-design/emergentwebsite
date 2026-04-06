import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between h-16">
        <a
          href="#hero"
          data-testid="header-logo"
          className="text-xl font-extrabold tracking-tighter"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", color: "#0B1B3D" }}
        >
          NeuralTrix AI
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-slate-600 hover:text-[#0B1B3D] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            data-testid="header-cta-button"
            asChild
            className="bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm px-5 py-2 text-sm font-semibold"
          >
            <a href="#contact">Talk to AI Experts</a>
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
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-[#0B1B3D] border-b border-slate-100"
            >
              {l.label}
            </a>
          ))}
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm text-sm font-semibold"
          >
            <a href="#contact" onClick={() => setMobileOpen(false)}>Talk to AI Experts</a>
          </Button>
        </div>
      )}
    </header>
  );
}
