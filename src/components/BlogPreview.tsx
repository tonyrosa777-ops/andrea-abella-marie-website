import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { posts } from "@/lib/blog";

// Hand-pick the 3 most compelling posts for the homepage
const FEATURED_IDS = [
  "why-toxic-positivity-fails",
  "identity-after-service",
  "nervous-system-dysregulation",
];

const featured = FEATURED_IDS.map((id) => posts.find((p) => p.id === id)!);

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection className="text-center mb-14">
          <p className="section-label mb-4">From the Blog</p>
          <h2
            className="text-3xl md:text-4xl text-navy mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Insights for Your{" "}
            <span className="text-gold italic">Healing Journey</span>
          </h2>
          <p
            className="text-charcoal/60 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem" }}
          >
            Real talk on nervous system regulation, identity rebuilding, and
            what healing actually looks like — no toxic positivity.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.1}>
              <a
                href={`/blog/${post.id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gold/10 card-hover h-full"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-cream">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy/5">
                      <svg className="w-10 h-10 text-gold/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  )}

                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-gold text-navy"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-navy text-lg mb-3 leading-snug group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-charcoal/60 text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className="text-xs text-charcoal/40"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {post.readTime}
                    </span>
                    <span
                      className="text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.35} className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-navy border border-navy/20 px-7 py-3 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "0.9rem" }}
          >
            Explore All Articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
}
