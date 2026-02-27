"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const products = [
  { name: "Resilience T-Shirt", price: "$28", category: "Apparel", image: "/images/products/shirt-allover-print-white.png" },
  { name: "Healing Mug", price: "$18", category: "Everyday", image: "/images/products/mug-white-black-handle.png" },
  { name: "Mindful Water Bottle", price: "$30", category: "Wellness", image: "/images/products/water-bottle-light-blue.png" },
  { name: "Spiral Journal", price: "$25", category: "Practice", image: "/images/products/notebook-spiral-white.png" },
  { name: "Stainless Steel Tumbler", price: "$30", category: "Wellness", image: "/images/products/tumbler-tall-straw-white.png" },
  { name: "Crossbody Bag", price: "$30", category: "On-The-Go", image: "/images/products/bag-crossbody-black.png" },
];

export default function ShopPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-cream grain-texture">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="section-label mb-4">Carry Your Calm</p>
          <h2
            className="text-3xl md:text-4xl text-navy mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Shop the <span className="text-gold italic">Collection</span>
          </h2>
          <p className="text-charcoal/60 text-sm max-w-md mx-auto" style={{ fontFamily: "var(--font-ui)" }}>
            Small-batch, intentional pieces — not mass-produced merch.
          </p>
        </AnimatedSection>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
          {products.map((product, i) => (
            <AnimatedSection
              key={product.name}
              delay={i * 0.1}
              className="snap-start shrink-0 w-[260px] md:w-auto"
            >
              <div className="card-hover bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gold/20 h-full">
                {/* Product image */}
                <div className="aspect-square relative overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-navy text-sm mb-1"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-gold"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-10">
          <a
            href="/shop"
            className="btn-gold inline-block"
          >
            Shop the Collection
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
