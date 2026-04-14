import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yellowknife Skin Solutions | Medical Aesthetics & Skincare Yellowknife",
  description:
    "Yellowknife's top-rated medical aesthetics clinic — Hydrafacial, Laser Hair Removal, Microneedling, Injections, and more. Rated 5.0 ★ with 450+ reviews. Book online today.",
  keywords: [
    "Yellowknife skin care",
    "medical spa Yellowknife",
    "Hydrafacial",
    "laser hair removal",
    "microneedling",
    "skin solutions",
    "aesthetics clinic",
    "Yellowknife NT",
  ],
  openGraph: {
    title: "Yellowknife Skin Solutions | Medical Aesthetics",
    description:
      "Top-rated medical aesthetics clinic in Yellowknife, NT. Hydrafacial, Laser Hair Removal, Microneedling, Injections & more. Book now on Fresha.",
    url: "https://yellowknifeskinsolutions.ca",
    siteName: "Yellowknife Skin Solutions",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
