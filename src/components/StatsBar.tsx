export default function StatsBar() {
  const items = [
    "ROTAX MINI MAX · 2026 SEASON",
    "ROTAX 125cc · 13BHP · 62MPH TOP SPEED",
    "KART #146 · MLC MOTORSPORT · NEW TEAM 2026",
    "+15 POSITIONS GAINED · PFI ROUND 1",
    "P5 · INDOOR FINALS 2026",
    "P1 · FOREST EDGE",
    "P23 OF 2,000+ UK MINIMAX DRIVERS · BRITISH WERA 2025",
    "EVERY LAP · EVERY TENTH · NO EXCUSES",
    "ROTAX MINI MAX · 2026 SEASON",
    "ROTAX 125cc · 13BHP · 62MPH TOP SPEED",
    "KART #146 · MLC MOTORSPORT · NEW TEAM 2026",
    "+15 POSITIONS GAINED · PFI ROUND 1",
    "P5 · INDOOR FINALS 2026",
    "P1 · FOREST EDGE",
  ];

  return (
    <div
      id="stats"
      className="bg-[#00F5FF] text-[#080808] py-2.5 overflow-hidden relative"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="text-[10px] tracking-[0.3em] uppercase font-bold flex items-center gap-3">
            <span className="opacity-40">◆</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
