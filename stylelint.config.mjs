/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  rules: {
    // Tailwind CSS v4 with @tailwindcss/vite
    // requires string notation for @import "tailwindcss"
    // See: https://github.com/tailwindlabs/tailwindcss/issues/17724
    "import-notation": null,
  },
  ignoreFiles: ["dist/**"],
};
