import { useInView } from "react-intersection-observer";
import { driverStats } from "../data/driverStats";

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="border border-white/10 p-6 hover:border-[#00F5FF]/30 transition-colors duration-300"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.5s ease",
      }}
    >
      <div className="text-[9px] tracking-[0.3em] text-white/65 uppercase mb-2">{label}</div>
      <div
        className="text-3xl font-bold text-[#00F5FF] tabular-nums"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {value}
      </div>
      {sub && <div className="text-[11px] tracking-widest text-white/75 uppercase mt-1">{sub}</div>}
    </div>
  );
}

export default function SeasonStory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const s = driverStats.season2025;

  return (
    <section id="season" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-[#00F5FF]" />
            <span className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase">
              Season Analysis
            </span>
          </div>
          <h2
            className="text-white mb-2"
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            2025 Campaign
          </h2>
          <div className="h-[1px] w-full bg-white/5 mt-6 mb-12" />
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story */}
          <div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif", fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              {s.story}
            </p>
            <p
              className="text-white/65 text-sm leading-relaxed"
              style={{ fontFamily: "'Georgia', serif", lineHeight: 1.8 }}
            >
              {driverStats.hero.subBio}
            </p>

            {/* Highlight pill */}
            <div className="mt-8 inline-flex items-center gap-3 border border-[#00F5FF]/20 px-4 py-2">
              <div className="w-1.5 h-1.5 bg-[#00F5FF] rounded-full" />
              <span className="text-[10px] tracking-[0.3em] text-[#00F5FF] uppercase">
                Foundation is set · 2026 the year
              </span>
            </div>

            {/* Podium photo */}
            <div className="mt-8 relative overflow-hidden" style={{aspectRatio:'16/9'}}>
              <img
                src="/images/james-podium-p2.jpeg"
                alt="James Devereux P2 podium finish"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <span className="text-[10px] tracking-[0.3em] text-[#00F5FF] uppercase">P2 · Trophy Finish · 2025</span>
              </div>
            </div>

            {/* Mini Max class profile */}
            <div className="mt-10 border border-white/8 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-4 bg-[#00F5FF]/60" />
                <span className="text-[10px] tracking-[0.35em] text-[#00F5FF]/80 uppercase font-medium">
                  Class Profile — Rotax Mini Max
                </span>
              </div>
              <p className="text-white/75 text-[12px] leading-relaxed mb-5">
                Mini Max is the stepping stone from Micro Max — more power, higher speeds,
                and a step up in competition. With significant torque on tap, throttle
                control and smoothness are the keys to being fast. The category where
                raw talent meets racecraft.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Engine", value: "Rotax 125cc", sub: "~13 horsepower" },
                  { label: "Top Speed", value: "~62 mph", sub: "~100 km/h" },
                  { label: "Chassis", value: "950mm", sub: "Cadet wheelbase" },
                  { label: "Key Skill", value: "Throttle", sub: "Control & consistency" },
                ].map((item) => (
                  <div key={item.label} className="border border-white/5 px-3 py-2.5">
                    <div className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-1">{item.label}</div>
                    <div className="text-[13px] font-bold text-white font-mono">{item.value}</div>
                    <div className="text-[10px] text-white/60 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Career Races" value={`${driverStats.careerStats.races}+`} sub="Competitive starts" />
            <StatCard label="Podiums" value={String(driverStats.careerStats.podiums)} sub="Top 3 finishes" />
            <StatCard label="Fastest Laps" value={String(driverStats.careerStats.fastestLaps)} sub="Track records set" />
            <StatCard label="Championships" value={String(driverStats.careerStats.championships)} sub="Series titles" />
            <StatCard label="P23 of 2,000+ UK Drivers" value="P23" sub="British Wera Minimax · 2025" />
            <StatCard label="Best Finish 2025" value={s.bestFinish} sub="Forest Edge & Daytona" />
          </div>
        </div>
      </div>
    </section>
  );
}
