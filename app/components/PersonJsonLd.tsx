import { getSiteUrl, siteName } from "@/lib/site";

const sameAs = [
  "https://github.com/Griffins2005",
  "https://www.linkedin.com/in/griffins-kiptanui-374a1a277",
  "https://x.com/K_Griffins8",
] as const;

export default function PersonJsonLd() {
  const base = getSiteUrl();
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: base,
    image: `${base}/headshot.jpeg`,
    jobTitle: "Data Science & Full-Stack Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cornell University",
    },
    email: "gkl39@cornell.edu",
    sameAs: [...sameAs],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteName} — Portfolio`,
    url: base,
    description:
      "Portfolio of Griffins Kiptanui Lelgut Too: projects, experience, and organizations in data science, ML, and full-stack development.",
    author: {
      "@type": "Person",
      name: siteName,
      url: base,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
