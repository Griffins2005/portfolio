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
export const siteShortName = "Griffins Lelgut";
export const gradYear = "2028";
export const location = "Ithaca, NY";
export const email = "gkl39@cornell.edu";
export const twitterHandle = "@K_Griffins8";

export const education = {
  degree: "Information Science",
  concentration: "Data Science",
  minor: "Interactive Technology and AI",
  university: "Cornell University",
  classYear: `'${gradYear.slice(-2)}`,
} as const;

export const socialUrls = {
  github: "https://github.com/Griffins2005",
  linkedin: "https://www.linkedin.com/in/griffins-kiptanui-374a1a277",
  twitter: "https://x.com/K_Griffins8",
} as const;

export const defaultTitle = `${siteName} | Data Science & Full-Stack Developer`;

export const tagline = "Data Science · Full-Stack · AI · Machine Learning";

export const defaultDescription =
  "Portfolio of Griffins Kiptanui Lelgut Too — Cornell Information Science student (’28). Software engineering internships, AI systems, and full-stack applications."

export const siteKeywords = [
  "Griffins Kiptanui Lelgut Too",
  "Griffins Lelgut",
  "Cornell University",
  "Cornell Information Science",
  "Data Science",
  "Interactive Technology and AI",
  "Machine Learning",
  "AI Agents",
  "Full-Stack Developer",
  "Software Engineer",
  "LangGraph",
  "Python",
  "React",
  "Next.js",
  "Flutter",
  "Firebase",
  "FastAPI",
  "Kenya",
  "Ithaca",
  "Portfolio",
] as const;
