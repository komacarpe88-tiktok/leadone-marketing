import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakta LeadOne — Lokal SEO-byrå Helsingborg | LeadOne Marketing",
  description: "Kontakta LeadOne Marketing för lokal SEO och Google Maps-optimering. Ring +46 763 91 21 81 eller boka ett gratis analyssamtal på 15 minuter.",
  keywords: "kontakta lokal SEO byrå, Google Maps optimering kontakt, LeadOne Marketing Helsingborg",
  alternates: { canonical: "https://leadone.online/kontakt" },
  openGraph: {
    title: "Kontakta LeadOne — Lokal SEO Helsingborg",
    description: "Ring eller boka ett gratis analyssamtal. 15 minuter, ingen förpliktelse — ärlig feedback om din lokala synlighet på Google.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/kontakt",
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
