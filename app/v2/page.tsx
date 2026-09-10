import V2Hero from "@/components/v2/HeroSection";
import V2Problem from "@/components/v2/ProblemSection";
import V2Calculator from "@/components/v2/CalculatorSection";
import V2SocialProof from "@/components/v2/SocialProofSection";
import V2Offer from "@/components/v2/OfferSection";
import V2Process from "@/components/v2/ProcessSection";
import V2Faq from "@/components/v2/FaqSection";

export default function V2Home() {
  return (
    <main>
      <V2Hero />
      <V2Problem />
      <V2Calculator />
      <V2SocialProof />
      <V2Offer />
      <V2Process />
      <V2Faq />
    </main>
  );
}
