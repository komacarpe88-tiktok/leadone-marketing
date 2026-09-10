import type { Metadata } from "next";
import { author, authorPersonLd } from "@/lib/author";

/**
 * ProfilePage + Person schema. The blog bylines link here, so this is the page
 * that has to carry a verifiable author identity — the E-E-A-T signal Google
 * actually evaluates (as opposed to how the content was produced).
 */
const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://leadone.online/om-oss/#profilepage",
  "url": "https://leadone.online/om-oss/",
  "mainEntity": authorPersonLd(),
  "isPartOf": { "@id": "https://leadone.online/#website" },
  "about": { "@id": "https://leadone.online/#organization" },
  "inLanguage": "sv-SE",
};

export const metadata: Metadata = {
  title: "Om LeadOne — Lokal SEO-byrå i Helsingborg | LeadOne Marketing",
  description: `LeadOne Marketing hjälper svenska småföretag synas på Google Maps och i lokal sökning. Grundad av ${author.fullName} i Helsingborg. Inga dolda kostnader — bara resultat.`,
  keywords: "lokal SEO byrå Helsingborg, Google Maps optimering Sverige, lokal marknadsföring småföretag, LeadOne Marketing",
  alternates: { canonical: "https://leadone.online/om-oss" },
  openGraph: {
    title: "Om LeadOne — Lokal SEO-byrå i Helsingborg",
    description: "Vi hjälper svenska småföretag synas i topp 3 på Google Maps. Grundad i Helsingborg med fokus på verkliga resultat.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/om-oss",
  },
};

export default function OmOssLayout({ children }: { children: React.ReactNode }) {
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
