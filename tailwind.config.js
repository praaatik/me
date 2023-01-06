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
          "mint-selection": "rgba(119, 64, 105, 0.9)",
          "lilac-selection": "rgba(76, 58, 105, 0.9)",
          lilac: "#4c3a69",
          peach: "#774069",
          selection: "rgba(250, 250, 250, 0.99)",
          mid: "hsl(0, 0%, 80%)",
          marshmellow: "#835478",
        },
        light: {
          selection: "rgba(38, 37, 40, 0.99)",
          peach: "#f2c3c0",
          biscuit: "hsl(26, 18%, 61%)",
          oat: "hsl(17, 12%, 77%)",
          rose: "#dc849b",
          rose_lighter: "hsl(344, 56%, 80%)",
          sea: "hsl(189, 58%, 65%)",
          "background-1": "#fafafa",
          "background-2": "#f4f5f5",
          "background-3": "#ecedee",
          mid: "hsl(0, 0%, 80%)",
        },
      },
      fontFamily: {
        "noto-serif": ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
