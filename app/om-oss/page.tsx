"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const BOOKING_URL = "/boka";

const principles = [
  {
    title: "Ärlighet Framför Allt",
    body: "Inga överdrivna löften. Inga falska fallstudier. Vi berättar vad vi kan leverera — och håller det.",
    image: "/assets/handshake.jpg",
  },
  {
    title: "Resultat, Inte Fluff",
    body: "Framgång mäts i profilvisningar, recensioner och bokningar. Inte i buzzwords och presentationer.",
    image: "/assets/gold-chart.jpg",
  },
  {
    title: "Ingen Bullshit",
    body: "Klarspråk. Direkt kommunikation. Du pratar med Douglas — inte med en 'account manager' som vidarebefordrar mejl.",
    image: "/assets/team.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OmOssPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#08080A]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
              {/* Left: Text */}
              <motion.div
                initial={reduce ? false : "hidden"}
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <p
                  className="text-[11px] uppercase tracking-[0.2em] font-mono mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  Varför LeadOne
                </p>
                <h1 className="text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F4F5] mb-6">
                  Jag startade LeadOne för att jag såg hur svenska småföretagare{" "}
                  <span className="text-accent">förlorade kunder varje dag</span>
                </h1>
                <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[44ch] mb-8">
                  Inte för att de var dåliga på sitt jobb — utan för att de inte syntes på Google.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BOOKING_URL}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200"
                  >
                    Boka Gratis Analys
                    <ArrowRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                  <a
                    href="tel:0764796630"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 text-zinc-300 font-medium text-[15px] hover:border-white/20 hover:text-white transition-all duration-200"
                  >
                    <Phone size={15} aria-hidden="true" />
                    076-479 66 30
                  </a>
                </div>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                className="relative"
                initial={reduce ? false : { opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/team.jpg"
                    alt="Douglas, grundare av LeadOne Marketing"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/40 via-transparent to-transparent" />
                </div>

                {/* Floating stat badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 p-4 max-w-[200px]"
                  style={{ background: "rgba(20,20,24,0.92)", backdropFilter: "blur(16px)" }}
                  initial={reduce ? false : { y: 0 }}
                  animate={reduce ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="font-mono text-[13px] font-medium text-accent leading-none mb-1">43+ företag</p>
                  <p className="text-[11px] text-zinc-500 leading-snug">rankar just nu</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Story ─────────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
              {/* Left: key quote */}
              <motion.div
                className="lg:sticky lg:top-28"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(4rem, 7vw, 6rem)",
                    color: "var(--accent)",
                    opacity: 0.2,
                    lineHeight: 0.8,
                    marginBottom: "0.4rem",
                  }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
                    lineHeight: 1.35,
                    color: "rgb(212 212 216)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  46% av alla Google-sökningar är lokala. Om du inte syns i topp 3 på Google Maps, existerar du inte
                  för nästan hälften av dina potentiella kunder.
                </p>
                <p className="mt-6 text-[14px] text-zinc-500">Douglas, grundare av LeadOne</p>

                {/* Small decorative image */}
                <div className="mt-10 relative rounded-xl overflow-hidden aspect-[16/9] opacity-50">
                  <Image
                    src="/assets/lm-globe.jpg"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-[#08080A]/40" />
                </div>
              </motion.div>

              {/* Right: story cards with images */}
              <div className="flex flex-col gap-6">
                <motion.div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src="/assets/building-ext.jpg"
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />
                  </div>
                  <div className="p-7" style={{ background: "var(--surface)" }}>
                    <h2 className="text-[1.3rem] font-bold text-[#F4F4F5] mb-3 tracking-tight">Hur Det Började</h2>
                    <p className="text-[15px] text-zinc-400 leading-relaxed">
                      Jag jobbade som frilansmarknadsförare och såg samma mönster om och om igen: bra företag som
                      förlorade kunder till sämre konkurrenter — bara för att konkurrenterna hade bättre Google-synlighet
                      och fler recensioner.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src="/assets/lm-strategy.png"
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />
                  </div>
                  <div className="p-7" style={{ background: "var(--surface)" }}>
                    <h2 className="text-[1.3rem] font-bold text-[#F4F4F5] mb-3 tracking-tight">
                      Från Frilans Till LeadOne
                    </h2>
                    <p className="text-[15px] text-zinc-400 leading-relaxed">
                      I slutet av 2025 startade jag LeadOne med fokus på det som faktiskt fungerar: optimerade Google
                      Business Profiles, kataloglistningar och automatiserade recensionssystem. Paketerade i tjänster som
                      ett litet företag faktiskt har råd med.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src="/assets/lm-growth.jpg"
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />
                  </div>
                  <div className="p-7" style={{ background: "var(--surface)" }}>
                    <h2 className="text-[1.3rem] font-bold text-[#F4F4F5] mb-3 tracking-tight">Varför "LeadOne"?</h2>
                    <p className="text-[15px] text-zinc-400 leading-relaxed">
                      En extra kund per dag. Det låter litet — men det är hundratusentals kronor om året för ett litet
                      företag. Det är vad rätt synlighet kan göra. Det är vad vi levererar.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Principles ────────────────────────────────────────────────── */}
        <section
          className="py-24 lg:py-32 border-b"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div
              className="mb-14"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                Våra Principer
              </p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Hur Vi Jobbar
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
                  style={{
                    border: i === 1 ? "1px solid rgba(201,168,76,0.3)" : "1px solid var(--border)",
                  }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                >
                  {/* Image section */}
                  <div className="relative h-[160px] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-[#08080A]/20" />
                    <div
                      className="absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] font-bold"
                      style={{
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      0{i + 1}
                    </div>
                  </div>

                  {/* Text section */}
                  <div className="p-7 flex-1" style={{ background: i === 1 ? "var(--surface-elevated)" : "#0F0F12" }}>
                    <h3 className="font-bold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-[14px] text-zinc-400 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--surface)" }}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/gold-particles.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#08080A]/80" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #08080A 100%)" }}
              aria-hidden="true"
            />
          </div>

          <motion.div
            className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
              Prata Med Douglas
            </p>
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Boka En <span className="text-accent">Kostnadsfri Genomgång</span>
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[36ch] mx-auto mb-8 leading-relaxed">
              15 minuter. Inga säljgrepp. Bara ärlig feedback om var du befinner dig och vad vi kan göra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200 group"
              >
                Boka 15 Min Genomgång
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
              <a
                href="tel:0764796630"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-zinc-300 font-medium text-[16px] hover:border-white/20 hover:text-white transition-all duration-200"
              >
                <Phone size={15} aria-hidden="true" />
                076-479 66 30
              </a>
            </div>
          </motion.div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
