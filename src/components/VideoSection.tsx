import { useInView } from "react-intersection-observer";
import { useState } from "react";

const YOUTUBE_URL = "https://youtu.be/6ypJagTdXVM?si=X3Ap6J95k-PiHHAx";

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function VideoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [unmuted, setUnmuted] = useState(false);
  const videoId = getYouTubeId(YOUTUBE_URL);

  const src = unmuted
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`;

  return (
    <section
      id="video"
      className="bg-[#080808] relative overflow-hidden"
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s ease" }}
    >
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent" />

      <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "80vh" }}>
        <iframe
          key={unmuted ? "sound" : "muted"}
          className="w-full h-full"
          src={src}
          title="James Devereux Racing"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Click-to-unmute overlay — disappears once clicked */}
        {!unmuted && (
          <button
            onClick={() => setUnmuted(true)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 border border-[#00F5FF]/50 bg-black/70 hover:bg-black/90 hover:border-[#00F5FF] transition-all duration-200 group"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {/* Speaker / sound wave icon */}
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#00F5FF]" stroke="currentColor" strokeWidth={1.5}>
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] tracking-[0.3em] text-white uppercase group-hover:text-[#00F5FF] transition-colors">
              Listen to the engine
            </span>
            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#00F5FF]" stroke="currentColor" strokeWidth={2}>
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        )}
      </div>

      {/* Caption bar */}
      <div className="bg-[#050505] border-t border-white/5 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#00F5FF] rounded-full animate-pulse" />
          <span className="text-[10px] tracking-[0.35em] text-white/60 uppercase">
            James Devereux · #146 · Rotax Mini Max
          </span>
        </div>
        <a
          href="https://www.youtube.com/@frizzler1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.25em] text-[#00F5FF]/70 uppercase hover:text-[#00F5FF] transition-colors"
        >
          @frizzler1 ↗
        </a>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent" />
    </section>
  );
}
