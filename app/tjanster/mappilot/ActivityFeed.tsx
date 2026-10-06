"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FileText, Camera, ChatCircleText, Star, Question, EnvelopeSimple, Check } from "@phosphor-icons/react";

const rows = [
  { icon: FileText, label: "Nytt inlägg publicerat", time: "mån 08:00" },
  { icon: Camera, label: "6 bilder uppladdade och geotaggade", time: "tis 10:15" },
  { icon: EnvelopeSimple, label: "Recensionsförfrågan skickad till nya kunder", time: "ons 17:30" },
  { icon: Star, label: "3 nya recensioner besvarade", time: "tor 09:05" },
  { icon: Question, label: "Fråga & svar tillagd i profilen", time: "fre 11:40" },
  { icon: ChatCircleText, label: "Veckosammanfattning skickad till dig", time: "fre 16:00" },
];

/**
 * Hero visual: an app-notification-style card where six activity rows
 * appear one by one (~0.6s apart) with a check ticking on, then stays
 * static — not a loop. Reduced motion shows the finished state instantly.
 */
export default function ActivityFeed() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(reduce ? rows.length : 0);

  useEffect(() => {
    if (reduce) return;
    if (visible >= rows.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 600);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#0A0A0D",
        border: "1px solid rgba(201,168,76,0.18)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.06)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <p className="text-[13px] font-semibold text-[#F4F4F5]">MapPilot™ — denna vecka</p>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: "#4ade80", animation: "mp-pulse 2s cubic-bezier(0,0,0.2,1) infinite" }}
              />
            )}
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#4ade80" }} />
          </span>
          <span className="text-[11px] font-mono text-zinc-500">Aktiv</span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {rows.map((row, i) => {
          const Icon = row.icon;
          const shown = i < visible;
          const content = (
            <div
              className="flex items-center gap-3 px-5 py-3.5"
              style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-dim)" }}
              >
                <Icon size={14} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-zinc-200 leading-snug">{row.label}</p>
                <p className="text-[10.5px] text-zinc-600 font-mono mt-0.5">{row.time}</p>
              </div>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: shown ? "rgba(74,222,128,0.15)" : "transparent",
                  border: shown ? "none" : "1px solid var(--border)",
                }}
              >
                {shown && <Check size={11} weight="bold" style={{ color: "#4ade80" }} aria-hidden="true" />}
              </div>
            </div>
          );

          if (reduce) return <div key={row.label}>{content}</div>;

          return (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {content}
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @keyframes mp-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.8); }
        }
      `}</style>
    </div>
  );
}
