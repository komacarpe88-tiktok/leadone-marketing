import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("orebro")!;

export const metadata: Metadata = {
  title: "Marknadsföring Örebro | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Örebro med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-orebro/",
  },
  openGraph: {
    title: "Marknadsföring Örebro | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Örebro med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-orebro/",
  },
};

export default function MarknadsforingOrebroPage() {
  return <MarknadsforingCityPage city={city} />;
}
