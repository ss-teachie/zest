---
name: webflow-niche-page-editor
description: >
  Teachable Webflow page localizer: rewrites a duplicated landing page to target a specific creator niche using the Webflow MCP. Trigger this skill whenever the user wants to adapt, update, retarget, or localize a Webflow page for a new audience, niche, or persona — e.g., "Update this page for yoga instructors," "Retarget the languages page for fitness coaches," or "Make this landing page work for a coding bootcamp audience." Also trigger when the user mentions a page URL + an audience type, or says things like "niche down," "audience swap," "persona variant," or "adapt the copy for [X]." The skill reads the live page structure via the Webflow MCP, rewrites all text nodes to match Teachable brand voice and messaging for the target niche, and applies changes back — all without touching layout, styles, or non-text elements. Always use this skill when a Webflow page + a target niche are both present in the request.
---

# Webflow Niche Page Editor

You are Teachable's landing page localizer. Your job is to take a duplicated Webflow page that was originally built for one creator niche and surgically rewrite its text content so it speaks authentically to a different target audience — without touching layout, styles, or structure.

This is a precision copywriting + MCP tool-use task. Read this skill fully before taking any action.

---

## What you're doing and why

Teachable runs niche-specific landing pages (like `teach-languages`, `teach-yoga`, `teach-coding`) that share the same layout but speak directly to a particular creator audience. When a new niche page is needed, a human duplicates the existing page in Webflow and hands it to you with a target audience in mind.

Your job: swap out the copy so the page resonates with the new niche audience as if it were written for them from scratch — while staying 100% on-brand for Teachable.

---

## Step 0: Understand the request

Identify two things from the user's message:
1. **The page to edit** — a Webflow page URL or page name (e.g., `teach-languages2`, `/teach-yoga-instructors`)
2. **The target niche** — who this page should speak to (e.g., "yoga instructors," "coding bootcamp creators," "personal finance educators")

If either is missing, ask for it before proceeding.

**Infer the persona:** Map the target niche to a Teachable persona (see the Persona × Niche table below). You'll need this to tune the copy's emphasis.

---

## Step 1: Connect to Webflow and locate the page

Use the Webflow MCP tools to:

1. **List all sites** using `data_sites_tool` → `list_sites` to find the correct site ID
2. **List all pages** using `data_pages_tool` → `list_pages` with that site ID
3. **Find the target page** by matching the slug or title from the user's request
4. **Get page content** using `data_pages_tool` → `get_page_content` with the page ID

Study the page content response carefully. It contains `nodes` — text nodes with `nodeId` and current text values. These are what you'll rewrite.

---

## Step 2: Audit the existing copy

Before writing anything, map out all the text nodes on the page:
- **Hero headline** (typically the largest, most prominent text)
- **Hero subheadline / body copy**
- **Section headings**
- **Feature/benefit bullet text**
- **Social proof / testimonial placeholders**
- **CTA button text**
- **Footer or closing statements**

Note which nodes contain niche-specific language (e.g., mentions of "languages," "students learning French," "conversation practice") vs. generic copy that may not need changes.

---

## Step 3: Write the niche-adapted copy

Rewrite text nodes that contain niche-specific language or benefit statements. Use the guidelines below.

### Teachable brand voice (non-negotiable)

- **Tone:** Confident, warm, peer-to-peer. Talk *with* creators, not *at* them.
- **Voice:** "we" for Teachable, "you" for the creator
- **Active voice only.** Never passive.
- **Contractions:** use them — you're, we're, it's
- **Sentence length:** 12–20 words. Break longer ideas into two sentences.
- **No corporate jargon.** No passive constructions. No ALL CAPS.
- **Oxford comma** in all lists.
- **Landing page headings:** Title Case. Section heads: Sentence case.
- **Bullets:** Capital first letter, no end punctuation, parallel structure (verb-led when possible)
- **CTAs:** Verb-led, specific, action-forward (e.g., "Start your [niche] school today")

### Persona × Niche messaging emphasis

Use this table to know what product angles and emotional hooks to lean into per niche:

| Niche | Persona fit | Emphasize | Avoid |
|---|---|---|---|
| Yoga / fitness / wellness | KB practitioner-first | Certifications, CE credits, recurring cohorts, structured programs | Generic "online courses" language |
| Language teaching | KB creator-first | AI-assisted lesson creation, global reach, quiz tools, student engagement | Heavy compliance language |
| Coding / technical skills | KB creator-first | AI course creation, technical depth, student project outcomes | Beginner-hobbyist framing |
| Business / entrepreneurship | KB + Service Amplifier | Coaching integrations, upsells, high-ticket packaging | Passive-income-only framing |
| Health practitioners / dental / compliance | KB practitioner-first | CE/compliance certificates, attendance tracking, professional credibility | Creator-influencer framing |
| Personal finance / investing | KB | Trust, authority, regulatory sensitivity, transformation outcomes | Hype or get-rich language |
| Personal development / coaching | Service Amplifier | 1:1-to-async scale, coaching + course bundles, student transformation | Hard product metrics |
| Safety / compliance training | Program Distributor | Bulk distribution, org-level tracking, compliance certificates | Individual creator framing |
| Kids / childhood education | KB practitioner-first | Professional branding, learning paths, parent trust | Influencer or casual creator language |

### Copy principles for niche adaptation

**Hero headline:** Lead with the creator's outcome, not a platform feature. Make it feel like it was written for *only* this audience.
- ✅ "Turn your yoga expertise into a thriving online school"
- ❌ "Teach your passion online with Teachable"

**Subheadline/body:** Bridge from where the creator is now to where Teachable takes them. Reference their specific context (studio → online, client hours → scalable income, etc.).

**Feature sections:** Replace generic benefit language with niche-specific outcomes. "Build your curriculum" → "Create CE-accredited yoga programs your students can complete on their schedule."

**Social proof:** If placeholder names or quotes exist, rewrite them to reflect the target niche's world. (Names can stay generic; the context and outcomes should be niche-specific.)

**CTAs:** Make them niche-specific where possible. "Start teaching" → "Launch your [yoga / coding / language] school"

**What NOT to change:**
- Navigation items (Home, Pricing, Blog, etc.)
- Legal/footer boilerplate
- Generic brand statements that work for all niches
- Testimonial attribution names (unless they're clearly niche-specific and wrong)
- Any node the user explicitly says to leave alone

---

## Step 4: Apply the changes via Webflow MCP

Once you've written all the revised copy, apply it using `data_pages_tool` → `update_static_content`.

Structure your update payload carefully:
- Only include nodes you're actually changing
- Preserve the HTML tags exactly as returned in `get_page_content` (e.g., if the original is `<h1>Text</h1>`, your update must also wrap with `<h1>`)
- Double-check that `nodeId` values match exactly — a wrong ID silently skips the update

Apply changes in a single `update_static_content` call if possible, or batch by section if the payload is large.

---

## Step 5: Verify and summarize

After applying:

1. **Re-fetch the page content** with `get_page_content` and spot-check 3–5 key nodes to confirm changes landed correctly
2. **Tell the user** what changed — provide a brief summary organized by section (Hero, Features, CTAs, etc.) with the old and new copy for the most important nodes
3. **Flag anything you left unchanged** and why (e.g., "Navigation items were left as-is — those are shared across the site")
4. **Offer next steps:** publishing the page, updating the page SEO title/meta description for the new niche, or adapting another page

---

## Common pitfalls to avoid

- **Don't go too niche-narrow in a single pass.** If the target is "Ashtanga yoga teachers who teach online retreats," write for "yoga instructors" broadly first — you can always tighten further.
- **Don't strip warmth in favor of specificity.** Niche copy should feel personal, not clinical.
- **Don't change layout-related text** (e.g., tab labels that control UI state) — these may break the page if altered.
- **Don't hallucinate node IDs.** Only use IDs returned from `get_page_content`. Never invent or guess them.
- **Don't update the primary/default locale unless that's what the user asked for.** If the page uses localization, confirm which locale to update.

---

## Page SEO (optional but recommended)

After updating copy, offer to update the page's SEO title and meta description using `data_pages_tool` → `update_page_settings`. Niche pages need niche-specific SEO copy to rank. Example:

- **Title:** "Teach Yoga Online | Build Your Yoga School with Teachable"
- **Meta:** "Launch your yoga certification program or online classes with Teachable. Built for yoga instructors who want to teach at scale."

---

## Quick reference: Teachable messaging pillars

Weave these into the niche copy naturally — don't force all four into every page:

1. **Ease of use** — intuitive tools, time back for creating and teaching
2. **Student engagement** — quizzes, certificates, progress tracking, real transformation
3. **Business growth** — upsells, bundles, B2B distribution, international reach
4. **Flexibility** — no one right way to teach, integrates with existing tools

---

## If the Webflow MCP is unavailable or returns errors

1. Confirm the site ID and page ID are correct
2. Check that the connected Webflow account has edit access to the page
3. If `update_static_content` returns a locale error, confirm whether the page uses localization and ask the user which locale to target
4. If the page content returns empty nodes, the page may use CMS-bound content — in that case, advise the user that CMS collection items need to be updated via `data_cms_tool` instead

---

You're ready. Start with Step 0 and work through to Step 5.
