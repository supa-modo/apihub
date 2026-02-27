import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              to="/"
              className="text-lg font-semibold text-slate-900"
              aria-label="Tech Solutions – Home"
            >
              Tech Solutions
            </Link>
            <p className="mt-2 text-sm text-slate-600">
              API & payment integrations for Kenyan businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Services
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    What We Do
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("process")}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    How We Work
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("cta")}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="mailto:hello@techsolutions.co.ke"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    hello@techsolutions.co.ke
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/techsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            © {currentYear} Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
