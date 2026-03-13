/**
 * One-off fix:
 * 1. Re-uploads new design files (apparel-dark, apparel-light, logo-only-*)
 *    that failed because jsDelivr hadn't cached them yet.
 * 2. Corrects prices that were mis-calculated (base/2.5 bug).
 * 3. Creates the replacement hat + beanie products (which were deleted but not recreated).
 *
 * Pricing: fetches real base cost from Printful catalog per blueprint_id.
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
    console.log(`  Rate limited ${w}s...`);
    await sleep(w * 1000);
    return pfetch(path, opts);
  }
  if (!res.ok) throw new Error(json.error?.message ?? JSON.stringify(json).slice(0, 200));
  return json.result ?? json;
}

const fileCache = {};
async function uploadDesign(designName) {
  if (fileCache[designName]) return fileCache[designName];
  const url = `${CDN}/${designName}.png`;
  console.log(`  Uploading ${designName}.png...`);
  const result = await pfetch("/files", {
    method: "POST",
    body: JSON.stringify({ type: "default", filename: `${designName}.png`, url }),
  });
  if (!result.id || result.size === 0) throw new Error(`0 bytes: ${designName} — CDN not ready`);
  console.log(`  ✓ file id: ${result.id} (${result.width}×${result.height})`);
  fileCache[designName] = result;
  await sleep(400);
  return result;
}

// Fetch correct base price from Printful catalog
const basePriceCache = {};
async function getCatalogBasePrice(blueprintId) {
  if (basePriceCache[blueprintId]) return basePriceCache[blueprintId];
  const res = await fetch(`${BASE}/products/${blueprintId}`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  const json = await res.json();
  const variants = json.result?.variants ?? [];
  if (!variants.length) return 15;
  // Use minimum base price across variants (most affordable option sets the floor)
  const prices = variants.map(v => parseFloat(v.price ?? "15")).filter(p => p > 0);
  const base = Math.min(...prices);
  basePriceCache[blueprintId] = base;
  return base;
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

// Already fixed in previous run — skip all, only run hat/beanie creation below
const needDesignFix = new Set([]);
const needPriceFix = new Set([]);

let updated = 0;

for (const product of summary.products) {
  const fixDesign = needDesignFix.has(product.slug);
  const fixPrice = needPriceFix.has(product.slug);

  if (!fixDesign && !fixPrice) {
    console.log(`-> ${product.name} — skip`);
    continue;
  }

  console.log(`\n-> ${product.name} (id: ${product.printful_id})`);

  try {
    const syncProduct = await pfetch(`/store/products/${product.printful_id}`);
    const variants = syncProduct.sync_variants ?? [];
    if (!variants.length) { console.log("  ⚠ no variants"); continue; }

    const designFile = fixDesign ? await uploadDesign(product.design) : null;

    // Get real catalog base price
    const basePrice = await getCatalogBasePrice(product.blueprint_id);
    const retailPrice = Math.ceil(basePrice / 0.70).toFixed(2);

    for (const v of variants) {
      const body = { retail_price: retailPrice };
      if (designFile) body.files = [{ type: "default", id: designFile.id }];
      await pfetch(`/store/variants/${v.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      await sleep(150);
    }

    product.price = parseFloat(retailPrice);
    console.log(`  ✓ ${variants.length} variants → $${retailPrice}${fixDesign ? " + new design" : ""}`);
    updated++;
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    await sleep(600);
  } catch (err) {
    console.log(`  ✗ ${err.message.slice(0, 200)}`);
    await sleep(400);
  }
}

// Recreate hat + beanie (were deleted, never successfully recreated)
console.log("\n=== Creating replacement hat + beanie ===\n");

// bp 81 (Ribbed Knit Beanie) and bp 379 (Classic Dad Hat) are EMBROIDERED — require DST/PES files not PNG.
// Use DTG-compatible alternatives instead:
//   bp 175 = Snapback Trucker Hat (DTG front panel, no embroidery needed)
//   bp 458 = All-Over Print Beanie (cut-sew, stitch_color option, supports PNG)
const newHatProducts = [
  {
    name: "Healing Beanie", slug: "healing-beanie", blueprintId: 458,
    design: "logo-only-light", category: "Headwear", maxVariants: 3,
    productOptions: [{ name: "stitch_color", value: "white" }],  // cut-sew requirement
    cutSew: true,
  },
  {
    name: "Grounded Trucker Hat", slug: "grounded-trucker-hat", blueprintId: 252,
    design: "logo-only-dark", category: "Headwear", maxVariants: 5,
  },
];

for (const rep of newHatProducts) {
  // Skip only if already has a valid printful_id AND the correct slug
  const existing = summary.products.find(p => p.slug === rep.slug && p.printful_id);
  if (existing) {
    console.log(`-> ${rep.name} already created (id: ${existing.printful_id}), skip`);
    continue;
  }
  console.log(`\n-> Creating ${rep.name}...`);
  try {
    const designFile = await uploadDesign(rep.design);
    await sleep(400);

    const res = await fetch(`${BASE}/products/${rep.blueprintId}`, {
      headers: { Authorization: `Bearer ${KEY}` },
    });
    const json = await res.json();
    const allVariants = json.result?.variants ?? [];
    if (!allVariants.length) throw new Error("No variants");
    const variants = allVariants.slice(0, rep.maxVariants);

    const basePrice = await getCatalogBasePrice(rep.blueprintId);
    const retailPrice = Math.ceil(basePrice / 0.70).toFixed(2);

    const syncVariants = variants.map(v => ({
      variant_id: v.id,
      retail_price: retailPrice,
      files: [{ type: "default", id: designFile.id }],
    }));

    await sleep(600);
    const body = {
      sync_product: { name: rep.name },
      sync_variants: syncVariants,
    };
    // cut-sew products require stitch_color at product level
    if (rep.productOptions) {
      body.sync_product.product_options = rep.productOptions;
    }
    const created = await pfetch("/store/products", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const newId = created.sync_product?.id ?? created.id;
    console.log(`  ✓ Created id: ${newId} | ${syncVariants.length} variants | $${retailPrice}`);

    // Replace old AOP entry or push new
    const existingIdx = summary.products.findIndex(
      p => p.slug === "healing-all-over-print-beanie" || p.slug === "grounded-all-over-print-bucket-hat" || p.slug === rep.slug
    );
    const entry = {
      slug: rep.slug, name: rep.name, printful_id: newId,
      price: parseFloat(retailPrice), category: rep.category,
      design: rep.design, blueprint_id: rep.blueprintId,
      preview_image_url: "", variant_count: syncVariants.length,
    };
    if (existingIdx !== -1) {
      summary.products[existingIdx] = entry;
    } else {
      summary.products.push(entry);
    }
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    updated++;
    await sleep(1000);
  } catch (err) {
    console.log(`  ✗ ${err.message.slice(0, 200)}`);
    await sleep(500);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Fixed ${updated} products`);
