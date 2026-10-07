import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("uppsala")!;

export const metadata: Metadata = {
  title: "SEO-byrå Uppsala | Digital marknadsföring & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå och leverantör av digital marknadsföring i Uppsala som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-uppsala/",
  },
  openGraph: {
    title: "SEO-byrå Uppsala | Digital marknadsföring & Google Maps | LeadOne",
    description:
      "SEO-byrå och digital marknadsföring i Uppsala. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-uppsala/",
  },
};

export default function SeoUppsalaPage() {
  return <CityPage city={city} />;
}
