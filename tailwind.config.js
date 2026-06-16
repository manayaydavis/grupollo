/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#111111",
        brandDarkGray: "#282B28",
        brandGold: "#F2850F",
        brandRed: "#E31E24",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
