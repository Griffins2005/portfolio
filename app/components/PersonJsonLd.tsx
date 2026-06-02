import {
  defaultDescription,
  education,
  email,
  getSiteUrl,
  location,
  siteName,
  socialUrls,
  tagline,
} from "@/lib/site";

const knowsAbout = [
  "Data Science",
  "Machine Learning",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Information Science",
  education.minor,
  "Python",
  "React",
  "Next.js",
  "Flutter",
  "Firebase",
  "FastAPI",
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
    description: `Cornell ${education.degree} student (${education.concentration} concentration, ${education.minor} minor) building data-driven software, ML systems, and full-stack applications.`,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ithaca",
      addressRegion: "NY",
      addressCountry: "US",
    },
    nationality: {
      "@type": "Country",
      name: "Kenya",
    },
    memberOf: {
      "@type": "CollegeOrUniversity",
      name: education.university,
      url: "https://www.cornell.edu",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: education.university,
      url: "https://www.cornell.edu",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Student",
      occupationLocation: {
        "@type": "City",
        name: location,
      },
      skills: knowsAbout.join(", "),
    },
    knowsAbout: [...knowsAbout],
    sameAs: [socialUrls.github, socialUrls.linkedin, socialUrls.twitter],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: `${siteName} — Portfolio`,
    url: base,
    description: defaultDescription,
    inLanguage: "en-US",
    about: {
      "@type": "Person",
      "@id": `${base}/#person`,
    },
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
    description: defaultDescription,
    dateModified: new Date().toISOString().split("T")[0],
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
