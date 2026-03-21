"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import HeroStars from "./HeroStars";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Healthcare Professional",
    text: "I'm a nurse. I know what burnout looks like in my patients. Took me a lot longer to see it in myself. I was running on autopilot and had been for years. My husband says I actually laugh again. That's the thing that got me.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Army Veteran",
    text: "Twenty years in, and when I got out I had no idea what to do with a Tuesday. I'd built my whole identity around the Army and suddenly it was gone. Andrea didn't try to push me anywhere. She helped me figure out who I actually am. That sounds simple but it was not.",
    stars: 5,
  },
  {
    name: "Michelle R.",
    role: "Caregiver",
    text: "Five years caring for my mom with dementia while raising two kids. I was running on empty for so long I thought that was just how life felt. I'm not going to say it's all fixed. But most mornings I wake up feeling like myself again. That matters.",
    stars: 5,
  },
  {
    name: "David K.",
    role: "First Responder",
    text: "I'm a fire captain. Trained to push through, stay calm, keep moving. Turns out I'd been doing that for so long I didn't know how to stop. A coworker recommended Andrea. I figured I'd try it once. Kept going back.",
    stars: 5,
  },
  {
    name: "Lisa W.",
    role: "Corporate Executive",
    text: "I was skeptical, honestly. I'd done years of therapy and it helped but there was still something stuck. I came in expecting to just talk about my problems. What actually happened is hard to describe. I just feel less like I'm fighting myself.",
    stars: 5,
  },
  {
    name: "Roberto A.",
    role: "Marine Veteran",
    text: "I've had people try to help me before. Therapists, programs, the whole VA carousel. Most meant well but I could tell they didn't really get it. Andrea gets it. She's not reading from a script. She's been in it. That made all the difference.",
    stars: 5,
  },
  {
    name: "Tim Thomas",
    role: "Energy Healing Client",
    text: "Andrea did a great job of making me feel safe and protected while she performed her energy healing on me. I was relaxed and saw great images and light as she turned and tuned my chakras. I felt a wellbeing of calm and peacefulness after the session. Thank you for sharing your gift with me.",
    stars: 5,
  },
  {
    name: "Lydia T.",
    role: "Coaching Client",
    text: "Andrea was simply present in a way that meant the world to me. She listened, guided, and supported me without judgment. I was stuck — depressed, anxious, in pain, and so out of shape that I felt like I couldn't move forward in my life. Through small steps, accountability, and coaching, Andrea helped me start moving again. But what helped the most was how deeply she listened and cared. Her heart is huge and she is such a warm, genuine person. That makes it so easy for people to open up to her.",
    stars: 5,
  },
  {
    name: "Joseph N.",
    role: "Fellow Veteran",
    text: "I can't say how much Andrea has helped me. I have served with her overseas in a combat environment and she has earned my trust. I sought out her assistance as I transitioned from working in uniform to civilian dress. It may sound simple but was baffling to me. It was natural to her and she explained and displayed clothing options for every situation. If I ever seek any assistance she provides, I would definitely look to her for assistance.",
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
