# CLAUDE.md

## Project Overview

Personal portfolio website built on the **Magic Portfolio** template (v2.3.0). Deployed to **Vercel** at `https://tliu0x.vercel.app`.

## Tech Stack

- **Framework:** Next.js v16 (App Router) with React 19 and TypeScript
- **Content:** MDX files for blog posts (`src/app/blog/posts/`) and projects (`src/app/work/projects/`)
- **UI:** Once UI design system (`@once-ui-system/core`), SASS, custom CSS
- **Fonts:** Geist + Geist Mono via Next.js font optimization

## Commands

```bash
npm run dev       # Start dev server (port 3000)
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint
npm run biome-write  # Format all files with Biome
```

## Code Quality

- **Formatter:** Biome (2-space indent, 100-char line width)
- **Linter:** ESLint with `next/core-web-vitals`
- **Pre-commit:** lint-staged runs `biome check` and `biome format` on staged files
- **TypeScript:** Strict mode enabled

## Key Configuration Files

- `src/resources/content.tsx` — All portfolio content (person info, social links, page content)
- `src/resources/once-ui.config.ts` — Theme, color scheme, routes, display options
- `next.config.mjs` — Next.js config (MDX, image remote patterns, SASS)

## Environment Variables

### Public (NEXT_PUBLIC_*, exposed to browser)
- `NEXT_PUBLIC_PERSON_FIRST_NAME` — First name
- `NEXT_PUBLIC_PERSON_LAST_NAME` — Last name
- `NEXT_PUBLIC_PERSON_ROLE` — Professional title
- `NEXT_PUBLIC_PERSON_EMAIL` — Contact email
- `NEXT_PUBLIC_PERSON_LOCATION` — Timezone (e.g., "America/Los_Angeles")
- `NEXT_PUBLIC_GITHUB_URL` — Full GitHub profile URL (also used for avatar)
- `NEXT_PUBLIC_LINKEDIN_URL` — Full LinkedIn profile URL

### Private (server-side only)
- `PAGE_ACCESS_PASSWORD` — Optional password for route protection (`/api/authenticate`)

## Architecture Notes

- Content is file-based (MDX + `content.tsx`), no external CMS
- Route protection via cookie-based auth (`RouteGuard` component + API routes)
- OG image generation via `next/og` at `/api/og/generate`
- RSS feed generated at `/api/rss`
- No analytics or tracking services
- No GitHub Actions CI/CD — Vercel handles deployment via git integration
