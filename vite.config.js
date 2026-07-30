import { defineConfig } from 'vite'

export default defineConfig({
  base: '/weblow-threejs/',
  server: {
    host: true,
    allowedHosts: true,
    cors: true
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})