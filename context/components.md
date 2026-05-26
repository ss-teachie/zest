# Teachable Webflow Component Library

Always use components from this list. Do not build custom layouts from scratch.
When a task calls for a section, find the right component here first.

---

## Global (Site-Wide — Touch With Caution)
These components appear on every page. Changes affect the entire site. Never modify without explicit approval.

| Component | Notes |
|-----------|-------|
| Global / Styles | Base style definitions |
| Global - Master Nav | Primary navigation |
| Nav Bar | Standard nav |
| Nav Bar - Sales Landing Page | Simplified nav, limited exit points — for sales landing pages only |
| Nav Bar [Enterprise] | Enterprise nav variant |
| Nav Toggle [Banner] | Banner toggle for nav |
| Footer | Site footer |

---

## Sections: Hero
Start every page with a hero. Pick the right variant for the content type.

| Component | Use For |
|-----------|---------|
| Product Page Hero | Feature/product pages |
| Feature Hero | Feature highlight pages |
| Text only Hero | Copy-heavy, no image needed |

---

## Sections: Switchback
Alternating content + image rows. Use for feature lists, benefit breakdowns.

| Component | Notes |
|-----------|-------|
| Main Switchback | Primary switchback section container |
| Switchback Insert - Trailing Image | Image on the right |
| Switchback Insert - Leading Image | Image on the left |
| Switchback - Rectangle Image - Trailing | Rectangle crop, image right |
| Switchback - Rectangle Image - Leading | Rectangle crop, image left |

---

## Sections: Cards
3-column feature cards. Always 3 — don't try to add a 4th.

| Component | Notes |
|-----------|-------|
| Featured Cards Grid | Standard 3-card feature grid |
| Three Card Feature [Section] | Text-only 3-card layout |

---

## Sections: Testimonials & Social Proof

| Component | Notes |
|-----------|-------|
| Testimonials Slider [Section] | Sliding testimonial carousel |
| Single Quote [Section] | One featured pull quote |
| Stats proof [Section] | Key stats with numbers |
| Stats Proof Mobile [Section] | Mobile-optimized stats |
| App ratings [Section] | App store ratings display |
| Case Studies [Section] | Case study cards |
| Logo Proof [Section] | "Trusted by 150,000+ businesses" logo bar |

---

## Sections: Banners / CTA
Use for end-of-page CTAs and mid-page conversion moments.

| Component | Notes |
|-----------|-------|
| CTA Banner - Navy | Navy background CTA |
| CTA Banner - Maroon | Maroon/Bordeaux background CTA |
| CTA Banner - Enterprise | Enterprise-specific CTA |
| Email Submit | Email capture with submit |
| Newsletter CTA | Newsletter signup |
| Events CTA | Event promotion CTA |
| Double Button | Two-button CTA group |

---

## Sections: Text-only

| Component | Notes |
|-----------|-------|
| Why Banner [Section] | "Why Teachable" value prop section |
| Three Card Feature [Section] | Text-only card layout |

---

## Sections: Comparison Charts
For competitor comparison pages. Use static version for most cases — no CMS required.

| Component | Notes |
|-----------|-------|
| Compare - Static | Full comparison table, static version |
| Static Comparison Chart Row | Individual row — add to slots in Compare - Static |
| CMS Chart | CMS-powered version (more complex, check with team first) |

---

## Sections: Marquees
Scrolling content strips. Use for logos, stats, partner brands.

| Component | Notes |
|-----------|-------|
| Marquee - Stats [Section] | Scrolling stats bar |
| Marquee Insert | Individual item inside a marquee |
| Enterprise Marquee | Enterprise-specific marquee |
| Enterprise Marquee Insert | Individual item for enterprise marquee |

---

## Sections: Misc

| Component | Notes |
|-----------|-------|
| FAQs [Section] | FAQ accordion section (ties to CMS) |
| Watch Demo [Section] | Demo video embed section |
| Upcoming Events [Section] | Event listings |
| Security Badges [Section] | Trust/security badges |
| Apps and Integrations [Section] | Integration logos grid |

---

## Sections: Blog

| Component | Notes |
|-----------|-------|
| Blog Hero | Blog post hero |
| Blog Categories | Category filter bar |
| Blog Card | Individual blog post card |
| Blog Featured | Featured post callout |
| PDF Download | Content download CTA |

---

## Pricing
Full pricing page component suite. Don't mix and match arbitrarily — check with team on which to use.

| Component | Notes |
|-----------|-------|
| Pricing Intro [Section] | Top of pricing page |
| Pricing Welcome [Banner] | Welcome/intro banner |
| Pricing Cards [Evergreen] | Standard pricing cards |
| Pricing Cards [Promo] | Promotional pricing variant |
| Pricing Cards [Variant A] | A/B test variant |
| Pricing Card [Label] | Individual label within a card |
| Pricing Matrix [Variant A] | Matrix-style pricing table |
| Pricing Table [4 Columns] | 4-column feature table |
| Pricing Table [5 Column] | 5-column feature table |
| Pricing Table [Special] | Special pricing tier |
| Pricing Table [Transaction Fees] | Transaction fees breakdown |
| Pricing Table [Usage] | Usage-based pricing |
| Pricing Table [Platform Features] | Platform features row |
| Pricing Table [Sales & Marketing] | Sales/marketing features row |
| Pricing Table [Customizations] | Customization features row |
| Pricing Table [Integrations] | Integrations features row |
| Pricing Table [Developer Tools] | Developer tools row |
| Pricing Table [Learning & Support] | Learning/support features row |
| Pricing Features [Starter] | Starter plan features |
| Pricing Features [Builder] | Builder plan features |
| Pricing Features [Growth] | Growth plan features |
| Pricing Features [Advanced] | Advanced plan features |

---

## Buttons
Use these instead of building custom buttons. Most buttons live in the page layout, not as standalone components.

| Component | Notes |
|-----------|-------|
| Button - Change URL | Primary CTA — change the URL, not the style |
| Button - Main CTA - SSO Login | SSO login flow CTA |
| Double Button | Two-button group (primary + secondary) |
| Contact Sales - Enterprise Nav | Enterprise nav contact CTA |

> **Old/deprecated buttons** — do not use:
> - OLD Button [Secondary]
> - OLD Button [Black]

---

## Lists

| Component | Notes |
|-----------|-------|
| Bulleted List - Arrow | Arrow-style bulleted list |
| Icon List | Icon + text list |
| Tools List Item | Use with list section component |

---

## FAQ

| Component | Notes |
|-----------|-------|
| FAQ Accordian | Individual FAQ item |
| FAQ | FAQ section wrapper |

---

## UI Elements

| Component | Notes |
|-----------|-------|
| Tag | Stroked border tag, uppercase, semibold. 1.5px border, 0.25rem radius, letter-spacing 0.05em |

---

## Spacers
Add breathing room between sections without touching layout.

| Component | Notes |
|-----------|-------|
| Huge Spacer - 6 REM | Large gap between sections |
| XSmall Spacer - 0.5 REM | Small gap |

---

## Section Sliders

| Component | Notes |
|-----------|-------|
| Section / Creator Slider | Creator showcase slider |
| Section / Quick Links Slider | Quick links carousel |

---

## Code / Advanced

| Component | Notes |
|-----------|-------|
| Accordion [Code] | Custom code accordion |
| Product Tour Gate | Gated product tour with email capture (code component) |
