import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import NavBar from "./_components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhoy Sarkar",
  description: "Description",
};

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <NavBar />
        <AnimatePresence mode='wait'>
          {children}
          <Analytics />
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
