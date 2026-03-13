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

const API_KEY = process.env.PRINTFUL_API_KEY;
const STORE_ID = "17763774";
const BASE = "https://api.printful.com";

async function pfetch(path, useStoreHeader = false) {
  const headers = { Authorization: `Bearer ${API_KEY}` };
  if (useStoreHeader) headers["X-PF-Store-Id"] = STORE_ID;
  const res = await fetch(`${BASE}${path}`, { headers });
  return res.json();
}

// Fetch first 200 v2 catalog products to find the ones we need
console.log("\n=== Searching v2 catalog for key product types ===\n");

const searchTerms = [
  "t-shirt", "mug", "tumbler", "hoodie", "tote", "notebook",
  "poster", "pillow", "blanket", "hat", "beanie", "bottle",
  "journal", "bag", "case", "sweatshirt", "long sleeve"
];

const allV2 = [];
let offset = 0;
while (true) {
  const res = await pfetch(`/v2/catalog-products?limit=100&offset=${offset}`);
  const items = res.data ?? [];
  if (items.length === 0) break;
  allV2.push(...items);
  if (items.length < 100 || allV2.length >= 500) break;
  offset += 100;
  await new Promise(r => setTimeout(r, 200));
}

console.log(`Total v2 catalog products fetched: ${allV2.length}\n`);

// Show matches for each search term
for (const term of searchTerms) {
  const matches = allV2.filter(p =>
    (p.name || "").toLowerCase().includes(term) ||
    (p.type || "").toLowerCase().includes(term)
  );
  if (matches.length > 0) {
    console.log(`\n--- "${term}" (${matches.length} matches) ---`);
    matches.slice(0, 5).forEach(p => {
      console.log(`  id:${p.id}  ${p.name}`);
    });
    if (matches.length > 5) console.log(`  ... and ${matches.length - 5} more`);
  }
}

// Also check how to get variants for a v2 product
console.log("\n\n=== Testing v2 variant fetch for product id:1 (Poster) ===");
const varRes = await pfetch(`/v2/catalog-variants?catalog_product_id=1&limit=5`);
console.log("Variants response keys:", Object.keys(varRes));
if (varRes.data) {
  console.log("First variant:", JSON.stringify(varRes.data[0]).slice(0, 300));
}

// Test create sync product endpoint format
console.log("\n=== Testing sync product creation endpoint ===");
const syncTestRes = await pfetch(`/v2/sync/products?limit=5`, true);
console.log("v2 sync products:", JSON.stringify(syncTestRes).slice(0, 400));
