"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const CTA_HREF = "/v2/boka";

export default function V2Hero() {
  const gradRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gradRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      gradRef.current.style.setProperty("--mx", `${x}%`);
      gradRef.current.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div ref={gradRef} style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80vw 60vh at var(--mx, 60%) var(--my, 40%), rgba(201,168,76,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent 100%)" }} />

      <div className="v2-container v2-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "4rem", paddingTop: "6rem", paddingBottom: "6rem", alignItems: "center" }}>

        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <span className="v2-eyebrow">Lokal SEO för svenska serviceföretag</span>

          <h1 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "var(--v2-text-display)", lineHeight: 1.05, letterSpacing: "-0.035em", color: "var(--v2-text-primary)", margin: 0 }}>
            Sluta hyra kunder<br />
            från Google.<br />
            <span style={{ backgroundImage: "linear-gradient(135deg, var(--v2-gold) 0%, var(--v2-gold-light) 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Börja förtjäna dem.
            </span>
          </h1>

          <p className="v2-body-text" style={{ fontSize: "var(--v2-text-md)", lineHeight: 1.75 }}>
            Vi hjälper lokala tjänsteföretag att bli det företag Google rekommenderar först — så att du får fler telefonsamtal, offertförfrågningar och bokningar utan att betala för varje klick.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", alignItems: "center" }}>
            <Link href={CTA_HREF} className="v2-btn v2-btn-primary">
              Boka din kostnadsfria Revenue Gap Analysis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0, letterSpacing: "0.04em" }}>
            30 min · Zoom eller telefon · Ingen pitch · Utan bindning
          </p>
        </div>

        {/* Right — proof cards */}
        <div className="v2-hero-proof" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ProofCard client="Angelique Hud & Kropp" location="Helsingborg" before={28} after={108} months={3} keywords={["ansiktsbehandling helsingborg", "hudterapeut helsingborg"]} />
          <ProofCard client="Hjeronymus Salongen" location="Kungsbacka" before={13} after={80} months={4} keywords={["peeling kungsbacka", "ansiktsbehandling kungsbacka"]} />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, var(--v2-bg))", pointerEvents: "none" }} />
    </section>
  );
}

function ProofCard({ client, location, before, after, months, keywords }: { client: string; location: string; before: number; after: number; months: number; keywords: string[] }) {
  const pct = Math.round(((after - before) / before) * 100);
  return (
    <div className="v2-card" style={{ width: "100%", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ color: "var(--v2-text-primary)", fontWeight: 600, fontSize: "var(--v2-text-sm)", margin: 0 }}>{client}</p>
          <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0, letterSpacing: "0.04em" }}>{location}</p>
        </div>
        <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "var(--v2-text-xs)", color: "#4ade80", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "var(--v2-radius-full)", padding: "0.2rem 0.6rem", whiteSpace: "nowrap" }}>+{pct}%</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ color: "var(--v2-text-tertiary)", fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-xl)", fontWeight: 700 }}>{before}</span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true"><path d="M0 5h18M13 1l5 4-5 4" stroke="var(--v2-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ color: "var(--v2-gold)", fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-2xl)", fontWeight: 700, letterSpacing: "-0.04em" }}>{after}</span>
        <span style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)" }}>recensioner · {months} mån</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        {keywords.map((kw) => <span key={kw} className="v2-tag" style={{ fontSize: "0.6rem" }}>{kw}</span>)}
      </div>
    </div>
  );
}
