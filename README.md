# MLI — Movimiento Linealmente Independiente

Website for MLI, a student organization at FIUBA (Facultad de Ingeniería, Universidad de Buenos Aires). Landing page, searchable student guides, proposals and achievements (current and 2022–24 archive), and an organization history page.

All user-facing content is in Rioplatense Spanish.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Yarn

## Layout

```
src/app/
├── components/          Shared UI (navbar, CTA, 2022–24 sections)
├── guia/  guia-cbc/     Student guides — search + FAQ
├── propuestas/  logros/ Current proposals and achievements (+ _22-24 archives)
├── quienes-somos/       History and timeline
├── globals.css          Tailwind theme + semantic theme tokens
├── layout.tsx           Root layout, fonts, metadata
└── page.tsx             Landing
src/context/ThemeContext.tsx  Dark/light state, persisted to localStorage
src/hooks/useInView.ts        Scroll-reveal trigger
src/data/                     Guide and achievements content (JSON)
```

## Notable bits

- **Accent-insensitive search** in `/guia` — queries are NFD-normalized before matching, so `ingenieria` finds `Ingeniería`.
- **Content lives in JSON, not JSX.** The guides and achievements are data files, so they can be edited without touching components.
- **Light mode is the default**, set as `data-theme` on `<html>`; style with the semantic classes in `globals.css` (`bg-page`, `text-muted`…) or `dark:`.
- Scroll-reveal animations via an `useInView` hook.

## Running it

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build    # production build
yarn lint
```
