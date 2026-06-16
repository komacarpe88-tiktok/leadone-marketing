"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowRight } from "@phosphor-icons/react";

const BOOKING_URL = "/boka";

const plans = [
  {
    id: "launchmap",
    name: "LaunchMap™",
    tagline: "GBP-optimering på 30 dagar",
    price: "5.999 kr",
    period: "engångsbetalning",
    badge: null,
    featured: false,
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
  },
  {
    id: "omdomes",
    name: "Omdömesmaskinen",
    tagline: "Request · Response · Repurpose",
    price: "1.499 kr",
    period: "/månad",
    badge: null,
    featured: false,
    features: [
      "Request: Automatiska SMS till kunder med direktlänk till Google-recension",
      "Response: Alla recensioner besvaras automatiskt — positivt och negativt",
      "Repurpose: Dina bästa recensioner publiceras automatiskt på hemsida & sociala medier",
    ],
    result: "3 recensioner → 34+ på 3 månader",
    cta: "Kom Igång",
  },
  {
    id: "komplett",
    name: "Komplett Paket",
    tagline: "LaunchMap™ + Omdömesmaskinen",
    price: "3.499 kr",
    period: "/månad",
    badge: "Bäst Värde",
    featured: true,
    features: [
      "Allt från LaunchMap™",
      "Allt från Omdömesmaskinen",
      "Ingen startkostnad — spara 5.999 kr",
      "Avsluta när du vill",
    ],
    result: "Synlighet + recensioner — spara 4.995 kr jämfört med separat",
    cta: "Kom Igång Nu",
  },
];

export default function PricingSection() {
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="py-24 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Investering
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Välj det som passar dig. Eller ta allt.
          </h2>
          <p className="mt-3 text-[15px] text-zinc-500">Utan startkostnad. Utan bindningstid.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
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
                      <Check size={13} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
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
                  href={BOOKING_URL}


                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-[14px] transition-all duration-200 active:scale-[0.98] ${
                    plan.featured
                      ? "bg-accent text-[#08080A] hover:bg-[#D4B87A]"
                      : "border text-zinc-300 hover:text-[#F4F4F5] hover:border-white/20"
                  }`}
                  style={plan.featured ? {} : { borderColor: "var(--border)" }}
                >
                  {plan.cta}
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
