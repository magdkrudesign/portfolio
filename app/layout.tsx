import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Magdalena Kruk — Senior Brand & Product Designer",
  description:
    "Senior UX/UI & Brand Designer blending strategy, story, and systems into brands and digital products that are clear, memorable, and built to last.",
  openGraph: {
    title: "Magdalena Kruk — Senior Brand & Product Designer",
    description: "Senior UX/UI & Brand Designer based in Wrocław, Poland.",
    url: "https://magdalenakruk.framer.website",
    siteName: "Magdalena Kruk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
