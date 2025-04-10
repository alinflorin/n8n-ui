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
            // Match both absolute and relative asset paths, ensuring the full path is captured
            chunk.code = chunk.code.replace(
              /["'](\/?[^"']+\.(png|jpe?g|gif|svg|webp|css|jpg|mp4|json|woff2?|ttf|otf|eot))["']/g,
              (_, filePath) => {
                // If the path starts with '/', treat it as relative to the current directory
                let path = filePath.startsWith('/') ? `.${filePath}` : filePath;
    
                // If the path starts with './', remove the leading './'
                if (path.startsWith('./')) {
                  path = path.substring(2); // Remove the './'
                }
    
                // Ensure proper query string handling (encodeURIComponent for safe URL)
                return `"\\?file=${encodeURIComponent(path)}"`;
              }
            );
          }
        }
      },
    },    
    basicSsl({
      name: "test",
    }),
  ],
  build: {
    minify: false
  }
});
