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
    {
      name: 'rewrite-tsx-asset-imports',
      enforce: 'post',
      generateBundle(_, bundle) {
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (
            chunk.type === 'chunk' &&
            chunk.code &&
            /\.(js|ts)x?$/.test(fileName)
          ) {
            // Catching all asset URLs, not just from 'assets'
            chunk.code = chunk.code.replace(
              /["']\/?([^"']+\.(png|jpe?g|gif|svg|webp|css|jpg|mp4|json|woff2?|ttf|otf|eot))["']/g,
              (_, file) => `"\\?file=${file}"`
            );
          }
        }
      },
    },
    basicSsl({
      name: "test",
    }),
  ],
  base: "./",
});
