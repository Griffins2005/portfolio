import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes: {
  path: "" | "/experience" | "/projects" | "/live-desk" | "/extracurriculars" | "/orgs";
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/experience", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/live-desk", priority: 0.7, changeFrequency: "daily" },
  { path: "/extracurriculars", priority: 0.7, changeFrequency: "monthly" },
  { path: "/orgs", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
