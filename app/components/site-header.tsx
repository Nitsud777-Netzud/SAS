"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "HOME", href: "/#top", key: "home" },
  { label: "VOLUNTEER", href: "/volunteer", key: "volunteer" },
  { label: "UPDATES", href: "/#updates", key: "updates" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header container">
        <Link href="/#top" className="wordmark" aria-label="Students Against Surveillance home">S.A.S.</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.key} className={item.key === "volunteer" ? "nav-volunteer" : undefined} href={item.href}>{item.label}</Link>
          ))}
        </nav>
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
          <Link key={item.key} className={item.key === "volunteer" ? "nav-volunteer" : undefined} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
