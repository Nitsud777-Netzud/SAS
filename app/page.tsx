"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "THE ISSUE", href: "#the-issue" },
  { label: "RESEARCH", href: "#research" },
  { label: "UPDATES", href: "#updates" },
];

const issueCards = [
  { number: "01", title: "KNOW WHO IS WATCHING YOU", description: "A clear, sourced explainer on Axon, Flock Safety, automated license-plate readers, and the case for public oversight.", href: "/know-who-is-watching-you" },
];

const eyes = [
  ["8%", "12%", "-8deg"], ["25%", "30%", "9deg"], ["42%", "10%", "-3deg"],
  ["61%", "25%", "12deg"], ["78%", "9%", "-10deg"], ["90%", "36%", "5deg"],
  ["16%", "62%", "7deg"], ["36%", "76%", "-12deg"], ["55%", "58%", "4deg"],
  ["73%", "72%", "-6deg"], ["88%", "61%", "10deg"], ["4%", "84%", "-5deg"],
];

function Eye() {
  return (
    <svg className="eye-svg" viewBox="0 0 120 72" aria-hidden="true">
      <path className="eye-outline" d="M 5 36 C 30 4, 90 4, 115 36 C 90 68, 30 68, 5 36 Z" />
      <circle className="eye-iris" cx="60" cy="36" r="17" />
      <circle className="eye-pupil" cx="60" cy="36" r="8" />
      <path className="eye-lash" d="M 17 24 L 7 12 M 28 15 L 22 2 M 42 9 L 39 -4 M 78 9 L 81 -4 M 92 15 L 98 2 M 103 24 L 113 12" />
    </svg>
  );
}

function Watcher() {
  return (
    <div className="watcher-popup">
      <div className="watcher-scan" aria-hidden="true" />
      <p className="watcher-meta">SURVEILLANCE FEED / SUBJECT 01</p>
      <div className="watcher-face" aria-hidden="true"><div className="watcher-eyes" /></div>
      <div className="watcher-sign" aria-hidden="true">I AM!</div>
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="section-label"><span>{number}</span> / {children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [watcherOpen, setWatcherOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const watcherTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (watcherOpen && !dialog.open) dialog.showModal();
    if (!watcherOpen && dialog.open) dialog.close();
  }, [watcherOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const updateScrollbar = () => {
      const section = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
        ?.closest(".about-section, .final-cta");
      root.classList.toggle("red-scrollbar", Boolean(section));
    };
    updateScrollbar();
    window.addEventListener("scroll", updateScrollbar, { passive: true });
    window.addEventListener("resize", updateScrollbar);
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      root.classList.remove("red-scrollbar");
    };
  }, []);

  const closeWatcher = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setWatcherOpen(false);
    watcherTriggerRef.current?.focus();
  };

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header container">
        <a href="#top" className="wordmark" aria-label="Students Against Surveillance home">S.A.S.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-cta" href="#get-involved">TAKE PART <span aria-hidden="true">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >{menuOpen ? "CLOSE" : "MENU"}</button>
      </header>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>
        ))}
      </nav>

      <div className="marquee" aria-label="Students Against Surveillance — Inland Empire, California and beyond">
        <div className="marquee-track" aria-hidden="true">
          <span>STUDENTS AGAINST SURVEILLANCE • INLAND EMPIRE → CALIFORNIA → BEYOND • </span>
          <span>STUDENTS AGAINST SURVEILLANCE • INLAND EMPIRE → CALIFORNIA → BEYOND • </span>
        </div>
      </div>

      <section id="top" className="hero grid-bg" aria-labelledby="hero-title">
        <div className="eye-field" aria-hidden="true">
          {eyes.map(([left, top, rotate], index) => (
            <span key={index} className="eye" style={{ left, top, "--rotate": rotate, "--delay": `${index * 1.1}s` } as CSSProperties}><Eye /></span>
          ))}
        </div>
        <div className="container hero-inner" id="main-content" tabIndex={-1}>
          <p className="eyebrow">YOUTH-LED <span>•</span> INLAND EMPIRE <span>•</span> CALIFORNIA</p>
          <h1 id="hero-title" className="hero-word">Students<br /><span>Against</span><br />Surveillance.</h1>
          <div className="hero-bottom">
            <p className="hero-intro">We are a youth-led organization working to challenge ALPRS and related surveillance technologies—and build a future where students and communities have a real say in how they are watched.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#get-involved">TAKE PART <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#the-issue">UNDERSTAND THE ISSUE <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div>
            <SectionLabel number="01">ABOUT S.A.S.</SectionLabel>
            <ol className="principles" aria-label="Our approach">
              <li><span>01</span> RESEARCH</li>
              <li><span>02</span> EDUCATE</li>
              <li><span>03</span> ORGANIZE</li>
            </ol>
          </div>
          <div className="about-copy">
            <h2>Privacy affects every student.</h2>
            <p>S.A.S. is based in Redlands and the Inland Empire. We are building a youth movement to research, explain, and organize around surveillance in our schools and communities.</p>
            <p>Our work starts with clear information, public accountability, and the belief that the people affected by surveillance deserve a meaningful voice in decisions about it.</p>
          </div>
        </div>
      </section>

      <section id="the-issue" className="issue-section" aria-labelledby="issue-title">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionLabel number="02">THE ISSUE</SectionLabel>
              <h2 id="issue-title">Know who is<br />watching you.</h2>
            </div>
            <p>Surveillance technology can shape what people feel comfortable saying, doing, and organizing. Understanding the systems—and the rules governing them—is a starting point for meaningful public debate.</p>
          </div>
          <div className="issue-cards single-issue-card">
            {issueCards.map((issue) => (
              <a href={issue.href} key={issue.number} className="issue-card">
                <span className="card-number">{issue.number}</span>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
                <span className="card-link">READ THE ARTICLE <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="updates-section">
        <div className="container">
          <div className="updates-heading">
            <div><SectionLabel number="03">WHAT&apos;S HAPPENING</SectionLabel><h2>What&apos;s happening.</h2></div>
            <span className="status-label">FOLLOW / READ</span>
          </div>
          <div className="happening-grid">
            <article className="happening-card" id="socials">
              <span className="card-number">01 / SOCIAL</span>
              <h3>Follow the conversation.</h3>
              <p>Find S.A.S. across our social channels for announcements, short explainers, and updates from the movement.</p>
              <div className="social-links" aria-label="S.A.S. social platforms">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM <span aria-hidden="true">↗</span></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer">X / TWITTER <span aria-hidden="true">↗</span></a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TIKTOK <span aria-hidden="true">↗</span></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YOUTUBE <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <a className="happening-card happening-card-link" href="#website-updates" id="website">
              <span className="card-number">02 / WEBSITE</span>
              <h3>Read the latest updates.</h3>
              <p>Visit the website update log for dated announcements, project progress, and published materials.</p>
              <span className="card-link">VIEW WEBSITE UPDATES <span aria-hidden="true">↘</span></span>
            </a>
          </div>
          <div className="website-updates" id="website-updates">
            <div className="website-updates-heading">
              <div><SectionLabel number="03A">WEBSITE UPDATES</SectionLabel><h3>From the website.</h3></div>
              <span className="status-label">PUBLIC LOG</span>
            </div>
            <div className="empty-updates">
              <span className="empty-index">001 / STATUS</span>
              <h3>No public updates yet.</h3>
              <p>Website updates will appear here as dated entries when new information and materials are ready to publish.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="final-cta">
        <div className="container cta-inner">
          <SectionLabel number="04">PARTICIPATE</SectionLabel>
          <h2>Don&apos;t just<br />know.<br /><span>Ask better questions.</span></h2>
          <div className="cta-copy">
            <p>Start by learning how a system works, checking the policy behind it, and bringing specific questions to the public conversation.</p>
            <p className="contact-note">An official contact or sign-up channel has not been published on this site yet. We will add participation details here once they are confirmed.</p>
            <a className="button button-dark" href="#research">START WITH THE EVIDENCE <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div><a href="#top" className="wordmark footer-wordmark">S.A.S.</a><p>Students Against Surveillance — youth-led organizing for privacy, transparency, and student voice.</p></div>
          <a href="#top" className="back-to-top">BACK TO TOP ↑</a>
          <p className="footer-location">INLAND EMPIRE <span>•</span> CALIFORNIA</p>
        </div>
      </footer>

      <button
        ref={watcherTriggerRef}
        type="button"
        className="watcher-trigger"
        onClick={() => setWatcherOpen(true)}
        aria-label="Open the surveillance illustration"
      >?</button>
      <dialog
        ref={dialogRef}
        className="watcher-dialog"
        aria-labelledby="watcher-title"
        onCancel={() => setWatcherOpen(false)}
        onClose={() => {
          setWatcherOpen(false);
          watcherTriggerRef.current?.focus();
        }}
      >
        <div className="dialog-heading"><p id="watcher-title">SURVEILLANCE FEED / SUBJECT 01</p><button type="button" onClick={closeWatcher} aria-label="Close illustration">CLOSE ×</button></div>
        <Watcher />
        <p className="dialog-caption">A visual reminder: ask what is collected, who can access it, and what rules apply.</p>
      </dialog>
    </main>
  );
}
