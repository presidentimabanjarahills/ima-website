import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/about/ima", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/about/who-we-are", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/leadership", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/events", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/events/ai-healthcare-conference", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/events/ai-healthcare-conference/register", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/news", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
