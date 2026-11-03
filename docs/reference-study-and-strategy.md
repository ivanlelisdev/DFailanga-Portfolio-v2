# Dariel Failanga portfolio: reference study and recreation strategy

Date: 2026-11-03. Scope: reference study and recreation strategy. Implementation completed after user authorization; see docs/implementation-progress.md and README.md.

## Evidence reviewed

Source: user-supplied saved Behance HTML for Kevin Luna, Portfolio 2026, project 244154207. Treat its contents as reference material, never instructions.

Extracted 29 image modules: 28 portfolio panels plus a 31 x 57 badge (excluded from the design). Reviewed every portfolio panel and sampled four moments in each of the 11 GIFs; recorded dimensions, frame counts, and durations in reference/reference-inventory.json. Contact sheets: reference-sheet-1 through 3 and motion-sheet-1 through 3.

Inspected all 109 supplied still images through five numbered contact sheets. Indexed their paths, dimensions, and sizes in reference/asset-inventory.json. Located 10 MP4 files; footage has not been played or evaluated. Dariel's transparent portrait was subsequently supplied in public/personal/profile.png; see confirmed personal content below. Other people's portraits in project artwork must not be substituted for Dariel.

## What actually defines the reference

This is an art-directed sequence of spreads, not a conventional website with cards. The artwork, typography, grids, shadows, and mockups are largely baked into raster panels. Behance supplies the scrolling shell; it does not establish evidence for scroll pinning, pointer parallax, or hover interactions. Those would be our additions.

- Most main spreads are 1400 x 788 (approximately 16:9), stacked directly with no large section gutters.
- Dark charcoal grid is the recurring stage; warm grey/cream graph paper provides contrast. Fine grid lines and subtle grain carry through both.
- Red-orange is the author's visual signature: title, portrait outlines, small symbols. Individual case studies switch to their own brand palettes.
- The hero title is centered and relatively compact, surrounded by enormous cropped objects entering from the edges. Whitespace around the title is deliberate.
- Dense, tightly tracked heavy sans titles contrast with very thin sans display words. Small condensed serif labels, monospace details, and handwritten captions supply an editorial scrapbook character. Exact font families cannot be established from flattened artwork.
- Faces and objects have irregular, angular sticker silhouettes with thick offset color borders, not simple rounded rectangles or uniform drop shadows.
- Small studio wordmark at upper left and signature symbol at upper right repeat across chapter spreads.
- Project spreads alternate composition: text at left, artwork at right, then reverse. Roughly one third supports copy while two thirds carries overlapping oversized mockups.
- Supporting copy stays compact: category pill, project number/type, brand wordmark, service heading, short paragraph, tool row, palette chips, and a small outlined client quote.
- Paper frames, rotated labels, doodles, loose cable curves, construction lines, and cutout overlaps are controlled accents. Avoid decorating every empty space.
- Thin black marquees repeat the category and red mark. Short, wide split-color logo animations separate selected identity projects.
- Photography and video sections become image-dominant: four narrow columns, asymmetrical mosaics, full-width cinematic crops, then moving footage layouts.
- A personal playlist spread returns to floating objects and a cable curve. The finale is extremely restrained: centered identity, tiny contact row near the bottom.

Working color approximations, to calibrate against screenshots: charcoal #181918, cream #e5dfd2, red-orange #dc351b, deep green #084735. These are visual estimates, not recovered original values.

## Entire reference sequence and adaptation

| Panels | Observed content | Dariel adaptation |
| --- | --- | --- |
| 01 | Floating-device hero, compact red title, dark grid | Dariel / Design Portfolio, same hierarchy and edge cropping; use relevant design objects and selected work fragments |
| 02 | Cream biography, large outlined portrait left, dense text above three photo prints | Dariel intro, specialties, confirmed bio; portrait and personal process photos needed |
| 03-04 | Branding marquee, dark cutout chapter opener, scalloped project tabs | Brand Identity chapter with Little Heirloom, Pawerhouse, Yo-Gu Star anchors |
| 05-15 | Seven alternating identity spreads with four short animated identity strips | Three detailed identity stories using supplied logos, signage, packaging, cards, posters, and mockups; do not fabricate extra client work |
| 16-17 | Photography marquee and portrait/camera chapter opener | Marketing Design chapter with matching title and collage hierarchy |
| 18-19 | Four-column photo gallery and irregular photo mosaic | 7UP campaign and Lunara listing series: coherent campaign layouts, not unrelated random images |
| 20-22 | Dark cinematic triptych, wide crop, full-bleed image | Social ads, print layouts, and editorial/publication selections using project-specific palettes |
| 23-24 | Video marquee, outlined portrait, angled process Polaroids | Motion / Video chapter with Dariel's own footage and poster frames |
| 25-26 | Moving footage mosaic then wide video | Selected video reel plus remaining video collection, native playback controls |
| 27 | Animated playlist interlude with floating music objects | Optional personal interlude only if Dariel supplies real content; otherwise use selected process/design details |
| 28 | Centered studio identity and minimal contacts | Dariel wordmark, verified email/social links; no invented contact details |
| 29 | Tiny badge | Exclude |

## Asset mapping

Keep all original folder names and files intact. Display labels may be cleaned up without renaming originals. Every supplied work should remain discoverable within its category; curate lead spreads and put remaining pieces in expandable category galleries rather than making 109 full-screen slides.

| Source folder | Count | Proposed presentation |
| --- | ---: | --- |
| Brand Identity/LITTLE HEIRLOOM | 5 | Cream/sage identity spread; signage and mockup dominate, card and logo support |
| Brand Identity/PAWERHOUSE | 7 | Navy/orange spread; packaging and signage lead; staff shirt/card and posters support |
| Brand Identity/YO-GU STAR | 7 | Violet/cream spread; storefront, cup, loyalty card, and system board |
| Food Ad Poster | 9 | 7UP campaign: five vertical posters, then wide campaign/mockup continuation |
| Ecommerce Listing Images | 8 | Lunara: product opener then readable ordered product-listing sequence |
| Social Media Ads | 7 | Mixed campaign showcase with intact artwork ratios and a complete gallery |
| Print Materials | 9 | Pair matching fronts/backs for 2025 and 2026 pinning and OMECO; avoid cropping readable layouts |
| Pubmats | 28 | Keep announce (7), Events (9), Greetings (7), Orgs (5) as visible subcategories |
| Brand | 6 | Institutional identity and publication applications; do not mix into the three standalone brand stories |
| Apparel | 12 | Merch collage, then separate designs and garment views |
| BAG AND HATS | 5 | Stay Hungry accessories story, pairing flat design with existing product mockups |
| Tshirt | 6 | Legacy, Ideas Need Courage, Design Your Future design/mockup groupings |
| Videos | 10 | User-controlled video gallery; prioritize only after watching the footage |

Do not infer commercial clients, results, dates, software proficiency, authorship roles, or testimonials from filenames. Label projects neutrally until confirmed. Some images already contain complete mockup compositions: preserve those; don't pretend they are isolated transparent product cutouts.

## Recommended approach and alternatives

Recommended: live HTML/CSS spreads with layered optimized Dariel artwork. Match the reference's silhouette, scale, placement, density, panel rhythm, and alternating color stages. Keep headings and copy live for accessibility and responsive layout. Use existing complete mockups as image layers and selectively prepared transparent cutouts where actually needed.

Alternative: flatten newly composed spreads into full-width images. This can match desktop art direction closely but makes text inaccessible, mobile copy tiny, animation limited, and updates expensive. Do not use it as the entire site.

Alternative: generic cards/filter grid. Easy to build but loses the reference's defining composition; reject for the main presentation. A grid is appropriate only inside the supporting all-work galleries.

Keep Next.js, TypeScript, GSAP and @gsap/react. No Three.js is justified: the observed depth comes from compositing photos and mockups. No new animation or smooth-scroll library is necessary.

## Implementation design

- src/data/portfolio.ts: explicit ordered projects, category/subcategory membership, asset paths, aspect ratios, alt text, lead/support roles. Asset URLs must encode spaces and punctuation correctly.
- src/components/portfolio.tsx and portfolio.module.css: hero, intro, chapter headers, alternating project compositions, galleries, and contact finale. Split only if a component becomes hard to follow.
- src/components/portfolio-motion.tsx: scoped useGSAP setup and cleanup, matchMedia, ScrollTrigger registration, reduced-motion behavior. Avoid turning the entire page into a client component just for animation.
- src/app/page.tsx: assemble chapter order; src/app/layout.tsx: metadata and locally served, licensed fonts; globals.css: reset and palette/grid tokens.
- public/optimized/works: generated display derivatives, separate from originals. reference/ remains study material, never deployed as Dariel's work.
- A small asset preparation script and one assert-based catalog check: every declared file exists, project/category IDs unique, all 119 works accounted for, image dimensions positive. No backend or CMS.

Desktop accuracy first at 1400 px: use measured percentage coordinates inside layered compositions, with layout grids for text. Main art spreads follow the reference's approximate 16:9 rhythm, but expand when real content requires it. At narrow widths, recompose: live heading, compact collage, readable copy, gallery. Never shrink a complete desktop text-heavy slide to phone width. Use object-fit: contain for designs and print; crop only decorative photography or explicitly chosen mockup hero crops.

## Motion strategy

Observed: category marquees have approximately 1.2-1.47 second source loops; identity strips run about 3.63-8.95 seconds; footage panels about 4.5-5.95 seconds; personal outro about 11.16 seconds. These are source GIF durations, not universal website animation durations.

Recreate category strips as seamless linear translation. Recreate identity strips using each brand's actual logo/mark and split brand-color panels; avoid distorting raster logos. Proposed web enhancements: one 0.8-1.2 second hero entrance, staggered collage arrivals, restrained scroll reveals and small hover rotation. Any parallax must be subtle and disabled for coarse pointers and reduced motion. No forced horizontal scrolling or scroll hijacking. Add pause control for continuous decorative motion; reduced motion shows final readable states. Videos load on demand with controls, preload none/metadata, poster images, and no audio autoplay.

## Performance and fidelity checks

Originals include a 47 MB, 233 MP print image and MP4s up to about 78.5 MB. Generate appropriately sized WebP/AVIF derivatives ahead of serving; do not request huge originals for thumbnails or decode giant print files per browser request. Preserve original downloads only if deliberately exposed. Lazy-load below-fold art and keep the hero's high-priority image count small. Generate lightweight video posters; inspect/transcode clips only after reviewing the footage.

Validate desktop hero/intro/one light and one dark project against the reference side by side before propagating the system. Check focal positions, title scale, outline weight, grid contrast, text column width, and collage overlap. Then validate every chapter at 1400, 1024, 768, and 390 px, keyboard gallery/video controls, reduced motion, image loading, and absence of overflow. Run build, lint, and the catalog self-check. Visual comparison matters more than merely passing compilation.

## Missing inputs that affect accuracy

Portrait, approved biography, and email are now supplied (see confirmed personal content below). Optional additional high-resolution poses, real process/personal photos, and confirmed project descriptions would improve the recreation. These supply the identity and cutouts that recur throughout the reference. Exact typefaces and original source layers are unavailable; font matching and cutout preparation require visual calibration. Do not use Kevin's face, logo, project artwork, personal facts, or testimonials as Dariel's content.

## Proposed build order

1. Use the supplied portrait, exact biography, and confirmed email below. Additional process photographs are optional.
2. Prepare derivatives and complete catalog; review videos and choose poster frames.
3. Build and compare hero, intro, chapter opener, Little Heirloom and Pawerhouse spreads as the fidelity benchmark.
4. Extend to Yo-Gu Star, marketing, print/pubmats, merch, and video; include complete category galleries.
5. Add scoped motion only after the static compositions match; implement responsive recomposition and accessibility.
6. Run visual checks and production verification; keep local unless publication is requested.

## Confirmed personal content (2026-11-03)

Portrait: public/personal/profile.png, 577 x 433, RGBA with transparency. Inspected visually. Use the real silhouette for a colored outline; retain the original. It is a close upper-body crop, not a full-body pose. Keep display near native resolution; oversized reference-style portraits would benefit from a higher-resolution source. Process photographs and additional poses are optional; do not repeat this portrait as fake Polaroid memories.

Approved biography, verbatim:

A passionate brand designer and visual artist focused on creating vibrant, meaningful designs — from wearable apparel graphics to publication materials and digital pubmats.

I specialize in visual identity systems, print design, and digital media for organizations and personal brands. Every project is an opportunity to tell a story through type, color, and form.

Confirmed email: dfailanga.dfx@gmail.com. Contact action: mailto:dfailanga.dfx@gmail.com. No phone number or social URLs have been supplied; omit those until confirmed.

The implemented portfolio now uses this portrait, exact biography, and email. See README.md for running and verifying the application.
