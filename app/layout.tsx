import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/providers/lenis-provider";

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
    <html lang="en" className="min-h-full flex flex-col overflow-x-hidden">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
