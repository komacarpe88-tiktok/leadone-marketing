"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FileText, Camera, ChatCircleText, Star, Question, EnvelopeSimple, Check } from "@phosphor-icons/react";

// Each row gets its own icon tint so categories are scannable at a glance,
// instead of one flat gold box repeated six times. Still inside the site's
// gold/green palette — no new hues introduced.
const rows = [
  { icon: FileText, label: "New post published", time: "Mon 08:00", tint: "rgba(201,168,76,0.16)", iconColor: "var(--accent)" },
  { icon: Camera, label: "6 photos uploaded and geotagged", time: "Tue 10:15", tint: "rgba(201,168,76,0.16)", iconColor: "var(--accent)" },
  { icon: EnvelopeSimple, label: "Review requests sent to new customers", time: "Wed 17:30", tint: "rgba(96,165,250,0.14)", iconColor: "#93c5fd" },
  { icon: Star, label: "3 new reviews answered", time: "Thu 09:05", tint: "rgba(250,204,21,0.14)", iconColor: "#fde047" },
  { icon: Question, label: "Q&A added to your profile", time: "Fri 11:40", tint: "rgba(96,165,250,0.14)", iconColor: "#93c5fd" },
  { icon: ChatCircleText, label: "Weekly summary sent to you", time: "Fri 16:00", tint: "rgba(74,222,128,0.14)", iconColor: "#4ade80" },
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
        border: "1px solid rgba(201,168,76,0.22)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <p className="text-[14px] font-semibold text-[#F4F4F5] tracking-tight">MapPilot™ — this week</p>
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
          <span className="text-[11px] font-mono font-semibold text-zinc-400">Active</span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {rows.map((row, i) => {
          const Icon = row.icon;
          const shown = i < visible;
          const content = (
            <div
              className="group/row flex items-center gap-3.5 pl-[18px] pr-5 py-4 transition-colors duration-200 ease-out hover:bg-[rgba(201,168,76,0.05)]"
              style={{
                borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                borderLeft: "2px solid transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = "transparent")}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover/row:scale-110"
                style={{ background: row.tint }}
              >
                <Icon size={16} weight="fill" style={{ color: row.iconColor }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14.5px] font-medium text-[#F4F4F5] leading-snug">{row.label}</p>
                <p className="text-[11px] text-zinc-500 font-mono mt-1 tracking-wide">{row.time}</p>
              </div>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: shown ? "rgba(74,222,128,0.18)" : "transparent",
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
