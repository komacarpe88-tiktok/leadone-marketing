import Image from "next/image";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { t, type Locale } from "@/lib/i18n";

export default function FooterSection({ locale = "sv" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const copy = t[locale].footer;

  return (
    <footer className="pt-16 pb-8 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="LeadOne startsida">
              <Image src="/assets/logo.webp" alt="LeadOne" height={60} width={60} className="object-contain" />
            </a>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[28ch]">
              {copy.tagline}
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href="tel:0764796630" className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                <Phone size={13} aria-hidden="true" />
                076-479 66 30
              </a>
              <a href="mailto:info@leadone.online" className="flex items-center gap-2 text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">
                <EnvelopeSimple size={13} aria-hidden="true" />
                info@leadone.online
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">{copy.solutions}</p>
            <ul className="flex flex-col gap-2.5">
              {([
                ["LaunchMap™", locale === "en" ? "/en/services/launchmap" : "/tjanster/launchmap"],
                [locale === "en" ? "Review Machine" : "Omdömesmaskinen", locale === "en" ? "/en/services/reviews" : "/tjanster/omdomes"],
                [locale === "en" ? "Complete Package" : "Komplett Paket", locale === "en" ? "/en/services/complete" : "/tjanster/komplett"],
              ] as [string, string][]).map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">{copy.company}</p>
            <ul className="flex flex-col gap-2.5">
              {([
                [copy.about, copy.about_href],
                [copy.results, locale === "en" ? "/en/#results" : "/#results"],
                [copy.contact, copy.contact_href],
              ] as [string, string][]).map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">{copy.legal}</p>
            <ul className="flex flex-col gap-2.5">
              {([
                [copy.privacy, copy.privacy_href],
                [copy.terms, copy.terms_href],
                [copy.cookie, copy.cookie_href],
                [copy.dpa, copy.dpa_href],
              ] as [string, string][]).map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-[12px] text-zinc-700">
            © {year} LeadOne Marketing. {copy.copyright}
          </p>
          <p className="text-[12px] text-zinc-700">{copy.location}</p>
        </div>
      </div>
    </footer>
  );
}
