import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'build', // Changed output directory to 'build' for deployment on Vercel
    sourcemap: true, // Enable source maps for debugging
    assetsDir: 'assets', // Specify directory for static assets
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for 'src' directory
    },
  },
  base: './', // Ensure correct path for subfolder deployments
  server: {
    port: 3000,
    open: true, // Open the browser automatically on server start
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], // Tailwind CSS and autoprefixer setup
    },
  },
});
