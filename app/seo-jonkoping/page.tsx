import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("jonkoping")!;

export const metadata: Metadata = {
  title: "SEO-byrå Jönköping | Lokal SEO & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå i Jönköping som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-jonkoping/",
  },
  openGraph: {
    title: "SEO-byrå Jönköping | Lokal SEO & Google Maps | LeadOne",
    description:
      "SEO-byrå i Jönköping. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-jonkoping/",
  },
};

export default function SeoJonkopingPage() {
  return <CityPage city={city} />;
}
