"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Illustrative two-line chart with labeled axes (no numeric scale — this is
 * directional, not data): a declining muted line ("left alone") against a
 * rising accent line ("with MapPilot™"). Lines draw in on scroll via
 * stroke-dasharray; reduced motion shows them fully drawn immediately.
 */
export default function TrendChart() {
  const reduce = useReducedMotion();

  // Plot area sits inside a margin that leaves room for axis lines/labels.
  // viewBox 0 0 440 230; plot area roughly x:40-430, y:10-180.
  const declinePath = "M 40 70 C 110 80, 180 108, 250 135 C 305 155, 365 170, 430 176";
  const risePath = "M 40 150 C 110 132, 180 108, 250 80 C 305 58, 365 36, 430 14";

  const lineProps = (path: string, delay: number) => ({
    d: path,
    fill: "none" as const,
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    pathLength: reduce ? undefined : 1,
    initial: reduce ? undefined : { pathLength: 0 },
    whileInView: reduce ? undefined : { pathLength: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 230"
        className="w-full h-auto"
        role="img"
        aria-label="Illustration: synlighet över tid. En profil som lämnas orörd faller sakta, en profil med MapPilot™ stiger stadigt."
      >
        {/* Axlar */}
        <line x1="40" y1="10" x2="40" y2="180" stroke="#3f3f46" strokeWidth="1.5" />
        <line x1="40" y1="180" x2="430" y2="180" stroke="#3f3f46" strokeWidth="1.5" />

        {/* Y-axel-markeringar: Högre / Lägre */}
        <text x="32" y="22" textAnchor="end" fontSize="11" fontFamily="var(--font-mono)" fill="#71717a">Högre</text>
        <text x="32" y="184" textAnchor="end" fontSize="11" fontFamily="var(--font-mono)" fill="#71717a">Lägre</text>

        {/* Y-axel-titel, roterad */}
        <text
          x="14" y="95"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="#a1a1aa"
          transform="rotate(-90 14 95)"
        >
          Synlighet
        </text>

        {/* X-axel-titel */}
        <text x="235" y="205" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="#a1a1aa">
          Tid
        </text>

        {/* Datalinjer */}
        <motion.path {...lineProps(declinePath, 0)} stroke="#52525b" />
        <motion.path {...lineProps(risePath, 0.3)} stroke="var(--accent)" />
      </svg>
      <div className="flex items-center justify-center gap-8 mt-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-[3px] rounded-full" style={{ background: "#52525b" }} />
          <span className="text-[12px] text-zinc-500">Profil som står still</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-[3px] rounded-full" style={{ background: "var(--accent)" }} />
          <span className="text-[12px]" style={{ color: "var(--accent)" }}>Med MapPilot™</span>
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-600 mt-4">Illustration</p>
    </div>
  );
}
