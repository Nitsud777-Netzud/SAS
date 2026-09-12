"use client";

import { useEffect, useRef, useState } from "react";

const nav = ["ABOUT", "THE ISSUE", "UPDATES"];

const issues = [
  ["01", "ALPRS", "Learn what ALPRS are, how they are used, and why they matter."],
  ["02", "THE TECHNOLOGY", "Understand the broader surveillance systems connected to our communities."],
  ["03", "THE RESEARCH", "Read the sources and documentation behind our work."],
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
      <div className="watcher-scan" />
      <p className="watcher-meta">SURVEILLANCE FEED / SUBJECT 01</p>
      <div className="watcher-face">
        <div className="watcher-eyes" />
      </div>
      <div className="watcher-sign">I AM!</div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [watcherOpen, setWatcherOpen] = useState(false);
  const watcherTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (watcherTimer.current) clearTimeout(watcherTimer.current);
    };
  }, []);

  const revealWatcher = () => {
    setWatcherOpen(true);
    if (watcherTimer.current) clearTimeout(watcherTimer.current);
    watcherTimer.current = setTimeout(() => setWatcherOpen(false), 3000);
  };

  const handleWatcherKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealWatcher();
    }
  };

  return (
    <main>
      <header className="container flex items-center justify-between border-b-2 border-[var(--line)] py-5">
        <a href="#top" className="display text-2xl">S.A.S.</a>
        <nav className="hidden gap-7 text-xs font-black tracking-widest md:flex">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[var(--accent)]">{item}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#updates" className="bg-[var(--accent)] px-4 py-2 text-xs font-black tracking-widest text-white transition hover:bg-white hover:text-black">FOLLOW ↗</a>
          <button aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="border border-[var(--line)] px-3 py-2 text-xs font-black md:hidden">{menuOpen ? "CLOSE" : "MENU"}</button>
        </div>
      </header>

      {menuOpen && <div className="border-b-2 border-[var(--line)] bg-[#0d0d0c] p-7 md:hidden"><nav className="flex flex-col gap-5">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="display text-4xl hover:text-[var(--accent)]">{item}</a>)}</nav></div>}

      <div className="marquee"><div className="marquee-track"><span>STUDENTS AGAINST SURVEILLANCE • INLAND EMPIRE → CALIFORNIA → BEYOND • </span><span aria-hidden="true">STUDENTS AGAINST SURVEILLANCE • INLAND EMPIRE → CALIFORNIA → BEYOND • </span></div></div>

      <section id="top" className="grid-bg border-b-2 border-[var(--line)] py-20 md:py-28">
        <div className="eye-field" aria-hidden="true">
          {eyes.map(([left, top, rotate], index) => <span key={index} className="eye" style={{ left, top, "--rotate": rotate, "--delay": `${index * 1.1}s` } as React.CSSProperties}><Eye /></span>)}
        </div>
        <div className="container">
          <p className="hero-copy mb-6 text-xs font-black tracking-[.2em] text-[var(--muted)]">YOUTH-LED • INLAND EMPIRE • CALIFORNIA</p>
          <h1 className="display hero-word max-w-5xl text-[clamp(4rem,11vw,9.5rem)] leading-[.82] uppercase">Students<br/><span className="bg-[var(--accent)] px-2 text-white">Against</span><br/>Surveillance.</h1>
          <div className="hero-copy mt-12 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
            <p className="max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">We are a youth-led organization working to challenge ALPRS and related surveillance technologies—and build a future where students and communities have a real say in how they are watched.</p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="#the-issue" className="border-2 border-[var(--line)] px-5 py-4 text-center text-sm font-black tracking-widest transition hover:border-white hover:bg-white hover:text-black">LEARN ABOUT THE ISSUE ↘</a>
              <a href="#about" className="bg-[var(--accent)] px-5 py-4 text-center text-sm font-black tracking-widest text-white transition hover:bg-white hover:text-black">ABOUT S.A.S. ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section py-20 md:py-28">
        <div className="container relative">
          <div className="grid gap-7">
            <div>
              <p className="section-kicker text-xs font-black tracking-[.2em]">01 / ABOUT S.A.S.</p>
              <div className="mt-7 flex flex-col border-y border-black/35 bg-black/20">
                {[['01','RESEARCH'],['02','EDUCATE'],['03','ORGANIZE']].map(([n,t]) => <div key={n} className="flex items-center gap-4 border-b border-black/35 px-4 py-4 last:border-b-0"><span className="text-xl font-black text-black/75">{n}</span><span className="text-[10px] font-black tracking-[.16em]">{t}</span></div>)}
              </div>
            </div>
            <div>
              <h2 className="display max-w-4xl text-5xl uppercase leading-[.95] md:text-7xl">Privacy affects every student.</h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">S.A.S. is currently based in Redlands and the Inland Empire. We are building a youth movement that can research, educate, organize, and advocate around surveillance in our schools and communities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="the-issue" className="border-b-2 border-[var(--line)] bg-[var(--panel)] py-20 md:py-28">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-black tracking-[.2em] text-[var(--accent)] before:mr-2 before:inline-block before:h-[2px] before:w-7 before:bg-current">02 / THE ISSUE</p>
              <h2
                className="display max-w-4xl cursor-default text-6xl uppercase leading-[.9] md:text-8xl"
                role="button"
                tabIndex={0}
                aria-label="Know what is watching you"
                onClick={revealWatcher}
                onKeyDown={handleWatcherKeyDown}
              >
                Know what is<br/>watching you.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">Surveillance technology can shape what people feel comfortable saying, doing, and organizing. Understanding the systems is the first step toward meaningful public debate.</p>
          </div>

          {watcherOpen && <div className="watcher-overlay" role="dialog" aria-label="Surveillance feed"><div><Watcher /></div></div>}

          <div className="grid border-t border-neutral-700 md:grid-cols-3">
            {issues.map(([n,t,d]) => <a href="#" key={n} className="issue-card border-b border-neutral-700 p-7 transition hover:bg-white hover:text-black md:border-r md:last:border-r-0"><span className="text-xs font-black text-[var(--accent)]">{n}</span><h3 className="display mt-10 text-3xl uppercase">{t}</h3><p className="mt-4 text-sm leading-6 text-neutral-400">{d}</p><span className="issue-arrow mt-8 block font-black">READ MORE ↗</span></a>)}
          </div>
        </div>
      </section>

      <section id="updates" className="container py-20 md:py-28">
        <div className="flex items-end justify-between border-b-2 border-[var(--line)] pb-5"><div><p className="mb-4 text-xs font-black tracking-[.2em] text-[var(--muted)]">03 / UPDATES</p><h2 className="display text-5xl uppercase md:text-7xl">What's happening</h2></div><a href="#" className="hidden text-xs font-black tracking-widest text-[var(--accent)] underline sm:block">ALL UPDATES ↗</a></div>
        <div className="grid gap-px border-b border-[var(--line)] bg-[var(--line)] sm:grid-cols-3"><div className="bg-[var(--paper)] p-7"><p className="text-[10px] font-black tracking-widest text-[var(--accent)]">FIELD NOTE / 001</p><p className="mt-12 text-sm leading-6 text-[var(--muted)]">Research, campaigns, and events will be published here as S.A.S. grows.</p></div><div className="bg-[var(--paper)] p-7"><p className="text-[10px] font-black tracking-widest text-[var(--accent)]">COMING SOON</p><p className="mt-12 text-sm leading-6 text-[var(--muted)]">Follow S.A.S. for new research and organizing updates.</p></div><div className="bg-[var(--paper)] p-7"><p className="text-[10px] font-black tracking-widest text-[var(--accent)]">SIGNAL</p><p className="mt-12 text-sm leading-6 text-[var(--muted)]">The next chapter is being built by students.</p></div></div>
      </section>

      <section className="final-cta border-t-2 border-black py-16 text-white md:py-24">
        <div className="container relative overflow-hidden">
          <p className="text-xs font-black tracking-[.2em] text-white/75">04 / TAKE BACK YOUR PRIVACY</p>
          <h2 className="display mt-5 max-w-5xl text-6xl uppercase leading-[.85] md:text-9xl">Don't just<br/>know.<br/><span className="text-black">Do something.</span></h2>
          <a href="#updates" className="mt-10 inline-block bg-black px-7 py-5 text-sm font-black tracking-widest text-white transition hover:bg-white hover:text-black">STAY INFORMED ↗</a>
        </div>
      </section>

      <footer className="border-t-2 border-[var(--line)] bg-[#050505] py-10 text-white">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><div className="display text-3xl">S.A.S.</div><p className="mt-2 max-w-sm text-xs leading-5 text-[var(--muted)]">Students Against Surveillance — youth-led organizing for privacy, transparency, and student voice.</p></div>
          <p className="text-[10px] font-black tracking-widest text-[var(--muted)]">INLAND EMPIRE • CALIFORNIA</p>
        </div>
      </footer>
    </main>
  );
}
