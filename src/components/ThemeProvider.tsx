import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { defaultTheme, getTheme, type Theme } from '@/lib/themes';

const STORAGE_KEY = 'hello-theme';

interface ThemeContextValue {
  theme: Theme;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setThemeId: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<string>(() =>
    localStorage.getItem(STORAGE_KEY) ?? defaultTheme.id,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ theme: getTheme(themeId), setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
