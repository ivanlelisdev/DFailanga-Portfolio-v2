# Dariel Failanga — Portfolio v2

Local portfolio project for Dariel Failanga, a graphic designer specializing in marketing designs, brand identity, and layouts.

## Stack

- Next.js App Router, React, TypeScript
- GSAP and @gsap/react for animation (use client components and useGSAP for cleanup)
- Plain CSS; ESLint
- Three.js deferred until a specific 3D interaction needs it

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to verify production compilation, `npm run lint` for lint checks, and `npm start` to serve a production build.

## Design reference

Primary reference: https://www.behance.net/gallery/244154207/Portfolio-2026

The visual implementation should closely follow this reference. It could not be inspected during setup because Behance returned HTTP 403. The current page is only a setup placeholder, not the final portfolio design. Review the reference before making visual decisions, and use Dariel's own artwork and copy.

## Starting points

- `src/app/page.tsx`: homepage
- `src/app/layout.tsx`: page metadata and root layout
- `src/app/globals.css`: global styles
- `public/`: portfolio images and other static assets

For animations, respect prefers-reduced-motion and keep content readable without animation. Project is local only; no hosting has been configured.
