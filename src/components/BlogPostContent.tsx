"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { BlogPost, ContentBlock, getRelatedPosts } from "@/lib/blog";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-navy/10">
      <div
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Nervous System": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" />
      </svg>
    ),
    "Identity Rebuilding": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0112 0v2" />
      </svg>
    ),
    "Veteran Life": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    "Emotional Resilience": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    "Energy Healing": (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    Mindset: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 017 7c0 3-2 5-3 6v1h-8v-1c-1-1-3-3-3-6a7 7 0 017-7z" />
        <path d="M9 21h6M10 17h4" />
      </svg>
    ),
  };
  return <span className="text-gold">{icons[category] || null}</span>;
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-charcoal/80 leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
        >
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2
          key={index}
          className="text-2xl text-navy mt-10 mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="text-base text-navy/70 uppercase tracking-widest mt-6 mb-3"
          style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "0.75rem" }}
        >
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={index} className="mb-6 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-charcoal/80 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
            >
              <span className="text-gold mt-1.5 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-gold pl-6 my-8 py-1"
        >
          <p
            className="text-navy/80 italic leading-relaxed"
            style={{ fontFamily: "var(--font-script)", fontSize: "1.25rem" }}
          >
            {block.text}
          </p>
        </blockquote>
      );
    case "divider":
      return (
        <div key={index} className="gold-divider my-10" />
      );
    default:
      return null;
  }
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post, 3);

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6" style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem" }}>
              <Link href="/blog" className="text-white/40 hover:text-gold transition-colors">
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span className="inline-flex items-center gap-1.5 text-gold">
                <CategoryIcon category={post.category} />
                {post.category}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {post.title}
            </h1>

            <div
              className="flex items-center justify-center gap-4 text-white/40"
              style={{ fontFamily: "var(--font-ui)", fontSize: "0.8125rem" }}
            >
              <span>{post.date}</span>
              <span className="text-white/20">·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-cream grain-texture">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.body.map((block, i) => renderBlock(block, i))}
          </motion.div>

          {/* Author Card */}
          <AnimatedSection delay={0.1}>
            <div className="mt-16 p-8 bg-white rounded-2xl border border-navy/8 flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-navy/20 to-gold/20 flex items-center justify-center text-navy/40">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 20v-2a6 6 0 0112 0v2" />
                </svg>
              </div>
              <div>
                <p
                  className="text-navy font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Andrea Abella Marie
                </p>
                <p
                  className="text-gold text-xs mb-2 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Trauma-Informed Mindset Coach & Energy Healing Practitioner
                </p>
                <p className="text-charcoal/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Andrea works with veterans, professionals, and trauma-impacted adults who are ready to rebuild their identity and nervous system from the inside out. Her approach blends trauma-informed coaching with energy healing practices rooted in safety, not performance.
                </p>
                <div className="flex gap-3 mt-4">
                  <Link
                    href="/about"
                    className="text-xs text-navy/60 hover:text-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    About Andrea →
                  </Link>
                  <Link
                    href="/book"
                    className="text-xs text-gold hover:text-gold/70 transition-colors"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Work With Andrea →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: "var(--color-parchment)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <p className="section-label mb-8">Continue Reading</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relPost, i) => (
                <AnimatedSection key={relPost.id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${relPost.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-transparent hover:border-gold/20 transition-all card-hover h-full"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-navy/5 to-navy/15 flex items-center justify-center">
                      <CategoryIcon category={relPost.category} />
                    </div>
                    <div className="p-5">
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] text-gold bg-gold/10 px-2.5 py-1 rounded-full mb-3"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                      >
                        {relPost.category}
                      </span>
                      <h3
                        className="text-sm text-navy mb-2 group-hover:text-gold transition-colors leading-snug"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {relPost.title}
                      </h3>
                      <p className="text-charcoal/50 text-xs leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                        {relPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-cream grain-texture">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-navy rounded-2xl p-10 text-center">
              <p className="section-label mb-3">Stay Connected</p>
              <h3
                className="text-2xl text-white mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Get Healing Resources{" "}
                <span className="text-gold italic">Delivered</span>
              </h3>
              <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                Weekly reflections, grounding tools, and articles on nervous system regulation and identity rebuilding.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full border-2 border-gold/30 bg-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm"
                  style={{ fontFamily: "var(--font-ui)" }}
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/25 mt-3" style={{ fontFamily: "var(--font-ui)" }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
