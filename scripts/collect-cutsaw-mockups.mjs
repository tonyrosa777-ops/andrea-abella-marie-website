import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const KEY = "aIpAjdY9E9lR8YWNR7UNqUYjhu37r1inNMdX4HOk";
const STORE_ID = "17763774";
const CDN = "https://cdn.jsdelivr.net/gh/tonyrosa777-ops/andrea-abella-marie-website@master/public/images/designs";

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function post(body) {
  const r = await fetch("https://api.printful.com/v2/mockup-tasks", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "X-PF-Store-Id": STORE_ID },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (r.status === 429) {
    const w = parseInt(r.headers.get("retry-after") ?? "60") + 2;
    console.log(`  Rate limited, waiting ${w}s...`);
    await sleep(w * 1000);
    return post(body);
  }
  if (!r.ok) throw new Error(typeof j.data === "string" ? j.data : JSON.stringify(j).slice(0, 200));
  return j.data[0].id;
}

async function poll(taskId) {
  for (let i = 0; i < 30; i++) {
    await sleep(5000);
    const r = await fetch(`https://api.printful.com/v2/mockup-tasks?id=${taskId}`, {
      headers: { Authorization: `Bearer ${KEY}`, "X-PF-Store-Id": STORE_ID },
    });
    const j = await r.json();
    const task = j.data?.[0];
    if (task?.status === "completed") return task.catalog_variant_mockups?.[0]?.mockups?.[0]?.mockup_url ?? null;
    if (task?.status === "failed") throw new Error(JSON.stringify(task.failure_reasons));
    process.stdout.write(".");
  }
  throw new Error("timeout");
}

// These 5 products still need cut-sew mockups (stitch_color required)
const products = [
  { slug: "still-standing-drawstring-bag",       blueprintId: 262, variantId: 8894,  mockupStyleId: 15796, design: "dark-tagline",  placement: "default",      technique: "cut-sew" },
  { slug: "peace-throw-pillow",                   blueprintId: 83,  variantId: 4532,  mockupStyleId: 12675, design: "light-tagline", placement: "front",        technique: "cut-sew" },
  { slug: "healing-all-over-print-beanie",        blueprintId: 458, variantId: 11950, mockupStyleId: 6322,  design: "dark-tagline",  placement: "default",      technique: "cut-sew" },
  { slug: "grounded-all-over-print-bucket-hat",   blueprintId: 654, variantId: 16361, mockupStyleId: 4863,  design: "light-tagline", placement: "outside_front", technique: "cut-sew" },
];

const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));
const bySlug = {};
summary.products.forEach(p => { bySlug[p.slug] = p; });

let updated = 0;
for (const p of products) {
  if (bySlug[p.slug]?.preview_image_url?.length > 10) {
    console.log("skip", p.slug);
    continue;
  }
  console.log(`\n-> ${p.slug}`);
  try {
    const body = {
      store_id: 17763774,
      products: [{
        source: "catalog",
        catalog_product_id: p.blueprintId,
        technique: p.technique,
        mockup_style_id: p.mockupStyleId,
        catalog_variant_ids: [p.variantId],
        product_options: [{ name: "stitch_color", value: "white" }],
        placements: [{
          placement: p.placement,
          technique: p.technique,
          layers: [{ type: "file", url: `${CDN}/${p.design}.png` }],
        }],
      }],
    };
    const taskId = await post(body);
    console.log(`  task: ${taskId}`);
    const url = await poll(taskId);
    if (url) {
      bySlug[p.slug].preview_image_url = url;
      console.log(`\n  ✓ ${url.slice(0, 70)}...`);
      updated++;
      writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    } else {
      console.log("\n  ⚠ task done but no URL");
    }
    await sleep(2000);
  } catch (e) {
    console.log(`\n  ✗ ${e.message.slice(0, 200)}`);
    await sleep(2000);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Updated ${updated}/${products.length} cut-sew products`);
