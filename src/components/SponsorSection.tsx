import { useInView } from "react-intersection-observer";
import { Mail, ChevronRight, Star, Zap, Trophy } from "lucide-react";

const EMAIL = "frizzler1@icloud.com";

const TIERS = [
  {
    icon: Star,
    name: "Bronze",
    price: "£100",
    period: "per month",
    color: "#CD7F32",
    includes: [
      "Logo on the kart bodywork",
      "Named in all social media race posts",
      "Shoutout on Instagram & TikTok",
    ],
    subject: "Bronze%20Sponsorship%20%E2%80%94%20James%20Devereux%20Racing",
    body: "Hi%2C%0A%0AI%27m%20interested%20in%20the%20Bronze%20sponsorship%20(%C2%A3100%2Fmonth).%0A%0AMy%20name%3A%0AMy%20business%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
  },
  {
    icon: Zap,
    name: "Silver",
    price: "£400",
    period: "per month",
    color: "#00F5FF",
    featured: true,
    includes: [
      "Everything in Bronze",
      "Logo on helmet",
      "Featured post each race weekend",
      "Named in press releases & race reports",
    ],
    subject: "Silver%20Sponsorship%20%E2%80%94%20James%20Devereux%20Racing",
    body: "Hi%2C%0A%0AI%27m%20interested%20in%20the%20Silver%20sponsorship%20(%C2%A3400%2Fmonth).%0A%0AMy%20name%3A%0AMy%20business%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
  },
  {
    icon: Trophy,
    name: "Gold",
    price: "£800",
    period: "per month",
    color: "#FFD700",
    featured: false,
    includes: [
      "Everything in Silver",
      "Primary logo — kart & race suit",
      "Season review video feature",
      "European Championship exposure",
    ],
    subject: "Gold%20Sponsorship%20%E2%80%94%20James%20Devereux%20Racing",
    body: "Hi%2C%0A%0AI%27m%20interested%20in%20the%20Gold%20sponsorship%20(%C2%A3800%2Fmonth).%0A%0AMy%20name%3A%0AMy%20business%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
  },
];

export default function SponsorSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="sponsor" className="bg-[#060606] border-t border-white/5 py-20 px-6">
      <div
        ref={ref}
        className="max-w-5xl mx-auto"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[1px] w-8 bg-[#00F5FF]" />
            <span className="text-[10px] tracking-[0.5em] text-[#00F5FF] uppercase font-medium">Partner with James</span>
            <div className="h-[1px] w-8 bg-[#00F5FF]" />
          </div>
          <h2
            className="text-white mb-4 leading-none"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}
          >
            ⭐ Sponsor James
          </h2>
          <p className="text-white/55 text-sm max-w-lg mx-auto leading-relaxed">
            Your brand on the kart, on social media, and part of a young driver's journey to the European Championships.
            Pick a tier and click — it opens a pre-filled email straight to the team.
          </p>
        </div>

        {/* Three tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className="relative flex flex-col border"
                style={{ borderColor: tier.color + "45", background: tier.color + "08" }}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#080808] text-[10px] font-black tracking-[0.25em] uppercase px-4 py-1 whitespace-nowrap"
                    style={{ background: tier.color }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="p-7 pb-5 border-b border-white/8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: tier.color + "40", background: tier.color + "12" }}>
                      <Icon size={14} style={{ color: tier.color }} />
                    </div>
                    <span className="text-[11px] tracking-[0.4em] uppercase font-bold" style={{ color: tier.color }}>
                      {tier.name}
                    </span>
                  </div>
                  <div
                    className="font-black mb-0.5"
                    style={{ fontFamily: "'Courier New', monospace", fontSize: "clamp(2.2rem, 4vw, 3rem)", color: tier.color, lineHeight: 1 }}
                  >
                    {tier.price}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">{tier.period}</div>
                </div>

                <div className="p-7 flex-1">
                  <ul className="space-y-2.5">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: tier.color }} />
                        <span className="text-[13px] text-white/70 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-7 pb-7">
                  <a
                    href={`mailto:${EMAIL}?subject=${tier.subject}&body=${tier.body}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 font-black text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 group"
                    style={{
                      background: tier.featured ? tier.color : "transparent",
                      color: tier.featured ? "#080808" : tier.color,
                      border: `2px solid ${tier.color}`,
                    }}
                  >
                    <Mail size={12} />
                    Commit to {tier.name}
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple direct email line */}
        <p className="text-center text-white/35 text-[12px]">
          Questions?{" "}
          <a
            href={`mailto:${EMAIL}?subject=Sponsorship%20Question%20%E2%80%94%20James%20Devereux%20Racing`}
            className="text-[#00F5FF]/70 hover:text-[#00F5FF] transition-colors underline underline-offset-2"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
