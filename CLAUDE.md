# MLI - Movimiento Linealmente Independiente

Website for MLI, a student union political organization at FIUBA (Facultad de Ingeniería, Universidad de Buenos Aires).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS v4 (uses `@theme` syntax in `globals.css`)
- **Language**: TypeScript
- **Package Manager**: Yarn

## Project Structure

```
src/app/
├── components/       # Reusable React components (navbar, etc.)
├── context/          # React Context providers
│   └── ThemeContext.tsx  # Dark/light mode state
├── elecciones-2024/  # Election 2024 archive page
├── guia/             # Student guide with search and FAQ
├── quienes-somos/    # "Who we are" - history/timeline page
├── globals.css       # Tailwind theme and custom styles
├── layout.tsx        # Root layout with ThemeProvider
└── page.tsx          # Landing page (main entry)
src/data/
├── achievements.json # Externalized data for achievements
└── guia.json         # Student guide content (12 sections)
public/
├── MLI.svg           # Logo (dark by default, invert for dark mode)
└── instagram.svg     # Instagram icon (dark by default, invert for dark mode)
```

## Key Commands

```bash
yarn dev      # Start development server
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint
```

## Theme Colors

Defined in `globals.css` under `@theme`:
- `primary`: #101820 (dark blue/black) - background in dark mode
- `secundary`: #f9423a (MLI red) — note the Spanish spelling

## Language

All user-facing content is in **Rioplatense Spanish** (Argentine Spanish):
- Use "vos" instead of "tú" (e.g., "Estudiantes como vos")
- Use local expressions (e.g., "faltan 5 para el peso", "fiubenses")
- Conjugate verbs accordingly (e.g., "vos sabés", "vos tenés", "participá", "votá")

## Design System

All pages must follow the landing page style. Key patterns:

### Dark/Light Mode
- Use `useTheme()` hook from `@/context/ThemeContext`
- Default mode is dark
- Apply conditional classes: `${isDark ? 'dark-styles' : 'light-styles'}`

### Typography & Colors
- Dark mode backgrounds: `bg-primary`, `bg-white/5`, `bg-white/10`
- Light mode backgrounds: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Text dark mode: `text-white`, `text-white/70`, `text-white/60`
- Text light mode: `text-gray-900`, `text-gray-600`, `text-gray-500`
- Accent color: `text-secundary`, `bg-secundary`

### Section Numbers (01, 02, 03...)
- Large decorative numbers: `text-[6rem] md:text-[8rem] lg:text-[12rem] font-black leading-none`
- Dark mode: `text-white/10`
- Light mode: `text-gray-300`

### Buttons
- Primary (filled): `bg-secundary text-white rounded-full`
- Secondary (outline): `border-2 border-white text-white` (dark) / `border-gray-900 text-gray-900` (light)
- Tertiary (subtle): `bg-white/10 text-white` (dark) / `bg-gray-100 text-gray-900` (light)

### Layout
- Max width: `max-w-7xl mx-auto px-8 lg:px-16`
- Section padding: `pt-20 pb-32`
- Grid system: `grid lg:grid-cols-12` with `lg:col-span-X`

### Animations
- Use `useInView` hook for scroll-reveal animations
- Transitions: `transform transition-all duration-700`
- Reveal pattern: `${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`

### Navigation
- Desktop: Sticky side dots (left)
- Mobile: Bottom pill navigation
- Header controls: Instagram + theme toggle (top right)

### SVG Icons
- Dark icons by default (MLI.svg, instagram.svg)
- Light mode: no filter
- Dark mode: `className="invert"`

## Notes

- Components use `'use client'` directive for client-side interactivity
- Images are served from `/public` directory
- Theme state persists to localStorage
- Search in /guia uses accent-insensitive matching (NFD normalization)
