# Andrea Abella Marie — Project To-Do

---

## Blog ← IN SCOPE (included in $5,500 package)

### Infrastructure
- [x] Create `/src/app/blog/[slug]/page.tsx` dynamic route
- [x] Create `/src/components/BlogPostContent.tsx` template (header, body, author card, related posts, newsletter CTA)
- [x] Create `src/lib/blog.ts` with full article body copy for each post

### 8 Blog Posts to Write (full body copy)
- [x] `why-toxic-positivity-fails` — Why "Just Stay Positive" Doesn't Work for Trauma Survivors *(Nervous System · Featured)*
- [x] `identity-after-service` — Who Am I Now? Rebuilding Identity After Military Service *(Veteran Life · Featured)*
- [x] `emotional-resilience-myth` — Emotional Resilience Isn't About Being Strong All the Time *(Emotional Resilience)*
- [x] `energy-healing-explained` — What Is Energy Healing & How Can It Support Trauma Recovery? *(Energy Healing)*
- [x] `rebuilding-self-trust` — How to Rebuild Self-Trust After It's Been Broken *(Identity Rebuilding)*
- [x] `mindset-shifts-trauma` — 3 Mindset Shifts That Changed Everything in My Healing Journey *(Mindset)*
- [x] `veterans-civilian-life` — The Hardest Part of Civilian Life Nobody Talks About *(Veteran Life)*
- [x] `nervous-system-dysregulation` — Signs Your Nervous System Is Dysregulated (And What to Do About It) *(Nervous System)*

---

## Shop ← IN SCOPE (included in $5,500 package)

### Andrea's Own Inventory (limited stock — she ships herself)
These are NOT print-on-demand. Andrea holds physical inventory and fulfills orders herself.
- [ ] Add custom necklace product to shop (display as "limited stock — 10 left")
- [ ] Add custom earrings product to shop (display as "limited stock — 10 left")
- [ ] Decide on checkout flow for these items (contact form to order, PayPal, or Stripe direct)
- [ ] Clarify pricing with Andrea for necklace + earrings

### Printify — Build Products (print-on-demand, infinite stock)
- [ ] Create Printify account / connect store
- [ ] Build each product in Printify with brand designs:
  - [ ] T-Shirt (all-over print, white)
  - [ ] Mug (white/black handle)
  - [ ] Water Bottle (light blue)
  - [ ] Keychain (acrylic logo)
  - [ ] Pen (white branded)
  - [ ] Shot Glass
  - [ ] Logo Earrings
  - [ ] Bucket Hat
  - [ ] Glass Tumbler
  - [ ] Stainless Steel Tumbler (tall, straw, white)
  - [ ] Crossbody Bag (black)
  - [ ] Round Crossbody / Meditation Bag (white)
  - [ ] Spiral Notebook / Journal
  - [ ] Compact Umbrella

### Printify — Site Integration
- [ ] Connect Printify API to the shop
- [ ] Replace "Add to Cart" buttons with live buy/cart functionality
- [ ] Pull real product images from Printify mockups (replace placeholder paths in `/public/images/products/`)
- [ ] Configure bundle pricing and fulfillment logic

---

## Booking ← IN SCOPE

- [ ] Wire in Andrea's Calendly API to make the booking widget live in `src/components/BookContent.tsx`

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
- [ ] Set up environment variables for Printify API + Calendly
