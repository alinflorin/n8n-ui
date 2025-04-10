import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig(({ command }) => {
  const isProd = command === "build";

  const prodOnlyPlugins: PluginOption[] = isProd
    ? [
        {
          name: "rewrite-asset-paths-to-query",
          transformIndexHtml(html) {
            return html.replace(/(src|href)="\/([^"]+)"/g, (_, attr, path) => {
              return `${attr}="?file=${encodeURIComponent(path)}"`;
            });
          },
        },
        {
          name: "rewrite-tsx-asset-imports",
          enforce: "post",
          generateBundle(_, bundle) {
            for (const [fileName, chunk] of Object.entries(bundle)) {
              if (
                chunk.type === "chunk" &&
                chunk.code &&
                /\.(js|ts)x?$/.test(fileName)
              ) {
                chunk.code = chunk.code.replace(
                  /["'](\/?[^"']+\.(png|jpe?g|gif|svg|webp|css|jpg|mp4|json|woff2?|ttf|otf|eot))["']/g,
                  (_, filePath: string) => {
                    let path = filePath.startsWith("/") ? `.${filePath}` : filePath;
                    if (path.startsWith("./")) {
                      path = path.substring(2);
                    }
                    return `"\\?file=${encodeURIComponent(path)}"`;
                  }
                );
              }
            }
          },
        },
      ]
    : [];

  return {
    plugins: [
      react(),
      basicSsl(),
      ...prodOnlyPlugins,
    ],
    build: {
      minify: true,
    },
  };
});
