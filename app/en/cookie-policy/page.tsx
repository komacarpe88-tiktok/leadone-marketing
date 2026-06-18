import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Cookie Policy | LeadOne Marketing",
  description: "LeadOne Marketing's cookie policy — information about how we use cookies on our website.",
  alternates: { canonical: "https://www.leadone.online/en/cookie-policy" },
};

export default function CookiePolicyEn() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Legal</p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">Cookie Policy</h1>
          <div className="flex flex-col gap-8 text-[15px] text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">What are cookies?</h2>
              <p>Cookies are small text files stored in your browser when you visit a website. They are used to make the website function correctly and to improve your experience.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Which cookies do we use?</h2>
              <p>We use necessary cookies for the website to function, and analytical cookies to understand how visitors use the site. We do not use tracking cookies for advertising purposes.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Third-party cookies</h2>
              <p>Our booking widget and chat service (LeadConnector) may place their own cookies. These are governed by their respective privacy policies.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Managing cookies</h2>
              <p>You can delete or block cookies at any time via your browser settings. Note that some features on the website may stop working if you block necessary cookies.</p>
            </div>
            <div>
              <h2 className="text-[17px] font-semibold text-[#F4F4F5] mb-3">Contact</h2>
              <p>Questions about our cookie policy? Contact us at info@leadone.online or call 076-479 66 30.</p>
            </div>
          </div>
        </section>
        <FooterSection locale="en" />
      </main>
    </>
  );
}
