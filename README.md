# Dariel Failanga — Portfolio v2

A local Next.js portfolio for brand designer and visual artist Dariel Failanga, closely following the art direction studied in [the reference strategy](docs/reference-study-and-strategy.md).

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build`, then `npm start`.

## Included

- Reference-led charcoal/cream grids, floating artwork, outlined portrait, paper labels, and overlapping project spreads.
- Little Heirloom, Pawerhouse, and Yo-Gu Star identity stories; marketing, print/publication, merchandise, and video chapters.
- All 109 images in a category/subcategory archive with keyboard-accessible image viewer; all 10 videos with native playback controls.
- GSAP entrances and floating artwork, continuous category strips, motion pause control, and system reduced-motion support.
- Exact approved biography and dfailanga.dfx@gmail.com contact link.
- Locally hosted Manrope and Instrument Serif fonts; licenses included in public/fonts.

## Checks

```sh
npm test
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests use the local server on port 3000 or launch it if absent. Tests cover catalog coverage, category filters, image-viewer navigation/dismissal/focus, four viewport widths, reduced motion, pause persistence, and browser metadata for every video.

## Artwork

Originals remain untouched in `public/works/`. `public/personal/profile.png` supplies the portrait. Display images and video posters are generated into `public/optimized/works/`, with metadata in `src/data/assets.json`.

To regenerate after adding artwork:

```sh
python -m pip install Pillow
python -m pip install --target .tools imageio-ffmpeg
npm run assets:prepare
```

The image preparation script allows the known 233-megapixel print original, resizes images to at most 1600 pixels per side, and also creates 640-pixel thumbnails. It requires enough local memory to decode that print original. Generated assets are included, so Python is unnecessary for normal development or production.

`src/data/portfolio.ts` defines curated projects. `src/components/portfolio.tsx` assembles the spreads, `gallery.tsx` owns filtering/viewing, and `portfolio-motion.tsx` scopes animation and cleanup. Global layout styling is in `src/app/globals.css`.

The `reference/` directory is study/QA material and is not served by the application. This project is local only; no hosting or external services are configured.

## Known limits

The supplied portrait is 577 × 433 pixels. Desktop cutout quality is limited by that resolution. The reference's exact typefaces and original layered source files were unavailable; the implementation matches its layout language using Dariel's artwork and locally licensed fonts. Existing MP4s are streamed on demand without transcoding; the largest is about 78.5 MB. npm reports moderate development-tool advisories; the setup production dependency audit was clear.
