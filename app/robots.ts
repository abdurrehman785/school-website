import type { MetadataRoute } from "next";

const url =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sls-g12-campus.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
