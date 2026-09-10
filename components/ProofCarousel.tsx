"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

// top/height as % of image height, left/width as % of image width
type BlurBox = { top: number; left: number; width: number; height: number };

const SLIDES: { src: string; query: string; pos: string; blur: BlurBox }[] = [
  { src: "/assets/proof/1.jpg", query: "bilpolering jönköping",          pos: "#3", blur: { top: 79.0, left: 0, width: 52, height: 6.0 } },
  { src: "/assets/proof/2.jpg", query: "rekond jönköping",               pos: "#3", blur: { top: 75.5, left: 0, width: 52, height: 6.0 } },
  { src: "/assets/proof/3.jpg", query: "bilvård jönköping",              pos: "#3", blur: { top: 82.0, left: 0, width: 52, height: 6.0 } },
  { src: "/assets/proof/4.jpg", query: "ansiktsbehandling kungsbacka",   pos: "#2", blur: { top: 69.5, left: 0, width: 62, height: 5.5 } },
  { src: "/assets/proof/5.jpg", query: "microneedling kungsbacka",       pos: "#2", blur: { top: 62.0, left: 0, width: 62, height: 5.5 } },
  { src: "/assets/proof/6.jpg", query: "skönhetssalong kungsbacka",      pos: "#1", blur: { top: 39.0, left: 0, width: 62, height: 5.5 } },
  { src: "/assets/proof/7.jpg", query: "vaxning helsingborg",            pos: "#1", blur: { top: 49.5, left: 0, width: 62, height: 5.5 } },
  { src: "/assets/proof/8.jpg", query: "ansiktsbehandling helsingborg",  pos: "#1", blur: { top: 49.0, left: 0, width: 62, height: 5.5 } },
];

function BlurOverlay({ box }: { box: BlurBox }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top:    `${box.top}%`,
        left:   `${box.left}%`,
        width:  `${box.width}%`,
        height: `${box.height}%`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.18)",
        borderRadius: "4px",
      }}
    />
  );
}

export default function ProofCarousel() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const lightboxPrev = useCallback(() => {
    setLightbox(i => (i === null ? null : (i - 1 + SLIDES.length) % SLIDES.length));
  }, []);

  const lightboxNext = useCallback(() => {
    setLightbox(i => (i === null ? null : (i + 1) % SLIDES.length));
  }, []);

  const scrollCarousel = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("button") as HTMLButtonElement | null;
    const w = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir === "next" ? w * 2 : -w * 2, behavior: "smooth" });
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     setLightbox(null);
      if (e.key === "ArrowLeft")  lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, lightboxPrev, lightboxNext]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Carousel ───────────────────────────────────────── */}
      <div className="relative">
        <button
          onClick={() => scrollCarousel("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
          aria-label="Scrolla bakåt"
        >
          <ArrowLeft size={16} weight="bold" />
        </button>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="snap-start shrink-0 rounded-2xl overflow-hidden relative group focus:outline-none focus-visible:ring-2"
              style={{
                width: "clamp(200px, 26vw, 280px)",
                aspectRatio: "3/4",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
              aria-label={`Öppna screenshot: ${s.query} · ${s.pos}`}
            >
              <Image
                src={s.src}
                alt={`Google-sökning "${s.query}" — placering ${s.pos}`}
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="280px"
              />
              <BlurOverlay box={s.blur} />
              {/* zoom hint */}
              <div
                className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1h4M1 1v4M11 1H7M11 1v4M1 11h4M1 11V7M11 11H7M11 11V7"
                    stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollCarousel("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
          aria-label="Scrolla framåt"
        >
          <ArrowRight size={16} weight="bold" />
        </button>
      </div>

      {/* ── Lightbox ────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={() => setLightbox(null)}
            aria-label="Stäng"
          >
            <X size={20} weight="bold" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={e => { e.stopPropagation(); lightboxPrev(); }}
            aria-label="Föregående"
          >
            <ArrowLeft size={20} weight="bold" />
          </button>

          {/* image + blur overlay */}
          <div
            className="relative mx-16 rounded-2xl overflow-hidden"
            style={{ maxHeight: "88dvh", maxWidth: "min(800px, 90vw)", width: "100%" }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={SLIDES[lightbox].src}
              alt={`Google-sökning "${SLIDES[lightbox].query}" — placering ${SLIDES[lightbox].pos}`}
              width={800}
              height={1067}
              unoptimized
              className="w-full h-auto"
              style={{ maxHeight: "88dvh", objectFit: "contain" }}
              priority
            />
            <BlurOverlay box={SLIDES[lightbox].blur} />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.08)" }}
            onClick={e => { e.stopPropagation(); lightboxNext(); }}
            aria-label="Nästa"
          >
            <ArrowRight size={20} weight="bold" />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] font-mono text-zinc-500">
            {lightbox + 1} / {SLIDES.length}
          </p>
        </div>
      )}
    </>
  );
}
