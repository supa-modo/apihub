function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full h-auto max-h-[280px] text-slate-300"
      aria-hidden
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
      {/* Abstract boxes representing systems */}
      <rect x="20" y="40" width="70" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="55" y="72" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="500">API</text>
      <rect x="230" y="40" width="70" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="265" y="72" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="500">Pay</text>
      <rect x="125" y="120" width="70" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="160" y="152" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="500">Core</text>
      <rect x="20" y="180" width="70" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="55" y="205" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="500">DB</text>
      <rect x="230" y="180" width="70" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="265" y="205" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="500">Notify</text>
      {/* Connection lines */}
      <line x1="90" y1="65" x2="155" y2="120" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="230" y1="65" x2="195" y2="120" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="160" y1="170" x2="55" y2="180" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="160" y1="170" x2="265" y2="180" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 2" />
    </svg>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pt-24 lg:pb-20"
      aria-label="Hero"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-[fadeIn_0.6s_ease-out]">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-slate-900 tracking-tight leading-tight">
              Reliable API & Payment Integrations for Kenyan Businesses
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              We design, integrate, and maintain secure systems for payments,
              messaging, and automation—built for scale.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("cta")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                Talk to an Engineer
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-transparent border border-slate-300 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              >
                View Capabilities
              </button>
            </div>
          </div>
          <div className="hidden lg:block flex justify-center items-center animate-[fadeIn_0.6s_ease-out_0.2s_both]">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-8">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
