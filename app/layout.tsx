import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
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
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
