# make-able

Teachable design system tokens for [Figma Make](https://www.figma.com/make/). Sourced directly from the teachable.com Webflow variable system — colors, typography, spacing, border radii, and layout tokens — so prototypes generated in Figma Make look native to the Teachable marketing site.

## Installation

```bash
npm install make-able
```

## Usage in Figma Make

Ask Figma Make to install the package:
> "Install make-able and use it for all styling"

Or add it to your `package.json` manually, then prompt:
> "Use the make-able design system. Import tokens.css and reference CSS custom properties for all colors, fonts, and spacing."

## Usage in code

```tsx
// Import CSS tokens (required)
import 'make-able/tokens.css'

// Optional: JS theme object
import { theme, colors, typography, spacing, sizes } from 'make-able'
```

## What's included

- **CSS custom properties** — all 6 Webflow variable collections (Base, Theme, Typography, Layout, Sizes, Apps) translated 1:1
- **Responsive breakpoints** — tablet, mobile landscape, and mobile portrait overrides matching Webflow's breakpoint system
- **Base element styles** — `body`, `h1`–`h6`, focus, and `::selection` defaults
- **JS theme object** — structured TypeScript export of all token values
- **Figma Make guidelines** — `guidelines.md` teaching the AI how to apply tokens correctly

## Fonts

| Original (Webflow) | Substitute (Google Fonts) | Role |
|---|---|---|
| Ivy Presto Headline | Playfair Display | H1–H3, buttons |
| Peridot PE | DM Sans | Body, H4–H6, UI |

Fonts are loaded automatically via `@import` in `tokens.css`.

## Key tokens

```css
/* Brand */
--brand--yellow: #e6ff32          /* primary CTA color */
--enterprise-colors--dark-olive: #1e2605   /* dark hero backgrounds */
--enterprise-colors--dark-navy: #182a44    /* enterprise/B2B sections */
--cool-beige: #f6f2ee             /* warm alternate backgrounds */

/* Fonts */
--font-family--heading            /* Playfair Display */
--font-family--body               /* DM Sans */

/* Section padding */
--_layout---section-padding--medium: 5rem
--_layout---section-padding--large: 8rem

/* Containers */
--_sizes---container--large: 86rem
--_sizes---border-radius--full: 9999px    /* pill buttons */
```

See `guidelines.md` for the full Figma Make usage guide.

## Source

Tokens extracted from the Teachable marketing site Webflow Designer (site ID: `687904fb2b26c434698c47e9`) via Webflow MCP.
