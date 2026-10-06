import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import ReviewWidget from "@/components/ReviewWidget";
import { getAllCaseStudies } from "@/lib/case-studies";
import {
  ArrowRight, Phone, Check, Star, MapPin, MagnifyingGlass,
  ChartBar, ShieldCheck, Robot,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "MapPilot™ — Google Maps Optimization on Autopilot | LeadOne",
  description: "We manage your Google Business Profile every week – posts, photos, reviews and ranking reports – so you rank at the top of Google Maps. 3,999 SEK/month, no lock-in.",
  keywords: "Google Maps optimization, Google Business Profile management, ongoing local SEO, AI visibility, heatmap ranking, review management, Helsingborg",
  alternates: { canonical: "https://leadone.online/en/services/mappilot/" },
  openGraph: {
    title: "MapPilot™ — Google Maps Optimization on Autopilot",
    description: "We manage your Google Business Profile every week – posts, photos, reviews and ranking reports – so you rank at the top of Google Maps.",
    locale: "en_GB",
    type: "website",
    url: "https://leadone.online/en/services/mappilot/",
  },
};

const BOOKING_URL = "/en/book";
const PRICE = "3,999 SEK";

const faqs = [
  { q: "Am I tied to a contract?", a: "No. MapPilot™ is month-to-month with no lock-in. Cancel whenever you like – your profile and your reviews are always yours." },
  { q: "How quickly will I see results?", a: "Core optimization happens in the first month and reviews start coming in right away. Rankings often start moving within a few weeks, but expect around three months for stable improvements. You'll see the progress in your report." },
  { q: "Do I need to know anything about SEO?", a: "No. We handle the analysis, setup and ongoing work. All you need to do is give us access to your profile." },
  { q: "Do you take over my Google profile?", a: "No, the profile is and stays yours. You add us as a manager and can remove our access whenever you want." },
  { q: "Can I approve posts before they're published?", a: "Yes. You can choose to approve content yourself before it goes out, or let it publish automatically." },
  { q: "Does it work with my booking or POS system?", a: "In many cases, yes. Review requests can be connected to your existing system, so every new customer automatically gets a request after their visit. We'll go through what works for your system during the analysis." },
  { q: "What happens if I get a bad review?", a: "It's flagged immediately and you're notified. We reply calmly and professionally, and you can always choose to reply yourself instead." },
  { q: "How is MapPilot™ different from LaunchMap™ and Omdömesmaskinen?", a: "LaunchMap™ is a one-time optimization and Omdömesmaskinen handles your reviews. MapPilot™ includes both, plus the weekly ongoing work that keeps you at the top." },
  { q: "Do I need a new website?", a: "Not to get started. But your website affects how Google and AI tools understand your business, so the analysis also shows whether your website is holding you back." },
  { q: "Does it work for my industry?", a: "It works for local service businesses whose customers search on Google – for example car detailing, workshops, beauty and trades. The free analysis shows whether there's room for you to climb." },
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

/* ── Illustrative geo-grid visual (SVG/CSS, no real business data) ───────── */
function GeoGridVisual() {
  const rows = 4, cols = 5;
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const dist = Math.hypot(r - 1.3, c - 2);
    if (dist < 1) return { rank: "1", strength: 1 };
    if (dist < 1.6) return { rank: "2", strength: 0.8 };
    if (dist < 2.2) return { rank: "3", strength: 0.6 };
    if (dist < 2.9) return { rank: "7", strength: 0.32 };
    return { rank: "12+", strength: 0.14 };
  });

  return (
    <div
      role="img"
      aria-label="Illustration of a ranking grid — darker gold represents a higher Google Maps position"
      style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "6px" }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            aspectRatio: "1",
            borderRadius: "10px",
            background: `rgba(201,168,76,${cell.strength})`,
            border: "1px solid rgba(201,168,76,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "11px",
            color: cell.strength > 0.5 ? "#08080A" : "var(--accent)",
          }}
        >
          {cell.rank}
        </div>
      ))}
    </div>
  );
}

export default function MapPilotEnPage() {
  const cases = getAllCaseStudies().filter(
    (cs) => cs.slug === "angelique-hud-kropp" || cs.slug === "hjeronymus-salongen"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]" lang="en">

        {/* ── 1. Hero ──────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 45%, rgba(201,168,76,0.11) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #08080A 0%, transparent 18%)" }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center py-24 lg:py-32">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "var(--accent)", opacity: 0.6 }} />
                  <p className="text-[11px] uppercase tracking-[0.22em] font-mono" style={{ color: "var(--accent)" }}>
                    LaunchMap™ + Omdömesmaskinen + ongoing management
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>Best Value</span>
                </div>

                <h1 className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#F4F4F5] mb-6">
                  MapPilot™ — Google Maps on <em className="not-italic text-accent">autopilot</em>
                </h1>

                <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 max-w-[46ch]">
                  We take care of your Google Business Profile every week – posts, photos, reviews and categories – with an AI-driven system that benchmarks you against the businesses ranking highest in your area. You run your business. MapPilot™ makes sure Google finds it.
                </p>

                <div className="mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[3.2rem] font-bold tracking-[-0.04em] leading-none" style={{ color: "var(--accent)" }}>
                      {PRICE}
                    </span>
                    <span className="text-[15px] text-zinc-500">per month</span>
                  </div>
                  <p className="text-[12px] text-zinc-600">No setup fee · No lock-in · Cancel anytime</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={BOOKING_URL}
                    className="flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                    Book a Free Analysis
                    <ArrowRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                  <a href="tel:+46763912181"
                    className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 text-zinc-300 font-medium text-[15px] hover:border-white/20 hover:text-white transition-all duration-200">
                    <Phone size={14} aria-hidden="true" />
                    +46 763 91 21 81
                  </a>
                </div>
              </div>

              {/* ── Right: illustrative geo-grid heatmap ── */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)" }} />
                <div className="relative w-full rounded-2xl p-8"
                  style={{
                    background: "#0A0A0D",
                    boxShadow: "0 0 0 1px rgba(201,168,76,0.18), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)",
                  }}>
                  <GeoGridVisual />
                </div>
                <div className="absolute -bottom-5 left-6 rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background: "rgba(10,10,13,0.97)", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <MapPin size={13} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#F4F4F5] leading-none mb-0.5">Grid measurement</p>
                    <p className="text-[10.5px] text-zinc-500">Illustration, not real data</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Before / after ────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Your Google profile is either <em className="not-italic text-accent">working</em> – or it isn't
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-8" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4 text-zinc-500">Without MapPilot™</p>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  The profile was set up ages ago and hasn't been touched since. No new posts, few photos, unanswered reviews. Active competitors take the spots on the map – and the calls.
                </p>
              </div>
              <div className="rounded-2xl p-8" style={{ background: "var(--surface-elevated)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4" style={{ color: "var(--accent)" }}>With MapPilot™</p>
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                  Your profile is updated every week, reviews are answered, new customers are asked for a review, and your report shows how your visibility is changing. You don't spend a minute on it yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. How it works ──────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>How It Works</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Four steps from invisible to <em className="not-italic text-accent">chosen</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}>
              {[
                { n: "01", title: "Analysis", desc: "We measure where you rank across a grid covering your whole area and compare your profile with the businesses in the top three for your most important keywords." },
                { n: "02", title: "Core optimization", desc: "All of LaunchMap™ is included: categories, services, description, keywords and 50+ directory listings, set up based on what actually ranks in your industry and city." },
                { n: "03", title: "Ongoing work", desc: "Every week, posts, photos and Q&As are published, reviews are answered and new reviews are collected through Omdömesmaskinen. The system learns from what works." },
                { n: "04", title: "Follow-up", desc: "You get a weekly summary of what's been done and a monthly ranking report showing how your visibility is developing." },
              ].map((step, i) => (
                <div key={step.n} className="p-7 lg:p-8 flex flex-col gap-4"
                  style={{ background: i % 2 === 1 ? "var(--surface-elevated)" : "var(--surface)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] font-bold"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid rgba(201,168,76,0.3)" }}>
                    {step.n}
                  </div>
                  <h3 className="font-bold text-[17px] text-[#F4F4F5] tracking-tight">{step.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Everything included ───────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Everything that affects your spot on the <em className="not-italic text-accent">map</em>
              </h2>
            </div>

            <div className="flex flex-col gap-14">
              {/* Group: Your Google profile */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <MapPin size={16} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[18px] text-[#F4F4F5] tracking-tight">Your Google profile</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Complete core optimization", desc: "Description, services, service descriptions, attributes and social links written and set up around your keywords." },
                    { title: "Category and competitor analysis", desc: "We look at which categories the top-ranking businesses in your area use and adjust your profile accordingly." },
                    { title: "Weekly posts and offers", desc: "Keyword-focused posts and offers about your services, the season and your location, so your profile always stays active." },
                    { title: "Photos and video", desc: "Photos are geotagged, given the right metadata and uploaded at a steady pace. Short videos are created and published to your profile and YouTube." },
                    { title: "Q&A", desc: "Common customer questions are answered directly in your profile, so Google and customers get the right information." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5">{f.title}</h4>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group: Reviews */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <Star size={16} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[18px] text-[#F4F4F5] tracking-tight">Reviews (Omdömesmaskinen included)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "More reviews, automatically", desc: "Your customers get a request by text or email with a direct link to Google, plus a reminder if they haven't responded. You also get a QR code for your premises." },
                    { title: "Replies to every review", desc: "Every review gets a reply, with the right tone and relevant keywords." },
                    { title: "Alerts for bad reviews", desc: "Negative reviews are flagged immediately, so you can act before they do damage." },
                    { title: "Reviews become posts", desc: "Your best five-star reviews are turned into graphics and published on Google, social media and your website." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5">{f.title}</h4>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group: Visibility beyond the map */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <MagnifyingGlass size={16} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[18px] text-[#F4F4F5] tracking-tight">Visibility beyond the map</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "50+ directory listings", desc: "Your business information is kept up to date in the directories Google and AI tools cross-check, such as Apple Maps, Bing, ChatGPT and Perplexity." },
                    { title: "Social channels", desc: "Posts are also published to Facebook, Instagram and LinkedIn, so you're active everywhere without extra work." },
                    { title: "Your website in sync with your profile", desc: "Schema markup, an FAQ section and feeds of your latest posts, reviews and photos that can be added to your website, so Google sees the same picture everywhere." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5">{f.title}</h4>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group: Follow-up */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <ChartBar size={16} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-[18px] text-[#F4F4F5] tracking-tight">Follow-up</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Monthly heatmap reports", desc: "Rankings across your whole area for up to ten keywords, with before-and-after comparison." },
                    { title: "AI visibility", desc: "We measure how you show up when people ask ChatGPT, Gemini, Perplexity, Claude and other AI tools." },
                    { title: "Weekly summary", desc: "Every week you get a short summary of what's been done and what's planned next." },
                    { title: "Profile monitoring", desc: "You're alerted if anything changes on your profile, such as opening hours, phone number or address." },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                      <h4 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5">{f.title}</h4>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Ranking report ────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Reporting</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-6">
                  See your visibility <em className="not-italic text-accent">street</em> by street
                </h2>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  Google Maps shows different results depending on where the customer is standing. That's why we measure your position across a grid of points covering your whole area – not just from your own address. You see straight away where you're in the top three, where you drop off, and how it changes month by month. The report also shows which competitors hold the spots where you don't appear yet – and whether they're moving up or down.
                </p>
              </div>
              <div>
                <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <GeoGridVisual />
                </div>
                <p className="text-[11px] text-zinc-600 mt-3 text-center">Example image. Your analysis is based on your own keywords and your own area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. AI search ──────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-10 text-center">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--accent-dim)" }}>
              <Robot size={22} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
              More and more people ask AI for <em className="not-italic text-accent">recommendations</em>
            </h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed">
              When someone asks ChatGPT, Gemini or Google's AI Mode for "the best [service] in [city]", the answers draw on sources like your Google profile, directories and reviews. An active, well-maintained Google presence gives you a better chance of being mentioned. Nobody can guarantee AI recommendations – but an empty profile rarely gets recommended. That's why we also track how you appear in AI tools, so you can see the progress in black and white.
            </p>
          </div>
        </section>

        {/* ── 7. You vs. us ─────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                You don't need to know <em className="not-italic text-accent">SEO</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[860px] mx-auto">
              <div className="rounded-2xl p-7" style={{ background: "var(--surface-elevated)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4" style={{ color: "var(--accent)" }}>What we do</p>
                <ul className="flex flex-col gap-3">
                  {["Analysis and strategy", "Profile setup", "Weekly content", "Review management", "Reporting and follow-up", "Keeping everything within Google's guidelines"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                      <Check size={14} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4 text-zinc-500">What you do</p>
                <ul className="flex flex-col gap-3">
                  {["Give us access to your profile", "Send us photos from your work when you can", "Run your business"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-zinc-400">
                      <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-zinc-600" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Real results ───────────────────────────────────────────── */}
        {cases.length > 0 && (
          <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="mb-12 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Real results</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                  Real clients, real <em className="not-italic text-accent">measurements</em>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
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

              <div className="text-center mt-10">
                <a href="/en/results" className="inline-flex items-center gap-2 text-[14px] font-mono" style={{ color: "var(--accent)" }}>
                  See all case studies
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        )}

        <ReviewWidget />

        {/* ── 9. Safe and compliant ─────────────────────────────────────── */}
        <section className="py-20 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <div className="rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-6 items-start"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                <ShieldCheck size={20} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-[#F4F4F5] mb-2">Only methods Google approves</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  We use white-hat methods only and follow Google's guidelines for Business Profiles. No fake reviews, no made-up addresses, no categories for services you don't offer. That protects your profile from suspension – and delivers results that last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Pricing ───────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
            <div className="rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(201,168,76,0.35)", background: "#0A0A0D" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>MapPilot™ — Best Value</span>
              </div>
              <div className="mb-1">
                <span className="font-mono text-[3.2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{PRICE}</span>
                <span className="text-[14px] text-zinc-500 ml-2">/month</span>
              </div>
              <p className="text-[13px] text-zinc-500 mb-6">No setup fee · Cancel anytime</p>
              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {[
                  "Everything in LaunchMap™",
                  "Everything in Omdömesmaskinen",
                  "Posts, photos and videos every week",
                  "Social media publishing",
                  "Monthly heatmap reports",
                  "AI visibility report",
                  "Weekly summary",
                  "Priority support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <Check size={13} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                Get Started
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <p className="mt-3 text-[12px] text-zinc-600">No commitment. We reply within one business day.</p>
            </div>
          </div>
        </section>

        {/* ── 11. FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>FAQ</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Questions about <em className="not-italic text-accent">MapPilot™</em>
              </h2>
            </div>
            <MapPilotFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── 12. Final CTA ─────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Next Step</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Where do <em className="not-italic text-accent">you</em> rank today?
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[42ch] mx-auto mb-8 leading-relaxed">
              15 minutes. We'll run a free ranking analysis of your business and show you where you appear, where competitors are taking the spots, and what needs to be done first.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Book Your Free Analysis
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[13px] text-zinc-600">
              Or call directly: <a href="tel:+46763912181" className="hover:text-zinc-400 transition-colors">+46 763 91 21 81</a>
            </p>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
    </>
  );
}

/* ── Inline accordion FAQ ─────────────────────────────────────────────────── */
function MapPilotFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  "use client";
  return (
    <div className="flex flex-col max-w-[860px]">
      {faqs.map((faq, i) => (
        <details key={i} className="group border-t" style={{ borderColor: "var(--border)" }}>
          <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[15px] font-medium text-zinc-300 hover:text-[#F4F4F5] transition-colors duration-200">
            {faq.q}
            <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-zinc-500 group-open:text-accent transition-colors duration-200"
              style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}>
              <span className="text-[14px] leading-none group-open:hidden">+</span>
              <span className="text-[14px] leading-none hidden group-open:block">−</span>
            </span>
          </summary>
          <p className="pb-5 text-[14px] text-zinc-400 leading-relaxed max-w-[65ch]">{faq.a}</p>
        </details>
      ))}
      <div className="border-t" style={{ borderColor: "var(--border)" }} />
    </div>
  );
}
