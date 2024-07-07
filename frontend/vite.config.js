import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "https://apiklinikkodam.medisimed.com/"
    },
  },
  plugins: [react()],
  base: '/'
})