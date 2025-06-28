import type { Metadata } from "next";
import { Hind } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

import "./globals.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${hind.className} antialiased my-20 container max-w-7xl mx-auto`}
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
