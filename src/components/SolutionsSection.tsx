import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TbArrowRightToArc } from "react-icons/tb";

type Solution = {
  title: string;
  desc: string;
  tag: string;
  image: string;
};

const solutions: Solution[] = [
  {
    title: "Agency & Brokerage ",
    desc: "Automate policy administration, claims processing, and real-time underwriting with AI-driven risk assessment tools built for the modern insurance landscape.",
    tag: "Insurance",
    image: "/insurance.webp",
  },
  {
    title: "Property Management",
    desc: "End-to-end tenant portals, automated rent collection, and facility maintenance SaaS platforms that streamline operations for large scale real estate portfolios.",
    tag: "Proptech",
    image:
      "/property.webp",
  },
  {
    title: "Payment Solutions",
    desc: "M-Pesa, Paystack, Stripe, Bank APIs, and custom payment gateways with PCI-DSS compliance.",
    tag: "Fintech",
    image: "/payment.webp",
  },
  {
    title: "Enterprise Systems",
    desc: "Multi-tenant B2B platforms featuring usage-based billing, advanced AI analytics, and scalable cloud infrastructure designed for global performance.",
    tag: "Corporate",
    image:
      "/enterprise.webp",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const COLLAPSED_DESC_H = "3rem";

// ─── Desktop Card ────────────────────────────────────────────────────────────

const DesktopSolutionCard: React.FC<{ sol: Solution; cardId: string }> = ({
  sol,
  cardId,
}) => {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="relative h-[480px] cursor-default overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg"
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.85 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-labelledby={`${cardId}-title`}
    >
      <motion.img
        src={sol.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        initial={false}
        animate={{
          scale: hovered ? 1.08 : 1.03,
          opacity: hovered ? 0.72 : 0.6,
        }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.85, ease: easeOut }
        }
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/95" />

      <motion.div
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.55, ease: easeOut }
        }
      />

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <motion.span
          className="mb-3 -ml-1 inline-block w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide font-sora font-bold text-white backdrop-blur-md"
          initial={false}
          animate={{ y: hovered ? 0 : 4 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 190, damping: 32, mass: 0.85 }
          }
        >
          {sol.tag}
        </motion.span>

        <motion.h4
          id={`${cardId}-title`}
          className="mb-3 font-sora text-[1.4rem] font-bold leading-tight text-white"
          initial={false}
          animate={{ y: hovered ? 0 : 2 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 190, damping: 32, mass: 0.85 }
          }
        >
          {sol.title}
        </motion.h4>

        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: hovered ? "auto" : COLLAPSED_DESC_H }}
          transition={
            reduceMotion ? { duration: 0 } : { damping: 32, mass: 0.85 }
          }
        >
          <motion.p
            className="font-sora text-[0.83rem] leading-relaxed text-slate-300"
            initial={false}
            animate={{ opacity: hovered ? 1 : 0.85 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.35, ease: easeOut }
            }
          >
            {sol.desc}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10"
        initial={false}
        animate={{
          borderColor: hovered
            ? "rgba(59,130,246,0.35)"
            : "rgba(255,255,255,0.1)",
          boxShadow: hovered
            ? "0 25px 50px -12px rgba(37,99,235,0.18)"
            : "0 10px 15px -3px rgba(0,0,0,0.08)",
        }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOut }
        }
      />
    </motion.article>
  );
};

// ─── Mobile Carousel ─────────────────────────────────────────────────────────

/**
 * The carousel uses a physics-based drag with snap-to-index.
 * Peek cards scale up as they approach center — exactly like SwiftUI's
 * scaledToFill carousel. We drive everything from a single MotionValue `x`
 * so there's no stutter.
 */

const CARD_GAP = 8; // px gap between cards

interface CarouselCardProps {
  sol: Solution;
  onClick?: () => void;
  isActive: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  sol,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`carousel-mobile-card relative h-full w-full shrink-0 overflow-hidden rounded-4xl bg-slate-900 ${
        isActive ? "is-active" : ""
      }`}
      style={{ cursor: isActive ? "default" : "pointer" }}
    >
      <img
        src={sol.image}
        alt=""
        aria-hidden
        draggable={false}
        className="carousel-mobile-image pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/20 to-black/95" />
      <div className="carousel-mobile-overlay absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content — only fully visible on active */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
        <div
          className={`carousel-mobile-content flex flex-col ${
            isActive ? "is-active" : ""
          }`}
        >
          <span className="mb-3 inline-block w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs tracking-wide font-sora font-bold text-white backdrop-blur-md">
            {sol.tag}
          </span>

          <h4 className="mb-2.5 font-sora text-[1.2rem] font-bold leading-tight text-white sm:text-2xl">
            {sol.title}
          </h4>

          <p className="line-clamp-3 text-[0.8rem] leading-relaxed text-slate-300 sm:text-sm">
            {sol.desc}
          </p>
        </div>
      </div>

      {/* Border ring */}
      <div className="carousel-mobile-ring pointer-events-none absolute inset-0 rounded-4xl" />
    </div>
  );
};

const SolutionsCarousel: React.FC<{ items: Solution[] }> = ({ items }) => {
  const n = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Drag state
  const dragStartX = useRef(0);

  const go = useCallback((next: number) => setIndex(((next % n) + n) % n), [n]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(id);
  }, [paused, index, go]);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed track */}
      <div
        className="relative overflow-hidden"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
        aria-label="Industry solutions carousel"
        role="region"
      >
        {/* The sliding track */}
        <div
          className={`solutions-carousel-track flex touch-pan-y select-none ${
            isDragging ? "is-dragging" : ""
          }`}
          onPointerDown={(e) => {
            setIsDragging(true);
            setPaused(true);
            dragStartX.current = e.clientX;
            setDragOffset(0);
          }}
          onPointerMove={(e) => {
            if (!isDragging) return;
            setDragOffset(e.clientX - dragStartX.current);
          }}
          onPointerUp={(e) => {
            if (!isDragging) return;
            setIsDragging(false);
            setPaused(false);
            const delta = e.clientX - dragStartX.current;
            if (delta < -48) go(index + 1);
            else if (delta > 48) go(index - 1);
            setDragOffset(0);
          }}
          onPointerCancel={() => {
            setIsDragging(false);
            setPaused(false);
            setDragOffset(0);
          }}
          onPointerLeave={() => {
            if (!isDragging) return;
            setIsDragging(false);
            setPaused(false);
            setDragOffset(0);
          }}
          style={{
            gap: `${CARD_GAP}px`,
            padding: `0 ${PEEK_SIZE}px`,
            transform: `translate3d(calc(${-index} * (100vw - ${PEEK_SIZE * 2}px + ${CARD_GAP}px) + ${dragOffset}px), 0, 0)`,
          }}
        >
          {items.map((sol, i) => {
            const dist = i - index;
            const isActive = dist === 0;

            return (
              <div
                key={sol.title}
                className="shrink-0"
                style={{
                  width: `calc(100vw - ${PEEK_SIZE * 2 }px)`,
                  height: "min(450px, 70vh)",
                }}
              >
                <CarouselCard
                  sol={sol}
                  isActive={isActive}
                  onClick={isActive ? undefined : () => go(i)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center ">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show solution ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
            className="touch-manipulation rounded-full p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <span
              className={`carousel-mobile-dot block h-2 rounded-full ${
                i === index ? "is-active bg-primary-600" : "bg-slate-400/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Peek constants — defined outside component so CarouselCard can reference them
const PEEK_SIZE = 50; // px of side card visible

// ─── Section ─────────────────────────────────────────────────────────────────

const SolutionsSection: React.FC = () => (
  <section id="solutions" className="bg-white lg:pt-8 pb-20 lg:pb-24">
    <div className="font-sora mx-auto max-w-360 px-6 lg:px-12">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row lg:items-start lg:mb-12 lg:gap-6">
        <div className="max-w-2xl">
          <h2 className="font-sora text-[1.6rem] font-extrabold leading-tight tracking-tight text-slate-900 md:text-[1.7rem] lg:text-[1.8rem]">
            Purpose-built solutions for <br />
            <span className="text-secondary-600">complex industries</span>
          </h2>
        </div>
        <p className="flex items-center text-sm font-medium text-slate-500">
          <span className="mr-2 h-6 w-1.5 rounded-full bg-primary-600" />
          Customized frameworks for high-growth sectors.
        </p>
      </div>

      {/* Desktop grid */}
      <div className="hidden gap-4 lg:grid lg:grid-cols-4">
        {solutions.map((sol, i) => (
          <DesktopSolutionCard
            key={sol.title}
            sol={sol}
            cardId={`solution-card-${i}`}
          />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="lg:hidden">
        <SolutionsCarousel items={solutions} />
      </div>

      {/* Bottom strip */}
      <div className="mt-10 md:mt-12 lg:mt-14 flex flex-col font-sora items-center justify-between gap-6 border-t border-dashed border-slate-400 pt-10 lg:flex-row">
        <p className="max-w-xl text-center text-sm text-slate-600 sm:text-left">
          Need a blended engagement? We often combine{" "}
          <span className="font-semibold text-slate-800">
            API + cloud + integrations
          </span>{" "}
          in a single delivery squad.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3 font-sora text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-700 active:scale-95"
        >
          Start a Project With Us
          <TbArrowRightToArc className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

export default SolutionsSection;
