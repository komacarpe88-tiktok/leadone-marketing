import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("malmo")!;

export const metadata: Metadata = {
  title: "Marknadsföring Malmö | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Malmö med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-malmo/",
  },
  openGraph: {
    title: "Marknadsföring Malmö | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Malmö med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-malmo/",
  },
};

export default function MarknadsforingMalmoPage() {
  return <MarknadsforingCityPage city={city} />;
}
