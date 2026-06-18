import type { Post } from "@/lib/posts";

import { post as googleMapsRanking } from "@/content/blog/how-to-rank-on-google-maps-2026";
import { post as aiSearch } from "@/content/blog/ai-search-and-local-seo";
import { post as moreReviews } from "@/content/blog/how-to-get-more-google-reviews";

const allPosts: Post[] = [googleMapsRanking, aiSearch, moreReviews];

export function getAllPostsEn(): Post[] {
  return allPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostEn(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
