# Static export on Amplify — future work

Not started. Do it if an Amplify deploy breaks on Next 16+, or if the compute bill matters.

## Status (2026-10)

- Amplify runs the app on **SSR compute** (platform `WEB_COMPUTE`, Lambda + CloudFront).
- Amplify officially supports Next.js only up to **15**; the app is on **16**. It works today, but it is unsupported.
- Every route already prerenders as static (`○` in `yarn build`). The server does only two things:
  - `src/proxy.ts`: 308 redirect from `padron2026.*` to the main domain.
  - `next/image` optimization (resize + AVIF/WebP on demand).

## Changes

1. `next.config.mjs`: add `output: 'export'`, `trailingSlash: true` (so Amplify serves `/guia/index.html`) and `images: { unoptimized: true }`.
2. **Images**: with `unoptimized`, `next/image` serves the original files (1280px JPEGs, 70–330 KB). Add a build step (a `sharp` script) that writes resized WebP/AVIF variants, or use a custom `loader`. Otherwise phones download the full photos.
3. **Redirect**: delete `src/proxy.ts`. Add an Amplify rule: `https://padron2026.mli-fiuba.ar` → `https://mli-fiuba.ar`, 301. Or drop it if old links no longer matter (the election was April 2026).
4. **404**: add an Amplify rewrite `/<*>` → `/404.html`, status `404`.
5. `amplify.yml`: `baseDirectory: out`. Switch the app platform to static: `aws amplify update-app --app-id <id> --platform WEB`. The build file alone doesn't change the platform.
6. **Verify**: every route loads with and without a trailing slash, a deep link to `/logros#comedor` works, the 404 page shows, and the `padron2026` redirect works.

## Why

- No server code left to break when Amplify or Next.js change, so the unsupported-version risk goes away.
- Pure CDN: no Lambda cold starts, no compute cost.
- Matches what the site already is: static pages.
- Cost: image optimization moves to build time (step 2), and redirect and 404 handling moves into Amplify's console rules.
