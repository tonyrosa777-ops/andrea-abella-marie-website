/**
 * Generates product mockup images using Printful's Mockup Generator API.
 * Saves the first mockup URL for each product into printful-seeded-products.json.
 *
 * Printful mockup flow:
 *   1. GET /mockup-generator/styles/{blueprintId} → find placements & variant IDs
 *   2. POST /mockup-generator/create-task/{blueprintId} → start async task
 *   3. GET /mockup-generator/task?task_key={key} → poll until "completed"
 *   4. Read result.mockups[0].mockup_url
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

const API_KEY = process.env.PRINTFUL_API_KEY;
const STORE_ID = "17763774";
const BASE = "https://api.printful.com";
const GITHUB_RAW = "https://raw.githubusercontent.com/tonyrosa777-ops/andrea-abella-marie-website/master/public/images/designs";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function pfetch(path, opts = {}) {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "X-PF-Store-Id": STORE_ID,
  };
  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  const json = await res.json().catch(() => ({}));
  if (res.status === 429) {
    const w = parseInt(res.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited, waiting ${w}s...`);
    await sleep(w * 1000);
    return pfetch(path, opts);
  }
  if (!res.ok) throw new Error(json.error?.message || JSON.stringify(json).slice(0, 200));
  return json.result ?? json;
}

async function getVariantIds(blueprintId) {
  const data = await pfetch(`/products/${blueprintId}`);
  const variants = data.variants ?? [];
  // Return first 3 variant IDs (enough for mockup generation)
  return variants.slice(0, 3).map(v => v.id);
}

async function getFirstPlacement(blueprintId) {
  const data = await pfetch(`/mockup-generator/styles/${blueprintId}`);
  const styles = Array.isArray(data) ? data : (data.styles ?? []);
  // Prefer "front" placement, else take first available
  const front = styles.find(s => s.placement === "front" || (s.placements ?? []).includes("front"));
  const chosen = front ?? styles[0];
  if (!chosen) return "front";
  return chosen.placement ?? chosen.placements?.[0] ?? "front";
}

async function createMockupTask(blueprintId, variantIds, placement, imageUrl) {
  const body = {
    variant_ids: variantIds,
    format: "jpg",
    files: [{ placement, image_url: imageUrl }],
  };
  const data = await pfetch(`/mockup-generator/create-task/${blueprintId}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.task_key;
}

async function pollTask(taskKey, maxWait = 60000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    await sleep(3000);
    const data = await pfetch(`/mockup-generator/task?task_key=${taskKey}`);
    const status = data.status;
    if (status === "completed") {
      const mockups = data.mockups ?? [];
      return mockups[0]?.mockup_url ?? mockups[0]?.extra?.[0]?.url ?? null;
    }
    if (status === "failed") throw new Error(`Mockup task failed: ${data.error ?? "unknown"}`);
    // Still waiting
  }
  throw new Error("Mockup task timed out");
}

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

let updated = 0;

for (const product of summary.products) {
  if (product.preview_image_url && product.preview_image_url.length > 10) {
    console.log(`-> ${product.name} — already has image, skipping`);
    continue;
  }

  console.log(`\n-> ${product.name} (blueprint: ${product.blueprint_id})`);
  try {
    const imageUrl = `${GITHUB_RAW}/${product.design}.png`;
    console.log(`   design: ${product.design}`);

    // Get variant IDs from catalog
    const variantIds = await getVariantIds(product.blueprint_id);
    if (variantIds.length === 0) throw new Error("No variants found");
    console.log(`   variants: [${variantIds.join(", ")}]`);
    await sleep(400);

    // Get placement
    const placement = await getFirstPlacement(product.blueprint_id);
    console.log(`   placement: ${placement}`);
    await sleep(400);

    // Start mockup task
    const taskKey = await createMockupTask(product.blueprint_id, variantIds, placement, imageUrl);
    console.log(`   task_key: ${taskKey}`);

    // Poll for result
    const mockupUrl = await pollTask(taskKey);
    if (mockupUrl) {
      product.preview_image_url = mockupUrl;
      console.log(`   ✓ mockup: ${mockupUrl.slice(0, 70)}...`);
      updated++;
      // Save after each success so we don't lose work on failure
      writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    } else {
      console.log(`   ⚠ Task completed but no mockup URL found`);
    }

    await sleep(1000);
  } catch (err) {
    console.log(`   ✗ ${err.message}`);
    await sleep(1000);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Done. Generated mockups for ${updated}/${summary.products.length} products.`);
