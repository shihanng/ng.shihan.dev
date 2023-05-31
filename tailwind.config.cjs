const preline = require("preline/plugin.js");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bright-gray": {
          DEFAULT: "#393E46",
        },
      },
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
        hand: ['"Permanent Marker"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), preline],
};
