import { defineConfig } from 'vite'

export default defineConfig({
  base: '/weblow-threejs/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: {
      origin: '*'
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  }
})