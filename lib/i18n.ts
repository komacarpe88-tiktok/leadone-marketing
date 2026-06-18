export type Locale = "sv" | "en";

export const locales: Locale[] = ["sv", "en"];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "sv";
}

export function switchLocale(pathname: string, locale: Locale): string {
  const isSv = !pathname.startsWith("/en");
  if (locale === "en") {
    if (isSv) {
      // Swedish → English path mapping
      const map: Record<string, string> = {
        "/": "/en",
        "/blogg": "/en/blog",
        "/boka": "/en/book",
        "/om-oss": "/en/about",
        "/kontakt": "/en/contact",
        "/tjanster/launchmap": "/en/services/launchmap",
        "/tjanster/omdomes": "/en/services/reviews",
        "/tjanster/komplett": "/en/services/complete",
        "/integritetspolicy": "/en/privacy-policy",
        "/anvandarvillkor": "/en/terms",
        "/cookie-policy": "/en/cookie-policy",
        "/pub-avtal": "/en/dpa",
      };
      return map[pathname] ?? `/en${pathname}`;
    }
    return pathname;
  } else {
    if (!isSv) {
      // English → Swedish path mapping
      const map: Record<string, string> = {
        "/en": "/",
        "/en/blog": "/blogg",
        "/en/book": "/boka",
        "/en/about": "/om-oss",
        "/en/contact": "/kontakt",
        "/en/services/launchmap": "/tjanster/launchmap",
        "/en/services/reviews": "/tjanster/omdomes",
        "/en/services/complete": "/tjanster/komplett",
        "/en/privacy-policy": "/integritetspolicy",
        "/en/terms": "/anvandarvillkor",
        "/en/cookie-policy": "/cookie-policy",
        "/en/dpa": "/pub-avtal",
      };
      return map[pathname] ?? (pathname.replace(/^\/en/, "") || "/");
    }
    return pathname;
  }
}

export const t = {
  sv: {
    nav: {
      services: "Tjänster",
      process: "Process",
      results: "Resultat",
      blog: "Blogg",
      about: "Om Oss",
      contact: "Kontakt",
      cta: "Boka Gratis Analys",
      launchmap_desc: "GBP-optimering på 30 dagar",
      reviews_desc: "Request · Response · Repurpose",
      complete_desc: "Allt i ett — bäst värde",
    },
    hero: {
      eyebrow: "Lokal SEO & Google Maps-optimering",
      headline: "Vi tar dig in i Local Pack — topp 3 på Google Maps",
      sub: "Fler recensioner. Fler samtal. Mer omsättning.",
      cta: "Boka gratis analys",
      scroll: "Scrolla",
    },
    footer: {
      tagline: "Lokal synlighet för svenska småföretag. Inga löften vi inte kan hålla. Inga dolda kostnader. Bara system som fungerar.",
      solutions: "Lösningar",
      company: "Företag",
      legal: "Juridiskt",
      copyright: "Lokal synlighet för svenska företag.",
      location: "Helsingborg, Sverige",
      about: "Om Oss",
      results: "Resultat",
      contact: "Kontakt",
      privacy: "Integritetspolicy",
      terms: "Användarvillkor",
      cookie: "Cookie-policy",
      dpa: "PUB-avtal",
      privacy_href: "/integritetspolicy",
      terms_href: "/anvandarvillkor",
      cookie_href: "/cookie-policy",
      dpa_href: "/pub-avtal",
      about_href: "/om-oss",
      contact_href: "/kontakt",
    },
    blog: {
      eyebrow: "Kunskap & strategi",
      headline: "Lokal SEO — på svenska",
      sub: "Praktiska guider om Google Maps-ranking, Google Business Profile och recensionshantering. Inga krångliga termer — bara det som faktiskt fungerar.",
      cta_strip: "Vill du att vi gör jobbet åt dig?",
      cta_sub: "Boka ett gratis analyssamtal — 15 minuter, inga förpliktelser.",
      cta_btn: "Boka gratis analys →",
      min_read: "min läsning",
    },
    booking: {
      badge: "Kostnadsfritt · Utan förpliktelse",
      headline: "Boka ditt gratis analyssamtal",
      sub: "15 minuter. Inga säljgrepp. Bara ärlig feedback om var du befinner dig — och vad som krävs för att synas på Google.",
      call_header: "Det här går vi igenom",
      phone_label: "Hellre ringa?",
      live_label: "personer bokade idag",
      card_title: "Gratis Analyssamtal",
      card_sub: "15 min · Google Meet",
      points: [
        "Exakt var du rankar idag — och var dina konkurrenter befinner sig",
        "Vilka sökord som driver kunder i din bransch och stad",
        "Vad som krävs för att nå topp 3 på Google Maps",
        "En konkret plan du kan börja med direkt — oavsett om du väljer oss",
      ],
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      results: "Results",
      blog: "Blog",
      about: "About",
      contact: "Contact",
      cta: "Book Free Analysis",
      launchmap_desc: "GBP optimisation in 30 days",
      reviews_desc: "Request · Response · Repurpose",
      complete_desc: "All-in-one — best value",
    },
    hero: {
      eyebrow: "Local SEO & Google Maps Optimisation",
      headline: "We get you into the Local Pack — top 3 on Google Maps",
      sub: "More reviews. More calls. More revenue.",
      cta: "Book free analysis",
      scroll: "Scroll",
    },
    footer: {
      tagline: "Local visibility for Swedish businesses. No promises we can't keep. No hidden costs. Just systems that work.",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
      copyright: "Local visibility for Swedish businesses.",
      location: "Helsingborg, Sweden",
      about: "About",
      results: "Results",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
      dpa: "DPA",
      privacy_href: "/en/privacy-policy",
      terms_href: "/en/terms",
      cookie_href: "/en/cookie-policy",
      dpa_href: "/en/dpa",
      about_href: "/en/about",
      contact_href: "/en/contact",
    },
    blog: {
      eyebrow: "Knowledge & strategy",
      headline: "Local SEO — in English",
      sub: "Practical guides on Google Maps ranking, Google Business Profile and review management. No jargon — just what actually works.",
      cta_strip: "Want us to do the work for you?",
      cta_sub: "Book a free analysis call — 15 minutes, no obligations.",
      cta_btn: "Book free analysis →",
      min_read: "min read",
    },
    booking: {
      badge: "Free · No obligation",
      headline: "Book your free analysis call",
      sub: "15 minutes. No sales pitch. Just honest feedback on where you stand — and what it takes to show up on Google.",
      call_header: "What we'll cover",
      phone_label: "Prefer to call?",
      live_label: "people booked today",
      card_title: "Free Analysis Call",
      card_sub: "15 min · Google Meet",
      points: [
        "Exactly where you rank today — and where your competitors are",
        "Which keywords drive customers in your industry and city",
        "What it takes to reach the top 3 on Google Maps",
        "A concrete plan you can start with immediately — whether you choose us or not",
      ],
    },
  },
} as const;
