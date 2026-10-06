"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The page's single grid/heatmap visual: a 5x4 grid of circles with rank
 * numbers, colored on the same green/yellow/orange/red tier scale used by
 * the real case-study heatmap (components/GeoGridCarousel.tsx), so a
 * ranking grid reads the same way everywhere on the site. Circles animate
 * once from a weaker start state to the final state on scroll.
 */
function rankStyle(rank: number): { bg: string; text: string } {
  if (rank <= 2) return { bg: "#166534", text: "#4ade80" };
  if (rank <= 3) return { bg: "#14532d", text: "#86efac" };
  if (rank <= 5) return { bg: "#713f12", text: "#fde68a" };
  if (rank <= 10) return { bg: "#7c2d12", text: "#fdba74" };
  return { bg: "#450a0a", text: "#f87171" };
}

const rows = 4, cols = 5;
const cells = Array.from({ length: rows * cols }, (_, i) => {
  const r = Math.floor(i / cols), c = i % cols;
  const dist = Math.hypot(r - 1.3, c - 2);
  if (dist < 1) return { rank: 1, label: "1" };
  if (dist < 1.6) return { rank: 2, label: "2" };
  if (dist < 2.2) return { rank: 3, label: "3" };
  if (dist < 2.9) return { rank: 7, label: "7" };
  return { rank: 15, label: "12+" };
});

const weak = { bg: "#27272a", text: "#71717a" };

export default function RankingHeatmap() {
  const reduce = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Illustration of a ranking grid — green represents the top 3, yellow mid-range positions and red weak visibility in Google Maps"
      style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "8px" }}
    >
      {cells.map((cell, i) => {
        const final = rankStyle(cell.rank);
        if (reduce) {
          return (
            <div
              key={i}
              aria-hidden="true"
              className="flex items-center justify-center"
              style={{ aspectRatio: "1", borderRadius: "999px", background: final.bg, color: final.text, fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "12px" }}
            >
              {cell.label}
            </div>
          );
        }
        return (
          <motion.div
            key={i}
            aria-hidden="true"
            className="flex items-center justify-center"
            style={{ aspectRatio: "1", borderRadius: "999px", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "12px" }}
            initial={{ background: weak.bg, color: weak.text }}
            whileInView={{ background: final.bg, color: final.text }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
          >
            {cell.label}
          </motion.div>
        );
      })}
    </div>
  );
}
