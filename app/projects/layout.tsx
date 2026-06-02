import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Projects",
  description: `Software and ML portfolio projects by ${siteName} — Nestopia rental housing platform (live demo), CRAIIVE, Cloudflare AI API Copilot, NLP news summarizer, and data science work.`,
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      {children}
    </>
  );
}
