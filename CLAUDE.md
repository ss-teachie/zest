# Zest — Teachable Design System Context

This repository is the source of truth for Teachable's design system. Read all files in `/context/` before responding to any prompt. These rules apply to every session — Webflow MCP, Figma Make, or general design tasks.

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

| File | What It Covers |
|------|---------------|
| `context/webflow-rules.md` | Webflow-specific workflow, template rules, CMS, publishing |
| `context/components.md` | Full Teachable component library — use these, not custom builds |
| `context/voice.md` | Brand voice, tone, writing rules, positioning statement, what not to say |
| `context/personas.md` | ICP personas (KB, PD, Service Amplifier, Audience Builder), niche targeting, Persona × Niche matrix |
| `guidelines.md` | Design tokens — colors, typography, spacing, buttons, patterns |

---

## Skills

The `/skills/` folder contains specialized guides for specific tasks. Load the relevant skill when you're doing that type of work.

| Skill File | When to Use |
|-----------|-------------|
| `skills/webflow-niche-page-editor.md` | Adapting a Webflow page for a new creator niche (yoga, coding, languages, etc.) |
| `skills/brand-and-style-guide.md` | Writing any marketing copy — landing pages, ads, emails, product descriptions |
| `skills/kb-persona.md` | Writing copy targeted at Knowledge Business personas |
| `skills/pd-persona.md` | Writing copy targeted at Program Distributor personas |

---

## Design Token Quick Reference

From `guidelines.md` — key values at a glance:

- **Brand Lemon**: `#e6ff32` — appears in every standalone design
- **Heading font**: Merriweather (H1–H3), line-height 1.0–1.1
- **Body font**: DM Sans, line-height 1.35
- **Primary CTA**: lemon background, black border 1px, pill radius, padding 0.9rem top / 1.1rem bottom / 1.5rem sides, font-weight 600
- **Section backgrounds**: white → cool-beige → light-lemon → dark-olive → navy
- **No drop shadows. No colored boxes behind text. No gradients by default.**
