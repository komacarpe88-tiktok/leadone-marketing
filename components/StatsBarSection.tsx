"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "46%",   label: "av alla Google-sökningar är lokala" },
  { value: "72%",   label: "väljer företaget med flest recensioner" },
  { value: "88%",   label: "av lokala sökningar leder till kontakt inom 24h" },
  { value: "+218%", label: "genomsnittlig ökning av profilvisningar" },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
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
    const increment = targetNumber / 30; // 30 frames for animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setDisplayValue(prefix + targetNumber + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(prefix + Math.floor(current) + suffix);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, [inView, value]);
  
  return <>{displayValue}</>;
}

export default function StatsBarSection() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-14 border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}>
          {stats.map((s, i) => (
            <motion.div key={s.value}
              className="px-6 py-8 flex flex-col gap-2"
              style={{ background: i % 2 === 0 ? "var(--surface-elevated)" : "#0F0F12", borderRight: i < 3 ? "1px solid var(--border)" : undefined }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span 
                className="font-mono text-[2rem] lg:text-[2.6rem] font-bold leading-none tracking-[-0.03em]"
                style={{ color: "var(--accent)" }}
                initial={reduce ? false : { scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatedCounter value={s.value} inView={inView} />
              </motion.span>
              <p className="text-[12px] text-zinc-500 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
