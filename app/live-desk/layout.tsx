import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Live Desk",
  description: `Live GitHub activity feed for ${siteName} — pushes, pull requests, and repo updates as they happen.`,
  alternates: {
    canonical: "/live-desk",
  },
  openGraph: {
    title: `Live Desk | ${siteName}`,
    description: "Real-time stream of GitHub commits and project activity.",
    url: "/live-desk",
  },
  twitter: {
    title: `Live Desk | ${siteName}`,
    description: "Live GitHub activity on the portfolio.",
  },
};

export default function LiveDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Live Desk", path: "/live-desk" },
        ]}
      />
      {children}
    </>
  );
}
