const preline = require("preline/plugin.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bright-gray": {
          DEFAULT: "#393E46",
        },
      },
    },
  },
  plugins: [preline],
};
