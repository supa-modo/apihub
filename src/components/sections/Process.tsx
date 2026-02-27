const STEPS = [
  {
    number: "01",
    title: "Discovery & System Audit",
    description: "We map your current systems, constraints, and goals before writing code.",
  },
  {
    number: "02",
    title: "Secure Architecture Design",
    description: "API-first design, security considerations, and scalable structure.",
  },
  {
    number: "03",
    title: "Integration & Testing",
    description: "Build, test, and validate against your environments and workflows.",
  },
  {
    number: "04",
    title: "Monitoring & Support",
    description: "Ongoing monitoring, incident response, and long-term support.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-20 border-t border-slate-200"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="process-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          How We Work
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          A structured process that builds trust and reduces risk—from audit to go-live and beyond.
        </p>

        <div className="mt-12 hidden md:grid grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-lg border border-slate-200 p-6 hover:border-slate-400 transition-colors duration-200"
            >
              {index < STEPS.length - 1 && (
                <div
                  className="absolute top-1/2 -right-3 w-6 h-px bg-slate-200 group-hover:bg-slate-300 transition-colors hidden lg:block"
                  aria-hidden
                />
              )}
              <span className="text-xs font-medium text-slate-400 tracking-wider">
                {step.number}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:hidden space-y-0">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex gap-4">
              {index < STEPS.length - 1 && (
                <div
                  className="absolute left-[11px] top-8 bottom-0 w-px bg-slate-200"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-medium text-slate-600">
                {step.number}
              </div>
              <div className="flex-1 pb-10">
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
