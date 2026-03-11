"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

// -- Blog data (placeholder posts from the master plan content pillars) --
const categories = [
  "All",
  "Nervous System",
  "Identity Rebuilding",
  "Veteran Life",
  "Emotional Resilience",
  "Energy Healing",
  "Mindset",
];

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

const posts: Post[] = [
  {
    id: "why-toxic-positivity-fails",
    title: "Why \"Just Stay Positive\" Doesn't Work for Trauma Survivors",
    excerpt:
      "Toxic positivity dismisses real pain. Here's why nervous system regulation — not forced optimism — is the real path to emotional freedom.",
    category: "Nervous System",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "identity-after-service",
    title: "Who Am I Now? Rebuilding Identity After Military Service",
    excerpt:
      "Leaving the military doesn't just change your job — it changes your entire sense of self. Here's how to begin the process of coming home to who you really are.",
    category: "Veteran Life",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "emotional-resilience-myth",
    title: "Emotional Resilience Isn't About Being Strong All the Time",
    excerpt:
      "Real resilience means knowing when to rest, when to ask for help, and when to let yourself feel. Here's how to redefine strength on your own terms.",
    category: "Emotional Resilience",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "energy-healing-explained",
    title: "What Is Energy Healing & How Can It Support Trauma Recovery?",
    excerpt:
      "Energy healing isn't woo-woo. It's a complementary practice that helps the body release stored trauma and return to a state of calm. Here's how it works.",
    category: "Energy Healing",
    date: "Jan 13, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "rebuilding-self-trust",
    title: "How to Rebuild Self-Trust After It's Been Broken",
    excerpt:
      "When life breaks your trust — in others or yourself — the path back starts with tiny, consistent promises you keep. Here's a framework that actually works.",
    category: "Identity Rebuilding",
    date: "Jan 6, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "mindset-shifts-trauma",
    title: "3 Mindset Shifts That Changed Everything in My Healing Journey",
    excerpt:
      "These aren't affirmations you tape to your mirror. They're deep, internal shifts that rewired how I relate to myself, my past, and my future.",
    category: "Mindset",
    date: "Dec 30, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "veterans-civilian-life",
    title: "The Hardest Part of Civilian Life Nobody Talks About",
    excerpt:
      "It's not the job search or the paperwork. It's the silence. The loss of mission. The identity vacuum. And there's a way through it.",
    category: "Veteran Life",
    date: "Dec 23, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "nervous-system-dysregulation",
    title: "Signs Your Nervous System Is Dysregulated (And What to Do About It)",
    excerpt:
      "Always on edge? Numb? Swinging between the two? Your nervous system might be stuck in survival mode. Here's how to recognize it — and start resetting.",
    category: "Nervous System",
    date: "Dec 16, 2025",
    readTime: "6 min read",
    featured: false,
  },
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
              "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
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
                    {/* Image placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-navy/10 to-navy/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors" />
                      <div className="relative text-center p-6">
                        <CategoryIcon category={post.category} />
                        <p
                          className="text-navy/30 text-xs mt-2"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          Featured
                        </p>
                      </div>
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
                    {/* Image placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-navy/5 to-navy/15 flex items-center justify-center">
                      <div className="text-center p-4">
                        <CategoryIcon category={post.category} />
                      </div>
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
