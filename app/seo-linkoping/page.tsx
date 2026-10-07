import type { Metadata } from "next";
import CityPage from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("linkoping")!;

export const metadata: Metadata = {
  title: "SEO-byrå Linköping | Digital marknadsföring & Google Maps | LeadOne",
  description:
    "LeadOne är en SEO-byrå och leverantör av digital marknadsföring i Linköping som hjälper företag synas i topp 3 på Google Maps och i lokal sökning. Lokal SEO, GBP-optimering, recensioner och citeringar. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/seo-linkoping/",
  },
  openGraph: {
    title: "SEO-byrå Linköping | Digital marknadsföring & Google Maps | LeadOne",
    description:
      "SEO-byrå och digital marknadsföring i Linköping. Vi optimerar din synlighet på Google Maps och i lokala sökresultat — mer trafik, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/seo-linkoping/",
  },
};

export default function SeoLinkopingPage() {
  return <CityPage city={city} />;
}
