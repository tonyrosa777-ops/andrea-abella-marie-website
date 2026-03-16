"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import seededProducts from "@/lib/printful-seeded-products.json";

interface PreviewProduct {
  name: string;
  price: number;
  category: string;
  image?: string;
}

const FALLBACK: PreviewProduct[] = seededProducts.products.slice(0, 6).map((p) => ({
  name: p.name,
  price: p.price,
  category: p.category,
  image: p.preview_image_url || undefined,
}));

export default function ShopPreview() {
  const [products, setProducts] = useState<PreviewProduct[]>(FALLBACK);

  useEffect(() => {
    // Build lookups from seeded data for price and image fallbacks
    const priceMap: Record<number, number> = {};
    const previewMap: Record<number, string> = {};
    seededProducts.products.forEach((p) => {
      priceMap[p.printful_id] = p.price;
      if (p.preview_image_url) previewMap[p.printful_id] = p.preview_image_url;
    });

    fetch("/api/printful/products")
      .then((r) => r.json())
      .then((data: Array<{ id?: number; printful_id?: number; name?: string; thumbnail_url?: string; preview_image_url?: string; sync_product?: { name: string; thumbnail_url?: string } }>) => {
        if (!Array.isArray(data) || data.length === 0) return;

        const normalized: PreviewProduct[] = data.slice(0, 6).map((p) => {
          const raw = p.sync_product ?? p;
          const name = (raw as { name?: string }).name ?? "Product";
          const lower = name.toLowerCase();
          let category = "Accessories";
          if (/hoodie|\btee\b|tank|long sleeve|jogger|zip hoodie|raglan/.test(lower)) category = "Apparel";
          else if (/mug|tumbler|water bottle|enamel|can cooler/.test(lower)) category = "Drinkware";
          else if (/tote|drawstring|crossbody|duffle|backpack|laptop sleeve/.test(lower)) category = "Bags";
          else if (/pillow|blanket|poster|notebook|canvas|journal|candle|pennant|banner|apron/.test(lower)) category = "Home & Stationery";

          // Handle both live API shape (id + thumbnail_url) and seeded fallback shape (printful_id + preview_image_url)
          const productId: number = p.id ?? p.printful_id ?? 0;
          const pfThumb = (raw as { thumbnail_url?: string }).thumbnail_url || p.preview_image_url;
          const image = (pfThumb && pfThumb.length > 10) ? pfThumb : previewMap[productId];

          return {
            name,
            price: priceMap[productId] ?? 0,
            category,
            image,
          };
        });
        setProducts(normalized);
      })
      .catch(() => {/* keep fallback */});
  }, []);

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

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
          {products.map((product, i) => (
            <AnimatedSection
              key={product.name}
              delay={i * 0.1}
              className="snap-start shrink-0 w-[260px] md:w-auto"
            >
              <div className="card-hover bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gold/20 h-full">
                <div className="aspect-square relative overflow-hidden bg-cream">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-gold/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span
                    className="text-[10px] uppercase tracking-widest text-gold/60"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {product.category}
                  </span>
                  <h3
                    className="text-navy text-sm mt-1 mb-1"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {product.name}
                  </h3>
                  {product.price > 0 && (
                    <p
                      className="text-gold"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      ${product.price}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-10">
          <a href="/shop" className="btn-gold inline-block">
            Shop the Collection
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
