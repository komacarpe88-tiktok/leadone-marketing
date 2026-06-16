"use client";

import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { useRef } from "react";

const BOOKING_URL = "/boka";


// Each word lights up from dim to bright as it scrolls into the viewport center
function ScrollWord({ word, progress, start, end, accent = false }: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accent?: boolean;
}) {
  const color = useTransform(
    progress,
    [start, end],
    accent
      ? ["rgba(201,168,76,0.25)", "rgba(201,168,76,1)"]
      : ["rgba(244,244,245,0.2)", "rgba(244,244,245,1)"]
  );
  return (
    <motion.span style={{ color }} className="inline-block whitespace-pre">
      {word}
    </motion.span>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "start 0.1"],
  });

  // Words in order: "Din " "nästa " "kund " "\n" "söker " "i " "din " "stad."
  // Each word gets an equal slice of the 0–1 progress range
  const words = [
    { text: "Din ",   accent: false },
    { text: "nästa ", accent: false },
    { text: "kund ",  accent: false },
    { text: "söker ", accent: false },
    { text: "i ",     accent: false },
    { text: "din ",   accent: true  },
    { text: "stad.",  accent: true  },
  ];
  const step = 1 / words.length;

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center pt-[72px]" style={{ marginTop: "-150px" }} aria-label="Hero">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-8">
            <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.025em]">
              {reduce ? (
                <>
                  Din nästa kund<br />söker i <span className="text-accent">din stad.</span>
                </>
              ) : (
                <span className="flex flex-wrap">
                  {words.map((w, i) => (
                    <>
                      {i === 3 && <br key="br" />}
                      <ScrollWord
                        key={i}
                        word={w.text}
                        progress={scrollYProgress}
                        start={i * step}
                        end={(i + 1) * step}
                        accent={w.accent}
                      />
                    </>
                  ))}
                </span>
              )}
            </h1>

            <motion.p
              className="text-[17px] text-zinc-400 leading-relaxed max-w-[44ch]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Vi ser till att din nästa kund hittar dig — inte konkurrenten.
              Lokal SEO som genererar samtal, besök och omsättning.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={BOOKING_URL}


                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200"
              >
                Boka Gratis Analys
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <a
                href="#results"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 text-zinc-300 font-medium text-[15px] hover:border-white/20 hover:text-[#F4F4F5] active:scale-[0.98] transition-all duration-200"
              >
                Se Resultat
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* <!-- HERO HEADER IMAGE GOES HERE --> */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/2.8]">
              <Image
                src="/assets/ai-network.png"
                alt="Guldnätverk — lokal sökningstäckning visualiserad"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/30 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-5 -left-5 z-10 rounded-2xl border border-white/10 p-4 flex items-start gap-3 max-w-[230px]"
              style={{ background: "rgba(20,20,24,0.92)", backdropFilter: "blur(16px)" }}
              initial={reduce ? false : { y: 0 }}
              animate={reduce ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--accent-dim)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 10L7 3.5L12 10" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="3.5" r="1.2" fill="#C9A84C"/>
                </svg>
              </div>
              <div>
                <p className="font-mono text-[13px] font-medium text-accent leading-none mb-1">+218% visningar</p>
                <p className="text-[11px] text-zinc-500 leading-snug">Lindqvist Elektriker, 5 månader</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
