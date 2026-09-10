"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/i18n";

const copy = {
  sv: {
    eyebrow: "Investering",
    heading: "Välj det som passar dig. Eller ta allt.",
    sub: "Utan startkostnad. Utan bindningstid.",
    badge: "Bäst Värde",
    booking: "/boka",
    plans: [
      {
        id: "launchmap",
        name: "LaunchMap™",
        tagline: "GBP-optimering på 30 dagar",
        price: "5.999 kr",
        period: "engångsbetalning",
        features: [
          "Komplett Google Business Profile-optimering från grunden",
          "Rätt kategorier, tjänster, beskrivningar, bilder och sökord",
          "50+ kataloglistningar — Perplexity, ChatGPT, Claude, Bing, Apple Maps, Gula Sidorna",
          "Hemsida-koppling för starkare lokal närvaro",
          "Sökordsanalys för ditt område",
          "Heatmap-rankingkarta som visar exakt hur du ligger till",
        ],
        result: "Osynlig → Local Pack (topp 3 på Maps)",
        cta: "Kom Igång",
        badge: null, featured: false,
      },
      {
        id: "omdomes",
        name: "Omdömesmaskinen",
        tagline: "Request · Response · Repurpose",
        price: "1.699 kr",
        period: "/månad",
        features: [
          "Request: Automatiska SMS till kunder med direktlänk till Google-recension",
          "Response: Alla recensioner besvaras automatiskt — positivt och negativt",
          "Repurpose: Dina bästa recensioner publiceras automatiskt på hemsida & sociala medier",
        ],
        result: "3 recensioner → 34+ på 3 månader",
        cta: "Kom Igång",
        badge: null, featured: false,
      },
      {
        id: "komplett",
        name: "Komplett Paket",
        tagline: "LaunchMap™ + Omdömesmaskinen",
        price: "3.499 kr",
        period: "/månad",
        features: [
          "Allt från LaunchMap™",
          "Allt från Omdömesmaskinen",
          "Ingen startkostnad — spara 5.999 kr",
          "Avsluta när du vill",
        ],
        result: "Synlighet + recensioner — spara 4.995 kr jämfört med separat",
        cta: "Kom Igång Nu",
        badge: "Bäst Värde", featured: true,
      },
    ],
  },
  en: {
    eyebrow: "Pricing",
    heading: "Choose what fits. Or take everything.",
    sub: "No setup fee. No lock-in.",
    badge: "Best Value",
    booking: "/en/book",
    plans: [
      {
        id: "launchmap",
        name: "LaunchMap™",
        tagline: "GBP optimisation in 30 days",
        price: "5.999 kr",
        period: "one-time payment",
        features: [
          "Complete Google Business Profile optimisation from scratch",
          "Correct categories, services, descriptions, images and keywords",
          "50+ directory listings — Perplexity, ChatGPT, Claude, Bing, Apple Maps, Yellow Pages",
          "Website link for stronger local presence",
          "Keyword analysis for your area",
          "Heatmap ranking map showing exactly where you stand",
        ],
        result: "Invisible → Local Pack (top 3 on Maps)",
        cta: "Get Started",
        badge: null, featured: false,
      },
      {
        id: "omdomes",
        name: "Review Machine",
        tagline: "Request · Response · Repurpose",
        price: "1.699 kr",
        period: "/month",
        features: [
          "Request: Automated SMS to customers with direct link to Google review",
          "Response: All reviews answered automatically — positive and negative",
          "Repurpose: Your best reviews published automatically on your website & social media",
        ],
        result: "3 reviews → 34+ in 3 months",
        cta: "Get Started",
        badge: null, featured: false,
      },
      {
        id: "komplett",
        name: "Complete Package",
        tagline: "LaunchMap™ + Review Machine",
        price: "3.499 kr",
        period: "/month",
        features: [
          "Everything from LaunchMap™",
          "Everything from Review Machine",
          "No setup fee — save 5.999 kr",
          "Cancel anytime",
        ],
        result: "Visibility + reviews — save 4.995 kr vs separate",
        cta: "Get Started Now",
        badge: "Best Value", featured: true,
      },
    ],
  },
};

export default function PricingSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const c = copy[locale];

  return (
    <section id="pricing" className="py-24 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            {c.eyebrow}
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            {c.heading}
          </h2>
          <p className="mt-3 text-[15px] text-zinc-500">{c.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {c.plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`rounded-2xl flex flex-col ${plan.featured ? "md:scale-[1.03] md:-translate-y-2" : ""}`}
              style={{
                background: plan.featured ? "var(--surface-elevated)" : "var(--surface)",
                border: plan.featured ? "1px solid rgba(201,168,76,0.45)" : "1px solid var(--border)",
              }}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: plan.featured ? -10 : -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Header */}
              <div className="p-7 pb-0">
                {plan.badge && (
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-bold text-[19px] text-[#F4F4F5] tracking-tight mb-1">{plan.name}</h3>
                <p className="text-[13px] text-zinc-500 mb-5">{plan.tagline}</p>

                <div className="pb-5 border-b" style={{ borderColor: "var(--border)" }}>
                  <span className="font-mono text-[2.2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>
                    {plan.price}
                  </span>
                  <span className="text-[13px] text-zinc-500 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-7 flex-1">
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-zinc-400 leading-snug">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true"><polyline points="2,7 5,10 11,3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result + CTA */}
              <div className="p-7 pt-0 flex flex-col gap-4">
                <div className="rounded-xl px-4 py-3" style={{ background: plan.featured ? "rgba(201,168,76,0.08)" : "#0A0A0C", border: "1px solid var(--border)" }}>
                  <p className="text-[12px] font-medium leading-snug" style={{ color: "var(--accent)" }}>
                    {plan.result}
                  </p>
                </div>

                <a
                  href={c.booking}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-[14px] transition-all duration-200 active:scale-[0.98] ${
                    plan.featured
                      ? "bg-accent text-[#08080A] hover:bg-[#D4B87A]"
                      : "border text-zinc-300 hover:text-[#F4F4F5] hover:border-white/20"
                  }`}
                  style={plan.featured ? {} : { borderColor: "var(--border)" }}
                >
                  {plan.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><line x1="2" y1="6.5" x2="11" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polyline points="7,3 11,6.5 7,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
