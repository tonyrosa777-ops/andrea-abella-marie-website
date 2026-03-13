/**
 * Fetches product preview/mockup images from Printful for each seeded product
 * and updates printful-seeded-products.json with the preview_image_url.
 *
 * Printful stores a preview image in the first sync_variant's files
 * under type "preview" or in the sync_product.thumbnail_url after processing.
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Load .env.local
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

const API_KEY = process.env.PRINTFUL_API_KEY;
const STORE_ID = "17763774";
const BASE = "https://api.printful.com";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function pfetch(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "X-PF-Store-Id": STORE_ID,
    },
  });
  const json = await res.json().catch(() => ({}));
  if (res.status === 429) {
    const w = parseInt(res.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited, waiting ${w}s...`);
    await sleep(w * 1000);
    return pfetch(path);
  }
  if (!res.ok) throw new Error(json.error?.message || JSON.stringify(json).slice(0, 200));
  return json.result ?? json;
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

let updated = 0;

for (const product of summary.products) {
  console.log(`\n-> ${product.name} (id: ${product.printful_id})`);
  try {
    const detail = await pfetch(`/store/products/${product.printful_id}`);

    // Try sync_product.thumbnail_url first
    const thumbUrl = detail.sync_product?.thumbnail_url;
    if (thumbUrl && thumbUrl.length > 10) {
      product.preview_image_url = thumbUrl;
      console.log(`  ✓ thumbnail_url: ${thumbUrl.slice(0, 60)}...`);
      updated++;
      await sleep(300);
      continue;
    }

    // Fall back: look through sync_variants files for a "preview" type
    const variants = detail.sync_variants ?? [];
    let previewUrl = "";
    for (const variant of variants) {
      const previewFile = (variant.files ?? []).find(
        (f) => f.type === "preview" && f.preview_url
      );
      if (previewFile?.preview_url) {
        previewUrl = previewFile.preview_url;
        break;
      }
      // Also try thumbnail_url on the file
      const anyFile = (variant.files ?? []).find((f) => f.thumbnail_url);
      if (anyFile?.thumbnail_url) {
        previewUrl = anyFile.thumbnail_url;
        break;
      }
    }

    if (previewUrl) {
      product.preview_image_url = previewUrl;
      console.log(`  ✓ file preview: ${previewUrl.slice(0, 60)}...`);
      updated++;
    } else {
      console.log(`  ⚠ No preview found — Printful may still be processing mockups`);
    }

    await sleep(300);
  } catch (err) {
    console.log(`  ✗ ${err.message}`);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Done. Updated ${updated}/${summary.products.length} products with preview images.`);
