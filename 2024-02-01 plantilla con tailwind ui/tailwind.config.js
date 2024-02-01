/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
      // themes: [
      //   "light",
      //   "dark",
      //   "cupcake",
      //   "bumblebee",
      //   "emerald",
      //   "corporate",
      //   "synthwave",
      //   "retro",
      //   "cyberpunk",
      //   "valentine",
      //   "halloween",
      //   "garden",
      //   "forest",
      //   "aqua",
      //   "lofi",
      //   "pastel",
      //   "fantasy",
      //   "wireframe",
      //   "black",
      //   "luxury",
      //   "dracula",
      //   "cmyk",
      //   "autumn",
      //   "business",
      //   "acid",
      //   "lemonade",
      //   "night",
      //   "coffee",
      //   "winter",
      //   "dim",
      //   "nord",
      //   "sunset",
      // ]
      daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/theming/themes")["synthwave"],
              primary: "blue",
              secondary: "teal",
            },
            dark: {
             ...require("daisyui/src/theming/themes")["cyberpunk"],
              primary: "blue",
              secondary: "teal",
            },
          },]
  }
}

