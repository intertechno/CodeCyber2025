import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_TARGET = "https://localhost:7165";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false, // allow self-signed dev certs
      },
    }
  }
});
