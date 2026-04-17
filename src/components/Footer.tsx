// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-x-2 text-white">
              <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-emerald-400 rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <span className="font-semibold text-3xl tracking-[-1px]">APIHub</span>
              <span className="font-medium text-3xl tracking-[-1px] text-emerald-400">Solutions</span>
            </div>
            <p className="text-slate-400 text-sm mt-6 max-w-xs">
              Nairobi-based engineering studio building the digital infrastructure of Africa’s most ambitious companies.
            </p>
            <div className="mt-8 flex gap-x-6 text-slate-400">
              <a href="#" className="hover:text-white">𝕏</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="uppercase text-xs font-medium mb-5 text-slate-400">Company</div>
            <div className="flex flex-col gap-y-4 text-sm">
              <a href="#" className="hover:text-emerald-400">About Us</a>
              <a href="#" className="hover:text-emerald-400">Our Story</a>
              <a href="#" className="hover:text-emerald-400">Careers — We’re hiring</a>
              <a href="#" className="hover:text-emerald-400">Blog</a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="uppercase text-xs font-medium mb-5 text-slate-400">Solutions</div>
            <div className="flex flex-col gap-y-4 text-sm">
              <a href="#" className="hover:text-emerald-400">Fintech Platforms</a>
              <a href="#" className="hover:text-emerald-400">Insurance Core</a>
              <a href="#" className="hover:text-emerald-400">Property Tech</a>
              <a href="#" className="hover:text-emerald-400">Custom SaaS</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="uppercase text-xs font-medium mb-5 text-slate-400">Resources</div>
            <div className="flex flex-col gap-y-4 text-sm">
              <a href="#" className="hover:text-emerald-400">API Documentation</a>
              <a href="#" className="hover:text-emerald-400">Case Studies</a>
              <a href="#" className="hover:text-emerald-400">Security &amp; Compliance</a>
              <a href="#" className="hover:text-emerald-400">Contact Sales</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <div className="uppercase text-xs font-medium mb-5 text-slate-400">Get in touch</div>
            <a href="mailto:hello@apihub.solutions" className="block text-xl font-medium hover:text-emerald-300">
              hello@apihub.solutions
            </a>
            <a href="tel:+254712345678" className="block text-xl font-medium mt-1 hover:text-emerald-300">
              +254 712 345 678
            </a>
            <div className="mt-8 text-xs text-slate-400">
              Westlands, Nairobi<br />
              Kenya
            </div>
            <div className="mt-10 text-xs font-mono text-slate-500">© 2026 APIHub Solutions Ltd</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;