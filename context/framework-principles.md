# Client-First Framework Principles

> **Framework:** Client-First by Finsweet — Version 2.1
> **Source:** [finsweet.com/client-first/docs/quick-guide](https://finsweet.com/client-first/docs/quick-guide)
>
> Teachable's Webflow site is built and maintained by Finsweet using Client-First. Read this file before creating, modifying, or auditing any classes, elements, or styles in Webflow. These conventions are non-negotiable — deviating from them creates technical debt for the Finsweet team.

---

## Classes

### Four Class Types

**Utility class** — A reusable combination of CSS properties applied across the project. Global by nature: changing it changes all instances.
- Uses **dashes `-` only**
- Examples: `text-size-large`, `background-color-primary`

**Global class** — Intended for use across the entire project. Can be utility or custom.
- Can use `-` or `_`
- Examples: `header_background-layer`, `faq_item`

**Custom class** — Created for a specific component, page, or element. Scoped and flexible.
- Uses **underscore `_`** to define the folder name
- Examples: `header_background-layer`, `testimonial-slider_headshot`

**Combo class** — A variant that inherits from a base class and adds styles on top.
- Prefix: **`is-`**
- Examples: `button is-brand`, `header_content is-home`

> **Rule:** Never change a base class when a combo class achieves the same result. Base class changes are global and affect every element using it.

---

### Naming Conventions

**Meaningful and complete** — Class names should answer: "What is the purpose of this class in the project?"

✅ `testimonials_wrapper`
❌ `col-2-d`, `flex-mobile-a-c`

**General → Specific** — Names move from general to specific:

```
text-size-large
│    │     └── large (specific variant)
│    └── size (what property)
└── text (what element type)

team-list_headshot-wrapper
│         │         └── wrapper (role within component)
│         └── headshot (sub-element)
└── team-list (component folder)
```

**Folders** — Custom classes (with underscore) auto-group by the word before `_`. Utility classes (no underscore) auto-group under the Utility folder. Renaming a folder renames every class in it.

---

## Page Structure

Every page uses this wrapper hierarchy:

| Class | Element | Purpose |
|-------|---------|---------|
| `page-wrapper` | Outermost div | Wraps all content on the page. Useful for full-page CSS and copy/paste. |
| `main-wrapper` | `<main>` | Page-specific content. |
| `navbar` | `<nav>` | Navigation — placed **outside** `main-wrapper`. |
| `section_[identifier]` | `<section>` | Wraps an entire content section. Organizes the Navigator. |
| `padding-global` | div | Site-wide left/right outer padding. |
| `padding-section-[size]` | Same div as `padding-global` | Top/bottom section padding. |
| `container-[size]` | div | Max-width + center alignment. Sizes: `small`, `medium`, `large`. |
| `global-styles` | HTML embed symbol | Global custom CSS — must be on every page. |

**Section padding sizes:**

| Class | Value |
|-------|-------|
| `padding-section-small` | 3rem |
| `padding-section-medium` | 5rem |
| `padding-section-large` | 8rem |

---

## Typography

**Heading tags and default classes:**

| Tag | Default Class | Default Size |
|-----|--------------|-------------|
| H1 | `heading-style-h1` | 4rem |
| H2 | `heading-style-h2` | 3rem |
| H3 | `heading-style-h3` | 2rem |
| H4 | `heading-style-h4` | 1.5rem |
| H5 | `heading-style-h5` | 1.25rem |
| H6 | `heading-style-h6` | 1rem |

- Use the correct HTML tag for **hierarchy**, not for visual size
- To style an H1 like an H3: use `H1 heading-style-h3`
- Always respect heading hierarchy (H1 → H2 → H3...) — critical for SEO
- Use `heading-style-` classes **only to override** the default — don't apply them redundantly

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
| `text-weight-light` | 300 |
| `text-weight-normal` | 400 |
| `text-weight-semibold` | 600 |
| `text-weight-bold` | 700 |
| `text-weight-xbold` | 800 |

**Other text utilities:** `text-align-left/center/right`, `text-style-allcaps`, `text-style-italic`, `text-style-strikethrough`, `text-style-muted` (opacity 0.7), `text-style-2lines` / `text-style-3lines` (truncate).

---

## Spacing

Client-First uses **REM** for all sizing. Default: `1rem = 16px`.

**Two spacing methods:**

1. **Spacing Wrapper** — Wrap a child in a div with `padding-[direction]` + `padding-[size]`
2. **Spacing Block** — Empty div with `spacer-[size]` between siblings

**Spacing sizes:**

| Suffix | rem |
|--------|-----|
| `-tiny` | 0.125 |
| `-xxsmall` | 0.25 |
| `-xsmall` | 0.5 |
| `-small` | 1 |
| `-medium` | 2 |
| `-large` | 3 |
| `-xlarge` | 4 |
| `-xxlarge` | 5 |
| `-huge` | 6 |
| `-xhuge` | 8 |
| `-xxhuge` | 12 |
| `-custom1` | 1.5 |
| `-0` | 0 |

**Padding directions:** `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `padding-vertical`, `padding-horizontal`. Same structure for `margin-`.

> Use `spacing_clean` to remove native Webflow component spacing.

---

## Stacking

Avoid deep class stacking. Three strategies:

1. **Merge into one custom class** — If an element needs 4+ utility classes, merge them using Finsweet Extension
2. **Create a combo class** — `faq_item is-dark` instead of `faq_item text-color-primary background-color-primary`
3. **Nest another div** — Useful when stacking utility classes of different types (typography + max-width)

---

## Buttons

| Class | Purpose |
|-------|---------|
| `button` | Default button style |
| `button is-secondary` | Secondary variant |
| `button is-text` | Text-only variant |
| `button-group` | Horizontal spacing between two buttons |

> Note: Teachable's own button tokens and visual specs live in `guidelines.md`. The Client-First `button` base class is the structural wrapper — Teachable's design tokens define the visual styling on top.

---

## Useful Utility Classes

**Visibility:**
- `hide`, `hide-tablet`, `hide-mobile-landscape`, `hide-mobile-portrait`

**Overflow:**
- `overflow-hidden`, `overflow-scroll`, `overflow-auto`

**Max-width:**
- `max-width-xxlarge` (80rem) → `max-width-xlarge` (64rem) → `max-width-large` (48rem) → `max-width-medium` (32rem) → `max-width-small` (20rem)
- `max-width-full`, `max-width-full-tablet`, `max-width-full-mobile-landscape`, `max-width-full-mobile-portrait`

**Other:**
- `align-center` — `margin: 0 auto`
- `layer` — `position: absolute; top/right/bottom/left: 0`
- `display-inlineflex`
- `pointer-events-none` / `pointer-events-auto`
- `z-index-1` / `z-index-2`

---

## Accessibility

- Use semantic HTML tags (`<main>`, `<nav>`, `<section>`) per the page structure above
- Respect heading hierarchy — never skip levels
- Build in REM — respects browser font size settings modified by users
- Do not use `vw`/`vh` values for accessibility-critical sizing

---

## Working With Finsweet

Finsweet is Teachable's dev team and the authors of this framework. If a task requires:
- Creating a new class pattern that doesn't exist
- Restructuring page layout
- Modifying global styles or base classes
- Adding custom CSS outside the Client-First system

**Stop and flag it** — don't improvise. Changes that conflict with Client-First create debt that Finsweet has to clean up.
