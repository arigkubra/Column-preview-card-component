/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'big': ['Big Shoulders Display', 'cursive'],
      'lexend': ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      colors: {
        'c-orange': 'hsl(31, 77%, 52%)',
        'c-green': 'hsl(184, 100%, 22%)',
        'c-dark-green': 'hsl(179, 100%, 13%)',
        'c-gray': 'hsl(0, 0%, 95%)',
        'c-light-gray': 'hsla(0, 0%, 100%, 0.75)',
      },
    },
  },
  plugins: [],
}

