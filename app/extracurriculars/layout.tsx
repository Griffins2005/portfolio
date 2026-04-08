import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Extracurriculars",
  description: `Conferences, programs, and activities outside the classroom — AfroTech, Cornell Blockchain Conference, SMART Kenya, and more — ${siteName}.`,
  alternates: {
    canonical: "/extracurriculars",
  },
  openGraph: {
    title: `Extracurriculars | ${siteName}`,
    description:
      "Highlights from conferences, field programs, and student activities.",
    url: "/extracurriculars",
  },
  twitter: {
    title: `Extracurriculars | ${siteName}`,
    description:
      "Conferences, travel programs, and community engagement.",
  },
};

export default function ExtracurricularsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
