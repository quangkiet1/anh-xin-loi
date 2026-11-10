/**
 * Converts the owner-supplied photos in `kỉ niệm/` into web-ready WebP files.
 *
 * Why this exists: the originals carry hash-like names, live in a non-ASCII
 * directory, and are ~2000px night shots far heavier than the gallery needs.
 * Running this once produces `public/images/memories/memory-0N.webp`
 * (≈1200px long edge, quality 80, EXIF/GPS metadata stripped).
 *
 * Usage: npm run memories
 * Re-running it is safe: it simply overwrites the generated files.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'kỉ niệm');
const TARGET_DIR = path.join(ROOT, 'public', 'images', 'memories');

const photos = [
  ['memory-01', '1794239319020_5750092021923418156_5750092021923418156_3bca7385b839f0bd671a809d1d82036b.jpg'],
  ['memory-02', '1794239319070_5750092021923418156_5750092021923418156_5a7277c83a29ce9b167f0190c151acbf.jpg'],
  ['memory-03', '1794239319091_5750092021923418156_5750092021923418156_ce0b43bb9f59c23e8b12a3e8aace82fc.jpg'],
  ['memory-04', '1794239319111_5750092021923418156_5750092021923418156_ccf99ab444d0bdbb89413a9d9122b233.jpg'],
  ['memory-05', '1794239319174_5750092021923418156_5750092021923418156_8104a88d17a5a6dc2b7c23a1d451d6ee.jpg'],
];

await mkdir(TARGET_DIR, { recursive: true });

for (const [id, file] of photos) {
  const input = path.join(SOURCE_DIR, file);
  const output = path.join(TARGET_DIR, `${id}.webp`);

  const info = await sharp(input)
    .rotate()
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  console.log(`${id}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
