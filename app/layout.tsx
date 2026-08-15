import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jawahar.R | Aspiring Data Engineer",
  description:
    "Jawahar.R — B.Tech Artificial Intelligence & Data Science student building data pipelines, ETL systems, real-time applications, and AI-powered solutions.",
  keywords: [
    "Data Engineer",
    "ETL",
    "Python",
    "SQL",
    "FastAPI",
    "Data Pipelines",
    "Portfolio",
    "Jawahar",
  ],
  authors: [{ name: "Jawahar.R" }],
  openGraph: {
    title: "Jawahar.R | Aspiring Data Engineer",
    description:
      "B.Tech AI & Data Science student — building end-to-end data pipelines, ETL systems, and AI-powered applications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawahar.R | Aspiring Data Engineer",
    description:
      "B.Tech AI & Data Science student — building end-to-end data pipelines, ETL systems, and AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080c14" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
