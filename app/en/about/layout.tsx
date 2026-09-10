import type { Metadata } from "next";
import { author, authorPersonLd } from "@/lib/author";

/**
 * English counterpart of /om-oss/. Carries the same ProfilePage + Person
 * identity signals, since the English blog bylines link here.
 */
const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://leadone.online/en/about/#profilepage",
  "url": "https://leadone.online/en/about/",
  "mainEntity": authorPersonLd("en"),
  "isPartOf": { "@id": "https://leadone.online/#website" },
  "about": { "@id": "https://leadone.online/#organization" },
  "inLanguage": "en",
};

export const metadata: Metadata = {
  title: "About LeadOne — Local SEO Agency in Helsingborg | LeadOne Marketing",
  description: `LeadOne Marketing helps local businesses rank on Google Maps and in local search. Founded by ${author.fullName} in Helsingborg, Sweden. No hidden costs — just results.`,
  keywords: "local SEO agency, Google Maps optimisation, local marketing, LeadOne Marketing",
  alternates: { canonical: "https://leadone.online/en/about/" },
  openGraph: {
    title: "About LeadOne — Local SEO Agency in Helsingborg",
    description: "We help local businesses rank in the top 3 on Google Maps. Founded in Helsingborg with a focus on measurable results.",
    locale: "en_US",
    type: "website",
    url: "https://leadone.online/en/about/",
  },
};

export default function AboutLayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />
      {children}
    </>
  );
}
