/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Verdana", "sans-serif"],
      serif: ['"Crimson Text"', "serif"],
      title: ['"Berkshire Swash"', "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
