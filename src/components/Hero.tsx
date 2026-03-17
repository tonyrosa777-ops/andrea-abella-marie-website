"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Logo from "./Logo";

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 220 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.15 ? Math.random() * 2.5 + 2 : Math.random() * 1.5 + 0.5,
        duration: `${Math.random() * 5 + 2}s`,
        delay: `${Math.random() * 5}s`,
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
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        top: `${50 + Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 8 + 6}s`,
        delay: `${Math.random() * 10}s`,
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

/* Light rays + glowing core rising from bottom center */
function CosmicSunrise() {
  const OX = 1000;  // SVG origin X
  const OY = 1350;  // SVG origin Y — well below viewport
  const LENGTH = 2600;

  const rays = [
    { angle: -82, spread: 5,  opacity: 0.55 },
    { angle: -70, spread: 7,  opacity: 0.65 },
    { angle: -58, spread: 6,  opacity: 0.60 },
    { angle: -46, spread: 8,  opacity: 0.70 },
    { angle: -34, spread: 7,  opacity: 0.65 },
    { angle: -22, spread: 10, opacity: 0.75 },
    { angle: -11, spread: 8,  opacity: 0.72 },
    { angle:   0, spread: 12, opacity: 0.80 },
    { angle:  11, spread: 8,  opacity: 0.72 },
    { angle:  22, spread: 10, opacity: 0.75 },
    { angle:  34, spread: 7,  opacity: 0.65 },
    { angle:  46, spread: 8,  opacity: 0.70 },
    { angle:  58, spread: 6,  opacity: 0.60 },
    { angle:  70, spread: 7,  opacity: 0.65 },
    { angle:  82, spread: 5,  opacity: 0.55 },
  ];

  const toRad = (d: number) => (d * Math.PI) / 180;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG ray beams — screen blend makes them GLOW over the blue bg */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 2000 1100"
        preserveAspectRatio="xMidYMax slice"
        style={{ mixBlendMode: "screen" }}
      >
        <defs>
          {/* Single shared gradient: bright at source, fades upward */}
          <linearGradient
            id="rayGrad"
            x1={OX} y1={OY} x2={OX} y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#FFF8D0" stopOpacity="1.0" />
            <stop offset="4%"   stopColor="#FFB830" stopOpacity="0.90" />
            <stop offset="18%"  stopColor="#C87A10" stopOpacity="0.45" />
            <stop offset="50%"  stopColor="#A05808" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#703500" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {rays.map((ray, i) => {
          const r1 = toRad(ray.angle - ray.spread / 2);
          const r2 = toRad(ray.angle + ray.spread / 2);
          return (
            <polygon
              key={i}
              points={[
                `${OX},${OY}`,
                `${OX + Math.sin(r1) * LENGTH},${OY - Math.cos(r1) * LENGTH}`,
                `${OX + Math.sin(r2) * LENGTH},${OY - Math.cos(r2) * LENGTH}`,
              ].join(" ")}
              fill="url(#rayGrad)"
              opacity={ray.opacity}
            />
          );
        })}
      </svg>

      {/* Bright white-gold core — screen blend keeps it glowing */}
      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "65%",
          background:
            "radial-gradient(ellipse at 50% 100%, #FFFBE0 0%, #FFD040 3%, #FF8C10 10%, #C86008 22%, #7A3500 40%, transparent 62%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Soft warm atmosphere underneath everything */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "45%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(200,100,10,0.30) 0%, rgba(160,70,5,0.12) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* Neural tendrils in top corners */
function NeuralTendrils() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 opacity-30 pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path d="M0 0 C60 40, 120 20, 180 80 C210 110, 190 160, 240 180" stroke="#C8A84E" strokeWidth="0.8" opacity="0.7"/>
        <path d="M0 40 C50 60, 100 40, 140 100 C160 130, 150 170, 200 190" stroke="#C8A84E" strokeWidth="0.5" opacity="0.5"/>
        <path d="M180 80 C200 60, 220 50, 260 70" stroke="#C8A84E" strokeWidth="0.5" opacity="0.4"/>
        <path d="M140 100 C155 80, 170 75, 200 85" stroke="#C8A84E" strokeWidth="0.4" opacity="0.4"/>
        <path d="M0 80 C30 90, 70 85, 100 120 C120 145, 110 175, 150 185" stroke="#C8A84E" strokeWidth="0.4" opacity="0.4"/>
        <circle cx="180" cy="80" r="2.5" fill="#C8A84E" opacity="0.7"/>
        <circle cx="140" cy="100" r="1.8" fill="#C8A84E" opacity="0.6"/>
        <circle cx="100" cy="120" r="1.5" fill="#C8A84E" opacity="0.5"/>
      </svg>
      <svg
        className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 opacity-30 pointer-events-none"
        viewBox="0 0 300 300"
        fill="none"
        style={{ transform: "scaleX(-1)" }}
      >
        <path d="M0 0 C60 40, 120 20, 180 80 C210 110, 190 160, 240 180" stroke="#C8A84E" strokeWidth="0.8" opacity="0.7"/>
        <path d="M0 40 C50 60, 100 40, 140 100 C160 130, 150 170, 200 190" stroke="#C8A84E" strokeWidth="0.5" opacity="0.5"/>
        <path d="M180 80 C200 60, 220 50, 260 70" stroke="#C8A84E" strokeWidth="0.5" opacity="0.4"/>
        <path d="M140 100 C155 80, 170 75, 200 85" stroke="#C8A84E" strokeWidth="0.4" opacity="0.4"/>
        <path d="M0 80 C30 90, 70 85, 100 120 C120 145, 110 175, 150 185" stroke="#C8A84E" strokeWidth="0.4" opacity="0.4"/>
        <circle cx="180" cy="80" r="2.5" fill="#C8A84E" opacity="0.7"/>
        <circle cx="140" cy="100" r="1.8" fill="#C8A84E" opacity="0.6"/>
        <circle cx="100" cy="120" r="1.5" fill="#C8A84E" opacity="0.5"/>
      </svg>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Rich royal blue base — matches the inspiration */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #060F2E 0%, #0D1F5C 35%, #1A3FA0 65%, #0D1F5C 100%)",
        }}
      />

      {/* Nebula band diagonal */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg, transparent 25%, rgba(60,30,180,0.20) 45%, rgba(30,60,200,0.15) 58%, transparent 78%)",
        }}
      />

      <Stars />
      <CosmicSunrise />
      <GoldParticles />
      <NeuralTendrils />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo className="w-44 h-40 mx-auto drop-shadow-[0_0_30px_rgba(200,168,78,0.6)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            textShadow: "0 2px 40px rgba(0,0,0,0.8)",
          }}
        >
          Helping You Come Home
          <br />
          <span className="text-gold italic" style={{ textShadow: "0 0 40px rgba(200,168,78,0.5)" }}>
            to Yourself
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Trauma-Informed Coaching for Veterans &amp; Overwhelmed Professionals
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="/book" className="btn-gold">Begin Your Journey</a>
          <a href="#pillars" className="btn-ghost">Learn How I Help</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A84E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
