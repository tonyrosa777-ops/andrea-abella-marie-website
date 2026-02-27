"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import Logo from "./Logo";

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 3}s`,
      })),
    []
  );

  return (
    <div className="starfield">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            "--duration": s.duration,
            animationDelay: s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function GoldParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 6 + 6}s`,
        delay: `${Math.random() * 8}s`,
      })),
    []
  );

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="gold-particle"
          style={{
            top: p.top,
            left: p.left,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
        }}
      />
      <Stars />
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo className="w-44 h-40 mx-auto md:mx-0" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Helping You Come Home
              <br />
              <span className="text-gold italic">to Yourself</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto md:mx-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Trauma-Informed Coaching for Veterans &amp; Overwhelmed Professionals
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start"
            >
              <a href="/book" className="btn-gold">
                Begin Your Journey
              </a>
              <a href="#pillars" className="btn-ghost">
                Learn How I Help
              </a>
            </motion.div>
          </div>

          {/* Right: Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative max-w-xs w-full">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/headshots/andrea-headshot-blazer-outdoor.png"
                  alt="Andrea Abella Marie — Trauma-Informed Mindset Coach"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-gold/50 rounded-tr-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-gold/50 rounded-bl-2xl pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8A84E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
