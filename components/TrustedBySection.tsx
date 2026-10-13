"use client";

import { motion, useReducedMotion } from "motion/react";

// Real, verifiable clients only — each name is traceable to an actual case
// study (lib/case-studies.ts) or a named Google review. No invented logos.
const CLIENTS = [
  { id: "zb", name: "ZviZZer Bilvård",       init: "ZB", industry: "Bilvård" },
  { id: "rb", name: "RS Bilvård",            init: "RB", industry: "Bilvård" },
  { id: "ah", name: "Angelique Hud & Kropp", init: "AH", industry: "Hudvård & skönhet" },
  { id: "hs", name: "Hjeronymus Salongen",   init: "HS", industry: "Salong & skönhet" },
  { id: "dl", name: "Detail Lounge AB",      init: "DL", industry: "Bilvård" },
];

export default function TrustedBySection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-24"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-14"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-3">
            Ditt förtroende — <span style={{ color: "var(--accent)" }}>vår drivkraft</span>
          </h2>
          <p className="text-[12px] uppercase tracking-[0.22em] font-mono text-zinc-500">
            Lokala företag vi arbetar med
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLIENTS.map((c, i) => (
            <motion.div
              key={c.id}
              className="rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center group"
              style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
                aria-hidden="true"
              >
                {c.init}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#F4F4F5] leading-snug">{c.name}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{c.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
