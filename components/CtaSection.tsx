"use client";

import { motion, useReducedMotion } from "motion/react";
import { phone, phones } from "@/lib/contact";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const copy = {
  sv: {
    heading1: "Varje dag du inte syns =",
    heading2: "pengar till konkurrenten",
    body: "Majoriteten av alla klick i Local Pack går till de tre översta resultaten. Ligger du under dem är det konkurrenten som får samtalet. 15 minuters samtal för att se hur du ligger till — och vad vi kan göra åt det.",
    cta: "Boka Ditt Kostnadsfria Samtal Nu",
    phone: `Eller ring direkt: ${phones.sv.display}`,
    ctaHref: "/boka",
  },
  en: {
    heading1: "Every day you're invisible =",
    heading2: "money for your competitor",
    body: "The majority of all Local Pack clicks go to the top three results. If you rank below them, your competitor gets the call. 15 minutes to see where you stand — and what we can do about it.",
    cta: "Book Your Free Call Now",
    phone: `Or call directly: ${phones.en.display}`,
    ctaHref: "/en/book",
  },
};

export default function CtaSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const c = copy[locale];

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute inset-0 z-0">
        <Image src="/assets/gold-particles.jpg" alt="" fill loading="lazy" className="object-cover object-center opacity-30" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#08080A]/75" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #08080A 100%)" }} aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7"
        >
          <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.08] max-w-[18ch] mx-auto">
            {c.heading1}
            <br />
            <span className="text-accent">{c.heading2}</span>
          </h2>

          <p className="text-[15px] text-zinc-400 max-w-[44ch] leading-relaxed">
            {c.body}
          </p>

          <a
            href={c.ctaHref}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200 group"
          >
            {c.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-200"><line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polyline points="9,3 14,8 9,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>

          <a
            href={phone(locale).href}
            className="flex items-center gap-2 text-[14px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 2.5C2 2.5 3.5 2 4.5 3.5L5.5 5.5C5.5 5.5 5.8 6.2 5 7L4.5 7.5C4.5 7.5 5.5 9.5 7 10.5L7.5 10C7.5 10 8.2 9.2 9 9.5L11 10.5C12.5 11.5 12 13 12 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            {c.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
