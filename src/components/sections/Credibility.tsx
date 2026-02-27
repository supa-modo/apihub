const TECH_BADGES = [
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "AWS / GCP",
];

export function Credibility() {
  return (
    <section
      className="py-20 border-t border-slate-200 bg-slate-50/30"
      aria-labelledby="credibility-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="credibility-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          Technical Credibility
        </h2>
        <blockquote className="mt-6 text-lg font-medium text-slate-800 leading-relaxed max-w-2xl">
          &ldquo;We don&apos;t just integrate APIs. We design systems that survive production.&rdquo;
        </blockquote>
        <p className="mt-6 text-slate-600 max-w-2xl">
          Tech stack, environments, monitoring philosophy, and documentation—what CTOs and founders care about.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {TECH_BADGES.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-10 space-y-2 text-sm text-slate-600">
          <li>• Environments: staging and production with clear promotion paths</li>
          <li>• Monitoring & uptime: alerts, logs, and incident response</li>
          <li>• Documentation & handover: so your team can own it long-term</li>
        </ul>
      </div>
    </section>
  );
}
