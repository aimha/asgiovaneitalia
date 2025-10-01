import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    publicDir: './static/',
    base: env.VITE_ROUTER_BASE,
    plugins: [solid()],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      outDir: './dist', 
      emptyOutDir: true,
      sourcemap: true
    },
  };
});
