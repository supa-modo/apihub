const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0A1020] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 4h2v8H3V4zm4-2h2v12H7V2zm4 4h2v4h-2V6z" fill="white" />
                </svg>
              </div>
              <span className="font-['Sora'] font-bold text-white text-[15px]">
                ApiHub <span className="text-indigo-400">Solutions</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm font-['Inter'] leading-relaxed max-w-xs">
              Custom Software & API Integrations built for African businesses. We build the systems that power your
              operations.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* Social placeholders */}
              {[
                { label: "GitHub", icon: "⌥" },
                { label: "LinkedIn", icon: "in" },
                { label: "Twitter", icon: "𝕏" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-['Inter'] font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-['Inter'] font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["API Integrations", "Custom Software", "Fintech Solutions", "Web & Mobile Apps", "Cloud Infrastructure"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm font-['Inter'] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-['Inter'] font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-slate-300 text-sm font-['Inter'] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1.5">
              <a
                href="mailto:hello@apihubsolutions.com"
                className="block text-slate-500 hover:text-slate-300 text-xs font-['Inter'] transition-colors"
              >
                hello@apihubsolutions.com
              </a>
              <p className="text-slate-600 text-xs font-['Inter']">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs font-['Inter']">
            © {year} ApiHub Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-600 text-xs font-['Inter']">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
