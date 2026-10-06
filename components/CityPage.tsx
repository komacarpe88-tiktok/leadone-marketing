import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import CtaSection from "@/components/CtaSection";
import { getAllCaseStudies } from "@/lib/case-studies";
import type { City } from "@/lib/cities";

/**
 * Shared layout for the /seo-<city>/ landing pages.
 *
 * The structure is shared but the substance is not: market intro, competitive
 * picture, districts, search behaviour, industries and part of the FAQ all come
 * from the per-city record in lib/cities.ts. Case studies render only where
 * LeadOne has real named clients (`city.hasLocalCases`) — no invented proof.
 */

const BASE = "https://leadone.online";

/** FAQ entries that are genuinely the same regardless of city. */
function sharedFaqs(city: City) {
  return [
    {
      q: `Hur lång tid tar det innan ${city.companyNoun} ser resultat?`,
      a: "De flesta kunder ser mätbara förbättringar i Google Maps-synlighet inom 30–90 dagar. Organisk sökning tar längre tid — 3–6 månader är ett realistiskt spann för tydliga positionsförbättringar.",
    },
    {
      q: `Vad kostar lokal SEO i ${city.name}?`,
      a: "LeadOne erbjuder LaunchMap™ som en engångsoptimering från 5 999 kr, och MapPilot™ som ett löpande abonnemang från 3 999 kr/mån — utan bindningstid.",
    },
    {
      q: `Behöver mitt företag ha fysisk adress i ${city.name}?`,
      a: `För att ranka i Google Maps krävs en verifierad Google Business Profile med en adress i det område du vill synas. Vi hjälper dig avgöra vilka geografiska sökord som är realistiska utifrån din profil i ${city.name}.`,
    },
    {
      q: "Varför syns min hemsida inte fastän min Google-profil rankar bra?",
      a: "Google Maps och den organiska listan är två separata rankingsystem. En stark företagsprofil kan ligga i topp 3 i kartan samtidigt som hemsidan inte rankar alls, eftersom organisk placering styrs av sidans innehåll, tekniska uppbyggnad och länkprofil.",
    },
  ];
}

export function buildCityFaqs(city: City) {
  return [...sharedFaqs(city), ...city.faqs];
}

export function buildCityJsonLd(city: City) {
  const url = `${BASE}/seo-${city.slug}/`;
  const title = `SEO-byrå ${city.name} | Lokal SEO & Google Maps | LeadOne`;
  const faqs = buildCityFaqs(city);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: `LeadOne är en SEO-byrå i ${city.name} som hjälper företag synas i topp 3 på Google Maps och i lokal sökning.`,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#organization` },
        inLanguage: "sv-SE",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startsida", item: `${BASE}/` },
          { "@type": "ListItem", position: 2, name: `SEO-byrå ${city.name}`, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `SEO-byrå ${city.name} — lokal SEO`,
        description: `Lokal SEO och Google Maps-optimering för företag i ${city.name}. Inkluderar GBP-optimering, sökordsanalys, lokala citeringar, on-page SEO och recensionshantering.`,
        url,
        provider: { "@id": `${BASE}/#organization` },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "Country", name: "Sweden" },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

export default function CityPage({ city }: { city: City }) {
  const faqs = buildCityFaqs(city);
  const cases = city.hasLocalCases
    ? getAllCaseStudies().filter((cs) => cs.city === city.name)
    : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCityJsonLd(city)) }}
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
                <li className="text-zinc-400">SEO-byrå {city.name}</li>
              </ol>
            </nav>

            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              SEO-byrå · {city.name}
            </p>
            <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.06] max-w-[22ch] mb-6">
              SEO-byrå i {city.name} som får ditt företag att synas
            </h1>
            <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[56ch] mb-10">
              Nio av tio kunder väljer ett av de tre första resultaten på Google. Vi är en SEO-byrå som hjälper företag i {city.name} att ta en av de platserna — och hålla den.
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

        {/* ── Sökmarknaden i staden ────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Sökmarknaden
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Så ser sökmarknaden ut i {city.name}
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-5">
                  {city.marketIntro}
                </p>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  {city.searchBehaviour}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { n: "46 %", label: "av alla Google-sökningar är lokala", src: "BrightLocal" },
                  { n: "78 %", label: "av lokala mobilsökningar leder till ett besök inom 24 h", src: "Google" },
                  { n: "Topp 3", label: "i Google Maps fångar majoriteten av alla klick i Local Pack", src: "Moz Local" },
                  { n: city.region, label: `${city.name} ligger i ${city.region} — vårt upptagningsområde`, src: "LeadOne" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-6"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <p className="text-[1.6rem] font-bold mb-2" style={{ color: "var(--accent)" }}>{s.n}</p>
                    <p className="text-[13px] text-zinc-400 leading-relaxed mb-2">{s.label}</p>
                    <p className="text-[11px] font-mono text-zinc-600">Källa: {s.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Konkurrensbild + stadsdelar ──────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Konkurrensbild
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Vem konkurrerar du med i {city.name}?
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  {city.competition}
                </p>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">
                  Områden vi mäter synlighet i
                </h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed mb-6">
                  Google Maps rankar utifrån var sökaren står. Därför mäter vi inte en enda position utan synligheten över ett rutnät av mätpunkter i {city.name} — det visar var du faller bort geografiskt.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {city.districts.map((d) => (
                    <li
                      key={d}
                      className="px-4 py-2 rounded-full text-[13px] font-mono text-zinc-400"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Branscher ────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Branscher
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[30ch] mb-6">
              Branscher vi arbetar med i {city.name}
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[62ch] mb-12">
              Konkurrensen på Google skiljer sig kraftigt mellan branscher, även inom samma stad. Därför börjar varje uppdrag med att kartlägga hur just din marknad ser ut lokalt i {city.name}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.industries.map((item) => (
                <div
                  key={item.h}
                  className="rounded-2xl p-7"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">{item.h}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vad vi gör ───────────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Vad vi gör
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[28ch] mb-12">
              Lokal SEO i {city.name} — steg för steg
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  h: "Nulägesanalys och geo-mätning",
                  p: `Vi mäter var du syns idag över ett rutnät av mätpunkter i ${city.name}, inte bara på en position. Det visar var synligheten faller bort geografiskt.`,
                },
                {
                  n: "02",
                  h: "Sökordskartläggning",
                  p: "Vilka sökningar leder faktiskt till kunder? Vi skiljer på volym och köpintention och prioriterar de termer där en placering betyder intäkt.",
                },
                {
                  n: "03",
                  h: "Google Business Profile",
                  p: "Kategorier, tjänster, attribut, bilder och öppettider. Profilen är den starkaste faktorn för Local Pack och den som oftast är ofullständig.",
                },
                {
                  n: "04",
                  h: "Teknisk och on-page SEO",
                  p: "Sidstruktur, titlar, intern länkning, schema-markup och laddtid. Det här gör att din hemsida — inte bara kartprofilen — blir möjlig att ranka.",
                },
                {
                  n: "05",
                  h: "Citeringar och recensioner",
                  p: `Konsekvent företagsinformation i svenska register, relevanta lokala länkar i ${city.region}, och ett system som ger nya recensioner löpande.`,
                },
                {
                  n: "06",
                  h: "Uppföljning och justering",
                  p: "Månatlig mätning mot utgångsläget. Det som fungerar skalas upp, det som inte gör det byts ut. Du ser samma data som vi ser.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl p-7"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-[13px] font-mono font-bold block mb-3" style={{ color: "var(--accent)" }} aria-hidden="true">
                    {step.n}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-2">{step.h}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{step.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Varför det lönar sig här + förväntningar ─────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Affärsnyttan
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Varför lokal SEO lönar sig i {city.name}
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  {city.whyItMatters}
                </p>
              </div>
              <div
                className="rounded-2xl p-8"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-4">
                  Vad du realistiskt kan förvänta dig
                </h3>
                <p className="text-[15px] text-zinc-400 leading-relaxed">
                  {city.expectations}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Vanliga misstag lokalt ───────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Vanliga misstag
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[30ch] mb-6">
              Tre misstag vi ser oftast i {city.name}
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[62ch] mb-12">
              Det här är de återkommande felen på företagsprofiler i {city.name} — och de är alla åtgärdbara utan att bygga om något från grunden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.mistakes.map((m, i) => (
                <div
                  key={m.h}
                  className="rounded-2xl p-7"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-[13px] font-mono font-bold block mb-3" style={{ color: "var(--accent)" }} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">{m.h}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{m.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case studies (endast där vi har lokala kunder) ───── */}
        {cases.length > 0 && (
          <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                Verkliga resultat
              </p>
              <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-4">
                Kundresultat i {city.name}
              </h2>
              <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[52ch] mb-12">
                Inga konstruerade siffror. Här är vad som hände när företag i {city.name} implementerade LeadOnes system.
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
                  Frågor om SEO i {city.name}
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

        {/* ── Andra städer (intern länkning) ───────────────────── */}
        <section className="py-16 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Fler orter
            </p>
            <h2 className="text-[1.4rem] font-bold tracking-[-0.02em] text-[#F4F4F5] mb-6">
              Lokal SEO i andra svenska städer
            </h2>
            <ul className="flex flex-wrap gap-3">
              {otherCityLinks(city).map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/seo-${c.slug}/`}
                    className="inline-block px-5 py-2.5 rounded-full text-[14px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    SEO {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaSection />
        <FooterSection />
      </main>
    </>
  );
}

/** All city links except the current one, plus the original Helsingborg page. */
function otherCityLinks(current: City) {
  const all = [
    { slug: "helsingborg", name: "Helsingborg" },
    { slug: "stockholm", name: "Stockholm" },
    { slug: "goteborg", name: "Göteborg" },
    { slug: "malmo", name: "Malmö" },
    { slug: "uppsala", name: "Uppsala" },
    { slug: "linkoping", name: "Linköping" },
    { slug: "orebro", name: "Örebro" },
    { slug: "jonkoping", name: "Jönköping" },
  ];
  return all.filter((c) => c.slug !== current.slug);
}
