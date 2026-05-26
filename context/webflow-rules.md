# Webflow Rules — Teachable Site

Site ID: `687904fb2b26c434698c47e9`

---

## Permissions & What You Can Touch

Teachable's Webflow site uses a **template + component architecture**. Most people editing pages are in a marketer role with content-level access. Claude should operate with the same discipline.

### ✅ You can:
- Edit text and copy inside editable components
- Swap images where "Replace Image" is available (use hero-style images from the albums folder — not icons)
- Toggle element visibility (show/hide)
- Adjust spacing and padding using **existing component variants** only
- Modify button text and colors where already configured
- Add component instances from the existing library
- Add CMS items (FAQs, etc.)
- Create new pages as **drafts** — never publish without confirmation

### ❌ You cannot / must not:
- Delete sections from pages
- Create new Webflow classes or styles
- Modify shared/global components without explicit approval (Nav Bar, Footer, Global Styles) — changes affect every page on the site
- Publish any page without being explicitly asked to
- Add more than 3 cards to the Cards Section component (it's fixed at 3 — use a different component if needed)
- Restructure layouts — work within what's there

---

## Page Creation Workflow

When asked to create a new competitor page or landing page:

1. Create as a **New Page** (not a branch unless isolating changes is explicitly requested)
2. Use a **static page template** — select from the dropdown in the Pages panel
3. The competitor template is B2C focused — confirm which template before starting
4. Auto-generated slug follows: `teachable.com/compare/[competitor-name]`
5. Save as **draft** — never publish automatically
6. Edits go to the duplicate, not the original template

---

## Component Editing Rules

### Hero
- Editable: image, eyebrow text, hero sub-copy, button text
- Button technically lives in the page layout — on new pages it won't appear automatically
- Images: use hero-style photos from albums folder, not icons

### Cards Section
- Always 3 cards — if 3 doesn't work for the content, flag it and use a different component
- Editable: header, subhead, card content
- Can hide: header, subhead, checkmarks (use visibility toggle, not delete)

### Switchback (Alternating Content + Image)
- Editable: title, paragraph, button text
- To hide the button: click the **parent/wrapper**, not the button element itself

### Comparison Chart
- Use the **static version** (no CMS required) for most cases
- Add rows from the Static Comparison Chart Row component
- If drag-and-drop doesn't work, use the Navigator (layers panel) to place into the slot
- Per row: edit text, toggle checkmarks, edit competitor name
- **Checkmark rule**: only one type (✓ or ✗) can be visible at a time — if both are visible they cancel each other out

### Testimonial Slider
- Currently uses the same testimonials across all pages (CMS integration pending)
- Reuse existing testimonials — don't fabricate new quotes

### FAQs
- CMS-based (101+ items in the FAQs collection)
- **Cannot tie CMS FAQs while the page is in draft mode**
- Workflow: build the page → take it out of draft → go back to CMS FAQs → attach questions to the page
- For new questions: add as CMS items first

---

## Publishing Rules

- **Always save as draft** while building
- **Never publish** unless explicitly asked
- Before publishing: confirm the page has been through QA
- CMS items (FAQs) must be tied after the page leaves draft mode

---

## Webflow MCP Behavior

When using the Webflow MCP:
- State your plan before executing it
- Make one change at a time
- Confirm after each step
- If something is ambiguous (which component to use, which slot to place in), ask — don't guess
- If the Navigator is needed to place a component, say so and describe what to select
- Never chain multiple irreversible actions together in one go

---

## Class and Style Safety Rules

Before creating any new class or style:

1. **Check for existing classes first** — use `style_tool → query_styles` to search for the class name before creating it. Reuse always beats creating new.
2. **Never modify a base class when a combo class achieves the same result** — base class changes are global and affect every element using that class across the entire site. If you need a variant, add a combo class (`is-[variant]`) instead.
3. **Never use inline styles** — all styles must be applied via Webflow classes, not inline CSS.

If a class or pattern doesn't exist and you genuinely need something new, stop and flag it rather than improvising.
