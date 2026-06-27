// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jenilpadshala.com",
  output: "static",
  integrations: [mdx(), icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
