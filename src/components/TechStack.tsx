const stack = {
  Frontend: [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript", icon: "TS", color: "#3178C6", text: true },
    { name: "Tailwind CSS", icon: "💨", color: "#38BDF8" },
    { name: "Next.js", icon: "▲", color: "#FFFFFF", text: true },
  ],
  Backend: [
    { name: "Node.js", icon: "⬡", color: "#83CD29", text: true },
    { name: "Express", icon: "{}", color: "#68D391", text: true },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "Sequelize", icon: "S", color: "#52B0E7", text: true },
  ],
  Infrastructure: [
    { name: "AWS", icon: "☁", color: "#F59E0B", text: true },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "Nginx", icon: "N", color: "#009900", text: true },
    { name: "Linux", icon: "🐧", color: "#E2E8F0" },
  ],
};

export default function TechStack() {
  return (
    <section className="bg-[#080E1A] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-['Inter'] uppercase tracking-widest font-semibold mb-3">
            Technology
          </p>
          <h2 className="font-['Sora'] font-extrabold text-4xl lg:text-5xl text-white leading-tight">
            Our Tech Stack
          </h2>
          <p className="text-slate-400 text-base mt-4 font-['Inter'] max-w-xl mx-auto">
            Battle-tested tools chosen for reliability, performance, and developer ergonomics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-violet-600" />
                <h3 className="text-white font-['Sora'] font-bold text-base">{category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-200 group cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-black font-['Inter']"
                      style={{
                        background: item.color + "15",
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.text ? item.icon : <span className="text-base">{item.icon}</span>}
                    </div>
                    <span className="text-slate-300 text-sm font-['Inter'] font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle note */}
        <p className="text-center text-slate-600 text-xs font-['Inter'] mt-10">
          Plus REST, WebSockets, JWT, OAuth 2.0, Redis, and more as project needs demand.
        </p>
      </div>
    </section>
  );
}
