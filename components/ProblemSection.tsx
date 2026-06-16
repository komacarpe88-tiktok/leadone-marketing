"use client";

import { motion, useReducedMotion } from "motion/react";

const before = [
  "Din konkurrent har 147 recensioner — du har 3",
  "Du syns inte när kunder söker på din tjänst i din stad",
  "Dina nöjda kunder lämnar aldrig recensioner",
];

const after = [
  "Topp 3 på Google Maps för dina viktigaste sökord",
  "100+ nya 5-stjärniga recensioner på 3 månader",
  "Leads kommer in från Google varje vecka",
];

export default function ProblemSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 border-b overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Headline */}
        <motion.div
          className="mb-16 lg:mb-20 text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-6" style={{ color: "var(--accent)" }}>
            Du är inte ensam
          </p>
          <div
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "var(--accent)",
              opacity: 0.2,
              lineHeight: 0.8,
              marginBottom: "0.3rem",
            }}
          >"</div>
          <p style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.3rem, 3vw, 2.1rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            color: "rgb(212 212 216)",
            maxWidth: "32ch",
            margin: "0 auto",
          }}>
            Jag vet att jag borde synas bättre på Google,
            men jag har varken tid eller kunskap att fixa det.
          </p>
        </motion.div>

        {/* Two-column dramatic cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>

          {/* FÖRE */}
          <motion.div
            className="relative p-10 lg:p-14 flex flex-col gap-10"
            style={{ background: "rgba(18,6,6,0.95)" }}
            initial={reduce ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(200,40,40,0.12) 0%, transparent 65%)" }} aria-hidden="true" />

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.25em] font-mono mb-4" style={{ color: "rgba(220,80,80,0.7)" }}>Innan LeadOne</p>
              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.1,
                color: "rgba(220,80,80,0.9)",
                letterSpacing: "-0.02em",
              }}>
                Du är osynlig.
              </h3>
            </div>

            <ul className="relative flex flex-col gap-7">
              {before.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-5"
                  initial={reduce ? false : { opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5" style={{ background: "rgba(200,40,40,0.15)", border: "1px solid rgba(200,40,40,0.3)" }} aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="rgba(220,80,80,0.9)" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <p className="text-[16px] lg:text-[17px] leading-snug" style={{ color: "rgba(212,212,216,0.65)" }}>{item}</p>
                </motion.li>
              ))}
            </ul>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, rgba(200,40,40,0.3), transparent)" }} aria-hidden="true" />
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px]" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }} aria-hidden="true" />

          {/* EFTER */}
          <motion.div
            className="relative p-10 lg:p-14 flex flex-col gap-10"
            style={{ background: "rgba(6,12,6,0.95)" }}
            initial={reduce ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)" }} aria-hidden="true" />

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.25em] font-mono mb-4" style={{ color: "rgba(201,168,76,0.7)" }}>Med LeadOne</p>
              <h3 style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.1,
                color: "var(--accent)",
                letterSpacing: "-0.02em",
              }}>
                Du dominerar.
              </h3>
            </div>

            <ul className="relative flex flex-col gap-7">
              {after.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-5"
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }} aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2.5 2.5 4-5" stroke="rgba(201,168,76,1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-[16px] lg:text-[17px] leading-snug text-[#F4F4F5]">{item}</p>
                </motion.li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3))" }} aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
