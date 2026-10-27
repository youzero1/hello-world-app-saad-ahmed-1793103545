import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// The app shell: a full-screen dark gradient backdrop shared by every page.
// <Outlet /> is where the matched page renders.
function RootLayout() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 font-sans text-slate-100 antialiased">
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <main className="relative z-10 flex w-full items-center justify-center px-6">
        <Outlet />
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <p className="text-lg text-slate-300">This page does not exist.</p>
      <Link
        to="/"
        className="text-sm text-indigo-300 underline underline-offset-4 transition-colors hover:text-indigo-200"
      >
        Go to the home page
      </Link>
    </div>
  );
}
