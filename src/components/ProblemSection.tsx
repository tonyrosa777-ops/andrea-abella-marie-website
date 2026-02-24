"use client";

import AnimatedSection from "./AnimatedSection";

export default function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 bg-cream grain-texture">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="section-label mb-6">You Are Not Broken</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-3xl md:text-5xl text-navy mb-10 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            You&apos;ve Survived.
            <br />
            Now It&apos;s Time to{" "}
            <span className="text-gold italic">Rebuild.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-5 text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            <p
              className="italic text-navy-light"
              style={{ fontFamily: "var(--font-script)", fontSize: "1.4rem" }}
            >
              If positivity feels fake...
            </p>
            <p
              className="italic text-navy-light"
              style={{ fontFamily: "var(--font-script)", fontSize: "1.4rem" }}
            >
              If &ldquo;just push through&rdquo; no longer works...
            </p>
            <p
              className="italic text-navy-light"
              style={{ fontFamily: "var(--font-script)", fontSize: "1.4rem" }}
            >
              If you look capable on the outside but feel disconnected
              inside...
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-10 text-lg text-charcoal/70">
            This is not motivational coaching. This is identity rebuilding for
            people who already survived — and now need a safe, structured path
            back to confidence and nervous-system safety.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12">
            <hr className="gold-divider max-w-xs mx-auto" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
