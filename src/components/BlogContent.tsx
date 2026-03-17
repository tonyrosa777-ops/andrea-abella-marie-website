"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { posts } from "@/lib/blog";

const categories = [
  "All",
  "Nervous System",
  "Identity Rebuilding",
  "Veteran Life",
  "Emotional Resilience",
  "Energy Healing",
  "Mindset",
];

function CategoryIcon({ category }: { category: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    "Nervous System": (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" />
      </svg>
    ),
    "Identity Rebuilding": (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0112 0v2" />
      </svg>
    ),
    "Veteran Life": (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    "Emotional Resilience": (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    "Energy Healing": (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    Mindset: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 017 7c0 3-2 5-3 6v1h-8v-1c-1-1-3-3-3-6a7 7 0 017-7z" />
        <path d="M9 21h6M10 17h4" />
      </svg>
    ),
  };
  return <span className="text-gold">{iconMap[category] || null}</span>;
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0D1F5C 0%, #1A3FA0 50%, #0D1F5C 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">The Blog</p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Words for the{" "}
              <span className="text-gold italic">Healing Journey</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Honest reflections on trauma recovery, nervous system regulation,
              identity rebuilding, and finding your way back to yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-16 bg-cream grain-texture">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="section-label mb-8">Featured Articles</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.15}>
                  <a
                    href={`/blog/${post.id}`}
                    className="group block card-hover bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gold/20 h-full"
                  >
                    {/* Featured card image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-navy/20 flex items-center justify-center">
                          <CategoryIcon category={post.category} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                      {/* Featured badge */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-gold text-navy"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                      >
                        Featured
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1 rounded-full"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          <CategoryIcon category={post.category} />
                          {post.category}
                        </span>
                        <span
                          className="text-xs text-charcoal/40"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <h2
                        className="text-xl text-navy mb-3 group-hover:text-gold transition-colors"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs text-charcoal/40"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {post.date}
                        </span>
                        <span
                          className="text-gold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          Read Article
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search & Filter + All Posts */}
      <section
        className="py-16"
        style={{ background: "var(--color-parchment)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Search & Category Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-navy/10 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  style={{ fontFamily: "var(--font-ui)" }}
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs transition-all ${
                      activeCategory === cat
                        ? "bg-gold text-navy shadow-md"
                        : "bg-white text-charcoal/60 border border-navy/10 hover:border-gold/30 hover:text-gold"
                    }`}
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Post count */}
          <p
            className="text-xs text-charcoal/40 mb-6"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            {filteredPosts.length} article
            {filteredPosts.length !== 1 ? "s" : ""}{" "}
            {activeCategory !== "All" && `in ${activeCategory}`}
          </p>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="text-charcoal/40 text-lg"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                No articles found. Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === "All" && searchQuery === ""
                ? regularPosts
                : filteredPosts
              ).map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.08}>
                  <a
                    href={`/blog/${post.id}`}
                    className="group block card-hover bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gold/20 h-full"
                  >
                    {/* Card image */}
                    <div className="aspect-[16/10] relative overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/15 flex items-center justify-center">
                          <CategoryIcon category={post.category} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] text-gold bg-gold/10 px-2.5 py-1 rounded-full"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          {post.category}
                        </span>
                        <span
                          className="text-[10px] text-charcoal/35"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        className="text-base text-navy mb-2 group-hover:text-gold transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-charcoal/55 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] text-charcoal/35"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {post.date}
                        </span>
                        <span
                          className="text-gold text-xs group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                          style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                        >
                          Read
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Newsletter CTA at bottom of blog */}
          <AnimatedSection delay={0.3} className="mt-20">
            <div className="bg-navy rounded-2xl p-10 md:p-14 text-center">
              <p className="section-label mb-3">Stay Connected</p>
              <h3
                className="text-2xl md:text-3xl text-white mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Get Healing Resources{" "}
                <span className="text-gold italic">Delivered</span>
              </h3>
              <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
                Join the newsletter for weekly reflections, grounding tools, and
                articles on nervous system regulation and identity rebuilding.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full border-2 border-gold/30 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  style={{ fontFamily: "var(--font-ui)" }}
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p
                className="text-xs text-white/25 mt-3"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
