# Madhurjya Bora — Portfolio

Portfolio site for Madhurjya Bora, full-stack engineer. Built with **Vue 3 + Vite**.

## Stack

- **Vue 3** (`<script setup>` SFCs), **Vite** build
- **GSAP** + **ScrollTrigger** for scroll storytelling, **Lenis** for smooth scroll
- WebGL hero canvas (raw WebGL, no library)
- `<image-slot>` custom element for fillable portrait / storefront images

## Project structure

```
index.html                       Vite entry
src/
  main.js                        Mounts the app, loads global CSS + image-slot
  App.vue                        Layout + boots page interactions
  styles/portfolio-v2.css        Styles (cyberpunk theme)
  components/                    Section SFCs (Hero, Profile, Work, …)
  composables/
    usePortfolioFx.js            GSAP/Lenis interactions (init + cleanup)
    useHeroCanvas.js             WebGL hero background
  webcomponents/image-slot.js    <image-slot> custom element
public/madhurjya-bora-resume.pdf  Resume (served at site root)
```

## Develop

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build -> dist/
pnpm preview    # preview the production build
```

## Images

The portrait and storefront tiles use `<image-slot>` placeholders. Add real
images by setting a `src` attribute on the relevant `<image-slot>` in the
`components/` SFCs.
