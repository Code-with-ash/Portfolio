import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ashmit Mishra — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and scalable web applications. Building fast, reliable, and user-centric digital products.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Ashmit Mishra",
  ],
  authors: [{ name: "Ashmit Mishra" }],
  openGraph: {
    title: "Ashmit Mishra — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and scalable web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Ashmit Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashmit Mishra — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, and scalable web applications.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}