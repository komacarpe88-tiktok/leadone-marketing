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
    label: "Google profile",
    icon: MapPin,
    items: [
      { title: "Complete core optimization", desc: "Description, services, service descriptions, attributes and social links written and set up around your keywords." },
      { title: "Category and competitor analysis", desc: "We look at which categories the top-ranking businesses in your area use and adjust your profile accordingly." },
      { title: "Weekly posts and offers", desc: "Keyword-focused posts and offers about your services, the season and your location, so your profile always stays active." },
      { title: "Photos and video", desc: "Photos are geotagged, given the right metadata and uploaded at a steady pace. Short videos are created and published to your profile and YouTube." },
      { title: "Q&A", desc: "Common customer questions are answered directly in your profile, so Google and customers get the right information." },
    ],
  },
  {
    key: "reviews",
    label: "Reviews",
    icon: Star,
    items: [
      { title: "More reviews, automatically", desc: "Your customers get a request by text or email with a direct link to Google, plus a reminder if they haven't responded. You also get a QR code for your premises." },
      { title: "Replies to every review", desc: "Every review gets a reply, with the right tone and relevant keywords." },
      { title: "Alerts for bad reviews", desc: "Negative reviews are flagged immediately, so you can act before they do damage." },
      { title: "Reviews become posts", desc: "Your best five-star reviews are turned into graphics and published on Google, social media and your website." },
    ],
  },
  {
    key: "visibility",
    label: "Visibility",
    icon: MagnifyingGlass,
    items: [
      { title: "50+ directory listings", desc: "Your business information is kept up to date in the directories Google and AI tools cross-check, such as Apple Maps, Bing, ChatGPT and Perplexity." },
      { title: "Social channels", desc: "Posts are also published to Facebook, Instagram and LinkedIn, so you're active everywhere without extra work." },
      { title: "Your website in sync with your profile", desc: "Schema markup, an FAQ section and feeds of your latest posts, reviews and photos that can be added to your website, so Google sees the same picture everywhere." },
    ],
  },
  {
    key: "reporting",
    label: "Follow-up",
    icon: ChartBar,
    items: [
      { title: "Monthly heatmap reports", desc: "Rankings across your whole area for up to ten keywords, with before-and-after comparison." },
      { title: "AI visibility", desc: "We measure how you show up when people ask ChatGPT, Gemini, Perplexity, Claude and other AI tools." },
      { title: "Weekly summary", desc: "Every week you get a short summary of what's been done and what's planned next." },
      { title: "Profile monitoring", desc: "You're alerted if anything changes on your profile, such as opening hours, phone number or address." },
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
