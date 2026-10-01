/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Noto Sans Thai"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        thai: ['"Noto Sans Thai"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0f172a',
        },
        house: {
          amber: '#f59e0b',
          emerald: '#10b981',
          rose: '#f43f5e',
          sky: '#0284c7'
        }
      }
    },
  },
  plugins: [],
}
