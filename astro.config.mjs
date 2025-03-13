import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// Remove the cloudflare import since you're using Vercel now
// import cloudflare from "@astrojs/cloudflare";

// Fix the Vercel import to specify which adapter you want to use
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.denncodes.com",
  integrations: [
    mdx(),
    sitemap({
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString().split("T")[0],
    }),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
