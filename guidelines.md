# make-able — Teachable Design System Guidelines for Figma Make

Use this package to generate UI that looks native to [teachable.com](https://teachable.com).
Always import the tokens CSS and reference CSS custom properties or the `theme` object.

## Setup

```tsx
import 'make-able/tokens.css'
import { theme } from 'make-able'
```

---

## Design Principles

These come directly from the Teachable brand team and apply to all generated UI:

- **Less is more.** Restraint creates quality.
- **Flat looks great.** Not everything needs a gradient. Default to flat color.
- **We're going for clean.** Avoid drop shadows, boxes, and unnecessary strokes.
- **Consistency = Brand Recognition ≠ Repetitive.** Use the system, not the same layout every time.
- **Don't be afraid of Teachable Lemon.** It's the brand. Use it confidently.
- **Use the tertiary palette with care.** It adds flexibility and energy — it's for accents and events, not defaults.
- **Don't go tint-crazy.** Tints are for utility, not decoration.
- **Avoid AI "tells"** — no colored boxes behind text, no pill shapes used decoratively, no drop shadows on everything.
- **Teachable Lemon (`--brand--lemon`) appears in every single standalone communication.**

---

## Fonts

Two typefaces define the Teachable voice. Always apply via CSS variable — never hardcode font names.

| Role | CSS Variable | Google Font | Notes |
|------|-------------|-------------|-------|
| Headlines, Subtitle A | `var(--font-family--heading)` | **Merriweather** | H1–H3, editorial serif. 100–110% line-height. |
| Eyebrow, Body, Subtitle B, UI | `var(--font-family--body)` | **DM Sans** | H4–H6, paragraphs, labels. 135% line-height. |
| Buttons | `var(--font-family--body)` | **DM Sans** | Mimics Peridot PE Variable — use SemiBold (600) weight |

> **Why Merriweather?** DM Serif is a closer visual match to IvyPresto Headline, but it only ships with one weight, making it impractical. Merriweather covers the full weight range needed for the type system.

**Typography roles:**
- **Eyebrow** — DM Sans SemiBold, 135% line-height (small text above headlines)
- **Headlines (H1–H3)** — Merriweather Regular, 100–110% line-height
- **Large Paragraph** — DM Sans Regular, 135% line-height
- **Subtitle A** — Merriweather Regular, 100–110% line-height (serif subtitles, like section sub-heads)
- **Subtitle B** — DM Sans Medium, 135% line-height (sans-serif subtitles)
- **Text / Body** — DM Sans Regular, 135% line-height

**Critical:** Always use typographer quotes (" ") — not straight quotes (" "). Never let one word fall alone onto a new line (avoid orphans).

---

## Color Palette

### Color Hierarchy

Colors are organized into three tiers. This ratio guides how often each tier appears in a design:

| Tier | Usage | Colors |
|------|-------|--------|
| **Primary + Neutral** | ~70% — these ARE the Teachable brand | Lemon, Light Lemon, Black, White, Navy + Charcoal, Warm Gray, Cool Beige |
| **Secondary** | ~20% — support and visual pacing | Bordeaux, Cabernet, Olive |
| **Tertiary** | ~10% — flexibility and energy (events, social, accents) | Turquoise, Peach, Violet |

> **Teachable Lemon (`--brand--lemon`) must appear in every single standalone communication.**

---

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

### Secondary Colors (~20% usage)

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--bordeaux` | `#651a1a` | Graphic elements, data viz, social |
| `--brand--cabernet` | `#7f2a23` | Graphic elements, data viz, social |
| `--brand--olive` | `#466301` | Graphic elements, data viz, social |

### Tertiary Colors (~10% usage — use with care)

| Token | Value | Use for |
|-------|-------|---------|
| `--brand--turquoise` | `#b6f2e8` | Events, seasonal, specialty accents |
| `--brand--peach` | `#f5a87a` | Events, seasonal, specialty accents |
| `--brand--violet` | `#c9b8f0` | Events, seasonal, specialty accents |

> Tertiary colors add flexibility and energy. Use them alongside primary and secondary colors for brand cohesion — not in isolation.

### Section Background Colors

Alternate backgrounds create visual rhythm. Use in this order:

1. `var(--neutral--white)` — default
2. `var(--cool-beige)` — warm alternate
3. `var(--brand--light-lemon)` — lemon tint highlight
4. `var(--enterprise-colors--dark-olive)` — dark hero sections (`#1c2600`)
5. `var(--brand--navy)` — enterprise/B2B sections (`#112846`)

Never use pure black (`#000`) as a section background — use dark olive or navy instead.

### Semantic UI Colors (for app-like components)

Use the `--_apps---colors--*` tokens for shadcn-style components (cards, inputs, badges):
- Primary action: `--_apps---colors--primary` (`#a7bc00`)
- Background: `--_apps---colors--background`
- Foreground: `--_apps---colors--foreground`

Note: `--_apps---colors--primary` (`#a7bc00`) is **only** for in-app UI. Marketing CTAs always use `--brand--lemon` (`#e6ff32`).

---

## Typography Scale

Always use CSS variables for font sizes — never hardcode rem values.

| Level | CSS Variable | Desktop Size | Font | Line-height |
|-------|-------------|--------------|------|-------------|
| H1 | `--_typography---h1--h1-font-size` | 5rem | Merriweather | 1.0 |
| H2 | `--_typography---h2--h2-font-size` | 4rem | Merriweather | 1.1 |
| H3 | `--_typography---h3--h3-font-size` | 3rem | Merriweather | 1.1 |
| H4 | `--_typography---h4--h4-font-size` | 1.5rem | DM Sans (800) | 1.35 |
| H5 | `--_typography---h5--h5-font-size` | 1.25rem | DM Sans (800) | 1.35 |
| H6 | `--_typography---h6--h6-font-size` | 0.875rem | DM Sans (800) | 1.35 |
| Body | `--_typography---body--body-font-size` | 1.3rem | DM Sans | 1.35 |
| Small | `--_typography---font-size--small` | 0.875rem | DM Sans | 1.35 |
| Large | `--_typography---font-size--large` | 1.5rem | DM Sans | 1.35 |

Heading sizes (H1–H3) are large and editorial — lean into this. Teachable's marketing pages use big, confident type.

---

## Spacing

Use the spacing scale for all margins, padding, and gaps. Never use arbitrary pixel values.

```css
/* Spacing scale */
--_layout---spacing--xsmall: 0.5rem    /*  8px */
--_layout---spacing--small:  1rem      /* 16px */
--_layout---spacing--medium: 2rem      /* 32px */
--_layout---spacing--large:  3rem      /* 48px */
--_layout---spacing--xlarge: 4rem      /* 64px */
--_layout---spacing--huge:   6rem      /* 96px */
--_layout---spacing--xhuge:  8rem      /* 128px */

/* Section padding (vertical rhythm for page sections) */
--_layout---section-padding--small:  2rem
--_layout---section-padding--medium: 5rem
--_layout---section-padding--large:  8rem

/* Global horizontal page padding */
--_layout---spacing--global-padding: 2rem

/* Hero sections have extra top padding for the fixed nav */
--_layout---spacing--hero-top-padding: 14rem
```

---

## Borders & Radius

```css
/* Border widths */
--_sizes---border-width--thin:   1px
--_sizes---border-width--normal: 0.125rem
--_sizes---border-width--bold:   0.25rem

/* Border radius */
--_sizes---border-radius--small:  0.25rem   /* inputs, tags */
--_sizes---border-radius--medium: 0.6rem    /* cards */
--_sizes---border-radius--large:  1rem      /* modals, popovers */
--_sizes---border-radius--xlarge: 1.5rem    /* large cards */
--_sizes---border-radius--full:   9999px    /* pills, badges, circular buttons */
```

Teachable uses **pill-shaped** (`border-radius--full`) buttons prominently. Default to this for CTAs.

---

## Container Widths

```css
--_sizes---container--small:  48rem   /* narrow content, blog posts */
--_sizes---container--medium: 68rem   /* standard page content */
--_sizes---container--large:  86rem   /* full-width marketing sections */
```

Center containers with `margin: 0 auto` and `padding: 0 var(--_layout---spacing--global-padding)`.

---

## Common Patterns

> All patterns below are verified against Webflow production — these are the exact values used on teachable.com.

### CTA Button (primary — Lemon)

The lemon button has a **1px solid black border** and **asymmetric vertical padding** (0.9rem top / 1.1rem bottom) for optical centering. Use `<a>` or `<button>` — Webflow uses a Link element.

```tsx
<a style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family--body)',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: 1,
  backgroundColor: 'var(--brand--lemon)',
  color: 'var(--neutral--black)',
  border: 'var(--_sizes---border-width--thin) solid var(--neutral--black)',
  borderRadius: 'var(--_sizes---border-radius--full)',
  paddingTop: '0.9rem',
  paddingBottom: '1.1rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  textDecoration: 'none',
  cursor: 'pointer',
}}>
  Get Started
</a>
```

### CTA Button (dark / inverted)
```tsx
<a style={{
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family--body)',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: 1,
  backgroundColor: 'var(--neutral--black)',
  color: 'var(--neutral--white)',
  border: 'var(--_sizes---border-width--thin) solid var(--neutral--black)',
  borderRadius: 'var(--_sizes---border-radius--full)',
  paddingTop: '0.9rem',
  paddingBottom: '1.1rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  textDecoration: 'none',
  cursor: 'pointer',
}}>
  Learn More
</a>
```

### Eyebrow / Section Label

The section eyebrow is a small, uppercase, SemiBold label that appears above headlines. Often paired with a decorative line or icon.

```tsx
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontFamily: 'var(--font-family--body)',
  fontWeight: 600,
  fontSize: 'var(--_typography---font-size--small)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}}>
  Eyebrow Label
</div>
```

### Tag / Badge

Tags use a **stroked border** (not filled), small radius, uppercase, semibold, with border color matching text color.

```tsx
<span style={{
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.3rem 0.5rem',
  border: '1.5px solid var(--neutral--black)',
  borderRadius: 'var(--_sizes---border-radius--small)',
  fontFamily: 'var(--font-family--body)',
  fontWeight: 600,
  fontSize: 'var(--_typography---font-size--small)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'var(--neutral--black)',
  textDecoration: 'none',
}}>
  Category
</span>
```

### Section wrapper
```tsx
<section style={{
  paddingTop: 'var(--_layout---section-padding--medium)',
  paddingBottom: 'var(--_layout---section-padding--medium)',
  paddingLeft: 'var(--_layout---spacing--global-padding)',
  paddingRight: 'var(--_layout---spacing--global-padding)',
}}>
  <div style={{ maxWidth: 'var(--_sizes---container--large)', margin: '0 auto' }}>
    {/* content */}
  </div>
</section>
```

### Hero section (dark olive background)
```tsx
<section style={{
  backgroundColor: 'var(--enterprise-colors--dark-olive)',
  color: 'var(--neutral--white)',
  paddingTop: 'var(--_layout---spacing--hero-top-padding)',
  paddingBottom: 'var(--_layout---section-padding--large)',
  paddingLeft: 'var(--_layout---spacing--global-padding)',
  paddingRight: 'var(--_layout---spacing--global-padding)',
}}>
```

### Card
```tsx
<div style={{
  backgroundColor: 'var(--neutral--white)',
  borderRadius: 'var(--_sizes---border-radius--medium)',
  padding: 'var(--_layout---spacing--large)',
  border: 'var(--_sizes---border-width--thin) solid var(--neutral--neutral-lightest)',
}}>
```

---

## What NOT to do

- Do not hardcode font sizes, colors, or spacing values — always use CSS variables
- Do not use system fonts — always load and use Merriweather + DM Sans via the `@import` in `tokens.css`
- Do not use `border-radius: 4px` — use `var(--_sizes---border-radius--small)` instead
- Do not make all text the same size — lean into the large heading scale
- Do not use `#a7bc00` as a marketing CTA color — that's for in-app UI only. Marketing CTAs always use `--brand--lemon` (`#e6ff32`)
- Do not add drop shadows, colored text boxes, or decorative pill shapes (AI "tells")
- Do not use tertiary colors (peach, violet, turquoise) as dominant colors — they're accents at ~10% usage
- Do not overuse tints — they're for utility states, not general decoration
