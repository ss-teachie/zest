# Figma Make — Teachable Design System

This is the entry point for Figma Make sessions. Use this file alongside `guidelines.md` (token reference) to generate UI that looks native to teachable.com.

---

## Setup

Ask Figma Make to install the package:
> "Install @ss-teachie/zest from GitHub and use it for all styling"

Or add it manually to `package.json`:
```json
"@ss-teachie/zest": "github:ss-teachie/zest"
```

Then prompt:
> "Use the @ss-teachie/zest design system. Import tokens.css and reference CSS custom properties for all colors, fonts, and spacing."

```tsx
import '@ss-teachie/zest/tokens.css'
import { theme } from '@ss-teachie/zest'
```

---

## Design Principles

- **Less is more.** Restraint creates quality.
- **Flat looks great.** Default to flat color — not everything needs a gradient.
- **We're going for clean.** No drop shadows, no colored boxes behind text, no unnecessary strokes.
- **Don't be afraid of Teachable Lemon.** It's the brand. Use `--brand--lemon` confidently.
- **Tertiary palette with care.** Events and accents only — not defaults.
- **Teachable Lemon must appear in every standalone communication.**

For the full token reference — colors, typography scale, spacing, borders, containers — see `guidelines.md`.

---

## Component Patterns

> All patterns below are verified against Webflow production — exact values from teachable.com.

### CTA Button (Primary — Lemon)

1px solid black border, asymmetric vertical padding for optical centering. Use `<a>` — Webflow uses a Link element.

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

### CTA Button (Dark / Inverted)

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

Small uppercase SemiBold label above headlines. Often paired with a decorative line or icon.

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

Stroked border (not filled), small radius, uppercase, semibold.

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

### Section Wrapper

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

### Hero Section (Dark Olive Background)

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

## What NOT to Do

- Do not hardcode font sizes, colors, or spacing — always use CSS variables
- Do not use system fonts — always load Merriweather + DM Sans via the `@import` in `tokens.css`
- Do not use `border-radius: 4px` — use `var(--_sizes---border-radius--small)` instead
- Do not flatten type — lean into the large editorial heading scale
- Do not use `#a7bc00` as a marketing CTA color — that's for in-app UI only. Marketing CTAs use `--brand--lemon` (`#e6ff32`)
- Do not add drop shadows, colored text boxes, or decorative pill shapes
- Do not use tertiary colors (peach, violet, turquoise) as dominant colors — accents only (~10%)

---

## Related Context

When writing copy in Figma Make prototypes, also load:
- `context/voice.md` — brand voice, tone rules, what not to say
- `context/personas.md` — who the copy is targeting (KB, PD, etc.)
