import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["src/zim.js"],
  bundle: true,
  minify: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "cdn/zim.js",
})
