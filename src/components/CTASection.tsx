// CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 bg-linear-to-r from-slate-900 to-emerald-900 text-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-5xl lg:text-6xl font-semibold tracking-tighter max-w-2xl mx-auto">
          Ready to launch your next mission-critical system?
        </h2>
        <p className="mt-6 text-xl text-white/70 max-w-md mx-auto">
          Let’s talk about your project. First 30-minute strategy call is always complimentary.
        </p>

        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-x-4 bg-white text-slate-900 px-12 h-16 rounded-3xl text-2xl font-medium hover:bg-emerald-300 transition-all active:scale-95"
        >
          Contact the team
          <span className="text-4xl">↗</span>
        </a>

        <div className="mt-8 text-xs uppercase tracking-widest font-medium text-white/40">
          Average response time • 11 minutes
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-12 text-[180px] text-white/10 pointer-events-none select-none">API</div>
    </section>
  );
};

export default CTASection;