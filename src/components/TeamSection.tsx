import { useInView } from "react-intersection-observer";
import { ExternalLink, Wrench, Zap, Shield, Trophy } from "lucide-react";

const MLC_CREDENTIALS = [
  {
    icon: Zap,
    title: "In-House Engine Dept",
    body: "State-of-the-art computer-controlled dyno test bed. P1 Power — built and tuned in-house.",
  },
  {
    icon: Wrench,
    title: "Full Workshop",
    body: "Chassis geometry, preparation and setup from a purpose-built 4,500 sq ft base in the centre of the UK.",
  },
  {
    icon: Shield,
    title: "Trackside Support",
    body: "Complete race-weekend operation with driver development programmes at every level.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    body: "Dubai O Plate winners. Vice European Champions. Podium at IAME World Finals. Vice British Champions.",
  },
];

function CredCard({
  item,
  index,
}: {
  item: (typeof MLC_CREDENTIALS)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className="border border-white/8 p-5 hover:border-[#00F5FF]/25 transition-all duration-300 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.5s ease ${index * 0.08}s`,
      }}
    >
      <Icon
        size={18}
        className="text-[#00F5FF]/50 mb-3 group-hover:text-[#00F5FF] transition-colors duration-300"
      />
      <div className="text-[11px] tracking-[0.25em] text-white/70 uppercase mb-2 font-bold">
        {item.title}
      </div>
      <p className="text-[11px] text-white/60 leading-relaxed">{item.body}</p>
    </div>
  );
}

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="team" className="py-24 px-6 bg-[#080808] border-t border-white/5">
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
              2026 · New Chapter
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
              MLC Motorsport
            </h2>
            <a
              href="https://mlcmotorsport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#00F5FF]/85 hover:text-[#00F5FF] uppercase transition-colors border border-[#00F5FF]/20 hover:border-[#00F5FF]/50 px-4 py-2"
            >
              mlcmotorsport.com
              <ExternalLink size={11} />
            </a>
          </div>
          <div className="h-[1px] w-full bg-white/5 mt-6 mb-12" />
        </div>

        {/* Two-col: story + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Story */}
          <div>
            {/* NEW SIGNING badge */}
            <div className="inline-flex items-center gap-2 bg-[#00F5FF] text-[#080808] text-[9px] font-bold tracking-[0.35em] uppercase px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-[#080808] rounded-full inline-block" />
              New Signing · 2026 Season
            </div>

            <p
              className="text-white/80 leading-relaxed mb-5"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              James joins MLC Motorsport for the 2026 campaign — a significant step up in
              technical support after his 2025 season with Coles Racing. MLC are one of the
              most complete outfits in UK karting, established since 2009 and operating from
              a purpose-built 4,500 sq ft base in the centre of the country.
            </p>
            <p
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: "'Georgia', serif",
                lineHeight: 1.8,
              }}
            >
              With an in-house engine department running computer-controlled dyno testing,
              full chassis geometry capability and dedicated trackside support, James now has
              the infrastructure to convert raw pace into consistent championship results
              across the BKC Wera Season, UKC and TVKC National Events.
            </p>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-[#00F5FF]/30">
              <p
                className="text-white/75 text-sm italic"
                style={{ fontFamily: "'Georgia', serif", lineHeight: 1.7 }}
              >
                "New team, new chapter. MLC Motorsport bring full in-house engine building,
                chassis geometry and trackside support. The data doesn't lie — the results
                are coming."
              </p>
            </div>

            {/* MLC established tag */}
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-[9px] tracking-widest text-white/60 uppercase">Est.</div>
                <div
                  className="text-2xl font-bold text-white/85 tabular-nums"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  2009
                </div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="text-[9px] tracking-widest text-white/60 uppercase">Base</div>
                <div className="text-sm text-white/75 font-mono">Central UK</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="text-[9px] tracking-widest text-white/60 uppercase">Facility</div>
                <div className="text-sm text-white/75 font-mono">4,500 sq ft</div>
              </div>
            </div>
          </div>

          {/* Driver photo — James in race suit */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ height: "480px" }}
            >
              <img
                src="/images/james-bkc-helmet-action.jpeg"
                alt="James Devereux — MLC Motorsport 2026"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "center 20%" }}
              />
              {/* Dark gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" style={{ opacity: 0.7 }} />
              {/* Cyan frame corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00F5FF]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00F5FF]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00F5FF]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00F5FF]" />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] tracking-[0.3em] text-[#00F5FF] uppercase">
                  James Devereux
                </div>
                <div className="text-[11px] tracking-widest text-white/75 uppercase mt-0.5">
                  MLC Motorsport · #146 · 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MLC_CREDENTIALS.map((item, i) => (
            <CredCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
