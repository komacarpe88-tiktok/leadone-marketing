import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogg — Lokal SEO & Google Maps | LeadOne Marketing",
  description:
    "Guider, tips och strategier för lokal SEO, Google Maps-optimering och recensionshantering. Skrivet för svenska småföretag.",
  keywords:
    "lokal SEO blogg, Google Maps tips, Google Business Profile guide, recensioner SEO, lokal sökning Sverige",
  alternates: { canonical: "https://www.leadone.online/blogg" },
  openGraph: {
    title: "Blogg — Lokal SEO & Google Maps | LeadOne Marketing",
    description:
      "Guider och strategier för lokal SEO, Google Maps-optimering och recensionshantering.",
    locale: "sv_SE",
    type: "website",
    url: "https://www.leadone.online/blogg",
  },
};

export default function BloggPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#08080A] pt-[72px]">
        {/* Hero */}
        <section className="py-20 lg:py-28 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <p
              className="text-[11px] uppercase tracking-[0.22em] font-mono mb-4"
              style={{ color: "var(--accent)" }}
            >
              Kunskap &amp; strategi
            </p>
            <h1 className="text-[2.8rem] md:text-[3.6rem] font-bold tracking-[-0.03em] text-[#F4F4F5] leading-[1.05] max-w-[18ch]">
              Lokal SEO — på svenska
            </h1>
            <p className="mt-5 text-[17px] text-zinc-400 leading-relaxed max-w-[52ch]">
              Praktiska guider om Google Maps-ranking, Google Business Profile och
              recensionshantering. Inga krångliga termer — bara det som faktiskt fungerar.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogg/${post.slug}`}
                  className="group flex flex-col rounded-2xl p-6 transition-colors duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.18em] font-mono px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(201,168,76,0.1)",
                          color: "var(--accent)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-[1.1rem] font-semibold text-[#F4F4F5] leading-snug tracking-[-0.01em] mb-3 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[14px] text-zinc-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <time
                      dateTime={post.publishedAt}
                      className="text-[12px] text-zinc-500 font-mono"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("sv-SE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-[12px] text-zinc-500 font-mono">
                      {post.readingTime} min läsning
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[1.2rem] font-semibold text-[#F4F4F5]">
                Vill du att vi gör jobbet åt dig?
              </p>
              <p className="text-[14px] text-zinc-400 mt-1">
                Boka ett gratis analyssamtal — 15 minuter, inga förpliktelser.
              </p>
            </div>
            <Link
              href="/boka"
              className="shrink-0 rounded-full px-7 py-3 text-[14px] font-semibold transition-colors duration-200"
              style={{ background: "var(--accent)", color: "#08080A" }}
            >
              Boka gratis analys →
            </Link>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
