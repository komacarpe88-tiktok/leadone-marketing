"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    verb: "Analys",
    body: "Vi kartlägger dina nuvarande rankningar, konkurrenternas position och exakt vad som håller dig tillbaka. Du lämnar första samtalet med full klarhet.",
    image: "/assets/aerial_view.png",
    imageAlt: "Flygfoto över stad — kartläggning av lokal marknad",
  },
  {
    number: "02",
    verb: "Bygg",
    body: "Vi åtgärdar tekniska problem, bygger lokala citeringar, förtjänar relevanta länkar och skapar innehåll som rankar för sökningar dina kunder gör varje dag.",
    image: "/assets/perspective_view.png",
    imageAlt: "Perspektivvy — bygger lokal synlighet",
  },
  {
    number: "03",
    verb: "Ranka",
    body: "Ditt företag klättrar i resultaten. Vi spårar varje positionsförändring och rapporterar verkliga siffror: samtal, vägbeskrivningar och webbplatsbesök.",
    image: "/assets/top_down.png",
    imageAlt: "Toppvy — når förstasidan på Google",
  },
];

function StepCard({ step, index, reduce }: { step: typeof steps[0]; index: number; reduce: boolean | null }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than the card
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden"
      style={{ height: "clamp(280px, 80vw, 520px)" }}
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: reduce ? 0 : imageY }}
      >
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 1400px"
        />
      </motion.div>

      {/* Gradient overlay — stronger on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,10,0.92) 0%, rgba(8,8,10,0.65) 45%, rgba(8,8,10,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,10,0.3) 0%, transparent 40%, rgba(8,8,10,0.5) 100%)",
        }}
      />

      {/* Gold accent line on left edge */}
      <div
        className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full"
        style={{ background: "linear-gradient(to bottom, transparent, var(--accent), transparent)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 max-w-[600px]">
        <motion.span
          className="font-mono text-[11px] uppercase tracking-[0.25em] mb-4 block"
          style={{ color: "var(--accent)" }}
          initial={reduce ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.number}
        </motion.span>

        <motion.h3
          className="font-bold tracking-[-0.03em] text-[#F4F4F5] leading-none mb-5"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.verb}
        </motion.h3>

        <motion.p
          className="text-[15px] lg:text-[16px] text-zinc-300 leading-relaxed max-w-[38ch]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.22 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {step.body}
        </motion.p>
      </div>

      {/* Subtle gold shimmer on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Så arbetar vi
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Tre steg till förstasidan
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.verb} step={step} index={i} reduce={reduce} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="/boka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200">
            Starta Med Steg 1 — Boka Analys
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
