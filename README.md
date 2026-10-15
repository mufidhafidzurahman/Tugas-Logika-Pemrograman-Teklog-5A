# Mufid Hafidzurahman — Personal Portfolio & Logistics Innovation Lab

Static multipage site (HTML + CSS + ES-module JavaScript, no UI framework). Supabase (Auth, Postgres, Storage) for dynamic content from Phase 2–3; GitHub + Vercel for deployment.

**Current status: Phase 0 — design foundation.** No backend is connected. Nothing here is a CMS yet.

## Run locally

```bash
npm run dev          # serves on http://localhost:3000 (uses `serve`, which supports clean URLs)
```

Alternative with no Node: `python3 -m http.server 3000` — works for `/` and `/design-system.html`, but clean URLs such as `/about` need `/about.html`.

## What exists (Phase 0)

| Path | Purpose |
|---|---|
| `assets/css/tokens.css` | Single source of truth for color, type, spacing |
| `assets/css/base|layout|components|pages|responsive.css` | Reset/typography, layout, buttons/cards/forms/alerts, hero/pillars, breakpoints |
| `assets/js/config.js` | Public site constants (email, social). Replaced by `site_settings` in Phase 3 |
| `assets/js/i18n.js` | UI ID/EN dictionary, language switch (persisted in `localStorage`) |
| `assets/js/navigation.js` | Shared header/footer built with DOM APIs |
| `assets/js/utils.js` | `el()` DOM helper, safe-URL checks |
| `index.html` | Home: hero + four pillars |
| `design-system.html` | Internal component reference (noindex; delete before launch) |
| other `*.html` | Placeholder pages for routes built in Phase 1 (noindex) |
| `vercel.json` | Clean URLs, slug rewrites, basic security headers |
| `Asset_Content_Checklist.md` | What is verified, pending, or in conflict |

## Assumptions and decisions

- **Fonts:** Fraunces (headlines) and Inter (body) loaded from Google Fonts with `display=swap` and system fallbacks. Privacy impact: visitors' IP addresses are sent to Google when fonts load. To avoid this, self-host the font files later.
- **Default language:** Indonesian. UI strings are translated; the page keeps its place when switching.
- **Orange (#FCA311) is used for fills and markers only.** Text accents use a darker orange (`--color-accent-text`) to meet contrast.
- **CV button** is intentionally absent until the owner chooses a public CV link (a dead button would violate the spec).
- **Header and footer are rendered by JavaScript.** Trade-off: simpler maintenance, but they are absent without JS and not in raw HTML for crawlers. Page `<main>` content is static HTML.
- **No canonical/OG tags yet** because the production domain is undecided. All pages carry `noindex` until launch.
- **Slug pages** (`/projects/:slug`, `/insights/:slug`) are handled by Vercel rewrites to `project.html` / `article.html`. Locally with `serve` this rewrite does not exist; it is tested on Vercel preview in Phase 4.

## Security rules (apply to every phase)

- Never commit `.env`. Only the Supabase project URL and publishable/anon key may reach the browser; secret/service-role keys never.
- Never paste passwords or tokens into chat, code, or the repo.
- Database access control must be enforced by RLS + grants, not UI guards (Phase 2).

## Next

Phase 1: public pages with verified seed content. Blocked mainly on the open items in `Asset_Content_Checklist.md` (project evidence, HKI titles, CV link).
