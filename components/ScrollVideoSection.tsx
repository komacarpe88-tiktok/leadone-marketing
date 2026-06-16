"use client";

/**
 * ScrollVideoSection
 *
 * Pinning:   CSS position:sticky on the inner element — no GSAP needed.
 * Scroll:    Passive scroll listener records a *target* progress only.
 *            A continuous rAF loop eases the rendered value toward the
 *            target (exponential smoothing / lerp), so motion glides
 *            smoothly instead of stuttering in lockstep with raw scroll.
 * Drawing:   Sub-frame interpolation — cross-fades the two nearest frames
 *            by the fractional remainder, removing visible frame "stepping".
 */

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const SCROLL_VH   = 5;
const FRAME_COUNT = 61;
const BITMAP_W    = 1920;
const BITMAP_H    = 1080;

const COPY = [
  "Din konkurrent syns på Google. Gör du det?",
  "Vi tar dig in i Local Pack — topp 3 på Google Maps",
  "Fler recensioner. Fler samtal. Mer omsättning.",
] as const;

const SCHEDULE = [
  { a: 0.00, b: 0.07, c: 0.25, d: 0.33 },
  { a: 0.33, b: 0.40, c: 0.58, d: 0.66 },
  { a: 0.66, b: 0.73, c: 0.91, d: 1.00 },
] as const;

function calcOpacity(
  p: number,
  { a, b, c, d }: { a: number; b: number; c: number; d: number }
): number {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / (b - a);
  if (p > c) return 1 - (p - c) / (d - c);
  return 1;
}

function DesktopScrollVideoSection() {
  const outerRef   = useRef<HTMLDivElement>(null);    // scroll height container
  const stickyRef  = useRef<HTMLElement>(null);       // sticky viewport fill
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const textRefs   = useRef<(HTMLParagraphElement | null)[]>([null, null, null]);
  const bitmapsRef = useRef<ImageBitmap[]>([]);
  const dpRef      = useRef<{ sx: number; sy: number; sw: number; sh: number } | null>(null);
  const targetRef  = useRef(0);   // where the scroll wants the animation to be
  const currentRef = useRef(0);   // smoothed value actually being rendered
  const rafRef     = useRef<number | null>(null);

  const [pct, setPct]     = useState(0);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // ── Canvas resize ────────────────────────────────────────────────────────
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width  = window.innerWidth;
      c.height = window.innerHeight;
      dpRef.current = null;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ── Draw: sub-frame interpolation (cross-fade two nearest frames) ─────────
  // Blending the two adjacent frames by the fractional remainder removes the
  // visible "stepping" between discrete frames, so motion looks continuous
  // even though only 121 source frames exist.
  const drawFrame = useCallback((p: number) => {
    const canvas  = canvasRef.current;
    const bitmaps = bitmapsRef.current;
    if (!canvas || bitmaps.length === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const cw = canvas.width, ch = canvas.height;
    const bw = bitmaps[0].width, bh = bitmaps[0].height;

    // OFFSET: shift the drawn image down on the canvas so the pin/metrics sit lower
    const OFFSET_Y = 100;

    if (!dpRef.current) {
      const cr = cw / ch, br = bw / bh;
      let sx = 0, sy = 0, sw = bw, sh = bh;
      if (cr > br) { sh = bw / cr; sy = (bh - sh) / 2; }
      else         { sw = bh * cr; sx = (bw - sw) / 2; }
      dpRef.current = { sx, sy, sw, sh };
    }

    const { sx, sy, sw, sh } = dpRef.current;

    const loadedCount = bitmaps.length;
    const exact = Math.max(0, Math.min(p, 1)) * (loadedCount - 1);
    const i0    = Math.floor(exact);
    const i1    = Math.min(i0 + 1, loadedCount - 1);
    const frac  = exact - i0;

    const bm0 = bitmaps[i0];
    const bm1 = bitmaps[i1];

    ctx.globalAlpha = 1;
    if (bm0) ctx.drawImage(bm0, sx, sy, sw, sh, 0, OFFSET_Y, cw, ch);
    if (bm1 && i1 !== i0 && frac > 0.001) {
      ctx.globalAlpha = frac;
      ctx.drawImage(bm1, sx, sy, sw, sh, 0, OFFSET_Y, cw, ch);
      ctx.globalAlpha = 1;
    }
  }, []);

  // ── Load: defer frames until after page load + idle ─────────────────────
  // Loading 61 JPEGs immediately on mount destroys LCP. Instead we wait for
  // the browser's idle period (requestIdleCallback) after the window load
  // event, so the main thread is free for LCP and FCP first.
  useEffect(() => {
    let cancelled = false;
    let done = 0;
    const indices: number[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) indices.push(i + 1);
    const bitmaps = new Array<ImageBitmap>(indices.length);

    const loadAll = async () => {
      await Promise.all(
        indices.map(async (frameNum, slot) => {
          try {
            const url  = `/assets/frames/frame-${String(frameNum).padStart(4, "0")}.jpg`;
            const resp = await fetch(url);
            const blob = await resp.blob();
            const bm   = await createImageBitmap(blob, {
              resizeWidth:   BITMAP_W,
              resizeHeight:  BITMAP_H,
              resizeQuality: "medium",
            } as ImageBitmapOptions);
            bitmaps[slot] = bm;
          } catch {
            const oc = new OffscreenCanvas(BITMAP_W, BITMAP_H);
            bitmaps[slot] = oc.transferToImageBitmap();
          }
          done++;
          if (!cancelled) setPct(done / indices.length);
        })
      );

      if (cancelled) return;
      bitmapsRef.current = bitmaps;
      drawFrame(0);
      setReady(true);
    };

    // Wait for window load + idle before fetching frames so LCP is not blocked
    const startLoad = () => {
      if (cancelled) return;
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void })
          .requestIdleCallback(() => { if (!cancelled) loadAll(); });
      } else {
        setTimeout(() => { if (!cancelled) loadAll(); }, 200);
      }
    };

    if (document.readyState === "complete") {
      startLoad();
    } else {
      window.addEventListener("load", startLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", startLoad);
    };
  }, [drawFrame]);

  // ── Scroll → smoothed (damped) render loop ──────────────────────────────
  // The scroll listener only records the *target* progress. A continuous rAF
  // loop eases the rendered value toward that target every frame (a lerp /
  // exponential smoothing), so the animation glides smoothly to the new
  // position instead of jumping in lockstep with raw, jittery scroll deltas.
  useEffect(() => {
    if (!ready || reducedMotion) return;

    // Read the current scroll position and store it as the target.
    const readTarget = () => {
      const outer  = outerRef.current;
      const sticky = stickyRef.current;
      if (!outer || !sticky) return;

      const rect     = outer.getBoundingClientRect();
      const total    = outer.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      // Fade out after the sequence ends; fade back in on scroll-up
      sticky.style.opacity    = scrolled > total ? "0" : "1";
      sticky.style.transition = "opacity 0.35s ease";

      targetRef.current = Math.max(0, Math.min(1, scrolled / total));
    };

    // Sync immediately (handles refresh mid-scroll) and render the first frame.
    readTarget();
    currentRef.current = targetRef.current;
    drawFrame(currentRef.current);

    // Exponential smoothing factor (higher = snappier, lower = floatier).
    const SMOOTH = 0.28;

    const render = () => {
      const target  = targetRef.current;
      const current = currentRef.current;
      const diff    = target - current;

      // Snap when close enough to avoid endless sub-pixel work.
      const next = Math.abs(diff) < 0.0002 ? target : current + diff * SMOOTH;

      if (next !== current) {
        currentRef.current = next;
        drawFrame(next);
        textRefs.current.forEach((el, i) => {
          if (el) el.style.opacity = String(calcOpacity(next, SCHEDULE[i]));
        });
      }

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    window.addEventListener("scroll", readTarget, { passive: true });
    return () => {
      window.removeEventListener("scroll", readTarget);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, reducedMotion, drawFrame]);

  // ── Reduced-motion: static mid-frame ─────────────────────────────────────
  useEffect(() => {
    if (!reducedMotion || !ready) return;
    drawFrame(0.5);
    textRefs.current.forEach((el, i) => {
      if (el) el.style.opacity = i === 1 ? "1" : "0";
    });
  }, [reducedMotion, ready, drawFrame]);

  return (
    // Outer div provides the scrollable height (5 × 100dvh)
    <div ref={outerRef} style={{ height: `${SCROLL_VH * 100}dvh` }}>
      <section
        ref={stickyRef as React.RefObject<HTMLElement>}
        className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#08080A]"
        aria-label="Scrollanimationssektion"
      >
        {/* ================================================================
            HERO HEADER IMAGE GOES HERE
            Replace the empty div with an <Image> once the asset is ready.
            Recommended: 1920 × 300 px · WebP · position absolute top-0 z-20
            ================================================================ */}
        <div aria-hidden="true" />

        {/* LCP element: always in DOM so Lighthouse measures it as LCP, hidden behind canvas once ready */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden="true"
        >
          <Image
            src="/assets/hero-bg.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: ready ? "block" : "none" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom," +
              "rgba(0,0,0,0.28) 0%," +
              "rgba(0,0,0,0.40) 45%," +
              "rgba(0,0,0,0.58) 100%)",
          }}
          aria-hidden="true"
        />

        {COPY.map((line, i) => (
          <div
            key={i}
            className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-16 pointer-events-none"
            aria-hidden="true"
          >
            <p
              ref={el => { textRefs.current[i] = el; }}
              className="text-white text-center font-cormorant"
              style={{
                fontSize:      "clamp(2rem, 4.5vw, 4rem)",
                fontWeight:    300,
                fontStyle:     "italic",
                lineHeight:    1.2,
                letterSpacing: "-0.01em",
                opacity:       0,
                maxWidth:      "22ch",
                textShadow:    "0 2px 32px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5)",
              }}
            >
              {line}
            </p>
          </div>
        ))}

        <div className="sr-only" aria-live="polite">
          {COPY.map((line, i) => <p key={i}>{line}</p>)}
        </div>

        {/* Loading progress bar — subtle, doesn't block LCP */}
        {!ready && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            role="status"
            aria-label="Laddar animation"
          >
            <div className="w-40 h-[2px] bg-zinc-800/60 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width:      `${pct * 100}%`,
                  background: "var(--accent)",
                  transition: "width 120ms ease-out",
                }}
              />
            </div>
          </div>
        )}

        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #08080A 100%)" }}
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

const MOBILE_SCROLL_VH = 3;

function MobileScrollSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const reduce   = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  )[0];

  const { scrollYProgress } = useScroll({
    target:  outerRef,
    offset:  ["start start", "end end"],
  });

  // Each line fades in then out across its slice of the scroll range
  const op0 = useTransform(scrollYProgress, [0.00, 0.08, 0.28, 0.36], [0, 1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [0.33, 0.41, 0.61, 0.69], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.66, 0.74, 0.94, 1.00], [0, 1, 1, 0]);
  const opacities = [op0, op1, op2];

  // Subtle parallax: bg drifts upward as you scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div ref={outerRef} style={{ height: `${MOBILE_SCROLL_VH * 100}svh` }}>
      <section
        className="sticky top-0 w-full overflow-hidden bg-[#08080A]"
        style={{ height: "100svh" }}
        aria-label="Scrollanimationssektion"
      >
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: reduce ? "0%" : bgY }}
        >
          <Image
            src="/assets/hero-bg.webp"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
            aria-hidden="true"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.58) 60%,#08080A 100%)",
          }}
          aria-hidden="true"
        />

        {/* Scroll-driven text lines */}
        {COPY.map((line, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 z-10 flex items-center justify-center px-8 pointer-events-none"
            style={{ opacity: reduce ? (i === 1 ? 1 : 0) : opacities[i] }}
            aria-hidden="true"
          >
            <p
              className="text-white text-center font-cormorant"
              style={{
                fontSize:      "clamp(1.75rem, 6.5vw, 2.6rem)",
                fontWeight:    300,
                fontStyle:     "italic",
                lineHeight:    1.22,
                letterSpacing: "-0.01em",
                maxWidth:      "22ch",
                textShadow:    "0 2px 28px rgba(0,0,0,0.8), 0 1px 8px rgba(0,0,0,0.6)",
              }}
            >
              {line}
            </p>
          </motion.div>
        ))}

        {/* Scroll hint — fades out as soon as user starts scrolling */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-zinc-400">
            Scrolla
          </span>
          <motion.div
            className="w-px h-8 bg-zinc-500 origin-top"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Screen-reader text */}
        <div className="sr-only" aria-live="polite">
          {COPY.map((line, i) => <p key={i}>{line}</p>)}
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #08080A 100%)" }}
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

export default function ScrollVideoSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [checked, setChecked]   = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setChecked(true);
  }, []);

  if (!checked) return null;
  return isMobile ? <MobileScrollSection /> : <DesktopScrollVideoSection />;
}
