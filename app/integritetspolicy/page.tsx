import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Integritetspolicy | LeadOne Marketing",
  description: "LeadOne Marketings integritetspolicy — hur vi samlar in, använder och skyddar dina personuppgifter.",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Juridiskt
          </p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">
            Integritetspolicy
          </h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Personuppgiftsansvarig</h2>
              <p>LeadOne Marketing OÜ, registrerat i Estland (EU). E-post: info@leadone.online. Telefon: 076-479 66 30.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Vilka uppgifter samlar vi in?</h2>
              <p>Vi samlar in uppgifter du lämnar frivilligt via kontaktformulär eller bokningar — namn, e-postadress och telefonnummer. Vi samlar även in anonymiserad besöksstatistik via webbanalys.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Hur använder vi uppgifterna?</h2>
              <p>Dina uppgifter används enbart för att hantera din förfrågan eller bokning, och för att kontakta dig med svar. Vi säljer aldrig dina uppgifter till tredje part.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Hur länge sparar vi uppgifterna?</h2>
              <p>Vi sparar dina uppgifter så länge det är nödvändigt för att uppfylla syftet med insamlingen, eller så länge lagen kräver det. För recensionstjänsten raderas kunduppgifter senast 30 dagar efter att samarbetsavtalet med uppdragsgivaren avslutas, om inte annat avtalats.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">LeadOne som personuppgiftsbiträde</h2>
              <p>När LeadOne Marketing OÜ tillhandahåller tjänsten Omdömesmaskinen behandlar vi personuppgifter (namn och telefonnummer tillhörande uppdragsgivarens kunder) för uppdragsgivarens räkning. I dessa fall agerar LeadOne Marketing OÜ som <strong className="text-zinc-300">personuppgiftsbiträde</strong> och uppdragsgivaren som personuppgiftsansvarig.</p>
              <p className="mt-3">Behandlingen regleras av ett separat <a href="/pub-avtal" className="underline" style={{ color: "var(--accent)" }}>Personuppgiftsbiträdesavtal (PUB-avtal)</a> som ingås med varje uppdragsgivare. Uppgifterna används uteslutande för att skicka recensionsförfrågningar via SMS på uppdragsgivarens vägnar.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Underbiträden</h2>
              <p className="mb-4">LeadOne Marketing OÜ anlitar följande underbiträden vid behandling av personuppgifter inom tjänsten Omdömesmaskinen:</p>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr style={{ background: "var(--surface)" }}>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Underbiträde</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Syfte</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Datalagringsland</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">GoHighLevel / LeadConnector</td>
                      <td className="px-4 py-3">CRM-plattform, kontakthantering och automationsflöden</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">Twilio (via LeadConnector)</td>
                      <td className="px-4 py-3">SMS-leverans av recensionsförfrågningar</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">Google LLC</td>
                      <td className="px-4 py-3">Google Business Profile — publicering av recensionslänkar</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[13px] text-zinc-500">SCCs = Standard Contractual Clauses enligt artikel 46.2(c) GDPR, vilket möjliggör laglig överföring av personuppgifter till tredjeland.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Rättslig grund</h2>
              <p>Behandling av personuppgifter för webbplatsbesökare sker med stöd av <strong className="text-zinc-300">berättigat intresse</strong> (art. 6.1(f) GDPR). Behandling av kunduppgifter inom Omdömesmaskinen sker med stöd av <strong className="text-zinc-300">avtal</strong> (art. 6.1(b) GDPR) och instruktioner från personuppgiftsansvarig uppdragsgivare.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Dina rättigheter</h2>
              <p>Du har rätt att begära tillgång till, rättelse, radering eller begränsning av dina personuppgifter, samt rätt att invända mot behandling och rätt till dataportabilitet. Kontakta oss på info@leadone.online. Du har även rätt att lämna klagomål till din nationella tillsynsmyndighet (i Sverige: Integritetsskyddsmyndigheten, imy.se).</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Kontakt och PUB-avtal</h2>
              <p>Frågor om vår integritetspolicy eller hantering av personuppgifter? Hör av dig till info@leadone.online eller ring 076-479 66 30.</p>
              <p className="mt-2">För uppdragsgivare som önskar teckna personuppgiftsbiträdesavtal, se vår <a href="/pub-avtal" className="underline" style={{ color: "var(--accent)" }}>PUB-avtalssida</a>.</p>
            </div>

          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}
