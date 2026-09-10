/**
 * Single source of truth for phone numbers per locale.
 *
 * The Swedish and English sites publish different numbers, so any component
 * that renders a phone number in both locales must resolve it through here
 * rather than hardcoding one — that mismatch is how the English pages ended up
 * showing the Swedish number.
 */

import type { Locale } from "@/lib/i18n";

export const phones = {
  sv: {
    /** Display form, with spacing. */
    display: "+46 763 91 21 81",
    /** tel: href form, digits only. */
    href: "tel:+46763912181",
    /** E.164 for schema.org. */
    e164: "+46763912181",
  },
  en: {
    display: "+1 681-641-1867",
    href: "tel:+16816411867",
    e164: "+16816411867",
  },
} as const;

export function phone(locale: Locale = "sv") {
  return locale === "en" ? phones.en : phones.sv;
}

export const email = "info@leadone.online";
