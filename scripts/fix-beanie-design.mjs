/**
 * Updates the Healing Beanie product in Printful with the fixed logo-only-light design
 * (no tagline text — prevents wrapping around seams on AOP beanie).
 * Preserves existing retail price.
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

try {
  const envFile = readFileSync(join(ROOT, ".env.local"), "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {}

const KEY = process.env.PRINTFUL_API_KEY;
const STORE_ID = "17763774";
const BASE = "https://api.printful.com";
const CDN = "https://cdn.jsdelivr.net/gh/tonyrosa777-ops/andrea-abella-marie-website@master/public/images/designs";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function pfetch(path, opts = {}) {
  const headers = {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
    "X-PF-Store-Id": STORE_ID,
    ...(opts.headers ?? {}),
  };
  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  const json = await res.json().catch(() => ({}));
  if (res.status === 429) {
    const w = parseInt(res.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited, waiting ${w}s...`);
    await sleep(w * 1000);
    return pfetch(path, opts);
  }
  if (!res.ok) throw new Error(json.error?.message ?? JSON.stringify(json).slice(0, 200));
  return json.result ?? json;
}

const summary = JSON.parse(readFileSync(join(ROOT, "src", "lib", "printful-seeded-products.json"), "utf-8"));
const beanie = summary.products.find(p => p.slug === "healing-beanie");

if (!beanie) {
  console.error("Could not find healing-beanie in seeded products");
  process.exit(1);
}

console.log(`\nUpdating: ${beanie.name} (printful_id: ${beanie.printful_id})`);
console.log(`Design: ${beanie.design}`);

// Upload the logo-only-light design
const designUrl = `${CDN}/${beanie.design}.png`;
console.log(`\nUploading design from CDN: ${designUrl}`);
await sleep(5000); // wait for CDN to propagate

const file = await pfetch("/files", {
  method: "POST",
  body: JSON.stringify({ type: "default", filename: `${beanie.design}.png`, url: designUrl }),
});

if (!file.id || file.size === 0) {
  console.error(`Upload failed — file size is 0. CDN may not have the file yet. Try again in 30s.`);
  process.exit(1);
}
console.log(`✓ File uploaded: id=${file.id} (${file.width}×${file.height})`);

// Get current variants and preserve their retail prices
const syncProduct = await pfetch(`/store/products/${beanie.printful_id}`);
const variants = syncProduct.sync_variants ?? [];
console.log(`\nFound ${variants.length} variants`);

for (const v of variants) {
  console.log(`  Updating variant ${v.id} (price: $${v.retail_price})...`);
  await pfetch(`/store/variants/${v.id}`, {
    method: "PUT",
    body: JSON.stringify({
      retail_price: v.retail_price,
      files: [{ type: "default", id: file.id }],
    }),
  });
  await sleep(300);
  console.log(`  ✓ done`);
}

console.log(`\n✅ Beanie updated with logo-only design (no text). Check Printful mockups to verify.`);
