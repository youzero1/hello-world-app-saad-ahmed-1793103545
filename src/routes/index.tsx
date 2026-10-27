import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {/* Glowing badge accent */}
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-200 shadow-[0_0_30px_-5px] shadow-indigo-500/40">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300" />
        A brand new beginning
      </span>

      <div className="flex flex-col gap-4">
        <h1 className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          Hello, World!
        </h1>
        <p className="mx-auto max-w-md text-base text-slate-400 sm:text-lg">
          Every great app starts with two little words. This one just did.
        </p>
      </div>
    </div>
  );
}
