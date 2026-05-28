/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: '#0c4a6e',
          amber: '#fde68a',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
