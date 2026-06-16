"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin, Lightning, Phone } from "@phosphor-icons/react";

const points = [
  {
    icon: MapPin,
    title: "Lokal Expertis",
    body: "Vi jobbar bara med svenska företag. Vi förstår marknaden, språket och vad som fungerar här.",
  },
  {
    icon: Lightning,
    title: "Snabba Resultat",
    body: "LaunchMap™ levereras på 30 dagar. Omdömesmaskinen börjar samla recensioner direkt.",
  },
  {
    icon: Phone,
    title: "Support På Svenska",
    body: "Ring oss på 076-479 66 30. Vi svarar. På svenska. Inom 2 timmar vardagar.",
  },
];

export default function WhyUsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="om-oss" className="py-24 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <motion.div 
          className="mb-14"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Varför LeadOne
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Byggd för svenska småföretag
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}>
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title}
                className="p-8 lg:p-10 flex flex-col gap-5 group cursor-pointer"
                style={{
                  background: i === 1 ? "var(--surface-elevated)" : "var(--surface)",
                  borderRight: i < 2 ? "1px solid var(--border)" : undefined,
                }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <motion.div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center" 
                  style={{ background: "var(--accent-dim)" }}
                  initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                >
                  <Icon size={18} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[18px] text-[#F4F4F5] tracking-tight mb-2 transition-colors duration-200 group-hover:text-accent">{p.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
