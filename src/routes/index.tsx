import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/components/ThemeProvider';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* Glowing badge accent */}
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide shadow-[0_0_30px_-5px] transition-colors duration-700 ${theme.badge}`}
      >
        <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${theme.badgeDot}`} />
        A brand new beginning
      </span>

      <div className="flex flex-col gap-4">
        <h1
          className={`bg-gradient-to-r bg-clip-text text-6xl font-extrabold tracking-tight text-transparent transition-all duration-700 sm:text-7xl md:text-8xl ${theme.headline}`}
        >
          Hello
        </h1>
        <p className={`mx-auto max-w-md text-base transition-colors duration-700 sm:text-lg ${theme.subtitle}`}>
          Every great app starts with two little words. This one just did.
        </p>
      </div>
    </div>
  );
}
