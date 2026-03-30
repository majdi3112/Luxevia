/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F4C97A',
          goldSoft: '#FBE9C6',
          dark: '#050816'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        'soft-gold': '0 18px 45px rgba(244, 201, 122, 0.25)'
      }
    }
  },
  plugins: []
};

