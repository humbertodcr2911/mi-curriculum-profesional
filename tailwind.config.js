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
          DEFAULT: "#ffffff", // Light mode bg
          dark: "#020617",    // Dark mode bg (Slate 950)
        },
        secondary: {
          DEFAULT: "#0f172a", // Light mode text (Slate 900)
          dark: "#f8fafc",    // Dark mode text (Slate 50)
        },
        accent: {
          DEFAULT: "#0ea5e9", // Sky Blue
          light: "#38bdf8",
          dark: "#0284c7",
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      borderRadius: {
        'premium': '2px',
        'editorial': '0px',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'editorial-gradient': 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))',
        'accent-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}