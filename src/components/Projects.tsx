const projects = [
  {
    title: "WiFi Billing & Hotspot System",
    desc: "Automated hotspot authentication with M-Pesa payment integration. Customers pay and connect instantly — no human intervention.",
    tags: ["M-Pesa API", "Node.js", "Mikrotik", "PostgreSQL"],
    highlights: ["1,200+ daily sessions", "Zero manual billing", "Real-time usage tracking"],
    accent: "#5B5CF6",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 20h.01M2 8.82a15 15 0 0120 0M5 12.86A10 10 0 0119 12.86M8.5 16.429a5 5 0 017 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Medical Insurance Payment Platform",
    desc: "Daily automated cover payments for patients enrolled in micro-insurance schemes — integrated directly with insurer APIs and M-Pesa.",
    tags: ["Insurance API", "Payment Automation", "Express", "React"],
    highlights: ["5,000+ policies managed", "Automated daily deductions", "99.8% payment success rate"],
    accent: "#22C55E",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 6v4m0 4h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Property Management Platform",
    desc: "End-to-end tenant and rent management system with M-Pesa collections, automatic receipting, and landlord reporting dashboards.",
    tags: ["M-Pesa C2B", "React", "Node.js", "PDF Reports"],
    highlights: ["300+ units tracked", "Automated rent receipts", "Landlord & tenant portals"],
    accent: "#F59E0B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: "SACCO Loan Management System",
    desc: "Core banking module for SACCOs — member registration, loan applications, approval workflows, disbursement via bank API, and repayment tracking.",
    tags: ["Jenga API", "Loan Engine", "React", "TypeScript"],
    highlights: ["Member ledger system", "Automated disbursements", "Arrears detection engine"],
    accent: "#EF4444",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M12 7v2m0 6v2m-3-5h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M9 9.5s.5-1.5 3-1.5 3 1.5 3 1.5-0.5 2.5-3 2.5S9 9.5 9 9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0F172A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
              Case Studies
            </p>
            <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              Real Systems,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Real Impact
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-['Inter'] max-w-sm leading-relaxed">
            Every project we build solves a real business problem — not a demo, not a prototype.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/15 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 100% 0%, ${p.accent}0C 0%, transparent 70%)` }}
              />

              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: p.accent + "15", color: p.accent, border: `1px solid ${p.accent}25` }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-['Sora'] font-bold text-lg text-white leading-tight">{p.title}</h3>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-['Inter'] leading-relaxed mb-5">{p.desc}</p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-5">
                {p.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l2.5 2.5L10 3" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-slate-300 text-xs font-['Inter']">{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-['Inter'] font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
