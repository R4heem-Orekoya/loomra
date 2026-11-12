import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/lib/legal";
import { POSTS } from "@/lib/posts";
import { ROLES } from "@/lib/roles";

const BASE_URL = "https://loomra.com";

const ROUTES = [
   { path: "", priority: 1 },
   { path: "/product", priority: 0.9 },
   { path: "/pricing", priority: 0.9 },
   { path: "/security", priority: 0.8 },
   { path: "/about", priority: 0.7 },
   { path: "/careers", priority: 0.6 },
   { path: "/press", priority: 0.5 },
   { path: "/blog", priority: 0.7 },
   { path: "/help", priority: 0.6 },
   { path: "/contact", priority: 0.6 },
   { path: "/legal", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
   const lastModified = new Date();

   return [
      ...ROUTES.map((route) => ({
         url: `${BASE_URL}${route.path}`,
         lastModified,
         changeFrequency: "monthly" as const,
         priority: route.priority,
      })),
      ...LEGAL_DOCS.map((doc) => ({
         url: `${BASE_URL}/legal/${doc.slug}`,
         lastModified,
         changeFrequency: "yearly" as const,
         priority: 0.3,
      })),
      ...POSTS.map((post) => ({
         url: `${BASE_URL}/blog/${post.slug}`,
         lastModified: new Date(post.dateTime),
         changeFrequency: "yearly" as const,
         priority: 0.5,
      })),
      ...ROLES.map((role) => ({
         url: `${BASE_URL}/careers/${role.slug}`,
         lastModified,
         changeFrequency: "weekly" as const,
         priority: 0.5,
      })),
   ];
}
