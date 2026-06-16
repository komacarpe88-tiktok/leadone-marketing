export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  excerpt: string;
  content: string; // HTML
}

import { post as googleMapsRanking } from "@/content/blogg/hur-du-rankar-pa-google-maps-2026";
import { post as aiSokning } from "@/content/blogg/ai-sokning-och-lokal-seo";
import { post as flerRecensioner } from "@/content/blogg/hur-du-far-fler-google-recensioner";

const allPosts: Post[] = [
  googleMapsRanking,
  aiSokning,
  flerRecensioner,
];

export function getAllPosts(): Post[] {
  return allPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
