import path from "path";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceIndex = path.resolve(__dirname, "scripts/index.template.html");
const rootIndex = path.resolve(__dirname, "index.html");

// Restore the Vite template if a previously published standalone index is checked out.
if (existsSync(sourceIndex) && readFileSync(rootIndex, "utf8") !== readFileSync(sourceIndex, "utf8")) {
  copyFileSync(sourceIndex, rootIndex);
}

// Materialize the built single-file app where branch-based GitHub Pages can serve it.
const publishPagesFiles = {
  name: "publish-self-contained-pages-files",
  apply: "build" as const,
  closeBundle() {
    const html = readFileSync(path.resolve(__dirname, "dist/index.html"), "utf8");
    const docsDirectory = path.resolve(__dirname, "docs");

    mkdirSync(docsDirectory, { recursive: true });
    writeFileSync(rootIndex, html);
    writeFileSync(path.resolve(docsDirectory, "index.html"), html);
    writeFileSync(path.resolve(docsDirectory, ".nojekyll"), "");
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), publishPagesFiles],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
