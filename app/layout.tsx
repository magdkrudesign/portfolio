import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Magdalena Kruk - Brand and Product Designer",
  description:
    "Brand and product designer crafting identities and digital experiences that are clear, intentional, and built to last.",
  openGraph: {
    title: "Magdalena Kruk - Brand and Product Designer",
    description:
      "Brand and product designer crafting identities and digital experiences that are clear, intentional, and built to last.",
    url: "https://magdalenakruk.pl",
    siteName: "Magdalena Kruk",
    images: [
      {
        url: "https://framerusercontent.com/assets/5mvEsHDyHtfL4TzfEY17O72YCVY.png",
      },
    ],
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
