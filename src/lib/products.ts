export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
}

export interface Bundle {
  slug: string;
  name: string;
  price: number;
  contents: string;
  description: string;
}

export const products: Product[] = [
  { slug: "t-shirt", name: "T-Shirt", price: 28, category: "Everyday Inspiration", description: "Soft, comfortable tee featuring the Andrea Abella Marie logo. Wear your healing journey with pride.", image: "/images/products/shirt-allover-print-white.png" },
  { slug: "mug", name: "Mug", price: 18, category: "Home & Practice", description: "Start your morning ritual with intention. Ceramic mug with the lotus meditation logo.", image: "/images/products/mug-white-black-handle.png" },
  { slug: "water-bottle", name: "Water Bottle", price: 30, category: "Wellness On-The-Go", description: "Stay hydrated and grounded throughout your day with this durable water bottle.", image: "/images/products/water-bottle-light-blue.png" },
  { slug: "keychain", name: "Keychain", price: 12, category: "Everyday Inspiration", description: "A small daily reminder of your resilience — carry it everywhere you go.", image: "/images/products/keychain-acrylic-logo.png" },
  { slug: "pen", name: "Pen", price: 10, category: "Home & Practice", description: "Journal your healing journey with this elegant branded pen.", image: "/images/products/pen-white-branded.png" },
  { slug: "shot-glass", name: "Shot Glass", price: 8, category: "Home & Practice", description: "A small but meaningful piece for your collection.", image: "/images/products/shot-glass-and-earrings-bundle.png" },
  { slug: "logo-earrings", name: "Logo Earrings", price: 15, category: "Everyday Inspiration", description: "Elegant earrings featuring the lotus design. Subtle, beautiful, and meaningful.", image: "/images/products/earrings-logo-dangle.png" },
  { slug: "bucket-hat", name: "Bucket Hat", price: 22, category: "Everyday Inspiration", description: "Stylish bucket hat with embroidered logo — wear your calm.", image: "/images/products/hat-bucket-white-with-earrings.png" },
  { slug: "glass-tumbler", name: "Glass Tumbler", price: 25, category: "Wellness On-The-Go", description: "Elegant glass tumbler for your favorite beverages. Beautiful and functional.", image: "/images/products/tumbler-white-short.png" },
  { slug: "stainless-steel-tumbler", name: "Stainless Steel Tumbler", price: 30, category: "Wellness On-The-Go", description: "Keep your drinks at the perfect temperature with this premium stainless steel tumbler.", image: "/images/products/tumbler-tall-straw-white.png" },
  { slug: "crossbody-bag", name: "Crossbody Bag", price: 30, category: "Carry Your Calm", description: "Hands-free and heart-full. A practical bag for your daily essentials.", image: "/images/products/bag-crossbody-black.png" },
  { slug: "meditation-bag", name: "Round Crossbody / Meditation Bag", price: 32, category: "Carry Your Calm", description: "A unique round crossbody bag perfect for carrying meditation essentials.", image: "/images/products/bag-round-circle-white.png" },
  { slug: "spiral-notebook", name: "Spiral Notebook / Journal", price: 25, category: "Home & Practice", description: "Document your healing journey, reflections, and breakthroughs in this beautiful journal.", image: "/images/products/notebook-spiral-white.png" },
  { slug: "compact-umbrella", name: "Compact Umbrella", price: 35, category: "Everyday Inspiration", description: "Stay covered — rain or shine. Compact and branded with the lotus design.", image: "/images/products/umbrella-silver-branded.png" },
];

export const bundles: Bundle[] = [
  { slug: "supporter-care-bundle", name: "Supporter Care Bundle", price: 55, contents: "T-Shirt + Mug or Water Bottle + Keychain + Pen", description: "Everything you need to show your support and start your grounding practice." },
  { slug: "veterans-edition", name: "Veterans Edition", price: 65, contents: "Special Edition T-Shirt + Mug or Water Bottle + Keychain or Pen + Handwritten Thank-You Note", description: "A special edition bundle honoring those who have served. Includes a personal handwritten note from Andrea." },
  { slug: "daily-resilience-bundle", name: "Daily Resilience Bundle", price: 40, contents: "Tumbler + Earrings", description: "Sip and shine — daily reminders of your inner strength." },
  { slug: "mindful-essentials-bundle", name: "Mindful Essentials Bundle", price: 45, contents: "Journal + Water Bottle", description: "The essentials for daily reflection and hydration." },
  { slug: "founders-supporter-bundle", name: "Founders Supporter Bundle", price: 65, contents: "Bag + Tumbler + Earrings", description: "The ultimate supporter pack — carry, sip, and shine with purpose." },
];

export const categories = [
  "All",
  "Everyday Inspiration",
  "Wellness On-The-Go",
  "Carry Your Calm",
  "Home & Practice",
  "Bundles",
];
