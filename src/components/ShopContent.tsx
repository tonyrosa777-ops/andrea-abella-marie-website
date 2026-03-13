"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useCart } from "@/lib/cart";
import { bundles } from "@/lib/products";

const CATEGORIES = ["All", "Apparel", "Drinkware", "Bags", "Headwear", "Home & Stationery", "Accessories", "Bundles"];

interface PrintfulProduct {
  id: number;
  name: string;
  thumbnail_url?: string;
  variants?: number;
  sync_product?: { name: string; thumbnail_url?: string };
}

interface NormalizedProduct {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  printful_variant_id?: number;
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gold/10 h-full flex flex-col animate-pulse">
      <div className="aspect-square bg-cream" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-2 bg-cream rounded w-1/3" />
        <div className="h-4 bg-cream rounded w-3/4" />
        <div className="h-3 bg-cream rounded w-full" />
        <div className="h-3 bg-cream rounded w-2/3" />
        <div className="flex justify-between items-center mt-2">
          <div className="h-5 bg-cream rounded w-12" />
          <div className="h-8 bg-cream rounded-full w-24" />
        </div>
      </div>
    </div>
  );
}

function SuccessBanner() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";
  return (
    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gold text-navy text-center py-3 px-6"
          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
        >
          Your order is confirmed. Thank you — your healing journey continues.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ShopContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<NormalizedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState<number | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    fetch("/api/printful/products")
      .then((r) => r.json())
      .then((data: PrintfulProduct[]) => {
        const normalized: NormalizedProduct[] = data.map((p) => {
          const raw = p.sync_product ?? p;
          const name = raw.name ?? p.name ?? "Product";
          const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

          // Derive category from product name keywords
          let category = "Accessories";
          const lower = name.toLowerCase();
          if (/hoodie|tee|tank|long sleeve|jogger|sweatshirt|zip/.test(lower)) category = "Apparel";
          else if (/mug|tumbler|water bottle|enamel/.test(lower)) category = "Drinkware";
          else if (/tote|drawstring|crossbody|duffle/.test(lower)) category = "Bags";
          else if (/beanie|bucket hat|hat|snapback/.test(lower)) category = "Headwear";
          else if (/pillow|blanket|poster|notebook|canvas|journal/.test(lower)) category = "Home & Stationery";
          else if (/phone|keychain|bookmark/.test(lower)) category = "Accessories";

          return {
            id: p.id,
            slug,
            name,
            price: 0, // price shown from seeded JSON fallback below
            category,
            image: raw.thumbnail_url ?? undefined,
          };
        });
        setProducts(normalized);
      })
      .catch(() => {
        // Fallback: load from seeded JSON directly
        import("@/lib/printful-seeded-products.json").then((m) => {
          const seeded = m.default as { products: Array<{ slug: string; name: string; price: number; category: string; preview_image_url: string; printful_id: number }> };
          setProducts(
            seeded.products.map((p) => ({
              id: p.printful_id,
              slug: p.slug,
              name: p.name,
              price: p.price,
              category: p.category,
              image: p.preview_image_url || undefined,
            }))
          );
        });
      })
      .finally(() => setLoading(false));
  }, []);

  // Merge price from seeded JSON since live API doesn't return retail price
  const [seededPrices, setSeededPrices] = useState<Record<number, number>>({});
  useEffect(() => {
    import("@/lib/printful-seeded-products.json").then((m) => {
      const seeded = m.default as { products: Array<{ printful_id: number; price: number }> };
      const map: Record<number, number> = {};
      seeded.products.forEach((p) => { map[p.printful_id] = p.price; });
      setSeededPrices(map);
    });
  }, []);

  const filteredProducts =
    activeCategory === "All" || activeCategory === "Bundles"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const showBundles = activeCategory === "All" || activeCategory === "Bundles";
  const showProducts = activeCategory !== "Bundles";

  function handleAddToCart(product: NormalizedProduct) {
    const price = seededPrices[product.id] ?? product.price ?? 0;
    addItem({
      id: String(product.id),
      name: product.name,
      price,
      quantity: 1,
      image: product.image,
      category: product.category,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  }

  return (
    <>
      {/* Success Banner */}
      <Suspense fallback={null}>
        <SuccessBanner />
      </Suspense>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            Intentional Pieces
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Shop the{" "}
            <span className="text-gold italic">Collection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Small-batch, intentional pieces — not mass-produced merch. Each item
            carries the energy of resilience and healing.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream sticky top-0 z-30 border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-white border border-gold/20 text-charcoal/70 hover:border-gold/40"
                }`}
                style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Individual Items */}
          {showProducts && (
            <>
              <AnimatedSection>
                <h2
                  className="text-2xl text-navy mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Individual <span className="text-gold italic">Items</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                {loading
                  ? Array.from({ length: 8 }).map((_, i) => (
                      <div key={i}>
                        <SkeletonCard />
                      </div>
                    ))
                  : filteredProducts.map((product, i) => {
                      const price = seededPrices[product.id] ?? product.price;
                      const isAdded = addedId === product.id;
                      return (
                        <AnimatedSection key={product.id} delay={i * 0.04}>
                          <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gold/10 h-full flex flex-col">
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
                                  <svg className="w-12 h-12 text-gold/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="m21 15-5-5L5 21" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                              <span
                                className="text-[10px] uppercase tracking-widest text-gold/70 mb-1"
                                style={{ fontFamily: "var(--font-ui)" }}
                              >
                                {product.category}
                              </span>
                              <h3
                                className="text-base text-navy mb-3 flex-1"
                                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                              >
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between">
                                <span
                                  className="text-xl text-gold"
                                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                                >
                                  {price ? `$${price}` : "—"}
                                </span>
                                <button
                                  onClick={() => handleAddToCart(product)}
                                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                                    isAdded
                                      ? "bg-gold text-navy border border-gold"
                                      : "border border-gold text-gold hover:bg-gold/10"
                                  }`}
                                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                                >
                                  {isAdded ? "Added!" : "Add to Cart"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </AnimatedSection>
                      );
                    })}
              </div>
            </>
          )}

          {/* Bundles */}
          {showBundles && (
            <>
              <AnimatedSection>
                <h2
                  className="text-2xl text-navy mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Curated <span className="text-gold italic">Bundles</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bundles.map((bundle, i) => (
                  <AnimatedSection key={bundle.slug} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl p-6 card-hover border border-gold/10 h-full flex flex-col">
                      <div className="mb-1">
                        <span
                          className="px-3 py-1 bg-gold/10 text-gold text-[10px] rounded-full uppercase tracking-widest"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          Bundle
                        </span>
                      </div>
                      <h3
                        className="text-lg text-navy mt-3 mb-2"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {bundle.name}
                      </h3>
                      <p className="text-sm text-charcoal/60 mb-2 flex-1">{bundle.description}</p>
                      <p
                        className="text-xs text-charcoal/50 mb-4"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Includes: {bundle.contents}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xl text-gold"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                        >
                          ${bundle.price}
                        </span>
                        <a
                          href={`mailto:andrea8466@icloud.com?subject=Bundle Inquiry: ${encodeURIComponent(bundle.name)}`}
                          className="px-4 py-2 border border-gold text-gold text-sm rounded-full hover:bg-gold/10 transition-all"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          Inquire
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p
            className="text-white/60 italic"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
          >
            &ldquo;Prices reflect small-batch, intentional pieces — not
            mass-produced merch.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
