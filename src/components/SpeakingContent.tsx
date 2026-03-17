"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import HeroStars from "./HeroStars";

const credentials = [
  { value: "8 Years", label: "U.S. Navy Service" },
  { value: "E-6", label: "Petty Officer First Class" },
  { value: "100%", label: "Service-Connected PTSD" },
  { value: "M.P.H.", label: "Public Health Nutrition" },
  { value: "4", label: "Published Books" },
  { value: "GCA", label: "Certified Coach" },
];

const included = [
  "Pre-event discovery call to customize content for your specific audience",
  "Fully tailored talk — your industry, your people, your context",
  "Trauma-informed facilitation throughout — no retraumatization, always safe",
  "Printable attendee resource guide to take home",
  "Optional post-event Q&A session (30 min)",
  "Available in-person or virtually",
];

const topics = [
  {
    title: "Rising After Trauma: Healing Through Nervous System Awareness",
    description:
      "A gentle, trauma-informed keynote on regulation, boundaries, and rebuilding internal safety. Andrea draws directly from her own experience — 8 years of Navy service, 7 years fighting the VA, and everything she rebuilt after — to create a room where people feel safe enough to actually hear what's being said.",
    duration: "45–90 minutes",
    format: "Keynote / Workshop",
    audience: "Corporate wellness, veteran organizations, community health events",
    outcomes: [
      "Why willpower alone doesn't heal trauma — and what actually does",
      "3 immediate nervous system regulation tools they can use that same day",
      "A new framework for building safety from the inside out",
    ],
  },
  {
    title: "The Invisible Armor: Understanding Survival Mode in High-Achievers",
    description:
      "High performers are often the most dysregulated people in the room — they've just learned to function through it. This talk explores how trauma shows up as perfectionism, people-pleasing, and emotional numbing, and how to begin removing the armor without losing what makes them effective.",
    duration: "45–60 minutes",
    format: "Keynote / Panel",
    audience: "Leadership conferences, corporate events, professional associations",
    outcomes: [
      "How to recognize trauma responses hiding inside high performance",
      "Tools to begin softening the armor safely, without falling apart",
      "Language to talk about their experience without shame or diagnosis",
    ],
  },
  {
    title: "From Surviving to Thriving: A Nervous System Regulation Workshop",
    description:
      "An interactive, experiential workshop where attendees don't just learn about regulation — they practice it. Andrea guides the room through grounding techniques, nervous system mapping, and real tools they can take back to their teams, families, and daily lives.",
    duration: "90–120 minutes",
    format: "Interactive Workshop",
    audience: "Retreats, wellness days, intimate group settings (up to 50)",
    outcomes: [
      "Hands-on grounding and co-regulation practices they can use immediately",
      "A personalized nervous system map to reference after the event",
      "Concrete tools to bring back to their teams, families, or clients",
    ],
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

  function selectTopic(title: string) {
    setFormData((prev) => ({ ...prev, eventType: title }));
    document.getElementById("speaking-inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0D1F5C 0%, #1A3FA0 50%, #0D1F5C 100%)" }}
        />
        <HeroStars />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label mb-6">
            Speaking & Workshops
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            A Speaker Who Has{" "}
            <span className="text-gold italic">Lived</span>{" "}
            What She Teaches
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Trauma-informed keynotes and workshops for organizations ready to go
            beyond awareness — into genuine, lasting change.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#speaking-inquiry" className="btn-gold">
              Check Availability
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Credential Bar ───────────────────────────────────── */}
      <section className="bg-navy py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {credentials.map((c) => (
              <div key={c.label}>
                <p
                  className="text-gold text-2xl md:text-3xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                  {c.value}
                </p>
                <p
                  className="text-white/60 text-xs uppercase tracking-wider leading-tight"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Andrea ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <p className="section-label mb-4">Why Andrea</p>
              <h2
                className="text-3xl md:text-4xl text-navy mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Her Credential Isn&apos;t a Certificate.{" "}
                <span className="text-gold italic">It&apos;s Her Life.</span>
              </h2>
              <div
                className="space-y-4 text-charcoal/75 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p>
                  Andrea spent 8 years in the U.S. Navy as a Petty Officer First Class — the only woman in her unit during her deployment to Kuwait and Iraq. When she came home, she spent 7 years fighting the VA to be recognized for the PTSD she earned in service. Three hospitalizations. A system that kept asking her to prove her pain was real enough.
                </p>
                <p>
                  She came out the other side not with a story of triumph over adversity — but with a deeply practical understanding of what it actually takes to rebuild a nervous system, an identity, and a life. That understanding is what she brings into every room she speaks in.
                </p>
                <p>
                  She doesn&apos;t teach theory. She teaches what worked when nothing else did.
                </p>
              </div>
              <blockquote
                className="mt-8 pl-5 border-l-2 border-gold text-navy italic"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
              >
                &ldquo;I don&apos;t speak from a textbook. I speak from eight years of service, seven years of fighting to be believed, and everything I&apos;ve rebuilt since.&rdquo;
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {/* What's Included card */}
              <div className="bg-white rounded-2xl p-8 border border-gold/10 shadow-sm">
                <h3
                  className="text-xl text-navy mb-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  What Every Booking Includes
                </h3>
                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#C8A84E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p
                        className="text-charcoal/75 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Topics ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "var(--color-parchment)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label mb-4">Speaking Topics</p>
            <h2
              className="text-3xl md:text-4xl text-navy"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Available <span className="text-gold italic">Presentations</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {topics.map((topic, i) => (
              <AnimatedSection key={topic.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gold/10 overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span
                        className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                      >
                        {topic.format}
                      </span>
                      <span
                        className="px-3 py-1 bg-navy/5 text-navy text-xs rounded-full"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                      >
                        {topic.duration}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                      <div>
                        <h3
                          className="text-xl md:text-2xl text-navy mb-4"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                        >
                          {topic.title}
                        </h3>
                        <p
                          className="text-charcoal/70 leading-relaxed mb-6"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {topic.description}
                        </p>

                        {/* Outcomes */}
                        <div>
                          <p
                            className="text-xs uppercase tracking-widest text-gold mb-3"
                            style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                          >
                            Attendees will leave with
                          </p>
                          <ul className="space-y-2">
                            {topic.outcomes.map((outcome, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                                <p
                                  className="text-charcoal/70 text-sm leading-relaxed"
                                  style={{ fontFamily: "var(--font-body)" }}
                                >
                                  {outcome}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p
                          className="text-xs text-charcoal/40 uppercase tracking-wider mt-5"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          Best for: {topic.audience}
                        </p>
                      </div>

                      <div className="shrink-0 md:pt-2">
                        <button
                          onClick={() => selectTopic(topic.title)}
                          className="btn-gold whitespace-nowrap"
                        >
                          Book This Topic
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C8A84E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote
              className="text-xl md:text-2xl text-white italic leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;I&apos;ve booked speakers for this summit for seven years. Most deliver their material and leave. Andrea stayed two hours after talking with attendees one-on-one. People who hadn&apos;t opened up in years were talking. Three people signed up for follow-up services that same night. We&apos;re bringing her back.&rdquo;
            </blockquote>
            <div>
              <p
                className="text-gold font-semibold"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Renee T.
              </p>
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Program Director, Veterans Wellness Summit
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Inquiry Form ─────────────────────────────────────── */}
      <section id="speaking-inquiry" className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-4">Book Andrea</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Speaking <span className="text-gold italic">Inquiry</span>
            </h2>
            <p className="text-charcoal/60 max-w-lg mx-auto" style={{ fontFamily: "var(--font-ui)" }}>
              Tell us about your event and we&apos;ll be in touch within 48 hours to discuss availability, customization, and fit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gold/10 space-y-6"
            >
              {/* Selected topic indicator */}
              {formData.eventType && (
                <div className="flex items-center justify-between bg-gold/10 border border-gold/20 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-xs text-gold uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Selected Topic</p>
                    <p className="text-navy text-sm" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>{formData.eventType}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, eventType: "" }))}
                    className="text-charcoal/40 hover:text-charcoal text-xs underline ml-4"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Change
                  </button>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-navy mb-2" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-navy mb-2" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-navy mb-2" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-navy mb-2" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                    style={{ fontFamily: "var(--font-ui)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-navy mb-2" style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}>Tell us about your event</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                  style={{ fontFamily: "var(--font-ui)" }}
                  placeholder="Event type, expected audience size, specific topics of interest, in-person or virtual..."
                />
              </div>

              <div className="text-center pt-2">
                <button type="submit" className="btn-gold">
                  Submit Inquiry
                </button>
                <p className="text-xs text-charcoal/40 mt-3" style={{ fontFamily: "var(--font-ui)" }}>
                  We respond within 48 hours.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
