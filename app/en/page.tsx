import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HeroStatic from "@/components/HeroStatic";
import StatementSection from "@/components/StatementSection";
import ProblemSection from "@/components/ProblemSection";
import TrustedBySection from "@/components/TrustedBySection";
import FounderSection from "@/components/FounderSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "LeadOne Marketing | Local SEO & Google Maps Optimisation",
  description:
    "Sweden's local SEO agency. We get you into the top 3 on Google Maps — more visibility, more calls, more customers.",
  keywords: "local SEO, Google Maps optimisation, Google Business Profile, Local Pack, review system, SEO agency Sweden",
  alternates: {
    canonical: "https://www.leadone.online/en",
    languages: { "sv": "https://www.leadone.online/" },
  },
  openGraph: {
    title: "LeadOne Marketing | Local SEO & Google Maps Optimisation",
    description: "Local SEO for Swedish businesses. Rank in the Local Pack, get more reviews, grow revenue.",
    locale: "en_GB",
    type: "website",
    url: "https://www.leadone.online/en",
  },
};

export default function EnglishHomePage() {
  return (
    <main lang="en">
      <ScrollProgress />
      <Nav />
      <h1 className="sr-only">Local SEO & Google Maps optimisation for Swedish businesses — LeadOne Marketing</h1>
      <HeroStatic locale="en" />
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
      <FooterSection locale="en" />
    </main>
  );
}
