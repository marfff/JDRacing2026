import { useState, useEffect } from "react";
import { Menu, X, Youtube, Instagram, Facebook } from "lucide-react";

import { driverStats } from "../data/driverStats";

// TikTok icon (not in lucide — custom SVG)
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "2026 Season", href: "#season", highlight: false },
    { label: "Meetings", href: "#meetings", highlight: false },
    { label: "Stats", href: "#stats", highlight: false },
    { label: "Team", href: "#team", highlight: false },
    { label: "Calendar", href: "#calendar", highlight: false },
    { label: "Contact", href: "#contact", highlight: false },
    { label: "⭐ Sponsor", href: "#sponsor", highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#00F5FF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#00F5FF] flex items-center justify-center">
            <span className="text-[#00F5FF] text-xs font-bold tracking-widest">JD</span>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.3em] text-[#00F5FF] uppercase">
              James Devereux
            </div>
            <div className="text-[11px] tracking-[0.2em] text-white/75 uppercase">
              Rotax Inter Minimax · #146
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                l.highlight
                  ? "text-[#00F5FF] font-black border border-[#00F5FF]/40 px-3 py-1.5 hover:bg-[#00F5FF] hover:text-[#080808]"
                  : "text-white/80 hover:text-[#00F5FF]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social icons — desktop */}
        <div className="hidden md:flex items-center gap-2 ml-4 border-l border-white/10 pl-4">
          <a href={driverStats.social.youtube} target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "#FF0000" }}>
            <Youtube size={11} className="text-white" />
          </a>
          <a href={driverStats.social.instagram} target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}>
            <Instagram size={11} className="text-white" />
          </a>
          <a href={driverStats.social.facebook} target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "#1877F2" }}>
            <Facebook size={11} className="text-white" />
          </a>
          <a href={driverStats.social.tiktok} target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "#010101" }}>
            <TikTokIcon size={11} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-[#00F5FF]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808]/98 border-t border-[#00F5FF]/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[12px] tracking-[0.25em] uppercase transition-colors ${
                l.highlight
                  ? "text-[#00F5FF] font-black"
                  : "text-white/80 hover:text-[#00F5FF]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
