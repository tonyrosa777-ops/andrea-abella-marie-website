"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "I spent three years avoiding crowds. Wouldn't go to my kid's soccer games without scoping exits first. Two months with Andrea and I made it through Thanksgiving dinner — whole family, no problem. I didn't think that was possible anymore.",
    name: "Sarah M.",
    role: "Military Veteran",
    stars: 5,
  },
  {
    text: "Twelve years on the job, you build up walls and call it strength. My partner noticed I was different before I did. Something settled. I stopped snapping at people. I'm not sure exactly what shifted but whatever it was, it worked.",
    name: "James R.",
    role: "First Responder",
    stars: 5,
  },
  {
    text: "I kept telling myself I was fine because I was still functioning. Going to work, handling everything. Andrea was the first person to point out that functioning isn't the same as okay. That one conversation changed things.",
    name: "Michelle T.",
    role: "Healthcare Professional",
    stars: 5,
  },
  {
    text: "I make decisions worth millions and I couldn't get through a Sunday without anxiety eating me alive. Tried therapy, medication, retreats. None of it stuck. I'm not the same person I was six months ago.",
    name: "David K.",
    role: "Corporate Executive",
    stars: 5,
  },
  {
    text: "Andrea did a great job of making me feel safe and protected while she performed her energy healing on me. I was relaxed and saw great images and light as she turned and tuned my chakras. I felt a wellbeing of calm and peacefulness after the session. Thank you for sharing your gift with me.",
    name: "Tim Thomas",
    role: "Energy Healing Client",
    stars: 5,
  },
  {
    text: "Andrea was simply present in a way that meant the world to me. She listened, guided, and supported me without judgment. Through small steps, accountability, and coaching, Andrea helped me start moving again. But what helped the most was how deeply she listened and cared. Her heart is huge and she is such a warm, genuine person. That makes it so easy for people to open up to her.",
    name: "Lydia T.",
    role: "Coaching Client",
    stars: 5,
  },
  {
    text: "I served with Andrea overseas in a combat environment and she has earned my trust. I sought out her assistance as I transitioned from uniform to civilian life. It may sound simple but was baffling to me. It was natural to her — she explained and displayed options for every situation. If I ever need any assistance she provides, I would definitely look to her.",
    name: "Joseph N.",
    role: "Fellow Veteran",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Subtle decorative gold marks */}
      <div className="absolute top-12 left-12 opacity-10">
        <span
          className="text-[120px] text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;
        </span>
      </div>
      <div className="absolute bottom-12 right-12 opacity-10">
        <span
          className="text-[120px] text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &rdquo;
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="section-label mb-4">Voices of Healing</p>
          <h2
            className="text-3xl md:text-4xl text-white mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            What Clients <span className="text-gold italic">Say</span>
          </h2>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="flex justify-center mb-6">
                <StarRating count={testimonials[current].stars} />
              </div>
              <p
                className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div>
                <p
                  className="text-gold font-semibold"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {testimonials[current].name}
                </p>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gold w-8"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
