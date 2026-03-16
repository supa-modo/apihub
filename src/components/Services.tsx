const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h16M3 11h10M3 16h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="15.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19.5 18l2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "API Integrations",
    description: "Connect your business to payment gateways, banking systems, and third-party platforms with bulletproof reliability.",
    tags: ["M-Pesa Daraja", "Bank APIs", "Payment Gateways", "Logistics APIs"],
    accent: "#5B5CF6",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 19h8M11 17v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 9l3 3-3 3M12 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom Software Development",
    description: "Tailored business systems that fit your exact operations — from HR platforms to complex management dashboards.",
    tags: ["Payroll Systems", "HR Platforms", "ERP Systems", "Admin Dashboards"],
    accent: "#22C55E",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 7v4c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L11 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Fintech Solutions",
    description: "Secure digital finance systems that automate collections, manage wallets, and deliver real-time transaction insights.",
    tags: ["Payment Automation", "Wallet Systems", "Transaction Tracking", "Reconciliation"],
    accent: "#F59E0B",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="7" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="15" r="1" fill="currentColor" />
        <circle cx="17" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Web & Mobile Apps",
    description: "Scalable, fast, and intuitive applications — SaaS platforms, customer portals, and modern admin systems.",
    tags: ["SaaS Platforms", "Customer Portals", "PWAs", "Admin Panels"],
    accent: "#EF4444",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 5v5c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 10v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Cloud Infrastructure",
    description: "Robust cloud deployments with monitoring, auto-scaling, and enterprise-grade security on AWS and Linux servers.",
    tags: ["AWS", "Docker", "Nginx", "CI/CD Pipelines"],
    accent: "#06B6D4",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "System Integration & Automation",
    description: "Connect disparate systems and automate workflows — from data pipelines to multi-platform event-driven architectures.",
    tags: ["Webhooks", "Event Queues", "Data Sync", "Workflow Automation"],
    accent: "#A855F7",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#080E1A] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
            What We Build
          </p>
          <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight">
            Services built for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              serious systems
            </span>
          </h2>
          <p className="text-slate-400 text-base mt-4 font-['Inter'] leading-relaxed">
            From payment integrations to full-stack platforms, we deliver software that businesses depend on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.045] hover:border-white/15 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 0% 0%, ${s.accent}0D 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 duration-200"
                style={{ background: s.accent + "18", color: s.accent, border: `1px solid ${s.accent}30` }}
              >
                {s.icon}
              </div>

              <h3 className="font-['Sora'] font-bold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm font-['Inter'] leading-relaxed mb-4">{s.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] px-2 py-0.5 rounded-full font-['Inter'] font-medium"
                    style={{
                      background: s.accent + "14",
                      color: s.accent,
                      border: `1px solid ${s.accent}25`,
                    }}
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
