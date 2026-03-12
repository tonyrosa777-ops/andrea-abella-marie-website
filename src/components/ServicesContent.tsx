"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { coachingTiers, singleSession } from "@/lib/services";

const faqs = [
  {
    q: "How do I know which tier is right for me?",
    a: "We'll discuss this during your connection conversation. The right level depends on your current needs, nervous system capacity, and goals. There's no pressure — we'll find what serves you best.",
  },
  {
    q: "What is a connection conversation?",
    a: "A free, no-pressure call where we get to know each other and determine if we're the right fit. It's about alignment, not a sales pitch.",
  },
  {
    q: "Is this therapy?",
    a: "No. This is coaching, not therapy or medical treatment. Andrea is a certified trauma-informed coach and energy healing practitioner. For clinical mental health needs, she can help connect you with appropriate resources.",
  },
  {
    q: "Do you work with veterans specifically?",
    a: "Yes. Veterans are at the heart of Andrea's practice. She understands the unique identity shifts, trauma responses, and challenges that come with military service and transition.",
  },
  {
    q: "Can I switch tiers?",
    a: "Absolutely. Your healing isn't linear, and your support doesn't have to be either. We can adjust your level of support as your needs evolve.",
  },
];

export default function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            How I Help
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Services &{" "}
            <span className="text-gold italic">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Every healing journey is unique. Choose the level of support that
            meets you where you are.
          </motion.p>
        </div>
      </section>

      {/* Featured: RISE Apprenticeship */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-navy rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span
                  className="px-4 py-1.5 bg-gold text-navy text-xs rounded-full uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                >
                  Flagship Program
                </span>
              </div>
              <p className="section-label mb-4">Application Required</p>
              <h2
                className="text-3xl md:text-4xl text-white mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                The RISE Apprenticeship&trade;
              </h2>
              <p className="text-white/60 mb-3 max-w-2xl mx-auto">
                A Guided Identity Rebuild for High-Functioning, Deeply Resilient
                Humans — Especially Veterans &amp; Identity-Shifters
              </p>
              <p
                className="text-gold/80 italic mb-8 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;You don&apos;t need to become someone new. You need to
                feel safe being who you are — again.&rdquo;
              </p>
              <a href="/services/rise-apprenticeship" className="btn-gold">
                Learn More & Apply
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 1:1 Coaching Tiers */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-parchment)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="section-label mb-4">1:1 Coaching</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Choose Your Level of{" "}
                <span className="text-gold italic">Support</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {coachingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative bg-white rounded-2xl p-8 card-hover h-full flex flex-col ${
                    tier.badge === "Most Popular"
                      ? "border-2 border-gold shadow-lg"
                      : "border border-gold/10"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className={`px-4 py-1 text-xs rounded-full uppercase tracking-widest ${
                          tier.badge === "Most Popular"
                            ? "bg-gold text-navy"
                            : "bg-navy text-gold"
                        }`}
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 700,
                        }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <h3
                    className="text-xl text-navy mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className="text-3xl text-gold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="text-charcoal/50 text-sm"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-charcoal/70"
                      >
                        <svg
                          className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p
                    className="text-xs text-charcoal/50 italic mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier.ideal}
                  </p>

                  <a
                    href={tier.href}
                    className={`text-center block rounded-full py-3 px-6 text-sm transition-all ${
                      tier.badge === "Most Popular"
                        ? "btn-gold"
                        : "border border-gold text-gold hover:bg-gold/10"
                    }`}
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {tier.cta}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Single Session */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gold/10 max-w-md mx-auto text-center">
              <div className="mb-2">
                <span
                  className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                >
                  {singleSession.note}
                </span>
              </div>
              <h3
                className="text-xl text-navy mt-3 mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {singleSession.name}
              </h3>
              <p
                className="text-2xl text-gold mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                {singleSession.price}
              </p>
              <ul className="space-y-2 mb-4 text-sm text-charcoal/70 text-left max-w-xs mx-auto">
                {singleSession.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p
                className="text-xs text-charcoal/50 italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {singleSession.ideal}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Health Cost Buffer */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Preventative Support</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                The Health Cost Buffer{" "}
                <span className="text-gold italic">Program</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-10 border border-gold/10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3
                    className="text-xl text-navy mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    12 weeks of guided support
                  </h3>
                  <p className="text-charcoal/70 mb-2">
                    $75/session or $300/month
                  </p>
                  <p className="text-sm text-gold italic mb-6">
                    Sliding scale available for veterans, seniors &amp;
                    caregivers
                  </p>
                  <p className="text-charcoal/70 mb-6">
                    Preventative support for aging adults, veterans &amp;
                    caregivers — so small health challenges don&apos;t become
                    costly crises.
                  </p>
                  <a
                    href="/services/health-cost-buffer"
                    className="btn-gold inline-block"
                  >
                    Learn More
                  </a>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4
                      className="text-sm uppercase tracking-widest text-gold mb-3"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      What We Offer
                    </h4>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Nervous system regulation practices
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Stress &amp; pain management tools
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Support with medical &amp; insurance challenges
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        Coaching for self-advocacy &amp; resilience
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {["Non-Medical & Confidential", "Flexible Payment", "Trusted Compassionate Care"].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 bg-gold/10 text-gold text-xs rounded-full"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">How to Begin</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Getting <span className="text-gold italic">Started</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connection Call",
                desc: "Book a free conversation to ensure we're the right fit for each other.",
              },
              {
                step: "02",
                title: "Choose Your Path",
                desc: "Select the level of support that best serves your nervous system and goals.",
              },
              {
                step: "03",
                title: "Begin Healing",
                desc: "Start your journey back to safety, confidence, and wholeness.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <span
                    className="text-5xl text-gold/20"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                    }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-lg text-navy mt-2 mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Common Questions</p>
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Frequently <span className="text-gold italic">Asked</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-white/5 border border-white/10 rounded-xl p-5 transition-all hover:border-gold/30"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3
                      className="text-white text-sm md:text-base"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      {faq.q}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openFaq === i && (
                    <p className="text-white/60 text-sm mt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream grain-texture text-center">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl text-navy mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Ready to Begin Your{" "}
              <span className="text-gold italic">Journey?</span>
            </h2>
            <p className="text-charcoal/70 mb-10 max-w-lg mx-auto">
              It starts with a conversation — not a commitment. Let&apos;s
              explore what healing looks like for you.
            </p>
            <a href="/book" className="btn-gold">
              Book Your Connection Call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
