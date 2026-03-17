"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import HeroStars from "./HeroStars";

const credentials = [
  {
    name: "Geo Love Healing — Certified Practitioner Level 1",
    level: "Bronze",
  },
  {
    name: "Geo Love Healing — Certified Practitioner Level 2",
    level: "Silver",
  },
  {
    name: "Global Coaches Association (GCA) Member",
    level: "Gold",
  },
];

const timeline = [
  {
    year: "The Beginning",
    title: "Personal Transformation",
    description:
      "Andrea's journey began with her own healing — navigating trauma, rebuilding identity, and discovering the power of nervous system regulation.",
  },
  {
    year: "Certification",
    title: "Geo Love Healing Level 1 & 2",
    description:
      "Completed advanced energy healing certifications, integrating sacred geometry and holistic healing practices into her coaching framework.",
  },
  {
    year: "Professional",
    title: "Global Coaches Association",
    description:
      "Joined the Global Coaches Association, committing to the highest standards of ethical, compassionate coaching practice.",
  },
  {
    year: "Today",
    title: "Andrea Abella Marie Coaching",
    description:
      "Now helping veterans, overwhelmed professionals, and trauma-impacted adults rebuild their identity and find their way home to themselves.",
  },
];

export default function AboutContent() {
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
        <HeroStars />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            My Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            I&apos;ve Been Through It{" "}
            <span className="text-gold italic">Myself</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Now I help you find your way forward.
          </motion.p>
        </div>
      </section>

      {/* Full Bio */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <AnimatedSection>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/headshots/andrea-headshot-gray-tshirt-studio.png"
                    alt="Andrea Abella Marie"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Bio text */}
            <div className="md:col-span-3">
              <AnimatedSection>
                <h2
                  className="text-3xl md:text-4xl text-navy mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Meet <span className="text-gold italic">Andrea</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-5 text-charcoal/80 leading-relaxed">
                  <p>
                    Andrea Abella Marie is a Trauma-Informed Mindset Coach and
                    Energy Healing Practitioner dedicated to helping people who
                    have already survived — and now need a safe, structured path
                    back to confidence and nervous-system safety.
                  </p>
                  <p>
                    Her work is rooted in personal experience. Andrea knows what
                    it feels like to look strong on the outside while feeling
                    disconnected and guarded inside. She understands that
                    positivity can feel fake when you&apos;re carrying real pain,
                    and that &ldquo;just push through&rdquo; stops working when
                    your nervous system is overwhelmed.
                  </p>
                  <p>
                    Through her own healing journey, Andrea discovered the
                    transformative power of nervous system regulation, energy
                    healing, and identity rebuilding. Now she brings that same
                    deep, compassionate understanding to every client she serves.
                  </p>
                  <p>
                    Andrea works primarily with veterans, overwhelmed
                    professionals, aging adults, caregivers, and anyone who feels
                    stuck in survival mode. Her approach is never about
                    motivation or hype — it&apos;s about creating genuine safety
                    so real healing can begin.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">My Approach</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Trauma-Informed &{" "}
              <span className="text-gold italic">Nervous System Based</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description:
                  "Before any growth can happen, your nervous system needs to feel safe. We start by building a foundation of regulation and grounding.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 3 C20 3 35 12 35 22 C35 30 28 37 20 37 C12 37 5 30 5 22 C5 12 20 3 20 3Z" />
                    <circle cx="20" cy="22" r="5" />
                  </svg>
                ),
              },
              {
                title: "Identity Rebuilding",
                description:
                  "This isn't about becoming someone new. It's about reconnecting with who you truly are — beneath the armor, the survival strategies, the masks.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="20" cy="14" r="8" />
                    <path d="M8 36 C8 28 14 22 20 22 C26 22 32 28 32 36" />
                  </svg>
                ),
              },
              {
                title: "Lasting Transformation",
                description:
                  "Real healing creates lasting change — not quick fixes. You'll walk away with tools, frameworks, and a deeper trust in yourself.",
                icon: (
                  <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 35 L15 20 L25 25 L35 8" />
                    <polyline points="28 8 35 8 35 15" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 card-hover border border-gold/10">
                  <div className="mb-5">{item.icon}</div>
                  <h3
                    className="text-xl text-navy mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="section-label mb-4">The Journey</p>
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Certifications &{" "}
                <span className="text-gold italic">Training</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/30" />

            {timeline.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-navy z-10" />

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                    <span
                      className="text-xs uppercase tracking-widest text-gold/70 mb-2 block"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-xl text-white mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Credentials</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Certified &{" "}
              <span className="text-gold italic">Trusted</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((cred, i) => (
              <AnimatedSection key={cred.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 card-hover border border-gold/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      viewBox="0 0 40 40"
                      className="w-8 h-8 text-gold"
                      fill="currentColor"
                    >
                      <path d="M20 2l4.5 9.3 10.2 1.5-7.4 7.2 1.7 10.2L20 25.5l-9 4.7 1.7-10.2L5.3 12.8l10.2-1.5z" />
                    </svg>
                  </div>
                  <span
                    className="text-xs uppercase tracking-widest text-gold/70 mb-2 block"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {cred.level}
                  </span>
                  <h3
                    className="text-lg text-navy"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {cred.name}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
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
              Ready to Work{" "}
              <span className="text-gold italic">Together?</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Your healing journey starts with a conversation. Let&apos;s see if
              we&apos;re the right fit.
            </p>
            <a href="/book" className="btn-gold">
              Book a Connection Call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
