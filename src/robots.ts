import { MetadataRoute } from "next";
import { siteConfig } from "./config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/test", "/test/1"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
