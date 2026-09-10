"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "motion/react";
import type { Locale } from "@/lib/i18n";

const SENTENCES = {
  sv: [
    "46% av alla Google-sökningar är lokala.",
    "Om du inte syns i topp 3 —",
    "existerar du inte för hälften av dina kunder.",
  ],
  en: [
    "46% of all Google searches are local.",
    "If you don't appear in the top 3 —",
    "you don't exist for half your customers.",
  ],
};

const SOURCE = {
  sv: "Källa: Google / BrightLocal Local Consumer Review Survey",
  en: "Source: Google / BrightLocal Local Consumer Review Survey",
};

const SENTENCE_SHARE = 1 / 3;

function RevealWord({
  word,
  progress,
  wordStart,
  wordEnd,
  sentenceFadeStart,
  sentenceEnd,
}: {
  word: string;
  progress: MotionValue<number>;
  wordStart: number;
  wordEnd: number;
  sentenceStart: number;
  sentenceFadeStart: number;
  sentenceEnd: number;
}) {
  const opacity = useTransform(
    progress,
    [wordStart, wordEnd, sentenceFadeStart, sentenceEnd],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [wordStart, wordEnd], ["0.35em", "0em"]);
  return (
    <motion.span style={{ opacity, y, display: "inline-block", whiteSpace: "pre" }}>
      {word}
    </motion.span>
  );
}

function SentenceBlock({
  sentence,
  progress,
  sentenceIndex,
}: {
  sentence: string;
  progress: MotionValue<number>;
  sentenceIndex: number;
}) {
  const words = sentence.split(" ").map(w => w + " ");
  const sentenceStart = sentenceIndex * SENTENCE_SHARE;
  const sentenceEnd   = sentenceStart + SENTENCE_SHARE;
  const buildRange    = SENTENCE_SHARE * 0.5;
  const sentenceFadeStart = sentenceStart + SENTENCE_SHARE * 0.7;
  const wordStep      = buildRange / words.length;

  return (
    <div className="absolute inset-0 flex items-center">
      <h2
        className="font-bold leading-[1.05] tracking-[-0.03em] flex flex-wrap"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
      >
        {words.map((word, i) => (
          <RevealWord
            key={i}
            word={word}
            progress={progress}
            wordStart={sentenceStart + i * wordStep}
            wordEnd={sentenceStart + (i + 1) * wordStep}
            sentenceStart={sentenceStart}
            sentenceFadeStart={sentenceFadeStart}
            sentenceEnd={sentenceEnd}
          />
        ))}
      </h2>
    </div>
  );
}

export default function StatementSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLDivElement>(null);
  const sentences = SENTENCES[locale];

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start 0.3", "end 0.7"],
  });

  return (
    <div ref={outerRef} style={{ height: "clamp(200vh, 350vh, 350vh)", borderBottom: "1px solid var(--border)" }} className="relative">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-10" style={{ color: "var(--accent)" }}>
            {locale === "en" ? "Facts" : "Fakta"}
          </p>
          <div className="relative" style={{ height: "clamp(80px, 15vw, 160px)" }}>
            {reduce ? (
              sentences.map((s, i) => (
                <div key={i} className={i === 0 ? "block" : "hidden"}>
                  <h2 className="font-bold leading-[1.05] tracking-[-0.03em] text-[#F4F4F5]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}>
                    {s}
                  </h2>
                </div>
              ))
            ) : (
              sentences.map((sentence, i) => (
                <SentenceBlock
                  key={i}
                  sentence={sentence}
                  progress={scrollYProgress}
                  sentenceIndex={i}
                />
              ))
            )}
          </div>
          <p className="mt-10 text-[12px] text-zinc-600 font-mono">
            {SOURCE[locale]}
          </p>
        </div>
      </div>
    </div>
  );
}
