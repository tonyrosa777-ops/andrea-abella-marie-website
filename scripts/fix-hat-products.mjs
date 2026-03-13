/**
 * Replaces the two All-Over Print hat/beanie products with regular versions:
 *   - AOP Beanie (bp 458) → Ribbed Knit Beanie (bp 81) with logo-only-light.png
 *   - AOP Bucket Hat (bp 654) → Classic Dad Hat (bp 379) with logo-only-dark.png
 *
 * Run AFTER generate-designs.mjs and after pushing designs to GitHub.
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

async function uploadDesign(designName) {
  const url = `${CDN}/${designName}.png`;
  console.log(`  Uploading ${designName}.png...`);
  const result = await pfetch("/files", {
    method: "POST",
    body: JSON.stringify({ type: "default", filename: `${designName}.png`, url }),
  });
  if (!result.id || result.size === 0) throw new Error(`Upload failed / 0 bytes: ${designName}`);
  console.log(`  ✓ file id: ${result.id} (${result.width}×${result.height})`);
  return result;
}

async function getVariants(blueprintId) {
  const res = await fetch(`${BASE}/products/${blueprintId}`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  const json = await res.json();
  return json.result?.variants ?? [];
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

// IDs of the AOP products to replace
const AOP_BEANIE_ID = 423573915;  // bp 458
const AOP_HAT_ID    = 423573917;  // bp 654

const replacements = [
  {
    oldId: AOP_BEANIE_ID,
    oldSlug: "healing-all-over-print-beanie",
    name: "Healing Beanie",
    slug: "healing-beanie",
    blueprintId: 81,
    design: "logo-only-light",
    category: "Headwear",
    maxVariants: 5,
  },
  {
    oldId: AOP_HAT_ID,
    oldSlug: "grounded-all-over-print-bucket-hat",
    name: "Grounded Dad Hat",
    slug: "grounded-dad-hat",
    blueprintId: 379,
    design: "logo-only-dark",
    category: "Headwear",
    maxVariants: 5,
  },
];

for (const rep of replacements) {
  console.log(`\n-> Replacing: ${rep.oldSlug} → ${rep.slug}`);

  try {
    // 1. Delete old AOP product
    console.log(`  Deleting old product id: ${rep.oldId}...`);
    await pfetch(`/store/products/${rep.oldId}`, { method: "DELETE" });
    console.log(`  ✓ Deleted`);
    await sleep(1000);

    // 2. Upload logo-only design
    const designFile = await uploadDesign(rep.design);
    await sleep(500);

    // 3. Get variants for new blueprint
    const allVariants = await getVariants(rep.blueprintId);
    if (!allVariants.length) throw new Error("No variants found");
    const variants = allVariants.slice(0, rep.maxVariants);

    // Compute price at 30% margin
    const basePrice = parseFloat(variants[0].price ?? "15") || 15;
    const retailPrice = Math.ceil(basePrice / 0.70).toFixed(2);

    // 4. Create new product
    const syncVariants = variants.map(v => ({
      variant_id: v.id,
      retail_price: retailPrice,
      files: [{ type: "default", id: designFile.id }],
    }));

    const created = await pfetch("/store/products", {
      method: "POST",
      body: JSON.stringify({
        sync_product: { name: rep.name },
        sync_variants: syncVariants,
      }),
    });

    const newId = created.sync_product?.id ?? created.id;
    console.log(`  ✓ Created new product id: ${newId} | ${syncVariants.length} variants | $${retailPrice}`);

    // 5. Update seeded JSON — replace old entry
    const idx = summary.products.findIndex(p => p.slug === rep.oldSlug);
    if (idx !== -1) {
      summary.products[idx] = {
        slug: rep.slug,
        name: rep.name,
        printful_id: newId,
        price: parseFloat(retailPrice),
        category: rep.category,
        design: rep.design,
        blueprint_id: rep.blueprintId,
        preview_image_url: "",
        variant_count: syncVariants.length,
      };
    }
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    await sleep(1500);
  } catch (err) {
    console.log(`  ✗ ${err.message}`);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log("\n✅ Hat/beanie replacement complete");
