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

async function get(path, useStore = false) {
  const headers = { Authorization: `Bearer ${API_KEY}` };
  if (useStore) headers["X-PF-Store-Id"] = STORE_ID;
  const res = await fetch(`${BASE}${path}`, { headers });
  return res.json();
}

// Test different variant endpoints for a few key products
const testProducts = [
  { id: 19, name: "White Glossy Mug" },
  { id: 71, name: "Unisex Staple T-Shirt | Bella + Canvas 3001" },
  { id: 146, name: "Unisex Heavy Blend Hoodie | Gildan 18500" },
  { id: 382, name: "Stainless Steel Water Bottle" },
];

for (const p of testProducts) {
  console.log(`\n=== ${p.name} (id: ${p.id}) ===`);

  // Try v1 variants endpoint
  const v1 = await get(`/products/${p.id}/variants`);
  if (v1.result) {
    const variants = Array.isArray(v1.result) ? v1.result : [];
    console.log(`  v1 /products/${p.id}/variants: ${variants.length} variants`);
    if (variants[0]) {
      console.log(`  First variant:`, JSON.stringify(variants[0]).slice(0, 200));
    }
  } else {
    console.log(`  v1 error:`, JSON.stringify(v1).slice(0, 150));
  }

  // Try v2 variants endpoint
  const v2 = await get(`/v2/catalog-products/${p.id}/catalog-variants?limit=5`);
  if (v2.data) {
    console.log(`  v2 /v2/catalog-products/${p.id}/catalog-variants: ${v2.data.length} variants (sample)`);
    if (v2.data[0]) {
      console.log(`  First variant:`, JSON.stringify(v2.data[0]).slice(0, 200));
    }
  } else {
    console.log(`  v2 error:`, JSON.stringify(v2).slice(0, 150));
  }

  await new Promise(r => setTimeout(r, 300));
}

// Test creating a sync product with v2 blueprint
console.log("\n\n=== Testing sync product creation format (POST /store/products) ===");
console.log("Check if v1 store/products accepts v2 catalog variant IDs...");

// Get mug variants from v2
const mugV2 = await get(`/v2/catalog-products/19/catalog-variants?limit=3`);
if (mugV2.data && mugV2.data.length > 0) {
  console.log("Mug v2 variant sample:", JSON.stringify(mugV2.data[0]));
}
