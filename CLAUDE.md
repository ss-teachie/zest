# Zest — Teachable Design System Context

This is the Claude Code entry point for **Webflow MCP sessions**. For Figma Make sessions, see `FIGMA.md` instead.

**Load context on demand — don't read everything upfront:**
- `context/webflow-rules.md` + `guidelines.md` — read at the start of every Webflow session
- `context/framework-principles.md` — load when creating, modifying, or auditing any classes or elements
- `context/voice.md` — load when writing or reviewing copy
- `context/personas.md` — load when targeting a specific audience
- `context/components.md` — load when building or auditing pages
- Skills — load only when the task matches (see table below)

---

## Critical Rules (Read First)

### 1. Ask Before You Act
**Never make changes you can't undo without explicit confirmation first.** This is the most important rule.

Before touching anything in Webflow:
- State what you plan to do
- Wait for approval
- Do one thing at a time
- Report what you did after each step

If a task would require deleting, restructuring, or publishing — stop and ask. Don't assume "yes."

### 2. Never Create New Styles
Do not create new Webflow classes, styles, or CSS. Teachable has an established style system. Always use existing variables, styles, and components. If something doesn't exist, flag it — don't invent a solution.

### 3. Work Within the Template
Pages are built from existing templates and components. You cannot delete sections. You can:
- Edit text and copy
- Swap images (where enabled)
- Toggle element visibility
- Adjust spacing using existing variants
- Modify button text and colors (where configured)

If a layout request can't be achieved with what's already there, say so rather than improvising.

### 4. Use Existing Components
Teachable has a full component library in Webflow. Always use components from that library. Do not build new layouts from scratch. See `context/components.md` for the full list.

### 5. Voice and Tone
All copy must match the Teachable brand voice. See `context/voice.md`. When writing or editing copy, never default to generic SaaS language ("streamline," "leverage," "empower," "seamlessly"). Read the voice guide before writing anything.

### 6. Know Your Audience
Teachable's primary 2026 acquisition targets are **Knowledge Business (KB)** and **Program Distributor (PD)** personas. Copy should be tuned to the right persona for the page. See `context/personas.md` for full persona definitions and the Persona × Niche messaging matrix.

---

## Context Files

| File | What It Covers | When to Load |
|------|---------------|-------------|
| `context/webflow-rules.md` | Webflow-specific workflow, template rules, CMS, publishing | Every Webflow session |
| `guidelines.md` | Design tokens — colors, typography, spacing, buttons, patterns | Every Webflow session |
| `context/voice.md` | Brand voice, tone, writing rules, positioning statement, what not to say | Writing or reviewing copy |
| `context/personas.md` | ICP personas (KB, PD, Service Amplifier, Audience Builder), niche targeting, Persona × Niche matrix | Audience-specific copy |
| `context/framework-principles.md` | Client-First class naming, page structure, typography, spacing — Finsweet's conventions | Creating/modifying/auditing classes or elements |
| `context/components.md` | Full Teachable component library — use these, not custom builds | Building or auditing pages |

---

## Skills

The `/skills/` folder contains specialized guides for specific tasks. Load the relevant skill only when the task matches — don't load all skills upfront.

| Skill File | When to Use |
|-----------|-------------|
| `skills/webflow-niche-page-editor.md` | Adapting a Webflow page for a new creator niche (yoga, coding, languages, etc.) |
| `skills/brand-and-style-guide.md` | Writing any marketing copy — landing pages, ads, emails, product descriptions |
| `skills/kb-persona.md` | Writing copy targeted at Knowledge Business personas |
| `skills/pd-persona.md` | Writing copy targeted at Program Distributor personas |
| `skills/humanizer.md` | Post-processing any copy to strip AI writing patterns and make it sound human |

### Additional Webflow skills (fetch as needed)

The [`webflow/webflow-skills`](https://github.com/webflow/webflow-skills/tree/main/plugins/webflow-skills/skills) repo has task-specific skills worth grabbing before relevant work. Read the SKILL.md directly from GitHub rather than adding them permanently to this repo.

| Skill | What it does |
|-------|-------------|
| `asset-audit` | Find images missing alt text and non-SEO-friendly filenames |
| `link-checker` | Find broken or HTTP links across all pages and CMS content |
| `bulk-cms-update` | Batch create/update CMS items with validation and diff preview |
| `accessibility-audit` | WCAG 2.1 check on pages — buttons, forms, links, focus, headings |
| `safe-publish` | Preview everything that's changed since last publish before going live |

---

## Design Token Quick Reference

From `guidelines.md` — key values at a glance:

- **Brand Lemon**: `#e6ff32` — appears in every standalone design
- **Heading font**: Merriweather (H1–H3), line-height 1.0–1.1
- **Body font**: DM Sans, line-height 1.35
- **Primary CTA**: lemon background, black border 1px, pill radius, padding 0.9rem top / 1.1rem bottom / 1.5rem sides, font-weight 600
- **Section backgrounds**: white → cool-beige → light-lemon → dark-olive → navy
- **No drop shadows. No colored boxes behind text. No gradients by default.**
