import type { Metadata } from "next";
import "./v2.css";
import V2Nav from "@/components/v2/Nav";
import V2Footer from "@/components/v2/FooterSection";

export const metadata: Metadata = {
  title: "LeadOne — Bli det företag Google rekommenderar först",
  description:
    "Vi hjälper lokala serviceföretag bli det självklara valet på Google. Fler samtal, fler bokningar, fler kunder — utan att betala för varje klick.",
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-body">
      <V2Nav />
      {children}
      <V2Footer />
    </div>
  );
}
