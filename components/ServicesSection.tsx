"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { MapPin, MagnifyingGlass, Link, Star, Article } from "@phosphor-icons/react";

export default function ServicesSection() {
  const reduce = useReducedMotion();

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
          Våra lösningar
        </p>
        <h2 className="text-[2rem] md:text-[2.8rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-tight max-w-[20ch]">
          Allt din lokala synlighet behöver
        </h2>
        <p className="mt-3 text-[15px] text-zinc-500">Välj det som passar dig. Eller ta allt.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Cell 1: GBP — col-span-2, gold network bg */}
        <motion.div
          className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-gbp.png" alt="Google Business Profile optimering" fill className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/55 to-transparent" />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 50%, transparent 100%)",
            }}
          />
          <div className="relative z-10 p-7">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--accent-dim)" }}>
              <MapPin size={15} weight="fill" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-1.5 tracking-tight">Google Business Profile</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed max-w-[44ch]">
              Vi optimerar din profil för att synas i Local Pack (topp 3) och dominera Maps för alla relevanta sökningar.
            </p>
          </div>
        </motion.div>

        {/* Cell 2: Länkbyggnad */}
        <motion.div
          className="lg:col-span-1 relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-chain.jpg" alt="Lokal länkbyggnad" fill className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-[#08080A]/20" />
          <div className="absolute inset-0" style={{ background: "rgba(201,168,76,0.06)" }} />
          <div className="relative z-10 p-7">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(201,168,76,0.14)" }}>
              <Link size={15} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">Lokal Länkbyggnad</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">
              Auktoritetssignaler från svenska kataloger, lokal press och verifierade partners.
            </p>
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
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">On-Page SEO</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">
              Teknisk och innehållsmässig optimering som skickar tydliga geografiska signaler till Google.
            </p>
          </div>
        </motion.div>

        {/* Cell 4: Innehållsstrategi */}
        <motion.div
          className="relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] cursor-pointer group"
          style={{ border: "1px solid var(--border)" }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(201,168,76,0.3)", transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/lm-strategy.png" alt="" fill className="object-cover object-center opacity-[0.45] transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08080A]/88 via-[#08080A]/92 to-[#08080A]/88" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden="true" />
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)" }}>
            <Article size={17} weight="bold" style={{ color: "var(--accent)" }} aria-hidden="true" />
          </div>
          <div className="relative">
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">Innehållsstrategi</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">
              Platsspecifika sidor som rankar för det dina kunder faktiskt skriver i sökrutan.
            </p>
          </div>
        </motion.div>

        {/* Cell 5: Recensionshantering — stars phone */}
        <motion.div
          className="relative rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-end cursor-pointer group"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        >
          <Image src="/assets/stars-phone.png" alt="Telefon med glänsande Google-recensioner" fill className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/50 to-transparent" />
          <div className="relative z-10 p-7">
            <h3 className="font-semibold text-[17px] text-[#F4F4F5] mb-2 tracking-tight">Recensionshantering</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed">
              En stadig ström av äkta recensioner som bygger förtroende, driver konverteringar och lyfter din ranking.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 flex justify-center">
        <a href="/boka" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#08080A] font-semibold text-[15px] hover:bg-[#D4B87A] transition-colors duration-200">
          Boka Gratis Analys
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  );
}
