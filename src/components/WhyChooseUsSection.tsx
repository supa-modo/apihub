import React from "react";
import {
  TbShieldCheck,
  TbRocket,
  TbComponents,
  TbStackPop,
} from "react-icons/tb";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <TbStackPop />,
      title: "Scalable Architecture",
      desc: "Systems designed to grow from 100 to 10M users without rework.",
    },
    {
      icon: <TbShieldCheck />,
      title: "Enterprise Security",
      desc: "SOC 2 & PCI-DSS ready engineering with continuous testing.",
    },
    {
      icon: <TbRocket />,
      title: "Predictable Delivery",
      desc: "Agile sprints with bi-weekly demos and transparent costs.",
    },
    {
      icon: <TbComponents />,
      title: "Modern Tech Stack",
      desc: "Next.js, Go, Kubernetes, and AI-ready cloud infrastructure.",
    },
  ];

  return (
    <section className="lg:pt-10 pb-24 bg-white relative overflow-hidden">
      <div className="font-sora max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 border border-primary-600 text-primary-600 text-[0.7rem] md:text-xs font-bold mb-4 md:mb-5 lg:mb-6">
              Why Choose APIHub
            </div>
            <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-sora font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Not just code. <br />
              <span className="text-primary-600">Future-proof</span> systems.
            </h2>
            <p className="mt-4 lg:mt-6 text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
              We don’t just build software — we engineer digital infrastructure
              that becomes your unfair competitive advantage built for the
              future.
            </p>
            <div className="mt-10 pt-8 border-t border-dashed border-slate-500">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full font-sora bg-slate-900 flex items-center justify-center text-white font-bold italic">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold font-sora text-slate-900">
                    Engineering Excellence
                  </p>
                  <p className="text-xs text-slate-500">
                    Standardized across all projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="p-5 md:p-6 lg:p-7 rounded-4xl border border-primary-200 bg-primary-100/10 hover:bg-white hover:shadow-xl hover:shadow-primary-600/5 transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  {" "}
                  <div className="h-10 md:h-12 w-10 md:w-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-600 text-[1.35rem] md:text-2xl group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <h4 className="font-sora font-bold text-lg lg:text-xl text-slate-900">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
