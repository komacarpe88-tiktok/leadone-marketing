import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("linkoping")!;

export const metadata: Metadata = {
  title: "Marknadsföring Linköping | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Linköping med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-linkoping/",
  },
  openGraph: {
    title: "Marknadsföring Linköping | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Linköping med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-linkoping/",
  },
};

export default function MarknadsforingLinkopingPage() {
  return <MarknadsforingCityPage city={city} />;
}
