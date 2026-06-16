"use client";

import { motion, useReducedMotion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "3x",    label: "Genomsnittlig ökning av Google Maps-synlighet", note: "Bland aktiva kunder, de första 6 månaderna" },
  { value: "43+",   label: "Företag rankar just nu",                        note: "Inom konkurrensutsatta lokala sökkategorier" },
  { value: "6 mån", label: "Mediantid till förstasidan",                    note: "På primära lokala sökord" },
];

function AnimatedStatValue({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    if (!inView) return;
    
    // Check if value contains a number
    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const targetNumber = parseInt(match[1]);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring((match.index || 0) + match[1].length);
    
    let current = 0;
    const increment = targetNumber / 40; // 40 frames for smoother animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setDisplayValue(prefix + targetNumber + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(prefix + Math.floor(current) + suffix);
      }
    }, 25);
    
    return () => clearInterval(timer);
  }, [inView, value]);
  
  return <>{displayValue}</>;
}

export default function ResultsSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Parallax effect for background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax disabled on mobile — too heavy on low-end devices
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => { setIsDesktop(window.innerWidth >= 768); }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.15]);

  return (
    <section id="results" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>

      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: reduce || !isDesktop ? 0 : y, opacity: reduce ? 0.2 : opacity }}
          className="w-full h-full"
        >
          <Image src="/assets/marble-rays.png" alt="" fill loading="lazy" className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--surface) 0%, transparent 25%, transparent 75%, var(--surface) 100%)" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div 
          className="mb-16"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Bevisade resultat
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Siffror från verkligt arbete,
            <br />
            inte fiktiva fallstudier.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-px"
          style={{ border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}>
          {stats.map((stat, i) => (
            <motion.div key={stat.value}
              className="p-8 lg:p-10 flex flex-col justify-between"
              style={{ background: i === 0 ? "#0F0F12" : "var(--surface-elevated)", borderRight: i < 2 ? "1px solid var(--border)" : undefined }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span 
                className="font-mono text-[3.6rem] lg:text-[4.4rem] font-bold leading-none tracking-[-0.04em] mb-4 block" 
                style={{ color: "var(--accent)" }}
                initial={reduce ? false : { scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatedStatValue value={stat.value} inView={inView} />
              </motion.span>
              <div>
                <p className="text-[15px] font-medium text-[#F4F4F5] mb-1 leading-snug">{stat.label}</p>
                <p className="text-[12px] text-zinc-600">{stat.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <a href="/boka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200">
            Få Samma Resultat — Boka Gratis Analys
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
