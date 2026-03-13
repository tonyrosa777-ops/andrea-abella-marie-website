/**
 * Updates design files and pricing on all existing Printful sync products.
 * Uses jsDelivr CDN (raw.githubusercontent.com is blocked by Printful).
 * Pricing: 30% profit margin (base / 0.70).
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

// Upload design file via jsDelivr CDN — returns file id
const fileCache = {};
async function uploadDesign(designName) {
  if (fileCache[designName]) return fileCache[designName];
  const url = `${CDN}/${designName}.png`;
  console.log(`  Uploading ${designName}.png...`);
  const result = await pfetch("/files", {
    method: "POST",
    body: JSON.stringify({ type: "default", filename: `${designName}.png`, url }),
  });
  if (!result.id || result.size === 0) {
    throw new Error(`Upload failed — file size is 0 (CDN may not have file yet): ${designName}`);
  }
  console.log(`  ✓ file id: ${result.id} (${result.width}×${result.height})`);
  fileCache[designName] = result;
  await sleep(400);
  return result;
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

let updated = 0;

for (const product of summary.products) {
  console.log(`\n-> ${product.name} (id: ${product.printful_id})`);

  try {
    // Get current sync product to find variant IDs and base costs
    const syncProduct = await pfetch(`/store/products/${product.printful_id}`);
    const variants = syncProduct.sync_variants ?? [];
    if (!variants.length) {
      console.log("  ⚠ no variants found, skipping");
      continue;
    }

    // Upload the correct design file
    const designFile = await uploadDesign(product.design);

    // Compute retail price at 30% profit margin from first variant retail price
    // We use the existing retail_price divided by 2.5 to recover base cost, then recompute
    const existingRetail = parseFloat(variants[0].retail_price ?? "20");
    const recoveredBase = existingRetail / 2.5;
    const newRetailPrice = Math.ceil(recoveredBase / 0.70).toFixed(2);

    // Update each variant with the new design file and price
    for (const v of variants) {
      await pfetch(`/store/variants/${v.id}`, {
        method: "PUT",
        body: JSON.stringify({
          retail_price: newRetailPrice,
          files: [{ type: "default", id: designFile.id }],
        }),
      });
      await sleep(200);
    }

    product.price = parseFloat(newRetailPrice);
    console.log(`  ✓ Updated ${variants.length} variants → $${newRetailPrice} retail`);
    updated++;

    writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    await sleep(800);
  } catch (err) {
    console.log(`  ✗ ${err.message.slice(0, 200)}`);
    await sleep(500);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Updated ${updated}/${summary.products.length} products`);
