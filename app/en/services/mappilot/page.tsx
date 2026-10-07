import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import ReviewWidget from "@/components/ReviewWidget";
import { getAllCaseStudies } from "@/lib/case-studies";
import ActivityFeed from "./ActivityFeed";
import TrendChart from "./TrendChart";
import RankingHeatmap from "./RankingHeatmap";
import StickyMobileBar from "./StickyMobileBar";
import Faq from "./Faq";
import { ArrowRight, Phone, Check } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "MapPilot™ — Google Maps Optimization on Autopilot | LeadOne",
  description: "MapPilot™ works on your Google profile every single week – new posts, photos, reviews and replies – so you keep climbing on Google Maps. 3,999 SEK/month, no lock-in.",
  keywords: "Google Maps optimization, Google Business Profile management, ongoing local SEO, AI visibility, heatmap ranking, review management, Helsingborg",
  alternates: { canonical: "https://leadone.online/en/services/mappilot/" },
  openGraph: {
    title: "MapPilot™ — Google Maps Optimization on Autopilot",
    description: "MapPilot™ works on your Google profile every single week – new posts, photos, reviews and replies – so you keep climbing on Google Maps.",
    locale: "en_GB",
    type: "website",
    url: "https://leadone.online/en/services/mappilot/",
  },
};

const BOOKING_URL = "/en/book";
const PRICE = "3,999 SEK/month";

const faqs = [
  { q: "Do I need to do anything?", a: "No. You give us access to your Google profile and we handle the rest. If you'd like to approve posts before they go live, you can." },
  { q: "How quickly will I see results?", a: "Rankings often start moving within a few weeks. Expect around three months for stable improvements. You follow the progress in your monthly report." },
  { q: "Am I locked in?", a: "No. MapPilot™ is month-to-month with no lock-in and no setup fee. Cancel anytime." },
  { q: "Do you take over my Google profile?", a: "No. The profile is and stays yours. You add us as a manager and can remove access whenever you like." },
  { q: "How is this different from LaunchMap™ and Omdömesmaskinen?", a: "LaunchMap™ is a one-time optimization and Omdömesmaskinen handles reviews. MapPilot™ includes both, plus the weekly work that keeps you at the top." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadone.online/en/services/mappilot/#service",
      "name": "MapPilot™",
      "description": "Ongoing management of your Google Business Profile: weekly posts, photos, review management and monthly ranking reports, built on LaunchMap™ and Omdömesmaskinen.",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "url": "https://leadone.online/en/services/mappilot/",
      "offers": {
        "@type": "Offer",
        "price": "3999",
        "priceCurrency": "SEK",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "3999",
          "priceCurrency": "SEK",
          "unitText": "month",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://leadone.online/en/services/mappilot/#faq",
      "mainEntity": faqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    },
  ],
};

export default function MapPilotEnPage() {
  const cases = getAllCaseStudies().filter(
    (cs) => cs.slug === "angelique-hud-kropp" || cs.slug === "hjeronymus-salongen" || cs.slug === "zvizzer-bilvard"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Nav />
      <StickyMobileBar
        heroId="mp-hero"
        finalCtaId="mp-final-cta"
        bookingUrl={BOOKING_URL}
        price={PRICE}
        cta="Get started"
      />
      <main className="bg-[#08080A] pt-[72px]" lang="en">

        {/* ── 1. Hero ──────────────────────────────────────────────────── */}
        <section id="mp-hero" className="relative overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 45%, rgba(201,168,76,0.1) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #08080A 0%, transparent 18%)" }} />
          </div>

          <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-16 items-center">

              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Done-for-you local SEO
                </p>
                <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#F4F4F5] mb-5">
                  Your Google ranking on <em className="not-italic text-accent">autopilot</em>.
                </h1>
                <p className="text-[17px] text-zinc-400 leading-relaxed mb-7 max-w-[46ch]">
                  MapPilot™ works on your Google profile every single week – new posts, photos, reviews and replies – so you keep climbing on Google Maps while you run your business.
                </p>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {["Fully done for you", "Runs automatically every week", "Monthly ranking report"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[14px] text-zinc-300">
                      <Check size={14} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>

                <a href={BOOKING_URL}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                  See where you rank – free
                  <ArrowRight size={15} weight="bold" aria-hidden="true" />
                </a>
                <p className="mt-4 text-[13px] text-zinc-600">
                  {PRICE.replace("/month", "")}/month · No setup fee · Cancel anytime
                </p>
              </div>

              <div>
                <ActivityFeed />
                <p className="text-center text-[11px] text-zinc-600 mt-4">Example week.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Why it matters ────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
              Google rewards businesses that stay <em className="not-italic text-accent">active</em>.
            </h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-10">
              Your ranking isn't something you fix once. Profiles that get new posts, photos and reviews every week climb. Profiles that sit still slide down, while active competitors take the calls. Everyone knows this. Nobody has time to do it every week. So we do it.
            </p>
            <TrendChart />
          </div>
        </section>

        {/* ── 3. How it works ──────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Three days to set up. Then you're on <em className="not-italic text-accent">autopilot</em>.
              </h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <div
                className="hidden md:block absolute top-[22px] left-[16.5%] right-[16.5%] h-px"
                style={{ background: "var(--border)" }}
                aria-hidden="true"
              />
              {[
                { n: "01", title: "Free ranking analysis", desc: "15 minutes. We show you where you appear today and what's holding you back." },
                { n: "02", title: "We set everything up", desc: "Your profile gets optimized, you're listed in 50+ directories and the review system is connected. Done within three days." },
                { n: "03", title: "MapPilot™ works every week", desc: "Posts, photos, reviews and replies, automatically. You get a summary every week and a ranking report every month." },
              ].map((step) => (
                <div key={step.n} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div
                    className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center font-mono text-[13px] font-bold mb-5"
                    style={{ background: "#08080A", color: "var(--accent)", border: "1px solid rgba(201,168,76,0.4)" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="font-bold text-[17px] text-[#F4F4F5] tracking-tight mb-2">{step.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[32ch]">{step.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-14 rounded-2xl p-5 text-center"
              style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <p className="text-[14px] font-medium" style={{ color: "var(--accent)" }}>
                Your part: give us access to your Google profile. That's it.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3b. Ongoing competitor comparison ─────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
                MapPilot™ never stops <em className="not-italic text-accent">comparing</em>.
              </h2>
              <p className="text-[15px] text-zinc-400 leading-relaxed max-w-[56ch] mx-auto">
                Every week, the system looks at which competitors rank above you and exactly what their profiles are doing that yours isn't – more photos, newer reviews, a category you're missing. It's not a one-time analysis. Your profile keeps getting adjusted based on what actually moves you past them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Sees what competitors are doing", desc: "We analyze the profiles ranking above you and identify exactly what sets them apart." },
                { title: "Suggests the next move", desc: "The system prioritizes what will have the biggest impact right now – not a generic checklist." },
                { title: "Adjusts every week", desc: "Nothing is set up once and forgotten. Your profile keeps moving forward, in step with the market." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                  <h3 className="font-semibold text-[15px] text-[#F4F4F5] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Proof ──────────────────────────────────────────────────── */}
        {cases.length > 0 && (
          <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
              <div className="text-center mb-12">
                <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                  Real clients. Real <em className="not-italic text-accent">numbers</em>.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mb-4">
                {cases.map((cs) => (
                  <div key={cs.slug} className="rounded-2xl p-6 flex flex-col gap-3"
                    style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold shrink-0"
                        style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }} aria-hidden="true">
                        {cs.client.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#F4F4F5]">{cs.client}</p>
                        <p className="text-[11px] text-zinc-500">{cs.industry} · {cs.city}</p>
                      </div>
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed">{cs.teaser}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href="/en/results" className="inline-flex items-center gap-2 text-[14px] font-mono" style={{ color: "var(--accent)" }}>
                  See all case studies
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        )}

        <ReviewWidget />

        {/* ── 5. Monthly report ────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">
              <div>
                <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
                  You see exactly what's <em className="not-italic text-accent">happening</em>.
                </h2>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  Every month we measure your position across a grid covering your whole area, street by street. You see where you're in the top three, where you drop off and which competitors take the spots. We also track how you show up when someone asks ChatGPT or Gemini for recommendations.
                </p>
              </div>
              <div>
                <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <RankingHeatmap />
                </div>
                <p className="text-[11px] text-zinc-600 mt-3 text-center">
                  Illustration. Your report is based on your own keywords and area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Pricing ────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <div className="rounded-2xl p-8 lg:p-10" style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#0A0A0D" }}>
              <div className="text-center mb-10">
                <p className="text-[12px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "var(--accent)" }}>MapPilot™</p>
                <span className="font-mono text-[3rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{PRICE}</span>
                <p className="text-[13px] text-zinc-500 mt-2">No setup fee · No lock-in</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { h: "Your Google profile", items: ["Complete optimization", "Posts and offers every week", "Photos and video", "Q&A", "Category and competitor analysis"] },
                  { h: "Reviews", items: ["Automatic requests by text and email", "Replies to every review", "Alerts for bad reviews", "Best reviews turned into posts"] },
                  { h: "Visibility and reports", items: ["50+ directory listings", "Social media publishing", "Monthly heatmap report", "AI visibility", "Weekly summary", "Profile monitoring"] },
                ].map((group) => (
                  <div key={group.h}>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-4 text-zinc-500">{group.h}</p>
                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-zinc-300 leading-snug">
                          <Check size={12} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a href={BOOKING_URL}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                Get started
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <p className="mt-4 text-[12px] text-zinc-600 text-center">
                Only methods that follow Google's guidelines. Your profile and your reviews are always yours.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Common <em className="not-italic text-accent">questions</em>
              </h2>
            </div>
            <Faq faqs={faqs} />
          </div>
        </section>

        {/* ── 8. Final CTA ──────────────────────────────────────────────── */}
        <section id="mp-final-cta" className="relative py-24 lg:py-32 border-t text-center overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.14) 0%, transparent 60%)" }} />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10">
            <h2 className="text-[2.2rem] md:text-[3.2rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5 leading-tight">
              Where do <em className="not-italic text-accent">you</em> rank today?
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[44ch] mx-auto mb-9 leading-relaxed">
              15 minutes. Free. We'll show you where you appear, where competitors are taking your customers and what MapPilot™ would do first.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Book free analysis
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[13px] text-zinc-600">
              <a href="tel:+46763912181" className="hover:text-zinc-400 transition-colors inline-flex items-center gap-1.5">
                <Phone size={12} aria-hidden="true" />
                +46 763 91 21 81
              </a>
            </p>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
    </>
  );
}
