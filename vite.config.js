import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Ensures the app is accessible externally
    port: process.env.PORT || 3000, // Bind to Render's PORT or default to 3000
  },
  plugins: [react()],
});
