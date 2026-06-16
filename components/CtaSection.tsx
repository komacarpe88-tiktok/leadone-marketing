"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Phone } from "@phosphor-icons/react";

const BOOKING_URL = "/boka";

export default function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute inset-0 z-0">
        <Image src="/assets/gold-particles.jpg" alt="" fill className="object-cover object-center opacity-30" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#08080A]/75" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #08080A 100%)" }} aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7"
        >
          <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.08] max-w-[18ch] mx-auto">
            Varje dag du inte syns =
            <br />
            <span className="text-accent">pengar till konkurrenten</span>
          </h2>

          <p className="text-[15px] text-zinc-400 max-w-[44ch] leading-relaxed">
            Skillnaden mellan sida 1 och sida 2 är hundratals förlorade besökare.
            Skillnaden mellan dig och topp 3 är dubbelt så många bokningar.
            15 minuters samtal för att se hur du ligger till — och vad vi kan göra åt det.
          </p>

          <a
            href={BOOKING_URL}


            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200 group"
          >
            Boka Ditt Kostnadsfria Samtal Nu
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>

          <a
            href="tel:0764796630"
            className="flex items-center gap-2 text-[14px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            <Phone size={14} aria-hidden="true" />
            Eller ring direkt: 076-479 66 30
          </a>
        </motion.div>
      </div>
    </section>
  );
}
