---
name: Premium motion layer (Lenis + custom cursor + page loader)
description: Decisions behind the global smooth-scroll/cursor/loader layer added to insideout-web; apply the same pattern for any similar "premium SaaS" motion request.
---

## Decisions

- Smooth scroll (Lenis), a custom cursor, and a branded page loader were added globally in `App.tsx` rather than per-page, since they are app-wide chrome, not page content.
- Both Lenis and the custom cursor are gated behind `prefers-reduced-motion` and, for the cursor, `pointer: fine` (skip on touch devices) — checked via `matchMedia` in a shared `usePrefersReducedMotion` hook.

**Why:** a "make it feel premium" style brief (Apple/Stripe/Linear-level polish brief) commonly asks for global smooth scroll, custom cursor, and load animation — these are cross-cutting concerns, not something to duplicate into every page component.

## Gotcha: cursor:none must be JS-gated, not a blanket CSS rule

Hiding the native cursor with a blanket `@media (pointer: fine) { cursor: none }` rule is risky: if the custom cursor component fails to mount/hydrate (or hasn't yet on first paint), the user has no cursor at all.

**How to apply:** the custom cursor component itself toggles a `body.custom-cursor-active` class only after it confirms `pointer: fine` and no reduced-motion preference, and removes the class on unmount. The CSS rule (`body.custom-cursor-active a, button, ... { cursor: none }`) only fires when that class is present — never write the blanket version.

## Preserving brand identity under generic redesign briefs

When a user attaches a generic "premium SaaS redesign" brief (glassmorphism, 8px spacing, a specific blue palette like `#0F172A`/`#2563EB`), treat the brief as a source of *motion/spacing/interaction principles* only — do not swap an established brand's color palette (e.g. Navy/Orange here) for the brief's example palette unless the user explicitly asks to rebrand.
