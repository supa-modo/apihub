const apis = [
  {
    name: "M-Pesa Daraja API",
    desc: "STK Push, C2B, B2C, B2B, Reversals, Account Balance",
    status: "Production",
    statusColor: "#22C55E",
    logo: "M",
    logoColor: "#00B300",
  },
  {
    name: "Equity Jenga API",
    desc: "Fund Transfers, Account Statements, KYC Verification",
    status: "Production",
    statusColor: "#22C55E",
    logo: "EQ",
    logoColor: "#D00000",
  },
  {
    name: "KCB Buni API",
    desc: "Collections, Disbursements, Float Management",
    status: "Production",
    statusColor: "#22C55E",
    logo: "KCB",
    logoColor: "#0057A8",
  },
  {
    name: "Payment Automation",
    desc: "Scheduled Payments, Retry Logic, Webhook Processing",
    status: "Custom Build",
    statusColor: "#5B5CF6",
    logo: "PA",
    logoColor: "#5B5CF6",
  },
  {
    name: "Financial Reconciliation",
    desc: "Daily Reconciliation, Error Detection, Audit Trails",
    status: "Custom Build",
    statusColor: "#5B5CF6",
    logo: "FR",
    logoColor: "#F59E0B",
  },
];

export default function Specialization() {
  return (
    <section id="solutions" className="bg-[#0F172A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
              Our Specialization
            </p>
            <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-6">
              Experts in Payment &{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Banking Integrations
              </span>
            </h2>
            <p className="text-slate-400 text-base font-['Inter'] leading-relaxed mb-8">
              We help businesses automate collections, payouts, reconciliations, and financial reporting. Our team
              has deep experience working with Kenya's core financial infrastructure.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Automated Collections",
                  desc: "Set up recurring payments and real-time collection notifications.",
                },
                {
                  title: "Smart Disbursements",
                  desc: "Batch payouts, agent payments, and scheduled transfers.",
                },
                {
                  title: "Reconciliation Engines",
                  desc: "Match transactions across platforms, flag discrepancies automatically.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold font-['Inter']">{item.title}</p>
                    <p className="text-slate-500 text-sm font-['Inter'] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — API list */}
          <div className="space-y-3">
            {apis.map((api, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-200 group"
              >
                {/* Logo circle */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-['Inter'] text-[10px] font-black"
                  style={{ background: api.logoColor + "18", color: api.logoColor, border: `1px solid ${api.logoColor}30` }}
                >
                  {api.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold font-['Inter']">{api.name}</p>
                  <p className="text-slate-500 text-xs font-['Inter'] mt-0.5 truncate">{api.desc}</p>
                </div>

                <span
                  className="text-[10px] font-bold font-['Inter'] px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    color: api.statusColor,
                    background: api.statusColor + "18",
                    border: `1px solid ${api.statusColor}30`,
                  }}
                >
                  {api.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
