/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#0EA5E9',
          goldSoft: '#0284C7',
          dark: '#F0F9FF'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        'soft-gold': '0 18px 45px rgba(14, 165, 233, 0.22)'
      }
    }
  },
  plugins: []
};
