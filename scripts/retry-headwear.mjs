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
  const headers = { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json", "X-PF-Store-Id": STORE_ID };
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

// Upload file and return ID
async function uploadFile(designName) {
  const url = `${GITHUB_RAW}/${designName}.png`;
  console.log(`  Uploading ${designName}.png...`);
  const result = await pfetch("/files", { method: "POST", body: JSON.stringify({ type: "default", filename: `${designName}.png`, url }) });
  console.log(`  ✓ File id: ${result.id}`);
  return result.id;
}

// Load existing seeded products to append
const summaryPath = join(ROOT, "src", "lib", "printful-seeded-products.json");
const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

// Replace embroidered hats with All-Over Print versions (accept standard PNG designs)
// id:458 = All-Over Print Beanie, id:654 = All-Over Print Reversible Bucket Hat
const headwear = [
  { blueprintId: 458, name: "Healing All-Over Print Beanie",      design: "dark-tagline",  category: "Headwear", maxVariants: 5 },
  { blueprintId: 654, name: "Grounded All-Over Print Bucket Hat", design: "light-tagline", category: "Headwear", maxVariants: 5 },
];

const fileCache = {};

for (const def of headwear) {
  console.log(`\n-> ${def.name} (blueprint: ${def.blueprintId})`);
  try {
    if (!fileCache[def.design]) fileCache[def.design] = await uploadFile(def.design);
    const fileId = fileCache[def.design];

    await sleep(500);
    const bpRes = await fetch(`${BASE}/products/${def.blueprintId}`, { headers: { Authorization: `Bearer ${API_KEY}` } });
    const bpJson = await bpRes.json();
    const variants = (bpJson.result?.variants ?? []).slice(0, def.maxVariants);
    const retailPrice = Math.round((parseFloat(variants[0]?.price ?? "15")) * 2.5).toFixed(2);

    const syncVariants = variants.map(v => ({
      variant_id: v.id,
      retail_price: retailPrice,
      files: [{ type: "default", id: fileId }],
    }));

    await sleep(600);
    const created = await pfetch("/store/products", {
      method: "POST",
      body: JSON.stringify({ sync_product: { name: def.name }, sync_variants: syncVariants }),
    });

    const productId = created.sync_product?.id ?? created.id;
    console.log(`  ✓ Created id:${productId} | ${syncVariants.length} variants | $${retailPrice}`);

    summary.products.push({
      slug: def.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: def.name,
      printful_id: productId,
      price: parseFloat(retailPrice),
      category: def.category,
      design: def.design,
      blueprint_id: def.blueprintId,
      preview_image_url: "",
      variant_count: syncVariants.length,
    });

    await sleep(1000);
  } catch (err) {
    console.log(`  ✗ ${err.message}`);
  }
}

writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\n✅ Headwear done. Total products: ${summary.products.length}`);
