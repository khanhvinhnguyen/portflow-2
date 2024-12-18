import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar, Footer } from "@/components";
import { Bio } from "@/data/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${Bio.name} | Portfolio`,
  description: `Portfolio website of ${Bio.name}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
