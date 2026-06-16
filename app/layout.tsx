import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "LeadOne Marketing | Lokal SEO för svenska företag",
  description:
    "Sveriges lokala SEO-byrå. Vi hjälper dig synas på Google Maps och i lokal sökning — mer synlighet, fler samtal, fler kunder.",
  keywords: "lokal SEO, Google Maps optimering, Google Business Profile, Local Pack, recensionssystem, SEO byrå Sverige, Helsingborg",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  publisher: "LeadOne Marketing",
  openGraph: {
    title: "LeadOne Marketing | Lokal SEO för svenska företag",
    description:
      "Lokal SEO för svenska småföretag. Syns i Local Pack, fler recensioner, mer omsättning.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online",
    siteName: "LeadOne Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadOne Marketing | Lokal SEO för svenska företag",
    description: "Lokal SEO för svenska småföretag. Syns i Local Pack, fler recensioner, mer omsättning.",
    site: "@leadonese",
    creator: "@leadonese",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.leadone.online/#organization",
  "name": "LeadOne Marketing",
  "alternateName": "LeadOne",
  "url": "https://www.leadone.online",
  "logo": "https://www.leadone.online/assets/logo.png",
  "image": "https://www.leadone.online/assets/logo.png",
  "description": "Lokal SEO och Google Maps-optimering för svenska småföretag. Vi hjälper lokala företag synas i topp 3 på Google Maps.",
  "telephone": "+46764796630",
  "email": "info@leadone.online",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Helsingborg",
    "addressCountry": "SE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 56.0465,
    "longitude": 12.6945,
  },
  "areaServed": { "@type": "Country", "name": "Sweden" },
  "priceRange": "$$",
  "currenciesAccepted": "SEK",
  "founder": { "@type": "Person", "name": "Douglas", "jobTitle": "Grundare" },
  "sameAs": ["https://twitter.com/leadonese"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mikael Lindqvist" },
      "reviewBody": "LeadOne förändrade hur vi syns på Google. Inom fem månader gick vi från osynliga till tre nya kunder som kom in varje dag tack vare Maps.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sofia Bergström" },
      "reviewBody": "De förstod vår lokala marknad omedelbart. Vi syns nu på första plats för alla viktiga sökningar. Telefonen ringer mer än någonsin.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anders Holm" },
      "reviewBody": "LeadOne är det första team som rapporterade faktiska siffror vi kunde verifiera i Google Search Console. En enorm skillnad.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Karin Vestergaard" },
      "reviewBody": "Efter sex månader rankar vi bland de tre bästa för alla sökord som är viktiga för vår verksamhet. Patientförfrågningar har mer än fördubblats.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LeadOne Marketing",
  "url": "https://www.leadone.online",
  "publisher": { "@id": "https://www.leadone.online/#organization" },
  "inLanguage": "sv-SE",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.leadone.online",
  "name": "LeadOne Marketing | Lokal SEO & Google Maps-optimering",
  "description": "Vi hjälper svenska småföretag synas i topp 3 på Google Maps. Lokal SEO, GBP-optimering och recensionssystem.",
  "about": { "@id": "https://www.leadone.online/#organization" },
  "inLanguage": "sv-SE",
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lokal SEO & Google Maps-optimering",
  "provider": { "@id": "https://www.leadone.online/#organization" },
  "serviceType": "Local SEO",
  "areaServed": { "@type": "Country", "name": "Sweden" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "LeadOne Tjänster",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LaunchMap™",
          "description": "Komplett Google Business Profile-optimering på 30 dagar. Inkluderar kategorioptimering, sökordsanalys, 50+ kataloglistningar och heatmap-rankingkarta.",
        },
        "price": "5999",
        "priceCurrency": "SEK",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Omdömesmaskinen",
          "description": "Automatiserad recensionshantering — Request, Response, Repurpose. Automatiska SMS med direktlänk till Google-recension, automatiskt besvarade recensioner och publicering på hemsida och sociala medier.",
        },
        "price": "1499",
        "priceCurrency": "SEK",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Komplett Paket",
          "description": "LaunchMap™ + Omdömesmaskinen — allt i ett. Ingen startkostnad, ingen bindningstid.",
        },
        "price": "3499",
        "priceCurrency": "SEK",
      },
    ],
  },
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hur lång tid tar det innan jag ser resultat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De flesta kunder ser tydliga förbättringar i Google Maps-synlighet inom 30–90 dagar. Mediantiden till förstasidan för primära lokala sökord är 6 månader.",
      },
    },
    {
      "@type": "Question",
      "name": "Behöver jag binda upp mig långsiktigt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nej. Ingen bindningstid. Du kan avsluta när du vill. LaunchMap™ är en engångsbetalning och Omdömesmaskinen samt Komplett Paket är månadsabonnemang utan bindning.",
      },
    },
    {
      "@type": "Question",
      "name": "Fungerar det för alla branscher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Vi arbetar med alla lokala företag som har en fysisk plats eller betjänar ett lokalt område — från elektriker och tandläkare till restauranger och byggföretag.",
      },
    },
    {
      "@type": "Question",
      "name": "Vad skiljer er från andra SEO-byråer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vi fokuserar uteslutande på lokal SEO och Google Maps-synlighet. Inga krångliga kontrakt — bara system som fungerar och rapportering med verkliga siffror du kan verifiera själv i Google Search Console.",
      },
    },
    {
      "@type": "Question",
      "name": "Vad händer med mina recensioner om jag avslutar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alla recensioner som genererats under tiden stannar kvar på din Google Business Profile. De tillhör ditt företag, inte oss.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${outfit.variable} ${mono.variable} ${cormorant.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </head>
      <body className="bg-[#08080A] text-[#F4F4F5] antialiased font-sans">
        {children}
        {/* LeadConnector chat widget */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69401fe0cd1517fa28a99c85"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
