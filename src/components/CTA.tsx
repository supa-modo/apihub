export default function CTA() {
  return (
    <section id="contact" className="bg-[#080E1A] py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Container with gradient border effect */}
        <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent">
          <div className="relative rounded-3xl bg-[#0D1526] px-10 py-16">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/8 rounded-full blur-[80px] pointer-events-none" />

            <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-4 relative z-10">
              Get Started
            </p>
            <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-6 relative z-10">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Next System?
              </span>
            </h2>
            <p className="text-slate-400 text-base font-['Inter'] leading-relaxed mb-10 max-w-xl mx-auto relative z-10">
              Let ApiHub Solutions design and build the software infrastructure your business needs — from payment
              integrations to full-scale platforms.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a
                href="mailto:hello@apihubsolutions.com"
                className="px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 font-['Inter'] flex items-center gap-2"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 3.5h11L7.5 8.5 2 3.5zm0 0v8h11V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Request Consultation
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-white/15 hover:border-white/25 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-white/5 font-['Inter'] flex items-center gap-2"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1A6.5 6.5 0 001 7.5c0 1.14.3 2.24.85 3.2L1 14l3.38-.83A6.5 6.5 0 107.5 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M5 5.5s.5-1 1.5 0l1 1s.5.5 0 1.5c-.3.6-1 1.5-1 1.5s1.5 2 4 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Response time note */}
            <p className="text-slate-600 text-xs font-['Inter'] mt-6 relative z-10">
              ⚡ We typically respond within 2 business hours · Based in Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Mini contact info strip */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-500 text-xs font-['Inter']">
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1a3.5 3.5 0 013.5 3.5C9.5 7 6 11 6 11S2.5 7 2.5 4.5A3.5 3.5 0 016 1z" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="6" cy="4.5" r="1" fill="currentColor"/>
            </svg>
            Nairobi, Kenya
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 3l5 3 5-3M1 3v6h10V3H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            hello@apihubsolutions.com
          </span>
        </div>
      </div>
    </section>
  );
}
