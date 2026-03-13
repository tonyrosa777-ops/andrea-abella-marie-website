/**
 * Printful Product Seeding Script
 *
 * Uses hardcoded blueprint IDs discovered from /v2/catalog-products inspection.
 * Creates sync products via POST /sync/products (v1 API, store header required).
 *
 * Run: node scripts/seed-printful.mjs
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
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
if (!API_KEY) throw new Error("PRINTFUL_API_KEY not set");

const BASE = "https://api.printful.com";
const STORE_ID = "17763774";
// jsDelivr CDN — raw.githubusercontent.com is BLOCKED by Printful (returns 0 bytes)
const GITHUB_RAW = "https://cdn.jsdelivr.net/gh/tonyrosa777-ops/andrea-abella-marie-website@master/public/images/designs";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function pfetch(path, options = {}) {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "X-PF-Store-Id": STORE_ID,
    ...(options.headers ?? {}),
  };
  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  const json = await res.json().catch(() => ({}));

  if (res.status === 429) {
    const retryAfter = parseInt(res.headers.get("retry-after") ?? "60", 10);
    console.log(`    ⏳ Rate limited — waiting ${retryAfter}s...`);
    await sleep(retryAfter * 1000 + 1000);
    return pfetch(path, options); // retry once
  }

  if (!res.ok) {
    const msg = json.error?.message || json.result || JSON.stringify(json);
    throw new Error(`Printful ${res.status} ${path}: ${msg}`);
  }
  return json.result ?? json;
}

// ─── Upload design from local file (base64) ────────────────────────────────
const uploadCache = {};

async function uploadDesign(designName) {
  if (uploadCache[designName]) return uploadCache[designName];

  // Use publicly accessible GitHub raw URL — Printful requires an external HTTP URL
  const url = `${GITHUB_RAW}/${designName}.png`;
  console.log(`    Uploading ${designName}.png via GitHub raw URL...`);

  const result = await pfetch("/files", {
    method: "POST",
    body: JSON.stringify({
      type: "default",
      filename: `${designName}.png`,
      url,
    }),
  });

  console.log(`    ✓ Uploaded file id: ${result.id}`);
  uploadCache[designName] = result;
  await sleep(600);
  return result;
}

// ─── Get variants for a blueprint ─────────────────────────────────────────
async function getVariants(blueprintId) {
  const res = await fetch(`${BASE}/products/${blueprintId}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  const json = await res.json();
  // v1 response wraps in result: { product: {...}, variants: [...] }
  return json.result?.variants ?? json.variants ?? [];
}

// ─── Blueprint catalog (IDs from /v2/catalog-products inspection) ──────────
// Format: { blueprintId, name, design, category, darkBg, maxVariants }
const PRODUCTS = [
  // APPAREL
  { blueprintId: 71,  name: "Resilience Tee",              design: "light-tagline",  category: "Apparel",           maxVariants: 15 },
  { blueprintId: 71,  name: "Becoming Tee",                design: "light-quote-3",  category: "Apparel",           maxVariants: 15 },
  { blueprintId: 146, name: "Resilience Hoodie",           design: "dark-tagline",   category: "Apparel",           maxVariants: 15 },
  { blueprintId: 146, name: "Grounded Hoodie",             design: "dark-quote-5",   category: "Apparel",           maxVariants: 15 },
  { blueprintId: 145, name: "Healing Sweatshirt",          design: "dark-tagline",   category: "Apparel",           maxVariants: 15 },
  { blueprintId: 356, name: "Still Standing Long Sleeve",  design: "light-tagline",  category: "Apparel",           maxVariants: 15 },
  // DRINKWARE
  { blueprintId: 19,  name: "Healing Mug 11oz",            design: "light-tagline",  category: "Drinkware",         maxVariants: 5  },
  { blueprintId: 19,  name: "Peace Mug 11oz",              design: "light-quote-1",  category: "Drinkware",         maxVariants: 5  },
  { blueprintId: 300, name: "Resilience Black Mug",        design: "dark-tagline",   category: "Drinkware",         maxVariants: 5  },
  { blueprintId: 585, name: "One Day At a Time Tumbler",   design: "dark-tagline",   category: "Drinkware",         maxVariants: 5  },
  { blueprintId: 742, name: "Carry Your Calm Tumbler",     design: "dark-quote-3",   category: "Drinkware",         maxVariants: 5  },
  { blueprintId: 382, name: "Grounded Water Bottle",       design: "dark-tagline",   category: "Drinkware",         maxVariants: 5  },
  // BAGS
  { blueprintId: 367, name: "Carry Your Calm Tote",        design: "light-tagline",  category: "Bags",              maxVariants: 5  },
  { blueprintId: 262, name: "Still Standing Drawstring Bag",design:"dark-tagline",   category: "Bags",              maxVariants: 5  },
  // HEADWEAR — embroidered items require thread_colors option
  { blueprintId: 252, name: "Resilience Trucker Hat",      design: "light-tagline",  category: "Headwear",          maxVariants: 5, threadColors: ["#005397", "#A67843", "#FFFFFF"] },
  { blueprintId: 81,  name: "Healing Beanie",              design: "dark-tagline",   category: "Headwear",          maxVariants: 5, threadColors: ["#FFFFFF", "#A67843"] },
  { blueprintId: 379, name: "Grounded Bucket Hat",         design: "light-tagline",  category: "Headwear",          maxVariants: 5, threadColors: ["#005397", "#A67843", "#FFFFFF"] },
  // HOME & STATIONERY
  { blueprintId: 395, name: "Resilience Throw Blanket",    design: "dark-tagline",   category: "Home & Stationery", maxVariants: 5  },
  { blueprintId: 474, name: "Healing Journey Journal",     design: "light-tagline",  category: "Home & Stationery", maxVariants: 5  },
  { blueprintId: 1,   name: "Becoming Poster",             design: "dark-tagline",   category: "Home & Stationery", maxVariants: 5  },
  { blueprintId: 83,  name: "Peace Throw Pillow",          design: "light-tagline",  category: "Home & Stationery", maxVariants: 5  },
  // ACCESSORIES
  { blueprintId: 601, name: "Resilience iPhone Case",      design: "dark-tagline",   category: "Accessories",       maxVariants: 8  },
  { blueprintId: 267, name: "Healing Samsung Case",        design: "dark-tagline",   category: "Accessories",       maxVariants: 8  },
];

// ─── Seed products ─────────────────────────────────────────────────────────
console.log(`\n🛍️  Seeding ${PRODUCTS.length} products into Printful store "${STORE_ID}"...\n`);

const seeded = [];
const errors = [];

for (const def of PRODUCTS) {
  console.log(`→ ${def.name} (blueprint: ${def.blueprintId})`);

  try {
    // Get variants
    await sleep(400);
    const allVariants = await getVariants(def.blueprintId);
    if (!allVariants.length) {
      throw new Error("No variants returned");
    }

    // Select a subset of variants
    const selectedVariants = allVariants.slice(0, def.maxVariants);

    // Upload design
    const designFile = await uploadDesign(def.design);

    // Compute retail price: 30% profit margin = base / 0.70
    const baseCostStr = selectedVariants[0].price ?? "15.00";
    const basePrice = parseFloat(baseCostStr) || 15;
    const retailPrice = Math.ceil(basePrice / 0.70).toFixed(2);

    // Build sync_variants array
    const syncVariants = selectedVariants.map(v => {
      const variant = {
        variant_id: v.id,
        retail_price: retailPrice,
        files: [{ type: "default", id: designFile.id }],
      };
      // Embroidered items (headwear) require thread_colors option
      if (def.threadColors) {
        variant.options = [{ id: "thread_colors", value: def.threadColors }];
      }
      return variant;
    });

    // Create sync product
    await sleep(600);
    const syncProduct = { name: def.name };
    const thumbUrl = designFile.preview_url || designFile.thumbnail_url;
    if (thumbUrl) syncProduct.thumbnail = thumbUrl;

    const created = await pfetch("/store/products", {
      method: "POST",
      body: JSON.stringify({ sync_product: syncProduct, sync_variants: syncVariants }),
    });

    const productId = created.sync_product?.id ?? created.id;
    const thumbnail = created.sync_product?.thumbnail_url ?? thumbUrl ?? "";

    console.log(`  ✓ Created id:${productId} | ${syncVariants.length} variants | $${retailPrice} retail`);

    seeded.push({
      slug: def.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: def.name,
      printful_id: productId,
      price: parseFloat(retailPrice),
      category: def.category,
      design: def.design,
      blueprint_id: def.blueprintId,
      preview_image_url: thumbnail,
      variant_count: syncVariants.length,
    });

    await sleep(1000);
  } catch (err) {
    console.log(`  ✗ ${err.message}`);
    errors.push({ name: def.name, reason: err.message });
    await sleep(500);
  }
}

// Save summary
const outPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
writeFileSync(outPath, JSON.stringify({ storeId: Number(STORE_ID), products: seeded }, null, 2));

console.log(`\n✅ ${seeded.length}/${PRODUCTS.length} products created`);
console.log(`   Summary → src/lib/printful-seeded-products.json`);

if (errors.length) {
  console.log(`\n⚠️  ${errors.length} failed:`);
  errors.forEach(e => console.log(`   - ${e.name}: ${e.reason}`));
}

console.log("\n🎉 Done!\n");
