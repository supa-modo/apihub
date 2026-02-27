import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navClass = isScrolled
    ? "bg-white/95 backdrop-blur-sm shadow-sm text-slate-900"
    : "bg-transparent text-slate-900";

  const linkClass = isScrolled
    ? "text-slate-600 hover:text-slate-900"
    : "text-slate-700 hover:text-slate-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-slate-900"
            aria-label="Tech Solutions – Home"
          >
            Tech Solutions
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("process")}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              How We Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("use-cases")}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              Use Cases
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all duration-150 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Talk to an Engineer
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <span className="text-lg font-bold leading-none">×</span>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-200 bg-white py-4 px-4"
          id="mobile-menu"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("process")}
              className="text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              How We Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("use-cases")}
              className="text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Use Cases
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="text-left py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="mt-2 py-2.5 text-center text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              Talk to an Engineer
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
