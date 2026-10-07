"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "@phosphor-icons/react";
import type { Locale } from "@/lib/i18n";

const caseStudyPreviews = [
  {
    slug: "zvizzer-bilvard",
    client: "ZviZZer Bilvård",
    industry: { sv: "Bilvård · Malmö", en: "Car care · Malmö" },
    before: "8,7",
    after: "4,3",
    label: { sv: "snittposition", en: "average rank" },
    timeframe: { sv: "1 vecka", en: "1 week" },
    avatar: "ZB",
  },
  {
    slug: "angelique-hud-kropp",
    client: "Angelique Hud & Kropp",
    industry: { sv: "Hudvårdsmottagning · Helsingborg", en: "Skin care clinic · Helsingborg" },
    before: "28",
    after: "108",
    label: { sv: "Google-recensioner", en: "Google reviews" },
    timeframe: { sv: "3 mån", en: "3 mo" },
    avatar: "AH",
  },
  {
    slug: "hjeronymus-salongen",
    client: "Hjeronymus Salongen",
    industry: { sv: "Beauty salon · Kungsbacka", en: "Beauty salon · Kungsbacka" },
    before: "13",
    after: "80",
    label: { sv: "Google-recensioner", en: "Google reviews" },
    timeframe: { sv: "2,5 mån", en: "2.5 mo" },
    avatar: "HS",
  },
  {
    slug: "rs-bilvard",
    client: "RS Bilvård",
    industry: { sv: "Bilvård & Detailing · Jönköping", en: "Car care & detailing · Jönköping" },
    before: "36%",
    after: "67%",
    label: { sv: "synlighet i Map Pack", en: "Map Pack visibility" },
    timeframe: { sv: "5 veckor", en: "5 weeks" },
    avatar: "RB",
  },
];

const testimonials = [
  {
    quote: {
      sv: "LeadOne förändrade hur vi syns på Google. Inom fem månader gick vi från osynliga till tre nya kunder som kom in varje dag tack vare Maps.",
      en: "LeadOne changed how we appear on Google. Within five months we went from invisible to three new customers walking in every day thanks to Maps.",
    },
    name: "Mikael Lindqvist",
    title: { sv: "Ägare — Lindqvist Elektriker", en: "Owner — Lindqvist Elektriker" },
    avatar: "ML",
  },
  {
    quote: {
      sv: "De förstod vår lokala marknad omedelbart. Vi syns nu på första plats för alla viktiga sökningar. Telefonen ringer mer än någonsin.",
      en: "They understood our local market immediately. We now rank first for all key searches. The phone rings more than ever.",
    },
    name: "Sofia Bergström",
    title: { sv: "Verksamhetschef — Café Piran", en: "Manager — Café Piran" },
    avatar: "SB",
  },
  {
    quote: {
      sv: "LeadOne är det första team som rapporterade faktiska siffror vi kunde verifiera i Google Search Console. En enorm skillnad.",
      en: "LeadOne is the first team that reported actual numbers we could verify in Google Search Console. An enormous difference.",
    },
    name: "Anders Holm",
    title: { sv: "Direktör — Sundström Bygg AB", en: "Director — Sundström Bygg AB" },
    avatar: "AH",
  },
  {
    quote: {
      sv: "Efter sex månader rankar vi bland de tre bästa för alla sökord som är viktiga för vår verksamhet. Patientförfrågningar har mer än fördubblats.",
      en: "After six months we rank in the top three for all keywords that matter to our practice. Patient enquiries have more than doubled.",
    },
    name: "Karin Vestergaard",
    title: { sv: "Tandläkare — Vestergaard Tandläkare", en: "Dentist — Vestergaard Tandläkare" },
    avatar: "KV",
  },
];

const copy = {
  sv: {
    eyebrow: "Från våra kunder",
    heading: "Vad våra kunder säger",
    casesEyebrow: "Dokumenterade resultat",
    allCases: "Se alla case studies →",
    casesHref: "/resultat",
    cta: "Boka Gratis Analys",
    ctaHref: "/boka",
    starsLabel: "5 av 5 stjärnor",
  },
  en: {
    eyebrow: "From our clients",
    heading: "What our clients say",
    casesEyebrow: "Documented results",
    allCases: "See all case studies →",
    casesHref: "/en/results",
    cta: "Book Free Analysis",
    ctaHref: "/en/book",
    starsLabel: "5 out of 5 stars",
  },
};

export default function TestimonialsSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const c = copy[locale];

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            {c.heading}
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
              <div className="flex gap-1" aria-label={c.starsLabel}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} weight="fill" className="text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-[15px] text-zinc-300 leading-relaxed flex-1">
                {"“"}{t.quote[locale]}{"”"}
              </blockquote>

              <div className="flex items-center gap-3 pt-1 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }} aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#F4F4F5]">{t.name}</p>
                  <p className="text-[12px] text-zinc-500">{t.title[locale]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case study preview cards */}
        <div className="mt-10 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-5" style={{ color: "var(--accent)" }}>
            {c.casesEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudyPreviews.map((cs, i) => (
              <motion.a
                key={cs.slug}
                href={`${locale === "en" ? "/en/results" : "/resultat"}#${cs.slug}`}
                className="flex items-center gap-5 rounded-2xl p-5 group"
                style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold shrink-0"
                  style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  {cs.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-[#F4F4F5] truncate">{cs.client}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5 truncate">{cs.industry[locale]}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[13px] font-bold text-zinc-500 tabular-nums">{cs.before}</span>
                    <svg width="18" height="10" viewBox="0 0 28 16" fill="none" aria-hidden="true" className="shrink-0">
                      <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] font-bold text-[#F4F4F5] tabular-nums">{cs.after}</span>
                    <span className="text-[11px] text-zinc-500">{cs.label[locale]}</span>
                    <span className="text-[10px] font-mono ml-auto" style={{ color: "var(--accent)" }}>{cs.timeframe[locale]}</span>
                  </div>
                </div>

                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-zinc-600 group-hover:text-accent transition-colors duration-200">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}
          </div>
          <div className="mt-4 text-right">
            <a href={c.casesHref} className="text-[13px] font-mono" style={{ color: "var(--accent)" }}>
              {c.allCases}
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href={c.ctaHref} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200 group">
            {c.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
