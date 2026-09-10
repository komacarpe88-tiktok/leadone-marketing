import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beställ lokal SEO | LeadOne Marketing",
  description:
    "Beställ LaunchMap™ eller Komplett Paket från LeadOne. Lokal SEO och Google Maps-optimering för svenska företag — utan bindningstid.",
  keywords: "beställ SEO, lokal SEO paket, LaunchMap, Google Maps optimering",
  alternates: { canonical: "https://leadone.online/bestall/" },
  openGraph: {
    title: "Beställ lokal SEO | LeadOne Marketing",
    description:
      "Välj det paket som passar ditt företag. Lokal SEO som ger fler samtal och fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/bestall/",
  },
};

export default function BestallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
