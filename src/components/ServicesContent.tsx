"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { coachingTiers, singleSession } from "@/lib/services";

const faqs = [
  {
    q: "How do I know which tier is right for me?",
    a: "We'll explore this together on your connection call. The right level depends on how much nervous system capacity you have right now, what you're navigating, and how quickly you want to move. Most people arrive thinking they need the entry level — and many end up in the Deep Healing Container because they're ready for more than they realized. There's no pressure either way.",
  },
  {
    q: "What is a connection conversation?",
    a: "A free 30-minute call where we get to know each other — your history, what you're carrying, and what you need. Andrea isn't there to pitch you. She's there to find out if she's the right fit. If she isn't, she'll tell you. If she is, you'll feel it.",
  },
  {
    q: "Is this therapy?",
    a: "No. This is coaching, not therapy or medical treatment. Andrea is a certified trauma-informed coach and energy healing practitioner — she works at the intersection of mindset, nervous system regulation, and identity. If you need clinical mental health support, she'll help connect you with the right resources. Many clients work with both a therapist and Andrea simultaneously.",
  },
  {
    q: "Do you work with veterans specifically?",
    a: "Yes — and not just as a specialty. Andrea is a veteran. She spent 8 years in the Navy, was the only woman in her unit through two deployments, and spent 7 years fighting the VA for her 100% service-connected PTSD rating. She understands the identity shifts, the hypervigilance, the way the military trains you to suppress and perform. This isn't a niche she studied. It's a life she lived.",
  },
  {
    q: "Can I switch tiers?",
    a: "Absolutely. Your healing isn't linear, and your support doesn't have to be either. Some clients start at Foundation and move up as they stabilize. Others start at VIP during a crisis and step to Deep Healing for maintenance. We adjust as you evolve.",
  },
  {
    q: "What does $2,500/month actually get me?",
    a: "At the VIP level, you're getting close, continuous access — not just sessions. Weekly 90-minute deep sessions, priority access between sessions, and a coach who knows your nervous system intimately. Most clients at this level describe it as having a co-pilot: someone who sees your patterns before you do and can help you course-correct in real time. The question isn't whether it's expensive. The question is what staying stuck is costing you.",
  },
];

const testimonials = [
  {
    quote:
      "I'd tried other coaches before and always quit after a few weeks. With Andrea, I finally understood why — my nervous system wasn't regulated enough to take in what anyone was saying. She built me a foundation I didn't know I was missing. Four months in, I sleep through the night for the first time in years.",
    name: "Marcus T.",
    role: "Army Veteran, 6 years service",
  },
  {
    quote:
      "I came in functioning — job, family, showing up. But I was running on fumes and didn't realize it. The Deep Healing Container changed how I understand myself. I stopped white-knuckling through every day. I started actually feeling safe in my own life.",
    name: "Sarah K.",
    role: "ER Nurse & Combat Spouse",
  },
  {
    quote:
      "I'd spent 20 years being strong for everyone else. Six months with Andrea at the VIP level and I rebuilt my identity from the inside out. Not who the military made me. Not who trauma made me. Just — me. Worth every dollar.",
    name: "James R.",
    role: "Navy Chief Petty Officer, Retired",
  },
];

const painPoints = [
  {
    title: "You function — but you're running on fumes",
    desc: "High-achieving on the outside. Exhausted, hypervigilant, and running on adrenaline on the inside. You've survived everything life threw at you. But surviving is not the same as living.",
  },
  {
    title: "You've tried to \"just get over it\"",
    desc: "Willpower doesn't heal a dysregulated nervous system. Neither does positive thinking. You already know this — which is why you're here instead of buying another self-help book.",
  },
  {
    title: "You don't know who you are outside of survival mode",
    desc: "Identity shifts — after service, after trauma, after years of being someone else's anchor — leave you feeling like a stranger in your own life. That disorientation has a name, and a path through.",
  },
];

const credentials = [
  { stat: "8 Years", label: "U.S. Navy Service" },
  { stat: "E-6", label: "Petty Officer First Class" },
  { stat: "100%", label: "Service-Connected PTSD" },
  { stat: "M.P.H.", label: "Public Health Nutrition" },
  { stat: "4", label: "Published Books" },
  { stat: "GCA", label: "Certified Coach" },
];

const costOfWaiting = [
  {
    label: "Relationships",
    cost: "Hypervigilance, emotional distance, and reactive patterns erode the connections that matter most.",
  },
  {
    label: "Health",
    cost: "Chronic stress loads the body. Unaddressed nervous system dysregulation shows up as physical symptoms over time.",
  },
  {
    label: "Time",
    cost: "Every year spent surviving instead of living is a year you don't get back. That's the real price.",
  },
];

export default function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            Trauma-Informed Coaching
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            You Already Survived.
            <br />
            <span className="text-gold italic">Now Let&apos;s Help You Live.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            Coaching for veterans, overwhelmed professionals, and
            trauma-impacted adults who are done white-knuckling through their
            days — and ready to feel safe in their own lives again.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/book" className="btn-gold">
              Book Your Free Connection Call
            </a>
            <a href="#coaching-tiers" className="btn-ghost">
              View Coaching Options
            </a>
          </motion.div>
        </div>
      </section>

      {/* Credential Strip */}
      <section className="py-5 border-y border-gold/20" style={{ background: "#0A1845" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <div key={c.stat} className="text-center">
                <p
                  className="text-gold text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.stat}
                </p>
                <p
                  className="text-white/50 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-parchment)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="section-label mb-4">Who This Is For</p>
            <h2
              className="text-3xl md:text-4xl text-navy"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              You Don&apos;t Need More{" "}
              <span className="text-gold italic">Motivation.</span>
              <br />
              You Need to Feel Safe.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gold/10 h-full">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-navy text-lg mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-charcoal/60 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RISE Apprenticeship */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-navy rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span
                  className="px-4 py-1.5 bg-gold text-navy text-xs rounded-full uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                >
                  Flagship Program
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="section-label mb-4">Application Required</p>
                  <h2
                    className="text-3xl md:text-4xl text-white mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    The RISE Apprenticeship&trade;
                  </h2>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    A structured, deeply personalized identity rebuild — for
                    high-functioning, deeply resilient humans who already survived
                    everything, and are ready to stop just surviving.
                  </p>
                  <p
                    className="text-gold/80 italic mb-6 text-base"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;You don&apos;t need to become someone new. You need to
                    feel safe being who you are — again.&rdquo;
                  </p>
                  <p
                    className="text-white/40 text-xs mb-6 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Best for: Veterans · Identity-Shifters · High-Achievers in
                    Crisis
                  </p>
                  <a
                    href="/services/rise-apprenticeship"
                    className="btn-gold inline-block"
                  >
                    Learn More &amp; Apply
                  </a>
                </div>

                <div>
                  <p
                    className="text-gold text-xs uppercase tracking-widest mb-4"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                  >
                    The 8-Phase BLUE Line Framework
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Stabilize",
                      "Decode",
                      "Reclaim Self-Trust",
                      "Rebuild Identity",
                      "Train Confidence",
                      "Expand Capacity",
                      "Integrate",
                      "Mission + Momentum",
                    ].map((phase, i) => (
                      <div key={phase} className="flex items-center gap-2">
                        <span
                          className="text-gold/50 text-xs font-bold w-5 flex-shrink-0"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/70 text-sm">{phase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 1:1 Coaching Tiers */}
      <section
        id="coaching-tiers"
        className="py-20 md:py-28"
        style={{ background: "var(--color-parchment)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-4">1:1 Coaching</p>
            <h2
              className="text-3xl md:text-4xl text-navy"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Choose Your Level of{" "}
              <span className="text-gold italic">Support</span>
            </h2>
            <p
              className="text-charcoal/50 mt-4 text-sm max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Every tier includes trauma-informed facilitation, nervous system
              regulation work, and Andrea&apos;s lived experience as a veteran and
              healer.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {coachingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden card-hover h-full flex flex-col ${
                    tier.badge === "Most Popular"
                      ? "border-2 border-gold shadow-lg"
                      : "border border-gold/10"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span
                        className={`px-4 py-1 text-xs rounded-full uppercase tracking-widest ${
                          tier.badge === "Most Popular"
                            ? "bg-gold text-navy"
                            : "bg-navy text-gold"
                        }`}
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    <h3
                      className="text-xl text-navy mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                      }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className="text-charcoal/50 text-xs mb-5 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {tier.ideal}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span
                        className="text-3xl text-gold"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 900,
                        }}
                      >
                        {tier.price}
                      </span>
                      <span
                        className="text-charcoal/50 text-sm"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {tier.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-charcoal/70"
                        >
                          <svg
                            className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={tier.href}
                      className={`text-center block rounded-full py-3 px-6 text-sm transition-all mb-6 ${
                        tier.badge === "Most Popular"
                          ? "btn-gold"
                          : "border border-gold text-gold hover:bg-gold/10"
                      }`}
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      {tier.cta}
                    </a>

                    {/* Tier testimonial */}
                    <div className="border-t border-gold/10 pt-5 mt-auto">
                      <p
                        className="text-charcoal/60 text-xs leading-relaxed italic mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        &ldquo;{testimonials[i].quote}&rdquo;
                      </p>
                      <p
                        className="text-navy text-xs font-semibold"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        — {testimonials[i].name}
                      </p>
                      <p
                        className="text-charcoal/40 text-xs"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {testimonials[i].role}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Single Session */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gold/20 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex-1">
                  <span
                    className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full uppercase tracking-widest inline-block mb-3"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    {singleSession.note}
                  </span>
                  <h3
                    className="text-xl text-navy mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {singleSession.name}
                  </h3>
                  <p
                    className="text-charcoal/50 text-xs italic mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {singleSession.ideal}
                  </p>
                  <ul className="space-y-1.5 text-sm text-charcoal/70">
                    {singleSession.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center sm:text-right flex-shrink-0">
                  <p
                    className="text-3xl text-gold mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                  >
                    {singleSession.price}
                  </p>
                  <a
                    href="/book"
                    className="btn-gold text-sm whitespace-nowrap inline-block"
                  >
                    Request a Session
                  </a>
                  <p
                    className="text-charcoal/40 text-xs mt-2"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Availability is limited
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Health Cost Buffer */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-4">Preventative Support</p>
            <h2
              className="text-3xl md:text-4xl text-navy"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              The Health Cost Buffer{" "}
              <span className="text-gold italic">Program</span>
            </h2>
            <p
              className="text-charcoal/60 mt-4 max-w-xl mx-auto text-sm"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Small health challenges become costly crises when there&apos;s no
              support in between. This program exists to be that support.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-10 border border-gold/10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3
                    className="text-xl text-navy mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    12 weeks of guided support
                  </h3>
                  <p
                    className="text-gold text-lg mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    $75/session or $300/month
                  </p>
                  <p className="text-sm text-gold/70 italic mb-6">
                    Sliding scale available for veterans, seniors &amp; caregivers
                  </p>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">
                    Preventative support for aging adults, veterans &amp;
                    caregivers — before small health challenges become costly
                    crises.
                  </p>

                  <div className="mb-6">
                    <p
                      className="text-xs uppercase tracking-widest text-gold mb-3"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      What You Walk Away With
                    </p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      {[
                        "Reduced stress-driven health issues",
                        "Delayed need for costly medical interventions",
                        "Stronger self-advocacy skills",
                        "Lower out-of-pocket health expenses",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/services/health-cost-buffer"
                    className="btn-gold inline-block"
                  >
                    Learn More
                  </a>
                </div>

                <div className="space-y-6">
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest text-gold mb-3"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      What We Do Together
                    </p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      {[
                        "Nervous system regulation practices",
                        "Stress & pain management tools",
                        "Support with medical & insurance challenges",
                        "Coaching for self-advocacy & resilience",
                      ].map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      "Non-Medical & Confidential",
                      "Flexible Payment",
                      "Trusted Compassionate Care",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 bg-gold/10 text-gold text-xs rounded-full"
                        style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Cost of Staying Stuck */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">Before You Decide</p>
            <h2
              className="text-3xl md:text-4xl text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              The Real Cost Is{" "}
              <span className="text-gold italic">Waiting</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Staying in survival mode is expensive — it&apos;s just billed
              differently. Lost productivity. Strained relationships. Medical costs
              that climb when stress goes unaddressed. Years of life spent managing
              instead of living. The question isn&apos;t whether you can afford
              this. It&apos;s whether you can afford another year of what
              you&apos;re already doing.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left mb-12">
              {costOfWaiting.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <p
                    className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.cost}
                  </p>
                </div>
              ))}
            </div>

            <a href="/book" className="btn-gold">
              Book Your Free Connection Call
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Getting Started */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-parchment)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label mb-4">How to Begin</p>
            <h2
              className="text-3xl md:text-4xl text-navy mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Getting <span className="text-gold italic">Started</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free Connection Call",
                desc: "A 30-minute conversation — no pitch, no pressure. Andrea listens to where you are, what you're carrying, and whether her approach is the right fit. If it isn't, she'll tell you honestly.",
              },
              {
                step: "02",
                title: "Choose Your Path Together",
                desc: "Based on your conversation, Andrea will recommend the right level of support. You decide. There's no upsell — just an honest match between your needs and the work.",
              },
              {
                step: "03",
                title: "First Session Within a Week",
                desc: "Once you're in, you're in. Your first session starts the real work: mapping your nervous system, identifying your patterns, and building the foundation for what comes next.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <span
                    className="text-5xl text-gold/20"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-lg text-navy mt-2 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Common Questions</p>
              <h2
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Frequently <span className="text-gold italic">Asked</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-white/5 border border-white/10 rounded-xl p-5 transition-all hover:border-gold/30"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3
                      className="text-white text-sm md:text-base"
                      style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                    >
                      {faq.q}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openFaq === i && (
                    <p className="text-white/60 text-sm mt-3 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream grain-texture text-center">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl text-navy mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Ready to Begin Your{" "}
              <span className="text-gold italic">Journey?</span>
            </h2>
            <p className="text-charcoal/70 mb-3 max-w-lg mx-auto">
              It starts with a conversation — not a commitment. Book your free
              connection call and let&apos;s find out what healing looks like for
              you.
            </p>
            <p
              className="text-charcoal/40 text-xs mb-10 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              No pressure. No pitch. Just an honest conversation.
            </p>
            <a href="/book" className="btn-gold">
              Book Your Connection Call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
