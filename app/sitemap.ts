import type { MetadataRoute } from "next";

import { getNewsIds } from "@/lib/sanity";

const url =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sls-g12-campus.example";

const routes = [
  "",
  "/about",
  "/academics",
  "/admissions",
  "/principal-message",
  "/faculty",
  "/student-life",
  "/news",
  "/contact",
];

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));

  const ids = await getNewsIds();

  const articles: MetadataRoute.Sitemap = ids.map((id) => ({
    url: `${url}/news/${id}`,
    changeFrequency: "weekly",
    priority: 0.65,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...articles];
}
