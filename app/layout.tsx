import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { authorPersonLd } from "@/lib/author";
import { phones } from "@/lib/contact";

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
  // Canonical host is the non-www apex domain — www 301s here, so every
  // resolved metadata URL must use this form.
  metadataBase: new URL("https://leadone.online"),
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

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://leadone.online/#organization",
      "name": "LeadOne Marketing",
      "alternateName": "LeadOne",
      "url": "https://leadone.online/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://leadone.online/assets/logo.png",
        "width": 512,
        "height": 512,
      },
      "image": "https://leadone.online/assets/logo.png",
      "description": "LeadOne Marketing helps Swedish local businesses rank in the top 3 on Google Maps through Google Business Profile optimization, local citation building, and automated review management.",
      "telephone": "+46763912181",
      "email": "info@leadone.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Helsingborg",
        "addressRegion": "Skåne",
        "addressCountry": "SE",
      },
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "currenciesAccepted": "SEK",
      // The entity's own number stays Swedish (it is a Helsingborg company).
      // The English-language line is declared as an additional contact point
      // rather than by swapping `telephone` per locale, which would
      // misrepresent the same legal entity to Google.
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": phones.sv.e164,
          "contactType": "customer service",
          "availableLanguage": ["sv", "Swedish"],
          "areaServed": "SE",
        },
        {
          "@type": "ContactPoint",
          "telephone": phones.en.e164,
          "contactType": "sales",
          "availableLanguage": ["en", "English"],
        },
      ],
      "founder": authorPersonLd(),
      "sameAs": [
        "https://share.google/SMOX8ekMOHAjr96Kh",
        "https://www.facebook.com/profile.php?id=61574166014384",
        "https://www.instagram.com/leadone_marketing/",
        "https://se.linkedin.com/in/leadone-marketing-6ab9ba373",
        "https://x.com/Leadonemarket",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "LeadOne Marketing — Tjänster",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@id": "https://leadone.online/#service-launchmap" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://leadone.online/#service-omdomes" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://leadone.online/#service-mappilot" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://leadone.online/#service-launchmap",
      "name": "LaunchMap™",
      "description": "Complete Google Business Profile optimization delivered within 30 days. Includes category optimization, keyword analysis, 50+ directory listings, and a geo-grid ranking map.",
      "url": "https://leadone.online/tjanster/launchmap",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "offers": {
        "@type": "Offer",
        "price": "5999",
        "priceCurrency": "SEK",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "5999",
          "priceCurrency": "SEK",
          "unitText": "one-time",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://leadone.online/#service-omdomes",
      "name": "Omdömesmaskinen",
      "description": "Automated review management — Request, Response, Repurpose. Automated SMS review requests, automated review responses, and publishing to website and social media.",
      "url": "https://leadone.online/tjanster/omdomes",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "offers": {
        "@type": "Offer",
        "price": "1499",
        "priceCurrency": "SEK",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1499",
          "priceCurrency": "SEK",
          "unitText": "month",
        },
      },
    },
    {
      "@type": "Service",
      "@id": "https://leadone.online/#service-mappilot",
      "name": "MapPilot™",
      "description": "Ongoing management of a Google Business Profile — weekly posts, photos, review management and monthly ranking reports, built on LaunchMap™ and Omdömesmaskinen. No setup fee, no fixed-term contract.",
      "url": "https://leadone.online/tjanster/mappilot",
      "provider": { "@id": "https://leadone.online/#organization" },
      "areaServed": { "@type": "Country", "name": "Sweden" },
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
      "@type": "WebSite",
      "@id": "https://leadone.online/#website",
      "name": "LeadOne Marketing",
      "url": "https://leadone.online/",
      "publisher": { "@id": "https://leadone.online/#organization" },
      "inLanguage": "sv-SE",
    },
    {
      "@type": "WebPage",
      "@id": "https://leadone.online/#webpage",
      "url": "https://leadone.online/",
      "name": "LeadOne Marketing | Lokal SEO & Google Maps-optimering",
      "description": "Vi hjälper svenska småföretag synas i topp 3 på Google Maps. Lokal SEO, GBP-optimering och recensionssystem.",
      "isPartOf": { "@id": "https://leadone.online/#website" },
      "about": { "@id": "https://leadone.online/#organization" },
      "inLanguage": "sv-SE",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }} />
      </head>
      <body className="bg-[#08080A] text-[#F4F4F5] antialiased font-sans">
        {children}
        {/* Google Analytics 4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T6709ZLTCC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T6709ZLTCC');
          gtag('config', 'AW-17824404848');
        `}</Script>
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
