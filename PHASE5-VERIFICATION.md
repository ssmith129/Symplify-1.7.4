# Phase 5 — Runtime Verification Sign-off

Branch: `claude/gracious-hypatia-qyabxh` · Date: 2026-06-17

This is a verification report, not a code change. Phases 0–4 are committed and
each phase's `npm run build` passed. Items below are marked **PASS** /
**FAIL** / **OUTSTANDING**. Several items require a real browser + DevTools and
**cannot be executed in this headless CI environment** — those are honestly
marked OUTSTANDING (not PASS) with the static evidence gathered so far.

> Merge rule: do **not** merge while any P0-linked item (GAP-2 colors,
> keyboard focus) is FAIL. None are FAIL; the two P0-linked runtime checks are
> OUTSTANDING and must be confirmed in a browser before merge.

---

## GAP-2 [VERIFY] — Clinical token override by AntD/Bootstrap cascade (P0-linked)

**Status: OUTSTANDING (static evidence favorable; runtime DevTools check pending)**

Static analysis performed:
- `--clinical-*` tokens are defined in exactly two places — the light `:root`
  (`_variables.scss:108–122`) and the dark-mode block (`:279–293`). No other
  file redefines them, so the corrected (WCAG-AA) values are authoritative at
  the token layer.
- The corrected tokens are consumed almost entirely through **inline
  `style={{ ... var(--clinical-*) }}`** (e.g. `TriagePriorityBadge`,
  `ClinicalAlertWidget`, `EmailPriorityBadge`, the shift-handoff cards). Inline
  styles outrank AntD/Bootstrap **class** selectors, so the cascade does not
  win against them.
- The only `color: … !important` in our SCSS is `.badge-soft-light`
  (`_badge.scss:42`), which is class-scoped and does **not** match the clinical
  badges — so no `!important` beats the inline clinical colors.
- There is **no AntD `ConfigProvider` theme** in the app (`src/main.tsx`), so
  AntD components fall back to their default token palette; clinical colors are
  layered on via inline style rather than AntD tokens.

Why still OUTSTANDING: the plan calls for confirming, in DevTools → Computed,
that across the rendered AntD surfaces nothing overrides the corrected colors.
That requires a running browser, which isn't available here. The static
evidence predicts LOW risk, but the runtime confirmation has not been done.

**Contingency (drafted, NOT applied):** if a runtime check finds an AntD
component rendering an un-corrected clinical color, scope AntD's theme tokens to
the corrected values via `ConfigProvider` in `src/main.tsx`:

```tsx
// src/main.tsx — DRAFT, apply only if GAP-2 runtime check fails
import { ConfigProvider } from 'antd';

const clinicalTheme = {
  token: {
    colorError:   '#B91C1C', // --clinical-critical (light)
    colorWarning: '#854D0E', // --clinical-caution  (light)
    colorSuccess: '#15803D', // --clinical-stable   (light)
    colorInfo:    '#1D4ED8', // --clinical-info      (light)
  },
};

// Wrap <ALLRoutes /> with <ConfigProvider theme={clinicalTheme}> … </ConfigProvider>
// Note: AntD tokens are single-valued; dark-mode parity would require the
// theme.darkAlgorithm + a dark token override, or keeping the inline-style
// approach (preferred, already AA in both modes).
```

---

## GAP-1 [SCREENSHOT NEEDED] — Dashboards / tables / calendar at runtime

**Status: OUTSTANDING** — cannot capture screenshots in a headless environment.
`npm run build && npm run preview` serves the app; screenshots of the
dashboards, data tables, and calendar must be captured by a reviewer with a
browser. No code blocker found in build.

---

## GAP-3 [VERIFY] — Reflow at breakpoints + 44px touch targets

**Status: OUTSTANDING** — requires a browser with device emulation. Not
scriptable here. Recommend verifying 320/768/1024/1440 widths and confirming
interactive controls (buttons, tab chips, acknowledge bar, badges) meet the
44×44px minimum touch target on mobile.

---

## GAP-4 [DATA NEEDED] — Production bundle size + backend reality

**Status: PASS (data captured) / informs "Not assessed" requirement**

- Bundle size `du -sh dist`: **42M before Phase 4 → 42M after**. Main JS
  `index-*.js` ≈ **6.79 MB** (unchanged), CSS ≈ 2.27 MB (unchanged). Removing
  `primereact` + `jquery` produced **~0 shipped-bundle delta** because neither
  was ever imported — they were dead weight in `node_modules`/install only.
- Backend: **no real HTTP backend exists.** There is no `axios`/`fetch`/
  `VITE_API` usage in `src/core`; all AI data is served by
  `src/core/ai/mockApi.ts`. Consequence: the **"Not assessed"** neutral state
  added in Phase 2 is the correct, future-proof behavior, and becomes
  *mandatory* once a real backend replaces `mockApi` (a real patient with no
  assessment must never show fabricated triage). Under the current mock-only
  build, badges rendered without symptoms now correctly show "Not assessed"
  instead of random data.

---

## Keyboard pass — focus-visible rings (P0-linked)

**Status: OUTSTANDING (CSS in place & build-verified; live tab-through pending)**

- `:focus-visible` rings (`2px solid var(--primary)`, `2px` offset) were added
  wherever `outline:none` suppressed the indicator: `_login.scss` (OTP),
  `_voice-documentation.scss`, `_email-ai.scss`, `_notification-ai.scss`, and
  the select2 search field in `_forms.scss`. Build compiles these rules.
- Live verification (tab through login/OTP and forms, confirming every focus
  stop shows the ring) needs a browser and is OUTSTANDING.

---

## Summary

| Item | P0? | Status |
|------|-----|--------|
| GAP-2 clinical token override | yes | OUTSTANDING (static: low risk; runtime pending) |
| GAP-1 runtime screenshots | no | OUTSTANDING (headless) |
| GAP-3 reflow + 44px targets | no | OUTSTANDING (headless) |
| GAP-4 bundle size + backend | no | PASS (data captured) |
| Keyboard focus-visible | yes | OUTSTANDING (CSS done; live tab pending) |

**Do not merge** until GAP-2 (runtime color check) and the keyboard focus
tab-through are confirmed PASS in a browser. All scriptable checks and every
phase build are green.
