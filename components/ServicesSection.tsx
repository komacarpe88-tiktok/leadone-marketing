"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { MapPin, MagnifyingGlass, Link } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";

const copy = {
  sv: {
    eyebrow: "Våra lösningar",
    heading: "Allt din lokala synlighet behöver",
    sub: "Välj det som passar dig. Eller ta allt.",
    cta: "Boka Gratis Analys",
    ctaHref: "/boka",
    cells: {
      gbp: {
        title: "Google Business Profile",
        desc: "Vi optimerar din profil för att synas i Local Pack (topp 3) och dominera Maps för alla relevanta sökningar.",
        alt: "Google Business Profile optimering",
      },
      links: {
        title: "Lokal Länkbyggnad",
        desc: "Auktoritetssignaler från svenska kataloger, lokal press och verifierade partners.",
        alt: "Lokal länkbyggnad",
      },
      onpage: {
        title: "On-Page SEO",
        desc: "Teknisk och innehållsmässig optimering som skickar tydliga geografiska signaler till Google.",
      },
      content: {
        title: "Innehållsstrategi",
        desc: "Platsspecifika sidor som rankar för det dina kunder faktiskt skriver i sökrutan.",
      },
      reviews: {
        title: "Recensionshantering",
        desc: "En stadig ström av äkta recensioner som bygger förtroende, driver konverteringar och lyfter din ranking.",
        alt: "Telefon med glänsande Google-recensioner",
      },
    },
  },
  en: {
    eyebrow: "Our solutions",
    heading: "Everything your local visibility needs",
    sub: "Choose what fits. Or take everything.",
    cta: "Book Free Analysis",
    ctaHref: "/en/book",
    cells: {
      gbp: {
        title: "Google Business Profile",
        desc: "We optimise your profile to appear in the Local Pack (top 3) and dominate Maps for all relevant searches.",
        alt: "Google Business Profile optimisation",
      },
      links: {
        title: "Local Link Building",
        desc: "Authority signals from Swedish directories, local press, and verified partners.",
        alt: "Local link building",
      },
      onpage: {
        title: "On-Page SEO",
        desc: "Technical and content optimisation that sends clear geographic signals to Google.",
      },
      content: {
        title: "Content Strategy",
        desc: "Location-specific pages that rank for what your customers actually type into the search box.",
      },
      reviews: {
        title: "Review Management",
        desc: "A steady stream of genuine reviews that build trust, drive conversions, and boost your ranking.",
        alt: "Phone showing glowing Google reviews",
      },
    },
  },
};

export default function ServicesSection({ locale = "sv" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const c = copy[locale];

  return (
    <section id="services" className="py-24 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-10">
      <motion.div
        className="mb-14"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] font-mono mb-4" style={{ color: "var(--accent)" }}>
          {c.eyebrow}
        </p>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight max-w-[20ch]">
          {c.heading}
        </h2>
        <p className="mt-3 text-[15px] text-zinc-500">{c.sub}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Cell 1: GBP — col-span-2 */}
        <motion.div
          className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-gbp.png" alt={c.cells.gbp.alt} fill loading="lazy" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/55 to-transparent" />
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%)" }}
          />
          <div className="relative z-10 p-7">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--accent-dim)" }}>
              <MapPin size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-1.5 tracking-tight">{c.cells.gbp.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[44ch]">{c.cells.gbp.desc}</p>
          </div>
        </motion.div>

        {/* Cell 2: Link building */}
        <motion.div
          className="lg:col-span-1 relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-chain.jpg" alt={c.cells.links.alt} fill className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-[#08080A]/20" />
          <div className="absolute inset-0" style={{ background: "rgba(201,168,76,0.06)" }} />
          <div className="relative z-10 p-7">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(201,168,76,0.14)" }}>
              <Link size={15} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">{c.cells.links.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">{c.cells.links.desc}</p>
          </div>
        </motion.div>

        {/* Cell 3: On-Page SEO */}
        <motion.div
          className="relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] cursor-pointer group"
          style={{ border: "1px solid var(--border)" }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(201,168,76,0.3)", transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-globe.jpg" alt="" fill className="object-cover object-center opacity-100 transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08080A]/60 via-[#08080A]/50 to-[#08080A]/60" />
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)" }}>
            <MagnifyingGlass size={17} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
          </div>
          <div className="relative">
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">{c.cells.onpage.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">{c.cells.onpage.desc}</p>
          </div>
        </motion.div>

        {/* Cell 4: Content strategy */}
        <motion.div
          className="relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] cursor-pointer group"
          style={{ border: "1px solid var(--border)" }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(201,168,76,0.3)", transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-strategy.png" alt="" fill loading="lazy" className="object-cover object-center opacity-[0.45] transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08080A]/88 via-[#08080A]/92 to-[#08080A]/88" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true" />
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)" }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" style={{ color: "var(--accent)" }}><rect x="2" y="2" width="13" height="2.5" rx="1" fill="currentColor"/><rect x="2" y="7" width="9" height="2" rx="1" fill="currentColor"/><rect x="2" y="12" width="11" height="2" rx="1" fill="currentColor"/></svg>
          </div>
          <div className="relative">
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">{c.cells.content.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">{c.cells.content.desc}</p>
          </div>
        </motion.div>

        {/* Cell 5: Reviews */}
        <motion.div
          className="relative rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/stars-phone.png" alt={c.cells.reviews.alt} fill loading="lazy" className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/50 to-transparent" />
          <div className="relative z-10 p-7">
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">{c.cells.reviews.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">{c.cells.reviews.desc}</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 flex justify-center">
        <a href={c.ctaHref} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200">
          {c.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  );
}
