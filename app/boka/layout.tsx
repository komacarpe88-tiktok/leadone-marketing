import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boka Gratis Analyssamtal | LeadOne Marketing",
  description: "Boka ett kostnadsfritt 15-minuters analyssamtal med LeadOne. Vi går igenom din Google-synlighet, dina konkurrenter och vad som krävs för att nå topp 3 på Google Maps.",
  keywords: "boka SEO analys, gratis genomgång, Google Maps analys, lokal SEO konsultation",
  alternates: { canonical: "https://www.leadone.online/boka" },
  openGraph: {
    title: "Boka Gratis Analyssamtal | LeadOne Marketing",
    description: "15 minuter. Inga säljgrepp. Bara ärlig feedback om din lokala synlighet på Google.",
    locale: "sv_SE",
    type: "website",
    url: "https://www.leadone.online/boka",
  },
};

export default function BokaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
