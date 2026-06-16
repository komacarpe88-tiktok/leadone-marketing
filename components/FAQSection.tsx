"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "Hur lång tid tar det innan jag ser resultat?",
    a: "LaunchMap™ levereras på 30 dagar. Rankingförbättringar syns typiskt inom 60–90 dagar. Mediantid till förstasidan är 6 månader.",
  },
  {
    q: "Behöver jag binda upp mig långsiktigt?",
    a: "Nej. Omdömesmaskinen och Komplett Paket är månadsbaserade utan bindningstid. Avsluta när du vill.",
  },
  {
    q: "Fungerar det för alla branscher?",
    a: "Vi arbetar med hantverkare, restauranger, tandläkare, städföretag, fysioterapeuter och alla tjänsteföretag med lokal kundkrets.",
  },
  {
    q: "Vad skiljer er från andra SEO-byråer?",
    a: "Vi jobbar enbart med lokal SEO för svenska företag. Ingen generell digital marknadsföring. Bara det vi är bäst på.",
  },
  {
    q: "Vad händer med mina recensioner om jag avslutar?",
    a: "De recensioner du redan fått är dina för alltid. Vi äger ingenting — allt ligger på ditt Google-konto.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="py-24 lg:py-32 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Vanliga frågor
          </p>
          <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Frågor vi får varje dag
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[16px] font-medium leading-snug transition-colors duration-200 ${isOpen ? "text-[#F4F4F5]" : "text-zinc-300 group-hover:text-[#F4F4F5]"}`}>
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ background: isOpen ? "var(--accent-dim)" : "var(--surface-elevated)" }}>
                    {isOpen
                      ? <Minus size={13} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      : <Plus size={13} weight="bold" className="text-zinc-400" aria-hidden="true" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[14px] text-zinc-400 leading-relaxed max-w-[65ch]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
