import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllPostsEn } from "@/lib/posts-en";

const BASE = "https://www.leadone.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const postsEn = getAllPostsEn();

  const svRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blogg`,              lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/boka`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/launchmap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/omdomes`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/komplett`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/om-oss`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakt`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/integritetspolicy`,  lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/anvandarvillkor`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/cookie-policy`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/pub-avtal`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const enRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/en`,                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/en/blog`,                     lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/en/book`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en/services/launchmap`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en/services/reviews`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en/services/complete`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/en/about`,                    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/en/contact`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/en/privacy-policy`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/en/terms`,                    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/en/cookie-policy`,            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/en/dpa`,                      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const svBlogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url:             `${BASE}/blogg/${post.slug}`,
    lastModified:    new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority:        0.8,
  }));

  const enBlogRoutes: MetadataRoute.Sitemap = postsEn.map((post) => ({
    url:             `${BASE}/en/blog/${post.slug}`,
    lastModified:    new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority:        0.8,
  }));

  return [...svRoutes, ...enRoutes, ...svBlogRoutes, ...enBlogRoutes];
}
