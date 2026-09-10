const steps = [
  {
    n: "01",
    title: "Analysera",
    sub: "Nuvarande synlighet",
    body: "Vi kartlägger exakt var du syns — och var du inte syns — på Google Maps. Geo-grid benchmarking, konkurrentanalys och keyword opportunity mapping.",
  },
  {
    n: "02",
    title: "Strategi",
    sub: "Prioritera möjligheter",
    body: "Vi identifierar de åtgärder med högst hävstång för just ditt företag i din stad. Inget generellt — allt är anpassat efter din marknad.",
  },
  {
    n: "03",
    title: "Optimera",
    sub: "GBP · Webbplats · Auktoritet",
    body: "Vi förbättrar Google Business Profile, webbplatsrelevans och lokal auktoritet — de tre primära signalerna som avgör din ranking.",
  },
  {
    n: "04",
    title: "Bygg förtroende",
    sub: "Recensioner · Foton · Content",
    body: "Vi implementerar ett system som genererar en konstant ström av äkta recensioner och förbättrar ditt företags trovärdighet online.",
  },
  {
    n: "05",
    title: "Konvertera",
    sub: "Samtal · Formulär · Bokningar",
    body: "Synlighet räcker inte. Vi optimerar hur du tar emot kunder — så att trafiken förvandlas till faktiska intäkter.",
  },
  {
    n: "06",
    title: "Skala",
    sub: "Fler sökord · Platser · Tjänster",
    body: "När grunden är stark expanderar vi — fler söktermer, nya stadsdelar, fler tjänster. Tillväxten sker på bevisad grund.",
  },
];

export default function V2Process() {
  return (
    <section id="processen" style={{ borderTop: "1px solid var(--v2-border)", background: "var(--v2-bg-raised)" }}>
      <div className="v2-container v2-section">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
          <span className="v2-eyebrow">LeadOne Google Growth System™</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--v2-text-primary)", margin: 0, maxWidth: "22ch" }}>
            Tre steg från{" "}
            <span style={{ color: "var(--v2-gold)" }}>osynlig till topp 3.</span>
          </h2>
          <p className="v2-body-text" style={{ fontSize: "var(--v2-text-sm)" }}>
            Vi pratar inte om SEO. Vi pratar om ett system som bygger en hållbar källa till nya kunder från Google.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--v2-border)", borderRadius: "var(--v2-radius-lg)", overflow: "hidden" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "var(--v2-bg)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--v2-text-3xl)", lineHeight: 1, color: "rgba(201,168,76,0.15)", letterSpacing: "-0.04em" }}>{s.n}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "var(--v2-text-lg)", color: "var(--v2-text-primary)", margin: "0 0 0.25rem", letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ color: "var(--v2-gold)", fontSize: "var(--v2-text-xs)", fontFamily: "var(--font-mono)", margin: 0, letterSpacing: "0.06em" }}>{s.sub}</p>
              </div>
              <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
