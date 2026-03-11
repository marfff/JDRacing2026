import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { pfiWinterWarmer2026 } from "../data/meetings/pfiWinterWarmer2026";
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

function SessionCard({ session }: { session: (typeof pfiWinterWarmer2026.sessions)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const gained = (session as { gained?: string }).gained;
  const gainedNum = gained ? parseInt(gained) : 0;
  const classified = (session as { classified?: boolean }).classified;
  const hasPenalties = session.penalties.length > 0;

  return (
    <div
      ref={ref}
      className="border border-white/10 hover:border-white/20 transition-all duration-300"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Session header */}
      <div className="p-5 flex items-start justify-between">
        <div className="flex items-start gap-4">
          {/* Session label */}
          <div className="min-w-[100px]">
            <div className="text-[9px] tracking-[0.3em] text-white/65 uppercase">Session</div>
            <div className="text-[#00F5FF] font-bold text-sm tracking-wider mt-0.5">
              {session.session}
            </div>
          </div>

          {/* Position change */}
          {"startPosition" in session && (
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-[11px] tracking-widest text-white/75 uppercase">Start</div>
                <div
                  className="text-2xl font-bold text-white/60 tabular-nums"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  P{(session as { startPosition: number }).startPosition}
                </div>
              </div>
              <div className="text-white/70 text-lg">→</div>
              <div className="text-center">
                <div className="text-[11px] tracking-widest text-white/75 uppercase">Finish</div>
                <div
                  className="text-2xl font-bold tabular-nums"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    color:
                      classified === false
                        ? "#ef4444"
                        : gainedNum > 0
                        ? "#00F5FF"
                        : gainedNum < 0
                        ? "#f97316"
                        : "white",
                  }}
                >
                  {classified === false ? "DSQ" : `P${(session as { finishPosition: number }).finishPosition}`}
                </div>
              </div>
              {gained && (
                <div
                  className="ml-2 text-lg font-bold tabular-nums"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    color: gainedNum > 0 ? "#00F5FF" : gainedNum < 0 ? "#f97316" : "white",
                  }}
                >
                  {gained}
                </div>
              )}
            </div>
          )}

          {"lapsCompleted" in session && !("startPosition" in session) && (
            <div>
              <div className="text-[11px] tracking-widest text-white/75 uppercase">Laps</div>
              <div
                className="text-2xl font-bold text-white tabular-nums"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {(session as { lapsCompleted: number }).lapsCompleted}
              </div>
            </div>
          )}
        </div>

        {/* Best lap + status */}
        <div className="flex items-start gap-4">
          <div className="text-right">
            <div className="text-[11px] tracking-widest text-white/75 uppercase">Best Lap</div>
            <div
              className="text-xl font-bold text-white tabular-nums"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {session.bestLap}
            </div>
          </div>
          {hasPenalties ? (
            <AlertTriangle size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
          ) : classified !== false ? (
            <CheckCircle size={16} className="text-[#00F5FF]/50 mt-1 flex-shrink-0" />
          ) : (
            <XCircle size={16} className="text-red-500 mt-1 flex-shrink-0" />
          )}
        </div>
      </div>

      {/* Notes preview */}
      <div className="px-5 pb-3 border-t border-white/5">
        <p className="text-[11px] text-white/80 leading-relaxed pt-3 font-mono">
          {session.notes}
        </p>
      </div>

      {/* Expandable penalties */}
      {hasPenalties && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full px-5 py-3 flex items-center justify-between border-t border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/5 transition-colors"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">
              {session.penalties.length} Penalty / Steward Decision
            </span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {expanded && (
            <div className="px-5 pb-5 space-y-3 border-t border-white/5">
              {session.penalties.map((p, i) => (
                <div key={i} className="bg-white/3 border border-white/8 p-4 mt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] tracking-widest text-yellow-400 uppercase font-bold">
                      {p.type}
                    </span>
                    {p.penaltySeconds !== null && p.penaltySeconds !== undefined && (
                      <span className="text-[9px] text-white/65">
                        +{p.penaltySeconds}s
                      </span>
                    )}
                    {(p as { stewardsRef?: string }).stewardsRef && (
                      <span className="ml-auto text-[9px] text-white/70">
                        Ref: {(p as { stewardsRef?: string }).stewardsRef}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-white/75 leading-relaxed">{p.reason}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function MeetingHub() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const m = pfiWinterWarmer2026;

  return (
    <section id="meetings" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              Race Data · 2026 Round 1
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
            <h2
              className="text-white"
              style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {m.meetingMeta.eventName}
            </h2>
            <div className="flex gap-6 text-right">
              <div>
                <div className="text-[11px] tracking-widest text-white/75 uppercase">Track</div>
                <div className="text-white/70 text-sm font-mono">{m.meetingMeta.track}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-widest text-white/75 uppercase">Date</div>
                <div className="text-white/70 text-sm font-mono">{m.meetingMeta.date}</div>
              </div>
              <div>
                <div className="text-[11px] tracking-widest text-white/75 uppercase">Class</div>
                <div className="text-white/70 text-sm font-mono">{m.meetingMeta.class}</div>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/5 mb-12" />
        </div>

        {/* Derived metrics banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Weekend Best Lap", value: m.derivedMetrics.finalBestLap, sub: `Lap ${m.derivedMetrics.finalBestLapNumber}` },
            { label: "Lap Consistency", value: `±${m.derivedMetrics.finalLapStdDev}s`, sub: "Std deviation" },
            { label: "Best Gain", value: `+${m.derivedMetrics.bestPositionsGained}`, sub: m.derivedMetrics.bestPositionsGainedSession },
            { label: "Anomaly Laps", value: String(m.derivedMetrics.anomalyLaps.length), sub: m.derivedMetrics.anomalyReason.split("/")[0].trim() },
          ].map((s) => (
            <div key={s.label} className="bg-[#00F5FF]/5 border border-[#00F5FF]/15 p-5">
              <div className="text-[9px] tracking-[0.25em] text-white/65 uppercase mb-1">{s.label}</div>
              <div
                className="text-3xl font-bold text-[#00F5FF] tabular-nums"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {s.value}
              </div>
              <div className="text-[9px] text-white/65 tracking-widest uppercase mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Heat results image + ▲14 callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-start">
          {/* Results screenshot */}
          <div className="relative border border-white/10 overflow-hidden">
            <img
              src="/images/james-pfi-results-heat.jpeg"
              alt="PFI Winter Warmer Heat results — James Devereux P12 ▲14"
              className="w-full object-cover"
              style={{ maxHeight: "480px", objectPosition: "center 30%" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-3">
              <span className="text-[10px] tracking-[0.3em] text-white/70 uppercase">Heat Results · PFI Winter Warmer R1</span>
            </div>
          </div>

          {/* Stat callouts */}
          <div className="flex flex-col gap-4 justify-center">
            <div className="border border-[#00F5FF]/25 p-6 bg-[#00F5FF]/5">
              <div className="text-[9px] tracking-[0.35em] text-[#00F5FF]/70 uppercase mb-2">Positions Gained · Heat</div>
              <div className="text-6xl font-bold text-[#00F5FF] tabular-nums" style={{ fontFamily: "'Courier New', monospace" }}>+14</div>
              <div className="text-[11px] text-white/65 tracking-widest uppercase mt-2">Started P26 · Finished P12</div>
            </div>
            <div className="border border-white/10 p-5">
              <div className="text-[9px] tracking-[0.35em] text-white/55 uppercase mb-2">Class</div>
              <div className="text-lg font-bold text-white tracking-wide">MiniMax 950</div>
              <div className="text-[11px] text-white/60 mt-1">Kart #46 · PFi National Circuit</div>
            </div>
            <div className="border border-white/10 p-5">
              <div className="text-[9px] tracking-[0.35em] text-white/55 uppercase mb-2">Gap to Leader</div>
              <div className="text-2xl font-bold text-white tabular-nums" style={{ fontFamily: "'Courier New', monospace" }}>14.60s</div>
              <div className="text-[11px] text-white/60 mt-1">from P1 at finish</div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-8 px-5 py-4 border-l-2 border-[#00F5FF]">
          <p className="text-white/80 text-sm" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", lineHeight: 1.7 }}>
            "{m.derivedMetrics.weekendHeadline}"
          </p>
        </div>

        {/* Sessions */}
        <div className="space-y-4 mb-12">
          {m.sessions.map((s, i) => (
            <SessionCard key={i} session={s} />
          ))}
        </div>

        {/* Scout notes */}
        <div className="border border-white/10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Notes */}
            <div className="md:col-span-2">
              <div className="text-[10px] tracking-[0.35em] text-[#00F5FF] uppercase mb-5">
                Scout Notes · PFI R1
              </div>
              <div className="space-y-3">
                {m.scoutNotes.map((note, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#00F5FF]/40 text-sm mt-0.5 font-mono">0{i + 1}</span>
                    <p className="text-[12px] text-white/80 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* MLC kart photo */}
            <div className="relative overflow-hidden border border-white/10 self-start">
              <img
                src="/images/james-mlc-kart-action.jpeg"
                alt="James Devereux #46 MLC Motorsport kart"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3", objectPosition: "center 30%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                <span className="text-[9px] tracking-[0.25em] text-[#00F5FF]/80 uppercase">#46 · MLC Motorsport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
