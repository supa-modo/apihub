import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";
import { TbArrowRightToArc } from "react-icons/tb";

const Footer: React.FC = () => {
  return (
    <footer className="font-sora relative overflow-hidden border-t border-dashed border-slate-200 bg-white pt-20 pb-12">
      <div
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-linear-to-br from-primary-50 to-transparent blur-3xl opacity-90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-16 flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Brand */}
          <div className="relative">
            <img
              src="/logo2.png"
              alt="APIHub Solutions"
              className="mb-4 h-16 -ml-2 w-auto"
            />
            <p className="max-w-sm text-[0.85rem] md:text-sm leading-relaxed text-slate-600">
              Engineering world-class digital systems for the next generation of
              global businesses.
            </p>
            <div className=" flex items-center gap-2 md:order-2 mt-4">
              <span className="font-sora text-[0.83rem] lg:text-sm font-semibold text-secondary-600">
                Follow Us:
              </span>
              <a
                href="#"
                className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-colors  hover:bg-primary-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-colors  hover:bg-primary-600 hover:text-white"
                aria-label="GitHub"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-colors  hover:bg-primary-600 hover:text-white"
                aria-label="X"
              >
                <SiX className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-between">
            {/* Capabilities → #services */}
            <div>
              <h5 className="mb-4 md:mb-5 lg:mb-6 font-sora text-base lg:text-lg font-bold text-slate-900">
                Capabilities
              </h5>
              <ul className="space-y-3 text-[0.8rem] md:text-sm text-slate-600">
                {[
                  "Web applications",
                  "Mobile engineering",
                  "API architecture",
                  "Cloud strategy",
                ].map((label) => (
                  <li key={label}>
                    <a
                      href="#services"
                      className="transition-colors hover:text-primary-600"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions / explore → #solutions */}
            <div>
              <h5 className="mb-4 md:mb-5 lg:mb-6 font-sora text-base lg:text-lg font-bold text-slate-900">
                Solutions
              </h5>
              <ul className="space-y-3 text-[0.8rem] md:text-sm text-slate-600">
                <li>
                  <a
                    href="#solutions"
                    className="transition-colors hover:text-primary-600"
                  >
                    Industry solutions overview
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="transition-colors hover:text-primary-600"
                  >
                    Fintech & insurance
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="transition-colors hover:text-primary-600"
                  >
                    Proptech & operations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-primary-600"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA card — matches Services-style shell */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-4 md:p-5 lg:p-6 shadow-sm backdrop-blur-sm md:max-w-1/3 md:justify-self-end ">
            <h5 className="mb-2 pl-1.5 font-sora text-base lg:text-lg font-bold text-slate-900">
              Ready to build?
            </h5>
            <p className="mb-4 md:mb-5 lg:mb-6 text-[0.8rem] md:text-sm leading-relaxed text-slate-600">
              Let&apos;s discuss your next technical challenge — we&apos;ll
              reply within one business day.
            </p>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 font-sora text-[0.83rem] lg:text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-700"
            >
              Book a consultation
              <TbArrowRightToArc className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-200 pt-10 md:flex-row md:items-center">
          <p className="order-1 text-xs text-slate-500 md:order-1">
            &copy; {new Date().getFullYear()} APIHub Solutions Ltd. All rights
            reserved.
          </p>

          {/* privacy policy link */}
          <div className="order-3 text-center text-xs text-secondary-600 underline underline-offset-2 font-semibold md:text-right">
            <a href="#" className="hover:text-primary-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
