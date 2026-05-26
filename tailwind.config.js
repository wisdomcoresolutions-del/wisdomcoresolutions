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
          950: '#06070a',
          900: '#0d1117',
          800: '#141b26',
          700: '#192734'
        },
        accent: {
          500: '#6ee7b7',
          400: '#7dd3fc',
          300: '#a5b4fc'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(110, 231, 183, 0.15)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
