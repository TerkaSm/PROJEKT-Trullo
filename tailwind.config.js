/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  purge: [
    "./public/*.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '420px',
      },
    },
  },
  plugins: [],
}

