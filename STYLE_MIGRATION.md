# Demo A Style Migration Plan

Migrate all app pages (except `/quienes-somos`) from the current soft/round aesthetic to the **Demo A "Swiss Grid / Sharp"** style.

**Core principle:** Angular, fast, modern. Zero border-radius on buttons and cards. Red accent bars instead of filled blobs. Typographic hierarchy. Grid-visible layouts.

**Unchanged:** `/quienes-somos` (intentional serif/narrative style), `/padron2026` (utility), legacy archive pages (inherit tokens from shared components automatically).

---

## Design token changes

| Element          | Before                              | After                                   |
|------------------|-------------------------------------|-----------------------------------------|
| Primary button   | `rounded-full bg-secundary`         | `bg-secundary` (no radius)              |
| Outline button   | `rounded-full border-2`             | `border-2` (no radius)                  |
| Ghost button     | `rounded-full bg-white/10`          | `bg-white/10` (no radius)               |
| Content cards    | `rounded-3xl` / `rounded-2xl`       | no radius + left red accent bar         |
| Card hover       | `hover:scale-105`                   | keep scale-105 OR `hover:border-secundary` bar effect |
| NavBar border    | `border-b border-gray-200`          | `border-b-2 border-secundary`           |
| Section nav pills| `rounded-full`                      | no radius (rectangular pill)            |
| FAQ items        | `rounded-xl`                        | no radius                               |
| Search input     | `rounded-xl`                        | no radius                               |
| Icon containers  | `rounded-2xl` / `rounded-full`      | no radius (square)                      |
| CTA footer       | `rounded-lg` buttons                | no radius                               |
| Scroll-to-top    | `rounded-full` button               | no radius (square icon button)          |
| Bottom mobile nav| `rounded-full` container            | rectangular strip                       |
| Stats cards      | `rounded-2xl`                       | no radius, border dividers              |
| Guide link arrows| `rounded-full` icon circles         | square icon containers                  |

**Kept rounded:**
- `ThemeToggle` button stays `rounded-full` (it's a circular icon button — acceptable exception)
- Nav dots on landing sidebar stay `rounded-full` (they are literal dots, not buttons)
- Pie chart in `ElectionResults` stays (legacy/unused component)

---

## Files — execution order

### 1. `src/app/components/navbar.tsx`
**Change:** Single line — header border.
- `border-b border-gray-200 dark:border-white/10` → `border-b-2 border-secundary`
- Instagram `p-2 rounded-full` hover button: remove `rounded-full`

### 2. `src/app/components/CTASection.tsx`
**Change:** Remove rounded from all buttons, add `uppercase tracking-[0.1em]`.
- `rounded-full` on primary button → remove
- `rounded-full` on secondary/instagram button → remove
- Add `uppercase tracking-[0.1em]` to all button labels

### 3. `src/app/components/achievements.tsx`
**Change:** Card and icon styling.
- `rounded-3xl` card → `rounded-none`; replace shadow with `border-l-4 border-transparent hover:border-secundary` (left accent bar on hover)
- `rounded-2xl` icon container → `rounded-none`
- `rounded-3xl border border-ui` → `border-l-4 border-ui hover:border-l-4 hover:border-secundary`

### 4. `src/app/components/proposals.tsx` (old logros 22-24 component)
**Change:** Same card pattern as achievements.
- `rounded-3xl` → `rounded-none`
- Add left accent bar pattern

### 5. `src/app/page.tsx` — Landing page
**Change:** Full layout refactor to Demo A 3-column Swiss Grid.

**Hero section:**
- Adopt `[3rem sidebar | 1fr content | 38% stats panel]` grid from Demo A
- Remove the old floating header controls (Instagram + theme already in NavBar)
- Side nav dots: keep (they're literal dots, acceptable)
- Bottom mobile nav: change from `rounded-full` pill container to a rectangular strip: remove `rounded-full` from the `<nav>` container and from the individual `<a>` tags

**Buttons:**
- All `rounded-full` buttons → no radius
- Add `uppercase tracking-[0.12em]`

**About section (01):**
- Stat cards `rounded-2xl bg-card` → no radius, `border border-ui` + left accent bar

**Values section (02):**
- `rounded-3xl` value cards → no radius
- Add left accent bar `w-full h-[3px] bg-secundary mb-6` above title (hover: expands from short to full width via CSS transition)

**Guides section (03):**
- `w-14 h-14 rounded-full` icon circles → `w-12 h-12` square containers (no radius)

### 6. `src/app/propuestas/page.tsx`
**Change:** Card styling.
- `rounded-3xl` ProposalCard → `rounded-none`
- `rounded-2xl` icon container → `rounded-none`
- Top accent bar on hover stays (already implemented)

### 7. `src/app/logros/page.tsx`
**Change:** Multiple elements.
- `rounded-2xl` StatBadge → `rounded-none`
- `rounded-2xl` CollapsibleItem → `rounded-none`
- `rounded-full` accent bar dot → becomes a `w-[3px]` bar (stays `rounded-full` — it's a vertical accent stripe, not a button)
- `rounded-2xl` image gallery items → `rounded-none`
- `rounded-2xl` callout box → `rounded-none`
- `rounded-2xl` stat boxes → `rounded-none`
- `rounded-full` sticky nav pill buttons → `rounded-none`

### 8. `src/app/guia/page.tsx`
**Change:** Search input, nav pills, FAQ items, footer CTA, scroll-to-top.
- `rounded-xl` FAQ item card → `rounded-none`
- `rounded-lg` link buttons inside FAQ → `rounded-none`
- `rounded-xl` search input → `rounded-none`
- `rounded-full` clear search button → `rounded-none`
- `rounded-full` sticky nav pills → `rounded-none`
- `rounded-lg` "Limpiar búsqueda" button → `rounded-none`
- `rounded-lg` footer Instagram button → `rounded-none`
- `rounded-full` scroll-to-top button → `rounded-none`
- Also: convert remaining `isDark ? ... : ...` conditionals to semantic classes (`text-body`, `text-muted`, `bg-page`, `bg-surface`, `border-ui`)

### 9. `src/app/guia-cbc/page.tsx`
**Change:** Identical to guia — same component structure, same replacements.
- All the same rounded → no-radius changes
- Convert isDark conditionals to semantic classes

---

## Shared patterns after migration

### Button (primary)
```tsx
className="inline-flex items-center gap-3 px-7 py-3 bg-secundary text-white text-sm font-bold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
```

### Button (outline)
```tsx
className="inline-flex items-center gap-3 px-7 py-3 border-2 border-body text-body text-sm font-bold uppercase tracking-[0.12em] hover:bg-body hover:text-page transition-colors"
```

### Button (ghost)
```tsx
className="inline-flex items-center gap-3 px-7 py-3 border border-ui text-muted text-sm font-medium uppercase tracking-[0.1em] hover:border-body hover:text-body transition-colors"
```

### Card (content)
```tsx
className="border border-ui bg-card transition-colors group cursor-default"
// + inside: <div className="w-10 h-[3px] bg-secundary mb-6 transition-all duration-300 group-hover:w-full" />
```

### Section nav pill (active)
```tsx
className="px-4 py-2 bg-secundary text-white text-sm font-bold uppercase tracking-[0.1em] whitespace-nowrap"
```

### Section nav pill (inactive)
```tsx
className="px-4 py-2 bg-surface text-subtle text-sm font-medium uppercase tracking-[0.1em] whitespace-nowrap hover:bg-gray-200 dark:hover:bg-white/10 hover:text-body transition-colors"
```

---

## Execution order

1. `navbar.tsx` — 1 change, immediate global impact
2. `CTASection.tsx` — buttons
3. `achievements.tsx` — card pattern
4. `proposals.tsx` — card pattern
5. `page.tsx` — landing page (biggest change)
6. `propuestas/page.tsx`
7. `logros/page.tsx`
8. `guia/page.tsx`
9. `guia-cbc/page.tsx`
10. Build verify → commit

**Skipped files:** `padron2026`, `ElectionResults`, `candidates`, `ThemeToggle`, `quienes-somos`, `not-found`
