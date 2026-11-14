import type { Metadata } from "next";
import { Newsreader, Syne } from "next/font/google";
import BackgroundMotion from "@/components/background/BackgroundMotion";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Natalie Roode | Software Engineer",
  description:
    "UI focused software engineer crafting polished, digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${syne.variable} antialiased flex flex-col min-h-screen font-primary background`}
      >
        <BackgroundMotion />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
