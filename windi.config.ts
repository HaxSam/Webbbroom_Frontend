import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import formsPlugin from "@tailwindcss/forms";

export default defineConfig({
  purge: false,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
      }
    },
  },
  plugins: [
    formsPlugin,
  ],
  extract: {
    include: [
      "./index.html",
      "./src/**/*.{svelte,js,ts,css}"
    ],
    exclude: [
      "node_modules/**/*",
      ".git/**/*",
    ],
  }
});