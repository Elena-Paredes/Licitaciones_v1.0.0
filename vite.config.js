// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Licitaciones_v1.0.0/', // Asegúrate de que esto coincida con el nombre del repositorio
});
