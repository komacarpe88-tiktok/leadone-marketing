"use client";

import Image from "next/image";
import Link from "next/link";

const CTA_HREF = "/v2/boka";

const footerLinks = [
  {
    heading: "Tjänster",
    links: [
      { label: "Lokal SEO", href: "/v2/#erbjudandet" },
      { label: "Google Business Profile", href: "/v2/#erbjudandet" },
      { label: "Recensionshantering", href: "/v2/#erbjudandet" },
      { label: "Rankinganalys", href: "/v2/#erbjudandet" },
    ],
  },
  {
    heading: "Företag",
    links: [
      { label: "Kundresultat", href: "/v2/#resultat" },
      { label: "Processen", href: "/v2/#processen" },
      { label: "FAQ", href: "/v2/#faq" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    heading: "Juridiskt",
    links: [
      { label: "Integritetspolicy", href: "/integritetspolicy" },
      { label: "Användarvillkor", href: "/anvandarvillkor" },
    ],
  },
];

export default function V2Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--v2-border)", background: "var(--v2-bg)" }}>

      {/* CTA band */}
      <div
        style={{
          borderBottom: "1px solid var(--v2-border)",
          background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
      >
        <div
          className="v2-container"
          style={{
            paddingBlock: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.75rem",
          }}
        >
          <span className="v2-eyebrow">Redo att börja?</span>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "var(--v2-text-primary)",
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            Bli det företag{" "}
            <span style={{ color: "var(--v2-gold)" }}>Google rekommenderar</span>{" "}
            först.
          </h2>
          <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-md)", maxWidth: "48ch", margin: 0, lineHeight: 1.6 }}>
            Boka din kostnadsfria Google Revenue Gap Analysis idag.
            30 minuter. Ingen pitch. Bara data om ditt företag.
          </p>
          <Link href={CTA_HREF} className="v2-btn v2-btn-primary" style={{ fontSize: "var(--v2-text-base)", padding: "1rem 2.5rem" }}>
            Boka kostnadsfri analys
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0 }}>
            30 min · Zoom eller telefon · Utan bindning · 3 platser/månad
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="v2-container" style={{ paddingBlock: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/v2"
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", width: "fit-content" }}
            >
              <Image src="/assets/logo.png" alt="LeadOne logotyp" width={28} height={28} style={{ objectFit: "contain" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--v2-text-primary)" }}>
                LeadOne
              </span>
            </Link>
            <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.6, margin: 0, maxWidth: "28ch" }}>
              Vi hjälper lokala serviceföretag bli det självklara valet på Google Maps.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="tel:+46763912181"
                style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-sm)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.24 1.12l-2.4 1.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +46 763 91 21 81
              </a>
              <a
                href="mailto:info@leadone.online"
                style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-sm)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@leadone.online
              </a>
              <span style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-sm)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Helsingborg, Sverige
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--v2-text-primary)", fontWeight: 600, fontSize: "var(--v2-text-sm)", margin: 0 }}>
                {col.heading}
              </p>
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      color: "var(--v2-text-tertiary)",
                      fontSize: "var(--v2-text-sm)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--v2-text-secondary)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--v2-text-tertiary)"}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--v2-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0, letterSpacing: "0.04em" }}>
            © 2026 LeadOne Marketing AB · Helsingborg
          </p>
          <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0, letterSpacing: "0.04em" }}>
            Lokal SEO · Google Business Profile · Recensionshantering
          </p>
        </div>
      </div>
    </footer>
  );
}
