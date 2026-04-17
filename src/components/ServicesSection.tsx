// ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 4L2 8l4 4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Blazing-fast, accessible web applications using React, Next.js, and modern frameworks.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native iOS &amp; Android apps and cross-platform React Native solutions with offline support.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'API Development',
      description: 'REST, GraphQL, and event-driven APIs with OpenAPI specs and enterprise security.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.502 5.502 0 00-10.78 2.22A4.5 4.5 0 003 15z" />
        </svg>
      ),
      title: 'Cloud &amp; DevOps',
      description: 'Kubernetes, Docker, CI/CD pipelines, and infrastructure as code on AWS, Azure &amp; GCP.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m5-2v-2c0-.656-.126-1.284-.356-1.852M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.852m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'System Integrations',
      description: 'Seamless ERP, CRM, and third-party platform connections with zero data loss.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3" />
        </svg>
      ),
      title: 'Fintech Solutions',
      description: 'M-Pesa, Stripe, Flutterwave, and custom payment gateways with PCI-DSS compliance.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <span className="px-4 py-2 text-xs font-mono tracking-[1px] bg-emerald-100 text-emerald-700 rounded-3xl">SERVICES</span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 mt-3">
              End-to-end digital craftsmanship
            </h2>
          </div>
          <a href="#contact" className="mt-6 lg:mt-0 text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-x-2 group">
            View full capability deck
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-100 hover:border-emerald-200 rounded-3xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="text-blue-600 group-hover:text-emerald-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-2xl mt-8 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 flex-1">{service.description}</p>
              <div className="h-px bg-slate-100 my-8 group-hover:bg-emerald-200 transition-colors" />
              <div className="text-xs font-medium flex items-center text-slate-400">
                Learn more
                <span className="flex-1 h-px bg-slate-200 mx-3" />
                <span className="text-emerald-500 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;