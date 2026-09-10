import Link from "next/link";

const CTA_HREF = "/v2/boka";

const ladder = [
  {
    step: "01",
    tag: "Gratis",
    name: "Google Revenue Gap Analysis",
    tagline: "Se exakt hur mycket du förlorar till dina konkurrenter.",
    description: "En kostnadsfri genomgång på 30 minuter. Vi visar var du tappar kunder på Google Maps — och varför. Ingen pitch. Bara data om ditt företag.",
    includes: [
      "Lokal synlighetsbenchmark",
      "Google Maps / Map Pack-analys",
      "Google Business Profile-genomgång",
      "Konkurrentjämförelse",
      "Recensions- och förtroendeanalys",
      "Topp 5 intäktsmöjligheter",
    ],
    cta: "Boka din kostnadsfria analys",
    href: CTA_HREF,
    featured: false,
    price: "Kostnadsfritt",
  },
  {
    step: "02",
    tag: "Strategi",
    name: "Google Growth Blueprint™",
    tagline: "Din kompletta tillväxtplan — innan vi gör något.",
    description: "En betald strategiengagemang som ger dig full klarhet om vad som krävs, i vilken ordning och vad resultatet bör bli. Betalas av om du startar Growth System.",
    includes: [
      "Fullständig konkurrentanalys",
      "Geo-grid benchmarking",
      "Keyword opportunity mapping",
      "Intäktsmöjlighetsestimering",
      "90-dagars tillväxtplan",
      "Prioriterad implementeringsplan",
    ],
    cta: "Fråga om Blueprint",
    href: CTA_HREF,
    featured: true,
    price: "5 000 – 10 000 kr",
  },
  {
    step: "03",
    tag: "Implementation",
    name: "LeadOne Google Growth System™",
    tagline: "Vi bygger det företag Google rekommenderar först.",
    description: "Vår flaggskeppstjänst. Vi förbättrar varje signal som avgör om Google rekommenderar dig — GBP, recensioner, webbplats, lokal auktoritet — månad för månad.",
    includes: [
      "Google Business Profile-optimering",
      "Google Maps-optimering",
      "Recensionssystem & tillväxt",
      "Webbplatsförbättringar",
      "Lokal auktoritetsbyggande",
      "Monthly Growth Sprint + rapport",
    ],
    cta: "Kom igång",
    href: CTA_HREF,
    featured: false,
    price: "Månadsavgift",
  },
];

const bonuses = [
  { name: "Competitor Visibility Report", desc: "Se exakt vad dina konkurrenter gör rätt." },
  { name: "Google Ads Waste Analysis", desc: "Hur mycket betalar du för kunder du kan förtjäna organiskt?" },
  { name: "Lead Recovery System", desc: "Reaktivera gamla leads, missade offerter och tidigare kunder." },
  { name: "Review Response Library", desc: "Professionella svar på dina Google-recensioner." },
];

export default function V2Offer() {
  return (
    <section id="erbjudandet" style={{ borderTop: "1px solid var(--v2-border)" }}>
      <div className="v2-container v2-section">

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem", maxWidth: "640px" }}>
          <span className="v2-eyebrow">Erbjudandet</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--v2-text-primary)", margin: 0 }}>
            En tydlig väg från{" "}
            <span style={{ color: "var(--v2-gold)" }}>analys till tillväxt.</span>
          </h2>
          <p className="v2-body-text">
            De flesta byråer vill sälja dig ett abonnemang direkt. Vi vill visa dig exakt vad du förlorar först — sedan bestämmer du.
          </p>
        </div>

        {/* Value ladder */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
          {ladder.map((item) => (
            <div
              key={item.step}
              style={{
                position: "relative",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                background: item.featured ? "var(--v2-bg-raised)" : "var(--v2-bg)",
                border: item.featured ? "1px solid rgba(201,168,76,0.35)" : "1px solid var(--v2-border)",
                borderRadius: "var(--v2-radius-lg)",
                boxShadow: item.featured ? "0 0 40px rgba(201,168,76,0.08)" : "none",
              }}
            >
              {item.featured && (
                <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: "var(--v2-gold)", color: "#09090B", fontSize: "0.625rem", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.12em", padding: "0.25rem 0.875rem", borderRadius: "0 0 var(--v2-radius-full) var(--v2-radius-full)" }}>
                  REKOMMENDERAS
                </div>
              )}

              {/* Step + tag */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-xs)", color: "var(--v2-text-tertiary)", letterSpacing: "0.1em" }}>{item.step}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-xs)", color: item.featured ? "var(--v2-gold)" : "var(--v2-text-tertiary)", background: item.featured ? "var(--v2-gold-dim)" : "rgba(255,255,255,0.04)", border: `1px solid ${item.featured ? "rgba(201,168,76,0.2)" : "var(--v2-border)"}`, borderRadius: "var(--v2-radius-full)", padding: "0.2rem 0.6rem", letterSpacing: "0.08em" }}>{item.tag}</span>
              </div>

              {/* Name + price */}
              <div>
                <h3 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "var(--v2-text-lg)", color: "var(--v2-text-primary)", margin: "0 0 0.25rem", letterSpacing: "-0.02em" }}>{item.name}</h3>
                <p style={{ color: "var(--v2-gold)", fontSize: "var(--v2-text-xs)", fontFamily: "var(--font-mono)", margin: 0, letterSpacing: "0.06em" }}>{item.price}</p>
              </div>

              <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{item.tagline}</p>

              <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", lineHeight: 1.6, margin: 0 }}>{item.description}</p>

              {/* Includes */}
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {item.includes.map((inc) => (
                  <li key={inc} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="7" cy="7" r="6" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="var(--v2-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-xs)", lineHeight: 1.5 }}>{inc}</span>
                  </li>
                ))}
              </ul>

              <Link href={item.href} className={`v2-btn ${item.featured ? "v2-btn-primary" : "v2-btn-ghost"}`} style={{ marginTop: "auto", justifyContent: "center", fontSize: "var(--v2-text-xs)" }}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div style={{ padding: "2rem", background: "var(--v2-bg-raised)", border: "1px solid var(--v2-border)", borderRadius: "var(--v2-radius-lg)", display: "flex", gap: "1.5rem", alignItems: "flex-start", marginBottom: "3rem" }}>
          <div style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "50%", background: "var(--v2-gold-dim)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="var(--v2-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="var(--v2-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={{ color: "var(--v2-text-primary)", fontWeight: 600, fontSize: "var(--v2-text-sm)", margin: "0 0 0.375rem" }}>LeadOne Implementation Guarantee</p>
            <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.6, margin: 0 }}>
              Om vi inte levererar den överenskomna implementeringsplanen fortsätter vi arbeta utan managementavgift tills det avtalade arbetet är utfört. Inte rankings — utan implementation. Det är under vår kontroll.
            </p>
          </div>
        </div>

        {/* Bonuses */}
        <div>
          <p className="v2-eyebrow" style={{ marginBottom: "1.25rem" }}>Ingår som bonus</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {bonuses.map((b, i) => (
              <div key={i} style={{ padding: "1.25rem", background: "var(--v2-bg-raised)", border: "1px solid var(--v2-border)", borderRadius: "var(--v2-radius-md)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <p style={{ color: "var(--v2-text-primary)", fontWeight: 600, fontSize: "var(--v2-text-xs)", margin: 0 }}>{b.name}</p>
                <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
