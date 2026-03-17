"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import HeroStars from "./HeroStars";
import { riseApprenticeship } from "@/lib/services";

export default function RiseContent() {
  return (
    <>
      {/* Hero — Premium Design */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0D1F5C 0%, #1A3FA0 30%, #0D1F5C 70%, #1A3FA0 100%)",
          }}
        />
        <HeroStars />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6"
          >
            <span
              className="px-5 py-2 border border-gold/40 text-gold text-xs rounded-full uppercase tracking-[4px]"
              style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
            >
              Application Required
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            The RISE{" "}
            <span className="text-gold italic">Apprenticeship&trade;</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-3xl mx-auto mb-8"
          >
            {riseApprenticeship.positioning}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gold/90 italic max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;{riseApprenticeship.quote}&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-16 bg-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p
              className="text-lg md:text-xl text-navy leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {riseApprenticeship.differentiator}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Blue Line Journey */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Your Journey Map</p>
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                The Clear Map{" "}
                <span className="text-gold italic">(Your &lsquo;Blue Line&rsquo;)</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Journey Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {riseApprenticeship.blueLine.map((step, i) => (
                <AnimatedSection key={step} delay={i * 0.1}>
                  <div className="relative text-center">
                    <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto mb-3 relative z-10">
                      <span
                        className="text-gold text-sm"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 700,
                        }}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className="text-white text-sm"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White-Glove Support + Accountability */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-gold/10 h-full">
                <h3
                  className="text-sm uppercase tracking-widest text-gold mb-6"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                >
                  White-Glove Human Support
                </h3>
                <ul className="space-y-4">
                  {riseApprenticeship.support.map((item) => (
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

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gold/10 h-full">
                <h3
                  className="text-sm uppercase tracking-widest text-gold mb-6"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                >
                  Proactive Accountability
                </h3>
                <ul className="space-y-4">
                  {riseApprenticeship.accountability.map((item) => (
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
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Deliverables</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                What You Walk{" "}
                <span className="text-gold italic">Away With</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {riseApprenticeship.walkAway.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-gold/10 card-hover text-center">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p
                    className="text-sm text-navy"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Qualification</p>
            <h2
              className="text-3xl md:text-4xl text-white mb-10"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Who This Is <span className="text-gold italic">For</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {riseApprenticeship.whoFor.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 md:py-28 bg-cream grain-texture text-center">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-label mb-4">Limited Enrollment</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Ready to <span className="text-gold italic">Rise?</span>
            </h2>
            <p className="text-charcoal/70 mb-10 max-w-lg mx-auto">
              The RISE Apprenticeship&trade; is application-only. This ensures
              every participant is ready for the depth and commitment this
              program requires.
            </p>
            <a href="/book" className="btn-gold">
              Apply Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
