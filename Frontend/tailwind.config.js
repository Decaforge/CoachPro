/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          DEFAULT: '#0a0a0a',
          100: '#1a1a1a',
          200: '#1e1e1e',
          300: '#2a2a2a',
        },
        'gold': {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#B8860B',
        },
        'primary': {
          DEFAULT: '#00A8FF',
          light: '#5CC3FF',
          dark: '#0084CC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
