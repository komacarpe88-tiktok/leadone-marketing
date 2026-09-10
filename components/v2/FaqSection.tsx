"use client";

import { useState } from "react";
import Link from "next/link";

const CTA_HREF = "/v2/boka";

const faqs = [
  {
    q: "Vad är en Google Revenue Gap Analysis?",
    a: "Det är en kostnadsfri 30-minutersgenomgång där vi visar dig exakt hur mycket synlighet — och omsättning — du förlorar varje månad på grund av bristande lokal SEO. Du får en lokal synlighetsbenchmark, konkurrentjämförelse och en lista på dina topp 5 intäktsmöjligheter. Ingen pitch. Bara data om ditt företag.",
  },
  {
    q: "Vad är Google Growth Blueprint™?",
    a: "Blueprint är ett betalt strategiuppdrag (5 000–10 000 kr) där vi levererar din kompletta tillväxtplan — fullständig konkurrentanalys, geo-grid benchmarking, keyword opportunity mapping och en prioriterad 90-dagars implementeringsplan. Om du sedan startar Google Growth System krediteras Blueprint-avgiften mot det.",
  },
  {
    q: "Hur lång tid tar det innan jag ser resultat?",
    a: "De flesta kunder ser mätbara förbättringar inom 6–10 veckor. Recensioner och rankingförbättringar sker löpande. Topp 3 på Google Maps tar typiskt 2–4 månader beroende på konkurrensen i din stad och marknad.",
  },
  {
    q: "Behöver jag betala för Google-annonser?",
    a: "Nej. Vår metod bygger helt på organisk synlighet — Google Business Profile, recensioner, lokal auktoritet och webbplatsrelevans. Du betalar inte per klick. Resultaten är dessutom mer hållbara än annonsering — du bygger en tillgång, inte hyr trafik.",
  },
  {
    q: "Fungerar det för min bransch?",
    a: "Vi arbetar med lokala serviceföretag inom Automotive (bildetalj, däckservice, bilverkstad), Home Services (VVS, elektriker, städning, tak), Beauty & Med Spa (salonger, kliniker, hudvård) samt Professional Services (advokater, redovisning, ekonomi). Om dina kunder söker lokalt på Google Maps fungerar vår metod.",
  },
  {
    q: "Vad innebär LeadOne Implementation Guarantee?",
    a: "Om vi inte levererar den överenskomna implementeringsplanen fortsätter vi arbeta utan managementavgift tills det avtalade arbetet är utfört. Vi garanterar inte specifika rankings — det är inte under vår kontroll. Men implementeringen är det, och det garanterar vi.",
  },
];

export default function V2Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ borderTop: "1px solid var(--v2-border)" }}>
      <div className="v2-container v2-section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "6rem" }}>
            <span className="v2-eyebrow">Vanliga frågor</span>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--v2-text-primary)", margin: 0 }}>
              Har du frågor?{" "}
              <span style={{ color: "var(--v2-gold)" }}>Vi har svaren.</span>
            </h2>
            <p className="v2-body-text" style={{ fontSize: "var(--v2-text-sm)" }}>
              Hittar du inte svar? Boka en kostnadsfri Revenue Gap Analysis så pratar vi direkt.
            </p>
            <Link href={CTA_HREF} className="v2-btn v2-btn-primary" style={{ alignSelf: "flex-start" }}>
              Boka samtal
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--v2-border)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: "1.5rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ color: open === i ? "var(--v2-text-primary)" : "var(--v2-text-secondary)", fontWeight: 500, fontSize: "var(--v2-text-base)", lineHeight: 1.4, transition: "color 0.2s" }}>
                    {f.q}
                  </span>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", background: open === i ? "var(--v2-gold)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s, transform 0.2s", transform: open === i ? "rotate(45deg)" : "none" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M5 1v8M1 5h8" stroke={open === i ? "#09090B" : "var(--v2-text-secondary)"} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.7, margin: 0, paddingBottom: "1.5rem", maxWidth: "60ch" }}>
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
