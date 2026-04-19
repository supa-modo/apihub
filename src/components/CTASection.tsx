import React from "react";
import { TbArrowRightToArc} from "react-icons/tb";

const CTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-10 md:py-14 lg:py-24"
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
          <a
            href="#services"
            className="rounded-full border-2 border-slate-600 px-5 md:px-6 py-2 font-sora text-[0.83rem] md:text-sm lg:text-[0.9rem] font-bold text-slate-800 transition-colors duration-300 hover:bg-slate-200 md:py-2.5"
          >
            Book Consultation Call
          </a>
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
