import { Card } from "@/components/ui/Card";

const SERVICES = [
  {
    title: "Payment & Banking Integrations",
    description: "M-Pesa (Daraja, STK, B2C, C2B), banking and fintech APIs, automated reconciliation.",
    bullets: [
      "M-Pesa STK Push, B2C, C2B",
      "Banking & fintech APIs",
      "Automated reconciliation",
    ],
  },
  {
    title: "Messaging & Notifications",
    description: "SMS, USSD, and email automation for alerts and workflows.",
    bullets: [
      "SMS & USSD gateways",
      "Email automation",
      "Alert & workflow design",
    ],
  },
  {
    title: "System Architecture",
    description: "API design, microservices, and scalable infrastructure.",
    bullets: [
      "API-first design",
      "Microservices & APIs",
      "Scalable infrastructure",
    ],
  },
  {
    title: "Custom Software",
    description: "Web apps, dashboards, and internal tools built for your workflows.",
    bullets: [
      "Web applications",
      "Dashboards & reporting",
      "Internal tools",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          What We Do
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Clear, technical services—no sales fluff. We build and maintain systems that move money and data reliably.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <h3 className="text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-slate-400 mt-0.5">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
