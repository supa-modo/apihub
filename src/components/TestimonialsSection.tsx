import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "ApiHub built our payment automation system and reduced our reconciliation workload by over 90%. What used to take our accounts team 3 hours daily is now instant.",
    name: "James Mwangi",
    role: "Operations Director",
    company: "Savanna Logistics Ltd",
    initial: "J",
    color: "#FFFFFF",
  },
  {
    quote:
      "We needed M-Pesa integrated into our rental platform within two weeks. ApiHub delivered in 10 days, fully tested, with documentation. Genuinely impressive.",
    name: "Amina Odhiambo",
    role: "Founder",
    company: "UrbanNest Properties",
    initial: "A",
    color: "#00FF00",
  },
  {
    quote:
      "The SACCO loan system they built handles everything — applications, approvals, disbursements, and tracking. It replaced three manual spreadsheets.",
    name: "Peter Kariuki",
    role: "CEO",
    company: "Furaha SACCO",
    initial: "P",
    color: "#F59E0B",
  },
];

type CardProps = {
  t: Testimonial;
  /** Fixed-height column for seamless vertical marquee */
  marqueeLayout?: boolean;
};

const TestimonialCard: React.FC<CardProps> = ({ t, marqueeLayout }) => (
  <div
    className={`group relative flex flex-col rounded-3xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/10 lg:rounded-4xl ${
      marqueeLayout ? "shrink-0" : "flex min-h-0 flex-1 flex-col"
    }`}
  >
    <svg
      className="absolute right-5 top-5 opacity-10 transition-opacity group-hover:opacity-20"
      width="40"
      height="30"
      viewBox="0 0 40 30"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 30V18C0 8.059 5.372 2.275 16.117 0l1.766 3.529C12.941 5.098 10.196 8.039 9.412 12.353H16V30H0zm24 0V18c0-9.941 5.372-15.725 16.117-18L41.883 3.529C36.941 5.098 34.196 8.039 33.412 12.353H40V30H24z"
        fill="white"
      />
    </svg>

    <p
      className={`relative z-10 mb-6 flex-1 text-sm leading-relaxed text-slate-300 ${
        marqueeLayout ? "line-clamp-7" : ""
      }`}
    >
      &ldquo;{t.quote}&rdquo;
    </p>

    <div className="flex shrink-0 items-center gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-sora text-sm font-bold"
        style={{
          background: `${t.color}25`,
          color: t.color,
          border: `1px solid ${t.color}35`,
        }}
      >
        {t.initial}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white">{t.name}</p>
        <p className="truncate text-xs text-slate-300">
          {t.role} · {t.company}
        </p>
      </div>
    </div>
  </div>
);

/** Mobile-only: infinite vertical marquee with top/bottom peek fades (Solutions-style depth) */
const TestimonialsMobileMarquee: React.FC = () => {
  const loop = [...testimonials, ...testimonials];

  return (
    <div
      className="relative md:hidden"
      aria-label="Client testimonials"
      role="region"
    >
      {/* Animated marquee — hidden when user prefers reduced motion */}
      <div className="motion-reduce:hidden">
        <div className="relative h-[min(440px,70vh)] overflow-hidden -mx-2.5">
          <div className="animate-marquee-y flex flex-col gap-4 py-2 hover:[animation-play-state:paused]">
            {loop.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} marqueeLayout />
            ))}
          </div>
        </div>
      </div>

      {/* Reduced motion: static list, no animation */}
      <div className="hidden flex-col gap-4 px-2 py-2 motion-reduce:flex">
        {testimonials.map((t, i) => (
          <TestimonialCard key={`static-${i}`} t={t} marqueeLayout />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/5 bg-linear-to-br from-primary-700 via-primary-600 to-secondary-700 pt-10 font-sora md:py-14 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 lg:mb-10 text-center">
          <p className="mb-1 text-sm font-semibold text-white lg:text-[0.9rem]">
            What Clients Say
          </p>
          <div className="mx-auto mb-3 h-px w-10 bg-white" />
          <h2 className="font-sora text-[1.7rem] md:text-[1.9rem] lg:text-[2.5rem] font-extrabold leading-tight text-white">
            Trusted by builders &{" "}
            <span className="bg-linear-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
              operators
            </span>
          </h2>
        </div>

        {/* Small screens: vertical marquee + peek fades */}
        <TestimonialsMobileMarquee />

        {/* md+: unchanged 3-column grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
