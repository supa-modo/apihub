// WhyChooseUs.tsx
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: '🏗️',
      title: 'Scalable Architecture',
      desc: 'Systems designed to grow from 100 to 10 million users without rework.',
    },
    {
      icon: '🔒',
      title: 'Enterprise-Grade Security',
      desc: 'SOC 2, ISO 27001, PCI-DSS, and continuous penetration testing.',
    },
    {
      icon: '⚡',
      title: 'Predictable Delivery',
      desc: 'Agile sprints with bi-weekly demos. Fixed timelines, transparent costs.',
    },
    {
      icon: '🌍',
      title: 'Modern Tech Stack',
      desc: 'TypeScript, Next.js, NestJS, Kubernetes, AI-ready infrastructure.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-emerald-600 font-medium">WHY APIHUB</span>
            <h2 className="text-5xl font-semibold tracking-tighter leading-none mt-3">
              Not just code.<br />Future-proof systems.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              We don’t build software — we engineer digital infrastructure that becomes a competitive advantage.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-6 bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-7 transition-all group">
                <div className="text-4xl">{reason.icon}</div>
                <div>
                  <h4 className="font-semibold text-xl">{reason.title}</h4>
                  <p className="text-slate-600 mt-2">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;