import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    filename: '[name]-[hash].js',
    sourcemap: true,
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/styles.scss";
        `,
      },
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       prependData: `@import "./src/assets/scss/styles.scss";`,
  //     },
  //   },
  // },
});
