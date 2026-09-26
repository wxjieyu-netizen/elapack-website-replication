import esbuild from "esbuild";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

// Bundle the TSX prerender entry (React SSR + App) to a temp CJS file, then run it.
await esbuild.build({
  entryPoints: [path.join(here, "prerender.tsx")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(here, "_prerender.cjs"),
  loader: { ".css": "empty" },
  logLevel: "error",
  external: ["react", "react-dom", "react-dom/server", "react-router-dom", "react-router-dom/server", "react-router"],
});

await esbuild.build({
  entryPoints: [path.join(here, "redirects.ts")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(here, "_redirects.cjs"),
  logLevel: "error",
});

execFileSync("node", [path.join(here, "_prerender.cjs")], { stdio: "inherit" });
execFileSync("node", [path.join(here, "_redirects.cjs")], { stdio: "inherit" });
