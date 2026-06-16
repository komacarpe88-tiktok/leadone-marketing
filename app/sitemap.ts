import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://www.leadone.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blogg`,           lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/boka`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/launchmap`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/omdomes`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/tjanster/komplett`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/om-oss`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakt`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/integritetspolicy`,   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/anvandarvillkor`,     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/cookie-policy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.2 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url:             `${BASE}/blogg/${post.slug}`,
    lastModified:    new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority:        0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
