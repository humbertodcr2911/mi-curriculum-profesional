import React from 'react';
import { Sun, Moon } from 'lucide-react';

// ThemeToggle now expects `theme` ("light"|"dark"|"system") and `setTheme`
const ThemeToggle = ({ theme, setTheme }) => {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

  const toggle = () => {
    // Simple toggle between light and dark (explicit). If user wants system, they can clear stored preference elsewhere.
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;