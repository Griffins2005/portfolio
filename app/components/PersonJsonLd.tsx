import { getSiteUrl, siteName } from "@/lib/site";

const sameAs = [
  "https://github.com/Griffins2005",
  "https://www.linkedin.com/in/griffins-kiptanui-374a1a277",
  "https://x.com/K_Griffins8",
] as const;

const knowsAbout = [
  "Data Science",
  "Machine Learning",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Blockchain",
  "Python",
  "React",
  "Next.js",
  "Information Science",
] as const;

export default function PersonJsonLd() {
  const base = getSiteUrl();
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${base}/#person`,
    name: siteName,
    givenName: "Griffins",
    familyName: "Lelgut Too",
    url: base,
    image: `${base}/headshot.jpeg`,
    jobTitle: "Data Science & Full-Stack Developer",
    description:
      "Cornell Information Science student building data-driven software, ML systems, and full-stack applications.",
    email: "gkl39@cornell.edu",
    nationality: {
      "@type": "Country",
      name: "Kenya",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Cornell University",
      url: "https://www.cornell.edu",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cornell University",
    },
    knowsAbout: [...knowsAbout],
    sameAs: [...sameAs],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: `${siteName} — Portfolio`,
    url: base,
    description:
      "Portfolio of Griffins Kiptanui Lelgut Too: projects, experience, and organizations in data science, ML, and full-stack development.",
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${base}/#person`,
    },
    publisher: {
      "@type": "Person",
      "@id": `${base}/#person`,
    },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${base}/#profilepage`,
    url: base,
    name: `${siteName} — Portfolio`,
    mainEntity: {
      "@type": "Person",
      "@id": `${base}/#person`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${base}/#website`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
