import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/zim.js"],
  target: 'es2020',
  sourcemap: false,
  clean: true,
  format: ["cjs", "esm"],
  minify: true,
  publicDir: "ts-src",
})
