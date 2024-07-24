import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/core/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/core/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/core/views', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/core/stores', import.meta.url)),
    }
  }
})
