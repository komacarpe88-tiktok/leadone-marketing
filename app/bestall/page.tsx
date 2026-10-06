"use client";

import Script from "next/script";
import Image from "next/image";
import { Check, Phone, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import Nav from "@/components/Nav";

const PHONE = "+46 763 91 21 81";

const included = [
  "Full LaunchMap™-optimering av din Google Business Profile",
  "Omdömesmaskinen — automatiska recensionsförfrågningar via SMS",
  "Lokal citationsstrategi för din stad",
  "Månadsrapport med rankingdata och geo-grid",
  "Ingen startkostnad · Ingen bindningstid",
];

const trustPoints = [
  { label: "43+", sub: "nöjda kunder" },
  { label: "5,0★", sub: "genomsnittligt betyg" },
  { label: "90 dgr", sub: "median till topp 3" },
];

export default function BestallPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main className="min-h-screen bg-[#08080A] pt-[72px]">
        {/* ── Hero / form area ─────────────────────────────────────── */}
        <section
          className="relative py-16 lg:py-24 overflow-hidden border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/gold-particles.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-15"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#08080A]/85" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #08080A 0%, transparent 30%, transparent 70%, #08080A 100%)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
              {/* ── Left: value prop ─────────────────────────────── */}
              <div className="flex flex-col gap-7 lg:sticky lg:top-28">
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    MapPilot™ · 3 999 kr/mån
                  </p>
                  <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-[1.1]">
                    Mer samtal.
                    <br />
                    <span style={{ color: "var(--accent)" }}>Fler kunder.</span>
                    <br />
                    Google Maps.
                  </h1>
                  <p className="mt-4 text-[16px] text-zinc-400 leading-relaxed max-w-[42ch]">
                    Fyll i formuläret nedan så kontaktar vi dig inom 24 timmar för att
                    bekräfta din beställning och sätta igång.
                  </p>
                </motion.div>

                {/* What's included */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-[12px] uppercase tracking-[0.18em] font-mono mb-4 text-zinc-500">
                    Ingår i paketet
                  </p>
                  <ul className="flex flex-col gap-3">
                    {included.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-2.5 text-[14px] text-zinc-300 leading-snug"
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.09 }}
                      >
                        <Check
                          size={13}
                          weight="bold"
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--accent)" }}
                          aria-hidden="true"
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Trust stats */}
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  {trustPoints.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-xl px-3 py-4 text-center"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <p
                        className="text-[1.4rem] font-bold font-mono tracking-[-0.03em] leading-none"
                        style={{ color: "var(--accent)" }}
                      >
                        {t.label}
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-1 font-mono">{t.sub}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Security badge */}
                <motion.div
                  className="rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <ShieldCheck
                    size={18}
                    style={{ color: "var(--accent)" }}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-[12px] text-zinc-400">
                    Ingen bindningstid — avsluta när du vill. Pengarna tillbaka om vi inte
                    håller vad vi lovar.
                  </p>
                </motion.div>

                {/* CTA link to results */}
                <motion.a
                  href="/resultat"
                  className="group flex items-center gap-2 text-[13px] font-mono tracking-wide"
                  style={{ color: "var(--accent)" }}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  Se kundresultat
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </motion.a>

                {/* Phone fallback */}
                <motion.a
                  href="tel:+46763912181"
                  className="flex items-center gap-2 text-[14px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Phone size={14} aria-hidden="true" />
                  Hellre ringa? {PHONE}
                </motion.a>
              </div>

              {/* ── Right: order form ────────────────────────────── */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow:
                    "0 25px 70px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.12)",
                }}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Form header */}
                <div
                  className="bg-[#0A0A0C] px-6 py-4 border-b flex items-center gap-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Image
                    src="/assets/logo.webp"
                    alt="LeadOne"
                    height={36}
                    width={36}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-[#F4F4F5]">
                      Beställ MapPilot™
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Fyll i formuläret — vi kontaktar dig inom 24 h
                    </p>
                  </div>
                </div>

                {/* Embedded order form */}
                <div className="bg-white">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/1adYk9gD054srNUc3TwR"
                    style={{
                      width: "100%",
                      height: "1667px",
                      border: "none",
                      borderRadius: "0 0 16px 16px",
                      display: "block",
                    }}
                    id="inline-1adYk9gD054srNUc3TwR"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="More calls. More customers. Google Maps Form."
                    data-height="1667"
                    data-layout-iframe-id="inline-1adYk9gD054srNUc3TwR"
                    data-form-id="1adYk9gD054srNUc3TwR"
                    title="More calls. More customers. Google Maps Form."
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection locale="sv" />
      </main>

      {/* Form embed script */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
