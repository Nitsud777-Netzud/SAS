"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";

type Answers = {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  zipCode: string;
  interests: string[];
  skills: string;
  availability: string;
  motivation: string;
};

const initialAnswers: Answers = {
  name: "",
  email: "",
  phone: "",
  birthDate: "",
  zipCode: "",
  interests: [],
  skills: "",
  availability: "",
  motivation: "",
};

const steps = [
  { label: "BASICS", title: "Let's start with the basics.", description: "What should we call you, and how can S.A.S. reach you?" },
  { label: "ABOUT YOU", title: "A little about you.", description: "This helps us understand the community you're joining." },
  { label: "INTERESTS", title: "Where would you like to help?", description: "Choose the areas that interest you. You can select more than one." },
  { label: "EXPERIENCE", title: "What can you bring to the table?", description: "Tell us about skills, experience, or something you would like to learn." },
  { label: "AVAILABILITY", title: "What does your time look like?", description: "There is no required weekly commitment. Let us know what is realistic for you." },
  { label: "MOTIVATION", title: "What brought you here?", description: "In a few words, tell us why you'd like to volunteer." },
  { label: "REVIEW", title: "Ready to send your interest?", description: "Take a moment to review your answers before submitting." },
];

const interestOptions = [
  ["Research", "Investigate surveillance technology, policies, and public records."],
  ["Design & media", "Create graphics, videos, and educational content."],
  ["Community outreach", "Help connect S.A.S. with students and local communities."],
  ["Writing", "Help produce articles, summaries, and resources."],
  ["Other", "Bring another skill, idea, or perspective."],
];

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return <label className="volunteer-field-label" htmlFor={htmlFor}>{children}</label>;
}

export default function VolunteerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [notice, setNotice] = useState("");
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const toggleInterest = (interest: string) => {
    setAnswers((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const canContinue = () => {
    if (step === 0) return answers.name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email) && answers.phone.trim().length >= 7;
    if (step === 1) return Boolean(answers.birthDate) && /^\d{5}(?:-\d{4})?$/.test(answers.zipCode);
    if (step === 2) return answers.interests.length > 0;
    if (step === 3) return answers.skills.trim().length > 0;
    if (step === 4) return Boolean(answers.availability);
    if (step === 5) return answers.motivation.trim().length > 0;
    return true;
  };

  const next = () => {
    if (!canContinue()) {
      const messages = ["Add your name, a valid email address, and phone number to continue.", "Enter your date of birth and a valid 5-digit ZIP code.", "Choose at least one area of interest.", "Tell us about your skills or what you would like to learn.", "Select your availability.", "Tell us why you would like to volunteer."];
      setNotice(messages[step] ?? "Complete this step to continue.");
      return;
    }
    setNotice("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const back = () => {
    setNotice("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // The organization has not yet supplied a verified intake destination.
    // Do not claim that responses were delivered or persist them in the browser.
    setNotice("Your answers are ready, but S.A.S. has not configured a volunteer inbox yet. Nothing has been sent. Please check back soon.");
  };

  return (
    <main className="volunteer-page">
      <header className="site-header container">
        <Link href="/" className="wordmark" aria-label="Students Against Surveillance home">S.A.S.</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#the-issue">THE ISSUE</Link>
          <Link href="/#updates">WHAT&apos;S HAPPENING</Link>
        </nav>
        <Link className="header-cta" href="/">BACK TO HOME <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="volunteer-hero grid-bg">
        <div className="container">
          <Link className="article-back" href="/">← BACK TO S.A.S.</Link>
          <p className="eyebrow">STUDENTS AGAINST SURVEILLANCE / GET INVOLVED</p>
          <h1>Put your concern<br />into <span>action.</span></h1>
          <p className="volunteer-deck">Want to help S.A.S. protect student privacy? Share your time, skills, or ideas. Start by telling us a little about yourself.</p>
          <div className="volunteer-areas" aria-label="Ways to contribute">
            {interestOptions.slice(0, 4).map(([name], index) => (
              <span key={name}><b>0{index + 1}</b>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="volunteer-form-section">
        <div className="container volunteer-form-layout">
          <aside className="volunteer-aside">
            <p className="section-label">VOLUNTEER INTAKE</p>
            <h2>Every contribution moves the work forward.</h2>
            <p>This is an expression of interest, not an employment application. There is no required weekly commitment, </p>
            <p className="volunteer-privacy">Your answers stay in this form until you choose to submit. Do not include sensitive personal information.</p>
          </aside>

          <form className="volunteer-questionnaire" onSubmit={submit} noValidate>
            <div className="questionnaire-topline">
              <span>YOUR VOLUNTEER PROFILE</span>
              <span>{String(step + 1).padStart(2, "0")} <i>/</i> {String(steps.length).padStart(2, "0")}</span>
            </div>
            <div className="questionnaire-progress" role="progressbar" aria-label="Questionnaire progress" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="question-card" key={step}>
              <div className="question-card-meta"><span>STEP 0{step + 1}</span><span>{steps[step].label}</span></div>
              <h2>{steps[step].title}</h2>
              <p className="question-description">{steps[step].description}</p>

              {step === 0 && (
                <div className="volunteer-fields">
                  <div><FieldLabel htmlFor="volunteer-name">Your name</FieldLabel><input id="volunteer-name" autoComplete="name" value={answers.name} onChange={(event) => update("name", event.target.value)} placeholder="Enter your name" required /></div>
                  <div><FieldLabel htmlFor="volunteer-email">Email address</FieldLabel><input id="volunteer-email" type="email" autoComplete="email" value={answers.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" required /></div>
                  <div><FieldLabel htmlFor="volunteer-phone">Phone number</FieldLabel><input id="volunteer-phone" type="tel" autoComplete="tel" value={answers.phone} onChange={(event) => update("phone", event.target.value)} placeholder="(555) 555-5555" required /></div>
                </div>
              )}

              {step === 1 && (
                <div className="volunteer-fields">
                  <div><FieldLabel htmlFor="volunteer-birth-date">Date of birth</FieldLabel><input id="volunteer-birth-date" type="date" autoComplete="bday" max={new Date().toISOString().slice(0, 10)} value={answers.birthDate} onChange={(event) => update("birthDate", event.target.value)} required /></div>
                  <div><FieldLabel htmlFor="volunteer-zip">ZIP code</FieldLabel><input id="volunteer-zip" inputMode="numeric" autoComplete="postal-code" pattern="\d{5}(-\d{4})?" maxLength={10} value={answers.zipCode} onChange={(event) => update("zipCode", event.target.value)} placeholder="92359" required /></div>
                </div>
              )}

              {step === 2 && (
                <fieldset className="volunteer-interest-list">
                  <legend className="sr-only">Choose areas of interest</legend>
                  {interestOptions.map(([name, description]) => (
                    <label className={`volunteer-interest-option ${answers.interests.includes(name) ? "is-selected" : ""}`} key={name}>
                      <input type="checkbox" checked={answers.interests.includes(name)} onChange={() => toggleInterest(name)} />
                      <span className="volunteer-interest-copy"><strong>{name}</strong><small>{description}</small></span>
                      <i aria-hidden="true" />
                    </label>
                  ))}
                </fieldset>
              )}

              {step === 3 && (
                <div><FieldLabel htmlFor="volunteer-skills">Skills, experience, or something you would like to learn</FieldLabel><textarea id="volunteer-skills" rows={5} value={answers.skills} onChange={(event) => update("skills", event.target.value)} placeholder="Tell us about any relevant experience, interests, or skills you'd like to develop." required /></div>
              )}

              {step === 4 && (
                <fieldset className="volunteer-choice-group">
                  <legend className="volunteer-field-label">How often would you like to contribute?</legend>
                  {["A few hours when I can", "A few hours each month", "Regularly each week", "For a specific project", "Not sure yet"].map((option) => (
                    <label className={`volunteer-choice ${answers.availability === option ? "is-selected" : ""}`} key={option}>
                      <input type="radio" name="availability" value={option} checked={answers.availability === option} onChange={() => update("availability", option)} />
                      <span>{option}</span><i aria-hidden="true" />
                    </label>
                  ))}
                </fieldset>
              )}

              {step === 5 && (
                <div><FieldLabel htmlFor="volunteer-motivation">Why would you like to volunteer?</FieldLabel><textarea id="volunteer-motivation" rows={5} value={answers.motivation} onChange={(event) => update("motivation", event.target.value)} placeholder="What made you interested in getting involved?" required /></div>
              )}

              {step === 6 && (
                <div className="volunteer-review">
                  <div><span>NAME</span><strong>{answers.name}</strong></div>
                  <div><span>EMAIL</span><strong>{answers.email}</strong></div>
                  <div><span>PHONE</span><strong>{answers.phone}</strong></div>
                  <div><span>DATE OF BIRTH</span><strong>{answers.birthDate}</strong></div>
                  <div><span>ZIP CODE</span><strong>{answers.zipCode}</strong></div>
                  <div><span>AREAS OF INTEREST</span><strong>{answers.interests.join(", ")}</strong></div>
                  <div><span>SKILLS & EXPERIENCE</span><strong>{answers.skills}</strong></div>
                  <div><span>AVAILABILITY</span><strong>{answers.availability}</strong></div>
                  <div><span>MOTIVATION</span><strong>{answers.motivation}</strong></div>
                </div>
              )}
            </div>

            {notice && <p className="questionnaire-notice" role="status">{notice}</p>}
            <div className="questionnaire-controls">
              <button className="question-back" type="button" onClick={back} disabled={step === 0}>← BACK</button>
              {step < steps.length - 1 ? (
                <button className="button button-primary" type="button" onClick={next}>CONTINUE <span aria-hidden="true">↗</span></button>
              ) : (
                <button className="button button-primary" type="submit">SUBMIT INTEREST <span aria-hidden="true">↗</span></button>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div><Link href="/" className="wordmark footer-wordmark">S.A.S.</Link><p>Students Against Surveillance. Youth-led organizing for privacy, transparency, and student voice.</p></div>
          <Link href="/" className="back-to-top">BACK TO HOME ↑</Link>
          <p className="footer-location">INLAND EMPIRE <span>•</span> CALIFORNIA</p>
        </div>
      </footer>
    </main>
  );
}
