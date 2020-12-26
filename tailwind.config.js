const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
