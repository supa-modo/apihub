/** Shared catalog for Services grid and consultation booking dropdown — keep in sync */
export const SERVICES_CATALOG = [
  {
    title: "Web Development",
    description:
      "Blazing-fast, accessible web applications using React, Next.js, and modern frameworks.",
    accent: "from-primary-600/15 to-secondary-600/10",
  },
  {
    title: "Mobile Apps",
    description:
      "Native iOS & Android apps and cross-platform React Native solutions with offline support.",
    accent: "from-secondary-600/15 to-primary-600/10",
  },
  {
    title: "API Development",
    description:
      "REST, GraphQL, and event-driven APIs with OpenAPI specs and enterprise security.",
    accent: "from-primary-700/15 to-secondary-500/10",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Kubernetes, Docker, CI/CD pipelines, and infrastructure as code on AWS, Azure & GCP.",
    accent: "from-slate-700/10 to-primary-600/12",
  },
  {
    title: "System Integrations",
    description:
      "Seamless ERP, CRM, and third-party platform connections with zero data loss.",
    accent: "from-secondary-600/12 to-primary-700/10",
  },
  {
    title: "Fintech Solutions",
    description:
      "M-Pesa, Paystack, Stripe, Flutterwave, and custom payment gateways with PCI-DSS compliance.",
    accent: "from-primary-600/14 to-secondary-600/12",
  },
] as const;

export type ServiceTitle = (typeof SERVICES_CATALOG)[number]["title"];

export const CONSULTATION_SERVICE_OPTIONS: readonly string[] =
  SERVICES_CATALOG.map((s) => s.title);
