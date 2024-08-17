/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '318px', 'max': '768.99px'},
        'sm': {'min': '769px', 'max': '1024px'}, // Small screens, usually tablets
      'md': {'min': '1025px', 'max': '1280px'}, // Medium screens, usually desktops
      'lg': {'min': '1281px', 'max': '1536px'}, // Large screens, larger desktops
      'xl': {'min': '1537px'}, 
      },
    },
  },
  plugins: [],
}

