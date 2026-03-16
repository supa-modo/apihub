import { useEffect, useState } from "react";

const endpoints = [
  { method: "POST", path: "/mpesa/stkpush", color: "#22C55E" },
  { method: "POST", path: "/equity/jenga/transfer", color: "#5B5CF6" },
  { method: "GET",  path: "/kcb/buni/balance", color: "#F59E0B" },
  { method: "POST", path: "/airtel/collection", color: "#EF4444" },
  { method: "GET",  path: "/transaction/reconcile", color: "#22C55E" },
];

export default function Hero() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    endpoints.forEach((_, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), 400 + i * 280);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-indigo-300 text-xs font-medium font-['Inter'] tracking-wider uppercase">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-['Sora'] font-extrabold text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
                Custom Software &{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                    API Integrations
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 5.5C50 1.5 100 7 150 4.5C200 2 250 6.5 299 3.5"
                      stroke="url(#ul)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="ul" x1="0" x2="300" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                That Power Modern Businesses
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-['Inter']">
                ApiHub Solutions builds secure fintech integrations, automated payment systems, and scalable web
                applications for startups and enterprises across Africa.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 font-['Inter'] flex items-center gap-2"
              >
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-white/5 font-['Inter']"
              >
                View Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2 border-t border-white/5">
              {[
                { label: "API Integrations", value: "15+" },
                { label: "Systems Deployed", value: "12+" },
                { label: "Client Satisfaction", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-['Sora'] font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-['Inter'] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — API terminal card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#0D1526] shadow-2xl shadow-black/50 overflow-hidden">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#111827]">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-slate-500 text-xs font-['Inter'] font-medium">
                  apihub-solutions — api-gateway
                </span>
              </div>

              {/* Endpoints */}
              <div className="p-5 space-y-3 font-['IBM_Plex_Mono',_monospace]">
                {endpoints.map((ep, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      visible.includes(i)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <span
                      className="text-[11px] font-bold px-1.5 py-0.5 rounded font-['Inter']"
                      style={{ color: ep.color, background: ep.color + "1A", border: `1px solid ${ep.color}33` }}
                    >
                      {ep.method}
                    </span>
                    <span className="text-slate-300 text-sm">{ep.path}</span>
                    {visible.includes(i) && (
                      <span className="ml-auto text-xs text-green-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        200
                      </span>
                    )}
                  </div>
                ))}

                <div className="pt-2 border-t border-white/8 mt-3">
                  <div className="text-slate-600 text-xs font-['Inter']">
                    <span className="text-indigo-400">const</span> gateway ={" "}
                    <span className="text-green-400">ApiHub</span>.connect()
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-slate-600 text-xs">▶</span>
                    <span className="text-xs text-slate-400 font-['Inter']">All systems operational</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-auto" />
                  </div>
                </div>
              </div>

              {/* Bottom badge strip */}
              <div className="border-t border-white/8 px-5 py-3 flex items-center gap-4 bg-[#111827]">
                {["M-Pesa", "Jenga", "Buni"].map((b) => (
                  <span key={b} className="text-xs text-slate-500 font-['Inter'] font-medium">
                    {b}
                  </span>
                ))}
                <span className="ml-auto text-xs text-slate-600 font-['Inter']">v2.4.1</span>
              </div>
            </div>

            {/* Floating info card */}
            <div className="mt-4 flex items-center gap-3 bg-[#111827]/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3 3 7-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-semibold font-['Inter']">Payment system deployed</p>
                <p className="text-slate-500 text-xs font-['Inter']">M-Pesa STK Push — 2 mins ago</p>
              </div>
              <span className="ml-auto text-green-400 text-xs font-['Inter'] font-bold">+KES 12,400</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
