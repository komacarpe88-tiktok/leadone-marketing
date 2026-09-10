"use client";

import { useState } from "react";
import type { GeoGridKeyword } from "@/lib/case-studies";

function cellStyle(rank: number): { bg: string; text: string; label: string } {
  if (rank <= 2)  return { bg: "#166534", text: "#4ade80", label: `#${rank}` };
  if (rank <= 3)  return { bg: "#14532d", text: "#86efac", label: `#${rank}` };
  if (rank <= 5)  return { bg: "#713f12", text: "#fde68a", label: `#${rank}` };
  if (rank <= 10) return { bg: "#7c2d12", text: "#fdba74", label: `#${rank}` };
  return            { bg: "#450a0a", text: "#f87171", label: "20+" };
}

function GeoGrid({ cells, size = 52 }: { cells: number[]; size?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
      {cells.map((rank, i) => {
        const s = cellStyle(rank);
        return (
          <div
            key={i}
            title={`Plats ${rank > 10 ? "20+" : rank}`}
            style={{
              width: size, height: size,
              background: s.bg,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "13px",
              color: s.text,
              letterSpacing: "-0.02em",
            }}
          >
            {s.label}
          </div>
        );
      })}
    </div>
  );
}

export default function GeoGridCarousel({
  keywords,
  summary,
}: {
  keywords: GeoGridKeyword[];
  summary?: { before: number; after: number; label: string };
}) {
  const [active, setActive] = useState(0);
  const kw = keywords[active];
  const deltaColor = kw.deltaPp > 0 ? "#4ade80" : kw.deltaPp === 0 ? "#71717a" : "#f87171";

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>

      {/* Header */}
      <div className="px-6 py-4 flex items-center gap-3" style={{ background: "var(--surface-elevated)", borderBottom: "1px solid var(--border)" }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
            <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)" />
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#F4F4F5]">Geo-grid · Google Maps synlighet</p>
          <p className="text-[11px] text-zinc-500">Rankingposition per geografisk mätpunkt · Local Falcon · jul–aug 2026</p>
        </div>
        {/* Legend */}
        <div className="ml-auto hidden md:flex items-center gap-3 text-[9px] font-mono flex-wrap justify-end">
          {[
            { bg: "#166534", text: "#4ade80", label: "Topp 1–2" },
            { bg: "#14532d", text: "#86efac", label: "Plats 3" },
            { bg: "#713f12", text: "#fde68a", label: "Plats 4–5" },
            { bg: "#7c2d12", text: "#fdba74", label: "Plats 6–10" },
            { bg: "#450a0a", text: "#f87171", label: "20+" },
          ].map(c => (
            <span key={c.label} className="flex items-center gap-1.5">
              <span style={{ width: 10, height: 10, borderRadius: 3, background: c.bg, display: "inline-block" }} />
              <span style={{ color: c.text }}>{c.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Summary bar */}
      {summary && (
        <div className="px-6 py-3 flex items-center gap-4 flex-wrap" style={{ background: "rgba(201,168,76,0.04)", borderBottom: "1px solid var(--border)" }}>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.12em]">{summary.label}</p>
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-[1.75rem] font-bold font-mono tracking-[-0.04em] text-zinc-500">{summary.before}%</span>
            <svg width="22" height="13" viewBox="0 0 28 16" fill="none" aria-hidden="true">
              <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[1.75rem] font-bold font-mono tracking-[-0.04em] text-[#F4F4F5]">{summary.after}%</span>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">nästan dubblerad synlighet på en dryg månad</span>
          </div>
        </div>
      )}

      {/* Tab bar */}
      <div className="flex overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        {keywords.map((k, i) => (
          <button
            key={k.keyword}
            onClick={() => setActive(i)}
            style={{
              padding: "0.75rem 1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: active === i ? 700 : 400,
              color: active === i ? "var(--accent)" : "#71717a",
              background: "none",
              border: "none",
              borderBottom: active === i ? "2px solid var(--accent)" : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.15s",
              letterSpacing: "0.02em",
              marginBottom: "-1px",
            }}
          >
            {k.keyword}{k.star ? " ★" : ""}
          </button>
        ))}
      </div>

      {/* Active slide */}
      <div className="px-6 py-6" style={{ background: "var(--surface)" }}>
        <div className="flex items-start gap-8 flex-wrap">

          {/* Before */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-500">Innan · {kw.before.date}</span>
            <GeoGrid cells={kw.before.grid} size={56} />
            <div className="flex gap-4 mt-1">
              <span className="text-[11px] font-mono text-zinc-500">
                SoLV <span className="text-zinc-300 font-bold">{kw.before.solv}%</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Snitt{" "}
                <span className="text-zinc-300 font-bold">
                  {kw.before.avgRank !== null ? `#${kw.before.avgRank}` : "20+"}
                </span>
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center self-center mt-4">
            <svg width="32" height="18" viewBox="0 0 28 16" fill="none" aria-hidden="true">
              <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* After */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-[0.2em] font-mono" style={{ color: "var(--accent)" }}>Nu · {kw.after.date}</span>
            <GeoGrid cells={kw.after.grid} size={56} />
            <div className="flex gap-4 mt-1">
              <span className="text-[11px] font-mono text-zinc-500">
                SoLV <span style={{ color: "var(--accent)" }} className="font-bold">{kw.after.solv}%</span>
              </span>
              {kw.after.avgRank !== null && (
                <span className="text-[11px] font-mono text-zinc-500">
                  Snitt <span style={{ color: "var(--accent)" }} className="font-bold">#{kw.after.avgRank}</span>
                </span>
              )}
            </div>
          </div>

          {/* Delta */}
          <div className="ml-auto self-center flex flex-col items-end gap-1">
            <span className="text-[2.5rem] font-bold font-mono tracking-[-0.04em] leading-none" style={{ color: deltaColor }}>
              +{kw.deltaPp}
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">procentenheter</span>
          </div>
        </div>
      </div>

      {/* Dot nav + prev/next */}
      <div className="px-6 py-4 flex items-center justify-between" style={{ background: "var(--surface-elevated)", borderTop: "1px solid var(--border)" }}>
        <button
          onClick={() => setActive(i => Math.max(0, i - 1))}
          disabled={active === 0}
          style={{
            background: "none", border: "1px solid var(--border)", borderRadius: "50%",
            width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: active === 0 ? "default" : "pointer",
            opacity: active === 0 ? 0.3 : 1, color: "var(--accent)",
          }}
          aria-label="Föregående"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="flex items-center gap-2">
          {keywords.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Sökord ${i + 1}`}
              style={{
                width: active === i ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: active === i ? "var(--accent)" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.2s, background 0.2s",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setActive(i => Math.min(keywords.length - 1, i + 1))}
          disabled={active === keywords.length - 1}
          style={{
            background: "none", border: "1px solid var(--border)", borderRadius: "50%",
            width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: active === keywords.length - 1 ? "default" : "pointer",
            opacity: active === keywords.length - 1 ? 0.3 : 1, color: "var(--accent)",
          }}
          aria-label="Nästa"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
