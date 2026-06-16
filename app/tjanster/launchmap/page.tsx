import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { Check, ArrowRight, Phone, MapPin, MagnifyingGlass, Link, FileText, ChartBar, Star } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "LaunchMap™ — Dominera Google Maps På 30 Dagar | LeadOne",
  description: "Vi optimerar din Google Business Profile, listar dig på 50+ kataloger och ger dig en heatmap som visar var du rankar. Engångspris 5.999 kr.",
  alternates: { canonical: "https://www.leadone.online/tjanster/launchmap" },
};

const BOOKING_URL = "/boka";

const stats = [
  { value: "46%",   label: "Av alla Google-sökningar är lokala",        sub: "Dina kunder söker redan — frågan är om de hittar dig." },
  { value: "Sida 2", label: "= Ingen Ser Dig",                          sub: "93% av alla klick sker på sida 1. Konkurrenterna tar alla." },
  { value: "Topp 3", label: "Får 70% Av Alla Klick",                    sub: "Local Pack — de tre som syns på Maps — tar lejonparten." },
  { value: "72%",    label: "Väljer Företaget Med Flest Recensioner",    sub: "Även om du rankar högt förlorar du utan recensioner." },
];

const features = [
  { icon: MapPin,          title: "Komplett GBP-Optimering",      desc: "Kategorier, tjänster, öppettider, bilder, sökord och beskrivning — allt justerat för maximal synlighet." },
  { icon: MagnifyingGlass, title: "Sökordsanalys",                 desc: "Vi identifierar exakt vilka sökfraser som driver kunder i din bransch och ditt område." },
  { icon: Link,            title: "50+ Kataloglistningar",         desc: "Perplexity, ChatGPT, Claude, Bing, Apple Maps, Gula Sidorna och 45+ till — din närvaro sprids överallt." },
  { icon: FileText,        title: "Hemsida-Koppling",              desc: "Vi kopplar din GBP till hemsidan för starkare lokal auktoritet och bättre ranking." },
  { icon: ChartBar,        title: "Heatmap-Rankingkarta",          desc: "En visuell karta som visar exakt var du rankar — och var du inte gör det. Tydlig baseline." },
  { icon: Star,            title: "Leveransrapport",               desc: "Detaljerad rapport med alla genomförda åtgärder, rankingförändringar och rekommendationer framåt." },
];

const faqs = [
  { q: "Hur lång tid tar det innan jag ser resultat?",          a: "LaunchMap™ levereras på 30 dagar. Rankingförbättringar syns typiskt inom 60–90 dagar." },
  { q: "Fungerar det för alla branscher?",                      a: "Ja — hantverkare, restauranger, tandläkare, städfirmor, fysioterapeuter och alla tjänsteföretag med lokal kundkrets." },
  { q: "Vad är de 50+ sajterna ni listar mig på?",              a: "Google, Bing, Apple Maps, Gula Sidorna, Reco, Trustpilot, Hitta.se, Eniro, ChatGPT plugins, Perplexity, Claude och 40+ till." },
  { q: "Vad är en heatmap-rankingkarta?",                       a: "En visuell karta uppdelad i rutnät som visar din ranking på varje geografisk punkt i ditt område — du ser exakt var du syns och var du inte gör det." },
  { q: "Behöver jag en hemsida?",                               a: "Nej, men vi rekommenderar det. Utan hemsida är kopplingen svagare — vi kan fortfarande optimera din GBP fullt ut." },
  { q: "Är detta en engångskostnad eller löpande?",             a: "Engångskostnad på 5.999 kr. Inga dolda avgifter, ingen bindningstid. Vill du ha löpande underhåll erbjuder vi Komplett Paket." },
];

export default function LaunchMapPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          {/* Clean atmospheric lighting — no competing background image */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {/* Warm gold stage light from the right, illuminating the product */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 45%, rgba(201,168,76,0.11) 0%, transparent 55%)" }} />
            {/* Cooler secondary fill from top-left */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)" }} />
            {/* Ground fade */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #08080A 0%, transparent 18%)" }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center py-24 lg:py-32">

              {/* ── Left: copy ── */}
              <div>
                {/* Eyebrow with left accent line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "var(--accent)", opacity: 0.6 }} />
                  <p className="text-[11px] uppercase tracking-[0.22em] font-mono" style={{ color: "var(--accent)" }}>
                    Lokal Synlighet · Google Maps · AI-Sökmotorer
                  </p>
                </div>

                <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.06] tracking-[-0.03em] text-[#F4F4F5] mb-6">
                  Dominera{" "}
                  <span className="text-accent">Google Maps</span>
                  <br />
                  på 30 dagar
                </h1>

                <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 max-w-[42ch]">
                  Vi optimerar din Google Business Profile, listar dig på 50+ kataloger och ger dig en heatmap som visar exakt var du rankar.
                </p>

                {/* Price — large, editorial */}
                <div className="mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[3.4rem] font-bold tracking-[-0.04em] leading-none" style={{ color: "var(--accent)" }}>
                      5.999 kr
                    </span>
                    <span className="text-[15px] text-zinc-500">engångsbetalning</span>
                  </div>
                  <p className="text-[12px] text-zinc-600">Levereras på 30 dagar · Ingen bindningstid</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={BOOKING_URL}
                    className="flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                    Boka Gratis Genomgång
                    <ArrowRight size={15} weight="bold" aria-hidden="true" />
                  </a>
                  <a href="tel:0764796630"
                    className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 text-zinc-300 font-medium text-[15px] hover:border-white/20 hover:text-white transition-all duration-200">
                    <Phone size={14} aria-hidden="true" />
                    076-479 66 30
                  </a>
                </div>

                {/* Trust strip */}
                <div className="flex items-center gap-5 mt-8">
                  {["43+ kunder", "30 dagars leverans", "Engångsbetalning"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[12px] text-zinc-600">
                      <div className="w-1 h-1 rounded-full" style={{ background: "var(--accent)", opacity: 0.5 }} aria-hidden="true" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: GBP phone — product showcase ── */}
              <div className="relative hidden lg:flex items-center justify-center">
                {/* Diffuse gold glow behind the product */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)" }} />

                {/* Product image */}
                <div className="relative w-full rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow: "0 0 0 1px rgba(201,168,76,0.18), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)",
                  }}>
                  <Image
                    src="/assets/lm-gbp.png"
                    alt="Google Business Profile med guldanalytik och statistik"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="50vw"
                  />
                  {/* Inner vignette to blend edges */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,10,0.45) 100%)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 70%, rgba(8,8,10,0.2) 100%)" }} />
                </div>

                {/* Floating badge — refined */}
                <div className="absolute -bottom-5 left-6 rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "rgba(10,10,13,0.97)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <MapPin size={13} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#F4F4F5] leading-none mb-0.5">Local Pack</p>
                    <p className="text-[10.5px] text-zinc-500">Topp 3 på Google Maps</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Problem / stats ────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Problemet</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Om Du Inte Syns <span className="text-accent">Förlorar Du Kunder</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={s.value} className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{ background: i % 2 === 0 ? "#0F0F12" : "var(--surface-elevated)", border: "1px solid var(--border)" }}>
                  <span className="font-mono text-[2.2rem] font-bold tracking-[-0.03em] leading-none" style={{ color: "var(--accent)" }}>{s.value}</span>
                  <p className="text-[14px] font-semibold text-[#F4F4F5] leading-snug">{s.label}</p>
                  <p className="text-[12px] text-zinc-500 leading-snug">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Så Fungerar Det</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Från Osynlig Till <span className="text-accent">Local Pack</span> På 30 Dagar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}>
              {[
                { n: "01", title: "Vi Analyserar", desc: "Vi kartlägger din nuvarande ranking, konkurrenternas position och identifierar de sökord som driver kunder i din bransch och stad.", img: "/assets/lm-strategy.png", imgAlt: "Sökordsanalys och strategikarta" },
                { n: "02", title: "Vi Optimerar",  desc: "Komplett GBP-optimering: kategorier, attribut, Q&A, och sökordsjusterade texter — allt som Google behöver för att ranka dig högt.", img: null, imgAlt: "" },
                { n: "03", title: "Vi Listar Dig", desc: "Vi listar dig på 50+ kataloger — Perplexity, ChatGPT, Claude, Bing, Apple Maps, Gula Sidorna. Dina kunder hittar dig överallt.", img: "/assets/lm-globe.jpg", imgAlt: "Global digital närvaro" },
              ].map((step, i) => (
                <div key={step.n} className="relative p-8 lg:p-10 flex flex-col gap-5 overflow-hidden"
                  style={{ background: i === 1 ? "var(--surface-elevated)" : "var(--surface)", borderRight: i < 2 ? "1px solid var(--border)" : undefined }}>
                  {step.img && (
                    <>
                      <Image src={step.img} alt="" fill className="object-cover opacity-[0.12]" sizes="33vw" aria-hidden="true" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,10,0.85) 0%, transparent 60%)" }} />
                    </>
                  )}
                  <div className="relative w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] font-bold"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid rgba(201,168,76,0.3)" }}>
                    {step.n}
                  </div>
                  <div className="relative">
                    <h3 className="font-bold text-[18px] text-[#F4F4F5] mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-[14px] text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 border-t overflow-hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image src="/assets/lm-globe.jpg" alt="" fill className="object-cover object-left opacity-[0.07]" sizes="100vw" aria-hidden="true" />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Allt Ingår</p>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                  Vad Du Får För <span className="text-accent">5.999 kr</span>
                </h2>
                <a href={BOOKING_URL}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#08080A] font-semibold text-[14px] hover:bg-[#D4B87A] transition-colors duration-200 self-start lg:self-auto shrink-0">
                  Kom Igång
                  <ArrowRight size={13} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl p-6 flex flex-col gap-4"
                    style={{ background: i % 3 === 1 ? "var(--surface-elevated)" : "#0F0F12", border: "1px solid var(--border)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-dim)" }}>
                      <Icon size={17} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5 tracking-tight">{f.title}</h3>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Case study ────────────────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 border-t overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image src="/assets/lm-growth.jpg" alt="" fill className="object-cover opacity-[0.08]" sizes="100vw" aria-hidden="true" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 50%)" }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-12 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Verkligt Exempel</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Hur Lisa Tog Sig Till <span className="text-accent">Topp 3</span>
              </h2>
            </div>

            <div className="max-w-[860px] mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
              {/* Quote */}
              <div className="p-8 lg:p-10 relative overflow-hidden" style={{ background: "#0A0A0D" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.06) 0%, transparent 55%)" }} aria-hidden="true" />
                <div className="relative">
                  <div className="text-[3.5rem] leading-none mb-2" style={{ fontFamily: "var(--font-cormorant)", color: "var(--accent)", opacity: 0.3 }} aria-hidden="true">"</div>
                  <blockquote className="text-[1.2rem] md:text-[1.4rem] text-zinc-200 leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}>
                    Vi gick från osynliga till topp 3 på Google Maps.
                    Lisa, 36 år, städföretag i Sverige
                  </blockquote>
                  <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[56ch]">
                    Vi hade 4 recensioner och syntes inte alls för sökningar. Konkurrenterna tog alla kunder. Efter LaunchMap™ låg vi på plats 2 för vår viktigaste sökning på bara 6 veckor. Vi fick 3 nya kunder den veckan — direkt från Google Maps.
                  </p>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 divide-x divide-white/5" style={{ borderTop: "1px solid var(--border)", background: "var(--surface-elevated)" }}>
                {[
                  { before: "#12", after: "#2",    label: 'Ranking för primär sökning' },
                  { before: "0",   after: "+340%", label: "Profilvisningar / månad"     },
                  { before: "—",   after: "+15%",  label: "Högre priser efter synlighet" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center justify-center gap-1 py-6 px-4 text-center">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[11px] text-zinc-600 line-through">{s.before}</span>
                      <span className="text-zinc-700 text-[10px]">→</span>
                      <span className="font-mono text-[1.1rem] font-bold" style={{ color: "var(--accent)" }}>{s.after}</span>
                    </div>
                    <p className="text-[11px] text-zinc-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing CTA ───────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
            <div className="rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(201,168,76,0.25)", background: "#0A0A0D" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>LaunchMap™ — Engångsbetalning</span>
              </div>
              <div className="mb-1">
                <span className="font-mono text-[3.2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>5.999 kr</span>
              </div>
              <p className="text-[13px] text-zinc-500 mb-6">Engångsbetalning · Levereras på 30 dagar · Inga dolda kostnader</p>
              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {["Komplett GBP-optimering", "Sökordsanalys för ditt område", "50+ kataloglistningar", "Hemsida-koppling", "Heatmap-rankingkarta", "Leveransrapport"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] text-zinc-300">
                    <Check size={13} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
                Boka Gratis Genomgång (15 min)
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </a>
              <p className="mt-3 text-[12px] text-zinc-600">Inget åtagande. Vi svarar inom en arbetsdag.</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Vanliga Frågor</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Frågor Om LaunchMap™
              </h2>
            </div>
            <LaunchMapFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t text-center" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Nästa Steg</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Boka En Kostnadsfri
              <br />
              <span className="text-accent">Genomgång</span>
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[40ch] mx-auto mb-8 leading-relaxed">
              15 minuter. Vi visar var du rankar idag och vad LaunchMap™ kan göra för ditt företag.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Boka Din Kostnadsfria Genomgång
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[13px] text-zinc-600">
              Eller ring direkt:{" "}
              <a href="tel:0764796630" className="hover:text-zinc-400 transition-colors">076-479 66 30</a>
            </p>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}

/* ── Inline accordion FAQ ─────────────────────────────────────────────────── */
function LaunchMapFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
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
