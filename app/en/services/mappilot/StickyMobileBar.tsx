"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * Slim sticky bottom bar, mobile only. Appears once the hero has scrolled
 * out of view, hides again once the final CTA section is in view (no point
 * duplicating the same call to action right above it).
 */
export default function StickyMobileBar({
  heroId,
  finalCtaId,
  bookingUrl,
  price,
  cta,
}: {
  heroId: string;
  finalCtaId: string;
  bookingUrl: string;
  price: string;
  cta: string;
}) {
  const [pastHero, setPastHero] = useState(false);
  const [onFinalCta, setOnFinalCta] = useState(false);
  const observers = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const finalCta = document.getElementById(finalCtaId);
    if (!hero || !finalCta) return;

    const heroObs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    const ctaObs = new IntersectionObserver(
      ([entry]) => setOnFinalCta(entry.isIntersecting),
      { threshold: 0.15 }
    );
    heroObs.observe(hero);
    ctaObs.observe(finalCta);
    observers.current = [heroObs, ctaObs];

    return () => observers.current.forEach((o) => o.disconnect());
  }, [heroId, finalCtaId]);

  const visible = pastHero && !onFinalCta;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[140] transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        background: "rgba(10,10,13,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(201,168,76,0.2)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="text-[13px] font-semibold text-[#F4F4F5] whitespace-nowrap">{price}</span>
        <a
          href={bookingUrl}
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-accent text-[#08080A] font-semibold text-[13px] whitespace-nowrap"
        >
          {cta}
          <ArrowRight size={12} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
