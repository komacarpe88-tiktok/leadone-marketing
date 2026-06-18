"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import type { Metadata } from "next";

const BOOKING_URL = "/en/book";

const principles = [
  {
    title: "Honesty Above All",
    body: "No exaggerated promises. No fake case studies. We tell you what we can deliver — and we deliver it.",
  },
  {
    title: "Results That Are Verifiable",
    body: "Every improvement we make can be verified in Google Search Console and Google Business Profile. No black box.",
  },
  {
    title: "Systems, Not Projects",
    body: "We build lasting systems for local visibility. Not one-off fixes that need to be redone every six months.",
  },
];

export default function AboutPageEn() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        {/* Hero */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>About LeadOne</p>
              <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] max-w-[16ch]">
                We exist to give local businesses a fair shot on Google
              </h1>
              <p className="mt-6 text-[17px] text-zinc-400 leading-relaxed max-w-[52ch]">
                LeadOne Marketing is a local SEO agency based in Helsingborg, Sweden. We help Swedish businesses rank in the top 3 on Google Maps — with systems that work and results you can verify yourself.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-10" style={{ color: "var(--accent)" }}>Our principles</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest mb-3">0{i + 1}</p>
                  <h3 className="text-[1.1rem] font-semibold text-[#F4F4F5] mb-2">{p.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-[1.8rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-3">Ready to get started?</h2>
              <p className="text-[16px] text-zinc-400 max-w-[44ch]">Book a free 15-minute analysis call and find out where you rank today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={BOOKING_URL}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200"
              >
                Book free analysis
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
              <a
                href="tel:0764796630"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
                style={{ border: "1px solid var(--border)" }}
              >
                <Phone size={14} aria-hidden="true" />
                076-479 66 30
              </a>
            </div>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
    </>
  );
}
