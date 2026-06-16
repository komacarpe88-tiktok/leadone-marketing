import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Phone, Check, Star, MapPin, MagnifyingGlass, Link, FileText, ChartBar, DeviceMobile, Robot, Globe, Megaphone, Bell } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Komplett Paket — Synlighet + Recensioner I Ett | LeadOne",
  description: "LaunchMap™ bygger din synlighet på Google. Omdömesmaskinen fyller profilen med 5-stjärniga recensioner. 3.499 kr/mån, ingen startkostnad.",
  alternates: { canonical: "https://www.leadone.online/tjanster/komplett" },
};

const BOOKING_URL = "/boka";

const launchmapFeatures = [
  "Komplett Google Business Profile-optimering",
  "Rätt kategorier, tjänster, beskrivningar och sökord",
  "50+ kataloglistningar — Perplexity, ChatGPT, Apple Maps, Bing",
  "Hemsida-koppling för starkare lokal närvaro",
  "Sökordsanalys för ditt område",
  "Heatmap-rankingkarta",
];

const omdomesFeatures = [
  "Automatiska SMS till kunder med direktlänk",
  "AI-driven svar på alla recensioner",
  "Publicering på hemsida via widget",
  "Automatisk social media-publicering",
  "Notis vid negativ recension",
  "Dashboard & månadsrapport",
];

const faqs = [
  { q: "Är jag bunden till ett kontrakt?",          a: "Nej. Komplett Paket är månadsbaserat utan bindningstid. Avsluta när du vill — dina recensioner och rankningar är alltid dina." },
  { q: "Måste jag köpa båda tjänsterna separat?",   a: "Nej. Komplett Paket ger dig allt i ett — och du slipper betala 5.999 kr för LaunchMap™ separat." },
  { q: "Hur snabbt ser jag resultat?",               a: "LaunchMap™ levereras på 30 dagar. Recensioner börjar komma in direkt. Rankingförbättringar syns typiskt inom 60–90 dagar." },
  { q: "Fungerar det för min bransch?",              a: "Vi arbetar med hantverkare, restauranger, tandläkare, städföretag, fysioterapeuter och alla tjänsteföretag med lokal kundkrets." },
];

export default function KomplettPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 80% 45%, rgba(201,168,76,0.10) 0%, transparent 55%)" }} />
            <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)" }} />
            <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top, #08080A 0%, transparent 18%)" }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center py-24 lg:py-32">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background:"var(--accent)",opacity:0.6 }} />
                  <span className="text-[11px] uppercase tracking-[0.22em] font-mono" style={{ color:"var(--accent)" }}>
                    LaunchMap™ + Omdömesmaskinen
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)" }}>
                  <Star size={11} weight="fill" style={{ color:"var(--accent)" }} aria-hidden="true" />
                  <span className="text-[12px] font-semibold" style={{ color:"var(--accent)" }}>Bäst Värde</span>
                </div>
                <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.06] tracking-[-0.03em] text-[#F4F4F5] mb-6">
                  Synlighet + Recensioner
                  <br /><span className="text-accent">I Ett Paket</span>
                </h1>
                <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 max-w-[42ch]">
                  LaunchMap™ bygger din synlighet på Google. Omdömesmaskinen fyller profilen med 5-stjärniga recensioner. Tillsammans är de oövervinnerliga.
                </p>
                <div className="mb-8 pb-8 border-b" style={{ borderColor:"rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[3.4rem] font-bold tracking-[-0.04em] leading-none" style={{ color:"var(--accent)" }}>3.499 kr</span>
                    <span className="text-[15px] text-zinc-500">per månad</span>
                  </div>
                  <p className="text-[12px] text-zinc-600">Ingen startkostnad · Spara 5.999 kr · Avsluta när du vill</p>
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
                <div className="flex items-center gap-5 mt-8">
                  {["Spara 5.999 kr","43+ kunder","Avsluta när du vill"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[12px] text-zinc-600">
                      <div className="w-1 h-1 rounded-full" style={{ background:"var(--accent)",opacity:0.5 }} aria-hidden="true" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: gold bar chart — rising bars = combined growth */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"
                  style={{ background:"radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 65%)" }} />
                <div className="relative w-full rounded-2xl overflow-hidden"
                  style={{ aspectRatio:"16/10", boxShadow:"0 0 0 1px rgba(201,168,76,0.18), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)" }}>
                  <Image src="/assets/gold-chart.jpg" alt="Stigande guldstaplar — tillväxt med Komplett Paket"
                    fill className="object-cover object-center" priority sizes="50vw" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom, transparent 55%, rgba(8,8,10,0.5) 100%)" }} />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to left, transparent 70%, rgba(8,8,10,0.2) 100%)" }} />
                </div>
                <div className="absolute -bottom-5 left-6 rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background:"rgba(10,10,13,0.97)",border:"1px solid rgba(201,168,76,0.3)",backdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background:"var(--accent-dim)" }}>
                    <Star size={13} weight="fill" style={{ color:"var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#F4F4F5] leading-none mb-0.5">Synlighet + Recensioner</p>
                    <p className="text-[10.5px] text-zinc-500">Dubbel effekt — ett pris</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── What's included ───────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Allt Ingår</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Två System. <span className="text-accent">Ett Pris.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* LaunchMap */}
              <div className="rounded-2xl p-7 lg:p-8" style={{ background: "#0A0A0D", border: "1px solid rgba(201,168,76,0.25)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-dim)" }}>
                    <MapPin size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-[16px] text-[#F4F4F5] tracking-tight">LaunchMap™</p>
                    <p className="text-[12px] text-zinc-500">GBP-optimering på 30 dagar</p>
                  </div>
                  <span className="ml-auto text-[11px] font-mono font-semibold px-2 py-1 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>Ingår ✓</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {launchmapFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-zinc-400 leading-snug">
                      <Check size={12} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[12px] text-zinc-600 line-through">Normalt: 5.999 kr engångskostnad</p>
              </div>

              {/* Omdömesmaskinen */}
              <div className="rounded-2xl p-7 lg:p-8" style={{ background: "#0A0A0D", border: "1px solid rgba(201,168,76,0.25)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-dim)" }}>
                    <Star size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-[16px] text-[#F4F4F5] tracking-tight">Omdömesmaskinen</p>
                    <p className="text-[12px] text-zinc-500">Request · Response · Repurpose</p>
                  </div>
                  <span className="ml-auto text-[11px] font-mono font-semibold px-2 py-1 rounded" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>Ingår ✓</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {omdomesFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-zinc-400 leading-snug">
                      <Check size={12} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[12px] text-zinc-600">Löpande · 1.499 kr/mån om separat</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Value callout ─────────────────────────────────────────────── */}
        <section className="py-20 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: "5.999 kr", label: "Sparad startkostnad", sub: "LaunchMap™ ingår — ingen engångsavgift" },
                { value: "Dubbel",   label: "Effekt när de kombineras", sub: "Synlighet + recensioner multiplicerar varandra" },
                { value: "0",        label: "Bindningstid", sub: "Avsluta månadsvis när du vill" },
              ].map((s, i) => (
                <div key={s.value} className="rounded-2xl p-7 flex flex-col gap-2 text-center"
                  style={{ background: i === 1 ? "var(--surface-elevated)" : "var(--surface)", border: i === 1 ? "1px solid rgba(201,168,76,0.3)" : "1px solid var(--border)" }}>
                  <span className="font-mono text-[2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{s.value}</span>
                  <p className="text-[14px] font-semibold text-[#F4F4F5]">{s.label}</p>
                  <p className="text-[12px] text-zinc-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case study ───────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-12 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Verkligt Resultat</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Mikael Gick Från <span className="text-accent">#8 Till #2</span>
              </h2>
            </div>
            <div className="max-w-[860px] mx-auto rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="p-8 lg:p-10 relative overflow-hidden" style={{ background: "#0A0A0D" }}>
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
                <div className="relative">
                  <div className="text-[3.5rem] leading-none mb-2" style={{ fontFamily: "var(--font-cormorant)", color: "var(--accent)", opacity: 0.3 }} aria-hidden="true">"</div>
                  <blockquote className="text-[1.2rem] md:text-[1.4rem] text-zinc-200 leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}>
                    Synlighet utan recensioner funkade inte. Nu har jag båda.
                  </blockquote>
                  <p className="text-[13px] text-zinc-500">Mikael, 45 år, elektriker i Sverige</p>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/5" style={{ borderTop: "1px solid var(--border)", background: "var(--surface-elevated)" }}>
                {[
                  { before: "#8", after: "#2",    label: "Ranking för primär sökning" },
                  { before: "6",  after: "40",    label: "Recensioner på 3 månader" },
                  { before: "—",  after: "+20%",  label: "Högre priser efter synlighet" },
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

        {/* ── Pricing card ──────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
            <div className="rounded-2xl p-8 lg:p-12" style={{ border: "1px solid rgba(201,168,76,0.35)", background: "#0A0A0D" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>Komplett Paket — Bäst Värde</span>
              </div>
              <div className="mb-1">
                <span className="font-mono text-[3.2rem] font-bold tracking-[-0.03em]" style={{ color: "var(--accent)" }}>3.499 kr</span>
                <span className="text-[14px] text-zinc-500 ml-2">/månad</span>
              </div>
              <p className="text-[13px] text-zinc-500 mb-6">Ingen startkostnad · Avsluta när du vill · Spara 5.999 kr</p>
              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {["Allt från LaunchMap™", "Allt från Omdömesmaskinen", "Ingen startkostnad för LaunchMap™", "Prioriterad support", "Avsluta när du vill"].map((f) => (
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

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Vanliga Frågor</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">Frågor Om Komplett Paket</h2>
            </div>
            <div className="flex flex-col max-w-[860px]">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-t" style={{ borderColor: "var(--border)" }}>
                  <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none text-[15px] font-medium text-zinc-300 hover:text-[#F4F4F5] transition-colors duration-200">
                    {faq.q}
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 group-open:text-accent transition-colors duration-200"
                      style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)", color: "rgb(113,113,122)" }}>
                      <span className="text-[14px] leading-none group-open:hidden">+</span>
                      <span className="text-[14px] leading-none hidden group-open:block">−</span>
                    </span>
                  </summary>
                  <p className="pb-5 text-[14px] text-zinc-400 leading-relaxed max-w-[65ch]">{faq.a}</p>
                </details>
              ))}
              <div className="border-t" style={{ borderColor: "var(--border)" }} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t text-center" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Nästa Steg</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Boka En Kostnadsfri<br /><span className="text-accent">Genomgång</span>
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[38ch] mx-auto mb-8 leading-relaxed">
              15 minuter. Vi visar exakt vad Komplett Paket kan göra för ditt företag — utan säljpitch.
            </p>
            <a href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-[#08080A] font-semibold text-[16px] hover:bg-[#D4B87A] active:scale-[0.98] transition-all duration-200">
              Boka Din Kostnadsfria Genomgång
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <p className="mt-4 text-[13px] text-zinc-600">
              Eller ring direkt: <a href="tel:0764796630" className="hover:text-zinc-400 transition-colors">076-479 66 30</a>
            </p>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
