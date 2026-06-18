import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact | LeadOne Marketing",
  description: "Get in touch with LeadOne Marketing. Book a free analysis call or contact us directly.",
  alternates: { canonical: "https://www.leadone.online/en/contact" },
};

export default function ContactPageEn() {
  return (
    <>
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>Contact</p>
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] mb-8 leading-tight">Get in touch</h1>

          <div className="flex flex-col gap-6 mb-12">
            <a href="tel:0764796630" className="flex items-center gap-4 rounded-2xl p-5 transition-colors duration-200 group" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.1)" }}>
                <Phone size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mb-0.5">Phone</p>
                <p className="text-[15px] text-zinc-300 group-hover:text-white transition-colors">076-479 66 30</p>
              </div>
            </a>

            <a href="mailto:info@leadone.online" className="flex items-center gap-4 rounded-2xl p-5 transition-colors duration-200 group" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.1)" }}>
                <EnvelopeSimple size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mb-0.5">Email</p>
                <p className="text-[15px] text-zinc-300 group-hover:text-white transition-colors">info@leadone.online</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.1)" }}>
                <MapPin size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono mb-0.5">Location</p>
                <p className="text-[15px] text-zinc-300">Helsingborg, Sweden</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-[14px] text-zinc-300 leading-relaxed mb-4">
              The fastest way to get started is to book a free 15-minute analysis call. We'll review your current ranking and give you a concrete plan.
            </p>
            <a
              href="/en/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[14px] text-[#08080A] transition-colors duration-200"
              style={{ background: "var(--accent)" }}
            >
              Book free analysis →
            </a>
          </div>
        </section>
        <FooterSection locale="en" />
      </main>
    </>
  );
}
