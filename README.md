# David Rivadeneira — Portfolio

Single-page developer portfolio built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Stack

- React 19 + TypeScript (strict)
- Vite 8 with `base: './'` so the build works from a GitHub Pages subpath
- Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first `@theme` tokens, no config file)
- Framer Motion for scroll reveals
- react-icons for brand marks

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Type check only:

```bash
npx tsc --noEmit
```

## Content

All copy and links live in `src/data/portfolio.ts` and its types in `src/types.ts`.
Components render from that module; do not hardcode text inside components.

Static assets live in `public/`:

- `profile.png` — hero portrait (grayscale + duotone is applied in CSS)
- `david-rivadeneira-cv.pdf` — downloadable CV
- `favicon.svg` — site icon

## Deploy

```bash
npm run deploy
```

`predeploy` builds the site and `deploy` publishes `dist/` to the `gh-pages` branch.
