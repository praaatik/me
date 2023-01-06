/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      square: "square",
      disc: "disc",
    },

    extend: {
      colors: {
        dark: {
          "background-1": "#29272a",
          "background-2": "#2e2c30",
          "background-3": "#333135",
          "mint-selection": "#774069",
          "lilac-selection": "#4c3a69",
          lilac: "#4c3a69",
          peach: "#774069",
          selection: "#fafafa",
          mid: "#cccccc",
          marshmellow: "#835478",
        },
        light: {
          selection: "#262528",
          peach: "#f2c3c0",
          biscuit: "#ad998a",
          oat: "#cbc1bd",
          rose: "#dc849b",
          rose_lighter: "#e9afbf",
          sea: "#72cada",
          "background-1": "#fafafa",
          "background-2": "#f4f5f5",
          "background-3": "#ecedee",
          mid: "#cccccc",
        },
      },
      fontFamily: {
        "noto-serif": ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
