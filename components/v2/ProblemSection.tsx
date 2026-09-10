"use client";

const problems = [
  {
    stat: "76%",
    claim: "av alla klick går till de tre första resultaten på Google Maps.",
    implication: "Är du inte topp 3 — är du i princip osynlig.",
  },
  {
    stat: "88%",
    claim: "av konsumenter läser recensioner innan de väljer en lokal aktör.",
    implication: "Få recensioner = lägre trovärdighet = färre samtal.",
  },
  {
    stat: "0 kr",
    claim: "kostar organisk synlighet — men den kräver rätt signaler.",
    implication: "De flesta betalar för annonser istället för att bygga en tillgång.",
  },
];

export default function V2Problem() {
  return (
    <section style={{ borderTop: "1px solid var(--v2-border)", background: "var(--v2-bg-raised)" }}>
      <div className="v2-container v2-section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem", alignItems: "end" }}>
          <div>
            <span className="v2-eyebrow" style={{ display: "block", marginBottom: "1.25rem" }}>Problemet</span>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--v2-text-primary)", margin: 0 }}>
              Google skickar kunder till dina konkurrenter.{" "}
              <span style={{ color: "var(--v2-gold)" }}>Varje dag.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1.4, color: "var(--v2-text-secondary)", margin: 0 }}>
              &ldquo;Din konkurrent på plats 1 tjänar förmodligen 3–5× mer än dig — med samma tjänst och samma stad.&rdquo;
            </p>
            <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: 0, letterSpacing: "0.04em" }}>
              Baserat på sökvolumsdata och CTR-studier för lokala sökningar
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--v2-border)", borderRadius: "var(--v2-radius-lg)", overflow: "hidden" }}>
          {problems.map((p, i) => (
            <div key={i} style={{ background: "var(--v2-bg)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.04em", color: "var(--v2-gold)" }}>{p.stat}</div>
              <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.6, margin: 0 }}>{p.claim}</p>
              <p style={{ color: "var(--v2-text-primary)", fontSize: "var(--v2-text-sm)", fontWeight: 600, margin: 0, paddingTop: "0.75rem", borderTop: "1px solid var(--v2-border)" }}>{p.implication}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
