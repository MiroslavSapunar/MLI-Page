// Writes public/_img/<name>-<width>.webp for every raster in public/ (see src/imageLoader.mjs).
// Runs before dev and build; skips variants that are newer than their source.
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { WIDTHS, variantPath } from '../src/imageLoader.mjs'

const PUBLIC = fileURLToPath(new URL('../public', import.meta.url))
const OUT = path.join(PUBLIC, '_img')

const mtime = file => stat(file).then(s => s.mtimeMs, () => 0)

await mkdir(OUT, { recursive: true })
const sources = (await readdir(PUBLIC)).filter(f => /\.(jpe?g|png)$/i.test(f))

let written = 0
await Promise.all(sources.flatMap(file => {
    const src = path.join(PUBLIC, file)
    return WIDTHS.map(async width => {
        const dest = path.join(PUBLIC, variantPath(`/${file}`, width))
        if (await mtime(dest) > await mtime(src)) return
        await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 75 }).toFile(dest)
        written++
    })
}))
console.log(`images: ${written} variants written, ${sources.length * WIDTHS.length - written} up to date`)
