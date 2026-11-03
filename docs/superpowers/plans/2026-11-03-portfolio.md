# Portfolio implementation plan

Spec: docs/reference-study-and-strategy.md. User authorized execution on 2026-11-03.

- [x] Prepare optimized image derivatives, video posters, and an ordered catalog preserving all 119 works. Test catalog coverage, file existence, dimensions, and safe URLs.
- [x] Implement reference-led hero, portrait introduction, alternating identity stories, campaign/print/merch spreads, complete category galleries, video chapter, and email finale.
- [x] Add GSAP reveals, collage motion, pause control, reduced-motion support, and accessible image viewer.
- [x] Verify desktop/mobile layout, image viewer, category coverage, native video controls, keyboard and reduced-motion behavior; run build/lint/tests; review and correct material findings.

Implementation stays local. No source assets are renamed or overwritten. Use generated images for display. Fonts are self-hosted. No fabricated facts or testimonials.

Files: scripts/prepare-assets.py, src/data/assets.json, src/data/portfolio.ts, src/components/portfolio.tsx, src/components/gallery.tsx, src/components/portfolio-motion.tsx, src/app/page.tsx, src/app/globals.css, src/app/layout.tsx, src/app/icon.svg, tests/catalog.test.mjs, tests/portfolio.spec.ts, playwright.config.ts.

Review focus: spaces/punctuation in paths, very large print images, mobile overflow, keyboard image-viewer dismissal/focus, reduced-motion visibility, no video autoplay/audio.
