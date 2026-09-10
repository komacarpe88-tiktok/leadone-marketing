import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("stockholm")!;

export const metadata: Metadata = {
  title: "SEO-byrå Stockholm | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Stockholm som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-stockholm/",
  },
  openGraph: {
    title: "SEO-byrå Stockholm | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Stockholm. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-stockholm/",
  },
};

export default function SeoStockholmPage() {
  return <CityPage city={city} />;
}
