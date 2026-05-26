const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Farhan K C",
  url: siteUrl,
  jobTitle: "Python Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "AST Solutions LLC",
  },
  knowsAbout: [
    "Python",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
  ],
  sameAs: [
    "https://github.com/mdfarhankc",
    "https://linkedin.com/in/mdfarhankc",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
