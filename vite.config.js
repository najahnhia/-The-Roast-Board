import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

const jsxCodePlugin = {
  name: "jsx-code-loader",
  enforce: "pre",
  resolveId(source, importer) {
    if (!source.endsWith(".CODE") || !importer) return null;
    return path.resolve(path.dirname(importer), source);
  },
  async load(id) {
    if (!id.endsWith(".CODE")) return null;
    return transform(fs.readFileSync(id, "utf8"), {
      loader: "jsx",
      jsx: "automatic",
      sourcefile: id,
    });
  },
};

export default defineConfig({
  root,
  base: process.env.GITHUB_ACTIONS ? "/-The-Roast-Board/" : "/",
  plugins: [jsxCodePlugin, react()],
});
