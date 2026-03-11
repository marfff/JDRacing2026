import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Youtube, Users, TrendingUp, Globe, Zap, ChevronRight, Heart } from "lucide-react";
import { driverStats } from "../data/driverStats";

const WHAT_YOU_GET = [
  { icon: MapPin, heading: "Your logo on the kart", body: "On the bodywork and/or helmet at every race meeting — seen by families, teams and photographers all season." },
  { icon: Users, heading: "Real crowd exposure", body: "1,500–2,000 people per championship meeting. Your brand on track, in the paddock, and in every photo." },
  { icon: Youtube, heading: "Online reach", body: "Race footage on YouTube (@frizzler1), TikTok (@jamesdevereux46), Instagram and Facebook. 6,000+ video views and growing." },
  { icon: Globe, heading: "National circuit coverage", body: "PFi, Silverstone, Whilton Mill, Warden Law, Kimbolton and more — circuits across the UK." },
  { icon: TrendingUp, heading: "European ambition", body: "2026 target: European Championship entry — international coverage and a bigger story for any partner." },
  { icon: Zap, heading: "Social media shoutouts", body: "Tagged in all race result posts, podium photos and season updates across every platform." },
];

const IDEAL_SPONSORS = [
  { label: "Online retailers", example: "Gaming PCs, tech, clothing, nutrition, car parts — anything sold nationally. Your customers are everywhere James races." },
  { label: "Local businesses", example: "Garages, estate agents, gyms, restaurants. Sponsor a local driver going national — a great story with real reach." },
  { label: "Karting & motorsport brands", example: "Helmets, suits, accessories, sim racing. James is exactly your target customer — and so is the audience." },
  { label: "Family & youth services", example: "Schools, tutors, kids' sports clubs. James is 12 — the audience is parents and families." },
];

const COSTS = [
  { item: "Race tyres", amount: "£160", note: "Every race weekend" },
  { item: "Engine tuning", amount: "£1,000", note: "Per season" },
  { item: "Chassis renewal", amount: "£2,000", note: "When required" },
  { item: "European entry", amount: "£3,000+", note: "Target for 2026" },
];

export default function SponsorSection() {
  const { ref: headRef, inView: headIn } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: bodyRef, inView: bodyIn } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="sponsor" className="bg-[#060606] border-t border-white/5 relative overflow-hidden">

      {/* Top impact banner */}
      <div className="bg-[#00F5FF] py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-[#080808] font-black text-[22px] tracking-[0.15em] uppercase">
            ⭐ SPONSORSHIP WANTED
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.gofundme.com/f/keep-james-on-track-mini-max-uk-european-dream-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#080808] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-black hover:bg-[#f0f0f0] transition-colors"
            >
              <Heart size={12} />
              Support on GoFundMe
            </a>
            <a
              href={`mailto:${driverStats.social.sponsorEmail}?subject=Sponsorship%20Enquiry%20James%20Devereux%20Racing`}
              className="flex items-center gap-2 bg-[#080808] text-[#00F5FF] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#111] transition-colors"
            >
              <Mail size={12} />
              Sponsor Enquiry
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-3 pt-3 border-t border-black/15 flex flex-wrap items-center gap-2">
          <Heart size={11} className="text-[#080808] opacity-60 flex-shrink-0" />
          <span className="text-[#080808] text-[11px] font-medium opacity-75">
            Can't sponsor but want to help? Every £ counts —
          </span>
          <a
            href="https://www.gofundme.com/f/keep-james-on-track-mini-max-uk-european-dream-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#080808] text-[11px] font-black underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Keep James on Track · Mini Max UK &amp; European Dream 2026
          </a>
        </div>
      </div>

      {/* Main heading block */}
      <div
        ref={headRef}
        className="pt-20 pb-16 px-6"
        style={{ opacity: headIn ? 1 : 0, transform: headIn ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#00F5FF]" />
            <span className="text-[10px] tracking-[0.5em] text-[#00F5FF] uppercase font-medium">Partner with James</span>
          </div>

          {/* Giant heading */}
          <div className="flex items-baseline gap-4 mt-2 mb-6 flex-wrap">
            <span
              className="text-white"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", letterSpacing: "-0.01em" }}
            >
              Could your
            </span>
            <span
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", letterSpacing: "-0.01em", WebkitTextStroke: "1px #00F5FF", color: "transparent" }}
            >
              brand be here?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-white/85 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                James Devereux, 12, is a British-Turkish kart racer competing at national level across the UK — 
                hitting 62mph in the Rotax Mini Max class and building toward a European Championship entry in 2026.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                No complex packages. A sticker on the kart, your name in the posts, 
                and a genuine partnership with a young driver going places.
              </p>
            </div>

            {/* Immediate CTA block */}
            <div className="border border-[#00F5FF]/30 p-8" style={{ background: "rgba(0,245,255,0.04)" }}>
              <div className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase mb-4">Get in touch today</div>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                Every arrangement is a conversation. Drop us an email — even just to ask a question. 
                There's no fixed price list and no hard sell.
              </p>
              <a
                href={`mailto:${driverStats.social.sponsorEmail}?subject=Sponsorship%20Enquiry%20James%20Devereux%20Racing`}
                className="flex items-center justify-center gap-3 w-full bg-[#00F5FF] text-[#080808] px-6 py-5 font-black text-[13px] tracking-[0.25em] uppercase hover:bg-white transition-colors duration-200 mb-3 group"
              >
                <Mail size={16} />
                {driverStats.social.sponsorEmail}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={driverStats.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-white/70 px-6 py-3 text-[11px] tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-all duration-200"
              >
                Message on Instagram · @jamesdevereuxracing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reach stats strip */}
      <div className="border-t border-b border-white/8 bg-[#00F5FF]/3">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {[
            { value: "2,000+", label: "People per race meeting", icon: Users },
            { value: "6,000+", label: "Video views", icon: Youtube },
            { value: "10+", label: "National circuits", icon: MapPin },
            { value: "5", label: "BKC Wera rounds", icon: TrendingUp },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="px-8 py-8 text-center">
                <Icon size={16} className="text-[#00F5FF] mx-auto mb-3 opacity-60" />
                <div className="text-3xl font-black text-white font-mono tabular-nums mb-1">{s.value}</div>
                <div className="text-[10px] text-white/55 tracking-widest uppercase">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main body */}
      <div
        ref={bodyRef}
        className="py-20 px-6"
        style={{ opacity: bodyIn ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-14">

            {/* What you get */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase font-medium mb-8 flex items-center gap-3">
                <div className="h-[1px] w-4 bg-[#00F5FF]" /> What sponsoring James looks like
              </div>
              <div className="space-y-6">
                {WHAT_YOU_GET.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 flex-shrink-0 border border-[#00F5FF]/25 flex items-center justify-center mt-0.5 bg-[#00F5FF]/5">
                        <Icon size={14} className="text-[#00F5FF]" />
                      </div>
                      <div>
                        <div className="text-[14px] text-white font-semibold tracking-wide mb-1">{item.heading}</div>
                        <p className="text-[12px] text-white/70 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* European callout */}
            <div className="border-l-4 border-[#00F5FF] pl-6 py-2">
              <div className="text-[10px] tracking-[0.3em] text-[#00F5FF] uppercase font-medium mb-2">The bigger picture</div>
              <p className="text-white/80 text-sm leading-relaxed mb-1">
                European Championship entry in 2026 is the target — international circuits, a larger audience, coverage beyond the UK.
              </p>
              <p className="text-white/55 text-[12px] leading-relaxed">
                Season Costs for a National Championships £3,000+. Any sponsor helping make that happen becomes part of the story.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-14">

            {/* Who's a good fit */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase font-medium mb-8 flex items-center gap-3">
                <div className="h-[1px] w-4 bg-[#00F5FF]" /> Who could be a good fit
              </div>
              <div className="space-y-5">
                {IDEAL_SPONSORS.map((s, i) => (
                  <div key={i} className="border-l-2 border-[#00F5FF]/40 pl-5">
                    <div className="text-[14px] text-white font-semibold mb-1">{s.label}</div>
                    <p className="text-[12px] text-white/70 leading-relaxed">{s.example}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/45 mt-6 leading-relaxed italic">
                PFi, Silverstone, Whilton Mill, Warden Law, Kimbolton. Your brand travels with the team.
              </p>
            </div>

            {/* Costs */}
            <div>
              <div className="text-[10px] tracking-[0.4em] text-[#00F5FF] uppercase font-medium mb-6 flex items-center gap-3">
                <div className="h-[1px] w-4 bg-[#00F5FF]" /> Where the money goes
              </div>
              <div className="border border-white/10">
                {COSTS.map((c, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 border-b border-white/8 last:border-0 hover:bg-white/3 transition-colors">
                    <div>
                      <div className="text-[13px] text-white/90 font-medium">{c.item}</div>
                      <div className="text-[10px] text-white/45 uppercase tracking-wider mt-0.5">{c.note}</div>
                    </div>
                    <div className="text-[#00F5FF] font-black font-mono text-xl">{c.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GoFundMe block */}
            <div className="border border-[#00F5FF]/25 p-6" style={{ background: "rgba(0,245,255,0.04)" }}>
              <div className="flex items-center gap-3 mb-3">
                <Heart size={16} className="text-[#00F5FF]" />
                <div className="text-[10px] tracking-[0.35em] text-[#00F5FF] uppercase font-medium">Support via GoFundMe</div>
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                Can't commit to a full sponsorship? Even a small contribution helps cover tyres, 
                entries and equipment. Every pound genuinely keeps James on track.
              </p>
              <a
                href="https://www.gofundme.com/f/keep-james-on-track-mini-max-uk-european-dream-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full border-2 border-[#00F5FF] text-[#00F5FF] px-6 py-4 font-black text-[12px] tracking-[0.25em] uppercase hover:bg-[#00F5FF] hover:text-[#080808] transition-all duration-200 group"
              >
                <Heart size={14} className="group-hover:scale-125 transition-transform" />
                Keep James on Track — GoFundMe
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-white/8 py-12 px-6" style={{ background: "#00F5FF08" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}>
              Ready to come on board?
            </div>
            <div className="text-white/55 text-sm">No hard sell. Just a conversation about what works for you.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${driverStats.social.sponsorEmail}?subject=Sponsorship%20Enquiry%20James%20Devereux%20Racing`}
              className="flex items-center gap-2 bg-[#00F5FF] text-[#080808] px-8 py-4 font-black text-[12px] tracking-[0.2em] uppercase hover:bg-white transition-colors"
            >
              <Mail size={14} /> Email Us
            </a>
            <a
              href="https://www.gofundme.com/f/keep-james-on-track-mini-max-uk-european-dream-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#00F5FF]/50 text-[#00F5FF] px-8 py-4 font-bold text-[12px] tracking-[0.2em] uppercase hover:border-[#00F5FF] hover:bg-[#00F5FF]/10 transition-all"
            >
              <Heart size={14} /> GoFundMe
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
