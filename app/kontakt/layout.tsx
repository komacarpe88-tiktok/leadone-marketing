import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | LeadOne Marketing",
  description: "Kontakta LeadOne Marketing i Helsingborg. Ring, mejla eller boka ett samtal direkt med Douglas. Svar inom 2 timmar på vardagar.",
  keywords: "kontakt LeadOne, SEO byrå Helsingborg, kontakta lokal SEO expert",
  alternates: { canonical: "https://www.leadone.online/kontakt" },
  openGraph: {
    title: "Kontakt | LeadOne Marketing",
    description: "Kontakta LeadOne Marketing. Inga säljare — du pratar direkt med Douglas. Svar inom 2 timmar.",
    locale: "sv_SE",
    type: "website",
    url: "https://www.leadone.online/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
