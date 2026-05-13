import { Youtube, Instagram, Facebook, Mail } from "lucide-react";
import { driverStats } from "../data/driverStats";

// TikTok icon (not in lucide — custom SVG)
function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-16 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-[#00F5FF] flex items-center justify-center">
                <span className="text-[#00F5FF] text-sm font-bold tracking-widest">JD</span>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.3em] text-[#00F5FF] uppercase">James Devereux</div>
                <div className="text-[11px] tracking-[0.2em] text-white/75 uppercase">Rotax Inter Mini Max · #146</div>
              </div>
            </div>
            <p className="text-[12px] text-white/90 tracking-widest uppercase leading-relaxed">
              Every lap. Every tenth. No excuses.
            </p>
            <div className="mt-4 space-y-1">
              <div className="text-[11px] tracking-widest text-white/80 uppercase">MLC Motorsport · 2026</div>
              <div className="text-[11px] tracking-widest text-white/75 uppercase">🇬🇧🇹🇷 12-year-old British-Turkish racer</div>
              <div className="text-[11px] tracking-widest text-white/75 uppercase">Home: Forest Edge / Camberley</div>
            </div>
          </div>

          {/* Social buttons */}
          <div>
            <div className="text-[11px] tracking-[0.3em] text-white/80 uppercase mb-5">Follow the journey</div>
            <div className="space-y-3">

              {/* YouTube — red */}
              <a href={driverStats.social.youtube} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:opacity-85 transition-opacity"
                  style={{ background: "#FF0000" }}>
                  <Youtube size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-white/80 group-hover:text-white/80 transition-colors font-mono">@frizzler1</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">YouTube</div>
                </div>
              </a>

              {/* Instagram — gradient */}
              <a href={driverStats.social.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:opacity-85 transition-opacity"
                  style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}>
                  <Instagram size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-white/80 group-hover:text-white/80 transition-colors font-mono">@jamesdevereuxracing</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">Instagram</div>
                </div>
              </a>

              {/* Facebook — blue */}
              <a href={driverStats.social.facebook} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:opacity-85 transition-opacity"
                  style={{ background: "#1877F2" }}>
                  <Facebook size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-white/80 group-hover:text-white/80 transition-colors font-mono">jdracing.2025</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">Facebook</div>
                </div>
              </a>


              {/* TikTok — black/white */}
              <a href={driverStats.social.tiktok} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:opacity-85 transition-opacity"
                  style={{ background: "#010101" }}>
                  <TikTokIcon size={16} />
                </div>
                <div>
                  <div className="text-[12px] text-white/85 group-hover:text-white/80 transition-colors font-mono">@jamesdevereux46</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">TikTok</div>
                </div>
              </a>

              {/* Email — cyan */}
              <a href={`mailto:${driverStats.social.email}`}
                className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 border border-[#00F5FF]/30 group-hover:bg-[#00F5FF]/10 transition-colors">
                  <Mail size={16} className="text-[#00F5FF]" />
                </div>
                <div>
                  <div className="text-[11px] text-white/80 group-hover:text-[#00F5FF] transition-colors font-mono">{driverStats.social.email}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">Email</div>
                </div>
              </a>

            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[11px] tracking-[0.3em] text-white/80 uppercase mb-5">Navigate</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[["2026 Season","#season"],["Team","#team"],["Race Data","#meetings"],["Calendar","#calendar"],["Sponsor","#sponsor"],["Contact","#contact"]].map(([label,href]) => (
                <a key={label} href={href}
                  className="text-[11px] tracking-[0.2em] text-white/80 hover:text-[#00F5FF] uppercase transition-colors">
                  {label}
                </a>
              ))}
            </div>

            {/* Sponsor CTA */}
            <div className="mt-8 border border-[#00F5FF]/20 p-4">
              <div className="text-[10px] tracking-[0.25em] text-[#00F5FF] uppercase mb-2 font-medium">⭐ Sponsorship wanted</div>
              <p className="text-[11px] text-white/80 leading-relaxed mb-3">
                Help James compete at national level. From tyre sets to full season title partnerships.
              </p>
              <a href={`mailto:${driverStats.social.sponsorEmail}?subject=Sponsorship%20Enquiry`}
                className="text-[10px] tracking-[0.2em] text-[#00F5FF] uppercase hover:text-white transition-colors flex items-center gap-1">
                <Mail size={10} />
                {driverStats.social.sponsorEmail}
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] tracking-widest text-white/75 uppercase">
            © 2026 James Devereux Racing · Race data: Apex Timing · Site: frizzler.net
          </span>
          <span className="text-[10px] tracking-wider text-[#00F5FF]/65 uppercase font-mono">
            Created with ♥ by MGD
          </span>
        </div>
        <div className="pt-4 text-center">
          <a
            href="https://www.gofundme.com/f/keep-james-on-track-mini-max-uk-european-dream-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white/20 hover:text-white/40 transition-colors tracking-wider"
          >
            Support James on GoFundMe ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
