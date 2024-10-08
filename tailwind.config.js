/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'button-pulse': 'button-pulse 1s infinite',
        'fade-in-left': 'fade-in-left 1.25s',
        'fade-in-right': 'fade-in-right 1.25s',
      },
      fontFamily: {
        sans: ['Anek Bangla', 'system-ui'],
        sora: ['Sora', 'sans-serif'],
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'button-pulse': {
          from: { 'box-shadow': '0 0 0 0 rgba(126, 217, 86, 0.5)' },
          to: { 'box-shadow': '0 0 0 20px rgba(126, 217, 86, 0)' },
        },
        'fade-in-left': {
          from: { opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in-right': {
          from: { opacity: '0', transform: 'translate3d(100%, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
