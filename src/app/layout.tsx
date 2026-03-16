import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "TapJournal - Journal your day in a few taps",
  description:
    "Tap what you did, say how you felt, get a beautiful AI-generated journal entry. The simplest way to build a journaling habit.",
  openGraph: {
    title: "TapJournal",
    description: "Journal your day in a few taps",
    url: "https://tapjournal.io",
    siteName: "TapJournal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
