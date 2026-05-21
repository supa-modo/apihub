import React from "react";
import {
  TbClipboardSearch,
  TbCodeDots,
  TbDeviceAnalytics,
  TbRocket,
  TbRoute,
} from "react-icons/tb";

const steps = [
  {
    num: "01",
    title: "Discovery & audit",
    desc: "We map the business process, users, data sources, integrations, risks, and success metrics before writing code.",
    icon: TbClipboardSearch,
  },
  {
    num: "02",
    title: "Architecture & scope",
    desc: "You get the delivery plan: workflows, screens, API contracts, database shape, security controls, and release milestones.",
    icon: TbRoute,
  },
  {
    num: "03",
    title: "Build in usable releases",
    desc: "We ship working increments with demos, feedback loops, automated checks, and practical documentation as the system matures.",
    icon: TbCodeDots,
  },
  {
    num: "04",
    title: "Launch with confidence",
    desc: "Production rollout includes deployment, monitoring, backups, user handover, and checks for the workflows that matter most.",
    icon: TbRocket,
  },
  {
    num: "05",
    title: "Improve from real data",
    desc: "After launch, we refine performance, reporting, automation, and new modules based on how the team actually uses the product.",
    icon: TbDeviceAnalytics,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="bg-white lg:pt-10 pb-24 font-sora"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-2 text-[0.8rem] sm:text-sm font-bold text-primary-600">
              Our Delivery approach
            </p>
            <h2
              id="process-heading"
              className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-extrabold leading-tight tracking-tight text-slate-900  xl:text-[2.45rem]"
            >
              A practical path from idea to dependable software
            </h2>
          </div>
          <p className="max-w-xl text-[0.8rem] sm:text-sm leading-relaxed text-slate-600 md:text-base">
            Clear scope, visible progress, and launch discipline matter. This is
            how we reduce surprises while keeping momentum high.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.num}
                className="relative rounded-3xl border border-slate-200 bg-slate-50/80 p-5 transition-all hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-xl hover:shadow-primary-600/5"
              >
                <div className="mb-2 md:mb-4 lg:mb-5 flex items-center justify-between">
                  <span className="font-sora text-2xl sm:text-3xl font-extrabold text-slate-200">
                    {step.num}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-primary-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                </div>
                <h3 className="text-[0.9rem] sm:text-base font-extrabold leading-tight text-slate-900 lg:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.75rem] sm:text-[0.82rem] leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
