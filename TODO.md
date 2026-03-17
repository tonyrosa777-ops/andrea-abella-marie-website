# Andrea Abella Marie — Project To-Do

---

## Blog ← IN SCOPE (included in $5,500 package)

### Infrastructure
- [x] Create `/src/app/blog/[slug]/page.tsx` dynamic route
- [x] Create `src/components/BlogPostContent.tsx` template (header, body, author card, related posts, newsletter CTA)
- [x] Create `src/lib/blog.ts` with full article body copy for each post

### 8 Blog Posts to Write (full body copy)
- [x] All 8 posts complete (toxic positivity, identity after service, emotional resilience, energy healing, rebuilding self-trust, mindset shifts, veterans civilian life, nervous system dysregulation)

---

## Shop ← IN SCOPE (included in $5,500 package)

**Note:** Site uses **Printful** (not Printify) for print-on-demand. Products are seeded in Printful; designs live in `/public/images/designs/`.

### 🔴 Critical — Fulfillment Fix (blocks orders)
- [ ] **Fix Printful variant ID flow** — Cart stores sync product ID; webhook needs `printful_variant_id` (sync variant ID) to create orders. Currently customers pay but no Printful order is created.
- [ ] Add variant selection (size/color) OR default variant per product before Add to Cart
- [ ] Pass `printful_variant_id` through cart → Stripe checkout metadata → webhook

### Product Design — Quality & Iteration
- [ ] Finish designing store products to a quality level people will actually buy
- [ ] Use AI-assisted design iteration: generate concepts → preview on mockups → refine
- [ ] Design assets live in `public/images/designs/` (light/dark tagline, quotes, apparel designs)
- [ ] Consider: agent-based workflow for design variants (logo placement, typography, color combos)

### Printful Products (print-on-demand)
Products exist in Printful; designs need polish/iteration:
- [x] Tees, hoodies, sweatshirts, long sleeve (Resilience, Becoming, Grounded, Still Standing, Healing)
- [x] Mugs, tumblers, water bottle
- [x] Tote, drawstring bag
- [x] Throw blanket, journal, poster, throw pillow
- [x] iPhone/Samsung cases, beanie
- [ ] Review mockups; iterate designs until print-ready quality

### Andrea's Own Inventory (limited stock — she ships herself)
- [ ] Add custom necklace product (display as "limited stock — 10 left")
- [ ] Add custom earrings product (display as "limited stock — 10 left")
- [ ] Decide checkout flow (contact form, PayPal, or Stripe)
- [ ] Clarify pricing with Andrea

### Bundles
- [x] Bundles use "Inquire" (mailto) — intentional; no Add to Cart

---

## Payments & Checkout

- [ ] **Get Stripe API keys** — `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` (current integration uses Stripe Checkout)
- [ ] **Snipcart + Stripe** — If switching to Snipcart: evaluate vs current custom Stripe + Printful flow. Current setup: Stripe Checkout + Printful webhook. Snipcart would replace the cart/checkout layer.
- [ ] Add env vars to production: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `PRINTFUL_API_KEY`

---

## Booking ← IN SCOPE

- [ ] Wire in Andrea's **Calendly API** to make the booking widget live in `src/components/BookContent.tsx`

---

## Pending — Waiting on Andrea

- [ ] Get final pricing for custom necklace
- [ ] Get final pricing for custom earrings
- [ ] Confirm checkout flow preference for inventory items (contact-to-order, PayPal, or Stripe)

---

## UPSELLS (not in current package — separate proposals)

- AI & Automation integrations
- Email service / newsletter platform (ConvertKit, etc.)
- Contact form backend / CRM
- Brand photography + content shoots
- Testimonials management
- Speaking page event dates / booking flow
- Additional blog posts beyond the 8 included

---

## Technical / Launch

- [ ] SEO: add `openGraph` images to all route metadata
- [ ] Connect custom domain
- [ ] Set up analytics (Vercel Analytics or Google Tag Manager)
- [ ] Final cross-browser / mobile QA pass
- [ ] Accessibility audit (color contrast, focus states, alt text)
