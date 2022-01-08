import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import WindiCSS from 'vite-plugin-windicss'
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    WindiCSS(),
    svelte()
  ],
})
