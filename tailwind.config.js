const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoserif: ["Noto Serif", "sans-serif"],
      },
    },
    colors: {
      black: colors.black,
      purple: "#6A4D3E",
      pink: "#C4A484",
      darkpurple: "#C4A484",
      white: colors.white,
      lightblack: "#6A4D3E",
      bg: "#6A4D3E",
      dp: "#C4A484",
      gray: colors.gray,
      transparent: colors.transparent,
    },
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "920px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    transitionProperty: ["hover", "focus"],
    extend: {
      transform: ["hover", "focus", "active"],
    },
  },
  plugins: [],
}
