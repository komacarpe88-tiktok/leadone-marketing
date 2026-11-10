import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your booking is confirmed | LeadOne Marketing",
  description: "Watch the video before our call.",
  robots: { index: false, follow: false },
};

export default function BookingConfirmedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
