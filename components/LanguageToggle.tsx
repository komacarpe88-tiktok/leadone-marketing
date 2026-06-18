"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { switchLocale, getLocaleFromPath } from "@/lib/i18n";

export default function LanguageToggle() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const svHref = locale === "en" ? switchLocale(pathname, "sv") : pathname;
  const enHref = locale === "sv" ? switchLocale(pathname, "en") : pathname;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full px-1 py-1 text-[11px] font-mono font-semibold tracking-wide"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
    >
      <Link
        href={svHref}
        className="px-2.5 py-1 rounded-full transition-colors duration-150"
        style={
          locale === "sv"
            ? { background: "var(--accent)", color: "#08080A" }
            : { color: "rgba(255,255,255,0.4)" }
        }
        aria-label="Switch to Swedish"
      >
        SV
      </Link>
      <Link
        href={enHref}
        className="px-2.5 py-1 rounded-full transition-colors duration-150"
        style={
          locale === "en"
            ? { background: "var(--accent)", color: "#08080A" }
            : { color: "rgba(255,255,255,0.4)" }
        }
        aria-label="Switch to English"
      >
        EN
      </Link>
    </div>
  );
}
