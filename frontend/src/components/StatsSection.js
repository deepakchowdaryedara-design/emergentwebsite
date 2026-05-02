import React from 'react';
import { ArrowUpRight, Zap, Target, Shield, Cpu, Activity, TrendingUp } from 'lucide-react';

const stats = [
  {
    value: "2x",
    label: "Velocity",
    desc: "AI reviews and intelligent testing doubles engineering speed.",
    icon: Zap,
    gridClass: "lg:col-span-8 lg:row-span-2",
    theme: "blue"
  },
  {
    value: "10x",
    label: "Faster Deployments",
    desc: "Automated CI/CD pipelines accelerate cycles.",
    icon: Activity,
    gridClass: "lg:col-span-4 lg:row-span-1",
    theme: "indigo"
  },
  {
    value: "99.9%",
    label: "Uptime",
    desc: "Predictive maintenance guarantees stability.",
    icon: Shield,
    gridClass: "lg:col-span-4 lg:row-span-1",
    theme: "blue"
  },
  {
    value: "150+",
    label: "Systems Deployed",
    desc: "Enterprise solutions engineered and scaled.",
    icon: Cpu,
    gridClass: "lg:col-span-6 lg:row-span-2",
    theme: "dark"
  },
  {
    value: "55%",
    label: "Efficiency",
    desc: "Reduces manual testing overhead.",
    icon: Target,
    gridClass: "lg:col-span-3 lg:row-span-2",
    theme: "blue"
  },
  {
    value: "60%",
    label: "Cost Reduction",
    desc: "AI agents refactor legacy code.",
    icon: TrendingUp,
    gridClass: "lg:col-span-3 lg:row-span-2",
    theme: "indigo"
  },
];

export default function StatsSection() {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-[#0B1B3D] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Cinematic Header */}
        <div className="mb-10 border-l border-white/10 pl-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-300">
              Operating model
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-white mb-6">
            Outcomes <span className="text-white/40 italic">Architected</span>
          </h2>
          <p className="text-blue-100/60 text-lg max-w-2xl font-light leading-relaxed">
            Every engagement is engineered to deliver quantifiable operational gains rooted in real-world ROI and technical excellence.
          </p>
        </div>

        {/* Asymmetrical Kinetic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:auto-rows-[160px]">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-all duration-700 hover:bg-white/[0.07] hover:border-white/20 ${s.gridClass}`}
              >
                {/* Massive Animated Background Number */}
                <div className="absolute -bottom-8 -right-8 text-white/[0.03] font-black text-[12rem] leading-none select-none tracking-tighter group-hover:text-white/[0.05] transition-all duration-700 group-hover:scale-110">
                  {s.value.replace('%', '').replace('+', '').replace('x', '')}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-3 rounded-sm ${s.theme === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                        s.theme === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                          'bg-white/10 text-white/70'
                      }`}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-blue-400 transition-colors duration-500" size={20} />
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                        {s.value}
                      </span>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
                        {s.label}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[280px] font-medium group-hover:text-white/70 transition-colors">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Interactive Scanline Effect */}
                <div
                  className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent transition-transform group-hover:translate-y-full"
                  style={{ transitionDuration: "1.5s" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


