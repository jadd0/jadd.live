import type { Metadata } from "next";
import { Agbalumo, Poppins } from "next/font/google";
import "./globals.css";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadd Al-Khabbaz — Boutique Web Design",
  description:
    "Small, sharp websites for people who'd rather see results than read a brochure. West Kirby, the Wirral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${agbalumo.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
