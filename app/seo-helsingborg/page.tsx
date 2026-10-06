import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import CtaSection from "@/components/CtaSection";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "SEO-byrå Helsingborg | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Helsingborg som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citationer. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-helsingborg/",
  },
  openGraph: {
    title: "SEO-byrå Helsingborg | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Helsingborg. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-helsingborg/",
  },
};

// Single source of truth for the FAQ — rendered visibly below and emitted as
// FAQPage schema, so the two can never drift apart.
const faqs = [
  {
    q: "Hur lång tid tar det innan ett Helsingborgsföretag ser resultat?",
    a: "De flesta kunder ser mätbara förbättringar i Google Maps-synlighet inom 30–90 dagar. Organisk sökning tar längre tid — 3–6 månader är ett realistiskt spann för tydliga positionsförbättringar.",
  },
  {
    q: "Vad kostar lokal SEO i Helsingborg?",
    a: "LeadOne erbjuder LaunchMap™ som en engångsoptimering från 5 999 kr, och MapPilot™ som ett löpande abonnemang från 3 999 kr/mån — utan bindningstid.",
  },
  {
    q: "Behöver mitt företag ha fysisk adress i Helsingborg?",
    a: "För att ranka i Google Maps krävs en verifierad Google Business Profile med en address i det område du vill synas. Vi hjälper dig att avgöra vilka geografiska sökord som är realistiska utifrån din profil.",
  },
  {
    q: "Skiljer sig lokal SEO från vanlig SEO?",
    a: "Ja. Lokal SEO fokuserar på att synas i Google Maps och Local Pack — de tre resultat som visas med karta. Det kräver specifika tekniker som GBP-optimering, lokala citationer och recensionshantering som vanlig SEO inte täcker.",
  },
  {
    q: "Vad kostar det att anlita en SEO-byrå i Helsingborg jämfört med Google Ads?",
    a: "Google Ads ger trafik så länge du betalar och slutar samma dag du stänger av. Lokal SEO kostar mer i inledande arbete men fortsätter leverera efter att arbetet är gjort. De flesta lokala företag tjänar på att ha båda: annonser för omedelbar synlighet, SEO för den långsiktiga grunden.",
  },
  {
    q: "Varför syns min hemsida inte fastän min Google-profil rankar bra?",
    a: "Google Maps och den organiska listan är två separata rankingsystem. En stark företagsprofil kan ligga i topp 3 i kartan samtidigt som hemsidan inte rankar alls, eftersom organisk placering styrs av sidans innehåll, tekniska uppbyggnad och länkprofil. Det krävs alltså separat arbete på själva webbplatsen.",
  },
  {
    q: "Arbetar ni bara med företag i Helsingborg?",
    a: "Helsingborg är vår hemmamarknad, men vi arbetar med lokala företag i hela Sverige — bland annat i Malmö, Göteborg och Jönköping. Arbetssättet är detsamma; det som skiljer är konkurrensbilden på respektive ort.",
  },
  {
    q: "Vad händer om jag redan har en byrå som sköter min SEO?",
    a: "Då börjar vi med en oberoende genomgång av vad som faktiskt är gjort och vad det gett för mätbara resultat. Ibland är slutsatsen att befintligt arbete fungerar och bör fortsätta. Vi säger till när så är fallet.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://leadone.online/seo-helsingborg/#faq",
      "mainEntity": faqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      })),
    },
    {
      "@type": "WebPage",
      "@id": "https://leadone.online/seo-helsingborg/#webpage",
      "url": "https://leadone.online/seo-helsingborg/",
      "name": "SEO-byrå Helsingborg | Lokal SEO & Google Maps | LeadOne",
      "description":
        "LeadOne är en SEO-byrå i Helsingborg som hjälper företag synas i topp 3 på Google Maps och i lokal sökning.",
      "isPartOf": { "@id": "https://leadone.online/#website" },
      "about": { "@id": "https://leadone.online/#organization" },
      "inLanguage": "sv-SE",
      "breadcrumb": { "@id": "https://leadone.online/seo-helsingborg/#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://leadone.online/seo-helsingborg/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startsida",
          "item": "https://leadone.online/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO-byrå Helsingborg",
          "item": "https://leadone.online/seo-helsingborg/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://leadone.online/seo-helsingborg/#service",
      "name": "SEO-byrå Helsingborg — lokal SEO",
      "description":
        "Lokal SEO och Google Maps-optimering för företag i Helsingborg. Inkluderar GBP-optimering, sökordsanalys, lokala citeringar, on-page SEO och recensionshantering.",
      "url": "https://leadone.online/seo-helsingborg/",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": {
        "@type": "City",
        "name": "Helsingborg",
        "containedInPlace": {
          "@type": "Country",
          "name": "Sweden",
        },
      },
    },
  ],
};

export default function SeoHelsingborgPage() {
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
            {/* Breadcrumb */}
            <nav aria-label="Brödsmulor" className="mb-8">
              <ol className="flex items-center gap-2 text-[12px] font-mono text-zinc-600">
                <li><a href="/" className="hover:text-zinc-400 transition-colors">Startsida</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-zinc-400">SEO-byrå Helsingborg</li>
              </ol>
            </nav>

            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              SEO-byrå · Helsingborg
            </p>
            <h1 className="text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.06] max-w-[22ch] mb-6">
              SEO-byrå i Helsingborg som får ditt företag att synas
            </h1>
            <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[56ch] mb-10">
              Nio av tio kunder väljer ett av de tre första resultaten på Google. Vi är en SEO-byrå i Helsingborg som hjälper lokala företag att ta en av de platserna — och hålla den.
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

        {/* ── Vad lokal SEO innebär ────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Vad det handlar om
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Vad lokal SEO faktiskt innebär för ett Helsingborgsföretag
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-5">
                  En potentiell kund söker "rörmokare Helsingborg" eller "tandläkare nära mig". Google avgör på millisekunder vem som visas — och vem som inte gör det. Det beslutet fattas utifrån hur väl din digitala närvaro matchar sökarens plats, sökord och syfte.
                </p>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  Lokal SEO handlar om att ge Google rätt signaler: att du finns, att du är relevant, och att andra bekräftar det. Det är en kombination av tekniska inställningar, innehåll, recensioner och lokala citationer — inte ett enskilt trick.
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

        {/* ── Google Maps & Local Pack ─────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Google Maps
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[28ch] mb-12">
              Google Maps och Local Pack — det som faktiskt driver samtal
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

              {/* GBP */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="22" viewBox="0 0 14 18" fill="none" aria-hidden="true">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="var(--accent)" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Google Business Profile-optimering</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Din GBP-profil är det viktigaste instrumentet för lokal synlighet. Vi optimerar kategorier, attribut, tjänstebeskrivningar, öppettider och bildstrategi — och ser till att Google förstår exakt vad du erbjuder i Helsingborg.
                </p>
                <a href="/tjanster/launchmap" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  LaunchMap™ →
                </a>
              </div>

              {/* Citationer */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="var(--accent)" strokeWidth="1.6"/>
                    <path d="M6 10h8M10 6v8" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Lokala citeringar och länkbygge</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Google verifierar din plats och trovärdighet genom att se hur konsekvent ditt företagsnamn, adress och telefonnummer (NAP) finns listade i lokala kataloger. Vi bygger och rensar citeringar specifikt för Helsingborgsmarknaden.
                </p>
                <a href="/tjanster/mappilot" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  MapPilot™ →
                </a>
              </div>

              {/* Recensioner */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2l2.4 5h5.1l-4.1 3 1.6 5L10 12l-5 3 1.6-5L2.5 7h5.1z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5]">Recensioner och förtroendesignaler</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                  Antal recensioner, betyg och regelbundenhet är direkta rankingfaktorer i Google Maps. Vi automatiserar recensionsinhämtning via SMS så att varje nöjd kund omvandlas till en synlighetssignal.
                </p>
                <a href="/tjanster/omdomes" className="text-[13px] font-mono mt-auto" style={{ color: "var(--accent)" }}>
                  Omdömesmaskinen →
                </a>
              </div>
            </div>

            {/* On-page */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5] mb-4">Organisk lokal SEO på din hemsida</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed mb-4">
                  Google Maps är en sak — men organisk lokal sökning är en annan. Vi ser till att din hemsida signalerar geografisk relevans för Helsingborg genom korrekt on-page-struktur, lokalt inriktat innehåll och tekniska SEO-grundlägganden.
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Sökordsanalys för Helsingborgsmarknaden",
                    "Lokal on-page-optimering: rubriker, metadata, intern länkning",
                    "Teknisk SEO: canonical, sitemap, crawlbarhet",
                    "Strukturerad data (Schema.org) kopplad till din verksamhet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <h3 className="text-[18px] font-semibold text-[#F4F4F5] mb-4">Konkurrentanalys och rankinguppföljning</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed mb-4">
                  Vi kartlägger vilka konkurrenter som dominerar lokalt i Helsingborg och identifierar exakt vad som krävs för att ta deras plats. Resultaten följs med geo-grid-spårning — inte antaganden.
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Geo-grid-analys: rankingposition per geografisk mätpunkt",
                    "Identifiering av sökordsglapp och möjligheter",
                    "Månadsrapport med konkreta siffror",
                    "Share of Local Voice (SoLV) per sökord",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Branscher i Helsingborg ──────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
              Branscher
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight max-w-[30ch] mb-6">
              En SEO-byrå i Helsingborg arbetar olika beroende på bransch
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[62ch] mb-12">
              Konkurrensen på Google skiljer sig kraftigt mellan branscher. En tandläkare i Helsingborg konkurrerar med tjugo andra kliniker inom samma kvadratkilometer, medan en specialiserad hantverkare kan ha hela Skåne som upptagningsområde. Därför börjar varje uppdrag med att kartlägga hur just din marknad ser ut lokalt.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  h: "Hantverkare och byggföretag",
                  p: "Rörmokare, elektriker, snickare och takläggare får nästan all sin efterfrågan via akuta sökningar. Här avgör Local Pack-placeringen och telefonnumrets synlighet om samtalet går till dig eller till nästa i listan. Vi prioriterar servicekategorier, upptagningsområde och snabba svarsvägar.",
                },
                {
                  h: "Tandläkare, kliniker och vård",
                  p: "Vårdsökningar är förtroendedrivna. Recensionernas antal och färskhet väger tyngre än i andra branscher, och sökaren jämför ofta tre eller fyra profiler innan hen bokar. Arbetet läggs på recensionsflöde, tydliga behandlingssidor och korrekta öppettider.",
                },
                {
                  h: "Restauranger och caféer",
                  p: "Här sker upptäckten nästan uteslutande i kartan och på mobil. Bilder, menyer, öppettider och attribut i Google Business Profile påverkar både ranking och konverteringsgrad. En restaurang med aktuella bilder får märkbart fler vägbeskrivningar.",
                },
                {
                  h: "Salonger och skönhetsvård",
                  p: "Frisörer, hudterapeuter och nagelsalonger lever på återkommande kunder plus ett jämnt inflöde av nya. Bokningslänkar direkt i profilen, tjänstelistor och ett stabilt recensionstempo är det som flyttar nålen i Helsingborg.",
                },
                {
                  h: "Bilverkstäder och fordonstjänster",
                  p: "Sökintentionen är oftast konkret och brådskande — bilvård, däckbyte, service. Tydliga tjänstekategorier, prisindikationer och närhet till sökarens position styr vem som visas i de tre översta resultaten.",
                },
                {
                  h: "B2B och tjänsteföretag",
                  p: "För konsulter, redovisningsbyråer och andra tjänsteföretag är den organiska sökningen ofta viktigare än kartan. Då flyttas tyngdpunkten till innehåll som svarar på köparens frågor, plus den tekniska SEO som gör sidorna möjliga att ranka.",
                },
              ].map((item) => (
                <div
                  key={item.h}
                  className="rounded-2xl p-6"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">{item.h}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Så går arbetet till ──────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Arbetssätt
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  Så arbetar vi med lokal SEO i Helsingborg
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-5">
                  Lokal SEO är inte en engångsinsats som blir klar. Det är en serie åtgärder där varje steg bygger på det föregående, och där resultatet mäts i faktiska samtal och bokningar snarare än i rapportsiffror utan koppling till omsättning.
                </p>
                <p className="text-[16px] text-zinc-400 leading-relaxed">
                  Nedan är samma arbetsordning vi använder för samtliga uppdrag i Helsingborg, oavsett bransch. Vad som skiljer är hur mycket tid varje steg kräver.
                </p>
              </div>

              <ol className="flex flex-col gap-6">
                {[
                  {
                    n: "01",
                    h: "Nulägesanalys och geo-mätning",
                    p: "Vi mäter var du syns idag — inte bara på en position, utan över ett rutnät av mätpunkter i Helsingborg. Det visar var synligheten faller bort geografiskt, vilket sällan framgår av en vanlig rankingkontroll.",
                  },
                  {
                    n: "02",
                    h: "Sökordskartläggning för din marknad",
                    p: "Vilka sökningar leder faktiskt till kunder? Vi skiljer på volym och köpintention, och prioriterar de termer där en placering betyder intäkt snarare än trafik.",
                  },
                  {
                    n: "03",
                    h: "Google Business Profile-optimering",
                    p: "Kategorier, tjänster, attribut, bilder, öppettider och inlägg. Profilen är den enskilt starkaste faktorn för Local Pack, och den delen som oftast är ofullständig när vi tar över ett konto.",
                  },
                  {
                    n: "04",
                    h: "Teknisk och innehållsmässig on-page SEO",
                    p: "Sidstruktur, titlar, intern länkning, schema-markup och laddtid. Det här är arbetet som gör att din hemsida — inte bara din kartprofil — blir möjlig att ranka organiskt.",
                  },
                  {
                    n: "05",
                    h: "Citeringar, länkar och recensioner",
                    p: "Konsekvent företagsinformation i svenska register, relevanta lokala länkar och ett system som gör att nya recensioner kommer in löpande i stället för i skurar.",
                  },
                  {
                    n: "06",
                    h: "Uppföljning och justering",
                    p: "Månatlig mätning mot utgångsläget. Det som fungerar skalas upp, det som inte gör det byts ut. Du ser samma data som vi ser.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-5">
                    <span
                      className="text-[13px] font-mono font-bold shrink-0 pt-1"
                      style={{ color: "var(--accent)" }}
                      aria-hidden="true"
                    >
                      {step.n}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#F4F4F5] mb-2">{step.h}</h3>
                      <p className="text-[14px] text-zinc-400 leading-relaxed">{step.p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Varför LeadOne ───────────────────────────────────── */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-5" style={{ color: "var(--accent)" }}>
                  Varför LeadOne
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-tight mb-6">
                  En SEO-byrå i Helsingborg med en enda sak att göra
                </h2>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-5">
                  De flesta SEO-byråer arbetar med allt — e-handel, nationella varumärken, tekniska produkter. LeadOne gör en sak: lokal SEO och Google Maps-synlighet för svenska småföretag. Det innebär djupare kompetens, snabbare resultat och inga onödiga tjänster.
                </p>
                <p className="text-[16px] text-zinc-400 leading-relaxed mb-8">
                  Vi arbetar med företag i Helsingborg och runt om i Sverige. Alla klienter rapporteras med faktisk rankingdata — inte trafikestimat eller vaga löften.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: "43+", label: "kunder" },
                    { n: "90 dgr", label: "median till topp 3" },
                    { n: "5,0★", label: "genomsnittligt betyg" },
                  ].map((s) => (
                    <div key={s.n} className="rounded-xl p-4 text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <p className="text-[1.5rem] font-bold font-mono tracking-[-0.03em]" style={{ color: "var(--accent)" }}>{s.n}</p>
                      <p className="text-[11px] text-zinc-500 mt-1 font-mono">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Ingen bindningstid", desc: "Du äger dina resultat. Inga långa kontrakt som skyddar byrån snarare än dig." },
                  { label: "Lokal specialisering", desc: "Vi arbetar uteslutande med lokal SEO — inte nationella kampanjer, inte e-handel, inte sociala medier." },
                  { label: "Transparenta siffror", desc: "Varje månadsrapport innehåller rankingdata du kan verifiera själv i Google Search Console och Google Business Profile." },
                  { label: "Direktkontakt", desc: "Grundaren Douglas hanterar varje klient personligen. Du pratar med den som faktiskt gör jobbet." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-5 flex gap-4"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="w-1.5 shrink-0 rounded-full mt-1" style={{ background: "var(--accent)", alignSelf: "stretch" }} aria-hidden="true" />
                    <div>
                      <p className="text-[15px] font-semibold text-[#F4F4F5] mb-1">{item.label}</p>
                      <p className="text-[13px] text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                Vad lokal SEO faktiskt åstadkommer
              </h2>
              <p className="text-[16px] text-zinc-400 leading-relaxed max-w-[52ch] mb-12">
                Inga konstruerade siffror. Här är vad som hände när svenska lokala företag implementerade LeadOnes system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                    {cs.geoGridSummary && (
                      <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                        <span className="text-[12px] font-mono text-zinc-500">Synlighet</span>
                        <span className="text-[12px] font-mono font-bold text-zinc-500">{cs.geoGridSummary.before}%</span>
                        <svg width="16" height="9" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                          <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[12px] font-mono font-bold" style={{ color: "var(--accent)" }}>{cs.geoGridSummary.after}%</span>
                      </div>
                    )}
                    {cs.statHighlight && (
                      <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                        <span className="text-[12px] font-mono text-zinc-500">{cs.statHighlight.label}</span>
                        <span className="text-[12px] font-mono font-bold text-zinc-500">{cs.statHighlight.before}</span>
                        <svg width="16" height="9" viewBox="0 0 28 16" fill="none" aria-hidden="true">
                          <path d="M0 8h24M20 2l6 6-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[12px] font-mono font-bold" style={{ color: "var(--accent)" }}>{cs.statHighlight.after}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="/resultat"
                className="inline-flex items-center gap-2 text-[14px] font-mono"
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
                  Frågor om SEO i Helsingborg
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
