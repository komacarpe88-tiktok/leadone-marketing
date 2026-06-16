import Image from "next/image";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="LeadOne startsida">
              <Image src="/assets/logo.png" alt="LeadOne" height={60} width={60} className="object-contain" />
            </a>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[28ch]">
              Lokal synlighet för svenska småföretag.
              Inga löften vi inte kan hålla. Inga dolda kostnader. Bara system som fungerar.
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

          {/* Lösningar */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">Lösningar</p>
            <ul className="flex flex-col gap-2.5">
              {[
                ["LaunchMap™",       "/tjanster/launchmap"],
                ["Omdömesmaskinen",  "/tjanster/omdomes"],
                ["Komplett Paket",   "/tjanster/komplett"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Företag */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">Företag</p>
            <ul className="flex flex-col gap-2.5">
              {[["Om Oss", "/om-oss"], ["Resultat", "/#results"], ["Kontakt", "/kontakt"]].map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Juridiskt */}
          <div>
            <p className="text-[11px] text-zinc-600 uppercase tracking-[0.18em] font-mono mb-4">Juridiskt</p>
            <ul className="flex flex-col gap-2.5">
              {[
                ["Integritetspolicy", "/integritetspolicy"],
                ["Användarvillkor",   "/anvandarvillkor"],
                ["Cookie-policy",     "/cookie-policy"],
                ["PUB-avtal",         "/pub-avtal"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="text-[13px] text-zinc-500 hover:text-zinc-300 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-[12px] text-zinc-700">
            © {year} LeadOne Marketing. Lokal synlighet för svenska företag.
          </p>
          <p className="text-[12px] text-zinc-700">Helsingborg, Sverige</p>
        </div>
      </div>
    </footer>
  );
}
