import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine Phase Systems Inc.",
  description: "The world's first straight-shot molecular nanotechnology lab, with goal of creating scalable, high-throughput atomimcally precise manufacturing. Conquering the world's largest challenges, one atom at a time.",
  openGraph: {
    title: "Machine Phase Systems Inc.",
    description: "The world's first straight-shot molecular nanotechnology lab, with goal of creating scalable, high-throughput atomimcally precise manufacturing. Conquering the world's largest challenges, one atom at a time.",
    url: "https://machinephase.systems",
    siteName: "Machine Phase Systems Inc.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://machinephase.systems/og-preview.jpg",
        width: 1144,
        height: 537,
        alt: "Machine Phase Systems Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MarkFriedenbach",
    title: "Machine Phase Systems Inc.",
    description: "The world's first straight-shot molecular nanotechnology lab, with goal of creating scalable, high-throughput atomimcally precise manufacturing. Conquering the world's largest challenges, one atom at a time.",
    images: [
      {
        url: "https://machinephase.systems/og-preview.jpg",
        width: 1144,
        height: 537,
        alt: "Machine Phase Systems Inc.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
