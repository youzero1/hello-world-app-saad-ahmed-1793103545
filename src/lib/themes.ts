export interface Theme {
  id: string;
  name: string;
  /** Gradient dot shown in the switcher. */
  swatch: string;
  /** Shell background + base text color. */
  shell: string;
  glowTop: string;
  glowLeft: string;
  glowRight: string;
  badge: string;
  badgeDot: string;
  /** Headline gradient stops (used with bg-gradient-to-r + bg-clip-text). */
  headline: string;
  subtitle: string;
  /** Switcher panel styling. */
  panel: string;
  /** Ring color for the active swatch. */
  ring: string;
  link: string;
}

export const themes: Theme[] = [
  {
    id: 'midnight',
    name: 'Midnight',
    swatch: 'bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-cyan-300',
    shell: 'bg-slate-950 text-slate-100',
    glowTop: 'bg-indigo-500/20',
    glowLeft: 'bg-fuchsia-500/10',
    glowRight: 'bg-cyan-400/10',
    badge: 'border-indigo-400/30 bg-indigo-400/10 text-indigo-200 shadow-indigo-500/40',
    badgeDot: 'bg-indigo-300',
    headline: 'from-indigo-300 via-fuchsia-300 to-cyan-300',
    subtitle: 'text-slate-400',
    panel: 'border-white/10 bg-white/5',
    ring: 'ring-indigo-300',
    link: 'text-indigo-300 hover:text-indigo-200',
  },
  {
    id: 'sunrise',
    name: 'Sunrise',
    swatch: 'bg-gradient-to-br from-amber-400 via-rose-400 to-orange-300',
    shell: 'bg-slate-50 text-slate-900',
    glowTop: 'bg-amber-400/30',
    glowLeft: 'bg-rose-400/20',
    glowRight: 'bg-orange-300/30',
    badge: 'border-amber-500/30 bg-amber-500/10 text-amber-700 shadow-amber-500/30',
    badgeDot: 'bg-amber-500',
    headline: 'from-amber-500 via-rose-500 to-orange-500',
    subtitle: 'text-slate-500',
    panel: 'border-slate-900/10 bg-white/60',
    ring: 'ring-amber-500',
    link: 'text-amber-600 hover:text-amber-500',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    swatch: 'bg-gradient-to-br from-cyan-400 via-sky-400 to-teal-300',
    shell: 'bg-cyan-950 text-cyan-50',
    glowTop: 'bg-cyan-400/20',
    glowLeft: 'bg-sky-500/10',
    glowRight: 'bg-teal-400/10',
    badge: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200 shadow-cyan-500/40',
    badgeDot: 'bg-cyan-300',
    headline: 'from-cyan-300 via-sky-300 to-teal-200',
    subtitle: 'text-cyan-100/60',
    panel: 'border-white/10 bg-white/5',
    ring: 'ring-cyan-300',
    link: 'text-cyan-300 hover:text-cyan-200',
  },
  {
    id: 'forest',
    name: 'Forest',
    swatch: 'bg-gradient-to-br from-emerald-400 via-lime-300 to-teal-300',
    shell: 'bg-emerald-950 text-emerald-50',
    glowTop: 'bg-emerald-400/20',
    glowLeft: 'bg-lime-400/10',
    glowRight: 'bg-teal-400/10',
    badge: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200 shadow-emerald-500/40',
    badgeDot: 'bg-emerald-300',
    headline: 'from-emerald-300 via-lime-200 to-teal-300',
    subtitle: 'text-emerald-100/60',
    panel: 'border-white/10 bg-white/5',
    ring: 'ring-emerald-300',
    link: 'text-emerald-300 hover:text-emerald-200',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    swatch: 'bg-gradient-to-br from-orange-400 via-rose-400 to-amber-300',
    shell: 'bg-rose-950 text-rose-50',
    glowTop: 'bg-orange-500/20',
    glowLeft: 'bg-rose-500/10',
    glowRight: 'bg-amber-400/10',
    badge: 'border-orange-400/30 bg-orange-400/10 text-orange-200 shadow-orange-500/40',
    badgeDot: 'bg-orange-300',
    headline: 'from-orange-300 via-rose-300 to-amber-200',
    subtitle: 'text-rose-100/60',
    panel: 'border-white/10 bg-white/5',
    ring: 'ring-orange-300',
    link: 'text-orange-300 hover:text-orange-200',
  },
];

export const defaultTheme = themes[0];

export function getTheme(id: string | null | undefined): Theme {
  return themes.find((t) => t.id === id) ?? defaultTheme;
}
