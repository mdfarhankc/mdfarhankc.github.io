import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "Farhan - Python Full Stack Developer",
  description:
    "Versatile Python Full-Stack Developer with 3+ years of experience building scalable web and mobile applications using Python, FastAPI, Django, Flask, Odoo, React, and Flutter.",
  keywords: [
    "Mohammed Farhan K C",
    "Farhan",
    "Full Stack Developer",
    "Python Developer",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Farhan K C" }],
  creator: "Mohammed Farhan K C",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Farhan - Python Full Stack Developer",
    description:
      "Portfolio of Mohammed Farhan K C - a Python full-stack developer building robust web applications.",
    siteName: "Farhan's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan - Python Full Stack Developer",
    description:
      "Portfolio of Mohammed Farhan K C - a Python full-stack developer building robust web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
