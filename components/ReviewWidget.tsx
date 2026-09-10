"use client";

import Script from "next/script";

export default function ReviewWidget() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-6" style={{ color: "var(--accent)" }}>
          Verifierade Google-recensioner
        </p>
        <Script
          src="https://reputationhub.site/reputation/assets/review-widget.js"
          strategy="lazyOnload"
        />
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/THxENMqtMMj0dPSdv17A"
          frameBorder={0}
          scrolling="no"
          style={{ minWidth: "100%", width: "100%", border: "none" }}
          title="Google-recensioner för LeadOne Marketing"
        />
      </div>
    </section>
  );
}
