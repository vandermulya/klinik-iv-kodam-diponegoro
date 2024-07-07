import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('API URL:', process.env.VITE_API_URL);

export default defineConfig({
  server: {
    proxy: {
      '/api': process.env.VITE_API_URL,
    },
  },
  plugins: [react()],
  base: '/'
});