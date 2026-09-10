import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("malmo")!;

export const metadata: Metadata = {
  title: "SEO-byrå Malmö | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Malmö som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-malmo/",
  },
  openGraph: {
    title: "SEO-byrå Malmö | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Malmö. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-malmo/",
  },
};

export default function SeoMalmoPage() {
  return <CityPage city={city} />;
}
