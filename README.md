# AVR Institution website

A responsive React, TypeScript and Vite website for AVR Institution. Institutional details are kept in `src/data/content.ts`; unverified information is intentionally presented as unavailable rather than invented.

## Local development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploying to Vercel

Import the project into Vercel and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

`vercel.json` routes page requests to the Vite entry point so React Router paths work on direct visits and refreshes. The canonical URLs, sitemap and robots file currently use `https://avrinstitution.com/`; update them if the production domain changes.

## Content and launch notes

- Verified public details and editable practice copy are in `src/data/content.ts`.
- The current design uses original CSS artwork and contains no stock or external photography. Add institution-approved images only if AVR later requests them.
- Instructor, achievement, event, schedule, location and contact details remain unpopulated until confirmed by AVR.
- The contact form validates fields but deliberately does not claim to send messages. Connect it to a secure, spam-protected server endpoint before accepting online enquiries.
- `src/styles.css` contains the responsive design system. Motion uses Motion's reduced-motion preference, GSAP ScrollTrigger and Lenis; reduced-motion preferences disable the scroll effects.
# avr
# avrinstitution2006
# avrinstitution2006
# avr
