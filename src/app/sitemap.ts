import type { MetadataRoute } from "next";

import { getAllProjects } from "@/data/projects";

export const dynamic = "force-static";

const siteUrl = "https://mdfarhankc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
