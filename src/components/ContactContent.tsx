"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="section-label mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Let&apos;s{" "}
            <span className="text-gold italic">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Whether you have questions, want to learn more about services, or
            are ready to start — I&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-cream grain-texture">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <AnimatedSection>
                <h2
                  className="text-2xl text-navy mb-8"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Reach <span className="text-gold italic">Out</span>
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-sm text-navy mb-1"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Phone
                      </p>
                      <a
                        href="tel:512-399-6916"
                        className="text-charcoal/70 hover:text-gold transition-colors"
                      >
                        512-399-6916
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-sm text-navy mb-1"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:aandreaabellamarie@gmail.com"
                        className="text-charcoal/70 hover:text-gold transition-colors text-sm"
                      >
                        aandreaabellamarie@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-sm text-navy mb-1"
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Follow Along
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="text-sm text-charcoal/70 hover:text-gold transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="#"
                          className="text-sm text-charcoal/70 hover:text-gold transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href="#"
                          className="text-sm text-charcoal/70 hover:text-gold transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white rounded-2xl border border-gold/10">
                  <p
                    className="text-sm text-navy mb-2"
                    style={{ fontFamily: "var(--font-ui)", fontWeight: 600 }}
                  >
                    Ready to start coaching?
                  </p>
                  <p className="text-sm text-charcoal/60 mb-4">
                    Skip the contact form and book a connection call directly.
                  </p>
                  <a
                    href="/book"
                    className="btn-gold inline-block text-sm !py-2.5 !px-5"
                  >
                    Book a Call
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <AnimatedSection delay={0.1}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Integration point for n8n webhook
                  }}
                  className="bg-white rounded-2xl p-8 md:p-10 border border-gold/10 space-y-6"
                >
                  <h3
                    className="text-xl text-navy mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                    }}
                  >
                    Send a <span className="text-gold italic">Message</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
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
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontWeight: 600,
                        }}
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
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
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold/20 bg-parchment text-charcoal focus:outline-none focus:border-gold transition-colors"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        <option value="">Select a topic</option>
                        <option value="coaching">Coaching Inquiry</option>
                        <option value="rise">RISE Apprenticeship</option>
                        <option value="speaking">Speaking Request</option>
                        <option value="shop">Shop / Orders</option>
                        <option value="other">Other</option>
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
                      Message
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
                      placeholder="Tell me a bit about what brought you here..."
                    />
                  </div>

                  <button type="submit" className="btn-gold">
                    Send Message
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
