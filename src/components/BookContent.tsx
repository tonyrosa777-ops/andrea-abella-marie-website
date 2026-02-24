"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function BookContent() {
  const [activeTab, setActiveTab] = useState<"book" | "apply">("book");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    background: "",
    whyNow: "",
    commitment: "",
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
              "linear-gradient(135deg, #1B2A4A 0%, #2C4A7C 50%, #1B2A4A 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
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
            Take the First Step
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Begin Your{" "}
            <span className="text-gold italic">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Everything starts with a conversation — not a commitment. Choose how
            you&apos;d like to connect below.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          {/* Tab Switcher */}
          <AnimatedSection>
            <div className="flex rounded-full bg-white border border-gold/20 p-1 mb-12 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab("book")}
                className={`flex-1 py-3 px-6 rounded-full text-sm transition-all ${
                  activeTab === "book"
                    ? "bg-navy text-white"
                    : "text-charcoal/60 hover:text-navy"
                }`}
                style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
              >
                Book a Connection Call
              </button>
              <button
                onClick={() => setActiveTab("apply")}
                className={`flex-1 py-3 px-6 rounded-full text-sm transition-all ${
                  activeTab === "apply"
                    ? "bg-navy text-white"
                    : "text-charcoal/60 hover:text-navy"
                }`}
                style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
              >
                Apply for RISE
              </button>
            </div>
          </AnimatedSection>

          {/* Book a Call Form */}
          {activeTab === "book" && (
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gold/10">
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl text-navy mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    Connection{" "}
                    <span className="text-gold italic">Conversation</span>
                  </h2>
                  <p className="text-sm text-charcoal/60">
                    A free, no-pressure call to see if we&apos;re the right fit.
                  </p>
                </div>

                {/* Calendly placeholder */}
                <div className="bg-parchment rounded-xl p-10 text-center mb-8 border border-gold/10">
                  <svg
                    className="w-12 h-12 text-gold/40 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <p
                    className="text-navy mb-2"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontWeight: 600,
                    }}
                  >
                    Calendar Booking
                  </p>
                  <p className="text-sm text-charcoal/50 mb-4">
                    Calendly or Cal.com embed will appear here
                  </p>
                  <p className="text-xs text-charcoal/40">
                    Integration point for booking calendar
                  </p>
                </div>

                <p className="text-center text-sm text-charcoal/50">
                  Or fill out the form below and Andrea will reach out to
                  schedule:
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Integration point for n8n webhook
                  }}
                  className="mt-6 space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={bookingForm.name}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            name: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={bookingForm.email}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            email: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        I&apos;m interested in
                      </label>
                      <select
                        value={bookingForm.interest}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            interest: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        <option value="">Select one</option>
                        <option value="foundation">
                          Foundation Support ($555/mo)
                        </option>
                        <option value="deep-healing">
                          Deep Healing Container ($1,250/mo)
                        </option>
                        <option value="vip">
                          VIP Healing &amp; Mentorship ($2,500/mo)
                        </option>
                        <option value="health-cost-buffer">
                          Health Cost Buffer Program
                        </option>
                        <option value="single">Single Session</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      Anything you&apos;d like me to know?
                    </label>
                    <textarea
                      value={bookingForm.message}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          message: e.target.value,
                        })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                      placeholder="Share whatever feels right..."
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button type="submit" className="btn-gold">
                      Request a Connection Call
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          )}

          {/* RISE Application */}
          {activeTab === "apply" && (
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gold/10">
                <div className="text-center mb-8">
                  <span
                    className="px-4 py-1.5 bg-gold/10 text-gold text-xs rounded-full uppercase tracking-widest mb-4 inline-block"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Application Required
                  </span>
                  <h2
                    className="text-2xl text-navy mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    RISE Apprenticeship&trade;{" "}
                    <span className="text-gold italic">Application</span>
                  </h2>
                  <p className="text-sm text-charcoal/60 max-w-md mx-auto">
                    This program is for people who are ready — not just
                    interested. Please answer honestly. There are no wrong
                    answers.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Integration point for n8n workflow
                  }}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={applicationForm.name}
                        onChange={(e) =>
                          setApplicationForm({
                            ...applicationForm,
                            name: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm text-navy mb-2"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) =>
                          setApplicationForm({
                            ...applicationForm,
                            email: e.target.value,
                          })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) =>
                        setApplicationForm({
                          ...applicationForm,
                          phone: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                      style={{ fontFamily: "var(--font-ui)" }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      Tell me about yourself and your background
                    </label>
                    <textarea
                      value={applicationForm.background}
                      onChange={(e) =>
                        setApplicationForm({
                          ...applicationForm,
                          background: e.target.value,
                        })
                      }
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                      placeholder="Military service, career, life experiences that led you here..."
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      Why now? What makes this the right time for you?
                    </label>
                    <textarea
                      value={applicationForm.whyNow}
                      onChange={(e) =>
                        setApplicationForm({
                          ...applicationForm,
                          whyNow: e.target.value,
                        })
                      }
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                      placeholder="What's driving your decision to seek support at this point in your life?"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      This program requires deep commitment. Are you ready for
                      that?
                    </label>
                    <textarea
                      value={applicationForm.commitment}
                      onChange={(e) =>
                        setApplicationForm({
                          ...applicationForm,
                          commitment: e.target.value,
                        })
                      }
                      rows={3}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                      placeholder="Be honest — there's no judgment here."
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm text-navy mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontWeight: 600,
                      }}
                    >
                      Anything else you&apos;d like to share?
                    </label>
                    <textarea
                      value={applicationForm.message}
                      onChange={(e) =>
                        setApplicationForm({
                          ...applicationForm,
                          message: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                      style={{ fontFamily: "var(--font-ui)" }}
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button type="submit" className="btn-gold">
                      Submit Application
                    </button>
                    <p className="text-xs text-charcoal/40 mt-3">
                      Applications are reviewed personally by Andrea. You&apos;ll
                      hear back within 48 hours.
                    </p>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
