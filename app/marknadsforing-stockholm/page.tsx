import type { Metadata } from "next";
import MarknadsforingCityPage from "@/components/MarknadsforingCityPage";
import { getCity } from "@/lib/cities";

const city = getCity("stockholm")!;

export const metadata: Metadata = {
  title: "Marknadsföring Stockholm | Lokal digital synlighet | LeadOne",
  description:
    "LeadOne erbjuder digital marknadsföring i Stockholm med fokus på lokal synlighet: Google Maps, Google Business Profile, recensioner och lokal SEO. Boka gratis analys.",
  alternates: {
    canonical: "https://leadone.online/marknadsforing-stockholm/",
  },
  openGraph: {
    title: "Marknadsföring Stockholm | Lokal digital synlighet | LeadOne",
    description:
      "Digital marknadsföring i Stockholm med fokus på det som faktiskt driver lokala kunder: Google Maps, GBP-optimering och recensioner.",
    locale: "sv_SE",
    type: "website",
    url: "https://leadone.online/marknadsforing-stockholm/",
  },
};

export default function MarknadsforingStockholmPage() {
  return <MarknadsforingCityPage city={city} />;
}
