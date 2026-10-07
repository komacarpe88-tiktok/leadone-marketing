import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("uppsala")!;

export const metadata: Metadata = {
  title: "Marknadsföring Uppsala | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Uppsala med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-uppsala/",
  },
  openGraph: {
    title: "Marknadsföring Uppsala | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Uppsala med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-uppsala/",
  },
};

export default function MarknadsforingUppsalaPage() {
  return <MarknadsforingCityPage city={city} />;
}
