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
  title: "MapPilot™ — Google Maps-optimering på autopilot | LeadOne",
  description: "MapPilot™ jobbar med din Google-profil varje vecka – nya inlägg, bilder, recensioner och svar – så att du fortsätter klättra på Google Maps. 3.999 kr/mån, ingen bindningstid.",
  keywords: "Google Maps optimering, Google Business Profile förvaltning, lokal SEO löpande, AI-synlighet, heatmap ranking, recensionshantering, Helsingborg",
  alternates: { canonical: "https://leadone.online/tjanster/mappilot/" },
  openGraph: {
    title: "MapPilot™ — Google Maps-optimering på autopilot",
    description: "MapPilot™ jobbar med din Google-profil varje vecka – nya inlägg, bilder, recensioner och svar – så att du fortsätter klättra på Google Maps.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/tjanster/mappilot/",
  },
};

const BOOKING_URL = "/boka";
const PRICE = "3.999 kr/mån";

const faqs = [
  { q: "Behöver jag göra något själv?", a: "Nej. Du ger oss åtkomst till din Google-profil, sedan sköter vi resten. Vill du godkänna inläggen innan de publiceras går det också." },
  { q: "Hur snabbt ser jag resultat?", a: "Ofta syns rörelse inom några veckor. Räkna med ungefär tre månader för stabila förbättringar. Du följer utvecklingen i din månadsrapport." },
  { q: "Är jag bunden?", a: "Nej. MapPilot™ är månadsbaserat utan bindningstid och utan startkostnad. Avsluta när du vill." },
  { q: "Tar ni över min Google-profil?", a: "Nej. Profilen är och förblir din. Du lägger till oss som förvaltare och kan ta bort åtkomsten när du vill." },
  { q: "Vad är skillnaden mot LaunchMap™ och Omdömesmaskinen?", a: "LaunchMap™ är en engångsoptimering och Omdömesmaskinen sköter recensionerna. MapPilot™ innehåller båda, plus arbetet varje vecka som håller dig kvar i toppen." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://leadone.online/tjanster/mappilot/#service",
      "name": "MapPilot™",
      "description": "Löpande förvaltning av Google-företagsprofil: veckovisa inlägg, bilder, recensionshantering och månatliga rankingrapporter, byggt på LaunchMap™ och Omdömesmaskinen.",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "url": "https://leadone.online/tjanster/mappilot/",
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
      "@id": "https://leadone.online/tjanster/mappilot/#faq",
      "mainEntity": faqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    },
  ],
};

export default function MapPilotPage() {
  const cases = getAllCaseStudies().filter(
    (cs) => cs.slug === "angelique-hud-kropp" || cs.slug === "hjeronymus-salongen" || cs.slug === "zvizzer-bilvard" || cs.slug === "rs-bilvard"
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
        cta="Kom igång"
      />
      <main className="bg-[#08080A] pt-[72px]">

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
                  Done-for-you lokal SEO
                </p>
                <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#F4F4F5] mb-5">
                  Din Google-ranking på <em className="not-italic text-accent">autopilot</em>.
                </h1>
                <p className="text-[17px] text-zinc-400 leading-relaxed mb-7 max-w-[46ch]">
                  MapPilot™ jobbar med din Google-profil varje vecka – nya inlägg, bilder, recensioner och svar – så att du fortsätter klättra på Google Maps medan du driver företaget.
                </p>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {["Vi gör allt åt dig", "Körs automatiskt varje vecka", "Månadsrapport på din ranking"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[14px] text-zinc-300">
                      <Check size={14} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>

                <a href={BOOKING_URL}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                  Se var du rankar – gratis
                  <ArrowRight size={15} weight="bold" aria-hidden="true" />
                </a>
                <p className="mt-4 text-[13px] text-zinc-600">
                  {PRICE.replace("/mån", "")} kr/mån · Ingen startkostnad · Avsluta när du vill
                </p>
              </div>

              <div>
                <ActivityFeed />
                <p className="text-center text-[11px] text-zinc-600 mt-4">Exempel på en vecka.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Varför det spelar roll ────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
              Google belönar företag som är <em className="not-italic text-accent">aktiva</em>.
            </h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-10">
              Din ranking är inget du fixar en gång. Profiler som får nya inlägg, bilder och recensioner varje vecka klättrar. Profiler som står still glider nedåt, medan de aktiva konkurrenterna tar samtalen. Alla vet det. Ingen hinner göra det varje vecka. Så vi gör det.
            </p>
            <TrendChart />
          </div>
        </section>

        {/* ── 3. Så fungerar det ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Tre dagars uppstart. Sedan är du på <em className="not-italic text-accent">autopilot</em>.
              </h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <div
                className="hidden md:block absolute top-[22px] left-[16.5%] right-[16.5%] h-px"
                style={{ background: "var(--border)" }}
                aria-hidden="true"
              />
              {[
                { n: "01", title: "Gratis rankinganalys", desc: "15 minuter. Vi visar var du syns idag och vad som håller dig tillbaka." },
                { n: "02", title: "Vi sätter upp allt", desc: "Profilen optimeras, du listas i 50+ kataloger och recensionssystemet kopplas in. Klart inom tre dagar." },
                { n: "03", title: "MapPilot™ jobbar varje vecka", desc: "Inlägg, bilder, recensioner och svar, automatiskt. Du får en sammanfattning varje vecka och en rankingrapport varje månad." },
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
                Din del: ge oss åtkomst till din Google-profil. Det är allt.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3b. Löpande konkurrentjämförelse ──────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
                MapPilot™ slutar aldrig <em className="not-italic text-accent">jämföra</em>.
              </h2>
              <p className="text-[15px] text-zinc-400 leading-relaxed max-w-[56ch] mx-auto">
                Varje vecka ser systemet vilka konkurrenter som rankar över dig och exakt vad deras profiler gör som din inte gör – fler bilder, nyare recensioner, en kategori du saknar. Det är inte en engångsanalys. Profilen justeras löpande utifrån vad som faktiskt flyttar dig förbi dem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Ser vad konkurrenterna gör", desc: "Vi analyserar de profiler som rankar över dig och identifierar exakt vad som skiljer er åt." },
                { title: "Föreslår nästa steg", desc: "Systemet prioriterar vad som ger störst effekt just nu – inte en generisk checklista." },
                { title: "Justerar varje vecka", desc: "Inget sätts upp en gång och glöms. Profilen flyttas framåt kontinuerligt, i takt med marknaden." },
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
                  Riktiga kunder. Riktiga <em className="not-italic text-accent">siffror</em>.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1300px] mx-auto mb-4">
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
                <a href="/resultat" className="inline-flex items-center gap-2 text-[14px] font-mono" style={{ color: "var(--accent)" }}>
                  Se alla case studies
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        )}

        <ReviewWidget />

        {/* ── 5. Månadsrapporten ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-center">
              <div>
                <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
                  Du ser exakt vad som <em className="not-italic text-accent">händer</em>.
                </h2>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  Varje månad mäter vi din placering i ett rutnät över hela ditt område, kvarter för kvarter. Du ser var du ligger topp tre, var du tappar och vilka konkurrenter som tar platserna. Vi mäter också hur du syns när någon frågar ChatGPT eller Gemini om tips.
                </p>
              </div>
              <div>
                <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <RankingHeatmap />
                </div>
                <p className="text-[11px] text-zinc-600 mt-3 text-center">
                  Illustration. Din rapport bygger på dina egna sökord och ditt område.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Pris ───────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <div className="rounded-2xl p-8 lg:p-10" style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#0A0A0D" }}>
              <div className="text-center mb-10">
                <p className="text-[12px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: "var(--accent)" }}>MapPilot™</p>
                <span className="font-mono text-[3rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{PRICE}</span>
                <p className="text-[13px] text-zinc-500 mt-2">Ingen startkostnad · Ingen bindningstid</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { h: "Din Google-profil", items: ["Komplett optimering", "Inlägg och erbjudanden varje vecka", "Bilder och video", "Frågor & svar", "Kategori- och konkurrentanalys"] },
                  { h: "Recensioner", items: ["Automatiska förfrågningar via sms och e-post", "Svar på alla recensioner", "Varning vid dåliga omdömen", "Bästa recensionerna blir inlägg"] },
                  { h: "Synlighet och rapporter", items: ["50+ kataloglistningar", "Publicering på sociala medier", "Månatlig heatmap-rapport", "AI-synlighet", "Veckosammanfattning", "Bevakning av profilen"] },
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
                Kom igång
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <p className="mt-4 text-[12px] text-zinc-600 text-center">
                Bara metoder som följer Googles riktlinjer. Din profil och dina recensioner är alltid dina.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Vanliga <em className="not-italic text-accent">frågor</em>
              </h2>
            </div>
            <Faq faqs={faqs} />
          </div>
        </section>

        {/* ── 8. Avslutande CTA ────────────────────────────────────────── */}
        <section id="mp-final-cta" className="relative py-24 lg:py-32 border-t text-center overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.14) 0%, transparent 60%)" }} />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-10">
            <h2 className="text-[2.2rem] md:text-[3.2rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5 leading-tight">
              Var rankar <em className="not-italic text-accent">du</em> idag?
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[44ch] mx-auto mb-9 leading-relaxed">
              15 minuter. Gratis. Vi visar var du syns, var konkurrenterna tar dina kunder och vad MapPilot™ skulle göra först.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Boka gratis analys
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

        <FooterSection />
      </main>
    </>
  );
}
