import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Oss | LeadOne Marketing",
  description: "Lär känna LeadOne Marketing — en lokal SEO-byrå grundad av Douglas i Helsingborg. Vi hjälper svenska småföretag synas på Google Maps och i lokal sökning.",
  keywords: "om LeadOne, SEO byrå Helsingborg, Douglas LeadOne, lokal SEO Sverige",
  alternates: { canonical: "https://www.leadone.online/om-oss" },
  openGraph: {
    title: "Om Oss | LeadOne Marketing",
    description: "LeadOne grundades för att svenska småföretagare förlorade kunder varje dag — inte för att de var dåliga på sitt jobb, utan för att de inte syntes på Google.",
    locale: "sv_SE",
    type: "website",
    url: "https://www.leadone.online/om-oss",
  },
};

export default function OmOssLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
