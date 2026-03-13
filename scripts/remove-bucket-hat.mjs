/**
 * Removes the AOP Bucket Hat (bp 654) from the Printful store and seeded JSON.
 * All standard hat blueprints require embroidery files (DST/PES) — no DTG option available.
 * The store will have 21 products: 20 existing + Healing Beanie (AOP cut-sew bp 458).
 */

import { readFileSync, writeFileSync } from "fs";
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
    process.env[trimmed.slice(0, eq).trim()] ??= trimmed.slice(eq + 1).trim();
  }
} catch {}

const KEY = process.env.PRINTFUL_API_KEY;
const STORE_ID = "17763774";
const BASE = "https://api.printful.com";

async function pfetch(path, opts = {}) {
  const headers = {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
    "X-PF-Store-Id": STORE_ID,
    ...(opts.headers ?? {}),
  };
  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  if (res.status === 429) {
    const w = parseInt(res.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited ${w}s...`);
    await new Promise(r => setTimeout(r, w * 1000));
    return pfetch(path, opts);
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok && res.status !== 404) throw new Error(json.error?.message ?? JSON.stringify(json).slice(0, 200));
  return json.result ?? json;
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

const AOP_HAT_ID = 423573917;
const AOP_HAT_SLUG = "grounded-all-over-print-bucket-hat";

console.log(`\n-> Deleting AOP Bucket Hat (id: ${AOP_HAT_ID}) from Printful...`);
try {
  await pfetch(`/store/products/${AOP_HAT_ID}`, { method: "DELETE" });
  console.log("  ✓ Deleted from Printful store");
} catch (err) {
  console.log(`  ⚠ Delete failed (may already be gone): ${err.message}`);
}

// Remove from JSON
const idx = summary.products.findIndex(p => p.slug === AOP_HAT_SLUG || p.printful_id === AOP_HAT_ID);
if (idx !== -1) {
  summary.products.splice(idx, 1);
  console.log(`  ✓ Removed from seeded JSON`);
} else {
  console.log("  ⚠ Not found in JSON");
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Done. Store now has ${summary.products.length} products.`);
