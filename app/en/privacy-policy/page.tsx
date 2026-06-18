import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadOne Marketing",
  description: "LeadOne Marketing OÜ's privacy policy — how we collect, use and protect your personal data.",
  alternates: { canonical: "https://www.leadone.online/en/privacy-policy" },
};

export default function PrivacyPolicyEn() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Legal</p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">Privacy Policy</h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Data Controller</h2>
              <p>LeadOne Marketing OÜ, registered in Estonia (EU). Email: info@leadone.online. Phone: 076-479 66 30.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">What data do we collect?</h2>
              <p>We collect data you voluntarily provide via contact forms or bookings — name, email address and phone number. We also collect anonymised visit statistics via web analytics.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">How do we use your data?</h2>
              <p>Your data is used solely to handle your enquiry or booking, and to contact you with a response. We never sell your data to third parties.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">LeadOne as a data processor</h2>
              <p>When LeadOne Marketing OÜ provides the Review Machine service, we process personal data (names and phone numbers belonging to the client's customers) on the client's behalf. In these cases, LeadOne acts as a <strong className="text-zinc-300">data processor</strong> and the client acts as the data controller.</p>
              <p className="mt-3">This processing is governed by a separate <a href="/en/dpa" className="underline" style={{ color: "var(--accent)" }}>Data Processing Agreement (DPA)</a> entered into with each client.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Sub-processors</h2>
              <div className="rounded-xl overflow-hidden mt-2" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr style={{ background: "var(--surface)" }}>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Sub-processor</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">GoHighLevel / LeadConnector</td>
                      <td className="px-4 py-3">CRM platform, contact management and automation</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">Twilio (via LeadConnector)</td>
                      <td className="px-4 py-3">SMS delivery of review requests</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">Google LLC</td>
                      <td className="px-4 py-3">Google Business Profile — publishing review links</td>
                      <td className="px-4 py-3">USA (SCCs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Your rights</h2>
              <p>You have the right to request access to, correction or deletion of your personal data, as well as the right to object to processing and the right to data portability. Contact us at info@leadone.online. You also have the right to lodge a complaint with your national supervisory authority.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Contact</h2>
              <p>Questions about our privacy policy? Contact us at info@leadone.online or call 076-479 66 30.</p>
              <p className="mt-2">For clients wishing to enter into a data processing agreement, see our <a href="/en/dpa" className="underline" style={{ color: "var(--accent)" }}>DPA page</a>.</p>
            </div>
          </div>
        </section>
        <FooterSection locale="en" />
      </main>
    </>
  );
}
