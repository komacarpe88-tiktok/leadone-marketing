"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

const CTA_HREF = "/v2/boka";
const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/THxENMqtMMj0dPSdv17A/webhook-trigger/c5450bda-ed1b-462a-94a9-6d9e6a965d81";

function fmt(n: number) {
  return Math.round(n).toLocaleString("sv-SE");
}

const tickerItems = [
  { label: "klickar på Map Pack topp 3 när de söker lokalt", value: "28,5%", highlight: true, note: "BrightLocal 2023" },
  { label: "klickar på Google Ads för samma sökord", value: "6–8%", highlight: false, note: "WordStream 2023" },
  { label: "kostar organiska klick i snitt via lokal SEO", value: "6–15 kr", highlight: true, note: "vs 25–80 kr för Google Ads lokalt · Ahrefs/SEMrush 2023" },
  { label: "fler besökare får du med Map Pack vs Ads per krona", value: "3,5×", highlight: true, note: "Moz 2023" },
  { label: "läser recensioner innan de väljer ett lokalt företag", value: "88%", highlight: true, note: "BrightLocal 2023" },
  { label: "av alla lokala sökklick går till topp 3 i Map Pack", value: "76%", highlight: true, note: "resten ser knappt din annons" },
  { label: "högre sannolikhet att bli kund via organisk sökning", value: "+50%", highlight: true, note: "Search Engine Journal 2022" },
];

const sources = [
  { label: "Map Pack CTR 28,5%", source: "BrightLocal Local Consumer Search Report 2023" },
  { label: "Paid CTR & konvertering", source: "WordStream Google Ads Benchmarks 2023" },
  { label: "Organisk vs betald klickvolym", source: "Moz Local Search Ranking Factors 2023" },
  { label: "Organisk konverteringsrate", source: "Search Engine Journal 2022" },
];

// Realistic model: same search volume, different cost & conversion
// Paid: you buy clicks at CPC, LP converts at 4%
// Organic Map Pack: same monthly searches, CTR 28.5% vs paid 7% avg
//   → organic gets ~4x the clicks from same search volume
//   → organic CVR slightly higher (8% vs 4%) due to higher intent
//   → but you still close at same rate
// SEO cost: 4 000–8 000 kr/mån typical Swedish agency
const PAID_AVG_CTR = 0.07;          // 7% paid search CTR
const ORGANIC_MAP_CTR = 0.285;      // 28.5% Map Pack CTR (BrightLocal 2023)
const PAID_LP_CVR = 0.04;           // 4% paid landing page conversion
const ORGANIC_LP_CVR = 0.05;        // 5% organic (slightly higher intent)
const MAX_SEO_COST = 7000;
const MIN_SEO_COST = 4000;

type Step = "inputs" | "gate" | "results";

export default function V2Calculator() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("inputs");
  const [showMethod, setShowMethod] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open after 5s — only once per session
  useEffect(() => {
    if (hasAutoOpened) return;
    const timer = setTimeout(() => {
      setHasAutoOpened(true);
      setOpen(true);
      setStep("inputs");
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // Inputs
  const [adSpend, setAdSpend] = useState(5000);
  const [orderValue, setOrderValue] = useState(2000);
  const [closeRate, setCloseRate] = useState(30);
  const [cpc, setCpc] = useState(40);

  // Lead gate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const r = useMemo(() => {
    // Ads path: budget → clicks at CPC → leads → customers
    const adsClicks = adSpend / cpc;
    const leadsAds = adsClicks * PAID_LP_CVR;
    const custAds = leadsAds * (closeRate / 100);
    const revAds = custAds * orderValue;
    const costPerCustAds = custAds > 0 ? adSpend / custAds : 0;

    // Organic path: infer monthly search volume from ad clicks + paid CTR,
    // then apply Map Pack CTR to get organic clicks
    const monthlySearches = adsClicks / PAID_AVG_CTR;
    const organicClicks = monthlySearches * ORGANIC_MAP_CTR;
    const leadsOrganic = organicClicks * ORGANIC_LP_CVR;
    const custOrganic = leadsOrganic * (closeRate / 100);
    const revOrganic = custOrganic * orderValue;
    const seoCost = Math.min(Math.max(adSpend * 0.5, MIN_SEO_COST), MAX_SEO_COST);
    const costPerCustOrganic = custOrganic > 0 ? seoCost / custOrganic : 0;

    return {
      ads: { clicks: adsClicks, leads: leadsAds, customers: custAds, revenue: revAds, costPerCustomer: costPerCustAds, spend: adSpend },
      organic: { clicks: organicClicks, leads: leadsOrganic, customers: custOrganic, revenue: revOrganic, costPerCustomer: costPerCustOrganic, spend: seoCost },
      extraRevenue: Math.max(0, revOrganic - revAds),
      annualGap: Math.max(0, (revOrganic - revAds) * 12),
    };
  }, [adSpend, orderValue, closeRate, cpc]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "Revenue Gap Calculator — V2",
          calculator: {
            adSpend,
            orderValue,
            closeRate,
            cpc,
            extraRevenueMonthly: Math.round(r.extraRevenue),
            extraRevenueAnnual: Math.round(r.annualGap),
            adsCustomersPerMonth: Math.round(r.ads.customers * 10) / 10,
            organicCustomersPerMonth: Math.round(r.organic.customers * 10) / 10,
          },
        }),
      });
      setStep("results");
    } catch {
      setSubmitError("Något gick fel — försök igen eller kontakta oss direkt.");
    } finally {
      setSubmitting(false);
    }
  }

  function openModal() {
    setHasAutoOpened(true); // cancel auto-trigger if user opens manually
    setStep("inputs");
    setName("");
    setEmail("");
    setSubmitError("");
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <section style={{ borderTop: "1px solid var(--v2-border)", background: "var(--v2-bg-raised)" }}>
      <div className="v2-container v2-section">

        {/* ── Ticker ── */}
        <div className="v2-ticker-wrap" style={{
          overflow: "hidden",
          marginBottom: "3rem",
          borderRadius: "var(--v2-radius-lg)",
          border: "1px solid rgba(201,168,76,0.2)",
          background: "rgba(201,168,76,0.04)",
        }}>
          <div style={{ display: "flex", animation: "v2-ticker 36s linear infinite", width: "max-content" }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 3rem",
                borderRight: "1px solid rgba(201,168,76,0.12)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  color: "var(--v2-text-secondary)",
                  fontSize: "var(--v2-text-sm)",
                  letterSpacing: "0.02em",
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "var(--v2-text-2xl)",
                  color: item.highlight ? "var(--v2-gold)" : "#f87171",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}>
                  {item.value}
                </span>
                <span style={{
                  color: "var(--v2-text-tertiary)",
                  fontSize: "var(--v2-text-xs)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                }}>
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA card ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          padding: "3rem",
          border: "1px solid rgba(201,168,76,0.25)",
          borderRadius: "var(--v2-radius-xl)",
          background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)",
          boxShadow: "0 0 80px rgba(201,168,76,0.06)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <span className="v2-eyebrow">Revenue Gap-kalkylator</span>
            <h2 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--v2-text-primary)", margin: 0 }}>
              Vad kostar det dig att inte ranka i{" "}
              <span style={{ color: "var(--v2-gold)" }}>Map Pack?</span>
            </h2>
            <p className="v2-body-text" style={{ fontSize: "var(--v2-text-sm)" }}>
              Ange din annonsbudget och dina nyckeltal — vi räknar ut exakt hur mycket intäkt du lämnar på bordet varje månad.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={openModal} className="v2-btn v2-btn-primary">
                Räkna ut mitt revenue gap
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setShowMethod(true)}
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "none", border: "none", color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", cursor: "pointer", padding: 0 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Hur räknar vi?
              </button>
            </div>
          </div>

          {/* Mini stat preview */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--v2-border)", borderRadius: "var(--v2-radius-lg)", overflow: "hidden" }}>
            {[
              { label: "klickar på Map Pack topp 3", value: "28,5%", sub: "av alla som söker lokalt", gold: true },
              { label: "klickar på Google Ads", value: "6–8%", sub: "för samma sökord", gold: false },
              { label: "fler besökare vs Ads", value: "3,5×", sub: "per investerad krona", gold: true },
              { label: "kostar organiska klick i snitt via lokal SEO", value: "6–15 kr", sub: "vs 25–80 kr för Google Ads lokalt", gold: true },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--v2-bg)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--v2-text-2xl)", color: s.gold ? "var(--v2-gold)" : "#f87171", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</span>
                <span style={{ color: "var(--v2-text-primary)", fontSize: "var(--v2-text-xs)", fontWeight: 500, lineHeight: 1.3 }}>{s.label}</span>
                <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.625rem", letterSpacing: "0.03em" }}>{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Calculator modal ── */}
      {open && (
        <div onClick={closeModal} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--v2-bg)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "var(--v2-radius-xl)", width: "100%", maxWidth: "860px", maxHeight: "92vh", overflowY: "auto", boxShadow: "0 32px 100px rgba(0,0,0,0.8), 0 0 60px rgba(201,168,76,0.08)" }}>

            {/* Modal header */}
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--v2-border)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "var(--v2-bg)", zIndex: 1 }}>
              <div>
                <span className="v2-eyebrow" style={{ display: "block", marginBottom: "0.25rem" }}>
                  {step === "inputs" ? "Steg 1 av 2 — Dina siffror" : step === "gate" ? "Steg 2 av 2 — Hämta ditt resultat" : "Ditt Revenue Gap"}
                </span>
                <h3 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "var(--v2-text-xl)", color: "var(--v2-text-primary)", margin: 0, letterSpacing: "-0.02em" }}>
                  {step === "inputs" ? "Ange dina nyckeltal" : step === "gate" ? "Var ska vi skicka analysen?" : "Så här ser ditt gap ut"}
                </h3>
              </div>
              <button onClick={closeModal} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--v2-border)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--v2-text-secondary)", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>

            {/* Step 1 — Inputs */}
            {step === "inputs" && (
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <SliderInput label="Månadsbudget Google Ads" hint="Din nuvarande eller planerade annonsbudget" value={adSpend} onChange={setAdSpend} min={1000} max={50000} step={500} format={v => `${fmt(v)} kr`} />
                  <SliderInput label="Genomsnittligt ordervärde" hint="Vad är en genomsnittlig kund värd för dig?" value={orderValue} onChange={setOrderValue} min={500} max={20000} step={250} format={v => `${fmt(v)} kr`} />
                  <SliderInput label="Konverteringsrate (lead → kund)" hint="Andel av leads du pratar med som blir kunder" value={closeRate} onChange={setCloseRate} min={5} max={80} step={5} format={v => `${v}%`} />
                  <SliderInput label="Kostnad per klick (CPC)" hint="Branschsnitt för lokala tjänster: 15–60 kr" value={cpc} onChange={setCpc} min={5} max={150} step={5} format={v => `${v} kr`} />
                </div>

                {/* Teaser — no numbers until after optin */}
                <div style={{ padding: "1.25rem 1.5rem", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "var(--v2-radius-md)", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "var(--v2-gold)" }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-xs)", margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--v2-text-primary)" }}>Ditt revenue gap beräknas.</strong> Fyll i dina uppgifter i nästa steg för att låsa upp resultaten.
                  </p>
                </div>

                <button onClick={() => setStep("gate")} className="v2-btn v2-btn-primary" style={{ alignSelf: "flex-end", fontSize: "var(--v2-text-sm)" }}>
                  Hämta mitt resultat
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            )}

            {/* Step 2 — Lead gate */}
            {step === "gate" && (
              <form onSubmit={handleSubmit} style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <p className="v2-body-text" style={{ fontSize: "var(--v2-text-sm)", margin: 0 }}>
                  Vi skickar din personliga Revenue Gap-analys till din inbox — inklusive en konkret åtgärdslista. Utan spam, utan bindning.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", fontWeight: 500 }}>Namn</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Ditt namn"
                      style={{
                        background: "var(--v2-bg-raised)",
                        border: "1px solid var(--v2-border)",
                        borderRadius: "var(--v2-radius-md)",
                        padding: "0.875rem 1rem",
                        color: "var(--v2-text-primary)",
                        fontSize: "var(--v2-text-sm)",
                        fontFamily: "var(--font-outfit), sans-serif",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"}
                      onBlur={e => e.currentTarget.style.borderColor = "var(--v2-border)"}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", fontWeight: 500 }}>E-postadress</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="din@email.se"
                      style={{
                        background: "var(--v2-bg-raised)",
                        border: "1px solid var(--v2-border)",
                        borderRadius: "var(--v2-radius-md)",
                        padding: "0.875rem 1rem",
                        color: "var(--v2-text-primary)",
                        fontSize: "var(--v2-text-sm)",
                        fontFamily: "var(--font-outfit), sans-serif",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"}
                      onBlur={e => e.currentTarget.style.borderColor = "var(--v2-border)"}
                    />
                  </div>
                </div>

                {submitError && <p style={{ color: "#f87171", fontSize: "var(--v2-text-xs)", margin: 0 }}>{submitError}</p>}

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "center", justifyContent: "space-between" }}>
                  <button type="button" onClick={() => setStep("inputs")} style={{ background: "none", border: "none", color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M7 12l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Tillbaka
                  </button>
                  <button type="submit" disabled={submitting} className="v2-btn v2-btn-primary" style={{ opacity: submitting ? 0.7 : 1 }}>
                    {submitting ? "Skickar…" : "Visa mitt revenue gap"}
                    {!submitting && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </button>
                </div>

                <p style={{ color: "var(--v2-text-tertiary)", fontSize: "0.625rem", margin: 0, lineHeight: 1.6, textAlign: "center" }}>
                  Vi delar inte din information med tredje part. Inga nyhetsbrev utan ditt samtycke.
                </p>
              </form>
            )}

            {/* Step 3 — Results */}
            {step === "results" && (
              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>

                {/* Gap hero */}
                <div style={{ padding: "2rem", background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "var(--v2-radius-lg)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p style={{ color: "var(--v2-gold)", fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-xs)", letterSpacing: "0.1em", margin: 0 }}>DITT ESTIMERADE REVENUE GAP</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
                    <GapStat label="Extra intäkt / mån" value={`+${fmt(r.extraRevenue)} kr`} />
                    <GapStat label="Extra intäkt / år" value={`+${fmt(r.annualGap)} kr`} />
                    <GapStat label="Extra kunder / mån" value={`+${(r.organic.customers - r.ads.customers).toFixed(1)}`} />
                  </div>
                </div>

                {/* Side by side */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--v2-border)", borderRadius: "var(--v2-radius-lg)", overflow: "hidden" }}>
                  <ResultCol label="Google Ads" icon="📢" {...r.ads} highlight={false} />
                  <ResultCol label="Map Pack organiskt" icon="📍" {...r.organic} highlight={true} />
                </div>

                {/* CTA */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", textAlign: "center" }}>
                  <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", margin: 0, maxWidth: "48ch", lineHeight: 1.6 }}>
                    Detta är en estimering. Din faktiska siffra beror på din marknad och dina konkurrenter. Vi räknar ut det exakt — kostnadsfritt.
                  </p>
                  <Link href={CTA_HREF} className="v2-btn v2-btn-primary" onClick={closeModal}>
                    Boka din gratis Revenue Gap Analysis
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Method modal ── */}
      {showMethod && (
        <div onClick={() => setShowMethod(false)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--v2-bg-raised)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "var(--v2-radius-xl)", maxWidth: "680px", width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.7)" }}>
            <div style={{ padding: "1.75rem 2rem", borderBottom: "1px solid var(--v2-border)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span className="v2-eyebrow" style={{ display: "block", marginBottom: "0.375rem" }}>Beräkningsmetod</span>
                <h3 style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "var(--v2-text-xl)", color: "var(--v2-text-primary)", margin: 0, letterSpacing: "-0.02em" }}>Hur räknar vi ut ditt revenue gap?</h3>
              </div>
              <button onClick={() => setShowMethod(false)} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--v2-border)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--v2-text-secondary)", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <FormulaBlock title="📢 Google Ads-väg" steps={["Klick = Ad Spend ÷ CPC", "Månadsvolym = Klick ÷ 7% (betald CTR)", "Leads = Klick × 4% (betald konvertering)", "Kunder = Leads × Konverteringsrate", "Kostnad/kund = Ad Spend ÷ Kunder"]} />
                <FormulaBlock title="📍 Map Pack organiskt" steps={["Samma månadsvolym som ovan", "Org. klick = Volym × 28,5% (Map Pack CTR)", "Leads = Org. klick × 5% (organisk konvertering)", "Kunder = Leads × Konverteringsrate", "SEO-kostnad = 4 000–7 000 kr/mån"]} />
              </div>
              <div style={{ padding: "1.25rem", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "var(--v2-radius-md)" }}>
                <p style={{ color: "var(--v2-gold)", fontFamily: "var(--font-mono)", fontSize: "var(--v2-text-xs)", margin: "0 0 0.5rem", letterSpacing: "0.08em" }}>VARFÖR SAMMA SÖKVOLYM?</p>
                <p style={{ color: "var(--v2-text-secondary)", fontSize: "var(--v2-text-sm)", lineHeight: 1.7, margin: 0 }}>Vi utgår från samma antal lokala sökningar per månad — det är din marknad. Sedan applicerar vi verklig klickandel: betalda annonser får ~7% av klikken, Map Pack topp 3 får 28,5% (BrightLocal 2023). Det ger organisk sökning ungefär 4× fler besökare från samma sökvolym, till en bråkdel av kostnaden.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <p style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)", margin: "0 0 0.5rem", letterSpacing: "0.08em" }}>DATAKÄLLOR</p>
                {sources.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.625rem 0", borderBottom: i < sources.length - 1 ? "1px solid var(--v2-border)" : "none", alignItems: "baseline" }}>
                    <span style={{ color: "var(--v2-gold)", fontFamily: "var(--font-mono)", fontSize: "0.625rem", flexShrink: 0, minWidth: "180px" }}>{s.label}</span>
                    <span style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)" }}>{s.source}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: "var(--v2-text-tertiary)", fontSize: "0.625rem", lineHeight: 1.7, margin: 0, paddingTop: "0.5rem", borderTop: "1px solid var(--v2-border)" }}>Kalkylatorn ger en estimering baserad på branschsnitt. Verkliga resultat varierar beroende på bransch, geografi, konkurrens och säsong.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SliderInput({ label, hint, value, onChange, min, max, step, format }: {
  label: string; hint: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <div>
          <label style={{ color: "var(--v2-text-primary)", fontSize: "var(--v2-text-sm)", fontWeight: 500, display: "block", marginBottom: "0.2rem" }}>{label}</label>
          <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.625rem", letterSpacing: "0.03em" }}>{hint}</span>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--v2-text-lg)", color: "var(--v2-gold)", letterSpacing: "-0.02em", flexShrink: 0 }}>{format(value)}</span>
      </div>
      <div style={{ position: "relative", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, rgba(201,168,76,0.6), var(--v2-gold))", borderRadius: "3px", pointerEvents: "none" }} />
        <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ position: "absolute", inset: "-6px 0", width: "100%", opacity: 0, cursor: "pointer", margin: 0, height: "18px" }} />
        <div style={{ position: "absolute", top: "50%", left: `${pct}%`, transform: "translate(-50%, -50%)", width: "18px", height: "18px", borderRadius: "50%", background: "var(--v2-gold)", border: "3px solid var(--v2-bg)", boxShadow: "0 0 8px rgba(201,168,76,0.5)", pointerEvents: "none" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.5625rem", fontFamily: "var(--font-mono)" }}>{format(min)}</span>
        <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.5625rem", fontFamily: "var(--font-mono)" }}>{format(max)}</span>
      </div>
    </div>
  );
}

function ResultCol({ label, icon, spend, clicks, leads, customers, revenue, costPerCustomer, highlight }: {
  label: string; icon: string; spend: number; clicks: number; leads: number;
  customers: number; revenue: number; costPerCustomer: number; highlight: boolean;
}) {
  return (
    <div style={{ padding: "1.5rem", background: highlight ? "rgba(201,168,76,0.04)" : "var(--v2-bg)", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>{icon}</span>
        <span style={{ color: highlight ? "var(--v2-gold)" : "var(--v2-text-tertiary)", fontFamily: "var(--font-mono)", fontSize: "0.625rem", letterSpacing: "0.1em", fontWeight: 700 }}>{label.toUpperCase()}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        <Row label="Månadskostnad" value={`${fmt(spend)} kr`} red={!highlight} />
        <Row label="Klick" value={fmt(clicks)} />
        <Row label="Leads" value={leads < 1 ? leads.toFixed(1) : fmt(leads)} />
        <Row label="Nya kunder/mån" value={customers < 1 ? customers.toFixed(1) : fmt(customers)} gold={highlight} />
        <Row label="Intäkt/mån" value={`${fmt(revenue)} kr`} gold={highlight} />
        <div style={{ height: "1px", background: "var(--v2-border)" }} />
        <Row label="Kostnad per kund" value={`${fmt(costPerCustomer)} kr`} red={!highlight} gold={highlight} />
      </div>
    </div>
  );
}

function Row({ label, value, gold, red }: { label: string; value: string; gold?: boolean; red?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5rem" }}>
      <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.6875rem" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--v2-text-sm)", color: gold ? "var(--v2-gold)" : red ? "#f87171" : "var(--v2-text-secondary)", letterSpacing: "-0.02em" }}>{value}</span>
    </div>
  );
}

function GapStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "var(--v2-gold)", lineHeight: 1, letterSpacing: "-0.03em" }}>{value}</span>
      <span style={{ color: "var(--v2-text-tertiary)", fontSize: "var(--v2-text-xs)" }}>{label}</span>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "var(--v2-text-xl)", color: "var(--v2-gold)", lineHeight: 1, letterSpacing: "-0.03em" }}>{value}</span>
      <span style={{ color: "var(--v2-text-tertiary)", fontSize: "0.625rem", letterSpacing: "0.04em" }}>{label}</span>
    </div>
  );
}

function FormulaBlock({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      <p style={{ color: "var(--v2-text-secondary)", fontWeight: 600, fontSize: "var(--v2-text-xs)", margin: 0 }}>{title}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
            <span style={{ color: "var(--v2-gold)", fontFamily: "var(--font-mono)", fontSize: "0.625rem", flexShrink: 0, marginTop: "1px" }}>{i + 1}.</span>
            <span style={{ color: "var(--v2-text-tertiary)", fontFamily: "var(--font-mono)", fontSize: "0.625rem", lineHeight: 1.6 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
