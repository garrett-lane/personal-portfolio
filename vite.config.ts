import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served at the root of gthompson.me (custom domain), not a GitHub project-page subpath.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
