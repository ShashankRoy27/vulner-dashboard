import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true, // Allows external access
    port: process.env.PORT || 3000, // Binds to the Render port
  },
  preview: {
    allowedHosts: ["cnapp-dashboard.onrender.com"], // Add your Render URL here
  },
  plugins: [react()],
});