import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

// Initializing the theme based on the user's system preference.
const initializeTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  useThemeStore.getState().setDarkMode(prefersDark.matches);
};

// Calling the initialize function once the app loads.
if (typeof window !== "undefined") {
  initializeTheme();
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true,

  toggleDarkMode: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),

  setDarkMode: (isDark: boolean) =>
    set({
      isDarkMode: isDark,
    }),
}));
