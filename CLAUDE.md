# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**

```bash
npm run dev                    # Starts Next.js dev server + CSS watchers
npm run storybook:start        # Starts Storybook on port 6006
```

**Building and testing:**

```bash
npm run build                  # Full production build (prebuild + CSS + Next.js)
npm run lint                   # Run all linting (ESLint, ls-lint, Stylelint, TypeScript)
npm run lint:eslint            # ESLint with auto-fix
npm run lint:typescript        # TypeScript type checking
npm run lint:stylelint         # Stylelint for .pcss files with auto-fix
```

**CSS processing:**

```bash
npm run build:css              # Build all CSS (components + global)
npm run dev:css:components     # Watch component .pcss files
npm run dev:css:global         # Watch global styles
```

## Architecture Overview

**Frontend Stack:**

- Next.js 14 with App Router
- TypeScript with strict mode
- PostCSS for styling (not Tailwind/CSS-in-JS)
- Strapi GraphQL API backend
- NextAuth.js with Google Workspace integration

**Component Architecture:**

- Atomic Design Pattern: `atoms/` → `molecules/` → `organisms/`
- Each component has `.tsx`, `.pcss`, `.stories.ts`, and `types.ts` files
- CSS Modules pattern with `.pcss` source files compiled to `.css`
- Dynamic content blocks system in `src/content-blocks/`

**Key Architectural Patterns:**

1. **Content Blocks System**: Pages are built using dynamic content blocks (HeroBlock, TextImageBlock, etc.) that map GraphQL `__typename` to React components via `src/content-blocks/index.tsx`

2. **API Layer**: Organized by domain in `src/lib/api/` with separate `queries.ts`, `mutations.ts`, and `api.ts` files for each entity (activities, files, groups, general, etc.). General data APIs in `src/lib/api/general/` handle navigation, footer, and SEO data with optimized caching.

3. **Middleware Chain**: Custom middleware system in `src/middlewares/` for authentication, dashboard access, and route protection

4. **Path Aliases**:

   - `@/*` maps to `src/*`
   - `~/*` maps to root directory

5. **Import Order**: Strictly enforced ESLint rule with specific path group ordering:
   - External packages
   - Internal: i18n → lib → types → assets → components (atoms → molecules → organisms) → content-blocks
   - Relative imports (types first, CSS last)

**Authentication & Authorization:**

- NextAuth.js with Google Workspace provider
- Password protected routes protected by `authMiddleware`
- Role-based permissions using `getOrganisationRole()` helper
- Session management via custom `SessionProvider`

**Internationalization:**

- `next-intl` for Dutch language support
- Translations in `locales/nl/` directory
- Server-side translation rendering

**Styling System:**

- PostCSS with custom CSS architecture (not utility-first)
- Global design tokens in `src/assets/styles/settings/`
- Component-specific styles in `.pcss` files
- Build process compiles `.pcss` → `.css`

**Git Workflow:**

- Trunk-based development on `main` branch
- Branch naming: `feature/SLWEB-[number]-description`
- Squash merging with rebase for conflict resolution
- All commits require PR approval

**Performance & Caching:**

- Shared data context (`DataContext`) prevents duplicate API calls in layout/pages
- Aggressive Next.js caching: 1-hour for static data (navigation/footer), 5-minute for dynamic data
- Split GraphQL queries: separate queries for navigation, footer, and SEO data instead of single large query
- Netlify CDN optimization with proper cache headers for assets

**Package Management:**

- NPM only (enforced by preinstall script)
- No Yarn or other package managers allowed

**Deployment:**

- Frontend: Netlify with Next.js plugin
- Backend: Heroku Basic plan (Strapi)
- Database: MySQL on Vimexx
- CDN: Cloudinary for images
