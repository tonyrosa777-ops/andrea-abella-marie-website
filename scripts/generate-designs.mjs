import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LOGOS = join(ROOT, "public", "images", "logos");
const OUT = join(ROOT, "public", "images", "designs");

mkdirSync(OUT, { recursive: true });

const W = 2400;
const H = 2400;
const LOGO_W = 900;

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
  const fontSize = isTagline ? 80 : 90;
  const lineHeight = isTagline ? 100 : 115;
  const lines = wrapText(quote, 38);
  const startY = textStartY;

  const textEls = lines
    .map(
      (line, i) => `
    <text
      x="${width / 2}"
      y="${startY + i * lineHeight}"
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
}) {
  const logoPath = join(LOGOS, logoFile);
  const outputPath = join(OUT, outputName);

  console.log(`  Generating ${outputName}...`);

  // Trim transparent pixels first, then resize to 900px wide
  // This ensures text is positioned against the actual visual content, not transparent padding
  const logoResized = await sharp(logoPath)
    .trim()
    .resize(LOGO_W, null, { fit: "inside" })
    .toBuffer();

  // Get actual (trimmed) logo dimensions
  const logoMeta = await sharp(logoResized).metadata();
  const logoH = logoMeta.height ?? 400;
  const logoLeft = Math.round((W - LOGO_W) / 2);
  const logoTop = Math.round(H * 0.08);

  // Place text snugly under the logo — 85px gap below logo bottom
  const textStartY = logoTop + logoH + 85;
  const svgOverlay = buildSvgOverlay({ quote, textColor, isTagline, width: W, height: H, textStartY });

  // Parse bgColor — handle both hex and rgba
  let background;
  if (bgColor.startsWith("#")) {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    background = { r, g, b, alpha: 1 };
  } else {
    background = bgColor;
  }

  await sharp({
    create: { width: W, height: H, channels: 4, background },
  })
    .composite([
      { input: logoResized, left: logoLeft, top: logoTop },
      { input: svgOverlay, left: 0, top: 0 },
    ])
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  console.log(`  ✓ ${outputName}`);
}

const DARK_BG = "#1B2A4A";
const LIGHT_BG = "#FFFFFF";
const GOLD = "#C8A84E";
const NAVY = "#1B2A4A";

const designs = [
  // --- DARK DESIGNS ---
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-tagline.png",
    quote: "Resilience. Healing. One Day At a Time.",
    isTagline: true,
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-1.png",
    quote: "You survived. Now you rebuild.",
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-2.png",
    quote: "Healing isn't linear. Neither are you.",
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-3.png",
    quote: "Still standing. Still healing.",
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-4.png",
    quote: "The bravest thing you did was stay.",
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-5.png",
    quote: "Grounded. Whole. Becoming.",
  },
  {
    bgColor: DARK_BG,
    logoFile: "logo-light-white-figure.png",
    textColor: GOLD,
    outputName: "dark-quote-6.png",
    quote: "Soft enough to feel. Strong enough to heal.",
  },
  // --- LIGHT DESIGNS ---
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-tagline.png",
    quote: "Resilience. Healing. One Day At a Time.",
    isTagline: true,
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-1.png",
    quote: "Peace is your birthright.",
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-2.png",
    quote: "One breath at a time.",
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-3.png",
    quote: "Carry your calm.",
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-4.png",
    quote: "Your story isn't over.",
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-5.png",
    quote: "Trauma ends. Healing begins.",
  },
  {
    bgColor: LIGHT_BG,
    logoFile: "logo-dark-blue-figure.png",
    textColor: NAVY,
    outputName: "light-quote-6.png",
    quote: "Your nervous system remembers. So does your strength.",
  },
];

console.log(`\nGenerating ${designs.length} design files...\n`);

for (const design of designs) {
  await createDesign(design);
}

console.log(`\n✅ All ${designs.length} designs generated → public/images/designs/\n`);
