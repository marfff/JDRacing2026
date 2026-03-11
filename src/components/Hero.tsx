import { useEffect, useState } from "react";
import { Youtube, Instagram, Facebook } from "lucide-react";

import { driverStats } from "../data/driverStats";

// TikTok icon (not in lucide — custom SVG)
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
    </svg>
  );
}

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.round(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return <>{val}</>;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/james-hero-extended.jpeg)",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

      {/* Cyan accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #00F5FF 30%, #00F5FF 70%, transparent 100%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00F5FF 1px, transparent 1px), linear-gradient(90deg, #00F5FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-32">
        {/* Series tag */}
        <div
          className="mb-6 flex items-center gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.3s",
          }}
        >
          <div className="h-[1px] w-10 bg-[#00F5FF]" />
          <span className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase">
            Rotax Mini Max · 2026 Season
          </span>
        </div>

        {/* Name */}
        <h1
          className="mb-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <div
            className="text-[11px] tracking-[0.5em] text-white/65 uppercase mb-1"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Driver · #146
          </div>
          <div
            style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            <span className="text-white">JAMES</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "1px #00F5FF",
                color: "transparent",
              }}
            >
              DEVEREUX
            </span>
          </div>
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 text-white/80 text-sm tracking-widest uppercase max-w-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.6s",
          }}
        >
          {driverStats.hero.tagline}
        </p>

        {/* Key stats row */}
        <div
          className="mt-12 flex flex-wrap gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.8s",
          }}
        >
          {[
            { val: driverStats.careerStats.races, prefix: "", suffix: "+", label: "Competitive Races", sub: "Career starts" },
            { val: driverStats.careerStats.podiums, prefix: "", suffix: "", label: "Podiums", sub: "Top 3 finishes" },
            { val: driverStats.careerStats.championships, prefix: "", suffix: "", label: "Championships", sub: "Series titles" },
            { val: 23, prefix: "P", suffix: "", label: "Ranking 23rd out of 2,000+ UK Drivers", sub: "British Wera Minimax · 2025" },
          ].map((s) => (
            <div key={s.label} className="group">
              <div className="text-4xl font-bold text-[#00F5FF] tabular-nums tracking-tight" style={{ fontFamily: "'Courier New', monospace" }}>
                {s.prefix}
                <CountUp target={s.val} />
                {s.suffix}
              </div>
              <div className="text-[10px] tracking-[0.25em] text-white/60 uppercase mt-1">
                {s.label}
              </div>
              <div className="text-[11px] tracking-widest text-white/75 uppercase">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 flex gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 1.1s",
          }}
        >
          <a
            href="#meetings"
            className="inline-flex items-center gap-2 border border-[#00F5FF] text-[#00F5FF] text-[11px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#00F5FF] hover:text-[#080808] transition-all duration-200"
          >
            View Race Data
          </a>
          <a
            href="#season"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-[11px] tracking-[0.3em] uppercase px-6 py-3 hover:border-white/50 hover:text-white/80 transition-all duration-200"
          >
            2025 Season
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-30">
        <div className="text-[9px] tracking-[0.3em] uppercase text-white rotate-90 mb-2">Scroll</div>
        <div className="w-[1px] h-12 bg-white/40" />
      </div>
    </section>
  );
}
