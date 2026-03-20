/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lifemate: {
          50: '#f7fbfd',
          100: '#eef7fc',
          200: '#d9e6ee',
          300: '#a5d8f3',
          400: '#67b8e8',
          500: '#1fa9d9',
          600: '#1d9bf0',
          700: '#0e5a8a',
          800: '#0f172a',
          900: '#475569',
        },
        lifemateGreen: {
          500: '#14c94a',
          700: '#0d8a32',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 132, 199, 0.16)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
