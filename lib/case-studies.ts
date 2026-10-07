export interface RankingKeyword {
  keyword: string;
  rank: number;
  solv: number; // percentage 0-100
  date: string; // e.g. "Jul 2026"
}

// Multi-point geo-grid timeline entry (one row per keyword, multiple snapshots)
export interface GeoTimelineKeyword {
  keyword: string;
  snapshots: { date: string; solv: number; note?: string }[];
  highlight?: string; // summary note shown at end of row
}

// Geo-grid heatmap: 3×3 grid of rank values per keyword (0 = not ranked / 20+)
export interface GeoGridKeyword {
  keyword: string;
  star?: boolean; // highlight as biggest improvement
  before: { date: string; grid: number[]; solv: number; avgRank: number | null };
  after:  { date: string; grid: number[]; solv: number; avgRank: number | null };
  deltaPp: number;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  city: string;
  tags: string[];
  status?: { label: string; variant: "collecting" | "verified" };
  teaser: string; // one line for homepage card
  startingPoint: string;
  beforeMetric?: { label: string; value: string };
  actions: string[];
  afterMetric?: { label: string; value: string };
  timeframe: string;
  statHighlight?: { before: string; after: string; label: string };
  secondaryStatHighlight?: { before: string; after: string; label: string };
  images?: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
  rankingKeywords?: RankingKeyword[];
  gbpStats?: { label: string; before: number; after: number; unit: string; period: string }[];
  geoTimeline?: GeoTimelineKeyword[];
  geoGridKeywords?: GeoGridKeyword[];
  geoGridSummary?: { before: number; after: number; label: string }; // e.g. 36% → 67% avg SoLV
  caveats?: string; // "Vad som ännu inte kan attribueras säkert"
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "zvizzer-bilvard",
    client: "ZviZZer Bilvård",
    industry: "Bilvård",
    city: "Malmö",
    tags: ["#Google Maps", "#Bilvård"],
    status: { label: "Verifierad förbättring", variant: "verified" },
    teaser: "Genomsnittlig ranking från 8,7 till 4,3 på en vecka",
    startingPoint:
      "ZviZZer Bilvård är ett bilvårdscenter i Malmö. Genomsnittlig rankingposition på Google Maps låg på 8,7.",
    beforeMetric: { label: "Genomsnittlig rankingposition", value: "8,7" },
    actions: [
      "Lokal synlighet på Google Maps, mätt som genomsnittlig rankingposition.",
    ],
    afterMetric: { label: "Genomsnittlig rankingposition", value: "4,3" },
    timeframe: "en vecka",
    statHighlight: {
      before: "8,7",
      after: "4,3",
      label: "Genomsnittlig rankingposition",
    },
  },
  {
    slug: "rs-bilvard",
    client: "RS Bilvård",
    industry: "Bilvård & Detailing",
    city: "Jönköping",
    tags: ["#Google Maps", "#Geo-grid-spårning", "#Bilvård & Rekond"],
    status: { label: "Verifierad förbättring", variant: "verified" },
    teaser: "Från 0% till 44% lokal synlighet för 'rekond jönköping' på fem veckor",
    startingPoint:
      "RS Bilvård är en bilvårds- och detailingverkstad i Jönköping. Utgångsläge och bakgrundsinformation fylls i av klienten.",
    actions: [
      "Åtgärder och optimeringar fylls i av klienten — detta fält ska inte genereras påhittat.",
    ],
    timeframe: "2 juli – 4 aug 2026",
    gbpStats: [
      { label: "Samtal/mån",        before: 10,  after: 18,  unit: "st",  period: "apr → jul 2026" },
      { label: "Webbplatsklick/mån", before: 48,  after: 68,  unit: "st",  period: "apr → jul 2026" },
      { label: "Vägbeskrivningar/mån", before: 35, after: 60, unit: "st",  period: "apr → jul 2026" },
      { label: "Visningar/mån",     before: 90,  after: 140, unit: "st",  period: "apr → jul 2026" },
    ],
    geoGridSummary: { before: 36, after: 67, label: "Genomsnittlig synlighet i Map Pack topp 3 för 5 sökord" },
    geoGridKeywords: [
      {
        keyword: "Rekond Jönköping",
        star: true,
        before: { date: "2 jul", solv: 0,  avgRank: null, grid: [20,20,20, 20,20,20, 20,20,20] },
        after:  { date: "4 aug", solv: 44, avgRank: 4.00, grid: [2,3,20,  2,3,20,   20,20,20] },
        deltaPp: 44,
      },
      {
        keyword: "Bilpolering Jönköping",
        before: { date: "10 jul", solv: 56, avgRank: 4.63, grid: [2,2,3, 3,5,20, 20,20,20] },
        after:  { date: "4 aug",  solv: 89, avgRank: 2.11, grid: [2,2,2, 2,2,2,  2,3,20]  },
        deltaPp: 33,
      },
      {
        keyword: "Helrekond Jönköping",
        before: { date: "10 jul", solv: 44, avgRank: 4.86, grid: [2,2,3, 5,5,20, 20,20,20] },
        after:  { date: "4 aug",  solv: 89, avgRank: 2.11, grid: [2,2,5, 2,2,2,  2,2,20]  },
        deltaPp: 44,
      },
      {
        keyword: "Bilvård Jönköping",
        before: { date: "10 jul", solv: 56, avgRank: 4.63, grid: [2,2,3, 3,5,20, 20,20,20] },
        after:  { date: "4 aug",  solv: 78, avgRank: 2.67, grid: [2,2,2, 2,3,3,  20,5,20]  },
        deltaPp: 22,
      },
      {
        keyword: "Biltvätt Nära Mig",
        before: { date: "10 jul", solv: 22, avgRank: 6.40, grid: [20,20,20, 2,20,20, 3,20,20] },
        after:  { date: "4 aug",  solv: 33, avgRank: 7.57, grid: [20,20,20, 2,20,20, 3,5,20]  },
        deltaPp: 11,
      },
    ],
    geoTimeline: [
      {
        keyword: "bilvård jönköping",
        snapshots: [
          { date: "2 jul", solv: 77.78 },
          { date: "10 jul", solv: 55.56, note: "Tillfällig nedgång" },
          { date: "4 aug", solv: 77.78 },
        ],
        highlight: "Fullt återhämtad — marginellt bättre rankingposition än startläget",
      },
      {
        keyword: "rekond jönköping",
        snapshots: [
          { date: "2 jul", solv: 0, note: "Ej topp 20" },
          { date: "4 aug", solv: 44.44 },
        ],
        highlight: "Störst enskild förbättring — från noll synlighet till 44%",
      },
      {
        keyword: "helrekond jönköping",
        snapshots: [
          { date: "10 jul", solv: 44.44 },
          { date: "4 aug", solv: 88.89 },
        ],
        highlight: "Fördubblad synlighet på tre veckor",
      },
      {
        keyword: "bilpolering jönköping",
        snapshots: [
          { date: "10 jul", solv: 55.56 },
          { date: "4 aug", solv: 88.89 },
        ],
        highlight: "+33 procentenheter",
      },
      {
        keyword: "biltvätt nära mig",
        snapshots: [
          { date: "10 jul", solv: 22.22 },
          { date: "4 aug", solv: 33.33 },
        ],
        highlight: "Blandat resultat — fler mätpunkter visar synlighet, men rankingposition något sämre",
      },
    ],
    caveats:
      "Geo-grid-data visar förbättrad synlighet i sökresultat, men exakt hur många av dessa synlighetsökningar som lett till faktiska bokningar är ännu inte kopplat via Lead Attribution Dashboard för denna klient. Nedgången för 'bilvård jönköping' runt 10 juli går inte heller att med säkerhet förklara — kan bero på tillfällig konkurrentaktivitet eller normal variation.",
    images: undefined,
  },
  {
    slug: "angelique-hud-kropp",
    client: "Angelique Hud & Kropp",
    industry: "Hudvårdsmottagning",
    city: "Helsingborg",
    tags: ["Omdömesmaskinen", "Google Business Profile"],
    teaser: "28 → 108 Google-recensioner på bara 3 månader",
    startingPoint:
      "Angelique Hud & Kropp hade ett starkt rykte lokalt men saknade ett system för att konsekvent samla in nya Google-recensioner. Med 28 recensioner och ett snitt på 4,9★ var grunden god — men volymen begränsade synligheten i Local Pack.",
    beforeMetric: { label: "Google-recensioner", value: "28 st · 4,9★" },
    actions: [
      "Optimerade Google Business Profile med korrekta kategorier, tjänstebeskrivningar och bilder",
      "Implementerade Omdömesmaskinen — automatiserade recensionsförfrågningar via SMS efter varje behandling",
      "Konfigurerade Request · Response · Repurpose-flödet för att utnyttja varje recension i sociala medier",
      "Lade till Bokadirekt-integration i GBP-profilen för direkt bokningsflöde",
    ],
    afterMetric: { label: "Google-recensioner", value: "108 st · 4,9★" },
    timeframe: "3 månader",
    statHighlight: {
      before: "28",
      after: "108",
      label: "Google-recensioner",
    },
    images: {
      before: "/assets/case-studies/angelique-before.png",
      after: "/assets/case-studies/angelique-after.png",
      beforeAlt: "Angelique Hud & Kropp — Google Business Profile med 28 recensioner",
      afterAlt: "Angelique Hud & Kropp — Google Business Profile med 108 recensioner",
    },
    rankingKeywords: [
      { keyword: "ansiktsbehandling helsingborg", rank: 1.22, solv: 100, date: "Jul 2026" },
      { keyword: "hudterapeut helsingborg",       rank: 1.00, solv: 100, date: "Apr 2026" },
      { keyword: "aknebehandling",                rank: 1.56, solv: 88.89, date: "Apr 2026" },
      { keyword: "vaxning helsingborg",           rank: 1.89, solv: 88.89, date: "Jun 2026" },
      { keyword: "hudvård helsingborg",           rank: 2.89, solv: 77.78, date: "Jul 2026" },
      { keyword: "skönhetssalong helsingborg",    rank: 2.89, solv: 66.67, date: "Jun 2026" },
    ],
  },
  {
    slug: "hjeronymus-salongen",
    client: "Hjeronymus Salongen",
    industry: "Beauty salon",
    city: "Kungsbacka",
    tags: ["Omdömesmaskinen", "LaunchMap™"],
    teaser: "13 → 80 recensioner och 4,8 → 5,0 stjärnor på 2,5 månader",
    startingPoint:
      "Hjeronymus Salongen var en välskött salong i Kungsbacka med lojala kunder men mycket lite digital synlighet. Med bara 13 Google-recensioner och ett snitt på 4,8★ dök profilen sällan upp i lokala sökresultat — trots att kundnöjdheten var hög.",
    beforeMetric: { label: "Google-recensioner", value: "13 st · 4,8★" },
    actions: [
      "Genomförde full LaunchMap™-optimering: GBP-kategori, attribut, öppettider, tjänster och bildstrategi",
      "Rullade ut Omdömesmaskinen med automatiserade SMS-förfrågningar direkt efter varje bokad tid",
      "Byggde lokal citationsstrategi för Kungsbacka-området för ökad prominens",
      "Satte upp responsmallar för Google-recensioner för att stärka engagement-signaler",
    ],
    afterMetric: { label: "Google-recensioner", value: "80 st · 5,0★" },
    timeframe: "2,5 månader",
    statHighlight: {
      before: "13",
      after: "80",
      label: "Google-recensioner",
    },
    secondaryStatHighlight: {
      before: "4,8★",
      after: "5,0★",
      label: "Genomsnittligt betyg",
    },
    images: {
      before: "/assets/case-studies/hjeronymus-before.png",
      after: "/assets/case-studies/hjeronymus-after.png",
      beforeAlt: "Hjeronymus Salongen — Google Business Profile med 13 recensioner och 4,8 stjärnor",
      afterAlt: "Hjeronymus Salongen — Google Business Profile med 80 recensioner och 5,0 stjärnor",
    },
    rankingKeywords: [
      { keyword: "peeling kungsbacka",          rank: 1.00, solv: 100,   date: "Jul 2026" },
      { keyword: "öronhåltagning kungsbacka",   rank: 1.00, solv: 100,   date: "Jun 2026" },
      { keyword: "ansiktsbehandling kungsbacka", rank: 2.56, solv: 100,  date: "Jun 2026" },
      { keyword: "vaxning kungsbacka",           rank: 3.33, solv: 55.56, date: "Jun 2026" },
      { keyword: "microneedling kungsbacka",     rank: 4.22, solv: 22.22, date: "Jul 2026" },
    ],
    geoGridSummary: { before: 37, after: 67, label: "Genomsnittlig synlighet i Map Pack topp 3 för 3 sökord" },
    geoGridKeywords: [
      {
        keyword: "ansiktsbehandling kungsbacka",
        star: true,
        before: { date: "31 maj", solv: 77.78, avgRank: 2.78, grid: [2,2,4, 3,1,3, 3,4,3] },
        after:  { date: "5 aug",  solv: 100,   avgRank: 2.78, grid: [3,3,3, 3,1,3, 3,3,3] },
        deltaPp: 22,
      },
      {
        keyword: "botox kungsbacka",
        before: { date: "31 maj", solv: 11.11, avgRank: 6.33, grid: [7,7,7, 7,1,7, 7,7,7] },
        after:  { date: "5 aug",  solv: 11.11, avgRank: 4.89, grid: [5,5,5, 5,1,5, 6,7,5] },
        deltaPp: 0,
      },
      {
        keyword: "skönhetssalong kungsbacka",
        before: { date: "31 maj", solv: 22.22, avgRank: 5.00, grid: [5,3,6, 7,1,6, 6,6,5] },
        after:  { date: "5 aug",  solv: 88.89, avgRank: 2.56, grid: [2,3,2, 3,1,4, 3,2,3] },
        deltaPp: 67,
      },
    ],
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
