import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("jonkoping")!;

export const metadata: Metadata = {
  title: "Marknadsföring Jönköping | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Jönköping med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-jonkoping/",
  },
  openGraph: {
    title: "Marknadsföring Jönköping | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Jönköping med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-jonkoping/",
  },
};

export default function MarknadsforingJonkopingPage() {
  return <MarknadsforingCityPage city={city} />;
}
