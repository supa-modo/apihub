import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowRightToArc, TbX } from "react-icons/tb";
import { CONSULTATION_SERVICE_OPTIONS } from "@/data/services";
import { useConsultationModal } from "@/context/ConsultationModalContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

const ConsultationModal: React.FC = () => {
  const { isOpen, closeModal } = useConsultationModal();
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setService("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;

    const subject = encodeURIComponent(
      `Consultation request — ${service}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Service: ${service}`,
        "",
        "Sent from APIHub Solutions website consultation form.",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:hello@apihub.solutions?subject=${subject}&body=${body}`;
    setSubmitted(true);
    window.setTimeout(() => {
      closeModal();
    }, 2500);
  };

  const node = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            onClick={closeModal}
          />

          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            className="font-sora relative z-10 w-full max-w-lg rounded-4xl border border-slate-200 bg-white shadow-2xl shadow-primary-900/10"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <div className="relative overflow-hidden rounded-3xl">
            <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 shrink-0 rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    aria-label="Close"
                  >
                    <TbX className="h-4 w-4" />
                  </button>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary-50/90 via-white to-secondary-50/40" />
        
              <div className="relative border-b border-slate-100 px-6 pb-4 pt-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 shadow-sm">
                  <span className="h-3.5 w-[0.3rem] rounded-full bg-amber-600" />
                  <span className="font-sora text-[0.72rem] md:text-xs lg:text-sm[0.82rem] font-semibold text-slate-600">
                    Book a consultation
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h2
                    id={titleId}
                    className="font-sora text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl"
                  >
                    Tell us about{" "}
                    <span className="bg-linear-to-r from-primary-700 via-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      your project
                    </span>
                  </h2>
                 
                </div>
                <p className="mt-2 text-[0.8rem] md:text-sm text-slate-600">
                  We&apos;ll reply within one business day. Fields marked * are
                  required.
                </p>
              </div>

              <div className="relative px-4 lg:px-6 pb-6 pt-2">
                {submitted ? (
                  <div className="rounded-2xl border border-secondary-200 bg-secondary-50/80 px-4 py-6 text-center text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">
                      Opening your email client…
                    </p>
                    <p className="mt-2 text-slate-600">
                      If nothing opens, email{" "}
                      <a
                        href="mailto:hello@apihub.solutions"
                        className="font-medium text-primary-600 underline-offset-2 hover:underline"
                      >
                        hello@apihub.solutions
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="consult-name"
                        className="mb-1.5 pl-1.5 block font-sora text-[0.85rem] font-semibold text-secondary-700"
                      >
                        Full name *
                      </label>
                      <input
                        id="consult-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-shadow focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="consult-email"
                        className="mb-1.5 pl-1.5 block font-sora text-[0.85rem] font-semibold text-secondary-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="consult-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="consult-phone"
                        className="mb-1.5 pl-1.5 block font-sora text-[0.85rem] font-semibold text-secondary-700"
                      >
                        Your Phone <span className="font-normal text-slate-500">(optional)</span>
                      </label>
                      <input
                        id="consult-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                        placeholder="+254 …"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="consult-service"
                        className="mb-1.5 pl-1.5 block font-sora text-[0.85rem] font-semibold text-secondary-700"
                      >
                        Service *
                      </label>
                      <select
                        id="consult-service"
                        name="service"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="">Select a service…</option>
                        {CONSULTATION_SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-3 pt-2 justify-end">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-fit rounded-full border border-slate-600 bg-white px-8 py-2 lg:py-2.5 font-sora text-[0.83rem] lg:text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-fit flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-2.5 font-sora text-[0.83rem] lg:text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-700 active:scale-[0.98]"
                      >
                        Submit request
                        <TbArrowRightToArc className="h-5 w-5" aria-hidden />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== "undefined"
    ? createPortal(node, document.body)
    : null;
};

export default ConsultationModal;
