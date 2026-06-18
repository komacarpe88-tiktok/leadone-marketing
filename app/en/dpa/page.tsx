import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Data Processing Agreement (DPA) | LeadOne Marketing",
  description: "LeadOne Marketing OÜ's standard agreement for processing personal data within the Review Machine service — in accordance with GDPR Article 28.",
  alternates: { canonical: "https://www.leadone.online/en/dpa" },
};

export default function DpaEn() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Legal</p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-3 leading-tight">Data Processing Agreement</h1>
          <p className="text-[13px] font-mono text-zinc-500 mb-10">DPA · Version 1.0 · Effective from 2026-06-10</p>
          <div className="flex flex-col gap-10 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">1. Parties</h2>
              <p>This Data Processing Agreement ("DPA") is entered into between:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-4 list-disc list-outside marker:text-zinc-600">
                <li><strong className="text-zinc-300">Data Controller</strong> — the company or organisation ("Client") that engages LeadOne Marketing OÜ for the Review Machine service.</li>
                <li><strong className="text-zinc-300">Data Processor</strong> — LeadOne Marketing OÜ, registered in Estonia (EU), email: info@leadone.online ("LeadOne").</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">2. Background and purpose</h2>
              <p>LeadOne provides the Review Machine service, which involves LeadOne sending SMS review requests to the Client's existing customers on the Client's behalf. This DPA governs that processing in accordance with GDPR Article 28.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">3. Nature and purpose of processing</h2>
              <div className="rounded-xl overflow-hidden mt-2" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <tbody>
                    <tr style={{ background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold w-[40%]">Purpose</td>
                      <td className="px-4 py-3">Sending SMS review requests to the Client's existing customers</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Data types</td>
                      <td className="px-4 py-3">Name and mobile phone number. Where applicable, email address.</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Data subjects</td>
                      <td className="px-4 py-3">The Client's existing customers</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300 font-semibold">Duration</td>
                      <td className="px-4 py-3">During the contract term. Data deleted within 30 days of contract termination.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">4. LeadOne's obligations</h2>
              <ul className="mt-3 flex flex-col gap-2 pl-4 list-disc list-outside marker:text-zinc-600">
                <li>Process personal data solely according to documented instructions from the Client.</li>
                <li>Ensure that persons authorised to process the data have committed to confidentiality.</li>
                <li>Implement appropriate technical and organisational security measures per GDPR Article 32.</li>
                <li>Not engage additional sub-processors without informing the Client in advance.</li>
                <li>Assist the Client in fulfilling obligations regarding data subject rights.</li>
                <li>Delete or return all personal data after contract termination.</li>
                <li>Notify the Client without undue delay of any personal data breach.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">5. Sub-processors</h2>
              <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-[14px]">
                  <thead>
                    <tr style={{ background: "var(--surface)" }}>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Sub-processor</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Country</th>
                      <th className="text-left px-4 py-3 text-zinc-300 font-semibold">Safeguard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderTop: "1px solid var(--border)" }}>
                      <td className="px-4 py-3 text-zinc-300">GoHighLevel / LeadConnector</td>
                      <td className="px-4 py-3">CRM, contact management, automation</td>
                      <td className="px-4 py-3">USA</td>
                      <td className="px-4 py-3">SCCs</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
                      <td className="px-4 py-3 text-zinc-300">Twilio Inc.</td>
                      <td className="px-4 py-3">SMS delivery</td>
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
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">6. Entering into the agreement</h2>
              <p>This DPA takes effect when the Client enters into a service agreement with LeadOne Marketing OÜ for the Review Machine. It can also be entered into separately via written confirmation to <a href="mailto:info@leadone.online" className="underline" style={{ color: "var(--accent)" }}>info@leadone.online</a>.</p>
            </div>
          </div>
        </section>
        <FooterSection locale="en" />
      </main>
    </>
  );
}
