const BADGES = [
  "M-Pesa (Daraja) Certified",
  "Banking API Integration",
  "SMS / USSD Systems",
  "Secure Cloud Deployments",
];

export function TrustIndicators() {
  return (
    <section
      className="py-12 border-y border-slate-200 bg-slate-50/50"
      aria-label="Trust indicators"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {BADGES.map((label) => (
            <span
              key={label}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:opacity-80 transition-opacity duration-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
