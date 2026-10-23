import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/SiteFrame";
import { CursorFollower, MotionSystem } from "./components/Effects";
import { HomePage } from "./components/Content";
import {
  AboutPage,
  ContactPage,
  EventsPage,
  FounderPage,
  GalleryPage,
  HallOfFamePage,
  InstructorsPage,
  JoinPage,
  NotFoundPage,
  ShitoryuPage,
} from "./pages/Pages";

const pageTitles: Record<string, string> = {
  "/": "AVR Institution — The Way, Practised Daily",
  "/about": "About AVR Institution — Shitō-ryū Karate",
  "/shitoryu": "The Art of Shitō-ryū — AVR Institution",
  "/founder": "Master Rajalingam — Founder of AVR Institution",
  "/instructors": "Instructors — AVR Institution",
  "/hall-of-fame": "Hall of Fame — AVR Institution",
  "/events": "Events & Championships — AVR Institution",
  "/gallery": "Gallery — AVR Institution",
  "/join": "Training & Membership — AVR Institution",
  "/contact": "Contact AVR Institution",
};

const pageDescriptions: Record<string, string> = {
  "/": "Discover the discipline, heritage and practice of Shitō-ryū Karate at AVR Institution, founded by Master Rajalingam.",
  "/about": "Learn about AVR Institution's stated commitment to traditional Shitō-ryū Karate, discipline, technique and character-building.",
  "/shitoryu": "Explore the foundations of Shitō-ryū Karate: Kihon, Kata and Kumite.",
  "/founder": "Verified information about Master Rajalingam, founder of AVR Institution and an Asian Karate Federation Judge.",
  "/instructors": "Instructor profiles at AVR Institution will be published when names and credentials are confirmed.",
  "/hall-of-fame": "A space for verified achievements and milestones from AVR Institution.",
  "/events": "Confirmed events and championships from AVR Institution.",
  "/gallery": "Explore the visual identity and practice of Shitō-ryū Karate at AVR Institution.",
  "/join": "Enquire about training and membership at AVR Institution. Programme details are being confirmed.",
  "/contact": "Contact AVR Institution about Shitō-ryū Karate training and programmes.",
};

function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Page not found — AVR Institution";
    const description = pageDescriptions[pathname] ?? "Explore AVR Institution and traditional Shitō-ryū Karate.";
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (descriptionTag) descriptionTag.content = description;
    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = description;
    if (canonical) canonical.href = `https://avrinstitution.com${pathname === "/" ? "/" : pathname}`;
    if (ogUrl) ogUrl.content = `https://avrinstitution.com${pathname === "/" ? "/" : pathname}`;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <MotionSystem />
      <CursorFollower />
      <RouteMetadata />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shitoryu" element={<ShitoryuPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/hall-of-fame" element={<HallOfFamePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
