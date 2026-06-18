import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, ChatCircle, ArrowsClockwise, MegaphoneSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Review Machine — Automated Review Management | LeadOne",
  description: "Automated review management — Request, Response, Repurpose. Automatic SMS with direct link to Google review, automated review responses and publishing on website and social media.",
  alternates: { canonical: "https://www.leadone.online/en/services/reviews" },
};

const BOOKING_URL = "/en/book";

const features = [
  { icon: ChatCircle, title: "Request", desc: "Automatic SMS with direct link to Google review — sent to your customers immediately after completed work." },
  { icon: ArrowsClockwise, title: "Response", desc: "Every review is automatically responded to with a personalised, professional response. Never miss a review again." },
  { icon: MegaphoneSimple, title: "Repurpose", desc: "Reviews are automatically published on your website and social media. Maximum reach from every review." },
];

export default function ReviewsEnPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="relative py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-[640px]">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>Monthly · No commitment</p>
              <h1 className="text-[2.8rem] md:text-[3.8rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] mb-5">Review Machine</h1>
              <p className="text-[1.2rem] text-zinc-300 leading-relaxed mb-6 max-w-[44ch]">
                Automated review management on autopilot. Request, Response, Repurpose — we handle the entire cycle.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-[2.4rem] font-bold text-[#F4F4F5]">1,499</span>
                <span className="text-zinc-400 text-[16px]">SEK/month · no commitment</span>
              </div>
              <a href={BOOKING_URL} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200">
                Book free analysis
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>How it works</p>
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-12">Three steps. Fully automated.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={f.title} className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest mb-3">0{i + 1}</p>
                  <f.icon size={22} className="mb-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <h3 className="text-[1rem] font-semibold text-[#F4F4F5] mb-2">{f.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-4">Start collecting reviews on autopilot</h2>
            <p className="text-zinc-400 mb-8 max-w-[44ch] mx-auto">Book a free 15-minute analysis call and see how Review Machine works for your business.</p>
            <a href={BOOKING_URL} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200">
              Book free analysis
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
    </>
  );
}
