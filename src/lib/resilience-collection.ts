export interface ResilienceProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "The Resilience Collection";
  description: string;
  image: string;
  stock: number; // decrement manually when Andrea reports a sale; 0 = out of stock
}

export const resilienceCollection: ResilienceProduct[] = [
  {
    id: "resilience-necklace",
    slug: "resilience-necklace",
    name: "Resilience Necklace",
    price: 29,
    category: "The Resilience Collection",
    description:
      "A reminder that healing happens one day at a time. This necklace represents resilience, inner strength, and the courage to keep going even when life gets hard. Wear it as a symbol of your journey.",
    image: "/images/products/jewelry-resilience-necklace.jpg",
    stock: 3,
  },
  {
    id: "inner-peace-lotus-earrings",
    slug: "inner-peace-lotus-earrings",
    name: "Inner Peace Lotus Earrings",
    price: 16,
    category: "The Resilience Collection",
    description:
      "These elegant lotus earrings symbolize resilience, growth, and inner peace. The lotus flower rises through the mud to bloom beautifully above the water — reminding us that even life's challenges can lead to transformation and strength. Lightweight and comfortable for everyday wear. A meaningful gift for yourself or someone on a healing journey. Limited first release.",
    image: "/images/products/jewelry-lotus-earrings.jpg",
    stock: 3,
  },
  {
    id: "lotus-awakening-set",
    slug: "lotus-awakening-set",
    name: "Lotus Awakening Set",
    price: 24,
    category: "The Resilience Collection",
    description:
      "This elegant jewelry set features a matching necklace and earrings designed to symbolize inner peace, mindfulness, and personal growth. Inspired by meditation and the lotus flower, the design reflects the journey of rising above life's challenges and finding calm within. Includes matching necklace and earrings. Limited availability — only one set available.",
    image: "/images/products/jewelry-lotus-awakening-set.jpg",
    stock: 1,
  },
];
