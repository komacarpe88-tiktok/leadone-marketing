"use client";

import { motion, useReducedMotion } from "motion/react";

const CLIENTS = [
  { id: "le", name: "Lindqvist Elektriker",    init: "LE" },
  { id: "cp", name: "Café Piran",              init: "CP" },
  { id: "vt", name: "Vestergaard Tandläkare",  init: "VT" },
  { id: "os", name: "Öresund Städservice",     init: "ÖS" },
  { id: "hf", name: "Aktiv Fysioterapi", init: "AF" },
  { id: "nk", name: "Nordiskt Kök",            init: "NK" },
  { id: "sb", name: "Sundström Bygg",          init: "SB" },
  { id: "ar", name: "Åkelius Redovisning",     init: "ÅR" },
];

// Row 2 starts mid-list so the two rows look visually different
const CLIENTS_R2 = [...CLIENTS.slice(4), ...CLIENTS.slice(0, 4)];

// Edge-fade mask applied to each row wrapper
const MASK: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
};

function Item({ name, init }: { name: string; init: string }) {
  return (
    <>
      <div className="flex items-center gap-3.5 shrink-0 group cursor-default select-none">
        {/* Circular monogram */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0
                     border border-accent/20 text-accent/40
                     group-hover:border-accent/60 group-hover:text-accent/80
                     transition-all duration-300"
          style={{
            fontSize: "10.5px",
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            letterSpacing: "0.06em",
          }}
          aria-hidden="true"
        >
          {init}
        </div>

        {/* Company name in Cormorant italic */}
        <span
          className="whitespace-nowrap text-zinc-400/60 group-hover:text-zinc-200
                     transition-colors duration-300"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "19px",
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </span>
      </div>

      {/* Gold diamond separator */}
      <span
        className="shrink-0 mx-3 text-accent/20 select-none"
        style={{ fontSize: "7px" }}
        aria-hidden="true"
      >
        ◆
      </span>
    </>
  );
}

export default function TrustedBySection() {
  const reduce = useReducedMotion();
  const d1 = [...CLIENTS, ...CLIENTS];
  const d2 = [...CLIENTS_R2, ...CLIENTS_R2];

  return (
    <section
      className="py-14 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.025) 0%, transparent 65%)",
      }}
    >
      {/* Centered label with gradient hairlines */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10 flex items-center gap-5"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.2))",
          }}
        />
        <p className="text-[11px] text-zinc-600 tracking-[0.26em] uppercase font-mono whitespace-nowrap shrink-0">
          Betrodd av svenska företag i hela landet
        </p>
        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(201,168,76,0.2))",
          }}
        />
      </motion.div>

      {/* Row 1 — left to right */}
      <div style={MASK} className="overflow-hidden">
        <div
          className="flex items-center animate-marquee w-max py-1.5"
          style={{ animationDuration: "34s" }}
          aria-hidden="true"
        >
          {d1.map((c, i) => (
            <Item key={`r1-${c.id}-${i}`} name={c.name} init={c.init} />
          ))}
        </div>
      </div>

      <div className="h-3" />

      {/* Row 2 — right to left, different speed */}
      <div style={MASK} className="overflow-hidden">
        <div
          className="flex items-center animate-marquee w-max py-1.5"
          style={{ animationDuration: "46s", animationDirection: "reverse" }}
          aria-hidden="true"
        >
          {d2.map((c, i) => (
            <Item key={`r2-${c.id}-${i}`} name={c.name} init={c.init} />
          ))}
        </div>
      </div>

      {/* Accessible list */}
      <ul className="sr-only">
        {CLIENTS.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </section>
  );
}
