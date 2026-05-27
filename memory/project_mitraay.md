---
name: project-mitraay-website
description: Astro static site for Mitraay Agro Resort — 6 pages built, all images in place, GitHub Actions deploy configured
metadata:
  type: project
---

Built an Astro static site for Mitraay Agro Resort (mitraayresort.in) per BRIEF.md.

**Why:** Full website build from brief for a farm retreat near Raigad Fort targeting group bookings.

**How to apply:** When editing this project, run `nvm use 24` first (Node v20 is default but create-astro requires v22+). The project directory has a colon in its name — always quote paths. Use `./node_modules/.bin/astro` instead of `npx astro` since the path colon confuses npx.

## Stack
- Astro 6 (static), Tailwind CSS v4 (via @tailwindcss/vite), GSAP + ScrollTrigger, Lenis, Three.js
- `@astrojs/sitemap` — auto-generates sitemap.xml on build

## Pages built (all 200 OK)
- `/` — Homepage with Three.js particles, GSAP hero animations, trust bar, experience cards, lifestyle strip, social proof, final CTA
- `/adventure` — Activities, photo grid, custom plan CTA
- `/retreat` — Corporate/wellness/family formats, daily schedule, image grid
- `/school` — Learning experiences, gallery, school enquiry CTA
- `/property` — Cottages/dorms/treehouse, amenities, lightbox gallery
- `/contact` — Info + directions, enquiry form → opens WhatsApp with pre-filled message

## Key files
- `src/layouts/Layout.astro` — nav (transparent → cream on scroll), footer, Lenis+GSAP init, mobile menu
- `src/styles/global.css` — brand tokens, Tailwind import, keyframe animations
- `public/images/` — all 29 images from `images:` folder
- `.github/workflows/deploy.yml` — GitHub Pages deploy on push to main
- `public/robots.txt` — SEO robots file

## Deploy
GitHub Pages with custom domain `mitraayresort.in`. Build outputs to `dist/`. Sitemap auto-generated.
