import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps the build working from a GitHub Pages subpath.
  base: './',
  plugins: [react(), tailwindcss()],
})
