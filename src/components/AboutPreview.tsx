"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-cream grain-texture">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <AnimatedSection>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10 border-2 border-gold/20">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/5 to-navy/15">
                  <div className="text-center p-8">
                    <svg
                      viewBox="0 0 80 80"
                      className="w-20 h-20 mx-auto mb-4 opacity-30"
                      fill="none"
                    >
                      <circle cx="40" cy="28" r="14" fill="#2C4A7C" />
                      <path
                        d="M12 72 Q12 48 40 48 Q68 48 68 72"
                        fill="#2C4A7C"
                      />
                    </svg>
                    <p
                      className="text-navy/40 text-sm"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      Andrea&apos;s Photo
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection delay={0.1}>
              <p className="section-label mb-4">Meet Andrea</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2
                className="text-3xl md:text-4xl text-navy mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                I&apos;ve Been Through It Myself
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p
                className="text-xl text-gold mb-6 italic"
                style={{ fontFamily: "var(--font-script)" }}
              >
                &ldquo;Now I help you find your way forward.&rdquo;
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-4 text-charcoal/75 leading-relaxed mb-8">
                <p>
                  As a trauma-informed mindset coach and energy healing
                  practitioner, I work with veterans, overwhelmed professionals,
                  and anyone who has survived hard things and is ready to
                  rebuild — not with toxic positivity, but with safety,
                  structure, and genuine compassion.
                </p>
                <p>
                  My approach blends nervous system regulation, identity repair,
                  and self-trust rebuilding to help you come home to yourself.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
              >
                Read My Full Story
                <svg
                  width="20"
                  height="20"
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
              </a>
            </AnimatedSection>

            {/* Credential badges */}
            <AnimatedSection delay={0.6}>
              <div className="mt-10 pt-8 border-t border-navy/10">
                <p
                  className="text-xs uppercase tracking-widest text-charcoal/40 mb-4"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Credentials &amp; Certifications
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy text-xs border border-navy/10"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-600 flex items-center justify-center text-[8px] text-white font-bold">
                      G
                    </span>
                    Geo Love Healing L1
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy text-xs border border-navy/10"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-[8px] text-white font-bold">
                      G
                    </span>
                    Geo Love Healing L2
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy text-xs border border-navy/10"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-[8px] text-white font-bold">
                      GCA
                    </span>
                    Global Coaches Association
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
