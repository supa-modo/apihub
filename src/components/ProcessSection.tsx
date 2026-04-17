// ProcessSection.tsx
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep-dive workshops, stakeholder alignment, technical audit' },
    { num: '02', title: 'Design', desc: 'Architecture blueprints, UI/UX prototypes, API contracts' },
    { num: '03', title: 'Development', desc: 'Agile sprints, automated testing, continuous integration' },
    { num: '04', title: 'Deployment', desc: 'Zero-downtime rollout, infrastructure provisioning, monitoring setup' },
    { num: '05', title: 'Support', desc: '24/7 SRE support, performance optimization, feature evolution' },
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-4xl font-semibold tracking-tighter">Our proven 5-step delivery process</h2>
          <div className="hidden sm:flex items-center text-xs font-medium uppercase text-emerald-600">
            <div className="h-px w-12 bg-emerald-300" />
            <span className="px-6">Average time-to-value: 9 weeks</span>
            <div className="h-px w-12 bg-emerald-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {/* Connecting line on large screens */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-300 to-transparent z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-3xl p-8 z-10 hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between">
                <div className="font-mono text-5xl font-semibold text-emerald-100 group-hover:text-emerald-200 transition-colors">
                  {step.num}
                </div>
                <div className="text-emerald-600 text-4xl">→</div>
              </div>
              <h4 className="text-2xl font-semibold mt-6">{step.title}</h4>
              <p className="text-slate-600 mt-3 text-[15px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;