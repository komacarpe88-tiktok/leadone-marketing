"use client";

import Script from "next/script";
import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { Phone, EnvelopeSimple, Clock, MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tLul2UjJ4lCOYMicz8eX";

export default function KontaktPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">
        
        {/* ── Hero with Image ──────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-24 overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/handshake.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-15"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#08080A]/80" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, #08080A 0%, transparent 25%, transparent 75%, #08080A 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Kontakt
            </p>
            <h1 className="text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F4F5] mb-5">
              Kontakta <span className="text-accent">LeadOne</span>
            </h1>
            <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[48ch] mx-auto">
              Inga säljare. Inga account managers. Du pratar direkt med Douglas. Svar inom 2 timmar på vardagar.
            </p>

            {/* Availability indicator */}
            <motion.div
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full"
              style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}
              initial={reduce ? false : { scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[13px] text-green-400 font-medium">Tillgänglig just nu</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Main Content ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

              {/* Left: contact info */}
              <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                
                {/* Contact methods */}
                <div className="flex flex-col gap-3">
                  <motion.a
                    href="tel:0764796630"
                    className="flex items-center gap-4 rounded-2xl p-5 cursor-pointer group"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)", transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-dim)" }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <Phone size={19} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </motion.div>
                    <div>
                      <p className="text-[13px] text-zinc-500 mb-0.5">Telefon</p>
                      <p className="text-[16px] font-semibold text-[#F4F4F5] group-hover:text-accent transition-colors duration-200">
                        076-479 66 30
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:info@leadone.online"
                    className="flex items-center gap-4 rounded-2xl p-5 cursor-pointer group"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.3)", transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--accent-dim)" }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <EnvelopeSimple size={19} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </motion.div>
                    <div>
                      <p className="text-[13px] text-zinc-500 mb-0.5">E-post</p>
                      <p className="text-[16px] font-semibold text-[#F4F4F5] group-hover:text-accent transition-colors duration-200">
                        info@leadone.online
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 rounded-2xl p-5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                      <Clock size={19} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[13px] text-zinc-500 mb-0.5">Svarstid</p>
                      <p className="text-[15px] font-semibold text-[#F4F4F5]">Inom 2 timmar, mån–fre 09:00–18:00</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 rounded-2xl p-5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                      <MapPin size={19} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[13px] text-zinc-500 mb-0.5">Service</p>
                      <p className="text-[15px] font-semibold text-[#F4F4F5]">Hela Sverige</p>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden aspect-[16/9] opacity-60"
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Image
                    src="/assets/team.jpg"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-[#08080A]/40" />
                </motion.div>

                {/* Services quick links */}
                <motion.div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface)", border: "1px solid rgba(201,168,76,0.2)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-[12px] uppercase tracking-[0.18em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                    Våra Tjänster
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "LaunchMap™", desc: "5.999 kr — engångsbetalning", href: "/tjanster/launchmap" },
                      { name: "Omdömesmaskinen", desc: "1.499 kr/mån", href: "/tjanster/omdomes" },
                      { name: "Komplett Paket", desc: "3.499 kr/mån — bäst värde", href: "/tjanster/komplett" },
                    ].map((s, i) => (
                      <motion.a
                        key={s.name}
                        href={s.href}
                        className="flex items-center justify-between py-2.5 border-b last:border-0 hover:text-[#F4F4F5] transition-colors duration-150"
                        style={{ borderColor: "var(--border)" }}
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                      >
                        <span className="text-[13px] font-medium text-zinc-300">{s.name}</span>
                        <span className="text-[12px] text-zinc-600">{s.desc}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: booking calendar */}
              <motion.div
                className="rounded-2xl overflow-hidden"
                style={{ 
                  border: "1px solid var(--border)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.1)"
                }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-[#0A0A0C] px-6 py-4 border-b flex items-center gap-3" style={{ borderColor: "var(--border)" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-dim)" }}>
                    <Phone size={13} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#F4F4F5]">Boka Gratis Analyssamtal</p>
                    <p className="text-[11px] text-zinc-500">15 min · Direkt med Douglas</p>
                  </div>
                </div>
                <div className="bg-white">
                  <iframe
                    src={BOOKING_URL}
                    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px", display: "block" }}
                    id="tLul2UjJ4lCOYMicz8eX_kontakt"
                    title="Boka samtal med LeadOne"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
