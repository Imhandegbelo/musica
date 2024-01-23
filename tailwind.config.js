/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: [{ bg: " #1D2123", secondary: "#FACD66", light: "#EFEEE0" }],
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        search: 'url("../src/assets/search.svg")',
        collection: 'url("../src/assets/charts/big_tomorrow.jpeg") no-repeat left top;'
      }
    },
  },
  plugins: [],
};
