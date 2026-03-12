"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { healthCostBuffer } from "@/lib/services";

export default function HealthCostBufferContent() {
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
            Preventative Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            The Health Cost Buffer{" "}
            <span className="text-gold italic">Program</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;{healthCostBuffer.quote}&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <AnimatedSection>
                <h2
                  className="text-3xl text-navy mb-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  12 Weeks of{" "}
                  <span className="text-gold italic">Guided Support</span>
                </h2>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  The Health Cost Buffer Program provides preventative support
                  for aging adults, veterans, and caregivers. By addressing
                  stress-related health concerns early, we help you avoid costly
                  crises and build lasting resilience.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gold/10 mb-6">
                  <h3
                    className="text-lg text-navy mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    Pricing
                  </h3>
                  <p
                    className="text-2xl text-gold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                    }}
                  >
                    {healthCostBuffer.pricing}
                  </p>
                  <p className="text-sm text-gold/80 italic">
                    {healthCostBuffer.slidingScale}
                  </p>
                  <p className="text-sm text-charcoal/60 mt-2">
                    Weekly or bi-weekly sessions available
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex gap-3 flex-wrap">
                  {healthCostBuffer.trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-2 bg-white border border-gold/20 text-navy text-sm rounded-full"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gold/10 mb-6">
                  <h3
                    className="text-sm uppercase tracking-widest text-gold mb-5"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    What We Offer
                  </h3>
                  <ul className="space-y-4">
                    {healthCostBuffer.offerings.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-charcoal/70"
                      >
                        <svg
                          className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-gold/10">
                  <h3
                    className="text-sm uppercase tracking-widest text-gold mb-5"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    How It Helps
                  </h3>
                  <ul className="space-y-4">
                    {healthCostBuffer.benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-charcoal/70"
                      >
                        <svg
                          className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Start Your <span className="text-gold italic">Journey</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Take the first step toward preventative wellness. Schedule your
              initial conversation today.
            </p>
            <a href="/book" className="btn-gold">
              Get Started
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
