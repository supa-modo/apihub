// SolutionsSection.tsx
import React from 'react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Insurance Systems',
      desc: 'Policy administration, claims automation, and real-time underwriting platforms.',
      emoji: '🛡️',
      color: 'blue',
    },
    {
      title: 'Property Management',
      desc: 'End-to-end tenant portals, rent collection, and facility maintenance SaaS.',
      emoji: '🏢',
      color: 'emerald',
    },
    {
      title: 'Fintech Platforms',
      desc: 'Digital wallets, lending engines, and cross-border payment solutions.',
      emoji: '💳',
      color: 'amber',
    },
    {
      title: 'SaaS Platforms',
      desc: 'Multi-tenant B2B platforms with usage-based billing and AI analytics.',
      emoji: '📦',
      color: 'violet',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-medium tracking-widest text-slate-400">INDUSTRIES WE POWER</span>
          <h2 className="text-4xl font-semibold tracking-tighter mt-2">Purpose-built solutions for complex industries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 group hover:ring-2 hover:ring-offset-4 hover:ring-emerald-200 transition-all"
            >
              <div className={`text-5xl mb-6 transition-transform group-hover:scale-110`}>{solution.emoji}</div>
              <h4 className="text-2xl font-semibold">{solution.title}</h4>
              <p className="mt-4 text-slate-600">{solution.desc}</p>
              <div className="mt-10 text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 flex items-center">
                Case study available
                <span className="ml-auto text-2xl text-emerald-300 group-hover:text-emerald-500">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;