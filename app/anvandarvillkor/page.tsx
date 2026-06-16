import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Användarvillkor | LeadOne Marketing",
  description: "LeadOne Marketings användarvillkor — regler och riktlinjer för användning av våra tjänster och webbplats.",
};

export default function AnvandarvillkorPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Juridiskt
          </p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">
            Användarvillkor
          </h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Allmänt</h2>
              <p>Genom att använda LeadOne Marketings webbplats och tjänster godkänner du dessa användarvillkor. Villkoren gäller mellan dig och LeadOne Marketing, Helsingborg, Sverige.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Tjänster</h2>
              <p>LeadOne Marketing erbjuder lokal SEO-optimering, Google Business Profile-hantering och recensionssystem för svenska småföretag. Tjänsternas exakta omfattning framgår av respektive avtal.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Betalning</h2>
              <p>Priser och betalningsvillkor fastställs i samband med avtalets ingående. LeadOne Marketing förbehåller sig rätten att justera priser med 30 dagars förvarning.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Immateriella rättigheter</h2>
              <p>Allt innehåll på denna webbplats tillhör LeadOne Marketing och får inte kopieras eller användas utan skriftligt tillstånd.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Ansvarsbegränsning</h2>
              <p>LeadOne Marketing garanterar inte specifika rankingresultat då sökmotorer kontinuerligt uppdaterar sina algoritmer. Vi förbinder oss till att genomföra alla åtgärder enligt bästa praxis.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Kontakt</h2>
              <p>Frågor om användarvillkoren? Kontakta oss på info@leadone.online eller ring 076-479 66 30.</p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}
