import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  publicDir: './static/',
  base: "/asgiovaneitalia/",
  plugins: [
    solidPlugin(),
    tailwindcss()
  ],
  server: {port: 3000},
  build: {
    target: 'esnext',
    outDir: './dist', 
    emptyOutDir: true,
    sourcemap: true
  },
});
