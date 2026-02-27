import { useState, type FormEvent } from "react";

export function CTA() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // API stub: replace with your endpoint or email service
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormData({ name: "", email: "", company: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="cta"
      className="py-20 border-t border-slate-200 bg-slate-50/50"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="text-2xl font-semibold text-slate-900 tracking-tight"
        >
          Get in Touch
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl">
          Schedule a technical call or request a system review. No long forms, no spam.
        </p>

        <div className="mt-10 max-w-xl">
          {status === "success" && (
            <p className="mb-6 text-sm font-medium text-accent-600">
              Thanks. We&apos;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mb-6 text-sm font-medium text-red-600">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="cta-name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="cta-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-colors"
                placeholder="Your name"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="cta-email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-colors"
                placeholder="you@company.com"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="cta-company" className="block text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                id="cta-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-colors"
                placeholder="Company name"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label htmlFor="cta-message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="cta-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 transition-colors resize-y"
                placeholder="Brief description of what you need..."
                disabled={status === "submitting"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Schedule a Technical Call"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
