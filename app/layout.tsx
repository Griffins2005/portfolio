import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Griffins Kiptanui Lelgut Too | Data Science & Full-Stack Developer",
  description: "Portfolio of Griffins Kiptanui Lelgut Too - Cornell Information Science student specializing in Data Science, Full-Stack Development, AI, and Blockchain. Building accessible, data-driven solutions.",
  keywords: ["Griffins Lelgut", "Data Science", "Full-Stack Developer", "Cornell University", "Machine Learning", "Web Development", "Blockchain", "React", "Django", "Python", "AI"],
  authors: [{ name: "Griffins Kiptanui Lelgut Too" }],
  icons: {
    icon: "/g.png",
    shortcut: "/g.png",
    apple: "/g.png",
  },
  openGraph: {
    title: "Griffins Kiptanui Lelgut Too | Portfolio",
    description: "Data Science, Full-Stack Development, AI & Blockchain Developer from Kenya, studying at Cornell University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-neutral-50 text-gray-900 antialiased`}>
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
