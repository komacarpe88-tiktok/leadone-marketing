import type { Metadata } from "next";
import Nav               from "@/components/Nav";

export const metadata: Metadata = {
  title: "LeadOne Marketing | Lokal SEO & Google Maps-optimering",
  description: "Vi hjälper svenska småföretag synas i topp 3 på Google Maps. Lokal SEO, GBP-optimering och recensionssystem. Boka gratis analys.",
  keywords: "lokal SEO, Google Maps optimering, Google Business Profile, lokalt sök, recensionssystem, lokal marknadsföring, Helsingborg, Sverige",
  alternates: { canonical: "https://www.leadone.online" },
  openGraph: {
    title: "LeadOne Marketing | Lokal SEO & Google Maps-optimering",
    description: "Vi hjälper svenska småföretag synas i topp 3 på Google Maps. Mer synlighet, fler samtal, fler kunder.",
    locale: "sv_SE",
    type: "website",
    url: "https://www.leadone.online",
  },
};
import ScrollProgress    from "@/components/ScrollProgress";
import HeroStatic        from "@/components/HeroStatic";
import ScrollVideoSection from "@/components/ScrollVideoSection";
import StatementSection  from "@/components/StatementSection";
import ProblemSection    from "@/components/ProblemSection";
import TrustedBySection  from "@/components/TrustedBySection";
import FounderSection    from "@/components/FounderSection";
import ServicesSection   from "@/components/ServicesSection";
import ProcessSection    from "@/components/ProcessSection";
import PricingSection    from "@/components/PricingSection";
import ResultsSection    from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection        from "@/components/FAQSection";
import CtaSection        from "@/components/CtaSection";
import FooterSection     from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <h1 className="sr-only">Lokal SEO & Google Maps-optimering för svenska småföretag — LeadOne Marketing</h1>
      <HeroStatic />
      <ScrollVideoSection />
      <StatementSection />
      <ProblemSection />
      <TestimonialsSection />
      <TrustedBySection />
      <FounderSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <ResultsSection />
      <FAQSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
