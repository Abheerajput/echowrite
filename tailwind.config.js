/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '320px', 'max': '639.99px'},
      },
    },
  },
  plugins: [],
}
