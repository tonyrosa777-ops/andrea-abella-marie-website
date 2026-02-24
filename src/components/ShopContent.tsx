"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { products, bundles, categories } from "@/lib/products";

export default function ShopContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : activeCategory === "Bundles"
        ? []
        : products.filter((p) => p.category === activeCategory);

  const showBundles =
    activeCategory === "All" || activeCategory === "Bundles";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
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
            {categories.map((cat) => (
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
          {filteredProducts.length > 0 && (
            <>
              <AnimatedSection>
                <h2
                  className="text-2xl text-navy mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Individual{" "}
                  <span className="text-gold italic">Items</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                {filteredProducts.map((product, i) => (
                  <AnimatedSection key={product.slug} delay={i * 0.05}>
                    <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gold/10 h-full flex flex-col">
                      {/* Product image placeholder */}
                      <div className="aspect-square bg-cream flex items-center justify-center">
                        <div className="text-center p-4">
                          <svg
                            className="w-12 h-12 text-gold/30 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 24 24"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>
                          <p
                            className="text-xs text-charcoal/30"
                            style={{ fontFamily: "var(--font-ui)" }}
                          >
                            Image Coming Soon
                          </p>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span
                          className="text-[10px] uppercase tracking-widest text-gold/70 mb-1"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {product.category}
                        </span>
                        <h3
                          className="text-lg text-navy mb-1"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                          }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-charcoal/60 mb-4 flex-1">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span
                            className="text-xl text-gold"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontWeight: 900,
                            }}
                          >
                            ${product.price}
                          </span>
                          <button
                            className="px-4 py-2 border border-gold text-gold text-sm rounded-full hover:bg-gold/10 transition-all"
                            style={{
                              fontFamily: "var(--font-ui)",
                              fontWeight: 600,
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
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
                  Curated{" "}
                  <span className="text-gold italic">Bundles</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bundles.map((bundle, i) => (
                  <AnimatedSection key={bundle.slug} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl p-6 card-hover border border-gold/10 h-full flex flex-col">
                      <div className="mb-1">
                        <span
                          className="px-3 py-1 bg-gold/10 text-gold text-[10px] rounded-full uppercase tracking-widest"
                          style={{
                            fontFamily: "var(--font-ui)",
                            fontWeight: 600,
                          }}
                        >
                          Bundle
                        </span>
                      </div>
                      <h3
                        className="text-lg text-navy mt-3 mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                        }}
                      >
                        {bundle.name}
                      </h3>
                      <p className="text-sm text-charcoal/60 mb-2 flex-1">
                        {bundle.description}
                      </p>
                      <p
                        className="text-xs text-charcoal/50 mb-4"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Includes: {bundle.contents}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xl text-gold"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                          }}
                        >
                          ${bundle.price}
                        </span>
                        <button
                          className="px-4 py-2 border border-gold text-gold text-sm rounded-full hover:bg-gold/10 transition-all"
                          style={{
                            fontFamily: "var(--font-ui)",
                            fontWeight: 600,
                          }}
                        >
                          Add to Cart
                        </button>
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
            style={{ fontFamily: "var(--font-script)", fontSize: "1.2rem" }}
          >
            &ldquo;Prices reflect small-batch, intentional pieces — not
            mass-produced merch.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
