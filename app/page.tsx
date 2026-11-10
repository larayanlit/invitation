"use client";

import { useEffect, useRef, useState } from "react";

const events = [
  {
    label: "Reception",
    date: "Tuesday, 1 December 2026",
    time: "7:30 PM onwards",
  },
  {
    label: "Wedding Muhurtham",
    date: "Wednesday, 2 December 2026",
    time: "6:30 PM – 8:00 PM",
    note: "Dinner at 7:00 PM onwards",
    icon: "❋",
  },
];

function InvitationMark() {
  return <div className="mark" aria-hidden="true">❦</div>;
}

function LoveAmpersand() {
  return (
    <svg className="love-ampersand" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <path d="M28 47C24.6 43.7 8 33.5 8 20.2 8 12.1 14 7 21 7c3.5 0 6.1 1.8 7 4.9C28.9 8.8 31.5 7 35 7c7 0 13 5.1 13 13.2C48 33.5 31.4 43.7 28 47Z" />
      <text x="28" y="36" textAnchor="middle">&amp;</text>
    </svg>
  );
}

function ShiningRing() {
  return (
    <div className="shining-ring-wrapper" aria-hidden="true">
      <svg className="shining-ring" viewBox="0 0 64 64" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2be" />
            <stop offset="35%" stopColor="#f5ca63" />
            <stop offset="70%" stopColor="#d49a37" />
            <stop offset="100%" stopColor="#8d5f19" />
          </linearGradient>
          <linearGradient id="ringHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c99738" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#eaf5ff" />
            <stop offset="100%" stopColor="#bce2ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="18" r="10" fill="#ffeaa7" className="ring-ambient-glow" />
        <ellipse cx="32" cy="38" rx="18" ry="17" stroke="url(#ringGold)" strokeWidth="4.5" fill="none" />
        <ellipse cx="32" cy="38" rx="18" ry="17" stroke="url(#ringHighlight)" strokeWidth="1.2" fill="none" />
        <path d="M25 23 L27 17 L37 17 L39 23" stroke="url(#ringGold)" strokeWidth="2.2" strokeLinecap="round" />
        <polygon points="28,14 36,14 40,18 32,27 24,18" fill="url(#diamondGrad)" stroke="#ffffff" strokeWidth="0.8" />
        <polygon points="28,14 36,14 32,18" fill="#ffffff" fillOpacity="0.95" />
        <polygon points="28,14 24,18 32,18" fill="#cbe6fd" fillOpacity="0.75" />
        <polygon points="36,14 40,18 32,18" fill="#e8f4fe" fillOpacity="0.85" />
        <polygon points="24,18 32,18 32,27" fill="#a8d3f8" fillOpacity="0.9" />
        <polygon points="40,18 32,18 32,27" fill="#d9edfd" fillOpacity="0.95" />
        <g className="ring-sparkle">
          <path d="M39 10 Q39 15 44 15 Q39 15 39 20 Q39 15 34 15 Q39 15 39 10 Z" fill="#ffffff" />
          <circle cx="39" cy="15" r="1.2" fill="#fff9eb" />
        </g>
        <g className="ring-sparkle-small">
          <path d="M25 20 Q25 22 27 22 Q25 22 25 24 Q25 22 23 22 Q25 22 25 20 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

function IndianWeddingSign() {
  return (
    <div className="acrylic-sign-wrapper" aria-label="Wedding sign for Sanjay and Mohini">
      <div className="acrylic-sign">
        <div className="acrylic-standoff standoff-tl" />
        <div className="acrylic-standoff standoff-tr" />
        <div className="acrylic-standoff standoff-bl" />
        <div className="acrylic-standoff standoff-br" />

        <div className="couple-icon-wrapper">
          <svg className="couple-icon-svg" viewBox="0 0 100 70" fill="none" stroke="url(#acrylicGoldStroke)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="acrylicGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff4c2" />
                <stop offset="35%" stopColor="#f5d070" />
                <stop offset="75%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#9d7620" />
              </linearGradient>
            </defs>

            {/* Groom (Left): Turban, Kalgi, Sherwani */}
            <path d="M 24 30 C 23 19, 32 13, 41 13 C 48 13, 50 18, 49 24" />
            <path d="M 26 25 Q 38 27 49 22" />
            <path d="M 24 30 Q 36 32 47 27" />
            <path d="M 40 13 Q 44 6 41 1 Q 45 6 44 13" />
            <circle cx="41.5" cy="13" r="1.3" fill="#ffffff" stroke="none" />
            <path d="M 44 26 L 46 31 L 44.5 32 L 46 36 L 43.5 38.5 L 37 40 L 33 43" />
            <path d="M 33 43 L 36 54 L 46 54" />
            <path d="M 28 47 Q 20 53 16 58" />

            {/* Bride (Right): Dupatta, Maang Tikka, Jhumka */}
            <path d="M 52 25 C 52 17, 59 13, 67 13 C 76 13, 83 18, 84 28 C 85 39, 83 50, 80 58" />
            <path d="M 67 14 L 62 23" />
            <circle cx="61.5" cy="24" r="1.2" fill="#ffffff" stroke="none" />
            <path d="M 58 26 L 55.5 31 L 56.8 32 L 55.5 36 L 58 38.5 L 63 40 L 66 43" />
            <path d="M 66 35 L 66 38" />
            <circle cx="66" cy="39.5" r="1.2" fill="#f5d070" stroke="none" />
            <path d="M 66 43 L 64 54 L 56 54" />
            <path d="M 72 47 Q 80 53 84 58" />

            {/* Varmala Garland motifs */}
            <path d="M 44 46 Q 50 51 57 46" strokeDasharray="2.5 2" />
            <path d="M 42 50 Q 50 56 59 50" strokeDasharray="2.5 2" />
          </svg>
        </div>

        <p className="sign-subtitle">Welcome to the Wedding of</p>
        <h3 className="sign-names">Sanjay <span>&amp;</span> Mohini</h3>

        <div className="sign-divider">
          <div className="line" />
          <span className="gem">✦</span>
          <div className="line" />
        </div>

        <p className="sign-date">Wednesday · 2 December 2026</p>
        <p className="sign-venue">Vrindawan Lawn · Chhindwara</p>
      </div>
    </div>
  );
}

function InitialPattern() {
  return <div className="initial-pattern" aria-hidden="true"><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span><span>S ♥ M</span></div>;
}

const muhurtham = new Date("2026-12-02T18:30:00+05:30").getTime();
const initialTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
const venueMapUrl = "https://www.google.com/maps?vet=10CAAQoqAOahcKEwiQkN21lfuXAxUAAAAAHQAAAAAQBg..i&rlz=1C5CHFA_enIN1187IN1187&udm&fvr=1&pvq=Cg0vZy8xMXN5NnRsZ3JmIhQKDnZyaW5kYXZhbiBsYXduEAIYA4kB2639JSrbTgo&lqi=Cg52cmluZGF2YW4gbGF3bkjt9eTs9LiAgAhaGBAAEAEYABgBIg52cmluZGF2YW4gbGF3bpIBD3dlZGRpbmdfc2VydmljZQ&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWe9LRFTZ9U7Mdut_SUq204K&daddr=3X4G%2BXR7,+Chhindwara+-+Chand+Rd,+Janta+Colony,+Chhindwara,+Seoni+Pranmoti,+Madhya+Pradesh+480001";
const venueEngagmentMapUrl = "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjw0Ia1o_2XAxUAAAAAHQAAAAAQCA..i&rlz=1C5CHFA_enIN1187IN1187&mstk=AUtExfDph2VIRsnT3OcRqinVyxIfxPEUXZYl9TnxloRPzbhSTJpKBwc5v1tho7jtFsSVCiPRGgfwxT674B7RszZjZpcufnCMdmXYj-ind16DNG-gSlw0_kGk38IVd8XBqgw5UujEYCuqAbiaphtFap5HlT-e0GOxg5T5axsvh4HHdAc3WoA&hl=en&pvq=Cg0vZy8xMXozeTNrNjU0gAEBkAEB&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU2lEj8AC9Y7MamXtPMCEZGM&daddr=VVHX%2B48G,+Badora,+Madhya+Pradesh+460001";
const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

function getTimeLeft() {
  const remaining = Math.max(0, muhurtham - Date.now());
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
}

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isInvitationOpening, setIsInvitationOpening] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [revealStep, setRevealStep] = useState(0);
  const musicRef = useRef<HTMLAudioElement>(null);
  const openingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => {
    if (openingTimerRef.current !== null) window.clearTimeout(openingTimerRef.current);
  }, []);

  useEffect(() => {
    if (!isInvitationOpen) return;
    const timings = [0, 440, 1040, 1500, 1930, 2540, 3190, 3740, 4210, 4740, 5220];
    const timers = timings.map((delay, step) => window.setTimeout(() => setRevealStep(step + 1), delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [isInvitationOpen]);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;
    audio.volume = 0.28;
    void audio.play().then(() => setIsMusicPlaying(true)).catch(() => setIsMusicPlaying(false));
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.16 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleMusic = async () => {
    const audio = musicRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsMusicPlaying(true);
      } catch {
        setIsMusicPlaying(false);
      }
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  const openInvitation = async () => {
    if (isInvitationOpening || isInvitationOpen) return;
    setIsInvitationOpening(true);
    openingTimerRef.current = window.setTimeout(() => setIsInvitationOpen(true), 2800);
    const audio = musicRef.current;
    if (!audio || !audio.paused) return;
    try {
      await audio.play();
      setIsMusicPlaying(true);
    } catch {
      setIsMusicPlaying(false);
    }
  };

  return (
    <main>
      <audio ref={musicRef} autoPlay loop preload="metadata" onPlay={() => setIsMusicPlaying(true)} onPause={() => setIsMusicPlaying(false)}>
        <source src={assetPath("/wedding-celebration.mp3")} type="audio/mpeg" />
      </audio>
      <section className={`invitation-entry ${isInvitationOpening ? "is-opening" : ""}`} aria-label="Wedding invitation introduction">
        <div className="entry-signature" aria-label="A message from Sanjay and Mohini">
          <span>A message from</span>
          <strong>Sanjay <LoveAmpersand /> Mohini</strong>
        </div>
        <p className="entry-subtitle">A joyful surprise awaits.</p>
        <button className="open-invitation" onClick={openInvitation}><span className="button-heart button-floral" aria-hidden="true">✾</span><span>Click to open</span></button>
        <p className="entry-reveal-note">With joy, we invite you to share in our celebration.</p>
      </section>
      <div className={`invitation-shell ${isInvitationOpen ? "is-open" : ""}`}>
      <nav className="nav" aria-label="Page navigation">
        <a href="#home" className="nav-brand" aria-label="S love M"><span>S</span><i aria-hidden="true">♥</i><span>M</span></a>
        <div className="nav-links">
          <a href="#details">Wedding details</a>
          <a href="#venue">Venue</a>
          <a href="#couple">Our story</a>
        </div>
      </nav>

      <section className="hero" id="home" data-reveal-step={revealStep}>
        <div className="hero-glow" />
        <div className="portrait portrait-groom" aria-hidden="true">
          <img src={assetPath("/groom.png")} alt="Sanjay" loading="eager" />
        </div>
        <div className="portrait portrait-bride" aria-hidden="true">
          <img src={assetPath("/bride.png")} alt="Mohini" loading="eager" />
        </div>
        <p className="eyebrow">Om Sri Ganeshaya Namaha</p>
        <InvitationMark />
        <p className="hero-invite">With the blessings of our parents and elders</p>
        <h1><span>Sanjay</span><i>&amp;</i><span>Mohini</span></h1>
        <p className="getting-married">are getting married</p>
        <p className="hero-date">Wednesday · 2 December 2026</p>
        <div className="countdown" aria-label="Countdown to wedding muhurtham">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div className="countdown-unit" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="countdown-note">Until the Muhurtham · 6:30 PM IST</p>
        <div className="mouse-scroll" aria-label="Scroll down for celebration details"><span /></div>
      </section>

      <section className="blessing reveal-on-scroll" id="blessings" aria-labelledby="blessing-title">
        <InitialPattern />
        <div className="section-shell">
          <InvitationMark />
          <p className="eyebrow">A warm invitation</p>
          <h2 id="blessing-title">Your presence and blessings<br /><em>would mean the world to us.</em></h2>
          <div className="fancy-divider" aria-hidden="true"><span /></div>
          <p className="family-signature"><span>The Pal Family</span><small>requests the pleasure of your company</small></p>
          <p className="body-copy">With joy and gratitude, we invite you to share in Sanjay and Mohini&apos;s beautiful new chapter.</p>
        </div>
      </section>

      <section className="families reveal-on-scroll" id="families" aria-label="Families">
        <InitialPattern />
        <div className="families-intro">
          <p className="eyebrow">The bride and groom</p>
          <h2>Two families, one<br /><em>auspicious beginning.</em></h2>
          <div className="fancy-divider" aria-hidden="true"><span /></div>
        </div>
        <div className="family-card">
          <p className="card-kicker">The groom</p>
          <h3>Sanjay</h3>
          <p>S/o</p>
          <strong>Smt. Lakhaniya Pal<br />&amp; Sri. Ramdayal Pal</strong>
        </div>
        <div className="joiner" aria-hidden="true">❦</div>
        <div className="family-card">
          <p className="card-kicker">The bride</p>
          <h3>Mohini</h3>
          <p>D/o</p>
          <strong>Smt. Sangeeta Pal<br />&amp; Sri. Makhan Lal Pal</strong>
        </div>
      </section>

      <section className="couple-feature reveal-on-scroll" id="couple" aria-labelledby="gallery-title">
        <div className="couple-photo" aria-hidden="true"><img src={assetPath("/BrideGroom.jpg")} alt="Sanjay and Mohini" /></div>
        <div className="couple-copy">
          <p className="eyebrow">Together, always</p>
          <h2 id="gallery-title">Sanjay <i>×</i> Mohini</h2>
          <p>Hand in hand, into a beautiful new chapter.</p>
        </div>
      </section>

      <section className="venue reveal-on-scroll" id="venue" aria-labelledby="venue-title">
        <InitialPattern />
        <div className="details-header">
          <h2 className="eyebrow">Engagement Ceremony</h2>
          <InvitationMark />
        </div>
        <div className="ceremony-card">
          <aside className="muhurtham-panel">
            <p className="eyebrow">Engagement Ceremony</p>
            <ShiningRing />
            <p>Friday<br />27 November 2026</p>
          </aside>
          <div className="details-list">
            <div><span>Date</span><strong>Friday, 27 November 2026</strong></div>
            <div><span>Time</span><strong>2:00 PM to 4:00 PM</strong></div>
            <div><span>Lunch</span><p><strong>3:00 PM Afternoon onwards</strong><small>Lunch will be served following the Engagement ceremony.</small></p></div>
            <div><span>Venue</span><p><strong>Ayodhya Marriage Lawn</strong><small>Badora, Betul-Athner Road, Betul, Madhya Pradesh</small><a className="direction-button" href={venueEngagmentMapUrl} target="_blank" rel="noreferrer">Get directions ↗</a></p></div>
          </div>
        </div>
      </section>

      <section className="details-page reveal-on-scroll" id="details" aria-labelledby="details-title">
        <InitialPattern />
        <div className="details-header">
          <h2 className="eyebrow">Wedding details</h2>
          <p id="details-title">A golden promise<br /><em>under Chhindwara skies</em></p>
          <InvitationMark />
        </div>
        <div className="ceremony-card">
          <aside className="muhurtham-panel">
            <p className="eyebrow">Wedding Muhurtham</p>
            <IndianWeddingSign />
          </aside>
          <div className="details-list">
            <div><span>Date</span><strong>Wednesday, 2 December 2026</strong></div>
            <div><span>Time</span><strong>6:30 PM to 8:00 PM</strong></div>
            <div><span>Dinner</span><p><strong>7:00 PM evening onwards</strong><small>Dinner will be served following the wedding ceremony.</small></p></div>
            <div><span>Venue</span><p><strong>Vrindawan Lawn</strong><small>Chand Road, Chhindwara, Madhya Pradesh</small><a className="direction-button" href={venueMapUrl} target="_blank" rel="noreferrer">Get directions ↗</a></p></div>
          </div>
        </div>
      </section>

      <section className="closing">
        <InitialPattern />
        <InvitationMark />
        <h2>We look forward to<br /><em>celebrating with you.</em></h2>
        <div className="closing-countdown" aria-label="Countdown to wedding muhurtham">
          <p>Counting down to the Muhurtham</p>
          <div>
            {Object.entries(timeLeft).map(([label, value]) => (
              <span key={label}><strong>{String(value).padStart(2, "0")}</strong><small>{label}</small></span>
            ))}
          </div>
          <em>2 December 2026 · 6:30 PM IST</em>
        </div>
        <p>With love, from the Pal family</p>
        <nav className="closing-links" aria-label="Invitation navigation">
          <a href="#home">Home</a>
          <a href="#blessings">Blessings</a>
          <a href="#families">Families</a>
          <a href="#couple">Our story</a>
          <a href="#details">Details</a>
          <a href="#venue">Venue</a>
        </nav>
      </section>

      <button className="music-toggle" type="button" onClick={toggleMusic} aria-pressed={isMusicPlaying} aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}><span aria-hidden="true">{isMusicPlaying ? "❚❚" : "▶"}</span>{isMusicPlaying ? "Pause music" : "Play music"}</button>
      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>}
      </div>
    </main>
  );
}
