"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const topics = [
  {
    title: "Rising After Trauma: Healing Through Nervous System Awareness",
    description:
      "A gentle, trauma-informed talk on regulation, boundaries, and rebuilding internal safety. Perfect for corporate wellness programs, veteran organizations, and community health events.",
    duration: "45-90 minutes",
    format: "Keynote / Workshop",
  },
  {
    title: "The Invisible Armor: Understanding Survival Mode in High-Achievers",
    description:
      "Exploring how trauma shows up as perfectionism, people-pleasing, and emotional numbing — and how to begin removing the armor safely.",
    duration: "45-60 minutes",
    format: "Keynote / Panel",
  },
  {
    title: "From Surviving to Thriving: A Nervous System Regulation Workshop",
    description:
      "An interactive, experiential workshop where attendees learn practical grounding and regulation tools they can use immediately.",
    duration: "90-120 minutes",
    format: "Interactive Workshop",
  },
];

export default function SpeakingContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

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
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                background: "#fff",
                borderRadius: "50%",
                animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            Speaking & Workshops
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Rising After{" "}
            <span className="text-gold italic">Trauma</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Healing Through Nervous System Awareness — a gentle,
            trauma-informed experience for your organization or community.
          </motion.p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label mb-4">Speaking Topics</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Available{" "}
                <span className="text-gold italic">Presentations</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {topics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gold/10 card-hover">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span
                      className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      {topic.format}
                    </span>
                    <span
                      className="px-3 py-1 bg-navy/5 text-navy text-xs rounded-full"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      {topic.duration}
                    </span>
                  </div>
                  <h3
                    className="text-xl text-navy mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Inquiry */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Book Andrea</p>
              <h2
                className="text-3xl md:text-4xl text-navy"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Speaking{" "}
                <span className="text-gold italic">Inquiry</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Integration point for n8n webhook
              }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gold/10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm text-navy mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm text-navy mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm text-navy mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm text-navy mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm text-navy mb-2"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                >
                  Tell us about your event
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                  style={{ fontFamily: "var(--font-ui)" }}
                  placeholder="Event type, audience, expected attendance, any specific topics of interest..."
                />
              </div>

              <div className="text-center pt-2">
                <button type="submit" className="btn-gold">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
