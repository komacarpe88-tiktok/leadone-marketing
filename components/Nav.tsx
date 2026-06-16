"use client";

import { useMotionValue, useTransform, motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, CaretDown, List, X } from "@phosphor-icons/react";

const BOOKING_URL = "/boka";

const SERVICES = [
  { name: "LaunchMap™",       desc: "GBP-optimering på 30 dagar",        href: "/tjanster/launchmap" },
  { name: "Omdömesmaskinen",  desc: "Request · Response · Repurpose",     href: "/tjanster/omdomes"   },
  { name: "Komplett Paket",   desc: "Allt i ett — bäst värde",            href: "/tjanster/komplett"  },
];

const NAV_LINKS = [
  { label: "Process",  href: "/#process"  },
  { label: "Resultat", href: "/#results"  },
  { label: "Blogg",    href: "/blogg"     },
  { label: "Om Oss",   href: "/om-oss"    },
  { label: "Kontakt",  href: "/kontakt"   },
];

export default function Nav() {
  const scrollY = useMotionValue(0);
  const reduce  = useReducedMotion();
  const [dropOpen,   setDropOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const bgOpacity     = useTransform(scrollY, [0, 72], [0, 0.96]);
  const borderOpacity = useTransform(scrollY, [0, 72], [0, 0.08]);

  useEffect(() => {
    const update = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [scrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={reduce ? { backgroundColor: "rgba(8,8,10,0.96)" } : undefined}
      >
        <motion.div className="absolute inset-0 backdrop-blur-md" style={{ opacity: bgOpacity }}>
          <div className="absolute inset-0 bg-[#08080A]" style={{ opacity: 1 }} />
          <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-white" style={{ opacity: borderOpacity }} />
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">

          <a href="/" className="shrink-0" aria-label="LeadOne startsida">
            <Image src="/assets/logo.png" alt="LeadOne" height={52} width={52} className="object-contain" priority />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Huvudnavigation">
            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[14px] text-zinc-400 hover:text-[#F4F4F5] transition-colors duration-200 whitespace-nowrap"
                aria-expanded={dropOpen}
                aria-haspopup="true"
              >
                Tjänster
                <CaretDown
                  size={10}
                  weight="bold"
                  className="transition-transform duration-200"
                  style={{ transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 pt-3 z-50"
                    style={{ translateX: "-50%" }}
                    initial={reduce ? false : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="rounded-xl p-1.5 flex flex-col gap-0.5 min-w-[220px]"
                      style={{
                        background:     "rgba(14,14,17,0.98)",
                        border:         "1px solid rgba(201,168,76,0.18)",
                        backdropFilter: "blur(20px)",
                        boxShadow:      "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    >
                      {SERVICES.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          className="flex flex-col px-3 py-2.5 rounded-lg transition-colors duration-150 group"
                          style={{ background: "transparent" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <span className="text-[13px] font-medium text-zinc-200 group-hover:text-[#F4F4F5] transition-colors duration-150">
                            {s.name}
                          </span>
                          <span className="text-[11px] text-zinc-600">{s.desc}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href}
                className="text-[14px] text-zinc-400 hover:text-[#F4F4F5] transition-colors duration-200 whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto lg:ml-0">
            <a href="tel:0764796630"
              className="hidden lg:flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200 whitespace-nowrap">
              <Phone size={13} aria-hidden="true" />
              076-479 66 30
            </a>
            <a href={BOOKING_URL}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-[#08080A] text-[13px] font-semibold hover:bg-[#D4B87A] transition-colors duration-200 shrink-0 whitespace-nowrap">
              Boka Gratis Analys
              <ArrowRight size={13} weight="bold" aria-hidden="true" />
            </a>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-zinc-400 hover:text-[#F4F4F5] transition-colors duration-200"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#08080A]/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              className="relative z-10 flex flex-col pt-[88px] pb-8 px-6 h-full overflow-y-auto"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Mobilnavigation"
            >
              {/* Tjänster accordion */}
              <div className="border-b" style={{ borderColor: "var(--border)" }}>
                <button
                  className="w-full flex items-center justify-between py-4 text-[18px] font-medium text-[#F4F4F5]"
                  onClick={() => setMobileServicesOpen(v => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Tjänster
                  <CaretDown
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 text-zinc-500"
                    style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-3 flex flex-col gap-1">
                        {SERVICES.map((s) => (
                          <a
                            key={s.name}
                            href={s.href}
                            className="flex flex-col px-3 py-3 rounded-xl"
                            style={{ background: "rgba(201,168,76,0.05)" }}
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-[15px] font-medium text-zinc-200">{s.name}</span>
                            <span className="text-[12px] text-zinc-600 mt-0.5">{s.desc}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-4 text-[18px] font-medium text-zinc-300 border-b"
                  style={{ borderColor: "var(--border)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Bottom CTAs */}
              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a href={BOOKING_URL}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-accent text-[#08080A] text-[15px] font-semibold hover:bg-[#D4B87A] transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Boka Gratis Analys
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
                <a href="tel:0764796630"
                  className="flex items-center justify-center gap-2 py-3 text-[14px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                  <Phone size={14} aria-hidden="true" />
                  076-479 66 30
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
