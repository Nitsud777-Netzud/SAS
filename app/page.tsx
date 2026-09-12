const nav = ["ABOUT", "THE ISSUE", "GET INVOLVED", "UPDATES"];

export default function Home() {
  return (
    <main>
      <header className="container flex items-center justify-between border-b-2 border-[var(--line)] py-5">
        <a href="#top" className="display text-2xl">S.A.S.</a>
        <nav className="hidden gap-7 text-xs font-black tracking-widest md:flex">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-[var(--accent)]">{item}</a>)}
        </nav>
        <a href="#get-involved" className="bg-[var(--accent)] px-4 py-2 text-xs font-black tracking-widest text-black transition hover:bg-white">JOIN US ↗</a>
      </header>

      <div className="marquee"><div className="container flex justify-between"><span>STUDENTS AGAINST SURVEILLANCE</span><span className="hidden sm:inline">INLAND EMPIRE → CALIFORNIA → BEYOND</span></div></div>

      <section id="top" className="grid-bg border-b-2 border-[var(--line)] py-20 md:py-28">
        <div className="container">
          <p className="mb-6 text-xs font-black tracking-[.2em] text-[var(--muted)]">YOUTH-LED • INLAND EMPIRE • CALIFORNIA</p>
          <h1 className="display max-w-5xl text-[clamp(4rem,11vw,9.5rem)] leading-[.82] uppercase">Students<br/><span className="bg-[var(--accent)] px-2 text-black">Against</span><br/>Surveillance.</h1>
          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
            <p className="max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">We are a youth-led organization working to challenge ALPRS and related surveillance technologies—and build a future where students and communities have a real say in how they are watched.</p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="#the-issue" className="border-2 border-[var(--line)] px-5 py-4 text-center text-sm font-black tracking-widest transition hover:border-white hover:bg-white hover:text-black">LEARN ABOUT THE ISSUE ↘</a>
              <a href="#get-involved" className="bg-[var(--accent)] px-5 py-4 text-center text-sm font-black tracking-widest text-black transition hover:bg-white">GET INVOLVED ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container border-b-2 border-[var(--line)] py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <p className="text-xs font-black tracking-[.2em] text-[var(--muted)]">01 / ABOUT S.A.S.</p>
          <div>
            <h2 className="display text-5xl uppercase leading-none md:text-7xl">Students have a stake in the future of privacy.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">S.A.S. is currently based in Redlands and the Inland Empire. We are building a youth movement that can research, educate, organize, and advocate around surveillance in our schools and communities.</p>
          </div>
        </div>
      </section>

      <section id="the-issue" className="border-b-2 border-[var(--line)] bg-[#11110f] py-20 text-white md:py-28">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-5 text-xs font-black tracking-[.2em] text-[var(--accent)]">02 / THE ISSUE</p><h2 className="display max-w-4xl text-6xl uppercase leading-[.9] md:text-8xl">Know what is<br/>watching you.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">Surveillance technology can shape what people feel comfortable saying, doing, and organizing. Understanding the systems is the first step toward meaningful public debate.</p>
          </div>
          <div className="grid border-t border-neutral-700 md:grid-cols-3">
            {[['01','ALPRS','Learn what ALPRS are, how they are used, and why they matter.'],['02','THE TECHNOLOGY','Understand the broader surveillance systems connected to our communities.'],['03','THE RESEARCH','Read the sources and documentation behind our work.']].map(([n,t,d]) => <a href="#" key={n} className="border-b border-neutral-700 p-7 transition hover:bg-white hover:text-black md:border-r md:last:border-r-0"><span className="text-xs font-black text-[var(--accent)]">{n}</span><h3 className="display mt-10 text-3xl uppercase">{t}</h3><p className="mt-4 text-sm leading-6 text-neutral-400">{d}</p><span className="mt-8 block font-black">READ MORE ↗</span></a>)}
          </div>
        </div>
      </section>

      <section id="get-involved" className="border-b-2 border-[var(--line)] py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div><p className="mb-5 text-xs font-black tracking-[.2em] text-[var(--muted)]">03 / GET INVOLVED</p><h2 className="display text-6xl uppercase leading-[.9] md:text-8xl">Don't just<br/>watch.</h2></div>
            <div className="flex flex-col justify-between"><p className="text-xl leading-8">S.A.S. is being built by students. Volunteer, help with research, organize with other students, or help us build the next chapter.</p><a href="#" className="mt-10 inline-block self-start bg-[var(--accent)] px-7 py-5 text-sm font-black tracking-widest text-black transition hover:bg-white">VOLUNTEER WITH S.A.S. ↗</a></div>
          </div>
        </div>
      </section>

      <section id="updates" className="container py-20 md:py-28">
        <div className="flex items-end justify-between border-b-2 border-[var(--line)] pb-5"><div><p className="mb-4 text-xs font-black tracking-[.2em] text-[var(--muted)]">04 / UPDATES</p><h2 className="display text-5xl uppercase md:text-7xl">What's happening</h2></div><a href="#" className="hidden text-xs font-black tracking-widest text-[var(--accent)] underline sm:block">ALL UPDATES ↗</a></div>
        <div className="py-12"><p className="text-lg text-[var(--muted)]">S.A.S. updates, campaigns, and events will appear here as the organization grows.</p></div>
      </section>

      <footer className="border-t-2 border-[var(--line)] bg-[#050505] py-10 text-white">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><div className="display text-5xl">S.A.S.</div><p className="mt-3 text-sm text-neutral-400">Students Against Surveillance</p></div>
          <div className="text-left text-xs leading-6 text-neutral-400 md:text-right"><p>REDLANDS / INLAND EMPIRE / CALIFORNIA</p><p className="mt-2">Youth-led. Community-focused.</p></div>
        </div>
      </footer>
    </main>
  );
}
