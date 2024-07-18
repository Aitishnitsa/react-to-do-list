/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Itim", 'cursive'],
      },
      colors: {
        black: '#111111',
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

