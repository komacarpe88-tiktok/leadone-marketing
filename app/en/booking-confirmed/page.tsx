"use client";

import { Phone, EnvelopeSimple, CheckCircle } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const VIDEO_URL = "https://files.leadconnectorhq.com/file/6af374a71c208a123b49635a/booking-confirmation-video-database-reactivation.mp4";

const offerPoints = [
  "We reactivate your existing customer database — past customers who haven't heard from you in a while",
  "We collect Google reviews from them",
  "We get them to refer you to friends and family",
];

const nextSteps = [
  "We'll meet on Google Meet via the link in your booking confirmation, at the time you booked",
  "Need to reschedule? Call or email me directly — no booking link needed",
];

export default function BookingConfirmedPage() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#08080A] flex flex-col items-center px-6 py-16 lg:py-24" lang="en">
      <motion.div
        className="w-full max-w-[860px] flex flex-col gap-10"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "var(--accent-dim)" }}
          >
            <CheckCircle size={24} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
          </div>
          <h1 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight">
            Your booking is confirmed
          </h1>
          <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[52ch]">
            Watch the video below before we talk — it explains exactly how we help you bring back past customers.
          </p>
        </div>

        {/* Video */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.12)",
            aspectRatio: "16 / 9",
            background: "#000",
          }}
        >
          <video
            src={VIDEO_URL}
            controls
            playsInline
            className="w-full h-full object-contain"
            title="Booking confirmation video from LeadOne Marketing"
          />
        </div>

        {/* What the offer is */}
        <div
          className="rounded-2xl p-7 lg:p-9"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-5" style={{ color: "var(--accent)" }}>
            What the offer is about
          </p>
          <ul className="flex flex-col gap-4">
            {offerPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-zinc-300 leading-relaxed">
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "var(--accent-dim)" }}
                  aria-hidden="true"
                >
                  <CheckCircle size={13} weight="fill" style={{ color: "var(--accent)" }} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* What happens next */}
        <div
          className="rounded-2xl p-7 lg:p-9"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-5" style={{ color: "var(--accent)" }}>
            What happens next
          </p>
          <ul className="flex flex-col gap-3 mb-7">
            {nextSteps.map((step) => (
              <li key={step} className="text-[15px] text-zinc-300 leading-relaxed">
                {step}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <a
              href="tel:+16816411867"
              className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
            >
              <Phone size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
              +1 681-641-1867
            </a>
            <a
              href="mailto:info@leadone.online"
              className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
            >
              <EnvelopeSimple size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
              info@leadone.online
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
