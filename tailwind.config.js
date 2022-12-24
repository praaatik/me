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
          "background-1": "hsl(274, 4%, 16%)",
          "background-2": "hsl(274, 4%, 18%);",
          "background-3": "hsl(274, 4%, 20%)",
          "mint-selection": "rgba(119, 64, 105, 0.9)",
          "lilac-selection": "rgba(76, 58, 105, 0.9)",
          lilac: "hsl(263, 29%, 32%)",
          peach: "hsl(316, 30%, 36%)",
          selection: "rgba(250, 250, 250, 0.99)",
          mid: "hsl(0, 0%, 80%)",
          marshmellow: "hsl(314, 22%, 42%)",
        },
        light: {
          selection: "rgba(38, 37, 40, 0.99)",
          peach: "hsl(4, 65%, 85%)",
          biscuit: "hsl(26, 18%, 61%)",
          oat: "hsl(17, 12%, 77%)",
          rose: "hsl(344, 56%, 69%)",
          sea: "hsl(189, 58%, 65%)",
          "background-1": "hsl(210, 4%, 98%)",
          "background-2": "hsl(210, 4%, 96%)",
          "background-3": "hsl(210, 4%, 93%)",
          mid: "hsl(0, 0%, 80%)",
        },
      },
    },
  },
  plugins: [],
};
