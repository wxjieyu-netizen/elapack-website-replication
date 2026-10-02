// Submit every URL in public/sitemap.xml to IndexNow (used by Bing and other
// participating engines). Run after each deploy: node scripts/indexnow.mjs
// The key is public by design — IndexNow requires it hosted at the site root
// (public/<32-hex>.txt), so it is read from there, single source of truth.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const HOST = "https://elapack.com";
const root = join(import.meta.dirname, "..");

const keyFile = readdirSync(join(root, "public")).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file (public/<32-hex>.txt) found");
const key = keyFile.replace(".txt", "");

const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("sitemap.xml contains no <loc> URLs");

const res = await fetch("https://api.indexnow.org/", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(HOST).host,
    key,
    keyLocation: `${HOST}/${keyFile}`,
    urlList,
  }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) {
  console.log(await res.text());
  process.exit(1);
}
