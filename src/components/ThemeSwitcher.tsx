import { themes } from '@/lib/themes';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setThemeId } = useTheme();

  return (
    <div
      className={`fixed right-5 top-5 z-20 flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-md transition-colors duration-700 ${theme.panel}`}
    >
      <span className={`text-xs font-medium tracking-wide ${theme.subtitle}`}>Theme</span>
      <div className="flex items-center gap-2">
        {themes.map((t) => {
          const isActive = t.id === theme.id;
          return (
            <button
              key={t.id}
              type="button"
              aria-label={`Switch to ${t.name} theme`}
              title={t.name}
              onClick={() => setThemeId(t.id)}
              className={`h-6 w-6 rounded-full transition-all duration-300 hover:scale-110 ${t.swatch} ${
                isActive ? `scale-110 ring-2 ${theme.ring}` : 'opacity-70 hover:opacity-100'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
