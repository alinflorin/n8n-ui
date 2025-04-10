import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { viteSingleFile } from "vite-plugin-singlefile";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [
    react(),
    // viteSingleFile(),
    {
      name: 'rewrite-asset-paths-to-query',
      transformIndexHtml(html) {
        return html
          .replace(/(src|href)="\.\/([^"]+)"/g, (_, attr, path) => {
            return `${attr}="?file=${encodeURIComponent(path)}"`;
          });
      },
    },
    basicSsl({
      name: "test",
    }),
  ],
  base: "./",
});
