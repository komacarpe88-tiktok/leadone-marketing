import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("goteborg")!;

export const metadata: Metadata = {
  title: "SEO-byrå Göteborg | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Göteborg som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-goteborg/",
  },
  openGraph: {
    title: "SEO-byrå Göteborg | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Göteborg. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-goteborg/",
  },
};

export default function SeoGoteborgPage() {
  return <CityPage city={city} />;
}
