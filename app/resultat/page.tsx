import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import { getAllCaseStudies, type RankingKeyword, type GeoTimelineKeyword } from "@/lib/case-studies";
import GeoGridCarousel from "@/components/GeoGridCarousel";
import ProofCarousel from "@/components/ProofCarousel";
import ReviewWidget from "@/components/ReviewWidget";

export const metadata: Metadata = {
  title: "Resultat & Case Studies | LeadOne Marketing",
  description:
    "Se hur svenska lokala företag har ökat sina Google-recensioner och förbättrat sin synlighet med LeadOne Marketing. Verkliga resultat, riktiga kunder.",
  keywords:
    "lokal SEO resultat, Google recensioner case study, Google Business Profile optimering resultat, LeadOne Marketing kunder",
  alternates: { canonical: "https://leadone.online/resultat" },
  openGraph: {
    title: "Resultat & Case Studies | LeadOne Marketing",
    description:
      "Verkliga resultat från svenska lokala företag som arbetar med LeadOne Marketing.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/resultat",
  },
};

function rankColor(rank: number) {
  if (rank < 3)  return { bg: "rgba(34,197,94,0.10)", border: "rgba(34,197,94,0.25)", text: "#4ade80", badge: "rgba(34,197,94,0.15)", label: "Topp 3 · Local Pack" };
  if (rank < 5)  return { bg: "rgba(234,179,8,0.08)",  border: "rgba(234,179,8,0.2)",  text: "#facc15", badge: "rgba(234,179,8,0.15)",  label: "Topp 5" };
  return           { bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)", text: "#fb923c", badge: "rgba(249,115,22,0.15)", label: "Topp 10" };
}

function RankingGrid({ keywords }: { keywords: RankingKeyword[] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: "var(--surface-elevated)", borderBottom: "1px solid var(--border)" }}
      >
        {/* Google Maps pin icon */}
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F4F4F5]">Google Maps ranking</p>
          <p className="text-[11px] text-zinc-500">Genomsnittlig position i sökresultatet · mätt med geo-rutnät</p>
        </div>
        <div className="ml-auto flex items-center gap-4 text-[10px] font-mono text-zinc-600 hidden sm:flex">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Topp 3 = Local Pack</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />Topp 5</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />Topp 10</span>
        </div>
      </div>

      {/* Column headers */}
      <div
        className="px-6 py-2 grid items-center text-[10px] uppercase tracking-[0.15em] font-mono text-zinc-600"
        style={{ gridTemplateColumns: "1fr 120px 90px 64px", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <span>Sökord på Google</span>
        <span className="text-right">Position</span>
        <span className="text-right">Synlighet</span>
        <span className="text-right">Datum</span>
      </div>

      {/* Rows */}
      <div style={{ background: "var(--surface)" }}>
        {keywords.map((kw, i) => {
          const c = rankColor(kw.rank);
          return (
            <div
              key={kw.keyword}
              className="px-6 py-3.5 grid items-center"
              style={{
                gridTemplateColumns: "1fr 120px 90px 64px",
                background: c.bg,
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: c.text }}
                  aria-hidden="true"
                />
                <span className="text-[13px] text-zinc-200 truncate">{kw.keyword}</span>
              </div>

              <div className="flex items-center justify-end gap-2">
                <span
                  className="text-[12px] font-mono font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: c.badge, color: c.text }}
                >
                  Plats {kw.rank.toFixed(2)}
                </span>
              </div>

              <div className="text-right">
                <span className="text-[12px] font-mono font-semibold" style={{ color: c.text }}>
                  {kw.solv.toFixed(0)}%
                </span>
                <span className="text-[10px] text-zinc-600 ml-1">SOLV</span>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-zinc-600 font-mono">{kw.date}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="px-6 py-3 flex items-center gap-6"
        style={{ background: "var(--surface-elevated)", borderTop: "1px solid var(--border)" }}
      >
        <p className="text-[10px] text-zinc-600 font-mono">
          SOLV = andelen av det geografiska sökrutnätet där profilen visas i topp 3 på Google Maps
        </p>
      </div>
    </div>
  );
}


function GbpStatsBar({ stats }: { stats: { label: string; before: number; after: number; unit: string; period: string }[] }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3" style={{ background: "var(--surface-elevated)", borderBottom: "1px solid var(--border)" }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F4F4F5]">Google Business Profile — interaktioner</p>
          <p className="text-[11px] text-zinc-500">Månatliga interaktioner från GBP · apr–jul 2026</p>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: "var(--surface)" }}>
        {stats.map((s, i) => {
          const pct = Math.round(((s.after - s.before) / s.before) * 100);
          return (
            <div
              key={s.label}
              className="px-6 py-5 flex flex-col gap-1.5"
              style={{ borderLeft: i > 0 ? "1px solid var(--border)" : "none", borderTop: i >= 2 ? "1px solid var(--border)" : "none" }}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-zinc-500">{s.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[1.6rem] font-bold font-mono tracking-[-0.03em] text-zinc-500 leading-none">{s.before}</span>
                <svg width="18" height="10" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                  <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[1.6rem] font-bold font-mono tracking-[-0.03em] text-[#F4F4F5] leading-none">{s.after}</span>
              </div>
              <span className="text-[11px] font-mono font-semibold" style={{ color: "#4ade80" }}>+{pct}%</span>
              <span className="text-[9px] text-zinc-600 font-mono">{s.period}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatusBadge({ label, variant }: { label: string; variant: "collecting" | "verified" }) {
  const styles =
    variant === "verified"
      ? { bg: "rgba(201,168,76,0.12)", border: "rgba(201,168,76,0.3)", text: "var(--accent)", dot: "#C9A84C" }
      : { bg: "rgba(100,116,139,0.10)", border: "rgba(100,116,139,0.25)", text: "#94a3b8", dot: "#64748b" };
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-mono px-2.5 py-1 rounded-full"
      style={{ background: styles.bg, border: `1px solid ${styles.border}`, color: styles.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: styles.dot }} aria-hidden="true" />
      {label}
    </span>
  );
}

function solvColor(solv: number) {
  if (solv >= 77) return { text: "#4ade80", bg: "rgba(34,197,94,0.12)" };
  if (solv >= 44) return { text: "var(--accent)", bg: "rgba(201,168,76,0.10)" };
  if (solv > 0)   return { text: "#fb923c", bg: "rgba(249,115,22,0.10)" };
  return            { text: "#71717a", bg: "rgba(113,113,122,0.10)" };
}

function GeoTimeline({ keywords }: { keywords: GeoTimelineKeyword[] }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ background: "var(--surface-elevated)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)" />
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F4F4F5]">Geo-grid synlighetsutveckling</p>
          <p className="text-[11px] text-zinc-500">Andel lokal synlighet per sökord · jul–aug 2026</p>
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-4 text-[10px] font-mono text-zinc-600">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />≥ 77%</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--accent)" }} />44–76%</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />1–43%</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-600 inline-block" />0%</span>
        </div>
      </div>

      {/* Column headers */}
      <div
        className="px-6 py-2 grid text-[10px] uppercase tracking-[0.15em] font-mono text-zinc-600"
        style={{ gridTemplateColumns: "1fr 100px 100px 100px", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <span>Sökord</span>
        <span className="text-center">Startläge</span>
        <span className="text-center">4 aug 2026</span>
        <span className="text-right">Förändring</span>
      </div>

      {/* Rows */}
      <div style={{ background: "var(--surface)" }}>
        {keywords.map((kw, i) => {
          // Worst (lowest) snapshot = starting point
          const worst = kw.snapshots.reduce((a, b) => b.solv < a.solv ? b : a);
          const latest = kw.snapshots[kw.snapshots.length - 1];
          const delta = latest.solv - worst.solv;
          const deltaStr = delta > 0 ? `+${delta % 1 === 0 ? delta : delta.toFixed(2)} pp` : delta === 0 ? "±0 pp" : `${delta % 1 === 0 ? delta : delta.toFixed(2)} pp`;
          const deltaColor = delta > 0 ? "#4ade80" : delta === 0 ? "#71717a" : "#f87171";
          const cWorst = solvColor(worst.solv);
          const cLatest = solvColor(latest.solv);

          return (
            <div
              key={kw.keyword}
              className="px-6 py-4 grid items-center"
              style={{ gridTemplateColumns: "1fr 100px 100px 100px", borderTop: i === 0 ? "none" : "1px solid var(--border)" }}
            >
              <span className="text-[13px] text-zinc-200 pr-4">{kw.keyword}</span>

              {/* Worst / start */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[12px] font-mono font-bold px-2 py-0.5 rounded-full" style={{ background: cWorst.bg, color: cWorst.text }}>
                  {worst.solv === 0 ? "0%" : `${worst.solv}%`}
                </span>
                <span className="text-[9px] text-zinc-600 font-mono">{worst.date}</span>
              </div>

              {/* Latest */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[12px] font-mono font-bold px-2 py-0.5 rounded-full" style={{ background: cLatest.bg, color: cLatest.text }}>
                  {latest.solv === 0 ? "0%" : `${latest.solv}%`}
                </span>
                <span className="text-[9px] text-zinc-600 font-mono">{latest.date}</span>
              </div>

              {/* Delta + note */}
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[12px] font-mono font-bold" style={{ color: deltaColor }}>{deltaStr}</span>
                {kw.highlight && (
                  <span className="text-[9px] text-zinc-500 leading-tight max-w-[14ch] text-right">{kw.highlight}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-6 py-3" style={{ background: "var(--surface-elevated)", borderTop: "1px solid var(--border)" }}>
        <p className="text-[10px] text-zinc-600 font-mono">
          Andel lokal synlighet = andelen av det geografiska sökrutnätet där profilen visas i topp 3 på Google Maps · pp = procentenheter
        </p>
      </div>
    </div>
  );
}

export default function ResultatPage() {
  const cases = getAllCaseStudies();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#08080A] pt-[72px]">

        {/* Hero */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>
              Bevis, inte löften
            </p>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] max-w-[20ch]">
              Resultat från riktiga kunder
            </h1>
            <p className="mt-5 text-[17px] text-zinc-400 leading-relaxed max-w-[52ch]">
              Inga påhittade siffror. Här är vad som faktiskt hände när svenska lokala företag implementerade våra system för lokal synlighet.
            </p>
          </div>
        </section>

        {/* Proof carousel — live Google rankings */}
        <section className="py-16 lg:py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>
              Live i Google Maps
            </p>
            <h2 className="text-[1.6rem] md:text-[2rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight mb-2">
              Våra kunders faktiska Google-rankingar
            </h2>
            <p className="text-[14px] text-zinc-500 mb-8 max-w-[48ch]">
              Klicka på en bild för att se den i fullstorlek. Skärmdumpar tagna direkt från Google Search.
            </p>
            <ProofCarousel />
          </div>
        </section>

        <ReviewWidget />

        {/* Case studies */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-24">
            {cases.map((cs, idx) => (
              <article
                key={cs.slug}
                id={cs.slug}
                className="scroll-mt-[88px]"
              >
                {/* Client header */}
                <div className="flex flex-wrap items-start gap-4 mb-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-[14px] font-bold shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {cs.client.split(" ").map(w => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <h2 className="text-[1.6rem] md:text-[2rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
                      {cs.client}
                    </h2>
                    <p className="text-[14px] text-zinc-500 mt-0.5">
                      {cs.industry} · {cs.city}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-auto self-center items-center">
                    {cs.status && (
                      <StatusBadge label={cs.status.label} variant={cs.status.variant} />
                    )}
                    {cs.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.18em] font-mono px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(201,168,76,0.1)", color: "var(--accent)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stat highlight */}
                {cs.statHighlight && (
                  <div
                    className="rounded-2xl p-6 md:p-8 mb-10 flex flex-wrap items-center gap-6"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.04em] text-zinc-500 leading-none tabular-nums">
                        {cs.statHighlight.before}
                      </span>
                      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true" className="shrink-0">
                        <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.04em] text-[#F4F4F5] leading-none tabular-nums">
                        {cs.statHighlight.after}
                      </span>
                      <div>
                        <p className="text-[13px] text-zinc-400">{cs.statHighlight.label}</p>
                        <p className="text-[12px] font-mono" style={{ color: "var(--accent)" }}>på {cs.timeframe}</p>
                      </div>
                    </div>

                    {cs.secondaryStatHighlight && (
                      <>
                        <div className="hidden md:block w-px h-12 shrink-0" style={{ background: "var(--border)" }} />
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="text-[2rem] font-bold tracking-[-0.03em] text-zinc-500 leading-none">
                            {cs.secondaryStatHighlight.before}
                          </span>
                          <svg width="24" height="14" viewBox="0 0 28 16" fill="none" aria-hidden="true" className="shrink-0">
                            <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[2rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-none">
                            {cs.secondaryStatHighlight.after}
                          </span>
                          <p className="text-[13px] text-zinc-400">{cs.secondaryStatHighlight.label}</p>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

                  {/* Left col: story */}
                  <div className="flex flex-col gap-6">

                    {/* Utgångsläge */}
                    <div
                      className="rounded-2xl p-6"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "var(--accent)" }}>
                        Utgångsläge
                      </p>
                      <p className="text-[15px] text-zinc-300 leading-relaxed mb-4">{cs.startingPoint}</p>
                      {cs.beforeMetric && (
                        <div
                          className="flex items-center gap-3 pt-4"
                          style={{ borderTop: "1px solid var(--border)" }}
                        >
                          <span className="text-[11px] uppercase tracking-[0.15em] font-mono text-zinc-500">Innan:</span>
                          <span className="text-[14px] font-semibold text-zinc-300 tabular-nums">{cs.beforeMetric.value}</span>
                          <span className="text-[12px] text-zinc-500">{cs.beforeMetric.label}</span>
                        </div>
                      )}
                    </div>

                    {/* Vad vi gjorde */}
                    <div
                      className="rounded-2xl p-6 flex-1"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                        Vad vi gjorde
                      </p>
                      <ul className="flex flex-col gap-3">
                        {cs.actions.map((action, i) => (
                          <li key={i} className="flex gap-3 text-[14px] text-zinc-300 leading-snug">
                            <span
                              className="mt-[3px] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                              style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                              aria-hidden="true"
                            >
                              {i + 1}
                            </span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resultat metric */}
                    {cs.afterMetric && (
                      <div
                        className="rounded-2xl p-6"
                        style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)" }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "var(--accent)" }}>
                          Resultat · efter {cs.timeframe}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] font-semibold text-[#F4F4F5] tabular-nums">{cs.afterMetric.value}</span>
                          <span className="text-[12px] text-zinc-400">{cs.afterMetric.label}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right col: images (if available) */}
                  {cs.images ? (
                    <div className="flex flex-col gap-4">
                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "1px solid var(--border)" }}
                      >
                        <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
                          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500">Innan</span>
                        </div>
                        <div className="relative w-full aspect-[16/7] bg-[#0F0F12]">
                          <Image
                            src={cs.images.before}
                            alt={cs.images.beforeAlt}
                            fill
                            className="object-cover"
                            style={{ objectPosition: "center 28%" }}
                            unoptimized
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                      >
                        <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(201,168,76,0.05)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                          <span className="text-[10px] uppercase tracking-[0.2em] font-mono" style={{ color: "var(--accent)" }}>Efter · {cs.timeframe}</span>
                        </div>
                        <div className="relative w-full aspect-[16/7] bg-[#0F0F12]">
                          <Image
                            src={cs.images.after}
                            alt={cs.images.afterAlt}
                            fill
                            className="object-cover"
                            style={{ objectPosition: "center 28%" }}
                            unoptimized
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-600 text-center font-mono">
                        Skärmdumpar från Google Business Profile
                      </p>
                    </div>
                  ) : (
                    /* Placeholder when no images yet */
                    <div
                      className="rounded-2xl flex items-center justify-center"
                      style={{ border: "1px dashed var(--border)", minHeight: "220px", background: "var(--surface)" }}
                    >
                      <p className="text-[12px] text-zinc-600 font-mono text-center px-6">
                        Skärmdumpar läggs till när bildmaterial finns tillgängligt
                      </p>
                    </div>
                  )}
                </div>

                {/* Geo-grid carousel */}
                {cs.geoGridKeywords && cs.geoGridKeywords.length > 0 && (
                  <div className="mb-8">
                    <GeoGridCarousel keywords={cs.geoGridKeywords} summary={cs.geoGridSummary} />
                  </div>
                )}

                {/* GBP interaction stats */}
                {cs.gbpStats && cs.gbpStats.length > 0 && (
                  <div className="mb-8">
                    <GbpStatsBar stats={cs.gbpStats} />
                  </div>
                )}

                {/* Geo timeline table */}
                {cs.geoTimeline && cs.geoTimeline.length > 0 && (
                  <div className="mb-8">
                    <GeoTimeline keywords={cs.geoTimeline} />
                  </div>
                )}

                {/* Ranking keywords */}
                {cs.rankingKeywords && cs.rankingKeywords.length > 0 && (
                  <RankingGrid keywords={cs.rankingKeywords} />
                )}

                {/* Caveats */}
                {cs.caveats && (
                  <div
                    className="rounded-2xl p-5 mt-6 flex gap-3"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5" style={{ color: "#71717a" }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-zinc-500 mb-1.5">Vad som ännu inte kan attribueras säkert</p>
                      <p className="text-[13px] text-zinc-400 leading-relaxed">{cs.caveats}</p>
                    </div>
                  </div>
                )}

                {/* Divider between cases */}
                {idx < cases.length - 1 && (
                  <div className="w-full h-px mt-8" style={{ background: "var(--border)" }} />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[1.2rem] font-semibold text-[#F4F4F5]">
                Vill du se liknande resultat?
              </p>
              <p className="text-[14px] text-zinc-400 mt-1">
                Boka ett gratis analyssamtal — 15 minuter, inga förpliktelser.
              </p>
            </div>
            <a
              href="/boka"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200"
              style={{ background: "var(--accent)", color: "#08080A" }}
            >
              Boka gratis analys
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
