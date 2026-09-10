"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const copy = {
  sv: {
    eyebrow: "Grundaren",
    heading: "Jag startade LeadOne för att jag tröttnade på att se bra företag förlora kunder.",
    body1: "Inte för att de var dåliga på sitt jobb — utan för att de inte syntes på Google. En rörmokare med 20 års erfarenhet förlorade till en konkurrent som knappt existerade, bara för att konkurrenten hade 50 fler recensioner och en optimerad profil.",
    body2: "Det är varför LeadOne finns. Baserat i Helsingborg, med kunder i hela Sverige. Inga krångliga kontrakt, inga bullshit-löften. Bara system som faktiskt fungerar — och en direkt linje till mig.",
    badge: "svenska företag rankar just nu",
    title: "Grundare, LeadOne Marketing",
    cta: "Prata direkt med Douglas",
    ctaHref: "/boka",
  },
  en: {
    eyebrow: "The founder",
    heading: "I started LeadOne because I got tired of watching good businesses lose customers.",
    body1: "Not because they were bad at their job — but because they weren't visible on Google. A plumber with 20 years of experience lost to a competitor who barely existed, just because the competitor had 50 more reviews and an optimised profile.",
    body2: "That's why LeadOne exists. No complicated contracts, no BS promises. Just systems that actually work — and a direct line to me.",
    badge: "Swedish businesses ranking right now",
    title: "Founder, LeadOne Marketing",
    cta: "Talk directly with Douglas",
    ctaHref: "/en/book",
  },
};

export default function FounderSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const c = copy[locale];

  return (
    <section className="py-24 lg:py-32 border-t border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-[420px] max-h-[420px] lg:max-h-none">
              <Image
                src="/assets/profile_pic.webp"
                alt="Douglas, grundare av LeadOne Marketing"
                fill
                loading="lazy"
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,8,10,0.6) 0%, transparent 50%)" }}
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 lg:-right-10 rounded-2xl p-5 max-w-[200px]"
              style={{
                background: "rgba(14,14,17,0.95)",
                border: "1px solid rgba(201,168,76,0.25)",
                backdropFilter: "blur(16px)",
              }}
              initial={reduce ? false : { y: 0 }}
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-mono text-[22px] font-bold leading-none mb-1" style={{ color: "var(--accent)" }}>43+</p>
              <p className="text-[12px] text-zinc-500 leading-snug">{c.badge}</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={reduce ? false : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                {c.eyebrow}
              </p>
              <h2 className="font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                {c.heading}
              </h2>
              <p className="text-[16px] text-zinc-400 leading-relaxed mb-4">{c.body1}</p>
              <p className="text-[16px] text-zinc-400 leading-relaxed">{c.body2}</p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="h-px w-12" style={{ background: "var(--accent)" }} aria-hidden="true" />
              <div>
                <p className="text-[15px] font-semibold text-[#F4F4F5]">Douglas</p>
                <p className="text-[12px] text-zinc-500">{c.title}</p>
              </div>
            </div>

            <a
              href={c.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200 self-start group"
            >
              {c.cta}
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-200"><line x1="2" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><polyline points="8.5,3 13,7.5 8.5,12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
