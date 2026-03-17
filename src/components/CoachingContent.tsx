"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { coachingTiers, singleSession } from "@/lib/services";

export default function CoachingContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0D1F5C 0%, #1A3FA0 50%, #0D1F5C 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            1:1 Coaching
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Private Coaching{" "}
            <span className="text-gold italic">Sessions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Personalized, trauma-informed support tailored to your nervous
            system and goals.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-6xl mx-auto px-6">
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
              <span
                className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full uppercase tracking-widest"
                style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
              >
                {singleSession.note}
              </span>
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

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Compare</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Feature <span className="text-gold italic">Comparison</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden border border-gold/10">
                <thead>
                  <tr className="bg-navy text-white">
                    <th
                      className="p-4 text-left text-sm"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      Feature
                    </th>
                    {coachingTiers.map((t) => (
                      <th
                        key={t.name}
                        className="p-4 text-center text-sm"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm text-charcoal/70">
                  {[
                    ["Session Length", "60 min", "60 min", "90 min"],
                    ["Sessions/Month", "2x", "4x (weekly)", "4x (weekly)"],
                    ["Between-Session Support", "—", "Voice/Message", "Priority Access"],
                    ["Nervous System Tools", "✓", "✓", "✓"],
                    ["Identity Repair", "—", "✓", "✓"],
                    ["Energy Integration", "—", "—", "✓"],
                    ["Capacity Building", "—", "—", "✓"],
                    ["Monthly Investment", "$555", "$1,250", "$2,500"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-parchment/50" : ""}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`p-4 ${j === 0 ? "text-left font-medium text-navy" : "text-center"}`}
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {cell === "✓" ? (
                            <svg
                              className="w-5 h-5 text-gold mx-auto"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Next Steps</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              How to Get <span className="text-gold italic">Started</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Book a Connection Call",
                desc: "A free conversation to ensure we're aligned and explore what support looks like for you.",
              },
              {
                step: "02",
                title: "Choose Your Tier",
                desc: "Select the level of support that best serves your nervous system and goals.",
              },
              {
                step: "03",
                title: "Begin Your Sessions",
                desc: "We start with a personalized onboarding and dive into your healing journey together.",
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

          <AnimatedSection delay={0.3}>
            <div className="mt-12">
              <a href="/book" className="btn-gold">
                Book Your Connection Call
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
