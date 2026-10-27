import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// The app shell: a full-screen themed backdrop shared by every page.
// <Outlet /> is where the matched page renders.
function RootLayout() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}

function Shell() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden font-sans antialiased transition-colors duration-700 ${theme.shell}`}
    >
      {/* Soft ambient glows */}
      <div
        className={`pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl transition-colors duration-700 ${theme.glowTop}`}
      />
      <div
        className={`pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full blur-3xl transition-colors duration-700 ${theme.glowLeft}`}
      />
      <div
        className={`pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full blur-3xl transition-colors duration-700 ${theme.glowRight}`}
      />

      <ThemeSwitcher />

      <main className="relative z-10 flex w-full items-center justify-center px-6">
        <Outlet />
      </main>
    </div>
  );
}

function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <p className={`text-lg ${theme.subtitle}`}>This page does not exist.</p>
      <Link
        to="/"
        className={`text-sm underline underline-offset-4 transition-colors ${theme.link}`}
      >
        Go to the home page
      </Link>
    </div>
  );
}
