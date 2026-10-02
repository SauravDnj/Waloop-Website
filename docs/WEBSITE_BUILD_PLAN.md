# WALOOP Website — Build Plan (Phases & Tasks)

Source of truth: `WALOOP_Website_Content_Context_Specification_DETAILED.md` (81 sections).
Brand assets: WALOOP Infinity Connect logo (light/dark lockups + icon) and the Meta Verified badge, stored in `public/brand/`.

Core rule from the spec: **build around the customer journey, not a list of features.**
`CUSTOMER → MESSAGE → CHANNEL → CONVERSATION → CRM → CHATBOT/HUMAN → AUTOMATION → INTERACTIVE EXPERIENCE → PAYMENT → FOLLOW-UP → ANALYTICS`

---

## Phase 0 — Brand & Assets
- [x] 0.1 Trim and export the WALOOP icon (`waloop-icon.png`, `waloop-icon-sm.png`)
- [x] 0.2 Export full lockups for light and dark themes (`waloop-logo-light.png`, `waloop-logo-dark.png`)
- [x] 0.3 Generate favicon, app icon and Apple touch icon from the Infinity icon
- [x] 0.4 Prepare the Meta Verified badge (`meta-verified.png`, background removed)

## Phase 1 — Foundation (design system + data model)
- [x] 1.1 Retheme color tokens from lime/charcoal to the logo palette (blue → cyan → green), light + dark
- [x] 1.2 New `Logo` component (Infinity icon + gradient WALOOP wordmark) and `BrandLockup` (full logo, theme-aware)
- [x] 1.3 `MetaVerifiedBadge` component
- [x] 1.4 Rewrite `lib/content.ts` — site config (spec §60 contact details), navigation (§3), footer (§61), FAQ (§57), CTA library (§58), trust (§67)
- [x] 1.5 `lib/platform.ts` — 10 platform areas, each following the product page template (§73) and messaging framework (§76)
- [x] 1.6 `lib/solutions.ts` (§31–32, §52–55), `lib/industries.ts` (§33–34), `lib/journeys.ts` (§25–30, §45, §47, §69–71)
- [x] 1.7 `FlowDiagram` component — animated, accessible flow diagrams with branches (vertical on mobile, §74–75)
- [x] 1.8 `WhatsAppPhone` conversation mockup (§26) and `MiniAppPhone` interactive stepper (§14, §50)
- [x] 1.9 3D scenes: `InfinityJourney3D` (brand loop + channels flowing in, hero) and `Ecosystem3D` (labeled WALOOP hub, reusable for platform, industries and integrations)

## Phase 2 — Global Layout
- [x] 2.1 Header: Platform / Solutions / Industries / AI / Integrations / Pricing / Resources / Company mega menus; CTAs **Get Started** + **Book a Demo**
- [x] 2.2 Mobile navigation
- [x] 2.3 Footer (§61): brand, tagline, description, 6 link columns, contact, footer CTA, Meta Verified badge
- [x] 2.4 Root metadata + SEO (§62)
- [x] 2.5 Redirect old product URLs to the new platform pages

## Phase 3 — Homepage (§5–8, §38–40, §46–47)
- [x] 3.1 Hero — headline, copy, CTAs, feature strip, 3D journey visual
- [x] 3.2 Trust / platform introduction (capability-based + Meta Verified)
- [x] 3.3 Problem — "Customer Conversations Shouldn't Live in Silos" (silos vs connected visual)
- [x] 3.4 Solution + platform overview — 8 pillars
- [x] 3.5 Platform ecosystem (3D hub)
- [x] 3.6 Platform showcase — Channels, CRM, Chatbots, Automation, Mini-Apps, Payments, Dynamic Experiences, AI (each with a diagram)
- [x] 3.7 Interactive customer journey (§50) + "From First Message to Meaningful Action" (§47)
- [x] 3.8 WhatsApp conversation example (§26)
- [x] 3.9 Use cases, industries, analytics preview, how WALOOP works (§39–40)
- [x] 3.10 Pricing preview, FAQ, final CTA

## Phase 4 — Platform (§9–24, §41–45, §63)
- [x] 4.1 `/platform` overview — ecosystem, pillars, feature matrix (§41), relationship map (§45), dashboard (§43)
- [x] 4.2 `/platform/[slug]` template — hero, problem, solution, features, example, diagram, connections, use cases, FAQ, CTA
- [x] 4.3 Channels · 4.4 CRM · 4.5 Chatbots · 4.6 Automations · 4.7 WhatsApp Mini-Apps
- [x] 4.8 Payments · 4.9 Dynamic Experiences · 4.10 AI · 4.11 Analytics · 4.12 Workspace (incl. Departments, Lead Source, Media Manager, Team & Permissions)

## Phase 5 — Solutions (§31–32, §52–55)
- [x] 5.1 `/solutions` hub with the solution diagram
- [x] 5.2 Lead Generation · Marketing · Sales · Customer Support · Customer Engagement · Business Automation · Payment Journeys

## Phase 6 — Industries (§33–34)
- [x] 6.1 `/industries` hub with the industry wheel
- [x] 6.2 Retail & E-commerce · Education · Healthcare · Real Estate · Financial Services · Travel & Hospitality · Automotive

## Phase 7 — AI & Integrations (§17–18, §35, §56)
- [x] 7.1 AI page (`/platform/ai`, linked as top-level **AI**)
- [x] 7.2 `/integrations` — categories only, no unverified third-party names

## Phase 8 — Commercial (§36–37, §60)
- [x] 8.1 Pricing — Starter ₹15,000/yr, Growth ₹30,000/yr, Enterprise custom; separate-charges notes
- [x] 8.2 Contact — spec contact details, WhatsApp, app link, form
- [x] 8.3 Book a Demo (`/demo`) — demo journey (§69) + form

## Phase 9 — Resources & Company (§57, §59, §72)
- [x] 9.1 `/resources` hub · `/faq` (full FAQ) · `/use-cases` (§27–30, §52–56)
- [x] 9.2 `/docs`, `/guides`, `/support` hubs
- [x] 9.3 Blog refresh
- [x] 9.4 About (§59, §77 brand story)

## Phase 10 — Accuracy & QA (§65–66, §75, §78)
- [x] 10.1 Remove invented claims: customer counts, uptime %, partner counts, named integrations, fake metrics
- [x] 10.2 Remove old product pages not in the spec (Bulk SMS, Missed Call, IVR, Voice AI, Webhook Engine…) and redirect them
- [x] 10.3 Accessibility pass — every diagram has a text explanation, meaningful button labels
- [x] 10.4 Type-check + lint
- [x] 10.5 Final checklist (§78)

---

### Items for the WALOOP team to confirm
- Meta Verified badge: shown at the owner's request. The spec (§66) says to verify partnership and badge claims before publishing.
- Exact channel capabilities, payment gateways, AI content sources and integrations should be confirmed against the live product (§65).
- Replace illustrative dashboard visuals with real screenshots when they're available (§68).

---

## Build status — all phases complete (2026-10-03)

Verified with `next typegen && tsc --noEmit` (0 errors), `eslint .` (0 problems) and `next build` (47 static pages).

### Where things live
| What | Where |
|---|---|
| Brand, nav, footer, FAQ, CTAs, trust | `lib/content.ts` |
| 10 platform areas (page content + diagrams) | `lib/platform.ts` → `/platform/[slug]` |
| 7 solutions | `lib/solutions.ts` → `/solutions/[slug]` |
| 7 industries | `lib/industries.ts` → `/industries/[slug]` |
| Journeys, use cases, demo flow, storyboard | `lib/journeys.ts` |
| Pricing + charge notes | `lib/pricing.ts` |
| Guides / resources | `lib/resources.ts` |
| Flow diagrams | `components/diagrams/FlowDiagram.tsx`, `JourneyRail.tsx` |
| 3D (infinity journey loop, ecosystem hub) | `components/three/` |
| Product illustrations per platform area | `components/visuals/PlatformVisual.tsx` |
| WhatsApp phone mockups | `components/mockups/` |
| Logos + Meta Verified badge | `public/brand/`, `components/layout/Logo.tsx`, `components/brand/` |

### Notes
- Forms open WhatsApp (+91 87580 18450) with the enquiry prefilled; there is no backend form handler.
- Old URLs (`/products/*`, `/features`, `/careers`, `/login`, `/signup`) redirect in `next.config.ts`.
- Privacy Policy and Terms were updated only to match the new product description, so they should get a legal review.
- New lucide icons used in content must be added to `components/ui/DynamicIcon.tsx`.
