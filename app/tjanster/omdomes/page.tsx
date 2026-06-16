import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import {
  ArrowRight, Phone, Check, Star,
  DeviceMobile, Robot, Globe, Megaphone, Bell, ChartBar,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Omdömesmaskinen — Recensioner Som Jobbar Dygnet Runt | LeadOne",
  description: "Samla in nya recensioner automatiskt. Svara direkt. Sprid dina bästa omdömen på hemsida och sociala medier. 1.499 kr/månad.",
  alternates: { canonical: "https://www.leadone.online/tjanster/omdomes" },
};

const BOOKING_URL = "/boka";

const problemStats = [
  { value: "72%",  label: "Väljer Företaget Med Flest Recensioner",  sub: "Inte det billigaste — inte det närmaste. Det med flest omdömen." },
  { value: "89%",  label: "Läser Recensioner Innan De Kontaktar Dig", sub: "Det är redan beslutat innan de ens ringer dig." },
  { value: "+15%", label: "Högre Priser Med Fler Recensioner",        sub: "Kunder betalar mer till företag de litar på. Förtroende kostar ingenting." },
];

const pillars = [
  {
    tag:   "Request",
    title: "Samla in Nya Recensioner",
    desc:  "3 dagar efter avslutat jobb får kunden ett SMS med direktlänk till Google-recensionen. Du behöver göra ingenting. Kunden ger dig betyg i ett klick, varje gång.",
  },
  {
    tag:   "Response",
    title: "Svara På Alla Recensioner",
    desc:  "Varje recension — positiv eller negativ — besvaras automatiskt och professionellt. Google älskar aktiva profiler. Kunder litar mer på ett företag som svarar. Du slipper göra det själv.",
  },
  {
    tag:   "Repurpose",
    title: "Sprid Till Hemsida & Sociala Medier",
    desc:  "Dina bästa recensioner publiceras automatiskt på din hemsida och sociala medier. Socialt proof som fungerar för dig dygnet runt — utan att du lyfter ett finger.",
  },
];

const features = [
  { icon: DeviceMobile, title: "Automatiska SMS-Förfrågningar",   desc: "3 dagar efter avslutat jobb får kunden ett SMS med direktlänk. Tidpunkten är perfekt timing. Kunden göra det i ett klick, vart de är." },
  { icon: Robot,        title: "AI-Driven Svar",                   desc: "Varje recension besvaras automatiskt med personligt, professionellt svar. Positiva bekräftas varmt. Negativa hanteras lugnt och professionellt." },
  { icon: Globe,        title: "Hemsida-Widget",                   desc: "Dina senaste Google-recensioner visas automatiskt direkt på hemsidan — och uppdateras i realtid utan att du gör något." },
  { icon: Megaphone,    title: "Social Media-Publicering",         desc: "Dina bästa recensioner förvandlas till snygga inlägg och publiceras automatiskt på Facebook och Instagram." },
  { icon: Bell,         title: "Negativ Recension? Notis Direkt",  desc: "Får du ett lågt betyg? Du notifieras direkt så du kan agera innan det skadar ditt rykte. Aldrig mer en blind fläck." },
  { icon: ChartBar,     title: "Dashboard & Rapporter",            desc: "Komplett översikt: antal recensioner, snittbetyg, svarstid och publiceringshistorik. Allt samlat på ett ställe." },
];

const faqs = [
  { q: "Är det lagligt att be kunder om recensioner?",        a: "Ja, fullt lagligt och GDPR-kompatibelt. Du ber befintliga kunder om feedback — det är standard affärspraxis." },
  { q: "Hur fungerar de automatiska svaren?",                 a: "Vår AI genererar kontextuellt svar baserat på recensionens innehåll och betyg. Du kan anpassa tonaliteten efter ditt varumärke." },
  { q: "Vad händer om kunden lämnar en dålig recension?",    a: "Du notifieras omedelbart via SMS. Systemet genererar ett empatiskt, professionellt svar. Du kan granska och justera innan publicering." },
  { q: "Hur publiceras recensioner på sociala medier?",       a: "Recensioner med 4-5 stjärnor väljs automatiskt ut, förvandlas till ett snyggt grafiskt inlägg och publiceras på dina kopplade kanaler." },
  { q: "Kan jag välja vilka kunder som får SMS?",             a: "Ja. Du kan exkludera specifika kunder eller kundkategorier. Full kontroll — du väljer vem som ingår i flödet." },
  { q: "Hur snabbt ser jag resultat?",                        a: "De första recensionerna brukar komma in inom 2 veckor. Kunder med aktiva kundlistor ser ofta 10+ recensioner den första månaden." },
];

export default function OmdomesPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          {/* Atmospheric lighting — warm glow from the right where the image is */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 45%, rgba(201,168,76,0.10) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 15% 20%, rgba(201,168,76,0.04) 0%, transparent 40%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #08080A 0%, transparent 18%)" }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center py-24 lg:py-32">

              {/* ── Left: copy ── */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "var(--accent)", opacity: 0.6 }} />
                  <div className="flex items-center gap-2">
                    {["Request", "Response", "Repurpose"].map((s, i) => (
                      <span key={s} className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>{s}</span>
                        {i < 2 && <span className="text-zinc-700">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>Omdömesmaskinen</span>
                </div>

                <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.06] tracking-[-0.03em] text-[#F4F4F5] mb-6">
                  Recensioner Som
                  <br />
                  Jobbar För Dig{" "}
                  <span className="text-accent">Dygnet Runt</span>
                </h1>

                <p className="text-[17px] text-zinc-400 leading-relaxed mb-10 max-w-[42ch]">
                  Samla in nya recensioner automatiskt. Svara direkt. Sprid dina bästa omdömen på hemsida och sociala medier. I ett system.
                </p>

                <div className="mb-8 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[3.4rem] font-bold tracking-[-0.04em] leading-none" style={{ color: "var(--accent)" }}>1.499 kr</span>
                    <span className="text-[15px] text-zinc-500">per månad</span>
                  </div>
                  <p className="text-[12px] text-zinc-600">Ingen startkostnad · Avsluta när du vill</p>
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
                  {["Automatiskt system", "Ingen manual hantering", "Avsluta när du vill"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[12px] text-zinc-600">
                      <div className="w-1 h-1 rounded-full" style={{ background: "var(--accent)", opacity: 0.5 }} aria-hidden="true" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: review hero image ── */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.10) 0%, transparent 65%)" }} />

                <div className="relative w-full rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "16/10",
                    boxShadow: "0 0 0 1px rgba(201,168,76,0.18), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,168,76,0.08)",
                  }}>
                  <Image
                    src="/assets/omdomes-hero.png"
                    alt="Google-recensioner som flödar mot en Google Maps-nål"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,10,0.45) 100%)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 70%, rgba(8,8,10,0.2) 100%)" }} />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 left-6 rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{
                    background: "rgba(10,10,13,0.97)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--accent-dim)" }}>
                    <Star size={13} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#F4F4F5] leading-none mb-0.5">Google Reviews</p>
                    <p className="text-[10.5px] text-zinc-500">Automatiskt · Dygnet runt</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Problem / stats ───────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
                style={{ color: "var(--accent)" }}>Problemet</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Recensioner <span className="text-accent">Avgör Vem Kunder Väljer</span>
              </h2>
              <p className="mt-3 text-[15px] text-zinc-500">
                Fler recensioner = mer förtroende = högre priser. Så enkelt är det.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {problemStats.map((s, i) => (
                <div key={s.value} className="rounded-2xl p-7 flex flex-col gap-3"
                  style={{
                    background: i === 1 ? "var(--surface-elevated)" : "#0F0F12",
                    border: "1px solid var(--border)",
                  }}>
                  <span className="font-mono text-[2.6rem] font-bold tracking-[-0.03em] leading-none"
                    style={{ color: "var(--accent)" }}>{s.value}</span>
                  <p className="text-[15px] font-semibold text-[#F4F4F5] leading-snug">{s.label}</p>
                  <p className="text-[13px] text-zinc-500 leading-snug">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 pillars ─────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
                style={{ color: "var(--accent)" }}>The System I Ett</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                <span className="text-accent">Request</span>
                <span className="text-zinc-700 mx-3">·</span>
                <span className="text-accent">Response</span>
                <span className="text-zinc-700 mx-3">·</span>
                <span className="text-accent">Repurpose</span>
              </h2>
              <p className="mt-3 text-[15px] text-zinc-500 max-w-[44ch] mx-auto">
                Omdömesmaskinen hanterar hela recensionscykeln — från inspelning till spridning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillars.map((p, i) => {
                const bgImg = ["/assets/omdomes-hero.png", "/assets/ai-chip.jpg", "/assets/gold-chart.jpg"][i];
                return (
                <div key={p.tag} className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden"
                  style={{
                    background: i === 1 ? "var(--surface-elevated)" : "var(--surface)",
                    border: i === 1 ? "1px solid rgba(201,168,76,0.3)" : "1px solid var(--border)",
                  }}>
                  <Image src={bgImg} alt="" fill className="object-cover opacity-[0.10]" sizes="33vw" aria-hidden="true" />
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                    style={{ background: "linear-gradient(to top, rgba(8,8,10,0.85) 0%, transparent 50%)" }} />
                  <div className="relative z-10">
                    <span className="inline-block text-[10.5px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-4 font-mono"
                      style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                      {p.tag}
                    </span>
                    <h3 className="font-bold text-[18px] text-[#F4F4F5] mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-[14px] text-zinc-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── What you get ─────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
                  style={{ color: "var(--accent)" }}>Allt Ingår</p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                  Vad Du Får För <span className="text-accent">1.499 kr/Månad</span>
                </h2>
              </div>
              <a href={BOOKING_URL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#08080A] font-semibold text-[14px] hover:bg-[#D4B87A] transition-colors duration-200 self-start lg:self-auto shrink-0">
                Kom Igång
                <ArrowRight size={13} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl p-6 flex flex-col gap-4"
                    style={{
                      background: i % 3 === 1 ? "var(--surface-elevated)" : "#0F0F12",
                      border: "1px solid var(--border)",
                    }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--accent-dim)" }}>
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

        {/* ── Case study ───────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-12 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
                style={{ color: "var(--accent)" }}>Verkligt Exempel</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Hur Johan På Rent & Fint <span className="text-accent">Byggde Förtroende</span>
              </h2>
            </div>

            <div className="max-w-[860px] mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="p-8 lg:p-10 relative overflow-hidden" style={{ background: "#0A0A0D" }}>
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
                <div className="relative">
                  <div className="text-[3.5rem] leading-none mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", color: "var(--accent)", opacity: 0.3 }}
                    aria-hidden="true">"</div>
                  <blockquote className="text-[1.2rem] md:text-[1.4rem] text-zinc-200 leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}>
                    Recensionerna samlas, besvaras och sprids — utan att jag gör något.
                  </blockquote>
                  <p className="text-[13px] text-zinc-500 mb-5">Johan, 41 år, städföretag i Sverige</p>
                  <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[56ch]">
                    Jag hade 4 recensioner och visste inte att de spelade så stor roll. Konkurrenterna hade 52 och tog alla jobb. Med Omdömesmaskinen sköter det sig självt. Systemet skickar SMS automatiskt. Svarar varje recension. Och varje vecka dyker mina bästa recensioner upp på Facebook utan att jag lyfter ett finger. Nu har jag 38 recensioner — jag har höjt priserna med 15% och kunderna betalar glad — de säger att de litar mer på mig nu.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-white/5"
                style={{ borderTop: "1px solid var(--border)", background: "var(--surface-elevated)" }}>
                {[
                  { before: "4",  after: "38",   label: "Recensioner på 3 månader" },
                  { before: "—",  after: "+15%",  label: "Högre priser efter 2 månader" },
                  { before: "∞",  after: "0 tim", label: "Tid spenderat på recensioner" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center justify-center gap-1 py-6 px-4 text-center">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[11px] text-zinc-600 line-through">{s.before}</span>
                      <span className="text-zinc-700 text-[10px]">→</span>
                      <span className="font-mono text-[1.1rem] font-bold"
                        style={{ color: "var(--accent)" }}>{s.after}</span>
                    </div>
                    <p className="text-[11px] text-zinc-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing CTA ──────────────────────────────────────────────── */}
        <section className="py-24 lg:py-28 border-t"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
            <div className="rounded-2xl p-8 lg:p-12"
              style={{ border: "1px solid rgba(201,168,76,0.25)", background: "#0A0A0D" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <Star size={11} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <span className="text-[12px] font-semibold" style={{ color: "var(--accent)" }}>
                  Omdömesmaskinen — Månadsabonnemang
                </span>
              </div>
              <div className="mb-1">
                <span className="font-mono text-[3.2rem] font-bold tracking-[-0.03em]"
                  style={{ color: "var(--accent)" }}>1.499 kr</span>
                <span className="text-[14px] text-zinc-500 ml-2">/månad</span>
              </div>
              <p className="text-[13px] text-zinc-500 mb-6">Ingen startkostnad · Avsluta när du vill · Dina recensioner är alltid dina</p>
              <ul className="flex flex-col gap-2.5 mb-8 text-left">
                {[
                  "Automatiska SMS-förfrågningar till kunder",
                  "AI-driven svar på alla recensioner",
                  "Publicering på hemsida via widget",
                  "Automatisk social media-publicering",
                  "Notis vid negativ recension",
                  "Dashboard & månadsrapport",
                ].map((f) => (
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
              <p className="mt-3 text-[12px] text-zinc-600">
                Inget åtagande. Vi svarar inom en arbetsdag.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
                style={{ color: "var(--accent)" }}>Vanliga Frågor</p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5]">
                Frågor Om Omdömesmaskinen
              </h2>
            </div>
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
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 border-t text-center relative overflow-hidden"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)" }} />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4"
              style={{ color: "var(--accent)" }}>Nästa Steg</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.4rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-4 leading-tight">
              Redo För <span className="text-accent">Fler Recensioner?</span>
            </h2>
            <p className="text-[16px] text-zinc-400 max-w-[38ch] mx-auto mb-8 leading-relaxed">
              En enkel genomgång och du är klar att köra i dag.
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
