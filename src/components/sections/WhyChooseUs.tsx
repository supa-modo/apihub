const POINTS = [
  "API-first architecture",
  "Security & audit logging",
  "Production-grade deployments",
  "Long-term support contracts",
  "Kenyan infrastructure expertise",
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 border-t border-slate-200"
      aria-labelledby="why-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="why-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          Why Choose Us
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Engineering discipline, not vibes. We answer: &ldquo;Why not just hire a random developer?&rdquo;
        </p>
        <ul className="mt-8 space-y-4">
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-slate-700"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                aria-hidden
              />
              <span className="text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
