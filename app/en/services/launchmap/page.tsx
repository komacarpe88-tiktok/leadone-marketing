import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import FooterSection from "@/components/FooterSection";
import { Check, ArrowRight, MapPin, MagnifyingGlass, Link, FileText, ChartBar, Star } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "LaunchMap™ — Dominate Google Maps in 30 Days | LeadOne",
  description: "We optimise your Google Business Profile, list you on 50+ directories and give you a heatmap showing where you rank. One-time price 5,999 SEK.",
  alternates: { canonical: "https://www.leadone.online/en/services/launchmap" },
};

const BOOKING_URL = "/en/book";

const stats = [
  { value: "46%", label: "Of all Google searches are local", sub: "Your customers are already searching — the question is whether they find you." },
  { value: "Page 2", label: "= Nobody Sees You", sub: "93% of all clicks happen on page 1. Your competitors take everything." },
  { value: "Top 3", label: "Gets 70% of All Clicks", sub: "The Local Pack — the three shown on Maps — captures the lion's share." },
  { value: "30", label: "Days to Results", sub: "Full GBP optimisation, 50+ listings and a ranking heatmap. Done." },
];

const deliverables = [
  { icon: MagnifyingGlass, title: "Keyword Analysis", desc: "We identify the search terms that actually drive customers in your industry and city." },
  { icon: MapPin, title: "GBP Optimisation", desc: "Categories, services, photos, posts and Q&A — everything optimised for maximum relevance." },
  { icon: Link, title: "50+ Directory Listings", desc: "Consistent NAP across the most important local directories. Increases prominence and builds trust." },
  { icon: ChartBar, title: "Ranking Heatmap", desc: "See exactly where in the city you rank — before and after. Verifiable data, no black box." },
  { icon: FileText, title: "Strategy Report", desc: "A complete review of your current position with a prioritised action plan." },
  { icon: Star, title: "Review Setup", desc: "We set up your review request flow so you start collecting Google reviews immediately." },
];

export default function LaunchMapEnPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-[#08080A] pt-[72px] min-h-screen" lang="en">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-[640px]">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4" style={{ color: "var(--accent)" }}>
                One-time · No commitment
              </p>
              <h1 className="text-[2.8rem] md:text-[3.8rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] mb-5">
                LaunchMap™
              </h1>
              <p className="text-[1.2rem] text-zinc-300 leading-relaxed mb-6 max-w-[44ch]">
                Complete Google Business Profile optimisation in 30 days. Get into the Local Pack — and stay there.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-[2.4rem] font-bold text-[#F4F4F5]">5,999</span>
                <span className="text-zinc-400 text-[16px]">SEK · one-time payment</span>
              </div>
              <a href={BOOKING_URL} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[14px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200">
                Book free analysis
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-[2rem] font-bold text-[#F4F4F5] mb-1" style={{ color: "var(--accent)" }}>{s.value}</p>
                <p className="text-[13px] font-semibold text-zinc-300 mb-1">{s.label}</p>
                <p className="text-[12px] text-zinc-500 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>What's included</p>
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-12 max-w-[20ch]">
              Everything you need to dominate local search
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <d.icon size={22} className="mb-4" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <h3 className="text-[1rem] font-semibold text-[#F4F4F5] mb-2">{d.title}</h3>
                  <p className="text-[14px] text-zinc-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-[2rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-4">Ready to get into the Local Pack?</h2>
            <p className="text-zinc-400 mb-8 max-w-[44ch] mx-auto">Book a free 15-minute analysis call. We'll show you exactly where you rank today and what LaunchMap™ would do for your business.</p>
            <a href={BOOKING_URL} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] text-[#08080A] bg-accent hover:bg-[#D4B87A] transition-colors duration-200">
              Book free analysis
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </section>

        <FooterSection locale="en" />
      </main>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
