import React from "react";
import {
  TbApiApp,
  TbArrowRightToArc,
  TbCloudComputing,
  TbCode,
  TbCreditCard,
  TbDeviceMobileBolt,
  TbPuzzle,
} from "react-icons/tb";
import { SERVICES_CATALOG } from "@/data/services";
import type { ServiceTitle } from "@/data/services";

const SERVICE_ICONS: Record<ServiceTitle, React.ReactNode> = {
  "Web Development": (
    <TbCode className="h-7 w-7" strokeWidth={1.5} />
  ),
  "Mobile Apps": (
    <TbDeviceMobileBolt className="h-7 w-7" strokeWidth={1.5} />
  ),
  "API Development": (
    <TbApiApp className="h-7 w-7" strokeWidth={1.5} />
  ),
  "Cloud & DevOps": (
    <TbCloudComputing className="h-7 w-7" strokeWidth={1.5} />
  ),
  "System Integrations": (
    <TbPuzzle className="h-7 w-7" strokeWidth={1.5} />
  ),
  "Fintech Solutions": (
    <TbCreditCard className="h-7 w-7" strokeWidth={1.5} />
  ),
};

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white pt-8 lg:pt-12 pb-14"
    >
      <div
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-linear-to-br from-primary-100/80 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-linear-to-tl from-secondary-100/70 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <div>
              <p className="font-sora text-lg text-slate-900 md:text-xl lg:text-2xl">
                We engineer modular digital systems designed for
                <span className="font-semibold text-slate-400">
                  {" "}
                  sustainable growth,{" "}
                </span>
                bridging the gap between
                <span className="bg-linear-to-r from-primary-700 to-secondary-600 bg-clip-text font-semibold text-transparent">
                  {" "}
                  complex business logic{" "}
                </span>
                and intuitive user experiences.
              </p>
            </div>

            <div className="mt-2 lg:col-span-3">
              <p className="font-sora text-sm text-slate-500 lg:text-base">
                Our approach focuses on the long-term maintainability of your
                stack, serving a strategic purpose in your product roadmap
                beyond just simple delivery.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border-2 border-secondary-600 px-6 py-2.5 font-sora text-[0.83rem] font-bold text-secondary-700 transition-all hover:bg-secondary-100 md:text-sm lg:self-auto"
          >
            <span>Discuss Your Stack With Us</span>
            <TbArrowRightToArc className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {SERVICES_CATALOG.map((service, i) => (
            <article
              key={service.title}
              className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/6 lg:p-6"
            >
              <span
                className="absolute right-6 top-6 font-sora text-4xl font-extrabold tabular-nums text-slate-100 transition-colors duration-300 group-hover:text-primary-100"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <div
                  className={`relative inline-flex w-fit rounded-2xl bg-linear-to-br ${service.accent} p-3 text-primary-700 ring-1 ring-slate-200/80 transition-transform duration-300 group-hover:scale-[1.02] group-hover:text-primary-800`}
                >
                  {SERVICE_ICONS[service.title]}
                </div>

                <h3 className="font-sora text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 font-sora text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">
                {service.description}
              </p>

              <div className="mt-4 border-t border-dashed border-slate-300 pt-3 lg:mt-5 lg:pt-4">
                <span className="inline-flex items-center gap-2 pl-2 font-sora text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                  Consult on This Service
                  <TbArrowRightToArc className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
