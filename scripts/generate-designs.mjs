import sharp from "sharp";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LOGOS = join(ROOT, "public", "images", "logos");
const OUT = join(ROOT, "public", "images", "designs");

mkdirSync(OUT, { recursive: true });

// 4000×4000px → ~167 DPI on largest print templates (Printful requires 150 DPI min)
const W = 4000;
const H = 4000;
const LOGO_W = 1500;

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (test.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function buildSvgOverlay({ quote, textColor, isTagline, width, height, textStartY }) {
  const fontSize = isTagline ? 133 : 150;
  const lineHeight = isTagline ? 167 : 192;
  const lines = wrapText(quote, 38);

  const textEls = lines
    .map(
      (line, i) => `
    <text
      x="${width / 2}"
      y="${textStartY + i * lineHeight}"
      font-family="Georgia, 'Times New Roman', serif"
      font-size="${fontSize}"
      font-style="italic"
      fill="${textColor}"
      text-anchor="middle"
      dominant-baseline="middle"
    >${line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</text>`
    )
    .join("\n");

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    ${textEls}
  </svg>`);
}

async function createDesign({
  bgColor,
  logoFile,
  quote,
  textColor,
  outputName,
  isTagline = false,
  transparent = false,
}) {
  const logoPath = join(LOGOS, logoFile);
  const outputPath = join(OUT, outputName);

  console.log(`  Generating ${outputName}...`);

  // Trim transparent pixels first so text positions against actual visual content
  const logoResized = await sharp(logoPath)
    .trim()
    .resize(LOGO_W, null, { fit: "inside" })
    .toBuffer();

  const logoMeta = await sharp(logoResized).metadata();
  const logoH = logoMeta.height ?? 667;
  const logoLeft = Math.round((W - LOGO_W) / 2);
  const logoTop = Math.round(H * 0.08);

  // 142px gap (proportional to 85px at 2400px canvas)
  const textStartY = logoTop + logoH + 142;
  const svgOverlay = buildSvgOverlay({ quote, textColor, isTagline, width: W, height: H, textStartY });

  if (transparent) {
    // Logo-only: transparent background — for hat/beanie front panels
    const layers = [{ input: logoResized, left: logoLeft, top: logoTop }];
    if (quote) layers.push({ input: svgOverlay, left: 0, top: 0 });
    await sharp({
      create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite(layers)
      .png({ compressionLevel: 8 })
      .toFile(outputPath);
  } else {
    // Full-bleed: colored background fills entire print area
    const hex = bgColor.replace("#", "");
    const background = {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
      alpha: 1,
    };
    await sharp({
      create: { width: W, height: H, channels: 4, background },
    })
      .composite([
        { input: logoResized, left: logoLeft, top: logoTop },
        { input: svgOverlay, left: 0, top: 0 },
      ])
      .png({ compressionLevel: 8 })
      .toFile(outputPath);
  }

  console.log(`  ✓ ${outputName}`);
}

const DARK_BG = "#1B2A4A";
const LIGHT_BG = "#FFFFFF";
const GOLD = "#C8A84E";
const NAVY = "#1B2A4A";

const designs = [
  // --- LOGO-ONLY (transparent bg, no text — hats, beanies, anything with a front panel badge) ---
  { logoFile: "logo-dark-blue-figure.png",   outputName: "logo-only-dark.png",  quote: "", transparent: true },
  { logoFile: "logo-light-white-figure.png", outputName: "logo-only-light.png", quote: "", transparent: true },

  // --- APPAREL (transparent bg + tagline — T-shirts, hoodies, sweatshirts, long sleeves) ---
  { logoFile: "logo-dark-blue-figure.png",   textColor: NAVY, outputName: "apparel-dark.png",  quote: "Resilience. Healing. One Day At a Time.", isTagline: true, transparent: true },
  { logoFile: "logo-light-white-figure.png", textColor: GOLD, outputName: "apparel-light.png", quote: "Resilience. Healing. One Day At a Time.", isTagline: true, transparent: true },
];

console.log(`\nGenerating ${designs.length} design files...\n`);

for (const design of designs) {
  await createDesign(design);
}

console.log(`\n✅ All ${designs.length} designs generated → public/images/designs/\n`);
