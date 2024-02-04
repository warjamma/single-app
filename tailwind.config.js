/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#1d8de3",
          50: "#4fbfff",
          100: "#45b5ff",
          200: "#3babff",
          300: "#31a1f7",
          400: "#2797ed",
          500: "#1d8de3",
          600: "#1383d9",
          700: "#0979cf",
          800: "#006fc5",
          900: "#0065bb",
        },
        "system-gray": {
          1: "rgb(142, 142, 147)",
          light: {
            2: "rgb(174, 174, 178)",
            3: "rgb(199, 199, 204)",
            4: "rgb(209, 209, 214)",
            5: "rgb(229, 229, 234)",
            6: "rgb(242, 242, 247)",
          },
          dark: {
            2: "rgb(99, 99, 102)",
            3: "rgb(72, 72, 74)",
            4: "rgb(58, 58, 60)",
            5: "rgb(44, 44, 46)",
            6: "rgb(28, 28, 30)",
          },
        },
        info: {
          light: "",
          dark: "",
        },
        warning: {
          light: "",
          dark: "",
        },
        sucess: {
          light: "#FFC5161A",
          dark: "#FFC516",
        },
        danger: {
          light: "",
          dark: "",
        },
        icon: "",
        heading: {
          light: "",
          dark: "",
        },
        paragraph: {
          light: "",
          dark: "",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
