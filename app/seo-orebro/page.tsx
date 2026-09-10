import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("orebro")!;

export const metadata: Metadata = {
  title: "SEO-byrå Örebro | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Örebro som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-orebro/",
  },
  openGraph: {
    title: "SEO-byrå Örebro | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Örebro. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-orebro/",
  },
};

export default function SeoOrebroPage() {
  return <CityPage city={city} />;
}
