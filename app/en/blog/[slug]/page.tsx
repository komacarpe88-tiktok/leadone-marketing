import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import FooterSection from "@/components/FooterSection";
import { getAllPostsEn, getPostEn } from "@/lib/posts-en";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostsEn().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostEn(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | LeadOne Marketing`,
    description: post.description,
    keywords: post.tags.join(", "),
    alternates: {
      canonical: `https://www.leadone.online/en/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      locale: "en_GB",
      type: "article",
      url: `https://www.leadone.online/en/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["LeadOne Marketing"],
      tags: post.tags,
    },
  };
}

export default function EnglishBlogPostPage({ params }: Props) {
  const post = getPostEn(params.slug);
  if (!post) notFound();

  const allPosts = getAllPostsEn();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt ?? post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "LeadOne Marketing",
      "@id": "https://www.leadone.online/#organization",
    },
    "publisher": { "@id": "https://www.leadone.online/#organization" },
    "url": `https://www.leadone.online/en/blog/${post.slug}`,
    "inLanguage": "en-GB",
    "mainEntityOfPage": `https://www.leadone.online/en/blog/${post.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.leadone.online/en" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.leadone.online/en/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.leadone.online/en/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Nav />
      <main className="min-h-screen bg-[#08080A] pt-[72px]" lang="en">
        <section className="py-14 lg:py-20 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-10">
            <nav className="flex items-center gap-2 text-[12px] text-zinc-500 font-mono mb-8">
              <Link href="/en" className="hover:text-zinc-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/en/blog" className="hover:text-zinc-300 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-zinc-400 truncate max-w-[30ch]">{post.title}</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-[0.18em] font-mono px-2.5 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "var(--accent)" }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.025em] text-[#F4F4F5] leading-[1.1]">{post.title}</h1>
            <p className="mt-4 text-[17px] text-zinc-400 leading-relaxed">{post.description}</p>
            <div className="flex items-center gap-4 mt-6 text-[12px] text-zinc-500 font-mono">
              <span>LeadOne Marketing</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </section>

        <article className="py-14 lg:py-20">
          <div className="max-w-[760px] mx-auto px-6 lg:px-10 prose-blogg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <section className="py-14 border-y" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="max-w-[760px] mx-auto px-6 lg:px-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-3" style={{ color: "var(--accent)" }}>Need help?</p>
            <h2 className="text-[1.6rem] font-bold text-[#F4F4F5] tracking-[-0.02em] mb-3">Let us handle your local SEO</h2>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-7 max-w-[48ch] mx-auto">
              Book a free 15-minute analysis call. We'll review where you rank today and what it takes to reach the top 3 on Google Maps.
            </p>
            <Link href="/en/book" className="inline-block rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors duration-200" style={{ background: "var(--accent)", color: "#08080A" }}>
              Book free analysis →
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16">
            <div className="max-w-[760px] mx-auto px-6 lg:px-10">
              <p className="text-[11px] uppercase tracking-[0.22em] font-mono mb-6" style={{ color: "var(--accent)" }}>Read also</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link key={p.slug} href={`/en/blog/${p.slug}`} className="group rounded-2xl p-5 transition-colors duration-200" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-[14px] font-semibold text-[#F4F4F5] leading-snug group-hover:text-accent transition-colors duration-200 mb-2">{p.title}</p>
                    <p className="text-[13px] text-zinc-500 leading-relaxed">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <FooterSection locale="en" />
      </main>
    </>
  );
}
