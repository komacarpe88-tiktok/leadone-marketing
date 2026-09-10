import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import { getAllCaseStudies, type RankingKeyword } from "@/lib/case-studies";
import ProofCarousel from "@/components/ProofCarousel";
import ReviewWidget from "@/components/ReviewWidget";

export const metadata: Metadata = {
  title: "Results & Case Studies | LeadOne Marketing",
  description:
    "See how Swedish local businesses have grown their Google reviews and improved their visibility with LeadOne Marketing. Real results, real clients.",
  keywords:
    "local SEO results, Google reviews case study, Google Business Profile optimisation results, LeadOne Marketing clients",
  alternates: { canonical: "https://leadone.online/en/results" },
  openGraph: {
    title: "Results & Case Studies | LeadOne Marketing",
    description:
      "Real results from Swedish local businesses working with LeadOne Marketing.",
    locale: "en_GB",
    type: "website",
    url: "https://leadone.online/en/results",
  },
};

const EN: Record<string, { startingPoint: string; beforeMetric: string; afterMetric: string; actions: string[]; statLabel: string; secondaryLabel: string; timeframeLabel: string; before: string; what: string; after: string }> = {
  "angelique-hud-kropp": {
    startingPoint:
      "Angelique Hud & Kropp had a strong local reputation but lacked a system for consistently collecting new Google reviews. With 28 reviews and a 4.9★ average, the foundation was solid — but review volume limited their visibility in the Local Pack.",
    beforeMetric: "Google reviews",
    afterMetric: "Google reviews",
    actions: [
      "Optimised Google Business Profile with correct categories, service descriptions and photos",
      "Deployed Review Machine — automated SMS review requests after each treatment",
      "Set up the Request · Response · Repurpose flow to repurpose every review across social media",
      "Added Bokadirekt booking integration to the GBP profile for direct booking flow",
    ],
    statLabel: "Google reviews",
    secondaryLabel: "Average rating",
    timeframeLabel: "in 3 months",
    before: "Situation",
    what: "What we did",
    after: "Results · after",
  },
  "hjeronymus-salongen": {
    startingPoint:
      "Hjeronymus Salongen was a well-run salon in Kungsbacka with loyal customers but very little digital visibility. With only 13 Google reviews and a 4.8★ average, the profile rarely appeared in local search results — despite high customer satisfaction.",
    beforeMetric: "Google reviews",
    afterMetric: "Google reviews",
    actions: [
      "Completed full LaunchMap™ optimisation: GBP category, attributes, opening hours, services and photo strategy",
      "Rolled out Review Machine with automated SMS requests immediately after each booked appointment",
      "Built a local citation strategy for the Kungsbacka area to increase prominence",
      "Set up Google review response templates to strengthen engagement signals",
    ],
    statLabel: "Google reviews",
    secondaryLabel: "Average rating",
    timeframeLabel: "in 2.5 months",
    before: "Situation",
    what: "What we did",
    after: "Results · after",
  },
};

function rankColor(rank: number) {
  if (rank < 3)  return { bg: "rgba(34,197,94,0.10)", border: "rgba(34,197,94,0.25)", text: "#4ade80", badge: "rgba(34,197,94,0.15)", label: "Top 3 · Local Pack" };
  if (rank < 5)  return { bg: "rgba(234,179,8,0.08)",  border: "rgba(234,179,8,0.2)",  text: "#facc15", badge: "rgba(234,179,8,0.15)",  label: "Top 5" };
  return           { bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)", text: "#fb923c", badge: "rgba(249,115,22,0.15)", label: "Top 10" };
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
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)"/>
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F4F4F5]">Google Maps ranking</p>
          <p className="text-[11px] text-zinc-500">Average position in search results · measured with geo-grid</p>
        </div>
        <div className="ml-auto items-center gap-4 text-[10px] font-mono text-zinc-600 hidden sm:flex">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Top 3 = Local Pack</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />Top 5</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />Top 10</span>
        </div>
      </div>

      {/* Column headers */}
      <div
        className="px-6 py-2 grid items-center text-[10px] uppercase tracking-[0.15em] font-mono text-zinc-600"
        style={{ gridTemplateColumns: "1fr 120px 90px 64px", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <span>Search query on Google</span>
        <span className="text-right">Position</span>
        <span className="text-right">Visibility</span>
        <span className="text-right">Date</span>
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
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.text }} aria-hidden="true" />
                <span className="text-[13px] text-zinc-200 truncate">{kw.keyword}</span>
              </div>

              <div className="flex items-center justify-end gap-2">
                <span
                  className="text-[12px] font-mono font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: c.badge, color: c.text }}
                >
                  Rank {kw.rank.toFixed(2)}
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
        className="px-6 py-3"
        style={{ background: "var(--surface-elevated)", borderTop: "1px solid var(--border)" }}
      >
        <p className="text-[10px] text-zinc-600 font-mono">
          SOLV = share of the geographic search grid where the profile appears in the top 3 on Google Maps
        </p>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const cases = getAllCaseStudies();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#08080A] pt-[72px]">

        {/* Hero */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>
              Proof, not promises
            </p>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] max-w-[20ch]">
              Results from real clients
            </h1>
            <p className="mt-5 text-[17px] text-zinc-400 leading-relaxed max-w-[52ch]">
              No fabricated numbers. Here is what actually happened when Swedish local businesses implemented our local visibility systems.
            </p>
          </div>
        </section>

        {/* Proof carousel */}
        <section className="py-16 lg:py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>
              Live on Google Maps
            </p>
            <h2 className="text-[1.6rem] md:text-[2rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight mb-2">
              Our clients' actual Google rankings
            </h2>
            <p className="text-[14px] text-zinc-500 mb-8 max-w-[48ch]">
              Click any image to view full size. Screenshots taken directly from Google Search.
            </p>
            <ProofCarousel />
          </div>
        </section>

        <ReviewWidget />

        {/* Case studies */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col gap-24">
            {cases.filter(cs => !!EN[cs.slug]).map((cs, idx, arr) => {
              const copy = EN[cs.slug];
              return (
                <article key={cs.slug} id={cs.slug} className="scroll-mt-[88px]">

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
                    <div className="flex flex-wrap gap-2 ml-auto self-center">
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
                  {cs.statHighlight && <div
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
                        <p className="text-[13px] text-zinc-400">{copy.statLabel}</p>
                        <p className="text-[12px] font-mono" style={{ color: "var(--accent)" }}>{copy.timeframeLabel}</p>
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
                          <p className="text-[13px] text-zinc-400">{copy.secondaryLabel}</p>
                        </div>
                      </>
                    )}
                  </div>}

                  {/* Content grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                    <div className="flex flex-col gap-6">

                      {/* Starting point */}
                      <div
                        className="rounded-2xl p-6"
                        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "var(--accent)" }}>
                          {copy.before}
                        </p>
                        <p className="text-[15px] text-zinc-300 leading-relaxed mb-4">{copy.startingPoint}</p>
                        {cs.beforeMetric && (
                          <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                            <span className="text-[11px] uppercase tracking-[0.15em] font-mono text-zinc-500">Before:</span>
                            <span className="text-[14px] font-semibold text-zinc-300 tabular-nums">{cs.beforeMetric.value}</span>
                            <span className="text-[12px] text-zinc-500">{copy.beforeMetric}</span>
                          </div>
                        )}
                      </div>

                      {/* What we did */}
                      <div
                        className="rounded-2xl p-6 flex-1"
                        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                          {copy.what}
                        </p>
                        <ul className="flex flex-col gap-3">
                          {copy.actions.map((action, i) => (
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

                      {/* Result */}
                      {cs.afterMetric && (
                        <div
                          className="rounded-2xl p-6"
                          style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)" }}
                        >
                          <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-3" style={{ color: "var(--accent)" }}>
                            {copy.after} {cs.timeframe}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-[14px] font-semibold text-[#F4F4F5] tabular-nums">{cs.afterMetric.value}</span>
                            <span className="text-[12px] text-zinc-400">{copy.afterMetric}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Images */}
                    {cs.images ? (
                      <div className="flex flex-col gap-4">
                        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                          <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-500">Before</span>
                          </div>
                          <div className="relative w-full aspect-[16/10] bg-[#0F0F12]">
                            <Image
                              src={cs.images.before}
                              alt={cs.images.beforeAlt}
                              fill
                              className="object-cover object-top"
                              unoptimized
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                          <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(201,168,76,0.05)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-mono" style={{ color: "var(--accent)" }}>After · {cs.timeframe}</span>
                          </div>
                          <div className="relative w-full aspect-[16/10] bg-[#0F0F12]">
                            <Image
                              src={cs.images.after}
                              alt={cs.images.afterAlt}
                              fill
                              className="object-cover object-top"
                              unoptimized
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                        </div>

                        <p className="text-[11px] text-zinc-600 text-center font-mono">
                          Screenshots from Google Business Profile
                        </p>
                      </div>
                    ) : (
                      <div
                        className="rounded-2xl flex items-center justify-center"
                        style={{ border: "1px dashed var(--border)", minHeight: "220px", background: "var(--surface)" }}
                      >
                        <p className="text-[12px] text-zinc-600 font-mono text-center px-6">
                          Screenshots will be added when available
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Ranking keywords */}
                  {cs.rankingKeywords && cs.rankingKeywords.length > 0 && (
                    <RankingGrid keywords={cs.rankingKeywords} />
                  )}

                  {idx < arr.length - 1 && (
                    <div className="w-full h-px mt-8" style={{ background: "var(--border)" }} />
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[1.2rem] font-semibold text-[#F4F4F5]">
                Want to see similar results?
              </p>
              <p className="text-[14px] text-zinc-400 mt-1">
                Book a free analysis call — 15 minutes, no obligations.
              </p>
            </div>
            <a
              href="/en/book"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200"
              style={{ background: "var(--accent)", color: "#08080A" }}
            >
              Book free analysis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
    </>
  );
}
