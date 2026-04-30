/** Shared catalog for Services grid and consultation booking dropdown - keep in sync */
export const SERVICES_CATALOG = [
  {
    title: "Web Platforms & Portals",
    description:
      "Customer portals, admin dashboards, SaaS products, and internal business platforms built around your exact workflows, roles, approvals, and reporting needs.",
    deliverables: [
      "Client and staff portals",
      "Workflow dashboards",
      "Role-based access and reporting",
    ],
    accent: "from-primary-600/15 to-secondary-600/10",
  },
  {
    title: "Mobile Field Apps",
    description:
      "Mobile apps for teams, customers, agents, and field operations where speed, offline tolerance, clean UX, and reliable backend syncing matter.",
    deliverables: [
      "Android and iOS apps",
      "Offline-first data capture",
      "Push alerts and account actions",
    ],
    accent: "from-secondary-600/15 to-primary-600/10",
  },
  {
    title: "API Architecture",
    description:
      "Secure APIs that expose the right business capabilities to apps, partners, payments, CRMs, ERPs, and reporting tools without fragile shortcuts.",
    deliverables: [
      "REST and GraphQL APIs",
      "OpenAPI documentation",
      "Authentication and rate limits",
    ],
    accent: "from-primary-700/15 to-secondary-500/10",
  },
  {
    title: "Cloud, DevOps & Reliability",
    description:
      "Production cloud setups with CI/CD, observability, backups, uptime practices, and deployment workflows that keep your software dependable after launch.",
    deliverables: [
      "CI/CD and environments",
      "Monitoring and backups",
      "Cloud cost and uptime controls",
    ],
    accent: "from-slate-700/10 to-primary-600/12",
  },
  {
    title: "System Integrations",
    description:
      "Integrations that connect payments, accounting, CRM, ERP, SMS, email, insurance, banking, and partner systems while preserving clean audit trails.",
    deliverables: [
      "ERP, CRM and payment links",
      "Data sync and reconciliation",
      "Webhook and job processing",
    ],
    accent: "from-secondary-600/12 to-primary-700/10",
  },
  {
    title: "Fintech & Payment Automation",
    description:
      "Payment collection, disbursement, reconciliation, wallet, subscription, and finance workflows for businesses that cannot afford unclear money movement.",
    deliverables: [
      "M-Pesa Daraja and bank APIs",
      "Payment allocation logic",
      "Finance dashboards and exports",
    ],
    accent: "from-primary-600/14 to-secondary-600/12",
  },
] as const;

export type ServiceTitle = (typeof SERVICES_CATALOG)[number]["title"];

export const CONSULTATION_SERVICE_OPTIONS: readonly string[] =
  SERVICES_CATALOG.map((s) => s.title);
