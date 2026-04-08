import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected software and ML projects by ${siteName}: full-stack apps, AI, blockchain, and data science — Nestopia, Cloudflare AI tools, NLP, and more.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteName}`,
    description:
      "Full-stack, AI, and data science projects including Nestopia, CF AI API Copilot, and machine learning work.",
    url: "/projects",
  },
  twitter: {
    title: `Projects | ${siteName}`,
    description:
      "Full-stack, AI, and data science portfolio projects.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
