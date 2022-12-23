/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        'xgrey-1': "rgba(51, 51, 51, 0.541)",
        'text-color': "rgba(199, 206, 219, 0.6)"
      }
    },
  },
  plugins: [],
}
