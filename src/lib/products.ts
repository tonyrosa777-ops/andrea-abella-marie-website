export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
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

export const categories = [
  "All",
  "Everyday Inspiration",
  "Wellness On-The-Go",
  "Carry Your Calm",
  "Home & Practice",
];
