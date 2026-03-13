"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useCart } from "@/lib/cart";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Speaking", href: "/speaking" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Logo
            className={`transition-all duration-300 ${
              scrolled ? "w-12 h-12" : "w-16 h-16"
            }`}
          />
          <div className="flex flex-col">
            <span
              className="text-lg tracking-wide text-white leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Andrea Abella Marie
            </span>
            <span
              className="text-[9px] tracking-[2px] uppercase text-gold-light"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Resilience. Healing. One Day At a Time.
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm text-white/80 hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-ui)", fontWeight: 400 }}
            >
              {link.name}
            </a>
          ))}
          {/* Cart icon */}
          <button
            onClick={openCart}
            className="relative text-white/80 hover:text-gold transition-colors p-1"
            aria-label={`Cart (${count} items)`}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-gold text-navy text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                style={{ fontFamily: "var(--font-ui)", fontWeight: 700 }}
              >
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>
          <a href="/book" className="btn-gold text-sm !py-2.5 !px-6">
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gold transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-gold transition-colors py-2"
                  style={{ fontFamily: "var(--font-ui)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/book"
                className="btn-gold text-center text-sm mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
