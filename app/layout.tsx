import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PersonJsonLd from "./components/PersonJsonLd";
import { defaultDescription, getSiteUrl, siteName } from "@/lib/site";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: `${siteName} | Data Science & Full-Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: `${siteName} Portfolio`,
  keywords: [
    "Griffins Kiptanui Lelgut Too",
    "Griffins Lelgut",
    "Cornell University",
    "Information Science",
    "Data Science",
    "Machine Learning",
    "Full-Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Blockchain",
    "Kenya",
    "Ithaca",
  ],
  authors: [{ name: siteName, url: site }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  category: "technology",
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
  icons: {
    icon: "/g.png",
    shortcut: "/g.png",
    apple: "/g.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${siteName} — Portfolio`,
    title: `${siteName} | Data Science & Full-Stack Developer`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Portfolio`,
    description: defaultDescription,
    creator: "@K_Griffins8",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-neutral-50 text-gray-900 antialiased`}>
        <PersonJsonLd />
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
