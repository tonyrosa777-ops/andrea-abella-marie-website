"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--color-parchment)" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="section-label mb-4">Free Resource</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-3xl md:text-4xl text-navy mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Begin Your Healing <span className="text-gold italic">Journey</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-charcoal/70 mb-8 max-w-lg mx-auto">
            Sign up to receive a free Nervous System Grounding Guide — practical
            tools you can use today to start feeling safer in your own body.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Integration point for ConvertKit / Mailchimp via n8n
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-gold/30 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors"
              style={{ fontFamily: "var(--font-ui)" }}
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Get the Free Guide
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p
            className="text-xs text-charcoal/40 mt-4"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            No spam. Unsubscribe anytime. Your healing journey is yours.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
