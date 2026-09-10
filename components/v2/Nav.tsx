"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTA_HREF = "/v2/boka";

const links = [
  { label: "Resultat", href: "/v2/#resultat" },
  { label: "Tjänster", href: "/v2/#erbjudandet" },
  { label: "Process", href: "/v2/#processen" },
  { label: "FAQ", href: "/v2/#faq" },
];

export default function V2Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSv = !pathname.startsWith("/en");
  const svHref = pathname.startsWith("/en/v2") ? pathname.replace("/en/v2", "/v2") : "/v2";
  const enHref = pathname.startsWith("/v2") ? pathname.replace("/v2", "/en/v2") : "/en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--v2-border)" : "transparent"}`,
      }}
    >
      <div
        className="v2-container"
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/v2"
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}
          aria-label="LeadOne — tillbaka till startsidan"
        >
          <Image
            src="/assets/logo.png"
            alt="LeadOne logotyp"
            width={28}
            height={28}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              letterSpacing: "-0.01em",
              color: "var(--v2-text-primary)",
            }}
          >
            LeadOne
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="v2-nav-links"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "var(--v2-text-tertiary)",
                fontSize: "var(--v2-text-sm)",
                textDecoration: "none",
                padding: "0.5rem 0.875rem",
                borderRadius: "var(--v2-radius-full)",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--v2-text-primary)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--v2-text-tertiary)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <a
            href="tel:+46763912181"
            style={{
              color: "var(--v2-text-tertiary)",
              fontSize: "var(--v2-text-xs)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            className="v2-nav-phone"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.24 1.12l-2.4 1.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +46 763 91 21 81
          </a>

          {/* Language toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--v2-border)",
              borderRadius: "var(--v2-radius-full)",
              padding: "3px",
              gap: "2px",
              flexShrink: 0,
            }}
            className="v2-nav-phone"
          >
            <Link
              href={svHref}
              style={{
                fontSize: "0.6875rem",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.08em",
                fontWeight: 600,
                padding: "0.25rem 0.625rem",
                borderRadius: "var(--v2-radius-full)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
                background: isSv ? "var(--v2-gold)" : "transparent",
                color: isSv ? "#09090B" : "var(--v2-text-tertiary)",
              }}
            >
              SV
            </Link>
            <Link
              href={enHref}
              style={{
                fontSize: "0.6875rem",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.08em",
                fontWeight: 600,
                padding: "0.25rem 0.625rem",
                borderRadius: "var(--v2-radius-full)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
                background: !isSv ? "var(--v2-gold)" : "transparent",
                color: !isSv ? "#09090B" : "var(--v2-text-tertiary)",
              }}
            >
              EN
            </Link>
          </div>

          <Link href={CTA_HREF} className="v2-btn v2-btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.8125rem" }}>
            Boka analys
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
            className="v2-hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--v2-text-secondary)", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--v2-text-secondary)", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--v2-text-secondary)", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(9,9,11,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--v2-border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--v2-text-secondary)",
                fontSize: "var(--v2-text-base)",
                textDecoration: "none",
                padding: "0.875rem 0",
                borderBottom: "1px solid var(--v2-border)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={CTA_HREF}
            className="v2-btn v2-btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            Boka kostnadsfri analys
          </Link>
        </div>
      )}
    </header>
  );
}
