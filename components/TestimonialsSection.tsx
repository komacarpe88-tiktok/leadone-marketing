"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "LeadOne förändrade hur vi syns på Google. Inom fem månader gick vi från osynliga till tre nya kunder som kom in varje dag tack vare Maps.",
    name: "Mikael Lindqvist",
    title: "Ägare — Lindqvist Elektriker",
    avatar: "ML",
  },
  {
    quote: "De förstod vår lokala marknad omedelbart. Vi syns nu på första plats för alla viktiga sökningar. Telefonen ringer mer än någonsin.",
    name: "Sofia Bergström",
    title: "Verksamhetschef — Café Piran",
    avatar: "SB",
  },
  {
    quote: "LeadOne är det första team som rapporterade faktiska siffror vi kunde verifiera i Google Search Console. En enorm skillnad.",
    name: "Anders Holm",
    title: "Direktör — Sundström Bygg AB",
    avatar: "AH",
  },
  {
    quote: "Efter sex månader rankar vi bland de tre bästa för alla sökord som är viktiga för vår verksamhet. Patientförfrågningar har mer än fördubblats.",
    name: "Karin Vestergaard",
    title: "Tandläkare — Vestergaard Tandläkare",
    avatar: "KV",
  },
];

export default function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Från våra kunder
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Vad våra kunder säger
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              className="rounded-2xl p-7 flex flex-col gap-5 cursor-pointer"
              style={{ background: i % 2 === 0 ? "var(--surface-elevated)" : "#0F0F12", border: "1px solid var(--border)" }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="flex gap-1" aria-label="5 av 5 stjärnor">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} weight="fill" className="text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-[15px] text-zinc-300 leading-relaxed flex-1">
                {"“"}{t.quote}{"”"}
              </blockquote>

              <div className="flex items-center gap-3 pt-1 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }} aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#F4F4F5]">{t.name}</p>
                  <p className="text-[12px] text-zinc-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="/boka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200 group">
            Boka Gratis Analys
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
