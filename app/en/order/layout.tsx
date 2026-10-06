import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Local SEO | LeadOne Marketing",
  description:
    "Order LaunchMap™ or MapPilot™ from LeadOne. Local SEO and Google Maps optimisation for local businesses — no lock-in.",
  keywords: "order SEO, local SEO packages, LaunchMap, Google Maps optimisation",
  alternates: { canonical: "https://leadone.online/en/order/" },
  openGraph: {
    title: "Order Local SEO | LeadOne Marketing",
    description:
      "Pick the package that fits your business. Local SEO that brings more calls and more customers.",
    locale: "en_US",
    type: "website",
    url: "https://leadone.online/en/order/",
  },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
