"use client";

import Image from "next/image";
import { Phone } from "@phosphor-icons/react";
import { phone } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";

export default function BookingNav({ locale = "sv" }: { locale?: Locale }) {
  const tel = phone(locale);
  const isEn = locale === "en";
  return (
    <header className="fixed top-0 left-0 right-0 z-[150] bg-[#08080A]/95 backdrop-blur-md border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href={isEn ? "/en/" : "/"} aria-label={isEn ? "Back to home page" : "Tillbaka till startsidan"}>
          <Image src="/assets/logo.webp" alt="LeadOne" height={52} width={52} className="object-contain" priority />
        </a>
        <a href={tel.href} className="flex items-center gap-2 text-[14px] text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
          <Phone size={14} aria-hidden="true" />
          {tel.display}
        </a>
      </div>
    </header>
  );
}
