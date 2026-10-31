# nithin (glacier-portfolio)

Nithin's personal portfolio site — a React/TypeScript single-page app showing a profile, a projects grid, a career/achievements timeline, a metrics grid, and recent posts. Built with Vite, styled with Tailwind CSS.

**Note:** this repo uses a different GitHub/Netlify account than sibling Nhancio projects — remote `https://github.com/didigamnithin/glacier-portfolio.git` (see `context.md`).

## Tech stack

- React 19 + TypeScript
- Vite 8 (dev server + build)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Deployed as a static build to Netlify

## Run locally

```bash
./run.sh
```

Runs `npm install` then `npm run dev` (Vite dev server, default `http://localhost:5173`).

## Stop the local server

```bash
./stop.sh
```

## Deploy

```bash
./deploy.sh
```

Runs `npm install && npm run build`, then `netlify deploy --prod --dir=dist --site=ff16fbf6-87b6-49ee-a71f-e2190e6d7890`.

## Commit & push

`git.sh` in this repo is currently a placeholder stub (not implemented). Use `gitpush.sh` instead, which is the real, working script here:

```bash
./gitpush.sh
```

It stages all changes, creates an automated commit (`"chore: automated commit"`), and pushes to the current branch (`main`) on `origin`.

## More detail

- [`context.md`](./context.md) — stack, structure, deploy status, and known rough edges (including a substantial uncommitted local migration — see there before committing)
- [`next steps.md`](./next%20steps.md) — outstanding TODOs
- [`socials.MD`](./socials.MD) — social/GTM notes for this portfolio (separate from build/deploy concerns)
