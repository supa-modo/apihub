import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TbArrowRightToArc, TbX } from "react-icons/tb";
import { CONSULTATION_SERVICE_OPTIONS } from "@/data/services";
import { useConsultationModal } from "@/context/ConsultationModalContext";

const EXIT_ANIMATION_MS = 350;

const ConsultationModal: React.FC = () => {
  const { isOpen, closeModal } = useConsultationModal();
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimatedOpen, setIsAnimatedOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Wait one extra paint so the browser commits the closed styles first.
      // This avoids "instant show" and improves enter smoothness.
      let raf2 = 0;
      const raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(() => {
          setIsAnimatedOpen(true);
        });
      });
      return () => {
        window.cancelAnimationFrame(raf1);
        if (raf2) window.cancelAnimationFrame(raf2);
      };
    }

    if (!shouldRender) {
      setIsAnimatedOpen(false);
      return;
    }

    setIsAnimatedOpen(false);
    const exitTimer = window.setTimeout(() => {
      setShouldRender(false);
    }, EXIT_ANIMATION_MS);

    return () => window.clearTimeout(exitTimer);
  }, [isOpen, shouldRender]);

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
      setContact("");
      setService("");
      setNotes("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;

    const subject = encodeURIComponent(`Consultation request — ${service}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email / Phone: ${contact}`,
        `Service: ${service}`,
        notes ? `Additional notes: ${notes}` : null,
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

  const node = shouldRender ? (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <div
        aria-hidden
        className={`consultation-modal-backdrop absolute inset-0 backdrop-blur-[2px] bg-slate-900/55 ${
          isAnimatedOpen ? "is-open" : ""
        }`}
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal
        aria-labelledby={titleId}
        className={`consultation-modal-panel font-sora relative z-10  w-full max-w-lg rounded-4xl border border-slate-200 bg-white shadow-2xl shadow-primary-900/10 ${
          isAnimatedOpen ? "is-open" : ""
        }`}
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

          <div className="relative px-6 pb-4 pt-6">
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

          <div className="relative px-4 lg:px-6 pb-4 md:pb-6 pt-2">
            {submitted ? (
              <div className="rounded-2xl border border-secondary-200 bg-secondary-50/80 px-4 py-6 text-center text-[0.8rem] lg:text-sm text-slate-700">
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
                    className="mb-1.5 pl-1.5 block font-sora text-[0.78rem] md:text-[0.8rem] lg:text-[0.85rem] font-semibold text-secondary-700"
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
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[0.8rem] lg:text-sm text-slate-900 outline-none transition-shadow focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-contact"
                    className="mb-1.5 pl-1.5 block font-sora text-[0.78rem] md:text-[0.8rem] lg:text-[0.85rem] font-semibold text-secondary-700"
                  >
                    Email and/or Phone *
                  </label>
                  <input
                    id="consult-contact"
                    name="contact"
                    type="text"
                    required
                    autoComplete="email tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[0.8rem] lg:text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                    placeholder="you@company.com, +254..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="consult-service"
                    className="mb-1.5 pl-1.5 block font-sora text-[0.78rem] md:text-[0.8rem] lg:text-[0.85rem] font-semibold text-secondary-700"
                  >
                    Service *
                  </label>
                  <select
                    id="consult-service"
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[0.8rem] lg:text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select a service…</option>
                    {CONSULTATION_SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="consult-notes"
                    className="mb-1.5 pl-1.5 block font-sora text-[0.78rem] md:text-[0.8rem] lg:text-[0.85rem] font-semibold text-secondary-700"
                  >
                    Additional notes{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="consult-notes"
                    name="notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-[0.8rem] lg:text-sm text-slate-900 outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-500"
                    placeholder="Any extra details, goals, timelines, or constraints..."
                  />
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
      </div>
    </div>
  ) : null;

  return typeof document !== "undefined"
    ? createPortal(node, document.body)
    : null;
};

export default ConsultationModal;
