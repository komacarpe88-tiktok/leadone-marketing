import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Din bokning är bekräftad | LeadOne Marketing",
  description: "Titta på videon innan vårt samtal.",
  robots: { index: false, follow: false },
};

export default function BekraftelseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
