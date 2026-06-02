import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Live Desk",
  description: `Real-time GitHub activity feed for ${siteName} — live commits, pull requests, and open-source project updates from Griffins2005 on GitHub.`,
  path: "/live-desk",
});

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
