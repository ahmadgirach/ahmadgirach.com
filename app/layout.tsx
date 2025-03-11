import type { Metadata } from "next";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ahmad Girach | Full-Stack Developer",
  description: "Full-Stack Developer with 9 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased container max-w-7xl mx-auto my-20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
