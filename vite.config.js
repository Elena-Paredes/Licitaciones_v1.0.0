// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Licitaciones_v1.0.0/', 
  server: {
    port: 3000,
  },
});
