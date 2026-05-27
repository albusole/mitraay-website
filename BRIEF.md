# Mitraay Agro Resort — Website Build Brief
> Hand this file to Claude Code before starting. It has everything needed to build the full site.

---

## Project Overview

**Brand:** Mitraay Agro Resort  
**Tagline:** Come as a Group. Leave as a Story.  
**Type:** Farm retreat / eco resort  
**Location:** Near Raigad Fort, Mahad, Maharashtra (2.5 hrs from Pune, 3 hrs from Mumbai)  
**Target audience:** Groups of 22–28 — corporate retreats, school trips, family gatherings, wellness groups  
**Primary CTA:** WhatsApp enquiry → `https://wa.me/919112984757`  
**Phone:** 9112984757  
**Domain:** mitraayresort.in  
**Parent brand:** Vedbhoomi (Iconic Tourism Brand of Maharashtra)

---

## Tech Stack

Build this as an **Astro** project with the following:

- **Framework:** Astro (static site, zero JS by default)
- **Styling:** Tailwind CSS
- **Animations:** GSAP (ScrollTrigger for scroll animations, gsap.to for entrance effects)
- **Smooth scroll:** Lenis
- **3D / hero effect:** Spline embed OR Three.js particle field in hero background
- **Fonts:** Playfair Display (headings) + DM Sans (body) + Caveat (accent) — load from Google Fonts
- **Deployment:** GitHub Pages

---

## Brand Tokens

```css
--saffron: #E8871A
--saffron-deep: #C96D0A
--saffron-light: #F5B04A
--terracotta: #C0552A
--ochre: #D4A827
--forest: #3A5C3A
--forest-light: #5A7A4A
--cream: #F7F0E6
--cream-dark: #EDE3D4
--stone: #8B7355
--ink: #2C1F0E
--ink-soft: #4A3728
```

---

## Site Structure (6 pages)

Each page = separate URL for SEO.

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hook, overview, trust signals |
| Adventure | `/adventure` | Outdoor activities |
| Retreat | `/retreat` | Corporate + wellness |
| School Trips | `/school` | Educational trips |
| Property | `/property` | Rooms, amenities, gallery |
| Contact | `/contact` | Enquiry form + directions |

---

## Image Map

All images are in the `/images/` folder. Use exactly these filenames:

### Hero images (above the fold)
- `hero-yoga-sunrise-pavilion.jpg` — **PRIMARY HERO** (silhouette yoga pose, sunrays, pavilion)
- `hero-meditation-sunrise-wide.jpg` — alternate hero
- `hero-meditation-golden-hour.jpg` — alternate hero
- `hero-dining-hall-sunset.jpg` — dining/social hero
- `hero-entrance-building-dusk.jpg` — brand/entrance hero

### Property shots
- `property-treehouse-pathway.jpg` — treehouse with stone pathway
- `property-treehouse-morning.jpg` — treehouse in morning mist
- `property-pathway-treehouse-golden.jpg` — golden hour pathway leading to treehouse
- `property-overview-garden-mandala.jpg` — full resort overview with stone mandala
- `property-mandala-pavilion.jpg` — stone mandala + pavilion close
- `property-fountain-courtyard-sunset.jpg` — water feature + courtyard
- `property-sunset-terrace-umbrella.jpg` — relaxed seating at sunset
- `property-dining-garden-path-sunset.jpg` — dining hall from garden

### Lifestyle shots
- `lifestyle-morning-chai-view.jpg` — hand holding chai mug at sunrise (MOST shareable photo)
- `lifestyle-bullock-cart-sunrise.jpg` — heritage bullock cart at sunrise
- `lifestyle-sunrise-under-tree.jpg` — sunrise framed under mango tree

### Activity shots
- `activity-rice-planting-school.jpg` — students planting rice in paddy field
- `activity-group-dining-open.jpg` — international group dining
- `activity-cooking-class-group.jpg` — cooking class under pavilion roof
- `activity-birthday-celebration.jpg` — birthday cake cutting, group celebration
- `activity-meditation-group-pavilion.jpg` — group meditation session
- `activity-yoga-group-mountain-view.jpg` — yoga group with mountain backdrop
- `activity-cricket-watching-group.jpg` — India flag, group watching cricket
- `activity-school-kids-farm-mud.jpg` — kids in paddy field, monsoon

### Room shots
- `room-cottage-interior-balcony.jpg` — best cottage room, balcony visible
- `room-cottage-interior-wide.jpg` — wide cottage room shot
- `room-dormitory-red-wall.jpg` — best dorm, symmetrical red laterite walls
- `room-dormitory-group-capacity.jpg` — dorm showing group capacity

---

## Page-by-Page Content

### HOME (`/`)

**Hero section:**
- Full-viewport height
- Background: `hero-yoga-sunrise-pavilion.jpg` with dark overlay (0.35 opacity)
- GSAP: fade-in headline from below on load
- Lenis smooth scroll active
- Floating particle effect (Three.js or CSS) over hero
- Headline: "Come as a Group. Leave as a Story."
- Subheading: "A purposeful farm retreat near Raigad Fort, Mahad — built for groups who want more than a getaway."
- Two CTAs: "Plan Your Trip →" (WhatsApp) | "Explore the Resort" (scroll)
- Scroll indicator animation at bottom

**Trust bar (below hero):**
- "22–28 guests per trip" | "Raigad Fort, 25km away" | "Pune: 2.5 hrs" | "Mumbai: 3 hrs"

**What is Mitraay section:**
- Left: `property-overview-garden-mandala.jpg` — scroll-parallax
- Right: text about the farm retreat philosophy
- GSAP ScrollTrigger: image slides in from left, text from right

**3 experience pillars (cards):**
- Adventure → link to /adventure — image: `property-fountain-courtyard-sunset.jpg`
- Retreat → link to /retreat — image: `activity-meditation-group-pavilion.jpg`
- School Trips → link to /school — image: `activity-rice-planting-school.jpg`
- GSAP: stagger card entrance on scroll

**Lifestyle strip:**
- Full-width horizontal scroll or parallax strip
- Images: `lifestyle-morning-chai-view.jpg`, `lifestyle-bullock-cart-sunrise.jpg`, `lifestyle-sunrise-under-tree.jpg`
- Accent text overlay: "Wake up to this."

**Social proof:**
- Image: `activity-birthday-celebration.jpg` or `activity-cricket-watching-group.jpg`
- Quote: "We didn't just visit. We lived it for two days."
- Stats: "200+ groups hosted | School trips | Corporate retreats | Family reunions"

**Final CTA section:**
- Background: `hero-dining-hall-sunset.jpg`
- "Ready to plan your group trip?"
- WhatsApp button

---

### ADVENTURE (`/adventure`)

**Hero:** `property-fountain-courtyard-sunset.jpg`  
**Content:**
- Activities: Nature walks, river activities (Ulhas River), waterfall visits (Kumbhe, 11km), Raigad Fort trek (25km), farm activities, bonfire nights
- Image grid: `activity-cooking-class-group.jpg`, `activity-birthday-celebration.jpg`, `property-treehouse-pathway.jpg`
- "Every group gets a custom activity plan based on fitness, age, and interests."
- CTA: WhatsApp to plan

---

### RETREAT (`/retreat`)

**Hero:** `hero-meditation-sunrise-wide.jpg`  
**Content:**
- Corporate offsite, wellness retreat, family gathering formats
- Activities: Guided meditation, yoga sessions, farm-to-table meals, team activities
- Images: `activity-yoga-group-mountain-view.jpg`, `activity-meditation-group-pavilion.jpg`, `activity-group-dining-open.jpg`
- "Disconnect from the city. Reconnect with each other."
- CTA: WhatsApp

---

### SCHOOL TRIPS (`/school`)

**Hero:** `activity-rice-planting-school.jpg`  
**Content:**
- Experiential learning: paddy planting, cooking, nature trails, Raigad Fort history
- Safe, structured, teacher-accompanied
- Images: `activity-school-kids-farm-mud.jpg`, `activity-cooking-class-group.jpg`
- "Your students will talk about this trip for years."
- CTA: WhatsApp with pre-filled text "Hi, I want to enquire about a school trip to Mitraay Resort"

---

### PROPERTY (`/property`)

**Hero:** `property-treehouse-pathway.jpg`  
**Content sections:**

Accommodations:
- Cottages (show `room-cottage-interior-balcony.jpg`, `room-cottage-interior-wide.jpg`)
- Dormitories (show `room-dormitory-red-wall.jpg`, `room-dormitory-group-capacity.jpg`)
- Treehouse (show `property-treehouse-morning.jpg`, `property-treehouse-pathway.jpg`)
- Capacity: 22–28 guests total

Amenities:
- Open-air dining pavilion, yoga/meditation deck, walking paths, stone mandala garden, water feature, bonfire area, farm

Photo gallery:
- Grid of: `property-mandala-pavilion.jpg`, `property-fountain-courtyard-sunset.jpg`, `property-sunset-terrace-umbrella.jpg`, `property-dining-garden-path-sunset.jpg`, `lifestyle-morning-chai-view.jpg`, `lifestyle-bullock-cart-sunrise.jpg`
- Lightbox on click

---

### CONTACT (`/contact`)

**Layout: 2 columns**

Left column:
- WhatsApp CTA (primary): `https://wa.me/919112984757?text=Hi%2C%20I%20want%20to%20plan%20a%20group%20trip%20to%20Mitraay%20Resort`
- Phone: 9112984757
- Nearby landmarks: Raigad Fort (25km), Kumbhe Waterfall (11km), Ulhas River, Mahad Town (~10km)
- Directions from Pune: NH48 → Khopoli exit → NH66 → Mahad → Raigad road (2.5 hrs)
- Directions from Mumbai: NH66 south → Pen, Roha → Mahad exit (3 hrs)
- Note: Exact GPS coordinates shared on WhatsApp at booking

Right column — Enquiry form:
- Fields: Name*, WhatsApp number*, Email (optional), Group size*, Trip type* (Adventure/Retreat/School/Other), From date, To date, Message
- On submit: open WhatsApp with pre-filled message containing form data
- Show success state after submission

---

## Navigation

Fixed nav, transparent on hero, cream+blur when scrolled.  
Logo: Use `/images/logo-transparent.png` for the sun icon mark. Display it alongside the text "Mitraay" in Playfair Display. In the nav: icon left, text right. On dark backgrounds (hero): text in white. On light backgrounds (scrolled nav): text in ink (#2C1F0E). The sun icon works on both since it is yellow.  
Links: Adventure | Retreat | School Trips | Property | Contact  
CTA button: "Plan Your Trip" → WhatsApp  
Mobile: hamburger → full screen overlay menu

---

## Animations Spec

| Element | Animation | Library |
|---------|-----------|---------|
| Hero headline | Fade up + slight scale, 0.8s delay | GSAP |
| Hero subtext | Fade up, 1.1s delay | GSAP |
| Hero CTA buttons | Fade up, 1.4s delay | GSAP |
| Section headings | Fade up when entering viewport | GSAP ScrollTrigger |
| Experience cards | Stagger 0.15s, slide up | GSAP ScrollTrigger |
| Property/lifestyle images | Parallax Y shift on scroll | GSAP ScrollTrigger |
| Page scroll | Smooth, lerp-based | Lenis |
| Hero background | Subtle Ken Burns zoom (scale 1→1.08 over 8s) | CSS or GSAP |
| Nav | Blur + cream background on scroll past 60px | JS scroll event |
| WhatsApp float button | Pulse animation | CSS keyframes |
| 3D element in hero | Floating leaf particles OR Spline scene embed | Three.js or Spline |

---

## SEO Requirements

Each page must have:
- Unique `<title>` tag
- Unique `<meta name="description">`
- Open Graph tags (og:title, og:description, og:image)
- Structured data (LocalBusiness schema on homepage)
- Sitemap.xml (Astro generates automatically with @astrojs/sitemap)
- robots.txt
- All images with descriptive `alt` text
- Semantic HTML (h1 only once per page, proper h2/h3 hierarchy)

Suggested titles:
- Home: "Mitraay Agro Resort | Group Farm Retreat near Raigad Fort, Maharashtra"
- Adventure: "Adventure Activities | Mitraay Resort, Mahad"
- Retreat: "Corporate & Wellness Retreats | Mitraay Resort"
- School: "School Trips & Educational Tours | Mitraay Resort, Raigad"
- Property: "Accommodation & Amenities | Mitraay Agro Resort"
- Contact: "Contact & Directions | Mitraay Resort, Mahad, Maharashtra"

---

## Footer

- Logo: `/images/logo-transparent.png` icon + "Mitraay" text in Playfair Display, white coloured
- Links: Adventure | Retreat | School Trips | Property | Contact
- Nearby: Raigad Fort, Kumbhe Waterfall, Ulhas River, Mahad
- Contact: WhatsApp number, mitraayresort.in
- Copyright: © 2025 Mitraay Resort · Vedbhoomi · Raigad, Maharashtra
- Tagline: "Come as a group. Leave as a story."

---

## Claude Code Instructions

When starting this project, run these commands in order:

```bash
npm create astro@latest mitraay-website -- --template minimal
cd mitraay-website
npx astro add tailwind
npm install gsap lenis
npm install @astrojs/sitemap
npm install @astrojs/github-pages
```

Then copy all images into `public/images/`.

Build one page at a time starting with the homepage layout, then add animations after structure is confirmed.

In `astro.config.mjs`, set `site` to `https://mitraayresort.in` and `base` to `/` since a custom domain is being used.

For GitHub Pages deployment:
1. Run `npm run build` — outputs to `dist/`
2. Push to GitHub repo
3. In repo Settings → Pages → set source to GitHub Actions
4. Add this workflow file at `.github/workflows/deploy.yml` to auto-deploy on every push to main
5. In GitHub Pages settings, add custom domain `mitraayresort.in`
6. In your domain DNS, add a CNAME record pointing to `yourusername.github.io`

Do not use any placeholder images — all images are real and available in `/public/images/` with the exact filenames listed above.
