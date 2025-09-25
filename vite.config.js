import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configure base for GitHub Pages project site and output to docs/
export default defineConfig({
  base: '/serenitys-keys-landing/',
  plugins: [react()],
  server: {
    port: 5174,
  },
  preview: {
    port: 4174,
  },
  build: {
    outDir: 'docs',
  },
});
