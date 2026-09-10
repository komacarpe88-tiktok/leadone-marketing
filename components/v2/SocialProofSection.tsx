"use client";

const cases = [
  {
    client: "Angelique Hud & Kropp",
    location: "Helsingborg",
    category: "Hudvård & skönhet",
    before: 28,
    after: 108,
    months: 3,
    quote:
      "Innan LeadOne hittade ingen oss på Google. Nu ringer det varje dag — och vi har kö på alla behandlingar.",
    name: "Angelique",
    rank1: "ansiktsbehandling helsingborg",
    rank2: "hudterapeut helsingborg",
  },
  {
    client: "Hjeronymus Salongen",
    location: "Kungsbacka",
    category: "Salong & skönhet",
    before: 13,
    after: 80,
    months: 4,
    quote:
      "Vi låg på sida 2 i över ett år. Nu är vi topp 1 på nästan alla sökningar i Kungsbacka.",
    name: "Hjeronymus",
    rank1: "peeling kungsbacka",
    rank2: "ansiktsbehandling kungsbacka",
  },
];

export default function V2SocialProof() {
  return (
    <section id="resultat" style={{ borderTop: "1px solid var(--v2-border)" }}>
      <div className="v2-container v2-section">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
          <span className="v2-eyebrow">Kundresultat</span>
          <h2
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--v2-text-primary)",
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            Riktiga företag.{" "}
            <span style={{ color: "var(--v2-gold)" }}>Mätbara resultat.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            marginTop: "2rem",
            color: "var(--v2-text-tertiary)",
            fontSize: "var(--v2-text-xs)",
            letterSpacing: "0.04em",
            textAlign: "center",
          }}
        >
          Alla siffror är verifierbara via Google Business Profile-data.
          Inga annonspengar inkluderade.
        </p>
      </div>
    </section>
  );
}

function CaseCard({
  client, location, category, before, after, months, quote, name, rank1, rank2,
}: {
  client: string; location: string; category: string; before: number; after: number;
  months: number; quote: string; name: string; rank1: string; rank2: string;
}) {
  const pct = Math.round(((after - before) / before) * 100);
  return (
    <div
      className="v2-card-gold"
      style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <span style={{ color: "var(--v2-text-primary)", fontWeight: 600, fontSize: "var(--v2-text-base)" }}>
            {client}
          </span>
          <span style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", letterSpacing: "0.04em" }}>
            {location} · {category}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "var(--v2-text-xs)",
            fontWeight: 700,
            color: "#4ade80",
            background: "rgba(74,222,128,0.08)",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "var(--v2-radius-full)",
            padding: "0.25rem 0.75rem",
          }}
        >
          +{pct}%
        </span>
      </div>

      {/* Big numbers */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.5rem",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "var(--v2-radius-md)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-4xl)", fontWeight: 700, color: "var(--v2-text-tertiary)", lineHeight: 1 }}>
            {before}
          </span>
          <span style={{ fontSize: "var(--v2-text-xs)", color: "var(--v2-text-tertiary)", marginTop: "0.25rem" }}>före</span>
        </div>
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M0 8h28M20 2l8 6-8 6" stroke="var(--v2-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-4xl)", fontWeight: 700, color: "var(--v2-gold)", lineHeight: 1 }}>
            {after}
          </span>
          <span style={{ fontSize: "var(--v2-text-xs)", color: "var(--v2-text-tertiary)", marginTop: "0.25rem" }}>efter {months} mån</span>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <span style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-xs)" }}>Google-recensioner</span>
        </div>
      </div>

      {/* Quote */}
      <blockquote style={{ margin: 0, padding: 0, borderLeft: "2px solid var(--v2-gold)", paddingLeft: "1rem" }}>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            lineHeight: 1.5,
            color: "var(--v2-text-secondary)",
            margin: 0,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <footer style={{ marginTop: "0.75rem", color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", letterSpacing: "0.06em" }}>
          — {name}, {client}
        </footer>
      </blockquote>

      {/* Rank badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        <span style={{ fontSize: "var(--v2-text-xs)", color: "var(--v2-text-tertiary)", alignSelf: "center", marginRight: "0.25rem" }}>
          Topp 1–3:
        </span>
        <span className="v2-tag">{rank1}</span>
        <span className="v2-tag">{rank2}</span>
      </div>
    </div>
  );
}
