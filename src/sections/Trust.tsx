const integrations = [
  {
    name: "Safaricom M-Pesa",
    short: "Daraja API",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#00B300" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#00B300" fontSize="13" fontWeight="800" fontFamily="Inter">M</text>
      </svg>
    ),
    color: "#00B300",
  },
  {
    name: "Equity Jenga",
    short: "Banking API",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#D00000" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#D00000" fontSize="12" fontWeight="800" fontFamily="Inter">EQ</text>
      </svg>
    ),
    color: "#D00000",
  },
  {
    name: "KCB Buni",
    short: "Collection API",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#0057A8" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#0057A8" fontSize="11" fontWeight="800" fontFamily="Inter">KCB</text>
      </svg>
    ),
    color: "#0057A8",
  },
  {
    name: "Airtel Money",
    short: "Payments API",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#EF4444" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="800" fontFamily="Inter">AT</text>
      </svg>
    ),
    color: "#EF4444",
  },
  {
    name: "REST APIs",
    short: "HTTP/JSON",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#5B5CF6" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#5B5CF6" fontSize="9" fontWeight="800" fontFamily="Inter">API</text>
      </svg>
    ),
    color: "#5B5CF6",
  },
  {
    name: "Cloud Infra",
    short: "AWS / Linux",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect width="40" height="40" rx="8" fill="#F59E0B" opacity="0.15" />
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="800" fontFamily="Inter">AWS</text>
      </svg>
    ),
    color: "#F59E0B",
  },
];

export default function Trust() {
  return (
    <section className="bg-[#0F172A] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-slate-500 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-2">
            Trusted Integrations
          </p>
          <h2 className="text-white font-['Sora'] font-semibold text-xl">
            Built for Businesses That Need Reliable Systems
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-200 cursor-default"
            >
              {item.icon}
              <div className="text-center">
                <p className="text-white text-xs font-semibold font-['Inter'] leading-tight">{item.name}</p>
                <p className="text-slate-600 text-[10px] font-['Inter'] mt-0.5">{item.short}</p>
              </div>
              <div
                className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: item.color }}
              />
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
          {[
            { label: "Transactions Processed", value: "500K+", sub: "via payment APIs" },
            { label: "Uptime SLA", value: "99.9%", sub: "across deployed systems" },
            { label: "Integration Partners", value: "8+", sub: "Kenyan & global" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Sora'] font-extrabold text-3xl text-white">{s.value}</div>
              <div className="text-white/80 text-sm font-['Inter'] font-medium mt-1">{s.label}</div>
              <div className="text-slate-600 text-xs font-['Inter'] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
