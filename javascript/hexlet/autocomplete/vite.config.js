import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    proxy: {
      '/countries': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        bypass: (request) => {
          request.url = '/mock.json';
        },
      },
    }
  }
})
