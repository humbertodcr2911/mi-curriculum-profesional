/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Slate 900
          light: "#1e293b",   // Slate 800
          dark: "#020617",    // Slate 950
        },
        secondary: {
          DEFAULT: "#3b82f6", // Blue 500
          light: "#60a5fa",   // Blue 400
          dark: "#2563eb",    // Blue 600
        },
        accent: {
          DEFAULT: "#8b5cf6", // Violet 500
          light: "#a78bfa",   // Violet 400
          dark: "#7c3aed",    // Violet 600
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        muted: {
          DEFAULT: "#64748b", // Slate 500
          dark: "#94a3b8",    // Slate 400
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'premium-gradient': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}