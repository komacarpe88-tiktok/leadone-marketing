"use client";

import { useState } from "react";
import { MapPin, Star, MagnifyingGlass, ChartBar } from "@phosphor-icons/react";

/**
 * Progressive-disclosure feature list: one group of cards visible at a time,
 * switched by tab, instead of all ~18 cards stacked in a single long scroll.
 */

const groups = [
  {
    key: "profile",
    label: "Google-profil",
    icon: MapPin,
    items: [
      { title: "Komplett grundoptimering", desc: "Beskrivning, tjänster, tjänstebeskrivningar, attribut och sociala länkar skrivs och ställs in efter dina sökord." },
      { title: "Kategori- och konkurrentanalys", desc: "Vi ser vilka kategorier de topprankade företagen i ditt område använder och justerar din profil därefter." },
      { title: "Inlägg och erbjudanden varje vecka", desc: "Sökordsanpassade inlägg och erbjudanden om dina tjänster, säsong och ort, så att profilen alltid är aktiv." },
      { title: "Bilder och video", desc: "Bilder geotaggas, får rätt metadata och laddas upp i jämn takt. Korta videor skapas och publiceras på profilen och på YouTube." },
      { title: "Frågor & svar", desc: "Vanliga kundfrågor besvaras direkt i profilen, så att Google och kunder får rätt information." },
    ],
  },
  {
    key: "reviews",
    label: "Recensioner",
    icon: Star,
    items: [
      { title: "Fler recensioner, automatiskt", desc: "Dina kunder får en förfrågan via sms eller e-post med direktlänk till Google, och en påminnelse om de inte svarat. Du får också en QR-kod att ha i lokalen." },
      { title: "Svar på alla recensioner", desc: "Varje recension besvaras, med rätt ton och relevanta sökord." },
      { title: "Varning vid dåliga omdömen", desc: "Negativa recensioner flaggas direkt, så att du kan agera innan de skadar." },
      { title: "Recensioner blir inlägg", desc: "Dina bästa femstjärniga omdömen görs om till grafik och publiceras på Google, sociala medier och hemsidan." },
    ],
  },
  {
    key: "visibility",
    label: "Synlighet",
    icon: MagnifyingGlass,
    items: [
      { title: "50+ kataloglistningar", desc: "Din företagsinformation hålls uppdaterad i kataloger som Google och AI-tjänster stämmer av mot, som Apple Maps, Bing, ChatGPT och Perplexity." },
      { title: "Sociala kanaler", desc: "Inläggen publiceras även på Facebook, Instagram och LinkedIn, så att du är aktiv överallt utan extra jobb." },
      { title: "Din hemsida i linje med profilen", desc: "Schema-markering, en FAQ-sektion och flöden med dina senaste inlägg, recensioner och bilder som kan läggas in på hemsidan, så att Google ser samma bild överallt." },
    ],
  },
  {
    key: "reporting",
    label: "Uppföljning",
    icon: ChartBar,
    items: [
      { title: "Månatliga heatmap-rapporter", desc: "Ranking över hela ditt område för upp till tio sökord, med före- och efterjämförelse." },
      { title: "AI-synlighet", desc: "Vi mäter hur du syns när man frågar ChatGPT, Gemini, Perplexity, Claude och andra AI-tjänster." },
      { title: "Veckosammanfattning", desc: "Varje vecka får du en kort sammanfattning av vad som gjorts och vad som är planerat härnäst." },
      { title: "Bevakning av profilen", desc: "Du får en varning om något ändras i din profil, till exempel öppettider, telefonnummer eller adress." },
    ],
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);

  // All groups render into the DOM (so the full feature list stays in the
  // static HTML / crawlable text) — only the inactive ones are visually
  // hidden via `hidden`, not removed from the tree.
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
      {/* Tab bar */}
      <div className="flex overflow-x-auto" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        {groups.map((g, i) => {
          const Icon = g.icon;
          const isActive = active === i;
          return (
            <button
              key={g.key}
              onClick={() => setActive(i)}
              aria-selected={isActive}
              className="flex items-center gap-2 px-5 py-4 whitespace-nowrap transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--accent)" : "#a1a1aa",
                background: "none",
                border: "none",
                borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: "-1px",
                cursor: "pointer",
              }}
            >
              <Icon size={15} weight={isActive ? "fill" : "regular"} aria-hidden="true" />
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Groups — all present in the DOM, only the active one visible */}
      <div className="p-6 lg:p-8" style={{ background: "var(--surface)" }}>
        {groups.map((g, i) => (
          <div key={g.key} hidden={active !== i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {g.items.map((f) => (
              <div key={f.title} className="rounded-2xl p-6" style={{ background: "#0A0A0D", border: "1px solid var(--border)" }}>
                <h4 className="font-semibold text-[15px] text-[#F4F4F5] mb-1.5">{f.title}</h4>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
