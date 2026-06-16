"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroStatic() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden bg-[#08080A]"
      style={{ height: "100svh" }}
      aria-label="Hero"
    >
      {/* LCP image — loads immediately, priority */}
      <Image
        src="/assets/hero-bg.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.60) 60%,#08080A 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center z-10">
        <motion.p
          className="text-[11px] uppercase tracking-[0.22em] font-mono"
          style={{ color: "var(--accent)" }}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Lokal SEO &amp; Google Maps-optimering
        </motion.p>

        <motion.p
          className="font-cormorant text-white"
          style={{
            fontSize:      "clamp(2rem, 6vw, 3.6rem)",
            fontWeight:    300,
            fontStyle:     "italic",
            lineHeight:    1.2,
            letterSpacing: "-0.01em",
            maxWidth:      "22ch",
            textShadow:    "0 2px 28px rgba(0,0,0,0.8)",
          }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Vi tar dig in i Local Pack — topp 3 på Google Maps
        </motion.p>

        <motion.p
          className="font-cormorant text-white/60"
          style={{
            fontSize:   "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: 300,
            fontStyle:  "italic",
            maxWidth:   "36ch",
            textShadow: "0 1px 16px rgba(0,0,0,0.9)",
          }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Fler recensioner. Fler samtal. Mer omsättning.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <Link
            href="/boka"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200"
          >
            Boka gratis analys
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none z-10"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-zinc-400">
          Scrolla
        </span>
        <motion.div
          className="w-px h-8 bg-zinc-500 origin-top"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #08080A 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
