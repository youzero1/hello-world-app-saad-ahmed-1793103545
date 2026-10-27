import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-lg">Hello World app</p>
    </div>
  );
}
