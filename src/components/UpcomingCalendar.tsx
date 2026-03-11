import { useInView } from "react-intersection-observer";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const SERIES = [
  {
    id: "tkc-march",
    seriesName: "TKC",
    seriesLabel: "Club Series",
    color: "#ffffff",
    accent: "#ffffff22",
    events: [
      {
        round: "March Meeting",
        track: "Warden Law",
        dates: "March 2026",
        status: "next",
        note: "Club round — home circuit",
        link: null,
      },
    ],
  },
  {
    id: "bkc-wera",
    seriesName: "BKC Wera",
    seriesLabel: "British Kart Championship · Full Series",
    color: "#00F5FF",
    accent: "#00F5FF15",
    events: [
      {
        round: "R1",
        track: "Warden Law",
        dates: "09–11 Apr",
        status: "next",
        note: "Season opener",
        link: "https://britishkartchampionships.org/events/rotax-round-1-warden-law-2/",
      },
      {
        round: "R2",
        track: "PFi",
        dates: "29–31 May",
        status: "upcoming",
        note: "Strong 2025 pace here",
        link: "https://britishkartchampionships.org/events/rotax-round-2-pfi/",
      },
      {
        round: "R3",
        track: "Kimbolton",
        dates: "10–12 Jul",
        status: "upcoming",
        note: null,
        link: "https://britishkartchampionships.org/events/rotax-round-3-whilton-mill/",
      },
      {
        round: "R4",
        track: "Whilton Mill",
        dates: "07–09 Aug",
        status: "upcoming",
        note: null,
        link: "https://britishkartchampionships.org/events/rotax-round-4-kimbolton/",
      },
      {
        round: "R5",
        track: "Silverstone",
        dates: "08–10 Oct",
        status: "upcoming",
        note: "Season finale",
        link: "https://britishkartchampionships.org/events/rotax-round-5-2/",
      },
    ],
  },
  {
    id: "tvkc-pfi",
    seriesName: "TVKC",
    seriesLabel: "PFi Season 2026",
    color: "#a78bfa",
    accent: "#a78bfa15",
    events: [
      {
        round: "R1",
        track: "PFi",
        dates: "Mar 2026",
        status: "complete",
        note: "+15 gains · Heat 2",
        link: null,
      },
      {
        round: "Season",
        track: "PFi",
        dates: "2026",
        status: "upcoming",
        note: "Ongoing series",
        link: null,
      },
    ],
  },
];

// Real James Devereux photos — cropped via objectPosition per image
const GALLERY: { url: string; caption: string; sub: string; pos: string }[] = [
  {
    url: "/images/james-walking-suit.jpeg",
    caption: "Post-race focus",
    sub: "Coles Racing · 2025",
    pos: "center 20%",   // head + shoulders portrait
  },
  {
    url: "/images/james-on-track-white.jpeg",
    caption: "#46 On Track",
    sub: "Rotax Mini Max",
    pos: "center center",
  },
  {
    url: "/images/james-kart-46-garage.jpeg",
    caption: "Kart #46",
    sub: "Pre-race — garage",
    pos: "center top",
  },
  {
    url: "/images/james-wet-race.jpeg",
    caption: "Wet race pace",
    sub: "All-weather speed",
    pos: "center center",
  },
  {
    url: "/images/james-helmet-paddock.jpeg",
    caption: "Race ready",
    sub: "Paddock · Arai lid",
    pos: "center 30%",
  },
  {
    url: "/images/james-pink-kart-46.jpeg",
    caption: "Evening session",
    sub: "#46 · Late light",
    pos: "center center",
  },
];

function EventRow({
  event,
  color,
}: {
  event: (typeof SERIES)[0]["events"][0];
  color: string;
}) {
  const statusStyles: Record<string, string> = {
    next: "bg-[#00F5FF] text-[#080808]",
    complete: "bg-white/10 text-white/65",
    upcoming: "bg-white/5 text-white/55",
  };
  const statusLabels: Record<string, string> = {
    next: "NEXT UP",
    complete: "DONE",
    upcoming: "UPCOMING",
  };

  return (
    <div
      className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 group hover:bg-white/2 transition-colors px-2 -mx-2"
    >
      {/* Round */}
      <div
        className="text-[10px] font-bold tracking-widest min-w-[28px] font-mono"
        style={{ color }}
      >
        {event.round}
      </div>

      {/* Track */}
      <div className="flex items-center gap-1.5 flex-1">
        <MapPin size={10} className="text-white/70 flex-shrink-0" />
        <span className="text-[12px] text-white/70">{event.track}</span>
        {event.note && (
          <span className="text-[9px] text-white/60 tracking-wider hidden sm:inline">
            · {event.note}
          </span>
        )}
      </div>

      {/* Dates */}
      <div className="flex items-center gap-1.5">
        <Calendar size={10} className="text-white/70" />
        <span className="text-[11px] text-white/80 font-mono tabular-nums">{event.dates}</span>
      </div>

      {/* Status + link */}
      <div className="flex items-center gap-2">
        <span
          className={`text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 font-bold ${statusStyles[event.status]}`}
        >
          {statusLabels[event.status]}
        </span>
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={11} className="text-white/65 hover:text-[#00F5FF]" />
          </a>
        )}
      </div>
    </div>
  );
}

function SeriesBlock({ s }: { s: (typeof SERIES)[0] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
      style={{
        background: s.accent,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Series header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div
            className="text-xl font-bold tracking-widest font-mono"
            style={{ color: s.color }}
          >
            {s.seriesName}
          </div>
          <div className="text-[9px] tracking-[0.25em] text-white/65 uppercase mt-0.5">
            {s.seriesLabel}
          </div>
        </div>
        <div
          className="w-1 h-10 flex-shrink-0"
          style={{ background: s.color, opacity: 0.4 }}
        />
      </div>

      {/* Events */}
      <div>
        {s.events.map((e, i) => (
          <EventRow key={i} event={e} color={s.color} />
        ))}
      </div>
    </div>
  );
}

function GalleryImage({
  img,
  index,
  tall,
}: {
  img: (typeof GALLERY)[0];
  index: number;
  tall?: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="relative overflow-hidden group cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        height: tall ? "100%" : undefined,
        minHeight: tall ? "460px" : "220px",
      }}
    >
      <img
        src={img.url}
        alt={img.caption}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        style={{ minHeight: tall ? "460px" : "220px", objectPosition: img.pos }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-4">
        <div className="text-[11px] text-white/80 tracking-wider uppercase">{img.caption}</div>
        <div className="text-[9px] text-white/65 tracking-widest uppercase">{img.sub}</div>
      </div>
      {/* Cyan corner accent */}
      <div
        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

export default function UpcomingCalendar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      {/* ── PHOTO GALLERY ── */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
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
                On Track
              </span>
            </div>
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Gallery
            </h2>
            <div className="h-[1px] w-full bg-white/5 mt-6 mb-10" />
          </div>

          {/* Asymmetric 6-photo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Row 1: big portrait + two stacked */}
            <div className="lg:row-span-2">
              <GalleryImage img={GALLERY[0]} index={0} tall />
            </div>
            <GalleryImage img={GALLERY[1]} index={1} />
            <GalleryImage img={GALLERY[2]} index={2} />
            {/* Row 2: three equal */}
            <GalleryImage img={GALLERY[3]} index={3} />
            <GalleryImage img={GALLERY[4]} index={4} />
            <GalleryImage img={GALLERY[5]} index={5} />
          </div>
        </div>
      </section>

      {/* ── CALENDAR ── */}
      <section id="calendar" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-6 bg-[#00F5FF]" />
              <span className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase">
                Race Programme · 2026
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
                Upcoming Meetings
              </h2>
              <a
                href="https://britishkartchampionships.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#00F5FF]/85 hover:text-[#00F5FF] uppercase transition-colors"
              >
                BKC Official Site
                <ExternalLink size={11} />
              </a>
            </div>
            <div className="h-[1px] w-full bg-white/5 mb-12" />
          </div>

          {/* Series blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERIES.map((s) => (
              <SeriesBlock key={s.id} s={s} />
            ))}
          </div>

          {/* Season note */}
          <div className="mt-8 px-5 py-4 border-l-2 border-white/10">
            <p className="text-white/80 text-[11px] leading-relaxed tracking-wider">
              Full BKC Wera Rotax series commitment in 2026. 5 rounds across Warden Law, PFi,
              Kimbolton, Whilton Mill and Silverstone. Dates sourced from{" "}
              <a
                href="https://britishkartchampionships.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00F5FF]/40 hover:text-[#00F5FF]/70 underline"
              >
                britishkartchampionships.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
