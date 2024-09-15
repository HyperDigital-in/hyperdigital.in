import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HyperDigital - Marketing and Software Development",
  description:
    "HyperDigital provides top-tier marketing strategies and innovative software development solutions to businesses worldwide.",
  keywords:
    "marketing, software development, digital marketing, app development, web development, Video Production, Content Creation, HyperDigital",
  openGraph: {
    title: "HyperDigital - Marketing and Software Development",
    description:
      "Elevate your business with HyperDigital's tailored marketing and cutting-edge software development services.",
    url: "https://hyperdigital.in",
    siteName: "HyperDigital",
    locale: "en_US",
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
      <head>
        <meta
          name="description"
          content="HyperDigital provides top-tier marketing strategies and innovative software development solutions."
        />
        <meta
          name="keywords"
          content="marketing, software development, digital marketing, app development, web development, HyperDigital"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="HyperDigital - Marketing and Software Development"
        />
        <meta
          property="og:description"
          content="Elevate your business with HyperDigital's tailored marketing and cutting-edge software development services."
        />
        <meta property="og:url" content="https://hyperdigital.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HyperDigital - Marketing and Software Development</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
