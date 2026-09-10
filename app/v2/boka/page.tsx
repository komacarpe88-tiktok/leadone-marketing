import Link from "next/link";

export default function V2Boka() {
  return (
    <>
      {/* Minimal header spacing since Nav is inherited */}
      <main style={{ paddingTop: "6rem", paddingBottom: "6rem", minHeight: "100dvh" }}>
        <div
          className="v2-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — context */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "sticky", top: "7rem" }}>
            <span className="v2-eyebrow">Kostnadsfri analys</span>
            <h1
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--v2-text-primary)",
                margin: 0,
              }}
            >
              Google Revenue Gap{" "}
              <span style={{ color: "var(--v2-gold)" }}>Analysis</span>
            </h1>

            <p className="v2-body-text">
              Boka ett kostnadsfritt 30-minuterssamtal. Vi visar exakt
              hur mycket synlighet och omsättning du förlorar varje månad
              — och vad som krävs för att ändra det.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                "Genomgång av din synlighet på Google Maps",
                "Analys av recensioner och trovärdighet",
                "Konkurrentkarta — vem rankar och varför",
                "Prioriterad åtgärdslista utan kostnad",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "var(--v2-gold-dim)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}
                  >
                    <svg width="9" height="7" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4l2.5 2.5L9 1" stroke="var(--v2-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "1.25rem",
                background: "var(--v2-gold-dim)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "var(--v2-radius-md)",
              }}
            >
              <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-xs)", margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: "var(--v2-gold)" }}>30 min · Zoom eller telefon</strong>
                <br />Ingen pitch. Ingen säljpresentation. Bara data om ditt företag.
                Utan bindning.
              </p>
            </div>

            <Link
              href="/v2"
              style={{
                color: "var(--v2-text-tertiary)",
                fontSize: "var(--v2-text-xs)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                letterSpacing: "0.04em",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M12 7H2M7 12l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tillbaka till startsidan
            </Link>
          </div>

          {/* Right — calendar */}
          <div
            style={{
              background: "var(--v2-bg-raised)",
              border: "1px solid var(--v2-border)",
              borderRadius: "var(--v2-radius-xl)",
              overflow: "hidden",
              minHeight: "700px",
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/tLul2UjJ4lCOYMicz8eX"
              style={{
                width: "100%",
                minHeight: "700px",
                border: "none",
                display: "block",
              }}
              title="Boka kostnadsfri Google Revenue Gap Analysis"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </>
  );
}
