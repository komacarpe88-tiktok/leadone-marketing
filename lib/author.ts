/**
 * Single source of truth for author / E-E-A-T identity signals.
 *
 * Google's helpful-content and spam guidance does not penalise content for
 * being AI-assisted — it evaluates whether content is helpful, original and
 * clearly attributable to someone accountable for it. A named human author
 * with verifiable expertise is one of the signals that actually matters.
 *
 * Namnet nedan propageras till Person-schema, bylines och författarsidan.
 */

const lastName = "Gustavsson";

const firstName = "Douglas";

export const author = {
  firstName,
  lastName,
  /** "Douglas Efternamn" om efternamn finns, annars "Douglas". */
  get fullName(): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
  },
  jobTitle: "Grundare",
  jobTitleEn: "Founder",
  /** Kort bio används i byline och på författarsidan. */
  bio: "Grundare av LeadOne Marketing. Arbetar dagligen med lokal SEO och Google Maps-optimering för svenska småföretag, med geo-grid-mätning som metod för att verifiera faktisk synlighet snarare än enskilda rankingpositioner.",
  bioEn: "Founder of LeadOne Marketing. Works daily on local SEO and Google Maps optimisation for small businesses, using geo-grid measurement to verify actual visibility rather than single ranking positions.",
  /** Ämnen vi faktiskt arbetar med — driver knowsAbout i schema. */
  knowsAbout: [
    "Lokal SEO",
    "Google Business Profile-optimering",
    "Google Maps ranking",
    "Local Pack",
    "Geo-grid-mätning",
    "Recensionshantering",
    "Lokala citeringar",
    "Teknisk SEO",
  ],
  email: "info@leadone.online",
  /** Profiler som verifierar identiteten externt. */
  /** Samma ämnen på engelska för /en/-sidorna. */
  knowsAboutEn: [
    "Local SEO",
    "Google Business Profile optimisation",
    "Google Maps ranking",
    "Local Pack",
    "Geo-grid measurement",
    "Review management",
    "Local citations",
    "Technical SEO",
  ],
  sameAs: [
    "https://se.linkedin.com/in/leadone-marketing-6ab9ba373",
    "https://x.com/Leadonemarket",
  ],
  /** Kanonisk URL för författarsidan. */
  url: "https://leadone.online/om-oss/",
} as const;

/**
 * Person-nod för JSON-LD, återanvänds i layout, blogginlägg och profilsidor.
 * `locale` styr jobTitle/description så engelska sidor inte får svensk text.
 */
export function authorPersonLd(locale: "sv" | "en" = "sv") {
  return {
    "@type": "Person",
    "@id": "https://leadone.online/#douglas",
    name: author.fullName,
    givenName: author.firstName,
    ...(author.lastName ? { familyName: author.lastName } : {}),
    jobTitle: locale === "en" ? author.jobTitleEn : author.jobTitle,
    description: locale === "en" ? author.bioEn : author.bio,
    knowsAbout: locale === "en" ? [...author.knowsAboutEn] : [...author.knowsAbout],
    email: `mailto:${author.email}`,
    url: locale === "en" ? "https://leadone.online/en/about/" : author.url,
    sameAs: [...author.sameAs],
    worksFor: { "@id": "https://leadone.online/#organization" },
  };
}
