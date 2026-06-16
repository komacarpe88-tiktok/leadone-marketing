# LeadOne Marketing — Project Context

## What this is
A high-end local SEO agency website for **LeadOne Marketing**, based in Helsingborg, Sweden.
Everything is in **Swedish**. The brand targets Swedish SMBs (hantverkare, restauranger, tandläkare, etc.).

## Running the site
```bash
npm run dev          # dev server (has a known stale-cache issue — prefer the static serve below)
npm run build        # generates out/ static export
npx serve out -p 3000  # serve the built site locally (preferred for testing)
```

## Tech stack
- **Next.js 14** App Router, `output: "export"` (fully static, no SSR)
- **Tailwind CSS v3** (not v4)
- **Motion** (`motion/react`) for UI animations — all non-scroll components
- **Phosphor Icons** (`@phosphor-icons/react`) — only icon library used, `strokeWidth` 1.5–2
- **Fonts**: Outfit (sans, `--font-outfit`), JetBrains Mono (`--font-mono`), Cormorant Garamond (`--font-cormorant`)
- `images: { unoptimized: true }` — all images are unoptimized for static export

## Design system
- **Theme**: Dark only, never invert sections. Background `#08080A`.
- **Accent**: Gold `#C9A84C`. Hover state: `#D4B87A`. Dim: `rgba(201,168,76,0.1)`.
  — Set in `globals.css` as `--accent` and in `tailwind.config.ts` as `colors.accent`.
  — **No green anywhere.** It was replaced with gold throughout.
- **Surface levels**: `--surface: #111113`, `--surface-elevated: #1A1A1E`
- **Border**: `--border: rgba(255,255,255,0.07)`
- **Radius**: `rounded-full` for buttons, `rounded-2xl` for cards — consistent throughout
- **No em-dashes** in AI-generated copy. User-specified copy may contain them.

## Key files
```
app/
  layout.tsx          — fonts, metadata, chat widget script
  globals.css         — CSS variables (--accent, --border, --surface, etc.)
  page.tsx            — main page, section order
  boka/page.tsx       — /boka booking page with calendar iframe

components/
  Nav.tsx             — fixed nav, scroll-aware blur, phone number
  ScrollVideoSection  — GSAP scroll animation, 121 JPEG frames as ImageBitmaps
  HeroSection         — asymmetric split, ai-network.png right side
  StatsBarSection     — 4 stats (new)
  ProblemSection      — FORE/EFTER comparison (new)
  TrustedBySection    — dual-row marquee, gold monogram marks
  ServicesSection     — 5-cell bento grid
  PricingSection      — 3 pricing cards: LaunchMap™, Omdömesmaskinen, Komplett Paket (new)
  ProcessSection      — 3 vertical steps: Analys / Bygg / Ranka
  ResultsSection      — 3 stats, marble-rays.png bg
  TestimonialsSection — 2-col grid, 4 testimonials
  WhyUsSection        — 3-col grid "Varför LeadOne" (new)
  FAQSection          — accordion, 5 items (new)
  CtaSection          — gold-particles.jpg bg, primary CTA
  FooterSection       — 4-col: brand + 3 link groups
  BookingNav          — minimal nav for /boka page only

public/assets/
  logo.png            — LeadOne gold face logo (used in Nav + Footer)
  hero-bg.mp4         — gold animation video (all-keyframe, 7.4MB, used for frame extraction)
  hero-bg.png         — still frame from video
  frames/             — frame-0001.jpg … frame-0121.jpg (121 JPEG frames at 1280×720, 73KB avg)
  ai-network.png      — hero right-side image
  gold-network.png    — services GBP bento cell bg
  architecture.jpg    — services link-building cell bg
  stars-phone.png     — services review cell bg
  team.jpg            — process Analys step
  handshake.jpg       — process Bygg step
  spiral.jpg          — process Ranka step
  marble-rays.png     — results section bg
  gold-particles.jpg  — CTA section bg
```

## Booking / integrations
- **All CTA buttons** link to `/boka` (internal page)
- **Calendar iframe**: `https://api.leadconnectorhq.com/widget/booking/tLul2UjJ4lCOYMicz8eX`
- **Calendar link**: `https://api.leadconnectorhq.com/widget/bookings/discovery-call-recensionssystem`
- **Chat widget ID**: `69401fe0cd1517fa28a99c85` (loaded in layout.tsx via next/script afterInteractive)
- **Phone**: `076-479 66 30` / `tel:0764796630`
- **Email**: `info@leadone.online`

## Scroll video animation (ScrollVideoSection)
- Loads 121 JPEGs from `/assets/frames/` in parallel via `fetch()`
- Converts each blob to `ImageBitmap` (GPU-resident, pre-decoded) via `createImageBitmap()`
- `drawFrame(progress: 0–1)` cross-fades between adjacent bitmaps for sub-frame smoothness
- GSAP ScrollTrigger: `scrub: 0.7`, pins section for `5 × 100dvh`
- **No Motion imports in this file** — GSAP and Motion must never mix in the same component tree

## Serve / deploy
- Static export goes to `out/`
- Netlify anonymous deploy was used during development (expired)
- To redeploy: `npm run build && netlify deploy --dir=out --prod`
- `netlify.toml` is configured

## What NOT to do
- Don't add Inter as a font — Outfit is the sans-serif
- Don't use purple/blue/green accents — gold only
- Don't invert sections to light mode
- Don't use `window.addEventListener('scroll', ...)` — use GSAP ScrollTrigger or Motion useScroll
- Don't mix GSAP and Motion in the same component
- Don't use `img` tags — use `next/image` with `unoptimized: true` already set globally
