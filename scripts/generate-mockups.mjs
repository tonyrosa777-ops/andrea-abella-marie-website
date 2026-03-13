/**
 * Generates product mockup images using Printful's v2 Mockup Generator API.
 * Saves the first mockup URL for each product into printful-seeded-products.json.
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
const STORE_ID = 17763774;
const BASE = "https://api.printful.com";
// jsDelivr CDN reliably serves GitHub repo files (raw.githubusercontent.com blocked by Printful)
const GITHUB_RAW = "https://cdn.jsdelivr.net/gh/tonyrosa777-ops/andrea-abella-marie-website@master/public/images/designs";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function apiFetch(path, opts = {}) {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "X-PF-Store-Id": String(STORE_ID),
    ...(opts.headers ?? {}),
  };
  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  if (res.status === 429) {
    const w = parseInt(res.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited, waiting ${w}s...`);
    await sleep(w * 1000);
    return apiFetch(path, opts);
  }
  return res;
}

/** Get the first available mockup_style_id and technique for a blueprint */
async function getStyleInfo(blueprintId) {
  const res = await apiFetch(`/v2/catalog-products/${blueprintId}/mockup-styles`);
  if (!res.ok) throw new Error(`styles ${res.status}`);
  const j = await res.json();
  const styles = j.data ?? [];
  if (styles.length === 0) throw new Error("no styles");

  // Prefer front placement
  const front = styles.find(s => s.placement === "front") ?? styles[0];
  const technique = front.technique;
  const placement = front.placement;
  const mockupStyles = front.mockup_styles ?? [];

  // Pick the first mockup style that has a "Front" view
  const preferred = mockupStyles.find(ms =>
    ms.view_name?.toLowerCase().includes("front") ||
    ms.category_name?.toLowerCase().includes("men") ||
    ms.category_name?.toLowerCase().includes("women")
  ) ?? mockupStyles[0];

  if (!preferred) throw new Error("no mockup style");
  return { technique, placement, mockupStyleId: preferred.id };
}

/** Get first catalog variant ID for a blueprint (single variant avoids style incompatibility errors) */
async function getVariantIds(blueprintId) {
  const res = await apiFetch(`/products/${blueprintId}`);
  if (!res.ok) throw new Error(`variants ${res.status}`);
  const j = await res.json();
  const variants = j.result?.variants ?? [];
  // Use just the first variant to avoid "style not available for variant X" errors
  return variants.slice(0, 1).map(v => v.id);
}

/** Create a mockup generation task and return the task id */
async function createMockupTask(blueprintId, variantIds, technique, placement, mockupStyleId, imageUrl) {
  const product = {
    source: "catalog",
    catalog_product_id: blueprintId,
    technique,
    mockup_style_id: mockupStyleId,
    catalog_variant_ids: variantIds,
    placements: [{
      placement,
      technique,
      layers: [{ type: "file", url: imageUrl }],
    }],
  };

  // cut-sew products require stitch_color option
  if (technique === "cut-sew") {
    product.product_options = [{ name: "stitch_color", value: "white" }];
  }

  const body = {
    store_id: STORE_ID,
    products: [product],
  };
  const res = await apiFetch("/v2/mockup-tasks", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(j.error?.message ?? (typeof j.data === "string" ? j.data : "") ?? `task create ${res.status}`);
  // v2 returns data as array: [{ id, status, ... }]
  const taskId = Array.isArray(j.data) ? j.data[0]?.id : (j.data?.id ?? j.id);
  if (!taskId) throw new Error("No task ID in response: " + JSON.stringify(j).slice(0, 200));
  return taskId;
}

/** Poll until task completes and return the first mockup URL */
async function pollTask(taskId, maxWait = 120000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    await sleep(5000);
    // v2 poll uses ?id= query param, not /{id} path
    const res = await apiFetch(`/v2/mockup-tasks?id=${taskId}`);
    const j = await res.json();
    // v2 returns data as array
    const task = Array.isArray(j.data) ? j.data[0] : (j.data ?? j);
    const status = task?.status;
    console.log(`  polling... status: ${status}`);
    if (status === "completed" || status === "done") {
      const url = task?.catalog_variant_mockups?.[0]?.mockups?.[0]?.mockup_url;
      return url ?? null;
    }
    if (status === "failed" || status === "error") {
      throw new Error(`Task failed: ${JSON.stringify(task?.failure_reasons ?? task).slice(0, 300)}`);
    }
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

    const [{ technique, placement, mockupStyleId }, variantIds] = await Promise.all([
      getStyleInfo(product.blueprint_id),
      getVariantIds(product.blueprint_id),
    ]);
    console.log(`   technique: ${technique}, placement: ${placement}, style: ${mockupStyleId}`);
    console.log(`   variants: [${variantIds.join(", ")}]`);
    await sleep(500);

    const taskId = await createMockupTask(
      product.blueprint_id, variantIds, technique, placement, mockupStyleId, imageUrl
    );
    console.log(`   task_id: ${taskId}`);

    const mockupUrl = await pollTask(taskId);
    if (mockupUrl) {
      product.preview_image_url = mockupUrl;
      console.log(`   ✓ mockup: ${mockupUrl.slice(0, 70)}...`);
      updated++;
      writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    } else {
      // Check full task response for URLs
      console.log(`   ⚠ Task done but no URL found in result`);
    }

    await sleep(1500);
  } catch (err) {
    console.log(`   ✗ ${err.message}`);
    await sleep(1500);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Done. Generated mockups for ${updated}/${summary.products.length} products.`);
