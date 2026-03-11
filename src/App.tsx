import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import SeasonStory from "./components/SeasonStory";
import MeetingHub from "./components/MeetingHub";
import TeamSection from "./components/TeamSection";
import UpcomingCalendar from "./components/UpcomingCalendar";
import Nav from "./components/Nav";
import SponsorSection from "./components/SponsorSection";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#080808] text-white font-mono transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />
      <Nav />
      <Hero />
      <StatsBar />
      <VideoSection />
      <SeasonStory />
      <TeamSection />
      <MeetingHub />
      <SponsorSection />
      <UpcomingCalendar />
      <Footer />
    </div>
  );
}

export default App;
