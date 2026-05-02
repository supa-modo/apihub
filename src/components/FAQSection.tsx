import React from "react";

const faqs = [
  {
    question: "What type of software does APIHub build?",
    answer:
      "APIHub builds custom web platforms, mobile apps, API integrations, fintech payment systems, insurance workflows, property management systems, SACCO platforms, and internal business automation tools.",
  },
  {
    question: "Do you integrate M-Pesa and bank payment APIs?",
    answer:
      "Yes. We work on M-Pesa Daraja, payment collection, disbursement, reconciliation, allocation logic, finance dashboards, and bank or third-party payment integrations for Kenyan and African businesses.",
  },
  {
    question: "Can you modernize an existing system instead of rebuilding it?",
    answer:
      "Yes. We can audit existing software, stabilize the most important workflows, add APIs, improve reporting, clean up deployment pipelines, and gradually replace weak modules without disrupting daily operations.",
  },
  {
    question: "Which industries do you understand best?",
    answer:
      "Our strongest delivery experience is in fintech, insurance, property operations, SACCO and lending workflows, logistics, business process automation, and data-heavy operational systems.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section
      className="bg-slate-50 lg:pt-10 py-10 md:pb-16 lg:pb-24 font-sora"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="mb-4 max-w-3xl md:mb-10 lg:mb-6">
          <p className="text-sm font-bold text-primary-600">
            Common project questions
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-[1.3rem] font-extrabold tracking-tight text-slate-900 md:text-[1.5rem] lg:text-[1.75rem]"
          >
            FAQs about building with APIHub
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6"
            >
              <h3 className="text-base font-extrabold text-slate-900 lg:text-lg">
                {faq.question}
              </h3>
              <p className="mt-3 text-[0.83rem] leading-relaxed text-slate-600 md:text-sm">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
