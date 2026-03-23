import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mdfarhankc.vercel.app";

export const metadata: Metadata = {
  title: "Farhan — Python Full Stack Developer",
  description:
    "Portfolio of Mohammed Farhan K C — a Python full-stack developer building robust web applications with Django, FastAPI, React, and Next.js.",
  keywords: [
    "Mohammed Farhan K C",
    "Farhan",
    "Full Stack Developer",
    "Python Developer",
    "Django",
    "FastAPI",
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
    title: "Farhan — Python Full Stack Developer",
    description:
      "Portfolio of Mohammed Farhan K C — a Python full-stack developer building robust web applications.",
    siteName: "Farhan's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Farhan K C — Python Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan — Python Full Stack Developer",
    description:
      "Portfolio of Mohammed Farhan K C — a Python full-stack developer building robust web applications.",
    images: ["/og-image.png"],
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
