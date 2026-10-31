# context.md — nithin (glacier-portfolio)

## What this is

A personal portfolio site for Nithin (`package.json` name: `glacier-portfolio`). The app (`src/App.tsx`) renders a `Profile`, a "Projects" grid (`ProjectCard`s, linking out to `github.com/nhancio/`), a "Career & Achievements" timeline (linking to `linkedin.com/in/didigamnithin`), a metrics grid, and a "Recent Posts" section (linking to `x.com/soul4tech`). Who it's for: recruiters, collaborators, and visitors evaluating Nithin's work — same person as the `nithin.nhancio.com` sibling project, but this is the more elaborate, actively-developed React build (that one is a plain static HTML bio page).

## Tech stack

- React 19.2 + TypeScript, built/served with Vite 8
- Tailwind CSS v4 via `@tailwindcss/vite`
- `clsx` / `tailwind-merge` for class composition, `react-icons` for icons
- No test runner or lint config found in `package.json` (only `dev`/`build`/`preview` scripts)
- Hosting: Netlify (static `dist/` build)

## Directory structure (top level)

```
nithin/
├── src/
│   ├── App.tsx              # page composition (Profile, Projects, Career, Metrics, Posts)
│   ├── main.tsx              # Vite/React entry point
│   ├── components/           # BlogCard, MetricsGrid, Profile, ProjectCard, SectionHeader, TimelineSection, ui/
│   ├── data/content.ts        # site copy/content (career, posts, projects, site meta)
│   ├── lib/
│   └── style.css
├── public/                   # images (nithin.jpeg, audit screenshots, icons, favicon)
├── design/stitch/             # currently empty locally (see "known blockers" below)
├── run.sh, deploy.sh          # real, working scripts
├── git.sh                      # placeholder stub — not implemented
├── gitpush.sh                   # the actual working commit/push script
├── stop.sh                      # stops the local Vite dev server
├── package.json, package-lock.json, tsconfig.json, vite.config.js
├── README.md, context.md, next steps.md, socials.MD
├── .clickup.json                # ClickUp task-tracking link
└── .netlify/                     # linked Netlify site + cached build config
```

## Build & deploy status

- **Local run**: `run.sh` does `npm install && npm run dev` — a real, working script. Vite's default dev port is `5173` (no override in `vite.config.js`, which only wires up the React and Tailwind plugins).
- **Deploy**: `deploy.sh` does `npm install && npm run build`, then `netlify deploy --prod --dir=dist --site=ff16fbf6-87b6-49ee-a71f-e2190e6d7890` — a real, working script.
- **Netlify link**: `.netlify/state.json` has `siteId: ff16fbf6-87b6-49ee-a71f-e2190e6d7890`, matching the `--site` flag in `deploy.sh`.
- **Cached Netlify build config** (`.netlify/netlify.toml`) records `publish = ".../Nhancio-projects/nithin/dist"` and `command = "npm run build"` — note the lowercase "projects" in that cached path doesn't match this directory's actual casing (`Nhancio-Projects`). This is dashboard-cached metadata (`publishOrigin/commandOrigin = "ui"`); `deploy.sh` doesn't rely on it (it passes `--dir=dist` explicitly), so it's a cosmetic inconsistency rather than a live blocker, but worth a `netlify link`/dashboard check if this cached config is ever depended on directly.
- **Git remote**: `origin` = `https://github.com/didigamnithin/glacier-portfolio.git` — a **different GitHub account** than sibling Nhancio projects (which use `github.com/nhancio/...`). This is intentional per project ownership, not a misconfiguration.
- **git.sh** here is the same unfilled placeholder stub as other projects in this fleet (`echo 'Placeholder for git.sh'`). The real commit/push logic lives in **`gitpush.sh`**: `git add .`, commit `"chore: automated commit"`, detect the default branch from `origin/HEAD` (falls back to `main` if that ref isn't set — confirmed: `refs/remotes/origin/HEAD` is currently *not* set in this local clone, so it does fall back to `main`, which matches the actual current branch), then `git push origin <branch>`.
- **Update (2026-07-27)**: `git.sh` and `deploy.sh` have been consolidated — `deploy.sh` now does push (folding in `gitpush.sh`'s logic) then the Netlify manual deploy, and `git.sh` is a thin `exec`-alias to `deploy.sh`; `gitpush.sh` and this bullet's description of the old placeholder are now superseded (README/this section not yet rewritten to match).

## Known blockers / rough edges

- **Substantial uncommitted local changes** as of this writing (`git status`/`git diff --stat`): the working tree has migrated away from a vanilla-JS Vite starter — `src/main.js` (515 lines) and `src/counter.js` are deleted, `design/stitch/DESIGN.md` and `design/stitch/code.html` are deleted (the `design/stitch/` folder is now empty on disk), and `package.json`, `vite.config.js`, `src/App.tsx`, `src/style.css` are modified. Untracked additions include `src/main.tsx`, `src/components/`, `src/data/`, `src/lib/`, `tsconfig.json`, and `public/nithin.jpeg`. In short: **the React/TypeScript rewrite exists locally but has not been committed or pushed yet** — `gitpush.sh`/`git push` needs to be run to land it on `didigamnithin/glacier-portfolio`.
- `next steps.md` lists "Initial project discovery and roadmap planning," "Verify core journey flow," and "Setup build and dependency configuration" as open items.
- No automated tests or CI configured.
- Cached Netlify build-path casing mismatch (see above) — low risk, not verified to cause an actual problem.
- I have not verified the live production deploy at the mapped custom domain reflects the current (uncommitted) React rewrite — treat live site content as unconfirmed until the pending changes are pushed and deployed.

## Third-party integrations

- **GitHub**: `didigamnithin/glacier-portfolio` (personal account, distinct from the `nhancio` org used elsewhere in this fleet).
- **Netlify**: site id `ff16fbf6-87b6-49ee-a71f-e2190e6d7890` (`.netlify/state.json`, also hardcoded in `deploy.sh`).
- **ClickUp**: task tracking via `.clickup.json` (list `Claude Desktop Projects`, parent task `86d3u97yz`).

## Next steps

See [`next steps.md`](./next%20steps.md) for the current TODO list, and [`socials.MD`](./socials.MD) for social/GTM notes.
