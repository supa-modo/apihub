import React, { useEffect, useState } from "react";
import { TbArrowRightToArc, TbBrandReactNative } from "react-icons/tb";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiLinux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiFlutter,
  SiDart,
  SiNextdotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useConsultationModal } from "@/context/ConsultationModalContext";

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Active Clients", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 95, suffix: "%" },
];

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiDart, name: "Dart" },
  { icon: TbBrandReactNative, name: "React Native" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: FaAws, name: "AWS" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiLinux, name: "Linux" },
];

const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const HeroSection: React.FC = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col justify-center lg:h-[82vh] pt-10 lg:pt-24">
      {/* === DESKTOP BACKGROUND IMAGE === */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute top-0 right-0 h-full w-[75%] bg-no-repeat bg-contain bg-right"
          style={{
            backgroundImage: `url('/herodemo.png')`,
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-white/50 via-transparent to-white/50" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 w-full py-16 lg:py-0">
        <div className="w-full lg:max-w-3xl">
          {/* HEADLINE */}
          <h1 className="mb-3 md:mb-4 lg:mb-6 text-[1.7rem] md:text-4xl lg:text-6xl font-sora font-extrabold tracking-tight text-slate-900 leading-tight">
            Building Smarter Digital
            <br />
            <span className="bg-linear-to-r from-blue-700 to-green-600 bg-clip-text text-transparent">
              Systems That Power
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="bg-linear-to-r from-slate-800 via-slate-700 to-blue-800 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          {/* CARD */}
          <div className="lg:max-w-2xl">
            <p className="text-sm md:text-base lg:text-lg text-slate-800 font-sora leading-relaxed mb-6">
              Our team architects scalable software platforms, from fintech
              payment solutions to enterprise grade systems engineered for
              performance, security, and long-term growth.
            </p>

            {/* CTA */}
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <button
                type="button"
                onClick={openModal}
                className="flex flex-row items-center gap-2 rounded-full bg-primary-600 px-6 py-2 font-sora text-[0.83rem] font-semibold text-white shadow-lg transition-all hover:bg-primary-700 active:scale-95 md:px-8 md:py-3 md:text-sm lg:px-10"
              >
                <span>Start a Project</span>
                <TbArrowRightToArc className="h-5 w-5" />
              </button>

              <a
                href="#services"
                className="rounded-full border-2 border-slate-600 px-6 py-2 font-sora text-[0.8rem] font-bold transition-colors duration-300 hover:bg-slate-200 md:py-2.5 md:text-sm lg:px-8"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* === STATS === */}
          <div className="mt-6 grid grid-cols-3 gap-4 lg:max-w-lg border-t border-dashed border-slate-400 pt-4">
            {stats.map((stat, i) => {
              const count = useCountUp(stat.value);

              return (
                <div key={i} className="text-center group">
                  <p className="text-base md:text-lg lg:text-xl font-sora font-extrabold text-slate-900 transition-transform duration-300 group-hover:scale-105">
                    {count}
                    {stat.suffix}
                  </p>
                  <p className="text-[0.7rem] md:text-[0.83rem] lg:text-sm font-sora text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
          {/* === TECH MARQUEE === */}
          <div className="mt-8 lg:mt-10 lg:max-w-176 -mx-4 relative overflow-hidden">
            {/* Fade edges (premium touch) */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-2 md:gap-4 lg:gap-6">
              {[...techStack, ...techStack].map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 md:py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:bg-slate-100 transition"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[0.7rem] lg:text-xs font-medium">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* === MOBILE IMAGE (NEW) === */}
      <div className="relative lg:hidden -mt-15 w-full">
        <div
          className="w-full h-[320px] md:h-[620px] bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/herodemo.png')`,
          }}
        />

        {/* linear blend (top fade into content) */}
        <div className="absolute inset-0 bg-linear-to-t from-white/60 via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
