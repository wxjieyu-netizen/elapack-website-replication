/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F3F5EF',
          100: '#E7ECE0',
          200: '#D2DCC7',
          300: '#B9C8AA',
          400: '#A3B18A',
          500: '#8D9F72',
          600: '#73865A',
          700: '#5B6C47',
          800: '#445238',
          900: '#303A28',
        },
      },
      boxShadow: {
        soft: '0 16px 45px rgba(48, 58, 40, 0.08)',
        luxe: '0 24px 70px rgba(48, 58, 40, 0.14)',
      },
      letterSpacing: {
        'widest-xl': '0.24em',
      },
    },
  },
  plugins: [],
};
