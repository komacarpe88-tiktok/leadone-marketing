import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Terms of Service | LeadOne Marketing",
  description: "LeadOne Marketing OÜ's terms of service — rules and guidelines for use of our services and website.",
  alternates: { canonical: "https://www.leadone.online/en/terms" },
};

export default function TermsEn() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Legal</p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">Terms of Service</h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">General</h2>
              <p>By using LeadOne Marketing's website and services you agree to these terms. The terms apply between you and LeadOne Marketing OÜ, registered in Estonia (EU).</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Services</h2>
              <p>LeadOne Marketing offers local SEO optimisation, Google Business Profile management and review systems for Swedish businesses. The exact scope of services is set out in the relevant agreement.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Payment</h2>
              <p>Prices and payment terms are agreed at the time of entering the contract. LeadOne Marketing reserves the right to adjust prices with 30 days' notice.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Intellectual property</h2>
              <p>All content on this website belongs to LeadOne Marketing OÜ and may not be copied or used without written permission.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Limitation of liability</h2>
              <p>LeadOne Marketing does not guarantee specific ranking results as search engines continuously update their algorithms. We commit to implementing all measures according to best practice.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Contact</h2>
              <p>Questions about these terms? Contact us at info@leadone.online or call 076-479 66 30.</p>
            </div>
          </div>
        </section>
        <FooterSection locale="en" />
      </main>
    </>
  );
}
