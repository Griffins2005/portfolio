import { createPageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/lib/json-ld";
import { siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Extracurriculars",
  description: `Conferences, field programs, and student activities — ${siteName}: AfroTech 2025, Cornell Blockchain Conference, SMART Kenya, EAST leadership, and campus life at Cornell.`,
  path: "/extracurriculars",
});

export default function ExtracurricularsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Extracurriculars", path: "/extracurriculars" },
        ]}
      />
      {children}
    </>
  );
}
