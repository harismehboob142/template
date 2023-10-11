import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': '/src/services',
      '@pages': '/src/pages',
      '@constants': '/src/constants'
    }
  }
})
