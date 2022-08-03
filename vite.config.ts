import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  const env = { ...process.env }

  return {
    define: {
      'process.env': env
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
})
