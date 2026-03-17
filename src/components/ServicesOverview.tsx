"use client";

import AnimatedSection from "./AnimatedSection";

const tiers = [
  {
    name: "Foundation Support",
    price: "$555",
    period: "/month",
    features: [
      "2 private 60-minute coaching sessions per month",
      "Trauma-informed nervous system regulation tools",
      "Emotional grounding & self-trust practices",
      "Personalized integration practices between sessions",
    ],
    ideal: "Ideal for rebuilding safety and consistency",
    popular: false,
  },
  {
    name: "Deep Healing Container",
    price: "$1,250",
    period: "/month",
    features: [
      "Weekly 60-minute 1:1 coaching sessions",
      "Nervous system regulation & emotional resilience work",
      "Identity repair & self-trust rebuilding",
      "Voice-note or message support between sessions",
    ],
    ideal: "Ideal for clients ready to move out of survival mode",
    popular: true,
  },
  {
    name: "VIP Healing & Mentorship",
    price: "$2,500",
    period: "/month",
    features: [
      "Weekly 90-minute private sessions",
      "Priority access + ongoing support between sessions",
      "Trauma-informed mindset + energy integration",
      "Long-term capacity building & confidence restoration",
    ],
    ideal: "Ideal for clients seeking transformation with close support",
    popular: false,
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--color-parchment)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="section-label mb-4">How We Work Together</p>
          <h2
            className="text-3xl md:text-4xl text-navy"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            1:1 Coaching <span className="text-gold italic">Options</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div
                className={`card-hover relative rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? "bg-navy text-white border-2 border-gold shadow-xl"
                    : "bg-white text-charcoal border border-navy/10"
                }`}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs"
                    style={{
                      background:
                        "linear-gradient(90deg, #C8A84E, #D4B96A, #C8A84E)",
                      fontFamily: "var(--font-ui)",
                      fontWeight: 700,
                      color: "#0D1F5C",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-lg mb-2 ${
                    tier.popular ? "text-gold-light" : "text-navy"
                  }`}
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                >
                  {tier.name}
                </h3>

                <div className="mb-6">
                  <span
                    className={`text-4xl ${
                      tier.popular ? "text-white" : "text-navy"
                    }`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.popular ? "text-white/60" : "text-charcoal/50"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          tier.popular ? "text-gold" : "text-gold"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={
                          tier.popular ? "text-white/80" : "text-charcoal/70"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-xs mb-6 italic ${
                    tier.popular ? "text-gold-light/80" : "text-gold"
                  }`}
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem" }}
                >
                  {tier.ideal}
                </p>

                <a
                  href="/book"
                  className={`block text-center py-3 px-6 rounded-full text-sm transition-all ${
                    tier.popular
                      ? "btn-gold"
                      : "border border-gold text-gold hover:bg-gold/10"
                  }`}
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                >
                  Begin Your Journey
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
          >
            Explore All Services
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
      </div>
    </section>
  );
}
