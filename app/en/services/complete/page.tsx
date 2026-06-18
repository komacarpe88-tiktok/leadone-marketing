import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Complete Package — LaunchMap™ + Review Machine | LeadOne",
  description: "LaunchMap™ + Review Machine — everything in one. No start-up cost, no commitment. 3,499 SEK/month.",
  alternates: { canonical: "https://www.leadone.online/en/services/complete" },
};

const BOOKING_URL = "/en/book";

const includes = [
  "Complete Google Business Profile optimisation",
  "Keyword analysis for your industry and city",
  "50+ directory listings with consistent NAP",
  "Ranking heatmap — before and after",
  "Strategy report with prioritised actions",
  "Automatic SMS review requests to customers",
  "Automated review responses",
  "Review publishing on website and social media",
  "Monthly reporting with real numbers",
];

export default function CompleteEnPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">
        <section className="relative py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-[640px]">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>Best value · No commitment</p>
              <h1 className="text-[2.8rem] md:text-[3.8rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] mb-5">Complete Package</h1>
              <p className="text-[1.2rem] text-zinc-300 leading-relaxed mb-6 max-w-[44ch]">
                LaunchMap™ + Review Machine in one. Everything you need to dominate local search — without a start-up cost.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-[2.4rem] font-bold text-[#F4F4F5]">3,499</span>
                <span className="text-zinc-400 text-[16px]">SEK/month · no commitment · no start-up cost</span>
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
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>What's included</p>
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-10">Everything. Nothing left out.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <p className="text-[15px] text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-4">Get started today</h2>
            <p className="text-zinc-400 mb-8 max-w-[44ch] mx-auto">Book a free 15-minute analysis call. We'll show you what the Complete Package would do for your business specifically.</p>
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
