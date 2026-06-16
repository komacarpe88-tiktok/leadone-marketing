import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Cookie-policy | LeadOne Marketing",
  description: "LeadOne Marketings cookie-policy — information om hur vi använder cookies och liknande tekniker på vår webbplats.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Juridiskt
          </p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">
            Cookie-policy
          </h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Vad är cookies?</h2>
              <p>Cookies är små textfiler som lagras i din webbläsare när du besöker en webbplats. De används för att webbplatsen ska fungera korrekt och för att förbättra din upplevelse.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Vilka cookies använder vi?</h2>
              <p>Vi använder nödvändiga cookies för att webbplatsen ska fungera, samt analytiska cookies för att förstå hur besökare använder sidan. Vi använder inga spårningscookies för reklamändamål.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Tredjepartscookies</h2>
              <p>Vår bokningswidget och chatt-tjänst (LeadConnector) kan placera egna cookies. Dessa regleras av deras respektive integritetspolicyer.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Hur hanterar du cookies?</h2>
              <p>Du kan när som helst radera eller blockera cookies via din webbläsares inställningar. Observera att vissa funktioner på webbplatsen kan sluta fungera om du blockerar nödvändiga cookies.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Kontakt</h2>
              <p>Frågor om vår cookie-policy? Kontakta oss på info@leadone.online eller ring 076-479 66 30.</p>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}
