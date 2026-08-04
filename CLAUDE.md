# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and other AI assistants when working with code in this repository.

## Project Overview

**Symplify Health** is an AI-enhanced hospital/clinic management dashboard — a multi-role healthcare admin platform (patient, doctor, super-admin, clinic, HRM, finance) with an embedded clinical AI layer. It is a front-end single-page application; there is **no backend in this repo**. All data is static/mock and all AI features run against a bundled mock engine.

- **Stack:** React 19 + TypeScript 5.9 (strict) + Vite 6
- **Deploy targets:** Vercel (`vercel.json` SPA rewrite); also referenced as a Netlify deployment
- **Scope:** ~463 `.tsx` files across a large catalog of admin/clinical screens wired through a central route registry

## Commands

```bash
npm install       # Install dependencies (npm is the package manager — package-lock.json is committed)
npm run dev       # Start Vite dev server with HMR (default http://localhost:5173)
npm run build     # Type-check all project refs, then build: tsc -b && vite build  -> dist/
npm run lint      # ESLint (flat config) over .ts/.tsx
npm run preview   # Serve the built dist/ locally
```

- **No test runner is configured** — there are no test files, scripts, or framework. Do not assume `npm test` exists.
- Before committing, run `npm run lint`. A successful `npm run build` requires `tsc -b` to pass (TypeScript strict mode is on).
- Node 18+ (Node 20 LTS recommended) is inferred from Vite 6; there is no `engines` field.

## Architecture

### Tech stack

- **State:** Redux Toolkit + React-Redux (store in `src/core/redux/store.tsx`)
- **Routing:** React Router 7 (`react-router` / `react-router-dom`), `BrowserRouter` with `basename`
- **UI libraries (mixed):** Bootstrap 5 + React-Bootstrap 2, Ant Design 5, PrimeReact 10
- **Charts:** ApexCharts (`react-apexcharts`) and Chart.js (`react-chartjs-2`)
- **Calendar:** FullCalendar · **Maps:** Leaflet / React-Leaflet
- **i18n:** i18next + react-i18next (browser language detector, HTTP backend)
- **Styling:** SCSS (Dart Sass) with CSS custom-property design tokens
- **Icons (multiple libraries):** Tabler, Ant Design Icons, Font Awesome, Weather Icons — check existing usage before adding a new icon source

### App bootstrap

`src/main.tsx` is the entry point: it wraps the app in the Redux `<Provider>` and `<BrowserRouter basename={base_path}>`, mounts `<ThemeRouteHandler />` (applies light/dark based on route path) and `<ALLRoutes />`, and imports global CSS (Bootstrap, Feather, Tabler icons, `index.scss`).

### Directory layout

```
src/
├── main.tsx                  # App bootstrap: Redux Provider + Router + ThemeRouteHandler
├── environment.tsx           # base_path and img_path (both default to '/')
├── index.scss                # Global style entry + Ant Design overrides
├── core/                     # Shared infrastructure
│   ├── ai/                   # AI service boundary, mock engine, types (AIService.ts, mockApi.ts, types.ts)
│   ├── api/mock/             # Mock API layer
│   ├── common/               # Reusable layout/UI: header, 3 sidebars, footer, dataTable,
│   │                         #   theme-settings, theme-route-handler, breadcrumb, etc.
│   ├── data/interface/       # TypeScript interfaces
│   ├── json/                 # Static/mock datasets as .tsx files exporting arrays
│   ├── hooks/                # Custom hooks (useVoiceRecognition, useDrugInteraction)
│   ├── redux/                # Store + slices
│   └── imageWithBasePath/    # Base-path-aware <img> helper (ImageWithBasePath)
├── feature-module/
│   ├── ai/                   # AI feature components + barrel index (index.ts)
│   ├── components/           # Screen components: auth/ and pages/ (organized by domain)
│   ├── feathure-components/  # Layout wrappers: feature.tsx, authFeature.tsx  (NOTE: misspelled dir)
│   └── routes/               # all_routes.tsx, router.tsx, router.link.tsx
└── style/                    # SCSS lives HERE (not under src/core)
    ├── scss/                 # _variables.scss design tokens + components/pages/plugins/structure/utils
    ├── css/ · fonts/ · icon/
```

> Note: the directory is spelled `feathure-components` in the repo (a typo). Keep using that path — do not "fix" it without updating every import.

### Routing & layouts

Routes live in three files under `src/feature-module/routes/`:

1. **`all_routes.tsx`** — the `all_routes` object: every path as a string constant. Import these constants rather than hardcoding path strings.
2. **`router.link.tsx`** — maps screen components (imported **eagerly**, not lazily) into two arrays: `publicRoutes[]` and `authRoutes[]`.
3. **`router.tsx`** — renders `publicRoutes` inside the `<Feature />` layout and `authRoutes` inside the `<AuthFeature />` layout.

The main layout `src/feature-module/feathure-components/feature.tsx` chooses a sidebar from the current pathname:

- Doctor routes → `<SidebarTwo />`
- Patient routes → `<Sidebarthree />`
- All other (admin/clinic/HRM/finance) → `<Sidebar />`

It also renders `<Header />`, `<ThemeSettings />`, and the floating `<AIAssistantWidget />`, and reads layout/theme/sidebar state from Redux to drive `data-*` attributes.

**To add a screen:** create the component under `feature-module/components/...`, add a path constant to `all_routes.tsx`, import the component and register it in `publicRoutes` (or `authRoutes`) in `router.link.tsx`.

### Redux store

`src/core/redux/store.tsx` composes these slices (use `RootState` / `AppDispatch` exported there for typing):

| Slice key      | Responsibility |
| -------------- | -------------- |
| `sidebarSlice` | Mobile sidebar, mini mode, expand-on-hover state |
| `theme`        | Theme settings (light/dark, layout mode, sidebar style, RTL, color scheme); persists to localStorage |
| `ai`           | Triage, scheduler, alerts, message-router async state |
| `shiftHandoff` | SBAR-structured shift-handoff data |
| `notifications`| System notification state |
| `email`        | Email module state |
| `role`         | Current user role + transition/animation state |

(`drugInteractionSlice` and `voiceDocSlice` also exist in `core/redux/` for the AI features.)

### AI layer

The AI layer is split between a **core service boundary** and **feature components**, and currently runs entirely on a mock engine (no live inference, simulated 300–700ms delays).

- `src/core/ai/AIService.ts` — the `AIService` interface (`sendMessage`, `getQuickActions`, `executeAction`) and the default `mockAIService`. Inject a custom implementation via the `aiService` prop on `<AIAssistantPopup>` / `<AIAssistantWidget>` to swap the mock for a real backend **without touching component code**.
- `src/core/ai/mockApi.ts` — the mock inference engine (triage assessment, personalized layout, slot suggestions, clinical alerts, message analysis, alert WebSocket).
- `src/core/ai/types.ts` — shared AI types (triage priority, vitals, acuity, scheduling, dashboard personalization).
- `src/core/ai/index.ts` — barrel exports for the AI core.
- `src/feature-module/ai/index.ts` — barrel exports for AI feature components (triage badge, dashboard widgets, smart scheduler, clinical alerts, message router, intelligent calendar, assistant popup/widget, shift handoff/SBAR, voice documentation, drug-interaction checker, AI notifications, email priority, message-urgency analyzer, chat inbox).

```ts
import { mockAIService } from "./core/ai";
import { AIAssistantPopup } from "./feature-module/ai";

<AIAssistantPopup aiService={mockAIService} userRole="nurse" />
```

### Theming & design tokens

- Tokens are defined as CSS custom properties in `src/style/scss/_variables.scss`.
- **Brand:** `--primary: #2E37A4`, `--secondary: #00D3C7`; plus semantic success/info/danger/warning and a 100–900 gray ramp.
- **Clinical tokens:** healthcare severity colors — `--clinical-critical`, `--clinical-urgent`, `--clinical-caution`, `--clinical-stable`, `--clinical-info` (each with `-bg` / `-border` variants).
- **Spacing:** 4px-grid scale (`--space-1` … `--space-16`). **Type:** `--text-xs` … `--text-2xl` (base `0.875rem`). **Radius/elevation:** `--radius-*` + three-tier shadows.
- **Dark mode:** `:root[data-bs-theme=dark]`, toggled by `ThemeRouteHandler` for `*layout-dark*` routes and by the theme-settings sidebar.
- Multiple layout modes (default, mini, hover, hidden, full-width, dark, RTL) are switchable at runtime via theme settings (persisted to localStorage) and via dedicated routes.

### Environment / config

- `src/environment.tsx` exports `base_path` and `img_path` (both `/`). The router uses `base_path`; images go through `ImageWithBasePath` (`src/core/imageWithBasePath/`) which prefixes `img_path`.
- The root `.env` is **empty** and the app reads no `import.meta.env.*` variables. There is no runtime config to wire up.

## Conventions

- **Use `all_routes` constants** for navigation paths instead of literal strings.
- **Static/mock data** belongs in `src/core/json/` as `.tsx` files exporting typed arrays; shared **interfaces** in `src/core/data/interface/`.
- **SCSS organization:** reusable component styles under `src/style/scss/components`, page-level overrides under `src/style/scss/pages`; Ant Design global overrides live in `src/index.scss`.
- **Images:** prefer `ImageWithBasePath` over raw `<img>` so base-path handling stays consistent.
- **Icons:** several icon libraries are already in use — match the existing library on a given screen rather than introducing another.
- TypeScript is strict, but `noUnusedLocals` / `noUnusedParameters` are **off** in `tsconfig.app.json`; ESLint enforces React Hooks rules and `react-refresh/only-export-components`.
- Match the surrounding file's style (mixed UI libraries are normal here); this is a large template-derived codebase, so prefer following local patterns over global refactors.

## Things to know / gotchas

- **No tests, no CI test gate** — verify changes by running `npm run dev` / `npm run build`.
- **No live AI backend** — everything AI-related is mocked behind `AIService`.
- `feathure-components/` is intentionally (mis)spelled; `feature-module/feature-module.zip` may be a committed archive of unclear purpose — don't rely on it.
- There is no `LICENSE` or `CONTRIBUTING.md` in the repo.
- A more design-focused doc set lives under `documentation/` (audits, design-system specs, an earlier `documentation/CLAUDE.md`). This root `CLAUDE.md` is the authoritative engineering guide; where they disagree, trust this file (e.g. SCSS lives at `src/style/`, and route imports are eager).
