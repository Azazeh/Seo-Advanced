const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
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
        md: "920px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [],
};
