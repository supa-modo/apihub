const USE_CASES = [
  {
    title: "SMEs & Startups",
    problem: "You need payments and automation without a full IT team.",
    solution: "We integrate M-Pesa, banking, and messaging so you can focus on growth.",
  },
  {
    title: "Schools & Institutions",
    problem: "Fees, statements, and parent communication are manual and error-prone.",
    solution: "Payments, SMS/email notifications, and reconciliation in one flow.",
  },
  {
    title: "SACCOs & Fintechs",
    problem: "Compliance and scale require robust APIs and audit trails.",
    solution: "API-first architecture, security, and production-grade deployments.",
  },
  {
    title: "Property & Utilities",
    problem: "Rent, bills, and meter data need reliable collection and reporting.",
    solution: "Payment collection, dashboards, and integration with existing systems.",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-20 border-t border-slate-200 bg-slate-50/30"
      aria-labelledby="use-cases-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="use-cases-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          Use Cases & Industries
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          We help visitors self-identify. Each sector has specific problems we solve with integration and automation.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {USE_CASES.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors duration-200"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Problem:</span>{" "}
                {item.problem}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">Solution:</span>{" "}
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
