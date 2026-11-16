import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      // The career and about photography is served at 90; the default
      // allowlist only carries 75.
      qualities: [75, 90],
   },
   cacheComponents: true,
   partialPrefetching: true,
   reactCompiler: true,
   turbopack: {
      rules: {
         "*.css": {
            loaders: ["@tailwindcss/turbopack"],
            as: "*.css",
         },
      },
   },
};

export default nextConfig;
