# Teachable Design Tokens — Reference

Design system tokens sourced directly from the Teachable Webflow variable system. Use this file to look up color, typography, spacing, border, and layout values. CSS custom properties are used throughout — the same variables live in the Webflow site and in the `dist/tokens.css` package.

---

## Design Principles

These come directly from the Teachable brand team and apply to all generated UI and Webflow work:

- **Less is more.** Restraint creates quality.
- **Flat looks great.** Default to flat color — not everything needs a gradient.
- **We're going for clean.** Avoid drop shadows, colored boxes behind text, and unnecessary strokes.
- **Consistency ≠ Repetitive.** Use the system, not the same layout every time.
- **Don't be afraid of Teachable Lemon.** It's the brand. Use it confidently.
- **Use the tertiary palette with care.** Events and accents only — not defaults.
- **Don't go tint-crazy.** Tints are for utility states, not decoration.
- **Teachable Lemon (`--brand--lemon`) appears in every single standalone communication.**

---

## Fonts

Two typefaces define the Teachable visual voice. Always apply via CSS variable.

| Role | CSS Variable | Google Font | Notes |
|------|-------------|-------------|-------|
| Headlines, Subtitle A | `var(--font-family--heading)` | **Merriweather** | H1–H3, editorial serif. 100–110% line-height. |
| Eyebrow, Body, Subtitle B, UI | `var(--font-family--body)` | **DM Sans** | H4–H6, paragraphs, labels. 135% line-height. |
| Buttons | `var(--font-family--body)` | **DM Sans** | SemiBold (600) weight |

**Typography roles:**
- **Eyebrow** — DM Sans SemiBold, uppercase, 135% line-height
- **Headlines (H1–H3)** — Merriweather Regular, 100–110% line-height
- **Large Paragraph** — DM Sans Regular, 135% line-height
- **Subtitle A** — Merriweather Regular, 100–110% line-height
- **Subtitle B** — DM Sans Medium, 135% line-height
- **Body / Text** — DM Sans Regular, 135% line-height

---

## Color Palette

### Color Hierarchy

| Tier | Usage | Colors |
|------|-------|--------|
| **Primary + Neutral** | ~70% — these ARE the brand | Lemon, Light Lemon, Black, White, Navy, Charcoal, Warm Gray, Cool Beige |
| **Secondary** | ~20% — support and visual pacing | Bordeaux, Cabernet, Olive |
| **Tertiary** | ~10% — events, seasonal, accents | Turquoise, Peach, Violet |

> **Teachable Lemon (`--brand--lemon`) must appear in every standalone communication.**

### Primary Colors

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--lemon` | `#e6ff32` | Primary CTA, highlights, every standalone piece |
| `--brand--light-lemon` | `#f8ffc6` | Secondary CTA, soft accents, section tints |
| `--brand--navy` | `#112846` | Dark primary, enterprise sections, B2B |
| `--neutral--black` | `#000000` | Default text, borders, dark backgrounds |
| `--neutral--white` | `#ffffff` | Page backgrounds, card backgrounds |

### Neutral Colors

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--charcoal` | `#4e4e4e` | Dark neutral text, secondary dark backgrounds |
| `--brand--warm-gray` | `#d1ceb3` | Warm neutral backgrounds, dividers |
| `--cool-beige` | `#f6f2ee` | Warm section backgrounds, alternating rows |

### Secondary Colors (~20%)

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--bordeaux` | `#651a1a` | Graphic elements, data viz, social |
| `--brand--cabernet` | `#7f2a23` | Graphic elements, data viz, social |
| `--brand--olive` | `#466301` | Graphic elements, data viz, social |

### Tertiary Colors (~10% — use with care)

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--turquoise` | `#b6f2e8` | Events, seasonal, specialty accents |
| `--brand--peach` | `#f5a87a` | Events, seasonal, specialty accents |
| `--brand--violet` | `#c9b8f0` | Events, seasonal, specialty accents |

### Section Background Order

Alternate backgrounds create visual rhythm. Use in this sequence:

1. `var(--neutral--white)` — default
2. `var(--cool-beige)` — warm alternate
3. `var(--brand--light-lemon)` — lemon tint highlight
4. `var(--enterprise-colors--dark-olive)` — dark hero sections (`#1c2600`)
5. `var(--brand--navy)` — enterprise/B2B sections

Never use pure black (`#000`) as a section background — use dark olive or navy instead.

### Semantic UI Colors (in-app components only)

Use `--_apps---colors--*` tokens for shadcn-style components (cards, inputs, badges):
- Primary action: `--_apps---colors--primary` (`#a7bc00`)
- Background: `--_apps---colors--background`
- Foreground: `--_apps---colors--foreground`

> **`--_apps---colors--primary` (`#a7bc00`) is only for in-app UI.** Marketing CTAs always use `--brand--lemon` (`#e6ff32`).

---

## Typography Scale

| Level | CSS Variable | Desktop Size | Font | Line-height |
|-------|-------------|--------------|------|-------------|
| H1 | `--_typography---h1--h1-font-size` | 5rem | Merriweather | 1.0 |
| H2 | `--_typography---h2--h2-font-size` | 4rem | Merriweather | 1.1 |
| H3 | `--_typography---h3--h3-font-size` | 3rem | Merriweather | 1.1 |
| H4 | `--_typography---h4--h4-font-size` | 1.5rem | DM Sans 800 | 1.35 |
| H5 | `--_typography---h5--h5-font-size` | 1.25rem | DM Sans 800 | 1.35 |
| H6 | `--_typography---h6--h6-font-size` | 0.875rem | DM Sans 800 | 1.35 |
| Body | `--_typography---body--body-font-size` | 1.3rem | DM Sans | 1.35 |
| Small | `--_typography---font-size--small` | 0.875rem | DM Sans | 1.35 |
| Large | `--_typography---font-size--large` | 1.5rem | DM Sans | 1.35 |

---

## Spacing

| Token | Value | px equiv |
|-------|-------|---------|
| `--_layout---spacing--xsmall` | 0.5rem | 8px |
| `--_layout---spacing--small` | 1rem | 16px |
| `--_layout---spacing--medium` | 2rem | 32px |
| `--_layout---spacing--large` | 3rem | 48px |
| `--_layout---spacing--xlarge` | 4rem | 64px |
| `--_layout---spacing--huge` | 6rem | 96px |
| `--_layout---spacing--xhuge` | 8rem | 128px |
| `--_layout---section-padding--small` | 2rem | — |
| `--_layout---section-padding--medium` | 5rem | — |
| `--_layout---section-padding--large` | 8rem | — |
| `--_layout---spacing--global-padding` | 2rem | — |
| `--_layout---spacing--hero-top-padding` | 14rem | — |

---

## Borders & Radius

| Token | Value | Use for |
|-------|-------|---------|
| `--_sizes---border-width--thin` | 1px | Default borders, button borders |
| `--_sizes---border-width--normal` | 0.125rem | Medium borders |
| `--_sizes---border-width--bold` | 0.25rem | Heavy borders |
| `--_sizes---border-radius--small` | 0.25rem | Inputs, tags |
| `--_sizes---border-radius--medium` | 0.6rem | Cards |
| `--_sizes---border-radius--large` | 1rem | Modals, popovers |
| `--_sizes---border-radius--xlarge` | 1.5rem | Large cards |
| `--_sizes---border-radius--full` | 9999px | Pill buttons, badges |

Teachable uses **pill-shaped** (`border-radius--full`) CTAs prominently.

---

## Container Widths

| Token | Value | Use for |
|-------|-------|---------|
| `--_sizes---container--small` | 48rem | Narrow content, blog posts |
| `--_sizes---container--medium` | 68rem | Standard page content |
| `--_sizes---container--large` | 86rem | Full-width marketing sections |

Center containers with `margin: 0 auto` and `padding: 0 var(--_layout---spacing--global-padding)`.

---

## Key Patterns

> All values below are verified against Webflow production — these are the exact values used on teachable.com.

### Button specs

- **Primary (Lemon):** lemon background, 1px solid black border, pill radius, asymmetric padding (0.9rem top / 1.1rem bottom / 1.5rem sides), DM Sans SemiBold
- **Dark/inverted:** black background, white text, 1px solid black border, same padding
- **Navy:** navy background, white text, navy border, same padding
- The asymmetric vertical padding (0.9 top / 1.1 bottom) is intentional — it creates optical centering

### Eyebrow / Section Label

DM Sans SemiBold, uppercase, `letter-spacing: 0.05em`, `font-size: var(--_typography---font-size--small)`

### Tag / Badge

Stroked border (1.5px, not filled), `border-radius: var(--_sizes---border-radius--small)`, DM Sans SemiBold, uppercase, `letter-spacing: 0.05em`
