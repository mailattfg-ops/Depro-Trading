import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteConfig = {
  name: "Depro Trading",
  description: "Premier destination for specialized interior and infrastructure hardware in Kerala. Experts in Interior Works, Aluminum Fabrication, and Wholesale Supply.",
  url: "https://deprotrading.com",
  ogImage: "https://deprotrading.com/Images/og-image.jpg",
  keywords: ["Hardware Kerala", "Interior Hardware Malappuram", "Aluminum Fabrication Hardware", "Depro Trading", "Hardware Wholesale Kerala"],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Hardware & Interior Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/Images/logo.svg",
    apple: "/Images/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${outfit.variable} ${playfair.variable} font-sans antialiased text-slate-900 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
