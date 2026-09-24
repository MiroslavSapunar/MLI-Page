# MLI — Movimiento Linealmente Independiente

Website for MLI, a student organization at FIUBA (Facultad de Ingeniería, Universidad de Buenos Aires). Landing page, a searchable student guide, an organization history page, and an archive of the 2024 election.

All user-facing content is in Rioplatense Spanish.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Yarn

## Layout

```
src/app/
├── components/          Reusable components (navbar, shared UI)
├── context/
│   └── ThemeContext.tsx Dark/light state, persisted to localStorage
├── guia/                Student guide — search + FAQ
├── quienes-somos/       History and timeline
├── elecciones-2024/     Election archive
├── globals.css          Tailwind theme (@theme syntax)
├── layout.tsx           Root layout
└── page.tsx             Landing
src/data/
├── achievements.json    Achievements, externalized from the components
└── guia.json            Student guide content, 12 sections
```

## Notable bits

- **Accent-insensitive search** in `/guia` — queries are NFD-normalized before matching, so `ingenieria` finds `Ingeniería`.
- **Content lives in JSON, not JSX.** The guide and achievements are data files, so they can be edited without touching components.
- **Dark mode is the default**, driven by a context hook rather than Tailwind's `dark:` variant, because the palette inverts rather than shifts.
- Scroll-reveal animations via an `useInView` hook.

## Running it

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build    # production build
yarn lint
```
