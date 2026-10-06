import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import ReviewWidget from "@/components/ReviewWidget";
import { getAllCaseStudies } from "@/lib/case-studies";
import FeatureTabs from "./FeatureTabs";
import {
  ArrowRight, Phone, Check, Star, MapPin,
  ShieldCheck, Robot,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "MapPilot™ — Google Maps-optimering på autopilot | LeadOne",
  description: "Vi sköter din Google-företagsprofil varje vecka – inlägg, bilder, recensioner och rankingrapporter – så att du syns i topp på Google Maps. 3.999 kr/mån, ingen bindningstid.",
  keywords: "Google Maps optimering, Google Business Profile förvaltning, lokal SEO löpande, AI-synlighet, heatmap ranking, recensionshantering, Helsingborg",
  alternates: { canonical: "https://leadone.online/tjanster/mappilot/" },
  openGraph: {
    title: "MapPilot™ — Google Maps-optimering på autopilot",
    description: "Vi sköter din Google-företagsprofil varje vecka – inlägg, bilder, recensioner och rankingrapporter – så att du syns i topp på Google Maps.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/tjanster/mappilot/",
  },
};

const BOOKING_URL = "/boka";
const PRICE = "3.999 kr";

const faqs = [
  { q: "Är jag bunden till ett kontrakt?", a: "Nej. MapPilot™ är månadsbaserat utan bindningstid. Avsluta när du vill – din profil och dina recensioner är alltid dina." },
  { q: "Hur snabbt ser jag resultat?", a: "Grundoptimeringen görs under första månaden och recensionerna börjar komma in direkt. Ofta syns rörelse i rankingen inom några veckor, men räkna med ungefär tre månader för stabila förbättringar. Du ser utvecklingen i rapporten." },
  { q: "Måste jag kunna något om SEO?", a: "Nej. Vi sköter analys, inställningar och det löpande arbetet. Du behöver bara ge oss åtkomst till profilen." },
  { q: "Tar ni över min Google-profil?", a: "Nej, profilen är och förblir din. Du lägger till oss som förvaltare och kan ta bort åtkomsten när du vill." },
  { q: "Kan jag godkänna inläggen innan de publiceras?", a: "Ja. Du kan välja att godkänna innehållet själv innan det går ut, eller låta det publiceras automatiskt." },
  { q: "Fungerar det med mitt boknings- eller kassasystem?", a: "I många fall, ja. Recensionsförfrågningarna kan kopplas till ditt befintliga system, så att varje ny kund automatiskt får en förfrågan efter besöket. Vi går igenom vad som fungerar för just ditt system i analysen." },
  { q: "Vad händer om jag får en dålig recension?", a: "Den flaggas direkt och du får besked. Vi svarar sakligt och professionellt, och du kan alltid välja att svara själv istället." },
  { q: "Vad skiljer MapPilot™ från LaunchMap™ och Omdömesmaskinen?", a: "LaunchMap™ är en engångsoptimering och Omdömesmaskinen sköter dina recensioner. MapPilot™ innehåller båda, plus det löpande arbetet varje vecka som håller dig kvar i toppen." },
  { q: "Behöver jag en ny hemsida?", a: "Inte för att komma igång. Men hemsidan påverkar hur Google och AI-tjänster förstår ditt företag, så i analysen ser vi även om din hemsida håller dig tillbaka." },
  { q: "Fungerar det för min bransch?", a: "Det fungerar för lokala tjänsteföretag där kunderna söker på Google – till exempel bilvård, verkstäder, skönhet och hantverkare. I den gratis analysen ser vi om det finns utrymme för dig att klättra." },
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

/* ── Illustrative geo-grid visual (SVG/CSS, no real business data) ───────── */
// Rank-tier colors mirror the real case-study heatmap (components/GeoGridCarousel.tsx)
// so a ranking map reads the same way everywhere on the site: green = strong,
// yellow/orange = mid, red = weak. This is the one deliberate exception to the
// site's gold-only accent rule, scoped to ranking-grid visuals specifically.
function rankCellStyle(rank: number): { bg: string; text: string } {
  if (rank <= 2)  return { bg: "#166534", text: "#4ade80" };
  if (rank <= 3)  return { bg: "#14532d", text: "#86efac" };
  if (rank <= 5)  return { bg: "#713f12", text: "#fde68a" };
  if (rank <= 10) return { bg: "#7c2d12", text: "#fdba74" };
  return            { bg: "#450a0a", text: "#f87171" };
}

function GeoGridVisual() {
  // 5×4 grid; rank fades outward from a "top 3" core, purely for show.
  const rows = 4, cols = 5;
  const cells = Array.from({ length: rows * cols }, (_, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const dist = Math.hypot(r - 1.3, c - 2);
    if (dist < 1) return { rank: 1, label: "1" };
    if (dist < 1.6) return { rank: 2, label: "2" };
    if (dist < 2.2) return { rank: 3, label: "3" };
    if (dist < 2.9) return { rank: 7, label: "7" };
    return { rank: 15, label: "12+" };
  });

  return (
    <div
      role="img"
      aria-label="Illustration av ett rankingrutnät — grönt representerar topp 3, gult mittenplaceringar och rött svag synlighet i Google Maps"
      style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "6px" }}
    >
      {cells.map((cell, i) => {
        const s = rankCellStyle(cell.rank);
        return (
          <div
            key={i}
            aria-hidden="true"
            style={{
              aspectRatio: "1",
              borderRadius: "10px",
              background: s.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "11px",
              color: s.text,
            }}
          >
            {cell.label}
          </div>
        );
      })}
    </div>
  );
}

export default function MapPilotPage() {
  const cases = getAllCaseStudies().filter(
    (cs) => cs.slug === "angelique-hud-kropp" || cs.slug === "hjeronymus-salongen"
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">

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
                    LaunchMap™ + Omdömesmaskinen + löpande förvaltning
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>Bäst Värde</span>
                </div>

                <h1 className="text-[2.8rem] md:text-[3.6rem] lg:text-[4.2rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#F4F4F5] mb-5">
                  MapPilot™ — Google Maps på <em className="not-italic text-accent">autopilot</em>
                </h1>

                <p className="text-[18px] font-medium text-zinc-200 mb-5 max-w-[46ch]">
                  För lokala företag som vill synas i Google Maps varje vecka — utan att själva lägga tid på det.
                </p>

                <p className="text-[16px] text-zinc-400 leading-relaxed mb-10 max-w-[46ch]">
                  Vi sköter din Google-företagsprofil löpande – inlägg, bilder, recensioner och kategorier – med ett AI-drivet system som jämför dig mot de företag som rankar högst i ditt område.
                </p>

                <div className="mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[3.2rem] font-bold tracking-[-0.04em] leading-none" style={{ color: "var(--accent)" }}>
                      {PRICE}
                    </span>
                    <span className="text-[15px] text-zinc-500">per månad</span>
                  </div>
                  <p className="text-[12px] text-zinc-600">Ingen startkostnad · Ingen bindningstid · Avsluta när du vill</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={BOOKING_URL}
                    className="flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                    Boka Gratis Analys
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
                    <p className="text-[12px] font-semibold text-[#F4F4F5] leading-none mb-0.5">Rutnätsmätning</p>
                    <p className="text-[10.5px] text-zinc-500">Illustration, inte faktisk data</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Så fungerar det ───────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Så Fungerar Det</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
                Från osynlig till <em className="not-italic text-accent">vald</em>
              </h2>
              <p className="text-[15px] text-zinc-400 max-w-[48ch] mx-auto leading-relaxed">
                En oskött Google-profil tappar platser i kartan varje månad. MapPilot™ vänder det i fyra steg.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}>
              {[
                { n: "01", title: "Analys", desc: "Vi mäter var du rankar i ett rutnät över hela ditt område och jämför din profil mot de företag som ligger topp tre." },
                { n: "02", title: "Grundoptimering", desc: "Hela LaunchMap™ ingår: kategorier, tjänster, beskrivning och sökord ställs in efter vad som faktiskt rankar i din bransch." },
                { n: "03", title: "Löpande arbete", desc: "Varje vecka publiceras inlägg och bilder, recensioner besvaras och nya samlas in. Systemet lär sig av vad som fungerar." },
                { n: "04", title: "Uppföljning", desc: "Du får en veckosammanfattning och en månatlig rankingrapport som visar hur din synlighet utvecklas." },
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

        {/* ── 3. Allt som ingår (flikar, en grupp åt gången) ───────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Allt som påverkar din plats i <em className="not-italic text-accent">kartan</em>
              </h2>
            </div>
            <FeatureTabs />
          </div>
        </section>

        {/* ── 4. Rankingrapporten ──────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Rapportering</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-6">
                  Se din synlighet <em className="not-italic text-accent">kvarter</em> för kvarter
                </h2>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  Google Maps visar olika resultat beroende på var kunden står. Därför mäter vi din placering i ett rutnät av punkter över hela ditt område – inte bara från din egen adress. Du ser direkt var du ligger topp tre, var du tappar och hur det förändras månad för månad. Rapporten visar också vilka konkurrenter som tar platserna där du inte syns ännu – och om de är på väg upp eller ner.
                </p>
              </div>
              <div>
                <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <GeoGridVisual />
                </div>
                <p className="text-[11px] text-zinc-600 mt-3 text-center">Exempelbild. Din analys bygger på dina egna sökord och ditt eget område.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. AI-sök ─────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-10 text-center">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--accent-dim)" }}>
              <Robot size={22} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-5">
              Fler och fler frågar AI om <em className="not-italic text-accent">rekommendationer</em>
            </h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed">
              När någon frågar ChatGPT, Gemini eller Googles AI-läge efter "bästa [tjänst] i [stad]" hämtas svaren från källor som din Google-profil, kataloger och recensioner. En aktiv, välskött Google-närvaro ger dig bättre förutsättningar att bli nämnd. Ingen kan garantera AI-rekommendationer – men en tom profil blir sällan rekommenderad. Därför mäter vi också hur du syns i AI-tjänsterna, så att du ser utvecklingen svart på vitt.
            </p>
          </div>
        </section>

        {/* ── 6. Du vs. oss ─────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Du behöver inte kunna <em className="not-italic text-accent">SEO</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[860px] mx-auto">
              <div className="rounded-2xl p-7" style={{ background: "var(--surface-elevated)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4" style={{ color: "var(--accent)" }}>Det här gör vi</p>
                <ul className="flex flex-col gap-3">
                  {["Analys och strategi", "Inställning av profilen", "Veckovis innehåll", "Recensionshantering", "Rapportering och uppföljning", "Att hålla allt inom Googles riktlinjer"].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                      <Check size={14} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-[12px] font-mono uppercase tracking-[0.15em] mb-4 text-zinc-500">Det här gör du</p>
                <ul className="flex flex-col gap-3">
                  {["Ger oss åtkomst till profilen", "Skickar gärna bilder från jobb", "Driver ditt företag"].map((f) => (
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

        {/* ── 7. Riktiga resultat ──────────────────────────────────────── */}
        {cases.length > 0 && (
          <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className="mb-12 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Verkliga resultat</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                  Riktiga kunder, riktiga <em className="not-italic text-accent">mätningar</em>
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
                <a href="/resultat" className="inline-flex items-center gap-2 text-[14px] font-mono" style={{ color: "var(--accent)" }}>
                  Se alla case studies
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        )}

        <ReviewWidget />

        {/* ── 8. Tryggt och inom reglerna ──────────────────────────────── */}
        <section className="py-20 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
            <div className="rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row gap-6 items-start"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                <ShieldCheck size={20} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-[17px] text-[#F4F4F5] mb-2">Bara metoder som Google godkänner</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Vi använder enbart white-hat-metoder och följer Googles riktlinjer för företagsprofiler. Inga falska recensioner, inga påhittade adresser, inga kategorier för tjänster du inte erbjuder. Det skyddar din profil mot avstängning – och ger resultat som håller.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Pris ──────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
            <div className="rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(201,168,76,0.35)", background: "#0A0A0D" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>MapPilot™ — Bäst Värde</span>
              </div>
              <div className="mb-1">
                <span className="font-mono text-[3.2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{PRICE}</span>
                <span className="text-[14px] text-zinc-500 ml-2">/månad</span>
              </div>
              <p className="text-[13px] text-zinc-500 mb-6">Ingen startkostnad · Avsluta när du vill</p>
              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {[
                  "Allt från LaunchMap™",
                  "Allt från Omdömesmaskinen",
                  "Inlägg, bilder och videor varje vecka",
                  "Publicering på sociala medier",
                  "Månatliga heatmap-rapporter",
                  "AI-synlighetsrapport",
                  "Veckosammanfattning",
                  "Prioriterad support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <Check size={13} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                Kom Igång Nu
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <p className="mt-3 text-[12px] text-zinc-600">Inget åtagande. Vi svarar inom en arbetsdag.</p>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Vanliga Frågor</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Frågor om <em className="not-italic text-accent">MapPilot™</em>
              </h2>
            </div>
            <MapPilotFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── 11. Avslutande CTA ───────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Nästa Steg</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Var rankar <em className="not-italic text-accent">du</em> idag?
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[42ch] mx-auto mb-8 leading-relaxed">
              15 minuter. Vi gör en gratis rankinganalys av ditt företag och visar var du syns, var konkurrenterna tar platserna och vad som behöver göras först.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Boka Din Kostnadsfria Analys
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[13px] text-zinc-600">
              Eller ring direkt: <a href="tel:+46763912181" className="hover:text-zinc-400 transition-colors">+46 763 91 21 81</a>
            </p>
          </div>
        </section>

        <FooterSection />
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
