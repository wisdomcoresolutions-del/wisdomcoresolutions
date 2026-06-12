/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        core: {
          950: '#fafafa', // zinc-50 off-white main background
          900: '#ffffff', // pure white card background
          800: '#e4e4e7', // zinc-200 border / divider
          700: '#f4f4f5'  // zinc-100 secondary backgrounds
        },
        accent: {
          600: '#09090b', // zinc-950 deep charcoal text/headings
          500: '#09090b', // zinc-950 dark buttons background
          400: '#27272a', // zinc-800 hover state
          300: '#71717a'  // zinc-500 secondary text
        }
      },
      boxShadow: {
        glow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
