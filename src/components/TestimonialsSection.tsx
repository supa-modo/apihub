const testimonials = [
  {
    quote:
      "ApiHub built our payment automation system and reduced our reconciliation workload by over 90%. What used to take our accounts team 3 hours daily is now instant.",
    name: "James Mwangi",
    role: "Operations Director",
    company: "Savanna Logistics Ltd",
    initial: "J",
    color: "#5B5CF6",
  },
  {
    quote:
      "We needed M-Pesa integrated into our rental platform within two weeks. ApiHub delivered in 10 days, fully tested, with documentation. Genuinely impressive.",
    name: "Amina Odhiambo",
    role: "Founder",
    company: "UrbanNest Properties",
    initial: "A",
    color: "#22C55E",
  },
  {
    quote:
      "The SACCO loan system they built handles everything — applications, approvals, disbursements, and tracking. It replaced three manual spreadsheets.",
    name: "Peter Kariuki",
    role: "CEO",
    company: "Furaha SACCO",
    initial: "P",
    color: "#F59E0B",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0F172A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
            What Clients Say
          </p>
          <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight">
            Trusted by builders &{" "}
            <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              operators
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/4 hover:border-white/15 transition-all duration-300 flex flex-col group"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
              >
                <path
                  d="M0 30V18C0 8.059 5.372 2.275 16.117 0l1.766 3.529C12.941 5.098 10.196 8.039 9.412 12.353H16V30H0zm24 0V18c0-9.941 5.372-15.725 16.117-18L41.883 3.529C36.941 5.098 34.196 8.039 33.412 12.353H40V30H24z"
                  fill="white"
                />
              </svg>

              <p className="text-slate-300 text-sm font-['Inter'] leading-relaxed flex-1 mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Sora'] font-bold text-sm"
                  style={{ background: t.color + "25", color: t.color, border: `1px solid ${t.color}35` }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-['Inter']">{t.name}</p>
                  <p className="text-slate-500 text-xs font-['Inter']">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
