/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '318px', 'max': '768.99px'},
      },
    },
  },
  plugins: [],
}
