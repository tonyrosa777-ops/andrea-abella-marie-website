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
const BASE = "https://api.printful.com";

async function pfetch(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  const json = await res.json();
  return json.result ?? json;
}

// Fetch all catalog products
const all = [];
let offset = 0;
while (true) {
  const page = await pfetch(`/products?limit=100&offset=${offset}`);
  if (!page || page.length === 0) break;
  all.push(...page);
  if (page.length < 100) break;
  offset += 100;
}

console.log(`\nTotal catalog products: ${all.length}\n`);
console.log("ID  | Title");
console.log("----+-" + "-".repeat(60));
all.forEach((p) => {
  console.log(`${String(p.id).padStart(4)} | ${p.title || p.type_name}`);
});

// Also try v2 endpoint to see if more products available
console.log("\n\nChecking /v2/catalog-products...");
try {
  const res2 = await fetch(`${BASE}/v2/catalog-products?limit=5`, {
    headers: { Authorization: `Bearer ${API_KEY}`, "X-PF-Store-Id": "17763774" },
  });
  const j2 = await res2.json();
  console.log("v2 response:", JSON.stringify(j2).slice(0, 500));
} catch (e) {
  console.log("v2 error:", e.message);
}
