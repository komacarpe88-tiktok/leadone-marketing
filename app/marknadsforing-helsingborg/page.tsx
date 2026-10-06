import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import CtaSection from "@/components/CtaSection";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Marknadsföring Helsingborg | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Helsingborg med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-helsingborg/",
  },
  openGraph: {
    title: "Marknadsföring Helsingborg | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Helsingborg med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-helsingborg/",
  },
};

// Single source of truth for the FAQ — rendered visibly below and emitted as
// FAQPage schema, so the two can never drift apart.
const faqs = [
  {
    q: "Erbjuder ni all digital marknadsföring, eller bara SEO?",
    a: "Vi är specialister på lokal digital synlighet — Google Maps, Google Business Profile, lokal SEO och recensionshantering. Vi bygger inte hemsidor, sköter inte sociala medier och kör inte annonser åt kunder. Det är ett medvetet val: vi har sett för många byråer lova allt och leverera medelmåttigt på det mesta. Om du behöver LinkedIn-marknadsföring, företagsfilm eller betald annonsering är det inte oss du ska anlita.",
  },
  {
    q: "Varför bara lokal synlighet och inte bredare marknadsföring?",
    a: "För att det är där de flesta Helsingborgsföretag faktiskt förlorar kunder. En hantverkare, tandläkare eller restaurang vinner eller förlorar affärer i Google Maps och lokal sökning, inte på LinkedIn. Genom att specialisera oss helt på det området kan vi gå djupare än en byrå som ska hantera sju olika discipliner samtidigt.",
  },
  {
    q: "Hur lång tid tar det innan ett Helsingborgsföretag ser resultat?",
    a: "De flesta kunder ser mätbara förbättringar i Google Maps-synlighet inom 30–90 dagar. Organisk sökning tar längre tid — 3–6 månader är ett realistiskt spann för tydliga positionsförbättringar.",
  },
  {
    q: "Vad kostar digital marknadsföring hos LeadOne?",
    a: "LaunchMap™ är en engångsoptimering från 5 999 kr. MapPilot™ är ett löpande abonnemang från 3 999 kr/mån utan bindningstid. Inga dolda kostnader utöver det.",
  },
  {
    q: "Kan ni rekommendera någon för webb, sociala medier eller annonsering?",
    a: "Ja, om du frågar. Vi har inget intresse av att sälja tjänster vi inte är bäst i landet på. Om ditt företag behöver en bredare digital strategi utöver lokal synlighet pratar vi gärna om vad som faktiskt behövs, även om svaret är en annan leverantör för den delen.",
  },
  {
    q: "Arbetar ni bara med företag i Helsingborg?",
    a: "Helsingborg är vår hemmamarknad, men vi arbetar med lokala företag i hela Sverige — bland annat i Malmö, Göteborg och Jönköping. Arbetssättet är detsamma; det som skiljer är konkurrensbilden på respektive ort.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://leadone.online/marknadsforing-helsingborg/#faq",
      "mainEntity": faqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    },
    {
      "@type": "WebPage",
      "@id": "https://leadone.online/marknadsforing-helsingborg/#webpage",
      "url": "https://leadone.online/marknadsforing-helsingborg/",
      "name": "Marknadsföring Helsingborg | Lokal digital synlighet | LeadOne",
      "description":
        "LeadOne erbjuder digital marknadsföring i Helsingborg med fokus på lokal synlighet: Google Maps, GBP-optimering, recensioner och lokal SEO.",
      "isPartOf": { "@id": "https://leadone.online/#website" },
      "about": { "@id": "https://leadone.online/#organization" },
      "inLanguage": "sv-SE",
      "breadcrumb": { "@id": "https://leadone.online/marknadsforing-helsingborg/#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://leadone.online/marknadsforing-helsingborg/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startsida", "item": "https://leadone.online/" },
        { "@type": "ListItem", "position": 2, "name": "Marknadsföring Helsingborg", "item": "https://leadone.online/marknadsforing-helsingborg/" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://leadone.online/marknadsforing-helsingborg/#service",
      "name": "Digital marknadsföring Helsingborg — lokal synlighet",
      "description":
        "Digital marknadsföring i Helsingborg med fokus på Google Maps-optimering, Google Business Profile, lokala citeringar, on-page SEO och recensionshantering.",
      "url": "https://leadone.online/marknadsforing-helsingborg/",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": {
        "@type": "City",
        "name": "Helsingborg",
        "containedInPlace": { "@type": "Country", "name": "Sweden" },
      },
    },
  ],
};

export default function MarknadsforingHelsingborgPage() {
  const cases = getAllCaseStudies().filter(
    (cs) => cs.slug === "hjeronymus-salongen" || cs.slug === "angelique-hud-kropp" || cs.slug === "rs-bilvard"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="bg-[#08080A] min-h-screen pt-[72px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <nav aria-label="Brödsmulor" className="mb-8">
              <ol className="flex items-center gap-2 text-[12px] font-mono text-zinc-600">
                <li><a href="/" className="hover:text-zinc-400 transition-colors">Startsida</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-zinc-400">Marknadsföring Helsingborg</li>
              </ol>
            </nav>

            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Digital marknadsföring · Helsingborg
            </p>
            <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.06] max-w-[24ch] mb-6">
              Marknadsföring i Helsingborg — fokuserad på det som faktiskt ger kunder
            </h1>
            <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[58ch] mb-10">
              Vi är inte en fullservicebyrå som gör lite av allt. LeadOne är specialister på lokal digital synlighet — Google Maps, Google Business Profile, recensioner och lokal SEO — för företag i Helsingborg.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/boka"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200"
                style={{ background: "var(--accent)", color: "#08080A" }}
              >
                Boka gratis analys
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><polyline points="8,3 12,7 8,11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="tel:+46763912181"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
                style={{ border: "1px solid var(--border)" }}
              >
                +46 763 91 21 81
              </a>
            </div>
          </div>
        </section>

        {/* ── Varför smalt fokus ───────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Varför vi inte gör allt
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Digital marknadsföring är brett. Vi har valt att bli djupa på en del av det.
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-5">
                  Sök på "marknadsföring Helsingborg" och du hittar byråer som erbjuder LinkedIn, webb, film, Google Ads och sociala medier — allt under samma tak. Det kan vara rätt val för vissa företag. Det är inte vad vi gör.
                </p>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  LeadOne fokuserar helt på lokal digital synlighet: att företag i Helsingborg syns när kunder faktiskt söker efter dem — i Google Maps, i Local Pack och i lokal organisk sökning. Vi tror att en byrå som gör en sak riktigt bra ger bättre resultat än en som gör sju saker godtyckligt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { n: "46 %", label: "av alla Google-sökningar är lokala", src: "BrightLocal" },
                  { n: "78 %", label: "av lokala mobilsökningar leder till ett besök inom 24 h", src: "Google" },
                  { n: "Topp 3", label: "i Google Maps fångar majoriteten av alla klick i Local Pack", src: "Moz Local" },
                  { n: "5×", label: "fler klick för position 1 jämfört med position 5 i lokalt sök", src: "BrightLocal" },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl p-6"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-[2.4rem] font-bold font-mono tracking-[-0.04em] leading-none mb-2" style={{ color: "var(--accent)" }}>
                      {s.n}
                    </p>
                    <p className="text-[14px] text-zinc-300 leading-snug mb-2">{s.label}</p>
                    <p className="text-[10px] text-zinc-600 font-mono">Källa: {s.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Vad vi gör ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Vårt fokus
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[28ch] mb-12">
              Det här är marknadsföringen vi faktiskt levererar i Helsingborg
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="22" viewBox="0 0 14 18" fill="none" aria-hidden="true">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Google Business Profile-optimering</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Din GBP-profil är det viktigaste instrumentet för lokal synlighet. Vi optimerar kategorier, attribut, tjänstebeskrivningar, öppettider och bildstrategi för Helsingborgsmarknaden.
                </p>
                <a href="/tjanster/launchmap" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  LaunchMap™ →
                </a>
              </div>

              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="var(--accent)" strokeWidth="1.6"/>
                    <path d="M6 10h8M10 6v8" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Lokala citeringar och länkbygge</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Google verifierar din plats och trovärdighet genom hur konsekvent ditt företagsnamn, adress och telefonnummer finns listade i lokala kataloger. Vi bygger och rensar citeringar specifikt för Helsingborg.
                </p>
                <a href="/tjanster/mappilot" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  MapPilot™ →
                </a>
              </div>

              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2l2.4 5h5.1l-4.1 3 1.6 5L10 12l-5 3 1.6-5L2.5 7h5.1z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Recensioner och förtroendesignaler</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Recensioner är den enskilt starkaste förtroendesignalen för lokala kunder. Vi automatiserar förfrågningar, svar och publicering så att recensionsflödet är jämnt snarare än i skurar.
                </p>
                <a href="/tjanster/omdomes" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  Omdömesmaskinen →
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">
                Det vi inte gör — och gärna säger så
              </h3>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                Vi bygger inte hemsidor, sköter inte LinkedIn eller andra sociala medier, producerar inte företagsfilm och kör inte betald annonsering åt kunder. Om det är vad ditt företag behöver finns det bra byråer i Helsingborg som är specialister på just det. Vi är specialister på att få dig att synas där lokala kunder faktiskt letar efter dig.
              </p>
            </div>
          </div>
        </section>

        {/* ── Case studies ─────────────────────────────────────── */}
        {cases.length > 0 && (
          <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                Verkliga resultat
              </p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-4">
                Vad fokuserad lokal marknadsföring faktiskt åstadkommer
              </h2>
              <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[52ch] mb-12">
                Inga konstruerade siffror. Här är vad som hände när lokala företag implementerade LeadOnes system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((cs) => (
                  <div
                    key={cs.slug}
                    className="rounded-2xl p-6 flex flex-col gap-3"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold shrink-0"
                        style={{ background: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                        aria-hidden="true"
                      >
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

              <a
                href="/resultat"
                className="inline-flex items-center gap-2 text-[14px] font-mono mt-8"
                style={{ color: "var(--accent)" }}
              >
                Se alla kundresultat med fullständig data
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><polyline points="8,3 12,7 8,11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </section>
        )}

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Vanliga frågor
                </p>
                <h2 className="text-[2rem] md:text-[2.4rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight">
                  Frågor om marknadsföring i Helsingborg
                </h2>
              </div>
              <dl className="flex flex-col gap-6">
                {faqs.map(({ q, a }) => (
                  <div key={q}>
                    <dt className="text-[15px] font-semibold text-[#F4F4F5] mb-2">{q}</dt>
                    <dd className="text-[14px] text-zinc-400 leading-relaxed">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <CtaSection />
        <FooterSection />
      </main>
    </>
  );
}
