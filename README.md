# zest — Teachable Design System

Design system tokens and context files for the Teachable marketing site. Two consumers:

- **Figma Make** — install as a package, use tokens and component patterns to generate native-looking Teachable UI
- **Webflow MCP / Claude Code** — `CLAUDE.md` is the entry point; context files and skills teach Claude the brand voice, component library, Client-First conventions, and Webflow workflow rules

---

## Figma Make

### Installation

```bash
npm install github:ss-teachie/zest
```

Or add to `package.json`:
```json
"@ss-teachie/zest": "github:ss-teachie/zest"
```

### Usage

```tsx
import '@ss-teachie/zest/tokens.css'
import { theme } from '@ss-teachie/zest'
```

See `FIGMA.md` for the full Figma Make guide and component patterns.

---

## Webflow MCP / Claude Code

`CLAUDE.md` is automatically read by Claude Code at session start. It loads the right context files and skills based on the task.

See `CLAUDE.md` for the full guide.

---

## What's Included

| File / Folder | Purpose |
|---------------|---------|
| `CLAUDE.md` | Claude Code entry point — Webflow MCP sessions |
| `FIGMA.md` | Claude entry point — Figma Make sessions |
| `guidelines.md` | Design tokens reference — colors, typography, spacing, borders |
| `context/webflow-rules.md` | Webflow workflow rules, template constraints, publishing |
| `context/framework-principles.md` | Client-First (Finsweet) class naming, page structure, interactions |
| `context/components.md` | Full Teachable Webflow component library |
| `context/voice.md` | Brand voice, tone, writing rules |
| `context/personas.md` | ICP personas and Persona × Niche messaging matrix |
| `skills/` | Task-specific skill guides for Claude |
| `dist/` | Compiled CSS + JS tokens for npm install |
| `src/` | Token source files |

---

## Fonts

| Original (Webflow) | Substitute (Google Fonts) | Role |
|---|---|---|
| IvyPresto Headline | Merriweather | H1–H3, Subtitle A |
| Peridot PE Variable | DM Sans | Body, H4–H6, Eyebrow, UI |

Fonts load automatically via `@import` in `tokens.css`.

---

## Key Tokens

```css
--brand--lemon: #e6ff32              /* primary CTA — appears in every standalone piece */
--brand--navy: #112846               /* enterprise/B2B sections */
--enterprise-colors--dark-olive: #1c2600  /* dark hero backgrounds */
--cool-beige: #f6f2ee                /* warm alternate backgrounds */

--font-family--heading               /* Merriweather */
--font-family--body                  /* DM Sans */

--_layout---section-padding--medium: 5rem
--_layout---section-padding--large:  8rem
--_sizes---container--large: 86rem
--_sizes---border-radius--full: 9999px   /* pill buttons */
```

---

## Source

Tokens extracted from the Teachable marketing site Webflow Designer (site ID: `687904fb2b26c434698c47e9`) via Webflow MCP.
