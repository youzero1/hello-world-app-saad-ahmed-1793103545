---
status: implemented
title: Hello World app
---

The project is currently empty (only README.md and env.example), so the plan scaffolds the full app from scratch and then adds a polished "Hello, World!" page.

1. Create `package.json` with the app name, ESM module type, and the standard dependencies: react, react-dom, @tanstack/react-router, @tanstack/router-plugin, vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite, typescript, and type packages. Expected outcome: `npm install` resolves all dependencies.
2. Create `tsconfig.json` and `tsconfig.node.json` with strict TypeScript settings and the `@/` path alias pointing at `src/`. Expected outcome: TypeScript compiles the project with path aliases working.
3. Create `vite.config.ts` registering the TanStack Router plugin (before the React plugin), the React plugin, and the Tailwind CSS v4 Vite plugin, plus the `@/` alias resolution. Expected outcome: `npm run dev` starts the dev server.
4. Create `index.html` at the project root with a root div and a module script pointing at `/src/main.tsx`. Expected outcome: the dev server serves the page shell.
5. Create `src/styles/global.css` starting with exactly `@import "tailwindcss";` as the single stylesheet. Expected outcome: Tailwind utilities are available app-wide.
6. Create `src/main.tsx` that imports `src/styles/global.css`, builds the TanStack Router from the generated route tree, and renders it into the root div. Expected outcome: the app boots and routing is live.
7. Create `src/routes/__root.tsx` as the app shell rendering an `<Outlet />` inside a full-screen, centered layout (dark gradient background, clean typography). Expected outcome: every page shares a polished full-screen shell.
8. Create `src/routes/index.tsx` as the home route displaying a large, centered "Hello, World!" headline with a subtle subtitle and a small accent detail (e.g. a glowing badge or gradient text) using Tailwind classes only. Expected outcome: visiting `/` shows an attractive hello world page.
9. Run a typecheck/build to confirm everything compiles and the generated `src/routeTree.gen.ts` is produced by the router plugin (never edited by hand). Expected outcome: the app builds cleanly and renders in the browser.
