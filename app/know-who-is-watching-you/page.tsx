"use client";

import Link from "next/link";
import { useEffect } from "react";

const sources = [
  {
    title: "Congressional Research Service — Automated License Plate Readers: Background and Legal Issues (2025)",
    url: "https://www.everycrsreport.com/files/2025-07-21_IF13068_d076b3f2758840a215785396995668a915d5881f.pdf",
    note: "A nonpartisan overview of ALPR operation, law-enforcement uses, and legal questions.",
  },
  {
    title: "Electronic Frontier Foundation — Automatic License Plate Readers",
    url: "https://www.eff.org/files/2026/02/05/2025.11_alpr_one_pager_-_final.pdf",
    note: "A civil-liberties explanation of how plate reads become searchable location histories.",
  },
  {
    title: "American Civil Liberties Union — Fight Creepy ALPR Cameras",
    url: "https://www.aclu.org/campaigns-initiatives/get-the-flock-out",
    note: "Research and advocacy concerning Flock's ALPR network and risks from broad data access.",
  },
  {
    title: "American Civil Liberties Union — Other ALPR Vendors",
    url: "https://www.aclu.org/news/privacy-technology/tracking-alpr-cameras/other-alpr-vendors",
    note: "A comparison of vendor capabilities, retention practices, and AI-enabled image search.",
  },
  {
    title: "Axon — Written testimony on ALPR technology (September 2026)",
    url: "https://apps.legislature.ky.gov/CommitteeDocuments/8/44416/5.%20Automatic%20License%20Plate%20Readers%20%28Axon%20Statement%29.pdf",
    note: "A vendor's own description of its ALPR product and claimed safeguards; read alongside independent sources.",
  },
  {
    title: "Federal Register — Flock Safety ALPR system privacy notice (2024)",
    url: "https://www.govinfo.gov/content/pkg/FR-2024-04-22/pdf/2024-08473.pdf",
    note: "A government-published description of Flock system data and retention in a specific federal deployment.",
  },
];

export default function KnowWhoIsWatchingYou() {
  useEffect(() => {
    document.documentElement.classList.remove("red-scrollbar");
  }, []);

  return (
    <main className="article-page">
      <header className="site-header container">
        <Link href="/" className="wordmark" aria-label="Students Against Surveillance home">S.A.S.</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#the-issue">THE ISSUE</Link>
          <Link href="/#updates">WHAT&apos;S HAPPENING</Link>
        </nav>
        <Link className="header-cta" href="/#updates">LATEST UPDATES <span aria-hidden="true">↗</span></Link>
      </header>

      <div className="article-hero grid-bg">
        <div className="container">
          <Link className="article-back" href="/#the-issue">← BACK TO THE ISSUE</Link>
          <p className="eyebrow">S.A.S. EXPLAINER / 01</p>
          <h1>Know who is<br /><span>watching you.</span></h1>
          <p className="article-deck">A guide to Axon, Flock Safety, automated license-plate readers, and why the public should question systems that turn everyday travel into searchable data.</p>
        </div>
      </div>

      <article className="container article-content">
        <aside className="article-note">
          <strong>First, a distinction.</strong>
          <p>Axon and Flock Safety are separate companies and competitors in the public-safety technology market. They do not operate one shared product. This article discusses their relevant products as examples of a broader surveillance category.</p>
        </aside>

        <section>
          <p className="section-label">01 / THE COMPANIES</p>
          <h2>Axon and Flock Safety.</h2>
          <p><strong>Axon Enterprise</strong> is a public-safety technology company known for products such as body-worn cameras, conducted-energy devices, digital evidence services, and software for police agencies. Its product portfolio also includes automated license-plate recognition (ALPR) technology and vehicle-attribute analysis.</p>
          <p><strong>Flock Safety</strong> is a public-safety technology company whose best-known products include fixed ALPR cameras and a cloud-based platform used by law-enforcement agencies and other customers. Its systems can record vehicle observations and make them searchable by authorized users, depending on the customer's configuration and agreements.</p>
          <p>Both companies sell technology to public-safety organizations, but their product designs, contracts, data-sharing settings, retention rules, and customer policies can differ. A responsible review must examine the actual local contract and configuration—not assume every deployment works the same way.</p>
        </section>

        <section>
          <p className="section-label">02 / THE TECHNOLOGY</p>
          <h2>What is an ALPR—and how does it work?</h2>
          <p>An automated license-plate reader uses a camera and software to detect a vehicle and read its license plate. A system may also record an image, the time and location of the observation, and details such as vehicle make, model, body style, or color.</p>
          <ol className="article-steps">
            <li><span>01</span><div><strong>Capture</strong><p>A fixed roadside camera or a camera mounted on a vehicle records an image as a vehicle passes.</p></div></li>
            <li><span>02</span><div><strong>Read and classify</strong><p>Software identifies the plate characters. Some systems also use image analysis to estimate vehicle attributes.</p></div></li>
            <li><span>03</span><div><strong>Store</strong><p>The observation can be saved with its timestamp and location in a local or cloud-hosted database. Retention varies by vendor, customer settings, and policy.</p></div></li>
            <li><span>04</span><div><strong>Search and alert</strong><p>Authorized users may search past observations or compare a plate against a watchlist. A match can generate an alert for a human to assess.</p></div></li>
            <li><span>05</span><div><strong>Share</strong><p>Depending on permissions and agreements, records may be accessible to other agencies or users. Sharing rules are a key part of any local assessment.</p></div></li>
          </ol>
          <p>ALPR is not automatically the same thing as facial recognition. A basic plate reader is designed to read vehicle plates. Some broader camera platforms can include other video analytics, so it is important to identify the exact product and features being deployed.</p>
        </section>

        <section>
          <p className="section-label">03 / THE CASE FOR OPPOSITION</p>
          <h2>Why should communities oppose mass deployment?</h2>
          <p>S.A.S. opposes indiscriminate, poorly governed vehicle surveillance because the collection can affect people who are not suspected of wrongdoing. The concern is not limited to one camera: when observations are retained and connected across locations, they can create a record of where a vehicle has been over time.</p>
          <ul className="article-points">
            <li><strong>Movement becomes searchable.</strong> Repeated location records can reveal routines and sensitive visits—such as trips to medical facilities, places of worship, schools, or political gatherings.</li>
            <li><strong>Access can expand beyond the original purpose.</strong> Inter-agency sharing and broad search permissions can make a local camera network part of a much larger system. The public should know who can search it and under what rules.</li>
            <li><strong>Errors can have consequences.</strong> Automated reads and vehicle classifications are not infallible. A mistaken plate read or an unreliable watchlist entry can create an investigative lead that deserves careful human verification.</li>
            <li><strong>Oversight may lag behind capability.</strong> A vendor's privacy promises are not a substitute for enforceable local rules, public reporting, independent audits, and meaningful consequences for misuse.</li>
            <li><strong>People may change their behavior.</strong> The prospect of being tracked can discourage people from attending events, seeking services, associating with others, or taking part in public life.</li>
          </ul>
          <p>These concerns do not require assuming every officer or every deployment is abusive. They are reasons to demand narrow purposes, strict access controls, short retention, transparent agreements, independent audits, and a clear way to investigate and remedy misuse. S.A.S.'s position is that communities should reject mass, networked tracking where those safeguards cannot be guaranteed.</p>
        </section>

        <section>
          <p className="section-label">04 / RESEARCH AND ACCOUNTABILITY</p>
          <h2>What does the evidence say?</h2>
          <p>There is no single national configuration. The most reliable way to understand a local system is to compare vendor documentation with public contracts, agency policies, retention schedules, access logs, audit reports, and independent research.</p>
          <p>The Congressional Research Service explains the basic technology and legal questions. The EFF and ACLU document civil-liberties concerns, including the implications of turning plate observations into searchable histories and sharing data across jurisdictions. Vendor statements are also useful—but should be read as descriptions of the company's own product and claims, not as independent evaluations.</p>
          <p>Research and reporting should distinguish documented system capabilities from claims about how a particular agency actually uses them. Where a concern is based on a lawsuit, audit, or reported incident, identify the source and its status rather than presenting an allegation as a proven finding.</p>
          <div className="article-source-list">
            <h3>Sources to read</h3>
            {sources.map((source, index) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="article-source">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{source.title}</strong><p>{source.note}</p></div>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="article-questions">
          <p className="section-label">05 / QUESTIONS TO ASK LOCALLY</p>
          <h2>Before a camera goes up, ask:</h2>
          <ul className="article-points">
            <li>What exact product and features are being purchased?</li>
            <li>What data is collected, and how long is each type retained?</li>
            <li>Which agencies, employees, and outside parties can access or search it?</li>
            <li>Can local data be shared across jurisdictions or with federal agencies?</li>
            <li>Are searches logged, independently audited, and reported publicly?</li>
            <li>What happens after misuse, an inaccurate match, or a data breach?</li>
            <li>Can the public review the contract, policy, and impact assessment before approval?</li>
          </ul>
        </section>

        <div className="article-end">
          <p>SURVEILLANCE SHOULD BE A PUBLIC QUESTION.</p>
          <Link className="button button-primary" href="/#updates">SEE WHAT&apos;S HAPPENING <span aria-hidden="true">↗</span></Link>
          <Link className="article-back" href="/">← RETURN HOME</Link>
        </div>
      </article>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div><Link href="/" className="wordmark footer-wordmark">S.A.S.</Link><p>Students Against Surveillance — youth-led organizing for privacy, transparency, and student voice.</p></div>
          <Link href="/#top" className="back-to-top">BACK TO TOP ↑</Link>
          <p className="footer-location">INLAND EMPIRE <span>•</span> CALIFORNIA</p>
        </div>
      </footer>
    </main>
  );
}
