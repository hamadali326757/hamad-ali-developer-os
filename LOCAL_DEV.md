# Running locally (Windows / macOS / Linux)

This project is built on TanStack Start + Vite 7 + Tailwind v4. Tailwind v4 and
Rollup ship **platform-specific native binaries** as optional dependencies
(`lightningcss`, `@rollup/rollup-*`). npm has a long-standing bug
([#4828](https://github.com/npm/cli/issues/4828)) where a `package-lock.json`
generated on one OS prevents those native binaries from installing on another
OS. The symptom on Windows is:

```
Cannot find module '../lightningcss.win32-x64-msvc.node'
Cannot find module '@rollup/rollup-win32-x64-msvc'
```

## Recommended: use Bun (zero issues)

```bash
bun install
bun run dev
```

Bun is what Lovable uses and there is a `bun.lockb` committed.

## If you must use npm on Windows

Run **once** after cloning, and again any time you see the error above:

```powershell
# PowerShell
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

```bash
# Git Bash / WSL
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Do **not** commit the resulting `package-lock.json` — it will break installs
for teammates on other operating systems. The repo intentionally ships only
`bun.lockb`.

## Node version

Use Node **20 LTS or newer** (`node -v` should print `v20.x` or `v22.x`).
Older Node versions cannot load Vite 7 / Tailwind v4 native binaries.

## Build / preview

```bash
bun run build       # production build
bun run build:dev   # dev-mode build (used by Lovable preview)
bun run preview     # serve the production build locally
```

## Deployment

The `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` which targets
**Cloudflare Workers**. The simplest deploy paths:

- **Lovable Publish** — click *Publish* in the editor. Zero config.
- **Cloudflare Pages/Workers** — `npx wrangler deploy` (uses the included
  `wrangler.jsonc`).
- **Vercel / Netlify** — supported but requires switching the adapter. Ask
  before doing this; it changes the build target.
