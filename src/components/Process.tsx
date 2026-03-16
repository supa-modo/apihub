const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start by understanding your business — goals, constraints, stakeholders, and technical environment. No assumptions, just clarity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 9h4M9 7v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#5B5CF6",
    duration: "1–3 days",
  },
  {
    number: "02",
    title: "Architecture",
    desc: "We design the system architecture — databases, API contracts, integrations, and security layers before writing a single line of code.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    color: "#22C55E",
    duration: "2–5 days",
  },
  {
    number: "03",
    title: "Development",
    desc: "Iterative backend development with daily updates. We build robust, tested APIs, integrations, and user interfaces sprint-by-sprint.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 8l-3 2 3 2M15 8l3 2-3 2M11 5l-2 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#F59E0B",
    duration: "1–6 weeks",
  },
  {
    number: "04",
    title: "Deployment",
    desc: "Zero-downtime deployments on secure cloud infrastructure. SSL, reverse proxies, process managers, and automated health checks included.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l8 4v8l-8 4-8-4V6l8-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10 2v14M2 6l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    color: "#06B6D4",
    duration: "1–2 days",
  },
  {
    number: "05",
    title: "Support",
    desc: "Ongoing monitoring, bug fixes, performance tuning, and feature upgrades. We stay with you as your system grows.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7.5 7.5a2.5 2.5 0 015 0c0 2-2.5 2.5-2.5 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="14.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    color: "#A855F7",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="bg-[#080E1A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
            How We Work
          </p>
          <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight">
            Our Development{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-slate-400 text-base mt-4 font-['Inter']">
            A proven 5-step approach that delivers predictable, reliable results every time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Number orb */}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: step.color + "15",
                    border: `1px solid ${step.color}35`,
                    boxShadow: `0 0 30px ${step.color}10`,
                  }}
                >
                  <div style={{ color: step.color }}>{step.icon}</div>
                  <span
                    className="absolute -top-2 -right-2 text-[10px] font-black font-['Inter'] w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: step.color, color: "white" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <p className="font-['Sora'] font-bold text-base text-white mb-2">{step.title}</p>
                <p className="text-slate-500 text-xs font-['Inter'] leading-relaxed mb-3">{step.desc}</p>

                <span
                  className="text-[10px] font-bold font-['Inter'] px-2 py-0.5 rounded-full"
                  style={{
                    color: step.color,
                    background: step.color + "15",
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
