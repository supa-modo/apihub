import React from "react";
import {
  TbArrowRightToArc,
  TbClockCode,
  TbMailShare,
} from "react-icons/tb";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import { PiMapPinAreaDuotone } from "react-icons/pi";

const CTASection: React.FC = () => {
  const { openModal } = useConsultationModal();

  return (
    <section
      id="contact"
      className="font-sora relative overflow-hidden bg-slate-50 py-10 md:py-14 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-28 top-12 h-80 w-80 rounded-full bg-linear-to-br from-primary-100/90 to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-linear-to-tl from-secondary-100/80 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 text-center lg:px-12">
        <h2
          id="cta-heading"
          className="mx-auto max-w-3xl font-sora text-[1.7rem] md:text-[1.9rem] lg:text-[2.3rem] font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          Ready to launch your next{" "}
          <span className="bg-linear-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
            mission-critical
          </span>{" "}
          system?
        </h2>

        <p className="mx-auto mt-3 md:mt-4 lg:mt-5 max-w-3xl font-sora text-sm md:text-base leading-relaxed text-slate-600 lg:text-lg">
          Let&apos;s talk about your project. Your first 30-minute strategy call
          is always complimentary, no obligation.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <a
            href="mailto:hello@apihub.solutions?subject=Project%20inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 md:px-6 py-2.5 font-sora text-[0.83rem] md:text-sm lg:text-[0.9rem] font-semibold text-white shadow-lg transition-all hover:bg-primary-700 active:scale-95  md:py-3"
          >
            <span className="hidden md:block">Contact the team</span>
            <span className="block md:hidden">Contact Us</span>
            <TbArrowRightToArc className="h-5 w-5 shrink-0" aria-hidden />
          </a>
          <button
            type="button"
            onClick={openModal}
            className="rounded-full border-2 border-slate-600 px-5 py-2 font-sora text-[0.83rem] font-bold text-slate-800 transition-colors duration-300 hover:bg-slate-200 md:px-6 md:text-sm lg:text-[0.9rem] md:py-2.5"
          >
            Book Consultation Call
          </button>
        </div>

        <div className="mt-6 lg:mt-8 grid gap-3 lg:grid-cols-3 lg:gap-5">
          <div className="group flex gap-2 justify-between lg:gap-4 rounded-[1.3rem] lg:rounded-3xl border border-slate-200 bg-slate-50/80 p-4 lg:p-5 transition-colors hover:border-primary-200 hover:bg-white">
            <span className="flex h-10 lg:h-12 w-10 lg:w-12 shrink-0 items-center justify-center rounded-[0.6rem] lg:rounded-2xl bg-slate-200 text-slate-700">
              <TbMailShare className="h-6 w-6" aria-hidden />
            </span>
            <a href="mailto:hello@apihub.solutions" className="">
              <div className="min-w-0 text-left">
                <h3 className="font-sora text-[0.8rem] lg:text-[0.9rem] font-bold text-slate-500">
                  Email
                </h3>
                <p className="mt-0.5 text-xs lg:text-sm font-medium text-slate-900">
                  hello@apihub.solutions
                </p>
              </div>
            </a>
            <div className="w-px h-10 bg-slate-300" />

            <a href="tel:+254712345678" className="">
              <div className="min-w-0 text-left">
                <h3 className="font-sora text-xs lg:text-sm font-bold text-slate-500">
                  Phone
                </h3>
                <p className="mt-0.5 text-xs lg:text-sm font-medium text-slate-900">
                  +254 712 345 678
                </p>
              </div>
            </a>
          </div>

          <div className="group flex gap-6 lg:gap-6 rounded-[1.3rem] lg:rounded-3xl border border-slate-200 bg-slate-50/80 p-4 lg:p-5 transition-colors hover:border-primary-200 hover:bg-white">
            <span className="flex h-10 lg:h-12 w-10 lg:w-12 shrink-0 items-center justify-center rounded-[0.6rem] lg:rounded-2xl bg-slate-200 text-slate-700">
              <PiMapPinAreaDuotone className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="font-sora text-[0.8rem] lg:text-[0.9rem] text-start font-bold text-slate-500">
                Office Location
              </h3>
              <p className="mt-0.5 text-xs lg:text-sm font-medium text-slate-900">
                Westlands, Nairobi Kenya
              </p>
            </div>
          </div>

          <div className="group flex gap-6 lg:gap-6 rounded-[1.3rem] lg:rounded-3xl border border-slate-200 bg-slate-50/80 p-4 lg:p-5 transition-colors hover:border-primary-200 hover:bg-white">
            <span className="flex h-10 lg:h-12 w-10 lg:w-12 shrink-0 items-center justify-center rounded-[0.6rem] lg:rounded-2xl bg-slate-200 text-slate-700">
              <TbClockCode className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="font-sora text-[0.8rem] lg:text-[0.9rem] text-start font-bold text-slate-500">
                Mon–Fri, 9:00–18:00 EAT
              </h3>
              <p className="mt-0.5 text-xs lg:text-sm font-medium text-slate-900">
                Emergency support for partners
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-10 max-w-xl mx-auto font-sora border-t border-dashed border-slate-300 pt-6">
          <p className="text-[0.8rem] md:text-[0.84rem] lg:text-sm text-slate-600">
            Include your timeline and tech stack & we’ll connect you with the
            right engineer faster.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 right-8 select-none italic font-sora text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none text-slate-200/80"
        aria-hidden
      >
        API
      </div>
    </section>
  );
};

export default CTASection;
