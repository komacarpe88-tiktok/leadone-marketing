import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Personuppgiftsbiträdesavtal (PUB-avtal) | LeadOne Marketing",
  description:
    "LeadOne Marketing OÜ:s standardavtal för behandling av personuppgifter inom tjänsten Omdömesmaskinen — i enlighet med GDPR artikel 28.",
};

const EFFECTIVE_DATE = "2026-06-10";

export default function PubAvtalPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
            Juridiskt
          </p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-3 leading-tight">
            Personuppgiftsbiträdesavtal
          </h1>
          <p className="text-[13px] font-mono text-zinc-500 mb-10">
            PUB-avtal · Version 1.0 · Gäller från {EFFECTIVE_DATE}
          </p>

          <div className="flex flex-col gap-10 text-[15px] text-zinc-400 leading-relaxed">

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">1. Parter</h2>
              <p>Detta personuppgiftsbiträdesavtal (&quot;PUB-avtalet&quot;) ingås mellan:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-4 list-disc list-outside marker:text-zinc-600">
                <li><strong className="text-zinc-300">Personuppgiftsansvarig</strong> — det företag eller den organisation (&quot;Uppdragsgivaren&quot;) som anlitar LeadOne Marketing OÜ för tjänsten Omdömesmaskinen.</li>
                <li><strong className="text-zinc-300">Personuppgiftsbiträde</strong> — LeadOne Marketing OÜ, registrerat i Estland (EU), e-post: info@leadone.online (&quot;LeadOne&quot;).</li>
              </ul>
              <p className="mt-3">PUB-avtalet utgör en del av det tjänsteavtal som ingås mellan parterna och gäller under hela avtalstiden.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">2. Bakgrund och syfte</h2>
              <p>LeadOne tillhandahåller tjänsten Omdömesmaskinen, som innebär att LeadOne på Uppdragsgivarens vägnar skickar SMS-förfrågningar till Uppdragsgivarens befintliga kunder för att samla in Google-recensioner.</p>
              <p className="mt-3">I samband med detta behandlar LeadOne personuppgifter tillhörande Uppdragsgivarens kunder. Detta PUB-avtal reglerar den behandlingen i enlighet med Europaparlamentets och rådets förordning (EU) 2016/679 (&quot;GDPR&quot;), artikel 28.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">3. Behandlingens art och syfte</h2>
              <div className="rounded-xl overflow-hidden mt-2" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr style={{ background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold w-[40%]">Behandlingens syfte</td>
                      <td className="px-4 py-3">Skicka SMS-förfrågningar om Google-recensioner till Uppdragsgivarens befintliga kunder</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Typ av uppgifter</td>
                      <td className="px-4 py-3">Namn och mobiltelefonnummer. I förekommande fall e-postadress.</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Registrerade</td>
                      <td className="px-4 py-3">Uppdragsgivarens befintliga kunder</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Behandlingens varaktighet</td>
                      <td className="px-4 py-3">Under avtalstiden. Uppgifter raderas senast 30 dagar efter avtalets upphörande.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">4. LeadOnes åtaganden</h2>
              <p>LeadOne förbinder sig att:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-4 list-disc list-outside marker:text-zinc-600">
                <li>Behandla personuppgifter uteslutande enligt dokumenterade instruktioner från Uppdragsgivaren och för det syfte som anges i avsnitt 3.</li>
                <li>Säkerställa att personer med behörighet att behandla uppgifterna har åtagit sig konfidentialitet.</li>
                <li>Vidta lämpliga tekniska och organisatoriska säkerhetsåtgärder enligt GDPR artikel 32.</li>
                <li>Inte anlita ytterligare underbiträden utan att informera Uppdragsgivaren i förväg och ge möjlighet att invända.</li>
                <li>Bistå Uppdragsgivaren med att uppfylla sina skyldigheter avseende registrerades rättigheter (tillgång, rättelse, radering m.m.).</li>
                <li>Radera eller återlämna alla personuppgifter efter avtalets upphörande, enligt Uppdragsgivarens val.</li>
                <li>Tillhandahålla all information som krävs för att påvisa efterlevnad av artikel 28 GDPR.</li>
                <li>Utan onödigt dröjsmål informera Uppdragsgivaren om en personuppgiftsincident som rör de behandlade uppgifterna.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">5. Underbiträden</h2>
              <p>Uppdragsgivaren ger generellt förhandsgodkännande till att LeadOne anlitar nedanstående underbiträden. LeadOne ansvarar för att dessa underbiträden uppfyller motsvarande dataskyddskrav.</p>
              <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr style={{ background: "var(--surface)" }}>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Underbiträde</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Syfte</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Land</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Skyddsåtgärd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">GoHighLevel / LeadConnector</td>
                      <td className="px-4 py-3">CRM, kontakthantering, automationsflöden</td>
                      <td className="px-4 py-3">USA</td>
                      <td className="px-4 py-3">SCCs</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300">Twilio Inc.</td>
                      <td className="px-4 py-3">SMS-leverans</td>
                      <td className="px-4 py-3">USA</td>
                      <td className="px-4 py-3">SCCs</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">Google LLC</td>
                      <td className="px-4 py-3">Google Business Profile</td>
                      <td className="px-4 py-3">USA</td>
                      <td className="px-4 py-3">SCCs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[13px] text-zinc-500">SCCs = Standard Contractual Clauses (artikel 46.2(c) GDPR). LeadOne meddelar Uppdragsgivaren vid förändringar i underbiträdeslistan.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">6. Säkerhet</h2>
              <p>LeadOne vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda personuppgifter mot obehörig åtkomst, förlust eller förstöring, inklusive:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-4 list-disc list-outside marker:text-zinc-600">
                <li>Krypterad dataöverföring (TLS/HTTPS)</li>
                <li>Åtkomstkontroll med rollbaserade behörigheter</li>
                <li>Begränsad åtkomst till personuppgifter — enbart behörig personal</li>
                <li>Säker radering av uppgifter vid avtalets upphörande</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">7. Personuppgiftsincidenter</h2>
              <p>LeadOne ska utan onödigt dröjsmål, och om möjligt inom 24 timmar, informera Uppdragsgivaren om LeadOne upptäcker en personuppgiftsincident. LeadOne bistår Uppdragsgivaren med den information som krävs för eventuell anmälan till tillsynsmyndighet.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">8. Uppdragsgivarens instruktioner</h2>
              <p>Uppdragsgivaren ansvarar för att de personuppgifter som lämnas till LeadOne har samlats in på laglig grund och att registrerade kunder informerats om behandlingen i enlighet med GDPR artikel 13/14. Uppdragsgivaren ansvarar för att inhämtade kunduppgifter är aktuella och korrekta.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">9. Avtalstid och upphörande</h2>
              <p>PUB-avtalet gäller under samma tid som tjänsteavtalet mellan parterna. Vid avtalets upphörande raderar LeadOne samtliga personuppgifter inom 30 dagar, om inte lagstadgad skyldighet kräver längre lagring. Uppdragsgivaren kan begära skriftlig bekräftelse på radering.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">10. Tillämplig lag och tvister</h2>
              <p>Detta PUB-avtal regleras av EU:s dataskyddsförordning (GDPR) samt, i tillämpliga delar, estnisk rätt. Tvister ska i första hand lösas genom förhandling. I andra hand avgörs tvister av behörig domstol i Estland.</p>
            </div>

            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">11. Ingående av avtal</h2>
              <p>PUB-avtalet träder i kraft när Uppdragsgivaren ingår tjänsteavtal med LeadOne Marketing OÜ för Omdömesmaskinen. Avtalet kan även ingås separat genom skriftlig bekräftelse via e-post till info@leadone.online.</p>
              <p className="mt-3">För frågor om detta avtal, kontakta oss på <a href="mailto:info@leadone.online" className="underline" style={{ color: "var(--accent)" }}>info@leadone.online</a>.</p>
            </div>

          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}
