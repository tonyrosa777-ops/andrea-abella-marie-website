"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import HeroStars from "./HeroStars";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Healthcare Professional",
    text: "Andrea helped me understand that my constant state of fight-or-flight wasn't normal — and more importantly, that there was a way out. For the first time in years, I feel like I can breathe.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Army Veteran",
    text: "After 20 years of service, I didn't know who I was without the uniform. Andrea gave me a safe space to figure that out. No judgment, no pressure — just real support.",
    stars: 5,
  },
  {
    name: "Michelle R.",
    role: "Caregiver",
    text: "I was so focused on taking care of everyone else that I forgot about myself. Andrea reminded me that I matter too, and gave me the tools to actually feel that truth in my body.",
    stars: 5,
  },
  {
    name: "David K.",
    role: "First Responder",
    text: "I thought I was fine. I looked fine. But inside I was drowning. Working with Andrea showed me what safety actually feels like. Game changer.",
    stars: 5,
  },
  {
    name: "Lisa W.",
    role: "Corporate Executive",
    text: "The nervous system work Andrea does is unlike anything I've experienced. It's not talk therapy, it's not positive affirmations — it's something deeper and more real.",
    stars: 5,
  },
  {
    name: "Roberto A.",
    role: "Marine Veteran",
    text: "Andrea understands trauma at a level most coaches don't. She's been through it herself, and you can feel that in every session. She doesn't just teach — she holds space.",
    stars: 5,
  },
];

export default function TestimonialsContent() {
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
            Client Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Voices of{" "}
            <span className="text-gold italic">Healing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Real stories from real people who chose to rebuild. Their courage
            inspires the work we do every day.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="testimonial-card bg-white rounded-2xl p-8 border border-gold/10 card-hover h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <svg
                        key={si}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <span
                        className="text-sm text-navy"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                        }}
                      >
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-sm text-navy"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs text-charcoal/50"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
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
              Your Story Could Be{" "}
              <span className="text-gold italic">Next</span>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto">
              Every transformation starts with a single step. Let&apos;s take
              yours together.
            </p>
            <a href="/book" className="btn-gold">
              Begin Your Journey
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
