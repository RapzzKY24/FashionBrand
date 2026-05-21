# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run lint` | ESLint (flat config: `eslint.config.mjs`) |

No test framework is configured.

## Architecture

- **Route groups**: `(public)` wraps pages in Navbar+Footer layout; `(auth)` for login/register; `(authenticated)` for user dashboard with sidebar.
- **API routes** (`src/app/api/`) proxy to backend at `http://localhost:8080/api/v1/...`, forwarding auth token from cookie. See `API.md` for full backend reference.
- **Middleware**: Intended auth guard exists in `src/proxy.ts` but **no `middleware.ts`** is wired up — do not rely on it.
- **Zustand store**: Single `useCartStore` in `src/features/product/store/store.ts`. All cart actions (`addToCart`, `updateQuantity`, etc.) are **async** — they call API routes and replace state from response (not optimistic).
- **Auth**: Server actions (`src/features/auth/actions/authAction.ts`), JWT stored in `token` cookie.
- **Metadata**: Title is "Reflect Fashion", description is "Clone Design Website Reflect Fashion".
- **Hardcoded backend URL**: `http://localhost:8080` is hardcoded in API route handlers. No `.env` file present.

## Tech stack

- Next.js 16.2.6, React 19.2.4, TypeScript 5, Tailwind CSS 4, Zustand 5
- PostCSS plugin: `@tailwindcss/postcss` (Tailwind v4 naming)
- Path alias: `@/*` maps to project root
- Fonts: Roboto (variable `--font-roboto`) + Barlow Condensed (variable `--font-barlow`, weight 800)
- Currency: `formatRupiah()` in `src/utils/formatCurrency.ts` for IDR formatting

## Development quirks

- Most pages are **server components**. Only cart, checkout, navbar client, search modal, add-to-cart button, and user sidebar use `"use client"`.
- Cart is **not accessible without login** — API routes return 401 + empty cart if no token cookie is present.
- Checkout sends `{ address_id }` via POST. Shipping is fixed at 15,000 IDR by the backend.
