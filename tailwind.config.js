/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9517A',
        'primary-hover': '#E2466C',
        secondary: '#5DBA89',
        'secondary-hover': '#457F60',
        cream: '#F6F5EB',
        background: '#FBFAF9',
        black: '#141B17',
        text: '#414D46',
        'cream-border': '#E8E5CF'
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px'
      },
      backgroundImage: {
        'tentang-mask': "url('/public/image/mask.png')"
      },
      backgroundPosition: {
        topRight1: 'top right -2px'
      },
      boxShadow: {
        pink: '0px 4px 7px rgba(249, 81, 122, 0.35)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
