/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        champagne: { 50: '#FBF8F2', 100: '#F6F0E4', 200: '#EDE3CF', 300: '#E0D1B4' },
        emerald: { 700: '#145445', 800: '#0F4034', 900: '#0B3027', 950: '#071F19' },
        bronze: { 400: '#C2A06A', 500: '#A9803F', 600: '#8A6530', 700: '#6E4F26' },
        ink: { 900: '#1B1813', 700: '#3A352C', 500: '#6A6254' }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: { eyebrow: '0.22em' },
      maxWidth: { prose: '62ch' }
    }
  },
  plugins: []
};
