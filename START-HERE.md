# Start Here — Before You Open Any Claude Session

This guide is for humans, not Claude. Read it before you start a Webflow MCP session or a Figma Make session.

The single most important thing to understand: **Claude sessions have two modes, and they should never be mixed.**

| Mode | What it's for | Where it runs |
|------|--------------|---------------|
| **Prep** | Writing copy, choosing persona, deciding what to build | Regular Claude conversation (no MCP) |
| **Execute** | Actually building it in Webflow or Figma | MCP session |

Every clarifying question Claude asks during an execution session costs context and slows everything down. The goal is to arrive at the MCP session with every decision already made — so Claude can execute without stopping.

---

## The Session Brief

Fill this out before starting any Webflow MCP session. If you can't answer all of these, do more prep first.

```
BRIEF

Page:         (slug or page name — e.g. /compare/kajabi)
Task type:    copy edit / new section / new page / CMS update
Goal:         (one sentence — what does this page need to do?)
Persona:      KB / PD / Service Amplifier / Audience Builder
Niche:        (if relevant — e.g. yoga, coding, language learning)

Copy:         ready / needs drafting
Assets:       ready / not needed / TBD

Scope:
  - [ ] Text/copy edits only
  - [ ] Component additions
  - [ ] New page from template
  - [ ] CMS updates (FAQs, etc.)
  - [ ] Style or layout changes (requires Designer open)
```

---

## Prep Mode — What to Do Before the MCP

Run these in a **regular Claude conversation** (no Webflow MCP, no Figma). Use the context files and skills from this repo as reference.

### 1. Pick your persona
Load `context/personas.md` and identify which ICP you're writing for. KB and PD require different angles, different proof points, different CTAs. Don't write generic copy and try to apply it later.

### 2. Draft your copy
Load `context/voice.md` and the relevant persona skill:
- `skills/kb-persona.md` for Knowledge Business
- `skills/pd-persona.md` for Program Distributors
- `skills/brand-and-style-guide.md` for general marketing copy

Write all headlines, subheads, body copy, button text, and eyebrow labels before opening the MCP.

### 3. Run the humanizer
Load `skills/humanizer.md` and pass your copy through it. This catches AI writing patterns (hedge words, filler phrases, passive constructions) before they end up on the live site.

### 4. Choose your components
Load `context/components.md` and identify which components you'll use. Know the component names — not just "a card section" but the exact Webflow component name. This prevents Claude from guessing mid-session.

### 5. Decide your scope
Be explicit about what you're changing and what you're not. If it's copy only, say so. If you need layout changes, know that Designer tools require the Webflow Designer tab to be open and in the foreground.

---

## Execute Mode — What to Expect in the MCP Session

If your brief is complete, a Webflow MCP session should feel like handing off a spec to a contractor. Claude:

1. Calls `webflow_guide_tool` (mandatory first step — always)
2. Confirms the site and page
3. Snapshots existing elements before touching anything
4. States the plan and waits for your approval
5. Makes one change, confirms, moves to the next

You should be approving steps, not making decisions. If Claude is asking you what persona to write for, or what the headline should say, or which component to use — the prep wasn't done. Stop, go back to prep mode, and return with a complete brief.

---

## Context Window Economics

A Webflow MCP session has a context window. Every back-and-forth about copy, persona, or what to build consumes space that should be used for actual tool calls. When the window fills:
- Earlier tool results get compressed or dropped
- Claude loses fidelity on what was changed earlier in the session
- Mistakes become harder to catch

The more decisions you make before opening the MCP, the longer your execution session stays sharp. For large changes (new pages, multiple sections), consider breaking the work into multiple sessions — one per page section — rather than one long session.

---

## Quick Reference

| Task | Where to do it |
|------|---------------|
| Writing headlines and copy | Prep (regular Claude + voice.md + persona skills) |
| Humanizing copy | Prep (regular Claude + humanizer skill) |
| Choosing components | Prep (reference context/components.md) |
| Editing text on a live page | Execute (Webflow MCP) |
| Adding a component instance | Execute (Webflow MCP, Designer open) |
| Creating a new page from template | Execute (Webflow MCP) |
| Updating CMS FAQs | Execute (Webflow MCP, Data API — no Designer needed) |
| Uploading assets | Execute (Webflow MCP, Data API — no Designer needed) |
| Publishing | Only after explicit QA sign-off |

---

## Related Files

| File | What it covers |
|------|---------------|
| `CLAUDE.md` | Claude Code entry point — Webflow MCP sessions |
| `FIGMA.md` | Claude entry point — Figma Make sessions |
| `guidelines.md` | Design tokens — colors, type, spacing |
| `context/voice.md` | Brand voice and writing rules |
| `context/personas.md` | ICP personas and messaging matrix |
| `context/components.md` | Full Webflow component library |
| `context/webflow-rules.md` | What you can and cannot do in Webflow |
| `skills/` | Task-specific skills for copy and page editing |
