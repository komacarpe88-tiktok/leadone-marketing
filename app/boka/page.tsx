"use client";

import Script from "next/script";
import Image from "next/image";
import { Check, Phone, Star } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import BookingNav from "@/components/BookingNav";

const PHONE = "076-479 66 30";

const callPoints = [
  "Exakt var du rankar idag — och var dina konkurrenter befinner sig",
  "Vilka sökord som driver kunder i din bransch och stad",
  "Vad som krävs för att nå topp 3 på Google Maps",
  "En konkret plan du kan börja med direkt — oavsett om du väljer oss",
];

export default function BokaPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <BookingNav />

      <main className="min-h-screen bg-[#08080A] pt-[72px]">
        {/* ── Hero area ───────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-24 overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
          {/* Enhanced background */}
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
              style={{ background: "linear-gradient(to bottom, #08080A 0%, transparent 30%, transparent 70%, #08080A 100%)" }}
            />
            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
          </div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
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
                    Kostnadsfritt · Utan förpliktelse
                  </p>
                  <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-[1.1]">
                    Boka ditt gratis
                    <br />
                    <span className="text-accent">analyssamtal</span>
                  </h1>
                  <p className="mt-4 text-[16px] text-zinc-400 leading-relaxed max-w-[42ch]">
                    15 minuter. Inga säljgrepp. Bara ärlig feedback om var du befinner dig — och vad som krävs för att
                    synas på Google.
                  </p>
                </motion.div>

                {/* What you get */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-[12px] uppercase tracking-[0.18em] font-mono mb-4 text-zinc-500">
                    Det här går vi igenom
                  </p>
                  <ul className="flex flex-col gap-3">
                    {callPoints.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-2.5 text-[14px] text-zinc-300 leading-snug"
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
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

                {/* Social proof with floating animation */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex -space-x-2">
                    {["ML", "SB", "AH", "KV"].map((init, i) => (
                      <motion.div
                        key={init}
                        className="w-9 h-9 rounded-full border-2 border-[#08080A] flex items-center justify-center text-[10px] font-semibold"
                        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                        initial={reduce ? false : { scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {init}
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={11} weight="fill" className="text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-[12px] text-zinc-500">43+ nöjda kunder i Sverige</p>
                  </div>
                </motion.div>

                {/* Live booking indicator */}
                <motion.div
                  className="rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <p className="text-[12px] text-zinc-400">
                    <span className="font-semibold text-accent">3 personer</span> bokade idag
                  </p>
                </motion.div>

                {/* Decorative image */}
                <motion.div
                  className="relative rounded-xl overflow-hidden aspect-[16/9] opacity-50"
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Image src="/assets/lm-strategy.png" alt="" fill className="object-cover object-center" sizes="400px" />
                  <div className="absolute inset-0 bg-[#08080A]/50" />
                </motion.div>

                {/* Phone fallback */}
                <motion.a
                  href="tel:0764796630"
                  className="flex items-center gap-2 text-[14px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Phone size={14} aria-hidden="true" />
                  Hellre ringa? {PHONE}
                </motion.a>
              </div>

              {/* ── Right: booking calendar ──────────────────────── */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "0 25px 70px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.12)",
                }}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="bg-[#0A0A0C] px-6 py-4 border-b flex items-center gap-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Image src="/assets/logo.png" alt="LeadOne" height={36} width={36} className="object-contain" />
                  <div>
                    <p className="text-[13px] font-semibold text-[#F4F4F5]">Gratis Analyssamtal</p>
                    <p className="text-[11px] text-zinc-500">15 min · Google Meet</p>
                  </div>
                </div>

                <div className="bg-white">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/tLul2UjJ4lCOYMicz8eX"
                    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px", display: "block" }}
                    id="tLul2UjJ4lCOYMicz8eX_1780256383792"
                    title="Boka analyssamtal"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>

      {/* Calendar embed script */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
