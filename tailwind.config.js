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
        // Primary brand colors for Budgey.ai
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main brand green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Secondary colors
        secondary: {
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
        },
        // Financial colors
        income: '#22c55e',
        expense: '#ef4444',
        savings: '#3b82f6',
        investment: '#8b5cf6',
        // Background colors
        background: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          dark: '#0a0a0a',
        },
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#64748b',
          light: '#94a3b8',
          dark: '#ededed',
        },
        // Border colors
        border: '#e2e8f0',
        // Dark mode specific colors
        dark: {
          primary: '#0f172a',    // Dark background
          secondary: '#1e293b',  // Dark card background
          tertiary: '#334155',   // Darker elements
          border: '#475569',     // Dark borders
          text: {
            primary: '#f1f5f9',   // Primary text in dark mode
            secondary: '#cbd5e1',  // Secondary text in dark mode
            muted: '#94a3b8',     // Muted text in dark mode
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

