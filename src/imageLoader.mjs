// Static export has no image server: scripts/images.mjs writes WebP variants
// of every raster in public/ to public/_img/ at build time, and this loader points
// next/image at them. SVGs and anything else pass through untouched.
export const WIDTHS = [384, 640, 828, 1280]

const RASTER = /\.(jpe?g|png)$/i

export const variantPath = (src, width) =>
    `/_img/${src.replace(/^\//, '').replace(RASTER, '').replace(/\s+/g, '-').toLowerCase()}-${width}.webp`

export default function imageLoader({ src, width }) {
    if (!RASTER.test(src)) return src
    return variantPath(src, WIDTHS.find(w => w >= width) ?? WIDTHS.at(-1))
}
