"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        {/* Lotus icon */}
        <path
          d="M32 48 Q20 40 18 28 Q22 32 32 24 Q42 32 46 28 Q44 40 32 48 Z"
          fill="#C8A84E"
          opacity="0.9"
        />
        <path
          d="M32 24 Q28 16 32 8 Q36 16 32 24 Z"
          fill="#C8A84E"
          opacity="0.7"
        />
        <path
          d="M18 28 Q12 20 16 12 Q20 20 22 26 Z"
          fill="#C8A84E"
          opacity="0.5"
        />
        <path
          d="M46 28 Q52 20 48 12 Q44 20 42 26 Z"
          fill="#C8A84E"
          opacity="0.5"
        />
        <ellipse
          cx="32"
          cy="50"
          rx="14"
          ry="3"
          fill="none"
          stroke="#C8A84E"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Reconnect to Your Body",
    description:
      "Learn to feel safe, calm, and grounded from within. Restore the connection between your mind and body through nervous system regulation.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        {/* Heart icon */}
        <path
          d="M32 52 Q16 40 12 28 Q8 16 20 12 Q28 8 32 18 Q36 8 44 12 Q56 16 52 28 Q48 40 32 52 Z"
          fill="#C8A84E"
          opacity="0.9"
        />
        <path
          d="M32 52 Q16 40 12 28 Q8 16 20 12 Q28 8 32 18 Q36 8 44 12 Q56 16 52 28 Q48 40 32 52 Z"
          fill="none"
          stroke="#C8A84E"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Regulate Your Emotions",
    description:
      "Break free from anxiety, anger, and overwhelm. Build emotional resilience through proven, trauma-informed practices.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        {/* Mountain / sunrise icon */}
        <circle
          cx="32"
          cy="22"
          r="8"
          fill="none"
          stroke="#C8A84E"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {[...Array(8)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 8 - Math.PI / 2;
          return (
            <line
              key={i}
              x1={32 + Math.cos(angle) * 10}
              y1={22 + Math.sin(angle) * 10}
              x2={32 + Math.cos(angle) * 14}
              y2={22 + Math.sin(angle) * 14}
              stroke="#C8A84E"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          );
        })}
        <path
          d="M10 52 L26 32 L32 38 L42 28 L54 52 Z"
          fill="#C8A84E"
          opacity="0.9"
        />
      </svg>
    ),
    title: "Restore Your Confidence",
    description:
      "Move forward with clarity, trust, and strength. Rebuild your identity and step into the next chapter of your life.",
  },
];

export default function ThreePillars() {
  return (
    <section
      id="pillars"
      className="relative py-24 md:py-32"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="section-label mb-4">The Path Forward</p>
          <h2
            className="text-3xl md:text-4xl text-navy"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Three Pillars of{" "}
            <span className="text-gold italic">Transformation</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.15}>
              <div className="card-hover bg-white rounded-2xl p-8 text-center border border-transparent hover:border-gold/30 h-full">
                <div className="flex justify-center mb-6">{pillar.icon}</div>
                <h3
                  className="text-xl text-navy mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                  }}
                >
                  {pillar.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Methodology badges */}
        <AnimatedSection delay={0.5} className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy/5 text-navy text-sm border border-navy/10"
              style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
            >
              <span className="w-2 h-2 rounded-full bg-gold" />
              Trauma-Informed &amp; Nervous System Based
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy/5 text-navy text-sm border border-navy/10"
              style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
            >
              <span className="w-2 h-2 rounded-full bg-gold" />
              Healing from Surviving to Thriving
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
