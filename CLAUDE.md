# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
```

## Architecture

**Next.js 16 App Router** with TypeScript and Tailwind CSS 4.

### Routing & Page Composition

Every route follows the same pattern:
- `src/app/<route>/page.tsx` — thin page file with metadata export; renders `<Navigation />` + a single content component + `<Footer />`
- `src/components/<Name>Content.tsx` — all the actual JSX for that page lives here

Service sub-routes live under `src/app/services/[coaching|health-cost-buffer|rise-apprenticeship]/`.

### Key Components

- **`AnimatedSection`** — scroll-triggered fade-in wrapper used throughout all page content
- **`Logo`** — renders `/images/logos/logo-light-white-figure.png` via Next.js `<Image fill />`
- **`Navigation`** — client component with mobile menu state
- **`Hero`** — client component with animated starfield + gold particle canvas effects
- **`src/lib/services.ts` / `src/lib/products.ts`** — structured data for coaching tiers, programs, and shop products; update here to change offerings

### Styling Conventions

Custom theme tokens are defined in `src/app/globals.css` under `@theme inline`:
- Colors: `navy`, `gold`, `gold-light`, `cream`, `parchment`, `charcoal`
- Font families: `--font-display` (Playfair Display), `--font-script` (Cormorant Garamond), `--font-body` (Lora), `--font-ui` (Raleway)
- Utility classes: `btn-gold`, `btn-ghost`, `gold-divider`, `section-label`

Animations (`twinkle`, `float-particle`, `bounce-gentle`) and `grain-texture` are also defined in globals.css.

Framer Motion is used for entrance animations. The standard pattern is `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with staggered `transition={{ delay }}`.

### Path Alias

`@/*` maps to `./src/*`.

---

## Client & Brand Reference

**Client:** Andrea Abella Marie
**Business:** Andrea Abella Marie Coaching / Inner Peace Project
**Title:** Trauma-Informed Mindset Coach & Energy Healing Practitioner
**Phone:** 978-790-2181
**Email:** andrea8466@icloud.com
**Tagline:** "Resilience. Healing. One Day At a Time."

### Brand Positioning
This is NOT motivational coaching. It is identity rebuilding for people who already survived — veterans, professionals, and trauma-impacted adults. Tone should feel safe, grounded, and warm — never hyped or pushy.

### Design Philosophy — Two Visual Modes
The site intentionally blends two aesthetics:
- **Cosmic/Spiritual** — deep navy/black + starfields + gold script → used for hero, emotional brand sections
- **Clean/Editorial** — cream/white + structured layouts + blue-gold accents → used for pricing, program details, conversion sections

Transitions between the two should feel intentional.

### Services & Pricing (source of truth — do not change without instruction)
| Service | Price |
|---------|-------|
| Foundation Support | $555/month |
| Deep Healing Container *(Most Popular)* | $1,250/month |
| VIP Healing & Mentorship | $2,500/month |
| Single Session *(when available)* | $333 |
| Health Cost Buffer | $75/session or $300/month |
| RISE Apprenticeship™ | Application required |

### SEO Target Keywords
`trauma-informed coach`, `veteran coaching`, `nervous system regulation coaching`, `identity rebuild coaching`
