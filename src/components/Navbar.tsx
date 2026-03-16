import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Solutions", "Projects", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 4h2v8H3V4zm4-2h2v12H7V2zm4 4h2v4h-2V6z" fill="white" />
              </svg>
            </div>
            <span className="font-['Sora'] font-700 text-white text-[15px] tracking-tight">
              ApiHub <span className="text-indigo-400">Solutions</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-white text-[13.5px] font-medium tracking-wide transition-colors duration-200 font-['Inter']"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-[13px] font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg hover:from-indigo-400 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 font-['Inter'] tracking-wide"
            >
              Request Consultation
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-white text-sm py-2 border-b border-white/5 font-['Inter']"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg text-center font-['Inter']"
            onClick={() => setMenuOpen(false)}
          >
            Request Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
