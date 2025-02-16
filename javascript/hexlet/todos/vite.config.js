import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/api/tasks': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        bypass: (request) => {
          if (request.method === 'GET') {
            request.url = '/get.json';
          } else if (request.method === 'POST') {
            request.url = '/post.json';
          } else if (request.method === 'PATCH') {
            request.url = request.url.endsWith('finish') ? '/finish.json' : '/active.json';
          }
        },
      },
    }
  }
})
