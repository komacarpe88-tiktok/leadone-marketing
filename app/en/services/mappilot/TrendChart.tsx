"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Illustrative two-line chart, no axis numbers: a declining muted line
 * ("left alone") against a rising accent line ("with MapPilot™"). Lines
 * draw in on scroll via stroke-dasharray; reduced motion shows them
 * fully drawn immediately.
 */
export default function TrendChart() {
  const reduce = useReducedMotion();

  // Smooth paths in a 400x180 viewBox.
  const declinePath = "M 0 50 C 80 60, 160 90, 240 120 C 300 142, 360 158, 400 165";
  const risePath = "M 0 140 C 80 120, 160 95, 240 65 C 300 42, 360 18, 400 10";

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
      <svg viewBox="0 0 400 180" className="w-full h-auto" role="img" aria-label="Illustration: a profile left alone slowly declines, a profile with MapPilot™ steadily rises">
        <motion.path {...lineProps(declinePath, 0)} stroke="#52525b" />
        <motion.path {...lineProps(risePath, 0.3)} stroke="var(--accent)" />
      </svg>
      <div className="flex items-center justify-center gap-8 mt-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-[3px] rounded-full" style={{ background: "#52525b" }} />
          <span className="text-[12px] text-zinc-500">Profile left alone</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-[3px] rounded-full" style={{ background: "var(--accent)" }} />
          <span className="text-[12px]" style={{ color: "var(--accent)" }}>With MapPilot™</span>
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-600 mt-4">Illustration</p>
    </div>
  );
}
