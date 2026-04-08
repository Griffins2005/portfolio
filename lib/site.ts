/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yourdomain.com).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const siteName = "Griffins Kiptanui Lelgut Too";

export const defaultDescription =
  "Cornell Information Science student (’28) — data science, full-stack development, machine learning, AI, and blockchain. Portfolio, projects, and experience.";
