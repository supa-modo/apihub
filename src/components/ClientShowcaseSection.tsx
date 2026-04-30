import React from "react";
import {
  TbBuildingBank,
  TbBuildingCommunity,
  TbBuildingSkyscraper,
  TbChartBar,
  TbChecks,
  TbShieldCheck,
} from "react-icons/tb";

const clientWork = [
  {
    company: "Savanna Logistics Ltd",
    industry: "Logistics operations",
    summary:
      "Payment automation, daily reconciliation, account reporting, and operational dashboards for teams handling high-volume transactions.",
    outcomes: ["90% less manual reconciliation", "Finance visibility", "Audit-ready records"],
    icon: TbChartBar,
  },
  {
    company: "UrbanNest Properties",
    industry: "Property management",
    summary:
      "Tenant-facing rental workflows with M-Pesa collection, landlord statements, maintenance coordination, and real-time account status.",
    outcomes: ["M-Pesa rent collection", "Tenant portal", "Owner reporting"],
    icon: TbBuildingSkyscraper,
  },
  {
    company: "Furaha SACCO",
    industry: "SACCO lending",
    summary:
      "Loan application, review, approval, disbursement, repayment tracking, and member account workflows built to replace spreadsheet-heavy operations.",
    outcomes: ["Loan lifecycle system", "Member records", "Approval controls"],
    icon: TbBuildingBank,
  },
  {
    company: "Insurance & agency teams",
    industry: "Insurance operations",
    summary:
      "Policy administration, onboarding, premium tracking, claims workflows, and insurer integrations for agencies that need cleaner operations.",
    outcomes: ["Policy workflows", "Claims tracking", "Premium control"],
    icon: TbShieldCheck,
  },
  {
    company: "Growth-stage SMEs",
    industry: "Business process automation",
    summary:
      "Custom internal systems that connect sales, payments, customer support, approvals, and management reporting in one dependable workflow.",
    outcomes: ["Workflow automation", "Role-based access", "Executive reports"],
    icon: TbBuildingCommunity,
  },
];

const ClientShowcaseSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 py-14 font-sora md:py-16 lg:py-24"
      aria-labelledby="client-work-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-bold text-primary-600">
              Selected client work
            </p>
            <h2
              id="client-work-heading"
              className="text-[1.7rem] font-extrabold leading-tight tracking-tight text-slate-900 md:text-[2rem] lg:text-[2.45rem]"
            >
              Systems built for companies that run on{" "}
              <span className="text-secondary-600">accuracy, uptime, and trust</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            We build beyond screens. Each engagement is shaped around real
            operational pressure: payments that must reconcile, approvals that
            must be traceable, and data that leaders can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {clientWork.map((work) => {
            const Icon = work.icon;

            return (
              <article
                key={work.company}
                className="group flex min-h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 lg:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.68rem] font-bold text-slate-600">
                    {work.industry}
                  </span>
                </div>

                <h3 className="text-base font-extrabold tracking-tight text-slate-900 lg:text-lg">
                  {work.company}
                </h3>
                <p className="mt-3 flex-1 text-[0.83rem] leading-relaxed text-slate-600 lg:text-sm">
                  {work.summary}
                </p>

                <div className="mt-5 space-y-2 border-t border-dashed border-slate-300 pt-4">
                  {work.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-2 text-[0.75rem] font-semibold text-slate-700"
                    >
                      <TbChecks className="mt-0.5 h-4 w-4 shrink-0 text-secondary-600" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcaseSection;
