/**
 * Fixes white halo/fringe on logo-dark-blue-figure.png
 *
 * Two operations:
 * 1. "Remove white matte" — reconstructs true pixel colors for semi-transparent
 *    edge pixels that were blended against a white background during removal.
 * 2. Alpha threshold cleanup — eliminates near-zero alpha noise pixels.
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { copyFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGOS = join(__dirname, "..", "public", "images", "logos");
const INPUT = join(LOGOS, "logo-dark-blue-figure.png");
const BACKUP = join(LOGOS, "logo-dark-blue-figure.backup.png");
const OUTPUT = join(LOGOS, "logo-dark-blue-figure.png");

// Back up original first
copyFileSync(INPUT, BACKUP);
console.log("✓ Backed up original to logo-dark-blue-figure.backup.png");

// Read raw pixel data (RGBA)
const { data, info } = await sharp(INPUT)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
console.log(`Processing ${width}×${height} image (${channels} channels)...`);

const buf = Buffer.from(data);

let fixed = 0;
let removed = 0;

for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];
  const a = buf[i + 3];

  if (a === 0) continue; // Already fully transparent
  if (a === 255) continue; // Already fully opaque — no fringe

  const alpha = a / 255;

  // Step 1: Remove white matte contribution from semi-transparent pixels
  // Formula: true_color = (pixel_color - (1-alpha)*white) / alpha
  const newR = Math.min(255, Math.max(0, Math.round((r - (1 - alpha) * 255) / alpha)));
  const newG = Math.min(255, Math.max(0, Math.round((g - (1 - alpha) * 255) / alpha)));
  const newB = Math.min(255, Math.max(0, Math.round((b - (1 - alpha) * 255) / alpha)));

  buf[i] = newR;
  buf[i + 1] = newG;
  buf[i + 2] = newB;

  // Step 2: Hard-threshold very low-alpha noise pixels (ghost pixels)
  // Pixels with alpha < 20 are invisible garbage — drop them entirely
  if (a < 20) {
    buf[i + 3] = 0;
    removed++;
  } else {
    fixed++;
  }
}

console.log(`  White matte removed on ${fixed} edge pixels`);
console.log(`  Removed ${removed} ghost/noise pixels (alpha < 20)`);

// Write corrected image
await sharp(buf, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`\n✅ Fixed logo saved → logo-dark-blue-figure.png`);
console.log(`   Original backup → logo-dark-blue-figure.backup.png`);
console.log(`\n   Preview tip: open public/images/logos/logo-dark-blue-figure.png`);
console.log(`   and compare against the .backup.png version on a white background.`);
