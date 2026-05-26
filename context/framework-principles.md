# Client-First Framework Principles

> **Framework:** Client-First by Finsweet — Version 2.1
> **Source:** [finsweet.com/client-first/docs](https://finsweet.com/client-first/docs/learning-path)
>
> Teachable's Webflow site is built and maintained by Finsweet using Client-First. Read this file before creating, modifying, or auditing any classes, elements, styles, or interactions in Webflow. These conventions are non-negotiable — deviating from them creates technical debt for the Finsweet team.

---

## Classes Strategy

### Four Class Types

**Utility class** — A reusable combination of CSS properties applied across the project. Global by nature: changing it changes all instances.
- Uses **dashes `-` only** — no underscores
- Examples: `text-size-large`, `background-color-primary`, `padding-section-medium`

**Global class** — Intended for use across the entire project. Can be utility or custom. Controls globally-updated style values or improves workflow efficiency.
- Can use `-` or `_`

**Custom class** — Created for a specific component, page, grouping, or single element.
- Uses **underscore `_`** to define the folder name (everything before `_` = folder)
- Safer to edit than global classes — changes are scoped
- Examples: `header_background-layer`, `testimonial-slider_headshot`

**Combo class** — A variant that inherits from a base class and adds styles on top.
- Prefix: **`is-`**
- Requirement: must have a real benefit from inheriting the base class. If no inheritance benefit, create a single custom class instead.
- Examples: `button is-brand`, `header_content is-home`

### Naming Conventions

**Meaningful and complete** — Names should answer: "What is the purpose of this class in the project?"

✅ `testimonials_wrapper`
❌ `col-2-d`, `flex-mobile-a-c`

**General → Specific** — Names move from general to specific:

```
text-size-large
│    │     └── large (specific variant)
│    └── size (what property)
└── text (what element type)

team-list_headshot-wrapper
│         │         └── wrapper (role)
│         └── headshot (sub-element)
└── team-list (component folder)
```

**Stack similar categories** — When stacking multiple classes, combine classes from the same CSS property type (margins with margins, padding with padding, typography with typography). Don't mix categories.

### Stacking Limits

| Stack depth | Status |
|-------------|--------|
| 1–2 classes | Ideal |
| 3 classes | Questionable — consider merging |
| 4 classes | Absolute maximum |
| 5+ classes | Too complex — create a custom class instead |

**Three strategies to reduce stacking:**
1. **Single custom class** — merge utility classes into one named custom class using Finsweet Extension
2. **Combo class** — `faq_item is-dark` instead of `faq_item text-color-primary background-color-primary`
3. **Nested div** — separate a Div block to isolate different style purposes (e.g., keep typography separate from max-width)

### What Client-First Does NOT Include

**No flex/grid utility classes.** Client-First deliberately excludes layout utilities like `flex-align-center` or `grid-3-col` because:
- Responsive variations cause excessive stacking
- Abbreviated names (`flex-a-l-j-c`) are unreadable
- Custom classes are faster to edit and easier to hand off

Build layouts with custom classes instead.

---

## Folders

Custom classes auto-group into folders based on the word before the underscore.

```
team-list_component           ┐
team-list_headshot-image      ├── all live in the "team-list_" folder
team-list_headshot-wrapper    ┘
```

**Rules:**
- One underscore = one folder level: `hero_title`
- Two underscores = nested folders: `folder-1_folder-2_element`
- Renaming a folder (e.g., `hero_` → `team_`) renames every class inside it
- Utility classes (no underscore) auto-group under the Utility folder, then sub-foldered by first keyword

---

## Core Structure

Every page uses this wrapper hierarchy:

| Class | Element | Purpose |
|-------|---------|---------|
| `page-wrapper` | Outermost div | Wraps all content. Use for full-page CSS and copy/paste. |
| `main-wrapper` | `<main>` | Page-specific content only. |
| `navbar` | `<nav>` | Navigation — placed **outside** `main-wrapper`. |
| `section_[identifier]` | `<section>` | Wraps an entire content section. Organizes the Navigator. |
| `padding-global` | div | Site-wide left/right outer padding. |
| `padding-section-[size]` | Same div as `padding-global` | Top/bottom section padding (v2.1: apply on the same div, not nested). |
| `container-[size]` | div | Max-width + center alignment. Sizes: `small`, `medium`, `large`. |
| `global-styles` | HTML embed symbol | Global custom CSS — **must be on every page**. |

**Section padding sizes:**

| Class | Value |
|-------|-------|
| `padding-section-small` | 3rem |
| `padding-section-medium` | 5rem |
| `padding-section-large` | 8rem |

---

## Sizes and REM

Client-First uses **REM** for all sizing. Default: `1rem = 16px`.

**Conversion:** `px ÷ 16 = rem` — e.g., 96px = 6rem, 32px = 2rem, 4px = 0.25rem

**Why REM:**
- Respects browser font size settings (accessibility)
- Scales correctly when users zoom
- `vw`/`vh` do NOT respect browser font size — avoid for accessibility-critical sizing

---

## Typography Strategy

**Heading tags drive hierarchy, not visual size.**

- Use the correct HTML tag based on **hierarchy on the page** (H1 → H2 → H3...) — critical for SEO
- Use `heading-style-` classes **only to override** the default visual size
- If an H1 should look like an H3: `H1 + heading-style-h3`
- Never skip heading levels (H1 → H3 with no H2 is wrong)

**Default heading sizes:**

| Tag | Default Class | Default Size |
|-----|--------------|-------------|
| H1 | `heading-style-h1` | 4rem |
| H2 | `heading-style-h2` | 3rem |
| H3 | `heading-style-h3` | 2rem |
| H4 | `heading-style-h4` | 1.5rem |
| H5 | `heading-style-h5` | 1.25rem |
| H6 | `heading-style-h6` | 1rem |

**Text size utilities:**

| Class | Value |
|-------|-------|
| `text-size-large` | 1.5rem |
| `text-size-medium` | 1.25rem |
| `text-size-regular` | 1rem |
| `text-size-small` | 0.85rem |
| `text-size-tiny` | 0.75rem |

**Text weight utilities:**

| Class | Value |
|-------|-------|
| `text-weight-xbold` | 800 |
| `text-weight-bold` | 700 |
| `text-weight-semibold` | 600 |
| `text-weight-normal` | 400 |
| `text-weight-light` | 300 |

**Text color utilities:** `text-color-primary`, `text-color-secondary`, `text-color-alternate`

**Text alignment:** `text-align-left`, `text-align-center`, `text-align-right`

**Text style utilities:**

| Class | Effect |
|-------|--------|
| `text-style-allcaps` | ALL CAPS |
| `text-style-italic` | Italic |
| `text-style-link` | Link styling |
| `text-style-muted` | opacity: 0.7 |
| `text-style-nowrap` | No text wrapping |
| `text-style-quote` | Blockquote styling |
| `text-style-strikethrough` | Strikethrough |
| `text-style-2lines` | Truncate to 2 lines |
| `text-style-3lines` | Truncate to 3 lines |

---

## Spacing Strategy

**Two methods:**

1. **Spacing Wrapper** — Wrap a child in a div with `padding-[direction]` + `padding-[size]`
2. **Spacing Block** — Empty div with `spacer-[size]` between siblings

**Directions** (applies to both `padding-` and `margin-`):`-top`, `-bottom`, `-left`, `-right`, `-horizontal`, `-vertical`

**Spacing sizes** (same scale for both padding and margin):

| Suffix | rem |
|--------|-----|
| `-0` | 0 |
| `-tiny` | 0.125 |
| `-xxsmall` | 0.25 |
| `-xsmall` | 0.5 |
| `-small` | 1 |
| `-custom1` | 1.5 |
| `-medium` | 2 |
| `-custom2` | 2.5 |
| `-large` | 3 |
| `-custom3` | 3.5 |
| `-xlarge` | 4 |
| `-xxlarge` | 5 |
| `-huge` | 6 |
| `-xhuge` | 8 |
| `-xxhuge` | 12 |

> Use `spacing-clean` to reset all margin and padding to 0 (useful for removing Webflow component defaults).

---

## Utility Class Systems

All utility classes in Client-First are optional. Use them before creating custom classes.

### Visibility

| Class | Effect |
|-------|--------|
| `hide` | Hidden on all devices |
| `hide-tablet` | Hidden at tablet and above |
| `hide-mobile-landscape` | Hidden at mobile landscape and above |
| `hide-mobile-portrait` | Hidden at mobile portrait |

### Display & Layout

| Class | Effect |
|-------|--------|
| `display-inlineflex` | `display: inline-flex` (not natively available in Webflow) |
| `align-center` | `margin: 0 auto` — centers element |
| `layer` | `position: absolute; top/right/bottom/left: 0` — expands to fill parent |

### Max-Width

| Class | Value |
|-------|-------|
| `max-width-xxlarge` | 80rem |
| `max-width-xlarge` | 64rem |
| `max-width-large` | 48rem |
| `max-width-medium` | 32rem |
| `max-width-small` | 20rem |
| `max-width-xsmall` | 16rem |
| `max-width-xxsmall` | 12rem |
| `max-width-full` | 100% |
| `max-width-full-tablet` | 100% on tablet |
| `max-width-full-mobile-landscape` | 100% on mobile landscape |
| `max-width-full-mobile-portrait` | 100% on mobile portrait |

### Overflow & Pointer Events

`overflow-hidden`, `overflow-scroll`, `overflow-auto`
`pointer-events-none`, `pointer-events-auto`

### Z-Index

`z-index-1`, `z-index-2`

### Aspect Ratio

| Class | Ratio |
|-------|-------|
| `aspect-ratio-square` | 1/1 |
| `aspect-ratio-portrait` | 2/3 |
| `aspect-ratio-landscape` | 3/2 |
| `aspect-ratio-widescreen` | 16/9 |

### Icons

| Class | Effect |
|-------|--------|
| `icon-height-small` | Height: 1rem |
| `icon-height-medium` | Height: 2rem |
| `icon-height-large` | Height: 2.5rem |
| `icon-1x1-small` | Width + height: 1rem |
| `icon-1x1-medium` | Width + height: 2rem |
| `icon-1x1-large` | Width + height: 2.5rem |

### Background Color

`background-color-primary`, `background-color-secondary`, `background-color-tertiary`, `background-color-alternate`

> Note: The actual color values for these are defined in Teachable's Webflow variables. See `guidelines.md` for Teachable's design tokens.

### Buttons

| Class | Purpose |
|-------|---------|
| `button` | Default button base |
| `button is-secondary` | Secondary variant |
| `button is-text` | Text-only variant |
| `button-group` | Horizontal spacing between two buttons |

> Teachable's visual button specs (lemon background, 1px black border, pill radius, asymmetric padding) are in `guidelines.md`. The Client-First `button` class is the structural wrapper; Teachable's design tokens define the visual styling on top.

---

## Variables

Client-First uses a **two-tier color variable system**.

### Tier 1: Primitive Tokens (Base Colors)

Foundation colors. Prefix: `base-color-`. Grouped as brand, neutral, and system colors. These are the raw values — they don't describe purpose.

Examples: `base-color-brand--lemon`, `base-color-neutral--black`, `base-color-system--error-red`

### Tier 2: Semantic Tokens

Variables that describe **purpose**, not color. These reference primitives.

**Naming structure: `[element]--[style]--[identifier]`**

Examples:
- `background-color--background-primary`
- `text-color--text-secondary`
- `border-color--border-brand`

**Three questions to name a semantic token:**
1. **Element** — What receives this style? (`background-color`, `text-color`, `border-color`)
2. **Style** — What value is changing? (`background`, `text`, `border`)
3. **Identifier** — What distinguishes it? (`primary`, `secondary`, `alternate`, `brand`)

### Rules

- **Never name semantic variables by color.** `blue-background` breaks when colors change. Use `background-primary` — it works across themes and rebrands.
- **Limit direct primitive linking.** Primitives should create semantic tokens first; only link directly to a class if that primitive won't be reused elsewhere.
- **Inherit colors through the DOM.** Apply semantic tokens to parent elements and let children inherit — don't apply the same token redundantly to every child.
- **Webflow variables don't support breakpoints** — Client-First only uses variables for color, not size.

---

## Interactions Naming

### Core Formula

```
Element [Action + State]
```

- **Element** — The component receiving the interaction: `Button`, `Nav Menu`, `Modal`, `Sort Button Arrow`
- **Action** — What happens: `Show`, `Hide`, `Move`, `Rotate`, `Scale`
- **State** — Condition or direction: `Open`/`Close`, `In`/`Out`, `Increase`/`Decrease`, `Expand`/`Collapse`
- **Square brackets** — Always wrap Action + State in `[ ]` to visually separate from the element name

### Examples

| Interaction | Name |
|-------------|------|
| Button arrow rotating on open | `Sort Button Arrow [Rotate Open]` |
| Same arrow on close | `Sort Button Arrow [Rotate Close]` |
| Image scrolling into view | `Image [Show Scroll In]` |
| Image scrolling out | `Image [Hide Scroll Out]` |
| Home page hero animation | `Home Hero Lottie [Show]` |
| Form input expanding | `Contact Form Input [Height Increase]` |

### Optional Additions

**Trigger keyword** — Only add if it significantly clarifies the interaction (interactions can fire from multiple triggers, so don't always include it):
- `Discount Modal [Delay On Load]`

**Responsive keyword** — Add at the end when the interaction only applies to a specific device:
- `Nav Sidebar Slide [Show] [Mobile]`

### Naming Principles

- **Maximum context, minimal words** — A new developer should immediately understand the interaction from the name alone
- Capitalize the first letter of each word for scannability
- Keep names short enough not to overflow Webflow's UI panel
- Don't overthink it — clarity beats perfect categorization

---

## Working With Finsweet

Finsweet is Teachable's dev team and the authors of this framework. If a task requires:
- Creating a new class pattern that doesn't fit the existing system
- Restructuring page layout or the DOM hierarchy
- Modifying global styles or base classes
- Adding custom CSS outside the Client-First system
- Creating new variable tokens

**Stop and flag it** — don't improvise. Changes that conflict with Client-First create debt that Finsweet has to untangle.
